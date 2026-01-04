import { InputHTMLAttributes, ReactNode } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  helperText?: string
  icon?: ReactNode
  fullWidth?: boolean
}

/**
 * Input Component
 * Reusable text input with label, error states, and helper text
 * Supports various input types and accessibility features
 */
export function Input({
  label,
  error,
  helperText,
  icon,
  fullWidth = true,
  className = '',
  disabled = false,
  ...props
}: InputProps) {
  const baseStyles =
    'block rounded-lg border-2 bg-white px-4 py-2 font-medium text-gray-900 transition-colors duration-200 focus:outline-none dark:bg-gray-900 dark:text-gray-50'

  const borderStyles = error
    ? 'border-red-500 focus:border-red-600 focus:ring-2 focus:ring-red-500 focus:ring-opacity-20'
    : 'border-gray-300 focus:border-[#5200ff] focus:ring-2 focus:ring-[#5200ff] focus:ring-opacity-20 dark:border-gray-700'

  const disabledStyles = disabled
    ? 'cursor-not-allowed opacity-50 dark:opacity-60'
    : ''

  const widthStyles = fullWidth ? 'w-full' : ''

  const combinedInputClassName = `${baseStyles} ${borderStyles} ${disabledStyles} ${widthStyles} ${className}`

  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {label}
        </label>
      )}

      <div className="relative">
        {icon && (
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <span className="text-gray-400">{icon}</span>
          </div>
        )}

        <input
          {...props}
          disabled={disabled}
          className={`${combinedInputClassName} ${icon ? 'pl-10' : ''}`}
        />
      </div>

      {error && (
        <p className="text-sm font-medium text-red-600 dark:text-red-400">
          {error}
        </p>
      )}

      {helperText && !error && (
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {helperText}
        </p>
      )}
    </div>
  )
}

interface TextareaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
  helperText?: string
  fullWidth?: boolean
  rows?: number
}

/**
 * Textarea Component
 * Multi-line input field with label, error states, and helper text
 */
export function Textarea({
  label,
  error,
  helperText,
  fullWidth = true,
  rows = 4,
  className = '',
  disabled = false,
  ...props
}: TextareaProps) {
  const baseStyles =
    'block rounded-lg border-2 bg-white px-4 py-2 font-medium text-gray-900 transition-colors duration-200 focus:outline-none dark:bg-gray-900 dark:text-gray-50'

  const borderStyles = error
    ? 'border-red-500 focus:border-red-600 focus:ring-2 focus:ring-red-500 focus:ring-opacity-20'
    : 'border-gray-300 focus:border-[#5200ff] focus:ring-2 focus:ring-[#5200ff] focus:ring-opacity-20 dark:border-gray-700'

  const disabledStyles = disabled
    ? 'cursor-not-allowed opacity-50 dark:opacity-60'
    : ''

  const widthStyles = fullWidth ? 'w-full' : ''

  const combinedClassName = `${baseStyles} ${borderStyles} ${disabledStyles} ${widthStyles} ${className} resize-none`

  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {label}
        </label>
      )}

      <textarea
        {...(props as InputHTMLAttributes<HTMLTextAreaElement>)}
        disabled={disabled}
        rows={rows}
        className={combinedClassName}
      />

      {error && (
        <p className="text-sm font-medium text-red-600 dark:text-red-400">
          {error}
        </p>
      )}

      {helperText && !error && (
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {helperText}
        </p>
      )}
    </div>
  )
}

interface SelectProps extends InputHTMLAttributes<HTMLSelectElement> {
  label?: string
  error?: string
  helperText?: string
  fullWidth?: boolean
  options: Array<{ value: string; label: string }>
}

/**
 * Select Component
 * Dropdown select input with label, error states, and helper text
 */
export function Select({
  label,
  error,
  helperText,
  fullWidth = true,
  options,
  className = '',
  disabled = false,
  ...props
}: SelectProps) {
  const baseStyles =
    'block rounded-lg border-2 bg-white px-4 py-2 font-medium text-gray-900 transition-colors duration-200 focus:outline-none dark:bg-gray-900 dark:text-gray-50'

  const borderStyles = error
    ? 'border-red-500 focus:border-red-600 focus:ring-2 focus:ring-red-500 focus:ring-opacity-20'
    : 'border-gray-300 focus:border-[#5200ff] focus:ring-2 focus:ring-[#5200ff] focus:ring-opacity-20 dark:border-gray-700'

  const disabledStyles = disabled
    ? 'cursor-not-allowed opacity-50 dark:opacity-60'
    : ''

  const widthStyles = fullWidth ? 'w-full' : ''

  const combinedClassName = `${baseStyles} ${borderStyles} ${disabledStyles} ${widthStyles} ${className}`

  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {label}
        </label>
      )}

      <select
        {...(props as InputHTMLAttributes<HTMLSelectElement>)}
        disabled={disabled}
        className={combinedClassName}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      {error && (
        <p className="text-sm font-medium text-red-600 dark:text-red-400">
          {error}
        </p>
      )}

      {helperText && !error && (
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {helperText}
        </p>
      )}
    </div>
  )
}
