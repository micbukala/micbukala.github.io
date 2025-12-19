'use client'

import Sidebar from '@/components/layout/Sidebar'
import publicationsData from '@/data/publications.json'

export default function Publications() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-300">
      {/* Fixed Background - matching the home page style */}
      <div className="fixed inset-0 -z-20">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/images/background/tatry4.jpg')`,
          }}
        />
        <div className="absolute inset-0 bg-slate-900/95" />
      </div>

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="lg:ml-80 min-h-screen">
        <div className="max-w-4xl mx-auto p-8 lg:p-12">
          
          <h1 className="text-4xl font-bold text-slate-100 mb-8">Papers</h1>

          {/* Stats Section */}
          <section className="mb-12 bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 backdrop-blur-sm">
            <h2 className="text-xl font-semibold text-slate-100 mb-4">Publication record</h2>
            <div className="space-y-2 text-slate-300">
              <p>• {publicationsData.stats.papers_count}</p>
              <p>
                • Citations: {publicationsData.stats.citations.google_scholar} <a href={publicationsData.stats.links.google_scholar} target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-teal-300 transition-colors">Google Scholar</a> / {publicationsData.stats.citations.scopus} <a href={publicationsData.stats.links.scopus} target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-teal-300 transition-colors">Scopus</a>
              </p>
              <p>
                • h-index: {publicationsData.stats.h_index.google_scholar} <a href={publicationsData.stats.links.google_scholar} target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-teal-300 transition-colors">Google Scholar</a> / {publicationsData.stats.h_index.scopus} <a href={publicationsData.stats.links.scopus} target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-teal-300 transition-colors">Scopus</a>
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <a href={publicationsData.stats.links.researchgate} target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 transition-opacity">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center overflow-hidden">
                   {/* Using text fallback if image is missing, or we can use the image paths from the markdown if they exist in public */}
                   <span className="text-slate-900 font-bold text-xs">RG</span>
                </div>
              </a>
              <a href={publicationsData.stats.links.orcid} target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 transition-opacity">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center overflow-hidden">
                   <span className="text-slate-900 font-bold text-xs">ORCID</span>
                </div>
              </a>
              <a href={publicationsData.stats.links.google_scholar} target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 transition-opacity">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center overflow-hidden">
                   <span className="text-slate-900 font-bold text-xs">GS</span>
                </div>
              </a>
              <a href={publicationsData.stats.links.scopus} target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 transition-opacity">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center overflow-hidden">
                   <span className="text-slate-900 font-bold text-xs">SC</span>
                </div>
              </a>
            </div>
          </section>

          {/* Reviewer Duties */}
          <section className="mb-12">
            <h2 className="text-xl font-semibold text-slate-100 mb-4">Reviewer</h2>
            <p className="text-slate-300 leading-relaxed">
              {publicationsData.reviewer_duties.join(', ')}
            </p>
          </section>

          {/* Papers List */}
          <section>
            <h2 className="text-2xl font-bold text-slate-100 mb-8">Peer-review papers</h2>
            <div className="space-y-8">
              {publicationsData.papers.map((paper) => (
                <div key={paper.id} className="group">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-teal-400 font-mono text-sm">[{paper.id.toString().padStart(2, '0')}]</span>
                    <div className="text-slate-300">
                      <span dangerouslySetInnerHTML={{ __html: paper.authors }} /> ({paper.year})
                    </div>
                  </div>
                  <div className="ml-8 sm:ml-10">
                    <h3 className="text-lg font-medium text-slate-100 mb-1 group-hover:text-teal-400 transition-colors">
                      {paper.title}
                    </h3>
                    <div className="text-slate-400 text-sm mb-1">
                      <span className="italic">{paper.journal}</span>; {paper.volume}.
                    </div>
                    <div className="text-sm">
                      <span className="text-slate-500">doi: </span>
                      <a 
                        href={paper.doi_url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-teal-500 hover:text-teal-400 hover:underline transition-colors"
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
