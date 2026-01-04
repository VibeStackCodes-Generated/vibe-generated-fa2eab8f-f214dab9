import { ReactNode } from 'react'
import { Header } from './header'
import { Footer } from './footer'
import { MainContainer } from './main-container'
import { Navigation, type NavigationItem } from './navigation'

interface LayoutProps {
  children: ReactNode
  navigationItems?: NavigationItem[]
  showNavigation?: boolean
}

/**
 * Layout Component
 * Main layout wrapper providing header, navigation, main content area, and footer
 * Handles full-page layout with responsive design
 */
export function Layout({ children, navigationItems, showNavigation = false }: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <Header />

      {/* Secondary Navigation (optional) */}
      {showNavigation && navigationItems && navigationItems.length > 0 && (
        <div className="border-b border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950">
          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
            <Navigation items={navigationItems} />
          </div>
        </div>
      )}

      {/* Main Content */}
      <MainContainer>{children}</MainContainer>

      {/* Footer */}
      <Footer />
    </div>
  )
}

// Export all layout-related components for convenience
export { Header } from './header'
export { Footer } from './footer'
export { MainContainer } from './main-container'
export { Navigation } from './navigation'
