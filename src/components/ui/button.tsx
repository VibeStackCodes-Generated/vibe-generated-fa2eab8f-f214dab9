import { ButtonHTMLAttributes, ReactNode } from 'react'

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'danger' | 'success'
export type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  isLoading?: boolean
  children: ReactNode
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-[#5200ff] text-white hover:bg-[#4000dd] focus:ring-[#5200ff]',
  secondary:
    'bg-[#f5e942] text-gray-900 hover:bg-[#e0d42a] focus:ring-[#f5e942]',
  outline:
    'border-2 border-[#5200ff] text-[#5200ff] hover:bg-[#5200ff] hover:text-white focus:ring-[#5200ff]',
  danger:
    'bg-red-600 text-white hover:bg-red-700 focus:ring-red-600',
  success:
    'bg-green-600 text-white hover:bg-green-700 focus:ring-green-600',
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
}

/**
 * Button Component
 * Reusable button with multiple variants and sizes
 * Uses brand colors: Primary (#5200ff), Accent (#f5e942)
 */
export function Button({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  disabled = false,
  children,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-950 disabled:opacity-50 disabled:cursor-not-allowed'

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`

  return (
    <button
      {...props}
      disabled={disabled || isLoading}
      className={combinedClassName}
    >
      {isLoading && (
        <svg
          className="h-5 w-5 animate-spin"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
      {children}
    </button>
  )
}
