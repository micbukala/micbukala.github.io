'use client';

import React, { useRef, useEffect, useState } from 'react';

// --- TYPY KONFIGURACYJNE ---
export interface AnchorPoint {
  x: number; // 0.0 - 1.0 (procent szerokości)
  y: number; // 0.0 - 1.0 (procent wysokości)
}

export interface LayerConfig {
  color: string;
  connectionDist: number;
  oscillationRange: number; // Zasięg drgania głównych punktów
  transientCount: number;   // Ilość znikających punktów
  anchors: AnchorPoint[];   // Główne punkty kształtujące górę
}

interface MountainPlexusProps {
  backgroundImageUrl: string;
  layers: LayerConfig[];
  animationSpeed?: number; // Globalny mnożnik prędkości (domyślnie 1.0)
  className?: string;
}

// --- KLASA PUNKTU (Logika wewnątrz komponentu) ---
class Point {
  isAnchor: boolean;
  config: LayerConfig & { activeAnchors?: Point[] };
  
  // Pozycje
  baseXPercent: number;
  baseYPercent: number;
  x: number = 0;
  y: number = 0;
  
  // Ruch
  phase: number;
  oscSpeed: number;
  vx: number = 0;
  vy: number = 0;
  
  // Życie (dla transient)
  life: number = 0;
  maxLife: number = 0;
  opacity: number = 1;

  constructor(isAnchor: boolean, xPercent: number, yPercent: number, config: any, width: number, height: number) {
    this.isAnchor = isAnchor;
    this.config = config;
    this.baseXPercent = xPercent;
    this.baseYPercent = yPercent;
    
    // Inicjalizacja pozycji
    this.x = xPercent * width;
    this.y = yPercent * height;

    // Losowe parametry oscylacji
    this.phase = Math.random() * Math.PI * 2;
    this.oscSpeed = 0.02 + Math.random() * 0.02;

    if (!isAnchor) {
      this.respawn(width, height);
      // Losujemy początkowy stan życia, żeby nie wszystkie pojawiły się naraz
      this.life = Math.random() * this.maxLife;
    }
  }

  update(time: number, speedFactor: number, width: number, height: number) {
    if (this.isAnchor) {
      // 1. ANCHOR: Oscylacja w miejscu
      const targetBaseX = this.baseXPercent * width;
      const targetBaseY = this.baseYPercent * height;

      const offsetX = Math.sin(time * this.oscSpeed + this.phase) * this.config.oscillationRange;
      const offsetY = Math.cos(time * this.oscSpeed * 0.8 + this.phase) * (this.config.oscillationRange * 0.8);

      this.x = targetBaseX + offsetX;
      this.y = targetBaseY + offsetY;
      this.opacity = 1.0;
    } else {
      // 2. TRANSIENT: Ruch swobodny i cykl życia
      this.x += this.vx * speedFactor;
      this.y += this.vy * speedFactor;
      this.life += 1.0 * speedFactor;

      // Obsługa przezroczystości (Fade In / Fade Out)
      if (this.life < 20) {
        this.opacity = this.life / 20;
      } else if (this.life > this.maxLife - 20) {
        this.opacity = (this.maxLife - this.life) / 20;
      } else {
        this.opacity = 1;
      }

      // Śmierć i odrodzenie
      if (this.life >= this.maxLife) {
        this.respawn(width, height);
      }
    }
  }

  respawn(width: number, height: number) {
    this.life = 0;
    this.maxLife = 100 + Math.random() * 150;
    this.vx = (Math.random() - 0.5) * 0.5;
    this.vy = (Math.random() - 0.5) * 0.5;
    this.opacity = 0;

    // Logika spawnowania pomiędzy anchorami
    const anchors = this.config.activeAnchors;
    if (anchors && anchors.length > 1) {
      const idx = Math.floor(Math.random() * (anchors.length - 1));
      const p1 = anchors[idx];
      const p2 = anchors[idx + 1];

      const t = Math.random();
      const lerpX = p1.baseXPercent + (p2.baseXPercent - p1.baseXPercent) * t;
      const lerpY = p1.baseYPercent + (p2.baseYPercent - p1.baseYPercent) * t;

      const jitter = 0.15;
      this.baseXPercent = lerpX + (Math.random() - 0.5) * jitter;
      this.baseYPercent = lerpY + (Math.random() - 0.5) * jitter;
    } else {
      // Fallback
      this.baseXPercent = Math.random();
      this.baseYPercent = Math.random();
    }
    
    this.x = this.baseXPercent * width;
    this.y = this.baseYPercent * height;
  }
}

const MountainPlexus: React.FC<MountainPlexusProps> = ({
  backgroundImageUrl,
  layers,
  animationSpeed = 1.0,
  className = '',
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Używamy useRef do przechowywania stanu animacji, aby uniknąć re-renderów
  const animationState = useRef({
    time: 0,
    layersData: [] as { config: any, points: Point[] }[],
    width: 0,
    height: 0
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Inicjalizacja punktów
    const initPoints = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      
      animationState.current.width = width;
      animationState.current.height = height;

      animationState.current.layersData = layers.map(layerConfig => {
        const points: Point[] = [];
        const anchorsRefs: Point[] = [];
        const configWithRefs = { ...layerConfig, activeAnchors: anchorsRefs };

        // 1. Tworzymy Anchory
        layerConfig.anchors.forEach(pos => {
          const p = new Point(true, pos.x, pos.y, configWithRefs, width, height);
          points.push(p);
          anchorsRefs.push(p);
        });

        // 2. Tworzymy Transient Points
        for(let i = 0; i < layerConfig.transientCount; i++) {
          const p = new Point(false, 0, 0, configWithRefs, width, height);
          points.push(p);
        }

        return { config: layerConfig, points };
      });
    };

    let animationFrameId: number;

    const render = () => {
      const { width, height, layersData } = animationState.current;
      
      // Update czasu globalnego
      animationState.current.time += 1.0 * animationSpeed;
      const time = animationState.current.time;

      ctx.clearRect(0, 0, width, height);

      layersData.forEach(layer => {
        const { config, points } = layer;

        // 1. Update logiki punktów
        points.forEach(p => p.update(time, animationSpeed, width, height));

        // 2. Rysowanie
        ctx.lineWidth = 1;

        for (let i = 0; i < points.length; i++) {
          const p1 = points[i];
          if (p1.opacity <= 0.01) continue;

          // Rysuj punkt
          ctx.fillStyle = config.color;
          ctx.globalAlpha = p1.opacity;
          ctx.beginPath();
          ctx.arc(p1.x, p1.y, p1.isAnchor ? 3 : 1.5, 0, Math.PI * 2);
          ctx.fill();

          // Rysuj połączenia
          for (let j = i + 1; j < points.length; j++) {
            const p2 = points[j];
            if (p2.opacity <= 0.01) continue;

            const dx = p1.x - p2.x;
            const dy = p1.y - p2.y;
            const distSq = dx * dx + dy * dy;
            const maxDistSq = config.connectionDist * config.connectionDist;

            if (distSq < maxDistSq) {
              const dist = Math.sqrt(distSq);
              const distAlpha = 1 - dist / config.connectionDist;
              const finalAlpha = distAlpha * Math.min(p1.opacity, p2.opacity);

              if (finalAlpha > 0) {
                ctx.strokeStyle = config.color;
                ctx.globalAlpha = finalAlpha;
                ctx.beginPath();
                ctx.moveTo(p1.x, p1.y);
                ctx.lineTo(p2.x, p2.y);
                ctx.stroke();
              }
            }
          }
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    const handleResize = () => {
      initPoints();
    };

    window.addEventListener('resize', handleResize);
    
    // Start
    initPoints();
    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [layers, animationSpeed]); // Re-init jeśli zmienią się warstwy lub logika, ale speed jest obsługiwany wewnątrz pętli

  return (
    <div 
      className={`relative w-full h-screen overflow-hidden ${className}`}
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />
      <canvas ref={canvasRef} className="absolute inset-0 block pointer-events-none" />
      {/* Children content rendered here */}
    </div>
  );
};

export default MountainPlexus;