import type { Metadata } from 'next'
import Image from 'next/image'
import Sidebar from '@/components/layout/Sidebar'

export const metadata: Metadata = {
  title: 'About - Michał Bukała',
  description: 'Geologist specializing in fluid-rock interactions and deformation processes. 9+ years of fieldwork experience across diverse terrains.',
  keywords: ['geology', 'earth sciences', 'fluid-rock interactions', 'fieldwork', 'research'],
}

export default function AboutPage() {
  return (
    <>
      {/* Fixed Background */}
      <div className="fixed inset-0 -z-20 bg-slate-900" />

      <Sidebar />

      <main className="min-h-screen">
        <div className="w-full px-8 lg:pl-[300px] lg:pr-8 py-16 pt-24 lg:pt-16">
          <div className="max-w-4xl mx-auto lg:mx-0 lg:ml-20">
            <h1 className="text-4xl font-bold mb-12 text-slate-100">About</h1>
            
            {/* Profile Section */}
            <div className="flex flex-col lg:flex-row gap-8 mb-16">
              <div className="flex-shrink-0 lg:w-1/3">
                <Image 
                  src="/images/profile/MB1.jpeg" 
                  alt="Michał Bukała, PhD" 
                  width={420} 
                  height={420}
                  className="rounded-lg shadow-lg w-full max-w-sm mx-auto lg:mx-0"
                  priority
                />
              </div>
              <div className="lg:w-2/3 lg:pl-8">
                <div className="mb-6">
                  <h2 className="text-3xl font-bold mb-2 text-slate-100">Michał Bukała, PhD</h2>
                  <p className="text-slate-400 text-sm mb-4">
                    [ENG: <em>Mee-how Boo-kah-lah</em>]
                  </p>
                </div>
                
                <div className="space-y-6 text-lg leading-relaxed text-slate-300">
                  <p className="text-xl text-teal-400 font-medium">
                    I really like mountains—they&apos;re big and rocky.
                  </p>
                  
                  <p>
                    Also, I am a geologist specializing in fluid-rock interactions and the deformation 
                    processes occurring in environments ranging from the deep Earth to the near surface. 
                    My approach integrates hands-on fieldwork, laboratory studies, and advanced 
                    numerical/thermodynamic modeling to uncover the intricate dynamics of our planet.
                  </p>
                </div>
              </div>
            </div>

            {/* Experience Sections */}
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              {/* Fieldwork Experience */}
              <div className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-800/70 transition-colors border border-slate-700/50">
                <h3 className="text-xl font-bold mb-4 text-teal-400">Fieldwork Experience</h3>
                <div className="space-y-3 text-slate-300">
                  <div className="flex items-start gap-3">
                    <span className="text-teal-400 mt-1">•</span>
                    <p className="text-sm leading-relaxed">
                      9+ years of experience across diverse terrains of Norway, Sweden, 
                      Svalbard, Greenland, Slovakia, Greece, and Spain.
                    </p>
                  </div>
                </div>
              </div>

              {/* Research Contributions */}
              <div className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-800/70 transition-colors border border-slate-700/50">
                <h3 className="text-xl font-bold mb-4 text-teal-400">Research Contributions</h3>
                <div className="space-y-3 text-slate-300">
                  <div className="flex items-start gap-3">
                    <span className="text-teal-400 mt-1">•</span>
                    <p className="text-sm leading-relaxed">
                      Co-applicant and researcher in projects exceeding €2 million in funding.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-teal-400 mt-1">•</span>
                    <p className="text-sm leading-relaxed">
                      Extensive experience as an editor, author, and peer reviewer for academic research papers.
                    </p>
                  </div>
                </div>
              </div>


            {/* Technical Proficiency */}
            <div className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-800/70 transition-colors border border-slate-700/50">
              <h3 className="text-xl font-bold mb-4 text-teal-400">Technical Proficiency</h3>
              <div className="space-y-3 text-slate-300">
                <div className="flex items-start gap-3">
                  <span className="text-teal-400 mt-1">•</span>
                  <p className="text-sm leading-relaxed">
                    Python and Matlab for scientific computing and data analysis.
                  </p>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </main>
    </>
  )
}