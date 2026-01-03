import type { Metadata } from 'next'
import Image from 'next/image'
import Header from '@/components/layout/Header'

export const metadata: Metadata = {
  title: 'About - Michał Bukała',
  description: 'Geologist specializing in fluid-rock interactions and deformation processes. 9+ years of fieldwork experience across diverse terrains.',
  keywords: ['geology', 'earth sciences', 'fluid-rock interactions', 'fieldwork', 'research'],
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#27303F]">
      <Header />

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
                          Expertise in <br />
                          electron backscatter diffraction (EBSD), <br />
                          electron microprobe (EPMA), <br />
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