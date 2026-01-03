'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils/cn'

/**
 * Navigation menu items based on Hydejack config
 */
const navigationItems = [
  { title: 'Publications', href: '/publications' },
  { title: 'Research', href: '/research' },
  { title: 'Software', href: '/software' },
  { title: 'About', href: '/#about' },
] as const

interface SidebarProps {
  /** Additional CSS classes */
  className?: string
}

/**
 * Sidebar component matching Hydejack layout with avatar, title, tagline and vertical navigation
 * Based on original Hydejack sidebar design
 */
export default function Sidebar({ className }: SidebarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  // Close mobile menu when clicking on a link
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      {/* Mobile Header Bar */}
      <div className="lg:hidden sticky top-0 z-50 w-full border-b border-slate-700/50 bg-slate-900/95 backdrop-blur-md">
        <div className="flex items-center justify-between p-4">
          <Link href="/" className="flex items-center space-x-3">
            {/* Avatar - smaller on mobile */}
            <div className="w-10 h-10 rounded-full overflow-hidden bg-slate-700 flex-shrink-0">
              <Image
                src="/images/profile/MB1.jpeg"
                alt="Michał Bukała"
                width={40}
                height={40}
                className="w-full h-full object-cover"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
              />
            </div>
            <h1 className="text-lg font-bold text-slate-100">Michał Bukała</h1>
          </Link>
          
          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="flex flex-col justify-center items-center w-8 h-8 space-y-1 focus:outline-none focus:ring-2 focus:ring-[#89C3F9] focus:ring-offset-2 focus:ring-offset-slate-900"
            aria-label={isMobileMenuOpen ? 'Close mobile menu' : 'Open mobile menu'}
            aria-expanded={isMobileMenuOpen}
          >
            <motion.span
              className="block w-6 h-0.5 bg-slate-300"
              animate={{
                rotate: isMobileMenuOpen ? 45 : 0,
                y: isMobileMenuOpen ? 6 : 0,
              }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="block w-6 h-0.5 bg-slate-300"
              animate={{
                opacity: isMobileMenuOpen ? 0 : 1,
              }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="block w-6 h-0.5 bg-slate-300"
              animate={{
                rotate: isMobileMenuOpen ? -45 : 0,
                y: isMobileMenuOpen ? -6 : 0,
              }}
              transition={{ duration: 0.2 }}
            />
          </button>
        </div>
      </div>

      {/* Desktop Sidebar */}
      <aside className="fixed left-0 top-0 w-[300px] h-full z-30 hidden lg:block overflow-hidden">
        {/* Background Image Container */}
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-right bg-no-repeat"
            style={{
              backgroundImage: `url('/images/background/tatry4.jpg')`,
            }}
          />
          {/* Overlay to ensure text readability but keep image visible */}
          <div className="absolute inset-0 bg-slate-900/20" />
        </div>

        <div className="relative z-10 p-8 h-full flex flex-col">
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
                    className="block px-4 py-3 text-slate-300 hover:text-[#89C3F9] hover:bg-slate-800/50 transition-all duration-200 rounded-lg border-l-4 border-transparent hover:border-[#89C3F9] font-medium text-sm uppercase tracking-wider"
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
      </aside>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-50 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm"
              onClick={closeMobileMenu}
              aria-label="Close mobile menu"
            />

            {/* Mobile Menu Content */}
            <motion.div
              className="absolute top-0 right-0 w-80 h-full bg-slate-800 shadow-xl overflow-hidden"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              {/* Background for mobile menu */}
              <div className="absolute inset-0">
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
                  style={{
                    backgroundImage: `url('/images/background/tatry4.jpg')`,
                  }}
                />
                <div className="absolute inset-0 bg-slate-800/90" />
              </div>

              <div className="relative z-10 flex flex-col h-full p-6">
                {/* Header with Close Button */}
                <div className="flex justify-between items-center mb-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-700">
                      <Image
                        src="/images/profile/MB1.jpeg"
                        alt="Michał Bukała"
                        width={48}
                        height={48}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h2 className="text-slate-200 font-semibold">Michał Bukała</h2>
                      <p className="text-xs text-slate-400">Menu</p>
                    </div>
                  </div>
                  <button
                    onClick={closeMobileMenu}
                    className="p-2 text-slate-400 hover:text-slate-200 focus:outline-none focus:ring-2 focus:ring-[#89C3F9]"
                    aria-label="Close mobile menu"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Navigation Links */}
                <div className="flex-1">
                  {navigationItems.map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + 0.1 }}
                    >
                      <Link
                        href={item.href}
                        onClick={closeMobileMenu}
                        className="block px-4 py-4 text-slate-300 hover:text-[#89C3F9] hover:bg-slate-700/50 transition-all duration-200 border-l-4 border-transparent hover:border-[#89C3F9] font-medium uppercase tracking-wider text-sm rounded-r-lg"
                        aria-label={`Navigate to ${item.title}`}
                      >
                        {item.title}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Mobile tagline and copyright */}
                <div className="space-y-4 pt-8 border-t border-slate-700">
                  <div className="text-slate-400 text-xs text-center leading-relaxed">
                    <p>Geologist by education</p>
                    <p>Scientist by profession</p>
                    <p>Developer by interest</p>
                  </div>
                  <p className="text-xs text-slate-500 text-center">
                    © Michał Bukała 2025. All rights reserved.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}