import Header from '@/components/layout/Header'
import Image from 'next/image'

export default function ResearchPage() {
  return (
    <div className="min-h-screen bg-[#27303F]">
      <Header />

      <main className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
            <h1 className="text-4xl font-bold mb-8 text-slate-100">Research</h1>
            
            {/* Intro Section */}
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-4 mb-20">
              <div className="space-y-6 text-slate-300 lg:w-[450px] flex-shrink-0">
                <p className="leading-relaxed text-lg">
                  I conduct multidisciplinary research in <br />
                  <span className="font-bold text-slate-100">petrology and (micro)structural geology, <br /></span>
                  focusing on processes at convergent plate boundaries.
                </p>
                <p className="leading-relaxed text-lg">
                  I am particularly interested in the feedback between <br />
                  <span className="font-bold text-slate-100">fluid-rock interactions and deformation, </span>
                  and their mechanical and geochronological implications.
                </p>
                <p className="leading-relaxed text-lg">
                  Check out my <a href="/publications" className="text-[#89C3F9] hover:text-[#CDE5FC] hover:underline transition-colors">publications</a> for more details.
                </p>
              </div>
              <div className="flex-grow flex flex-col justify-center gap-6">
                <p className="text-2xl font-medium text-slate-200 text-center mb-2">
                  My approach combines:
                </p>
                <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
                  <div className="flex flex-col items-center gap-3 group">
                    <div className="w-20 h-20 flex items-center justify-center bg-white rounded-full p-4 border border-slate-600/30 group-hover:border-[#89C3F9]/30 transition-all duration-300">
                      <Image 
                        src="/images/mountain.png" 
                        alt="Fieldwork" 
                        width={68} 
                        height={68} 
                        className="w-full h-full object-contain opacity-90 group-hover:opacity-100 transition-opacity" 
                      />
                    </div>
                    <span className="text-lg text-slate-300 text-center font-medium group-hover:text-[#89C3F9] transition-colors">Fieldwork</span>
                  </div>
                  <div className="flex flex-col items-center gap-3 group">
                    <div className="w-20 h-20 flex items-center justify-center bg-white rounded-full p-4 border border-slate-600/30 group-hover:border-[#89C3F9]/30 transition-all duration-300">
                      <Image 
                        src="/images/lab-equipment.png" 
                        alt="Laboratory studies" 
                        width={68} 
                        height={68}
                        className="w-full h-full object-contain opacity-90 group-hover:opacity-100 transition-opacity" 
                      />
                    </div>
                    <span className="text-lg text-slate-300 text-center font-medium group-hover:text-[#89C3F9] transition-colors">Laboratory<br/>studies</span>
                  </div>
                  <div className="flex flex-col items-center gap-3 group">
                    <div className="w-20 h-20 flex items-center justify-center bg-white rounded-full p-4 border border-slate-600/30 group-hover:border-[#89C3F9]/30 transition-all duration-300">
                      <Image 
                        src="/images/quantum.png" 
                        alt="Numerical modeling" 
                        width={68} 
                        height={68} 
                        className="w-full h-full object-contain opacity-90 group-hover:opacity-100 transition-opacity" 
                      />
                    </div>
                    <span className="text-lg text-slate-300 text-center font-medium group-hover:text-[#89C3F9] transition-colors">Numerical & Thermodynamic modeling</span>
                  </div>
                </div>
              </div>
            </div>

            </div>

            {/* Current Project Section */}
            <section className="bg-[#202A3B] w-full py-16 mb-16">
              <div className="max-w-6xl mx-auto px-4 sm:px-8">
              <h2 className="text-2xl font-bold text-slate-100 mb-8">
                What I&apos;m working on
              </h2>
              
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-shrink-0 mt-16"> {/* Adjust margin-top to align image vertically */}
                  <Image
                    src="/images/momentum_logo.png"
                    alt="Project Logo"
                    width={300}
                    height={150}
                    className="object-contain w-[600px]" // Adjust width here
                  />
                </div>

                <div className="flex-1 space-y-4">
                
                  <p className="text-slate-300 leading-relaxed">
                    <div className="text-xl font-bold text-slate-100 mb-2">Postdoctoral Fellowship (IACT-CSIC, Spain)</div>
                    <i>Jan 2025 - Dec 2028 </i><br /><br />
                    I am developing numerical and thermodynamic modeling tools to better understand volatile exchanges and redox reactions in Earth
                    &apos;s deep interior under high-pressure and low-to-high-temperature conditions.
                    This project focuses on integrating Gibbs free energy minimization algorithms (GFEM) with reactive transport models, 
                    leveraging AI techniques. <br />
                  </p>
                  <p className="text-slate-300 leading-relaxed">
                    <div className="mt-4 pt-4 border-t border-slate-700/50 text-s text-slate-500">
                    This project is funded by the Momentum Programme (CSIC, Spain). Project Number: MMT24-IACT-01
                    </div>
                  </p>
                </div>
              </div>
              </div>
            </section>

            <div className="max-w-6xl mx-auto px-4 sm:px-8">
            {/* Collaborative Projects Section */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-slate-100 mb-8">
                Collaborative Projects
              </h2>

              <div className="space-y-8">
                {/* RUSTED */}
                <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 hover:bg-slate-800/70 transition-colors flex flex-col md:flex-row gap-6 items-start">
                  <div className="flex-shrink-0 w-full md:w-auto flex justify-center md:justify-start">
                    <Image
                      src="/images/project_rusted2.png"
                      alt="RUSTED Project"
                      width={200}
                      height={200}
                      className="object-contain w-[250px]" // Adjust width here
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-100 mb-2">
                      RUSTED: Role of ultramafic rocks in the cycle of volatiles of the deep Earth
                    </h3>
                    <p className="text-[#89C3F9] text-sm mb-4">
                      PI&apos;s: <a href="https://scholar.google.com/citations?user=OTiGbr1Od1oC&hl=en" target="_blank" rel="noopener noreferrer" className="hover:underline">C.J. Garrido</a> & <a href="https://scholar.google.com/citations?user=5x5JgpIAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="hover:underline">J.A. Padrón-Navarta</a> (IACT-CSIC, Spain)
                    </p>
                    <div className="text-slate-300 space-y-4 leading-relaxed">
                      <p>
                        The RUSTED project aims to enhance our understanding of the role of ultramafic rocks in the deep cycling of 
                        two key volatile elements: sulfur and carbon. 
                      </p>
                      <p> 
                        <span className="font-bold text-slate-100"> My work focuses on integrating electron backscatter 
                        diffraction (EBSD) with advanced thermodynamic modeling to investigate a novel mechanism 
                        of carbon retention during high-pressure deserpentinization </span> and 
                        the interaction of serpentinites with reduced COHS fluids.
                      </p>
                      <p className="italic text-slate-400">
                        I presented these results during an invited talk at <a href="https://meetingorganizer.copernicus.org/EGU24/EGU24-12237.html" target="_blank" rel="noopener noreferrer" className="text-[#89C3F9] hover:text-[#CDE5FC] hover:underline transition-colors">EGU 2024</a>
                      </p>
                    </div>
                    <div className="mt-4 pt-4 border-t border-slate-700/50 text-xs text-slate-500">
                      Project nr: PID2022-136471N-B-C21 & C22 • Funded by: MICIN/ AEI/10.13039/501100011033 and FEDER program; Spain
                    </div>
                  </div>
                </div>

                {/* GarNeat */}
                <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 hover:bg-slate-800/70 transition-colors flex flex-col md:flex-row gap-6 items-start">
                  <div className="flex-shrink-0 w-full md:w-auto flex justify-center md:justify-start">
                    <Image
                      src="/images/project_pierun.png"
                      alt="GarNeat Project"
                      width={200}
                      height={200}
                      className="object-contain w-[250px]" // Adjust width here
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-100 mb-2">
                      GarNeat: Exploring shock metamorphic microstructures in garnets
                    </h3>
                    <p className="text-[#89C3F9] text-sm mb-4">PI: <a href="https://scholar.google.com/citations?user=7q-hqIcAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="hover:underline">K. J. Gajewska</a> (Lund University, Sweden)</p>
                    <div className="text-slate-300 space-y-4 leading-relaxed">
                      <p>
                        The GarNeat project aim to characterize features observed in naturally and experimentally 
                        shocked (subjected to meteoritic impact events) garnets by integrating electron backscatter 
                        diffraction (EBSD) data with computational analyses of fracture networks that will allow 
                        to re-evaluate shock-induced fracturing that has already been shown in few previous studies. 
                      </p>
                      <p>
                        <span className="font-bold text-slate-100"> My work here focuses on developing 
                        a python-based tool for qualitative analyses of fracture networks. </span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Advancing in-situ white mica */}
                <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 hover:bg-slate-800/70 transition-colors flex flex-col md:flex-row gap-6 items-start">
                  <div className="flex-shrink-0 w-full md:w-auto flex justify-center md:justify-start">
                    <Image
                      src="/images/project_mica.png"
                      alt="White Mica Project"
                      width={200}
                      height={200}
                      className="object-contain w-[250px]" // Adjust width here
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-100 mb-2">
                      Advancing <i>in situ</i> white mica <sup>40</sup>Ar/<sup>39</sup>Ar and Rb-Sr geochronology as tools to resolve tectonic processes
                    </h3>
                    <p className="text-[#89C3F9] text-sm mb-4">PI: <a href="https://www.researchgate.net/profile/Christopher-Barnes-7" target="_blank" rel="noopener noreferrer" className="hover:underline">C.J. Barnes</a> (University of British Columbia - Okanagan, Canada)</p>
                    <div className="text-slate-300 space-y-4 leading-relaxed">
                      <p>
                        The project aims to advance white mica geochronology by leveraging recent 
                        analytical developments that enable high-spatial resolution dating of individual 
                        grains preserved in their structural context. Despite these advancements, 
                        white mica has not yet been fully developed as a reliable geochronometer. 
                        This research is designed to explore and harness its potential through 
                        state-of-the-art <i>in situ</i> <sup>40</sup>Ar/<sup>39</sup>Ar and Rb-Sr geochronological techniques.
                      </p>
                      <p>
                        <span className="font-bold text-slate-100"> My work here focuses on investigating white mica 
                          microstructures using electron backscatter diffraction (EBSD) to provide insights into 
                          lattice deformation and its potential implications for geochronology. </span>
                      </p>
                    </div>
                    <div className="mt-4 pt-4 border-t border-slate-700/50 text-xs text-slate-500">
                      Project nr: 2021/40/C/ST10/00264 • Funded by: NCN - National Science Centre Poland
                    </div>
                  </div>
                </div>

                {/* Closure of the Alpine Tethys Ocean */}
                <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 hover:bg-slate-800/70 transition-colors flex flex-col md:flex-row gap-6 items-start">
                  <div className="flex-shrink-0 w-full md:w-auto flex justify-center md:justify-start">
                    <Image
                      src="/images/project_tatry.png"
                      alt="Alpine Tethys Project"
                      width={200}
                      height={200}
                      className="object-contain w-[250px]" // Adjust width here
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-100 mb-2">
                      Closure of the Alpine Tethys Ocean recorded in the Pieniny Klippen Belt of the Western Carpathians
                    </h3>
                    <p className="text-[#89C3F9] text-sm mb-4">PI: <a href="https://scholar.google.com/citations?user=1Ol3Sh8AAAAJ&hl=pl" target="_blank" rel="noopener noreferrer" className="hover:underline">J. Majka</a> (Uppsala University, Sweden & AGH University of Krakow, Poland)</p>
                    <div className="text-slate-300 space-y-4 leading-relaxed">
                      <p>
                        The main themes of the research project includes (1) geophysical imaging of the deep 
                        crust and shallow mantle within and across the Western Carpathians; (2) documenting remnants 
                        of the Alpine Tethys and establishing time constraints for the formation of the suture zone; 
                        and (3) formulation of a new evolutionary model of Variscan crystalline basement, disappearance
                         of the Alpine Tethys Ocean and build-up of the Western Carpathians.
                      </p>
                      <p>
                        <span className="font-bold text-slate-100"> My work here focuses on understanding the juxtaposition of Variscan crystalline basement 
                        and its Alpine reactivation using the integrating electron backscatter diffraction (EBSD), 
                        thermodynamic modelling and <sup>40</sup>Ar/<sup>39</sup>Ar and Rb-Sr geochronology. </span>
                      </p>
                    </div>
                    <div className="mt-4 pt-4 border-t border-slate-700/50 text-xs text-slate-500">
                      Project nr: 2021/43/B/ST10/02312 • Funded by: NCN - National Science Centre Poland
                    </div>
                  </div>
                </div>
              </div>
            </section>
        </div>
      </main>
    </div>
  )
}
