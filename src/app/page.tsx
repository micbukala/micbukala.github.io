'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Header from '@/components/layout/Header'

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen">
      {/* Fixed Background */}
      <div className="fixed inset-0 -z-20">
        <div 
          className="absolute inset-0 bg-cover bg-right bg-no-repeat"
          style={{
            backgroundImage: `url('/images/background/tatry4.jpg')`,
          }}
        />
        <div className="absolute inset-0 bg-[#485365]/40" />
      </div>

      {/* Header - appears on scroll */}
      <div 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 transform ${
          isScrolled ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}
      >
        <Header />
      </div>
      
      {/* Landing Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 pt-32">
        {/* Content */}
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
        {/* Avatar */}
        <div className="w-32 h-32 mx-auto rounded-full bg-slate-700 mb-8 flex items-center justify-center overflow-hidden ring-4 ring-slate-600/50 shadow-2xl">
          <Image 
            src="/images/profile/MB1.jpeg"
            alt="Michał Bukała" 
            width={80}
            height={80}
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Name */}
        <h1 className="text-4xl lg:text-5xl font-bold mb-2 text-slate-100 leading-tight">
          Michał Bukała
        </h1>


        {/* Divider */}
        <div className="w-16 h-0.5 bg-slate-200/50 mx-auto mb-6" />

        {/* Roles */}
        <div className="text-xl lg:text-xl text-slate-300 mb-40">
          <p>Geologist • Scientist • Developer</p>
        </div>
            
            {/* Scroll Indicator */}
            <div className="animate-bounce text-slate-300">
              <p className="text-sm flex flex-col items-center">
                Scroll to explore
                <svg className="w-6 h-6 mt-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </p>
            </div>
        </div>
      </section>

      {/* About Section (Content from previous page.tsx) */}
      <section id="about" className="relative z-10 py-20 px-4 sm:px-8 min-h-screen" style={{ backgroundColor: '#27303F' }}>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center lg:text-left text-slate-100">About</h2>
            
            {/* Profile Section */}
            <div className="flex flex-col lg:flex-row gap-8 mb-16 items-start">
              <div className="flex-shrink-0 mx-auto lg:mx-0 w-full max-w-[400px]">
                <Image 
                  src="/images/profile/MB2.png" 
                  alt="Michał Bukała, PhD" 
                  width={400} 
                  height={800}
                  style={{ width: '100%', height: 'auto' }}
                  className="rounded-lg shadow-lg"
                />
              </div>
              
              <div className="flex flex-col">
                <div className="mb-6 text-center lg:text-left">
                  <h3 className="text-3xl lg:text-5xl font-bold mb-2 text-slate-100 leading-tight">Michał Bukała, PhD</h3>
                  <p className="text-xl lg:text-xl text-slate-400">
                    [ENG: <em>Mee-how Boo-kah-lah</em>]
                  </p>
                </div>
                
                <div className="space-y-6 text-lg leading-relaxed text-slate-300">
                  <p>
                    I am a geologist and software developer currently working as a 
                    postdoctoral research fellow at the Andalusian Earth Science Institute of The Spanish National Research Council (IACT-CSIC).
                  </p>
                  <p>
                    I specialize in fluid-rock interactions and deformation processes 
                    across environments ranging from the deep Earth to the near surface.
                  </p>
                  <p>
                    I completed my PhD at AGH University of Science and Technology (Poland) in 2021, 
                    where I studied the metamorphic and structural evolution of the Caledonian orogen in northern Sweden and Norway.
                  </p>
                </div>
              </div>
            </div>

            {/* Experience Sections */}
            <div className="space-y-8 mt-16">
              <div className="flex flex-col md:flex-row gap-2 md:gap-8 border-t border-slate-700/50 pt-8">
                <div className="md:w-1/3 flex-shrink-0">
                  <h4 className="text-xl font-bold text-[#89C3F9]">Fieldwork experience</h4>
                </div>
                <div className="md:w-2/3">
                  <p className="text-lg leading-relaxed text-slate-300">
                    9+ years of field experience across diverse terrains of <br />
                    N Sweden, N Norway, Svalbard, NE Greenland, Slovakia, Greece, and Spain.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-2 md:gap-8 border-t border-slate-700/50 pt-8">
                <div className="md:w-1/3 flex-shrink-0">
                  <h4 className="text-xl font-bold text-[#89C3F9]">Research Impact</h4>
                </div>
                <div className="md:w-2/3">
                  <p className="text-lg leading-relaxed text-slate-300">
                    Co-applicant and researcher in projects exceeding €2 million in funding. 
                    Extensive experience as an author, editor, and peer reviewer for academic research papers.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-2 md:gap-8 border-t border-slate-700/50 pt-8">
                <div className="md:w-1/3 flex-shrink-0">
                  <h4 className="text-xl font-bold text-[#89C3F9]">Analytical Skills</h4>
                </div>
                <div className="md:w-2/3">
                  <p className="text-lg leading-relaxed text-slate-300">
                    Expertise in
                    electron backscatter diffraction (EBSD), 
                    electron microprobe (EPMA), 
                    mass spectrometry (LA-ICP-MS).
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-2 md:gap-8 border-t border-slate-700/50 pt-8">
                <div className="md:w-1/3 flex-shrink-0">
                  <h4 className="text-xl font-bold text-[#89C3F9]">Computational Skills:</h4>
                </div>
                <div className="md:w-2/3">
                  <p className="text-lg leading-relaxed text-slate-300">
                    Proficient in Python for scientific computing, data analysis, and visualization, <br />
                    Skilled in MATLAB for electron backscatter diffraction data processing, <br />
                    Developer of software for automated thermodynamic and isotopic modeling.
                  </p>
                </div>
              </div>
            </div>
          </div>
      </section>

      {/* Get in Touch Section */}
      <section className="py-20 px-4 sm:px-8" style={{ backgroundColor: '#202A3B' }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <h2 className="text-4xl font-bold text-slate-100">Get in touch</h2>
          
          <div className="flex gap-6">
            <a href="mailto:michal.bukala@csic.es" className="hover:opacity-80 transition-opacity">
              <Image 
                src="/images/mail_logo.png" 
                alt="Email" 
                width={48} 
                height={48} 
                className="w-12 h-12 object-contain"
              />
            </a>
            <a href="https://www.linkedin.com/in/micha%C5%82-buka%C5%82a-3a13798a/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <Image 
                src="/images/linkedin_logo.png" 
                alt="LinkedIn" 
                width={48} 
                height={48} 
                className="w-12 h-12 object-contain"
              />
            </a>
            <a href="https://github.com/micbukala" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <Image 
                src="/images/github_logo.png" 
                alt="GitHub" 
                width={48} 
                height={48} 
                className="w-12 h-12 object-contain"
              />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
