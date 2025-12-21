'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'

const navigationItems = [
  { title: 'Publications', href: '/publications' },
  { title: 'Research', href: '/research' },
  { title: 'Software', href: '/software' },
  { title: 'About', href: '#about' },
] as const

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [sidebarVisible, setSidebarVisible] = useState(false)
  const { scrollY } = useScroll()
  
  // Transform for landing page becoming sidebar
  // Moves from 0 to (320px - 100vw), effectively leaving 320px visible on the left
  // ZMIANA: Tutaj ustawiasz szerokość sidebara (obecnie 280px)
  const sidebarWidth = 300; 
  // ZMIANA: Używamy % zamiast vw, aby uniknąć problemów z paskiem przewijania (gap)
  const landingX = useTransform(scrollY, [0, 400], ["calc(0% + 0px)", `calc(-100% + ${sidebarWidth}px)`]) 
  const sidebarContentOpacity = useTransform(scrollY, [300, 400], [0, 1]) // Sidebar content fades in at the end
  const landingContentOpacity = useTransform(scrollY, [0, 200], [1, 0]) // Landing content fades out quickly
  // ZMIANA: Tutaj możesz zmienić jasność tła (opacity). Mniejsza wartość = jaśniejsze tło.
  // [0.4, 0.95] oznacza start od 40% zaciemnienia, kończąc na 95%
  const backgroundOpacity = useTransform(scrollY, [0, 400], [0.2, 0.95])

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
          className="absolute inset-0 bg-cover bg-right bg-no-repeat"
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
      {/* ZMIANA: Tutaj ustawiasz szerokość kontenera sidebara (w-[280px]) */}
      <motion.aside
        className="fixed left-0 top-0 w-[300px] h-full z-30 hidden lg:block overflow-hidden pointer-events-none lg:pointer-events-auto"
      >
        {/* Sidebar Background - fades in with content to match subpages */}
        <motion.div 
          className="absolute inset-0"
          style={{ opacity: sidebarContentOpacity }}
        >
          <div 
            className="absolute inset-0 bg-cover bg-right bg-no-repeat"
            style={{
              backgroundImage: `url('/images/background/tatry4.jpg')`,
            }}
          />
          <div className="absolute inset-0 bg-slate-900/20" />
        </motion.div>

        {/* Sidebar content - fades in */}
        {/* ZMIANA: Usunięto tło (bg-slate-900/80) i rozmycie (backdrop-blur-sm), aby pokazać zdjęcie z landing page */}
        {/* ZMIANA: Usunięto border-r, aby zlikwidować pionową linię */}
        <motion.div 
          className="relative p-8 h-full flex flex-col"
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
            <p className="text-sm text-slate-400 text-center">
              Geologist
              <br />Scientist
              <br />Developer
            </p>
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
            {/* ZMIANA: Tutaj ustawiasz padding-left równy szerokości sidebara (pl-[280px]) */}
            {/* Dodano lg: prefix, aby padding był tylko na desktopie. Na mobile px-8. */}
            <div className="w-full px-8 lg:pl-[280px] lg:pr-8 py-16"> {/* Left padding for sidebar space */}
              {/* ZMIANA: Usunięto mx-auto na desktopie (lg:mx-0) i dodano lg:ml-20, aby treść była bliżej sidebara */}
              <div className="max-w-4xl mx-auto lg:mx-0 lg:ml-20">
                <h2 className="text-4xl font-bold mb-12 text-center lg:text-left">About</h2>
                
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
                    {/* ZMIANA: mb-1 to margines dolny (odstęp od elementu poniżej). Zmniejsz go, aby zbliżyć napisy. */}
                    {/* Kolory czcionek ustawia się klasami np. text-slate-100 (biały), text-teal-400 (turkusowy), text-slate-400 (szary) */}
                    <h3 className="text-3xl font-bold mb-0 text-slate-100 leading-tight">Michał Bukała, PhD</h3>
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
          className="fixed inset-0 flex items-center justify-center px-8 bg-cover bg-right z-10"
          style={{ 
            x: landingX,
            backgroundImage: `url('/images/background/tatry4.jpg')`
          }}
        >
          <div 
            className="absolute inset-0 bg-slate-900"
            // ZMIANA: Tutaj ustawiasz początkowe zaciemnienie tła na landing page
            style={{ opacity: 0.2 }}
          />
          
          <motion.div 
            className="text-center max-w-3xl relative z-10"
            style={{ opacity: landingContentOpacity }}
          >
            {/* --- SEKCJA LANDING PAGE: ELEMENTY --- */}
            
            {/* 1. AWATAR */}
            {/* mb-[48px] = odstęp pod awatarem */}
            <div 
              className="w-32 h-32 mx-auto rounded-full bg-slate-700 mb-[48px] flex items-center justify-center overflow-hidden ring-4 ring-slate-600/50 shadow-2xl"
            >
              <Image 
                src="/images/profile/MB1.jpeg"
                alt="Michał Bukała" 
                width={160}
                height={160}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* 2. IMIĘ I NAZWISKO */}
            {/* text-[32px] = rozmiar czcionki */}
            {/* mb-[4px] = odstęp pod imieniem (zmniejszony, aby zbliżyć do zapisu fonetycznego) */}
            <h1 className="text-[32px] lg:text-[42px] font-bold mb-[3px] text-slate-100 leading-tight">
              Michał Bukała
            </h1>

            {/* 3. ZAPIS FONETYCZNY */}
            {/* text-[12px] = rozmiar czcionki */}
            {/* mb-[24px] = odstęp pod zapisem fonetycznym (przed linią) */}
            <div className="text-[12px] lg:text-[18px] leading-[1.4] text-slate-300 mb-[24px]">
              [ENG: <i>Mee-how Boo-kah-lah</i>]
            </div>

            {/* 4. LINIA ODDZIELAJĄCA */}
            {/* w-[64px] = szerokość linii */}
            {/* mb-[24px] = odstęp pod linią */}
            <div className="w-[64px] h-[2px] bg-slate-200/50 mx-auto mb-[24px]" />

            {/* 5. ROLE (Geologist | Scientist...) */}
            {/* text-[18px] = rozmiar czcionki */}
            {/* mb-[64px] = odstęp pod rolami (przed 'Scroll to explore') */}
            <div className="text-[18px] lg:text-[20px] leading-[1.4] space-y-1 mb-[64px] text-slate-300">
              <p>Geologist • Scientist • Developer </p>
            </div>
            
            {/* 6. SCROLL TO EXPLORE */}
            <div className="text-slate-300 text-lg">
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
