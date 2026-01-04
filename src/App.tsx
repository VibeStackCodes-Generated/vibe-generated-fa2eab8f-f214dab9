import { Outlet } from 'react-router-dom'
import { Suspense } from 'react'
import { ErrorBoundary } from '@/components/error-boundary'
import { VibeStackBadge } from '@/components/vibestack-badge'
import { Layout } from '@/components/layout'

/**
 * Main App component with routing
 * Uses React Router for SPA navigation and Layout wrapper for consistent structure
 */
function App() {
  return (
    <ErrorBoundary>
      <Layout>
        <Suspense
          fallback={
            <div className="flex min-h-screen items-center justify-center">
              <p className="text-gray-600 dark:text-gray-400">Loading...</p>
            </div>
          }
        >
          <Outlet />
        </Suspense>
      </Layout>
      <VibeStackBadge />
    </ErrorBoundary>
  )
}

export default App
