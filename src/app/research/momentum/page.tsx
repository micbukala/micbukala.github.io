'use client'

import Image from 'next/image'
import Sidebar from '@/components/layout/Sidebar'

export default function MomentumProjectPage() {
  return (
    <>
      {/* Fixed Background */}
      <div className="fixed inset-0 -z-20 bg-[#485365]" />

      <Sidebar />

      <main className="min-h-screen">
        <div className="w-full px-8 lg:pl-[300px] lg:pr-8 py-16 pt-24 lg:pt-16">
          <div className="max-w-4xl mx-auto lg:mx-0 lg:ml-20">
            
            {/* Header with Logo */}
            <div className="flex justify-center mb-12 bg-white/5 p-8 rounded-2xl border border-slate-700/50">
              <Image
                src="/images/project_logo_dark.png"
                alt="Momentum Project Logo"
                width={400}
                height={200}
                className="object-contain"
                priority
              />
            </div>

            {/* Content Sections */}
            <div className="space-y-12">
              
              {/* What's it about? */}
              <section>
                <h2 className="text-3xl font-bold text-[#89C3F9] mb-6 flex items-center gap-3">
                  <span className="w-2 h-8 bg-[#89C3F9] rounded-full"></span>
                  What&apos;s it about?
                </h2>
                <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700/50 backdrop-blur-sm space-y-6 text-lg text-slate-300 leading-relaxed">
                  <p>
                    Earth shows how a planet’s internal geodynamics can strongly influence its outer layers —the atmosphere and oceans— affecting climate, habitability, and even the origin of life. This connection depends on how volatile elements (like COHNS, especially oxygen) move between the Earth’s deep interior and surface.
                  </p>
                  <p>
                    While Earth’s initial volatile inventory was set early in its formation, recent studies show that the current state of the atmosphere and hydrosphere results from a delicate balance between the release of volatiles and their return via subduction zones. These exchanges also affect how the Earth’s interior behaves mechanically.
                  </p>
                  <p>
                    Understanding this feedback is a major scientific challenge, as it involves complex, evolving physical and chemical processes over different timescales and depths. Although geodynamic and thermodynamic modeling tools have improved, they still struggle to fully capture the impact of dehydration and melting on volatile transfer.
                  </p>
                </div>
              </section>

              {/* How we do it? */}
              <section>
                <h2 className="text-3xl font-bold text-[#89C3F9] mb-6 flex items-center gap-3">
                  <span className="w-2 h-8 bg-[#89C3F9] rounded-full"></span>
                  How we do it?
                </h2>
                <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700/50 backdrop-blur-sm space-y-6 text-lg text-slate-300 leading-relaxed">
                  <p>
                    With this project we aim to develop strategies to integrate:
                  </p>
                  
                  <div className="bg-slate-900/50 p-6 rounded-xl border-l-4 border-[#89C3F9]">
                    <h3 className="text-xl font-semibold text-slate-100 mb-2">
                      Aqueous fluid thermodynamics and geodynamic models of subduction zones
                    </h3>
                  </div>

                  <p>
                    For this, we use Gibbs free energy minimization (GFEM) algorithms. These algorithms utilize an apparent Gibbs free energy as a descriptor of the energetic behavior (i.e., stability) of a phase, which is a function of pressure (P) and temperature (T):
                  </p>
                </div>
              </section>

            </div>
          </div>
        </div>
      </main>
    </>
  )
}
