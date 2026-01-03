"use client";

import React, { useEffect, useRef } from 'react';
import { Network } from 'vis-network';
import { DataSet } from 'vis-data';
import networkData from '@/data/MB_prelim5.json';

interface VOSViewerItem {
  id: number;
  label: string;
  x: number;
  y: number;
  cluster: number;
  weights: {
    Links: number;
    "Total link strength": number;
    Occurrences: number;
  };
  scores: {
    "Avg. norm. citations": number | null;
    "Avg. pub. year": number | null;
    "Avg. citations": number | null;
  };
}

interface VOSViewerLink {
  source_id: number;
  target_id: number;
  strength: number;
}

interface NetworkGraphProps {
  className?: string;
}

const NetworkGraph = ({ className = "" }: NetworkGraphProps) => {
  const container = useRef<HTMLDivElement>(null);
  const networkRef = useRef<Network | null>(null);

  useEffect(() => {
    if (container.current && networkData.network) {
      // 1. Process Nodes
      const nodes = new DataSet(
        networkData.network.items.map((item: VOSViewerItem) => ({
          id: item.id,
          label: item.label,
          x: item.x * 500, // Scale coordinates
          y: -item.y * 500, // Invert Y axis to match Cartesian coordinates (Up is positive)
          value: item.weights.Occurrences, // Node size based on occurrences
          group: item.cluster.toString(),
          title: `
            <div style="padding: 5px; color: #333;">
              <strong>${item.label}</strong><br/>
              Occurrences: ${item.weights.Occurrences}<br/>
              Avg. Citations: ${item.scores["Avg. citations"]?.toFixed(2) || 0}<br/>
              Cluster: ${item.cluster}
            </div>
          ` // HTML Tooltip
        }))
      );

      // 2. Process Edges
      // Sort links by strength descending and take top 150
      const sortedLinks = [...networkData.network.links].sort((a, b) => b.strength - a.strength).slice(0, 150);

      const edges = new DataSet(
        // @ts-expect-error - vis-data types
        sortedLinks.map((link: VOSViewerLink) => ({
          from: link.source_id,
          to: link.target_id,
          value: link.strength, // Line thickness based on strength
          color: { opacity: 0.2, inherit: 'from' }
        }))
      );

      const data = { nodes, edges };

      // 3. Configuration options
      const options = {
        nodes: {
          shape: 'dot',
          font: {
            size: 24, // Increased font size
            face: 'Arial',
            color: '#cbd5e1', // text-slate-300
            strokeWidth: 2,
            strokeColor: '#1e293b', // slate-800 (background color)
            vadjust: -3 // Move label closer to node
          },
          scaling: {
            min: 10,
            max: 30,
            label: {
              enabled: true,
              min: 18,
              max: 30,
              maxVisible: 30,
              drawThreshold: 5
            }
          },
          borderWidth: 2,
          shadow: true
        },
        edges: {
          color: { inherit: 'from', opacity: 0.2 },
          smooth: {
            type: 'continuous',
            roundness: 0
          },
          scaling: {
            min: 1,
            max: 10
          }
        },
        physics: {
          enabled: false // Disable physics to use VOSviewer coordinates
        },
        interaction: {
          tooltipDelay: 200,
          zoomView: true,
          dragView: true,
          hover: true,
          zoomSpeed: 0.5
        }
      };

      // 4. Initialize Network
      // @ts-expect-error - vis-network types might be tricky with direct import
      networkRef.current = new Network(container.current, data, options);

      // Add drag constraint
      networkRef.current.on("dragEnd", function () {
        const viewPosition = networkRef.current!.getViewPosition();
        const limit = 1000; // Limit panning range
        
        let newX = viewPosition.x;
        let newY = viewPosition.y;
        let changed = false;

        if (viewPosition.x > limit) { newX = limit; changed = true; }
        if (viewPosition.x < -limit) { newX = -limit; changed = true; }
        if (viewPosition.y > limit) { newY = limit; changed = true; }
        if (viewPosition.y < -limit) { newY = -limit; changed = true; }

        if (changed) {
          networkRef.current!.moveTo({
            position: { x: newX, y: newY },
            animation: true
          });
        }
      });

      // 5. Add Event Listeners for Dimming Effect
      networkRef.current.on("hoverNode", function (params) {
        const nodeId = params.node;
        const connectedNodes = networkRef.current!.getConnectedNodes(nodeId) as number[];
        const allNodes = nodes.getIds();
        
        // Create update arrays
        const nodesToUpdate: { id: string | number; color?: { opacity: number }; opacity?: number }[] = [];
        const edgesToUpdate: { id: string | number; color?: { opacity: number }; opacity?: number; width?: number }[] = [];

        // Dim all nodes except selected and connected
        allNodes.forEach((id: string | number) => {
          if (id !== nodeId && !connectedNodes.includes(id as number)) {
            nodesToUpdate.push({ id, color: { opacity: 0.1 }, opacity: 0.1 });
          }
        });

        // Dim all edges
        const allEdges = edges.getIds();
        const connectedEdges = networkRef.current!.getConnectedEdges(nodeId);

        allEdges.forEach((id: string | number) => {
          if (!connectedEdges.includes(id)) {
            edgesToUpdate.push({ id, color: { opacity: 0.05 }, opacity: 0.05, width: 1 });
          } else {
            // Highlight connected edges
            edgesToUpdate.push({ id, color: { opacity: 1 }, opacity: 0.0, width: 5 });
          }
        });

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        nodes.update(nodesToUpdate as any);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        edges.update(edgesToUpdate as any);
      });

      networkRef.current.on("blurNode", function () {
        // Reset all nodes
        const allNodes = nodes.getIds();
        const nodesToUpdate = allNodes.map((id: string | number) => ({ 
          id, 
          color: { opacity: 1 }, 
          opacity: 1 
        }));
        
        // Reset all edges
        const allEdges = edges.getIds();
        const edgesToUpdate = allEdges.map((id: string | number) => ({ 
          id, 
          color: { opacity: 0.2, inherit: 'from' }, 
          opacity: 0.2,
          width: undefined // Reset width to default (based on value)
        }));

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        nodes.update(nodesToUpdate as any);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        edges.update(edgesToUpdate as any);
      });
    }

    return () => {
      if (networkRef.current) {
        networkRef.current.destroy();
      }
    };
  }, []);

  return (
    <div className={`relative ${className}`}>
      <div 
        ref={container} 
        className="w-full h-full rounded-lg shadow-sm"
        style={{ minHeight: '400px' }}
      />
    </div>
  );
};

export default NetworkGraph;
