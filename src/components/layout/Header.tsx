'use client'

import Link from 'next/link'
import Navigation from './Navigation'
import { cn } from '@/lib/utils/cn'

interface HeaderProps {
  /** Additional CSS classes */
  className?: string
}

/**
 * Header component with site branding and navigation
 * Based on Hydejack design with dark theme and teal accents
 */
export default function Header({ className }: HeaderProps) {
  return (
    <header className={cn(
      'sticky top-0 z-40 w-full border-b border-slate-700/50 bg-slate-900/80 backdrop-blur-md supports-[backdrop-filter]:bg-slate-900/60',
      className
    )}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo/Brand Section */}
          <div className="flex items-center space-x-4">
            <Link
              href="/"
              className="flex flex-col group focus:outline-none focus:ring-2 focus:ring-[#89C3F9] focus:ring-offset-2 focus:ring-offset-slate-900 rounded-sm"
              aria-label="Go to homepage"
            >
              {/* Site Title */}
              <h1 className="text-xl lg:text-2xl font-bold text-slate-100 group-hover:text-[#89C3F9] transition-colors duration-200">
                Michał Bukała
              </h1>
            </Link>
          </div>

          {/* Navigation */}
          <Navigation className="flex-shrink-0" />
        </div>

        {/* Mobile Tagline - Shown below header on mobile */}
        <div className="sm:hidden pb-4">
          <p className="text-xs text-slate-400 text-center leading-relaxed">
            <span className="block">Geologist by education</span>
            <span className="block">Scientist by profession</span>
            <span className="block">Developer by interest</span>
          </p>
        </div>
      </div>
    </header>
  )
}