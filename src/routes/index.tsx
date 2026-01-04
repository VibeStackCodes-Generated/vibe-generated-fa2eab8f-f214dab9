import { createBrowserRouter } from 'react-router-dom'
import App from '@/App'
import { ComponentsDemo } from './components-demo'

/**
 * Get basename dynamically from window location or environment
 * Supports both preview proxy and direct deployment
 */
function getBasename(): string {
  // Check if basename is set by preview proxy script
  if (typeof window !== 'undefined') {
    const previewBasename = (window as { __PREVIEW_BASENAME__?: string }).__PREVIEW_BASENAME__
    if (previewBasename) {
      console.log('[Router] Using basename from window.__PREVIEW_BASENAME__:', previewBasename)
      return previewBasename
    }

    // Fallback: detect basename from current URL pathname
    // This handles cases where the script hasn't run yet or for preview proxy URLs
    if (window.location.pathname.startsWith('/api/preview/')) {
      const pathMatch = window.location.pathname.match(/^(\/api\/preview\/[^/]+)/)
      if (pathMatch) {
        const detectedBasename = pathMatch[1]
        console.log('[Router] Detected basename from URL pathname:', detectedBasename)
        // Also set it on window for consistency
        ;(window as { __PREVIEW_BASENAME__?: string }).__PREVIEW_BASENAME__ = detectedBasename
        return detectedBasename
      }
    }
  }

  // Check environment variable (for build-time configuration)
  if (import.meta.env.VITE_BASENAME) {
    return import.meta.env.VITE_BASENAME
  }

  // Default: no basename (root deployment)
  console.log('[Router] No basename detected, using root')
  return ''
}

/**
 * Application routes
 * Add new routes here for code splitting
 */
export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      children: [
        {
          index: true,
          element: (
            <div className="space-y-12 py-4">
              {/* Add Components Demo Link */}
              <div className="flex justify-end">
                <a
                  href="/components"
                  className="rounded-lg bg-[#5200ff] px-4 py-2 text-white hover:bg-[#4000dd] transition-colors font-medium text-sm"
                >
                  View All Components →
                </a>
              </div>
              {/* Hero Section */}
              <div className="rounded-lg border border-gray-200 bg-gradient-to-br from-[#5200ff] via-purple-500 to-[#f5e942] p-8 text-white dark:border-gray-800 sm:p-12">
                <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl">Welcome to VibeStack</h1>
                <p className="mt-4 text-lg text-gray-100 sm:text-xl">
                  A modern React + Vite + TypeScript starter with responsive layout components
                </p>
                <button className="mt-6 rounded-lg bg-white px-6 py-3 font-medium text-[#5200ff] hover:bg-gray-100 transition-colors">
                  Get Started
                </button>
              </div>

              {/* Features Grid */}
              <div>
                <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
                  Layout Components
                </h2>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {[
                    {
                      title: 'Header',
                      description: 'Responsive sticky header with mobile menu',
                    },
                    {
                      title: 'Navigation',
                      description: 'Flexible navigation with active link detection',
                    },
                    {
                      title: 'Main Container',
                      description: 'Centered content wrapper with max-width',
                    },
                    {
                      title: 'Footer',
                      description: 'Multi-column footer with social links',
                    },
                  ].map(feature => (
                    <div
                      key={feature.title}
                      className="rounded-lg border border-gray-200 p-6 dark:border-gray-800"
                    >
                      <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technology Stack */}
              <div>
                <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
                  Technology Stack
                </h2>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {[
                    { name: 'React', version: '19.2.0' },
                    { name: 'TypeScript', version: '5.9.3' },
                    { name: 'Vite', version: '7.2.2' },
                    { name: 'React Router', version: '7.9.5' },
                    { name: 'Tailwind CSS', version: '4.1.17' },
                    { name: 'Inter Font', version: 'Official' },
                  ].map(tech => (
                    <div
                      key={tech.name}
                      className="flex items-center gap-3 rounded-lg border border-gray-200 p-4 dark:border-gray-800"
                    >
                      <div
                        className="h-3 w-3 rounded-full"
                        style={{ backgroundColor: '#5200ff' }}
                      />
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">{tech.name}</p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">v{tech.version}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Brand Colors */}
              <div>
                <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
                  Brand Colors
                </h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="flex items-center gap-4 rounded-lg border border-gray-200 p-6 dark:border-gray-800">
                    <div className="h-16 w-16 rounded-lg" style={{ backgroundColor: '#5200ff' }} />
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">Primary Color</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">#5200ff</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 rounded-lg border border-gray-200 p-6 dark:border-gray-800">
                    <div
                      className="h-16 w-16 rounded-lg border border-gray-300"
                      style={{ backgroundColor: '#f5e942' }}
                    />
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">Accent Color</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">#f5e942</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ),
        },
        {
          path: '/components',
          element: <ComponentsDemo />,
        },
      ],
    },
  ],
  {
    basename: getBasename(),
  }
)
