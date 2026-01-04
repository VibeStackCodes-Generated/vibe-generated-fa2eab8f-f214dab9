import { HTMLAttributes, ReactNode } from 'react'

export type BadgeVariant =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info'

export type BadgeSize = 'sm' | 'md' | 'lg'

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode
  variant?: BadgeVariant
  size?: BadgeSize
  icon?: ReactNode
  removable?: boolean
  onRemove?: () => void
}

const variantStyles: Record<BadgeVariant, string> = {
  default:
    'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200',
  primary:
    'bg-[#5200ff] text-white',
  secondary:
    'bg-[#f5e942] text-gray-900',
  success:
    'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
  warning:
    'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
  danger:
    'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
  info: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
}

const sizeStyles: Record<BadgeSize, string> = {
  sm: 'px-2 py-1 text-xs',
  md: 'px-3 py-1.5 text-sm',
  lg: 'px-4 py-2 text-base',
}

/**
 * Badge Component
 * Reusable badge/label component for status, tags, and labels
 * Supports multiple variants and sizes
 */
export function Badge({
  children,
  variant = 'default',
  size = 'md',
  icon,
  removable = false,
  onRemove,
  className = '',
  ...props
}: BadgeProps) {
  const baseStyles =
    'inline-flex items-center gap-1.5 rounded-full font-medium transition-all duration-200'

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`

  return (
    <span className={combinedClassName} {...props}>
      {icon && <span className="inline-flex">{icon}</span>}
      {children}
      {removable && (
        <button
          onClick={onRemove}
          className="ml-1 inline-flex items-center justify-center rounded-full p-0.5 hover:bg-black/10 dark:hover:bg-white/10"
          aria-label="Remove badge"
        >
          <svg
            className="h-3 w-3"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      )}
    </span>
  )
}

interface BadgeGroupProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  gap?: 'sm' | 'md' | 'lg'
}

const gapStyles = {
  sm: 'gap-1',
  md: 'gap-2',
  lg: 'gap-3',
}

/**
 * BadgeGroup Component
 * Container for displaying multiple badges with consistent spacing
 */
export function BadgeGroup({
  children,
  gap = 'md',
  className = '',
  ...props
}: BadgeGroupProps) {
  return (
    <div
      className={`flex flex-wrap items-center ${gapStyles[gap]} ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

export type StatusType = 'pending' | 'processing' | 'success' | 'failed'

interface StatusBadgeProps extends Omit<BadgeProps, 'children'> {
  status: StatusType
  label?: string
}

const statusConfig: Record<
  StatusType,
  { variant: BadgeVariant; label: string }
> = {
  pending: { variant: 'warning', label: 'Pending' },
  processing: { variant: 'info', label: 'Processing' },
  success: { variant: 'success', label: 'Success' },
  failed: { variant: 'danger', label: 'Failed' },
}

/**
 * StatusBadge Component
 * Pre-configured badge for displaying status states
 */
export function StatusBadge({
  status,
  label,
  size = 'md',
  ...props
}: StatusBadgeProps) {
  const config = statusConfig[status]

  return (
    <Badge
      variant={config.variant}
      size={size}
      {...props}
    >
      {label || config.label}
    </Badge>
  )
}
