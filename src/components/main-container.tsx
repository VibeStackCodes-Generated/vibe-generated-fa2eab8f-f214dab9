import { ReactNode } from 'react'

interface MainContainerProps {
  children: ReactNode
  className?: string
}

/**
 * MainContainer Component
 * Responsive main content wrapper with proper spacing and constraints
 * Ensures consistent padding and max-width across all pages
 */
export function MainContainer({ children, className = '' }: MainContainerProps) {
  return (
    <main className={`mx-auto w-full max-w-7xl flex-1 px-4 py-8 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </main>
  )
}
