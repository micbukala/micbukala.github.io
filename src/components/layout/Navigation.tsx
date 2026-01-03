'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils/cn'

/**
 * Navigation menu items based on Hydejack config
 */
const navigationItems = [
  { title: 'Publications', href: '/publications' },
  { title: 'Research', href: '/research' },
  { title: 'About', href: '/about' },
] as const

interface NavigationProps {
  /** Additional CSS classes */
  className?: string
  /** Whether to show mobile hamburger menu */
  showMobileMenu?: boolean
}

/**
 * Navigation component with desktop menu and mobile hamburger menu
 * Based on Hydejack menu configuration with responsive design
 */
export default function Navigation({ className, showMobileMenu = true }: NavigationProps) {
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
    <nav className={cn('relative', className)} role="navigation" aria-label="Main navigation">
      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-8">
        {navigationItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="text-slate-300 hover:text-[#89C3F9] transition-colors duration-200 font-medium text-sm uppercase tracking-wider"
            aria-label={`Navigate to ${item.title}`}
          >
            {item.title}
          </Link>
        ))}
      </div>

      {/* Mobile Menu Button */}
      {showMobileMenu && (
        <button
          onClick={toggleMobileMenu}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1 focus:outline-none focus:ring-2 focus:ring-[#89C3F9] focus:ring-offset-2 focus:ring-offset-slate-900"
          aria-label={isMobileMenuOpen ? 'Close mobile menu' : 'Open mobile menu'}
          aria-expanded={isMobileMenuOpen}
        >
          {/* Hamburger Icon with Animation */}
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
      )}

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && showMobileMenu && (
          <motion.div
            className="fixed inset-0 z-50 md:hidden"
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
              className="absolute top-0 right-0 w-64 h-full bg-slate-800 shadow-xl"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              <div className="flex flex-col h-full">
                {/* Header with Close Button */}
                <div className="flex justify-between items-center p-6 border-b border-slate-700">
                  <h2 className="text-slate-200 font-semibold">Menu</h2>
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
                <div className="flex-1 py-6">
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
                        className="block px-6 py-3 text-slate-300 hover:text-[#89C3F9] hover:bg-slate-700/50 transition-all duration-200 border-l-4 border-transparent hover:border-[#89C3F9] font-medium uppercase tracking-wider text-sm"
                        aria-label={`Navigate to ${item.title}`}
                      >
                        {item.title}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}