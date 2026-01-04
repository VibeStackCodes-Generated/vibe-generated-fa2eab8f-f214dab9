import { useState } from 'react'
import { Link } from 'react-router-dom'

/**
 * Header Component
 * Responsive header with logo and mobile menu toggle
 * Uses brand colors: Primary (#5200ff), Accent (#f5e942)
 */
export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 w-full border-b border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 font-bold text-lg sm:text-xl"
          style={{ color: '#5200ff' }}
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#5200ff] to-[#f5e942]">
            <span className="text-xs font-bold text-white">VS</span>
          </div>
          <span className="hidden sm:inline">VibeStack</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className="text-sm font-medium text-gray-700 hover:text-[#5200ff] dark:text-gray-300 dark:hover:text-[#f5e942] transition-colors"
          >
            Home
          </Link>
          <Link
            to="/"
            className="text-sm font-medium text-gray-700 hover:text-[#5200ff] dark:text-gray-300 dark:hover:text-[#f5e942] transition-colors"
          >
            Features
          </Link>
          <Link
            to="/"
            className="text-sm font-medium text-gray-700 hover:text-[#5200ff] dark:text-gray-300 dark:hover:text-[#f5e942] transition-colors"
          >
            About
          </Link>
          <Link
            to="/"
            className="text-sm font-medium text-gray-700 hover:text-[#5200ff] dark:text-gray-300 dark:hover:text-[#f5e942] transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <nav className="border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950 md:hidden">
          <div className="space-y-1 px-4 py-4 sm:px-6">
            <Link
              to="/"
              className="block px-3 py-2 rounded-lg text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-[#5200ff] dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-[#f5e942] transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/"
              className="block px-3 py-2 rounded-lg text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-[#5200ff] dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-[#f5e942] transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              to="/"
              className="block px-3 py-2 rounded-lg text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-[#5200ff] dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-[#f5e942] transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/"
              className="block px-3 py-2 rounded-lg text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-[#5200ff] dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-[#f5e942] transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}
