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
  const landingX = useTransform(scrollY, [0, 400], [0, -1000]) // Landing slides left and disappears
  const landingScale = useTransform(scrollY, [0, 400], [1, 0.4]) // Landing shrinks to sidebar size
  const contentOpacity = useTransform(scrollY, [200, 400], [0, 1]) // About content fades in
  const backgroundOpacity = useTransform(scrollY, [0, 400], [0.7, 0.95])

  useEffect(() => {
    const unsubscribe = scrollY.onChange((latest) => {
      setSidebarVisible(latest > 200) // Show sidebar transition
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

      {/* Transforming Landing Page that becomes sidebar */}
      <motion.aside
        className="fixed left-0 top-0 w-80 h-full z-30 hidden lg:block overflow-hidden origin-center"
        style={{ 
          x: sidebarVisible ? 0 : landingX,
          scale: sidebarVisible ? 1 : landingScale,
          opacity: sidebarVisible ? 1 : 0
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Same mountain background as landing page */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/images/background/tatry4.jpg')`,
          }}
        />
        <div className="absolute inset-0 bg-slate-900/90" />
        
        {/* Sidebar content */}
        <div className="relative p-8 h-full flex flex-col border-r border-slate-700/50">
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
        </div>
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

      {/* Main Content */}
      <div className="relative z-10">
        {/* Landing Page Section - transforms into sidebar */}
        <motion.section 
          className="min-h-screen flex items-center justify-center px-8"
          style={{ 
            x: landingX,
            scale: landingScale,
            opacity: sidebarVisible ? 0 : 1
          }}
        >
          <motion.div 
            className="text-center max-w-3xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Large Avatar */}
            <motion.div 
              className="w-48 h-48 mx-auto rounded-full bg-slate-700 mb-12 flex items-center justify-center overflow-hidden ring-4 ring-slate-600/50 shadow-2xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
            >
              <Image 
                src="/images/profile/MB1.jpeg"
                alt="Michał Bukała" 
                width={192}
                height={192}
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            <motion.h1 
              className="text-5xl lg:text-7xl font-bold mb-8 text-slate-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Michał Bukała
            </motion.h1>
            
            <motion.div 
              className="text-xl lg:text-2xl space-y-3 mb-16 text-slate-300"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.2,
                    delayChildren: 0.6
                  }
                }
              }}
            >
              <motion.p 
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 }
                }}
              >
                Geologist by education
              </motion.p>
              <motion.p 
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 }
                }}
              >
                Scientist by profession
              </motion.p>
              <motion.p 
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 }
                }}
              >
                Developer by interest
              </motion.p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="text-slate-400 text-lg"
            >
              <p className="mb-4">Welcome to my digital space</p>
              <p className="text-sm flex items-center justify-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
                Scroll to explore
              </p>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Content Sections - appear when landing transforms */}
        <motion.section 
          id="about" 
          className="min-h-screen bg-slate-900/50 backdrop-blur-sm scroll-mt-20"
          style={{ opacity: contentOpacity }}
        >
          <div className="container mx-auto px-8 py-16 lg:ml-80">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-12 text-center">About</h2>
              
              {/* Profile Section */}
              <div className="flex flex-col lg:flex-row gap-8 mb-16">
                <div className="flex-shrink-0 lg:w-1/3">
                  <Image 
                    src="/images/profile/MB1.jpeg" 
                    alt="Michał Bukała, PhD" 
                    width={420} 
                    height={420}
                    className="rounded-lg shadow-lg w-full max-w-sm mx-auto lg:mx-0"
                  />
                </div>
                <div className="lg:w-2/3 lg:pl-8">
                  <div className="mb-6">
                    <h3 className="text-3xl font-bold mb-2">Michał Bukała, PhD</h3>
                    <p className="text-slate-400 text-sm mb-4">
                      [ENG: <em>Mee-how Boo-kah-lah</em>]
                    </p>
                  </div>
                  
                  <div className="space-y-6 text-lg leading-relaxed">
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
              <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Fieldwork Experience */}
                <div className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-800/70 transition-colors">
                  <h4 className="text-xl font-bold mb-4 text-teal-400">Fieldwork Experience</h4>
                  <div className="space-y-3">
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
                <div className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-800/70 transition-colors">
                  <h4 className="text-xl font-bold mb-4 text-teal-400">Research Contributions</h4>
                  <div className="space-y-3">
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
                <div className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-800/70 transition-colors">
                  <h4 className="text-xl font-bold mb-4 text-teal-400">Technical Proficiency</h4>
                  <div className="space-y-3">
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
        </motion.section>

        <section id="projects" className={`min-h-screen bg-slate-800/50 backdrop-blur-sm scroll-mt-20 transition-all duration-500 ${sidebarVisible ? 'lg:ml-80' : ''}`}>
          <div className="container mx-auto px-8 py-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-8 text-center">Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-slate-900/50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Research Project 1</h3>
                  <p className="text-slate-300">Description of your research project...</p>
                </div>
                <div className="bg-slate-900/50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Research Project 2</h3>
                  <p className="text-slate-300">Description of your research project...</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
