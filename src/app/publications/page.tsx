'use client'

import Image from 'next/image'
import Header from '@/components/layout/Header'
import publicationsData from '@/data/publications.json'
import NetworkGraph from '@/components/NetworkGraph'

export default function Publications() {
  return (
    <div className="min-h-screen bg-[#27303F]">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="pt-24 pb-16 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto">
          
            <h1 className="text-4xl font-bold text-slate-100 mb-8">Publications</h1>

            {/* Combined Network Graph and Stats Section */}
            <section className="mb-12 bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 backdrop-blur-sm flex flex-col">
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-4">
              
              {/* Text Content */}
              <div className="text-slate-300 lg:w-[330px] flex-shrink-0">
                <p className="mb-4 leading-relaxed text-lg">
                  My publications tackle processes operating at the boundaries of two converging tectonic plates.
                </p>
                <p className="mb-8 leading-relaxed text-lg">
                  The diagram on the right visualizes the semantic relationships between keywords extracted from my publications, revealing three main clusters.<br /><br />
                </p>

                <h2 className="text-xl font-semibold text-slate-100 mb-1">Publication record</h2>
                <div className="space-y-2 text-slate-300 mb-2">
                  <p>• {publicationsData.papers.length} peer-review papers / 1 paper in review</p>
                  <p>
                    • Citations: {publicationsData.stats.citations.google_scholar} <a href={publicationsData.stats.links.google_scholar} target="_blank" rel="noopener noreferrer" className="text-[#89C3F9] hover:text-[#CDE5FC] transition-colors">Google Scholar</a> / {publicationsData.stats.citations.scopus} <a href={publicationsData.stats.links.scopus} target="_blank" rel="noopener noreferrer" className="text-[#89C3F9] hover:text-[#CDE5FC] transition-colors">Scopus</a>
                  </p>
                  <p>
                    • h-index: {publicationsData.stats.h_index.google_scholar} <a href={publicationsData.stats.links.google_scholar} target="_blank" rel="noopener noreferrer" className="text-[#89C3F9] hover:text-[#CDE5FC] transition-colors">Google Scholar</a> / {publicationsData.stats.h_index.scopus} <a href={publicationsData.stats.links.scopus} target="_blank" rel="noopener noreferrer" className="text-[#89C3F9] hover:text-[#CDE5FC] transition-colors">Scopus</a>
                  </p>
                </div>

                {/* Social Links */}
                <div className="flex gap-4">
                  <a href={publicationsData.stats.links.researchgate} target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 transition-opacity">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center overflow-hidden relative">
                      <Image 
                        src="/images/RG.png" 
                        alt="ResearchGate" 
                        fill
                        className="object-cover"
                      />
                    </div>
                  </a>
                  <a href={publicationsData.stats.links.orcid} target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 transition-opacity">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center overflow-hidden relative">
                      <Image 
                        src="/images/ORCID.png" 
                        alt="ORCID" 
                        fill
                        className="object-cover"
                      />
                    </div>
                  </a>
                  <a href={publicationsData.stats.links.google_scholar} target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 transition-opacity">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center overflow-hidden relative">
                      <Image 
                        src="/images/GS.png" 
                        alt="Google Scholar" 
                        fill
                        className="object-cover"
                      />
                    </div>
                  </a>
                  <a href={publicationsData.stats.links.scopus} target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 transition-opacity">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center overflow-hidden relative">
                      <Image 
                        src="/images/SC.png" 
                        alt="Scopus" 
                        fill
                        className="object-cover"
                      />
                    </div>
                  </a>
                </div>
              </div>

              {/* Diagram container */}
              <div className="w-full h-[520px] flex-grow">
                 <NetworkGraph className="w-full h-full" />
              </div>
              </div>

              <div className="text-right text-s text-slate-500 mt-2">
                Keyword network visualization based on the VOSviewer data. Scroll to zoom.
              </div>
            </section>

            {/* Papers List */}
            <section>
              <h2 className="text-2xl font-bold text-slate-100 mb-8">Peer-review papers</h2>
              <div className="space-y-8">
                {publicationsData.papers.map((paper) => (
                  <div key={paper.id} className="group">
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="text-[#89C3F9] font-mono text-sm">[{paper.id.toString().padStart(2, '0')}]</span>
                      <div className="text-slate-300">
                        <span dangerouslySetInnerHTML={{ __html: paper.authors }} /> ({paper.year})
                      </div>
                    </div>
                    <div className="ml-8 sm:ml-10">
                      <h3 
                        className="text-base font-medium text-slate-100 mb-1 group-hover:text-[#89C3F9] transition-colors"
                        dangerouslySetInnerHTML={{ __html: paper.title }}
                      />
                      <div className="text-slate-400 text-sm mb-1">
                        <span className="italic">{paper.journal}</span>; {paper.volume}.
                      </div>
                      <div className="text-sm">
                        <span className="text-slate-500">doi: </span>
                        <a 
                          href={paper.doi_url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-[#89C3F9] hover:text-[#CDE5FC] hover:underline transition-colors"
                        >
                          {paper.doi}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
        </div>
      </main>
    </div>
  )
}
