import { Link, useLocation } from 'react-router-dom'

interface NavigationItem {
  label: string
  href: string
  icon?: string
}

interface NavigationProps {
  items?: NavigationItem[]
}

/**
 * Navigation Component
 * Reusable navigation component with active link detection
 * Can be used for secondary navigation or breadcrumbs
 */
export function Navigation({ items = [] }: NavigationProps) {
  const location = useLocation()

  if (items.length === 0) {
    return null
  }

  return (
    <nav className="flex flex-col gap-1 sm:flex-row sm:gap-4">
      {items.map(item => {
        const isActive = location.pathname === item.href

        return (
          <Link
            key={item.href}
            to={item.href}
            className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
              isActive
                ? 'bg-[#5200ff] text-white'
                : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
            }`}
          >
            {item.icon && <span>{item.icon}</span>}
            <span>{item.label}</span>
          </Link>
        )
      })}
    </nav>
  )
}
