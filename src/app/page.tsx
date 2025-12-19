'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'

const navigationItems = [
  { title: 'Projects', href: '#projects' },
  { title: 'Papers', href: '/publications' },
  { title: 'Collab', href: '/collaboration' },
  { title: 'About', href: '#about' },
] as const

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [sidebarVisible, setSidebarVisible] = useState(false)
  const { scrollY } = useScroll()
  
  // Transform for landing page becoming sidebar
  // Moves from 0 to (320px - 100vw), effectively leaving 320px visible on the left
  const landingX = useTransform(scrollY, [0, 400], ["calc(0vw + 0px)", "calc(-100vw + 320px)"]) 
  const sidebarContentOpacity = useTransform(scrollY, [300, 400], [0, 1]) // Sidebar content fades in at the end
  const landingContentOpacity = useTransform(scrollY, [0, 200], [1, 0]) // Landing content fades out quickly
  const backgroundOpacity = useTransform(scrollY, [0, 400], [0.7, 0.95])

  useEffect(() => {
    const unsubscribe = scrollY.onChange((latest) => {
      setSidebarVisible(latest > 100) // Show sidebar earlier
    })
    return unsubscribe
  }, [scrollY])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <>
      {/* Fixed Background */}
      <div className="fixed inset-0 -z-20">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/images/background/tatry4.jpg')`,
          }}
        />
        <motion.div 
          className="absolute inset-0 bg-slate-900"
          style={{ opacity: backgroundOpacity }}
        />
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <motion.div
          className="fixed inset-0 z-50 lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="absolute inset-0 bg-slate-900/90" onClick={() => setIsMobileMenuOpen(false)} />
          <motion.div
            className="absolute top-0 right-0 w-80 h-full bg-slate-800 shadow-xl p-6"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
          >
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-lg font-bold">Menu</h2>
              <button onClick={() => setIsMobileMenuOpen(false)} className="text-slate-400">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <nav className="space-y-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block py-3 text-slate-300 hover:text-teal-400 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          </motion.div>
        </motion.div>
      )}

      {/* Fixed Sidebar - content appears over the stopped landing page */}
      <motion.aside
        className="fixed left-0 top-0 w-80 h-full z-30 hidden lg:block overflow-hidden pointer-events-none lg:pointer-events-auto"
      >
        {/* Sidebar content - fades in */}
        <motion.div 
          className="relative p-8 h-full flex flex-col border-r border-slate-700/50 bg-slate-900/80 backdrop-blur-sm"
          style={{ opacity: sidebarContentOpacity }}
        >
          {/* Compact Avatar */}
          <div className="flex flex-col items-center mb-8">
            <div className="w-20 h-20 rounded-full overflow-hidden mb-4 ring-2 ring-slate-700/50">
              <Image
                src="/images/profile/MB1.jpeg"
                alt="Michał Bukała"
                width={80}
                height={80}
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-lg font-bold text-center">Michał Bukała</h1>
            <p className="text-sm text-slate-400 text-center">Geologist • Scientist • Developer</p>
          </div>

          {/* Sidebar Navigation */}
          <nav className="flex-1">
            <ul className="space-y-2">
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block px-4 py-3 text-slate-300 hover:text-teal-400 hover:bg-slate-800/50 transition-all duration-200 rounded-lg border-l-4 border-transparent hover:border-teal-400 font-medium text-sm uppercase tracking-wider"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-auto pt-8 border-t border-slate-700/50">
            <p className="text-xs text-slate-500 text-center">© 2025 Michał Bukała</p>
          </div>
        </motion.div>
      </motion.aside>

      {/* Mobile Header - appears on scroll */}
      <motion.header
        className="fixed top-0 left-0 right-0 z-40 bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50 lg:hidden"
        animate={{ y: sidebarVisible ? 0 : -100 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <Image
                src="/images/profile/MB1.jpeg"
                alt="Michał Bukała"
                width={40}
                height={40}
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-lg font-bold">Michał Bukała</h1>
          </div>
          <button
            onClick={toggleMobileMenu}
            className="flex flex-col justify-center items-center w-8 h-8 space-y-1"
          >
            <span className="block w-6 h-0.5 bg-slate-300" />
            <span className="block w-6 h-0.5 bg-slate-300" />
            <span className="block w-6 h-0.5 bg-slate-300" />
          </button>
        </div>
      </motion.header>

      {/* Main Content Container */}
      <div className="relative">
        {/* About Content - positioned behind landing page */}
        <div className="fixed inset-0 z-5">
          <section className="min-h-screen bg-slate-900/50 backdrop-blur-sm flex items-center">
            <div className="w-full pl-80 pr-8 py-16"> {/* Left padding for sidebar space */}
              <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold mb-12 text-center">About</h2>
                
                {/* Profile Section - adjusted for narrower space */}
                <div className="flex flex-col gap-8 mb-16">
                  <div className="flex justify-center">
                    <Image 
                      src="/images/profile/MB1.jpeg" 
                      alt="Michał Bukała, PhD" 
                      width={200} 
                      height={200}
                      className="rounded-lg shadow-lg"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="text-3xl font-bold mb-2">Michał Bukała, PhD</h3>
                    <p className="text-slate-400 text-sm mb-4">
                      [ENG: <em>Mee-how Boo-kah-lah</em>]
                    </p>
                    
                    <div className="space-y-6 text-lg leading-relaxed">
                      <p className="text-xl text-teal-400 font-medium">
                        I really like mountains—they&apos;re big and rocky.
                      </p>
                      
                      <p className="max-w-3xl mx-auto">
                        Also, I am a geologist specializing in fluid-rock interactions and the deformation 
                        processes occurring in environments ranging from the deep Earth to the near surface. 
                        My approach integrates hands-on fieldwork, laboratory studies, and advanced 
                        numerical/thermodynamic modeling to uncover the intricate dynamics of our planet.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Experience Sections - condensed for narrower space */}
                <div className="grid grid-cols-1 gap-6 max-w-3xl mx-auto">
                  <div className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-800/70 transition-colors">
                    <h4 className="text-xl font-bold mb-4 text-teal-400">Fieldwork Experience</h4>
                    <p className="text-sm leading-relaxed">
                      9+ years of experience across diverse terrains of Norway, Sweden, 
                      Svalbard, Greenland, Slovakia, Greece, and Spain.
                    </p>
                  </div>

                  <div className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-800/70 transition-colors">
                    <h4 className="text-xl font-bold mb-4 text-teal-400">Research Contributions</h4>
                    <p className="text-sm leading-relaxed">
                      Co-applicant and researcher in projects exceeding €2 million in funding.
                      Extensive experience as an editor, author, and peer reviewer for academic research papers.
                    </p>
                  </div>

                  <div className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-800/70 transition-colors">
                    <h4 className="text-xl font-bold mb-4 text-teal-400">Technical Proficiency</h4>
                    <p className="text-sm leading-relaxed">
                      Python and Matlab for scientific computing and data analysis.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Landing Page Section - slides left to reveal About */}
        <motion.section 
          className="fixed inset-0 flex items-center justify-center px-8 bg-cover bg-center z-10"
          style={{ 
            x: landingX,
            backgroundImage: `url('/images/background/tatry4.jpg')`
          }}
        >
          <div 
            className="absolute inset-0 bg-slate-900"
            style={{ opacity: 0.7 }}
          />
          
          <motion.div 
            className="text-center max-w-3xl relative z-10"
            style={{ opacity: landingContentOpacity }}
          >
            {/* Large Avatar */}
            <div 
              className="w-48 h-48 mx-auto rounded-full bg-slate-700 mb-12 flex items-center justify-center overflow-hidden ring-4 ring-slate-600/50 shadow-2xl"
            >
              <Image 
                src="/images/profile/MB1.jpeg"
                alt="Michał Bukała" 
                width={192}
                height={192}
                className="w-full h-full object-cover"
              />
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 text-slate-100">
              Michał Bukała
            </h1>
            
            <div className="text-xl lg:text-2xl space-y-3 mb-16 text-slate-300">
              <p>Geologist by education</p>
              <p>Scientist by profession</p>
              <p>Developer by interest</p>
            </div>
            
            <div className="text-slate-400 text-lg">
              <p className="mb-4">Welcome to my digital space</p>
              <p className="text-sm flex items-center justify-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
                Scroll to explore
              </p>
            </div>
          </motion.div>
        </motion.section>

        {/* Invisible spacer to trigger scroll */}
        <div className="h-[200vh] opacity-0 pointer-events-none" aria-hidden="true" />
      </div>
    </>
  )
}
