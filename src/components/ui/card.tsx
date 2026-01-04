import { HTMLAttributes, ReactNode } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  noPadding?: boolean
}

/**
 * Card Component
 * Reusable container component for content with border and shadow
 * Provides consistent spacing and styling
 */
export function Card({
  children,
  noPadding = false,
  className = '',
  ...props
}: CardProps) {
  const baseStyles =
    'rounded-lg border border-gray-200 bg-white shadow-sm transition-shadow duration-200 hover:shadow-md dark:border-gray-800 dark:bg-gray-900'
  const paddingStyles = noPadding ? '' : 'p-6'

  return (
    <div className={`${baseStyles} ${paddingStyles} ${className}`} {...props}>
      {children}
    </div>
  )
}

interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

/**
 * CardHeader Component
 * Header section of a card with proper spacing
 */
export function CardHeader({ children, className = '', ...props }: CardHeaderProps) {
  return (
    <div className={`border-b border-gray-200 px-6 py-4 dark:border-gray-800 ${className}`} {...props}>
      {children}
    </div>
  )
}

interface CardTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode
}

/**
 * CardTitle Component
 * Title element for card headers
 */
export function CardTitle({ children, className = '', ...props }: CardTitleProps) {
  return (
    <h2 className={`text-xl font-semibold text-gray-900 dark:text-gray-50 ${className}`} {...props}>
      {children}
    </h2>
  )
}

interface CardContentProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

/**
 * CardContent Component
 * Content section of a card with proper spacing
 */
export function CardContent({
  children,
  className = '',
  ...props
}: CardContentProps) {
  return (
    <div className={`px-6 py-4 ${className}`} {...props}>
      {children}
    </div>
  )
}

interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

/**
 * CardFooter Component
 * Footer section of a card with border and proper spacing
 */
export function CardFooter({
  children,
  className = '',
  ...props
}: CardFooterProps) {
  return (
    <div
      className={`border-t border-gray-200 px-6 py-4 dark:border-gray-800 ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}
