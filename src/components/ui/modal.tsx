import { ReactNode, useState, useEffect } from 'react'
import { Button } from './button'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  children: ReactNode
  size?: 'sm' | 'md' | 'lg'
  closeButton?: boolean
}

const sizeStyles = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
}

/**
 * Modal Component
 * Accessible dialog/modal component with customizable size
 * Includes backdrop, close button, and keyboard support
 */
export function Modal({
  isOpen,
  onClose,
  title,
  children,
  size = 'md',
  closeButton = true,
}: ModalProps) {
  const [isVisible, setIsVisible] = useState(isOpen)

  useEffect(() => {
    setIsVisible(isOpen)

    if (isOpen) {
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden'
      // Handle ESC key press
      const handleEscape = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
          onClose()
        }
      }
      document.addEventListener('keydown', handleEscape)
      return () => {
        document.removeEventListener('keydown', handleEscape)
        document.body.style.overflow = 'unset'
      }
    }
  }, [isOpen, onClose])

  if (!isVisible) return null

  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    // Only close if clicking on the backdrop itself, not the modal content
    if (event.target === event.currentTarget) {
      onClose()
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/50 p-4"
      onClick={handleBackdropClick}
      role="presentation"
    >
      <div
        className={`${sizeStyles[size]} w-full rounded-lg border border-gray-200 bg-white shadow-lg dark:border-gray-800 dark:bg-gray-900`}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? 'modal-title' : undefined}
      >
        {/* Modal Header */}
        {(title || closeButton) && (
          <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4 dark:border-gray-800">
            {title && (
              <h2
                id="modal-title"
                className="text-lg font-semibold text-gray-900 dark:text-gray-50"
              >
                {title}
              </h2>
            )}
            {closeButton && (
              <button
                onClick={onClose}
                className="ml-auto inline-flex items-center justify-center rounded-lg p-1.5 hover:bg-gray-100 dark:hover:bg-gray-800"
                aria-label="Close modal"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            )}
          </div>
        )}

        {/* Modal Content */}
        <div className="px-6 py-4">{children}</div>
      </div>
    </div>
  )
}

interface ModalDialogProps {
  isOpen: boolean
  onClose: () => void
  onConfirm?: () => void
  title: string
  description?: string
  children?: ReactNode
  confirmText?: string
  cancelText?: string
  isDangerous?: boolean
  isLoading?: boolean
}

/**
 * ModalDialog Component
 * Confirmation dialog with title, description, and action buttons
 */
export function ModalDialog({
  isOpen,
  onClose,
  onConfirm,
  title,
  description,
  children,
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  isDangerous = false,
  isLoading = false,
}: ModalDialogProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title={title} size="sm">
      <div className="space-y-4">
        {description && (
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {description}
          </p>
        )}

        {children}

        <div className="flex gap-3 pt-4">
          <Button
            variant="outline"
            onClick={onClose}
            disabled={isLoading}
            className="flex-1"
          >
            {cancelText}
          </Button>
          <Button
            variant={isDangerous ? 'danger' : 'primary'}
            onClick={onConfirm}
            isLoading={isLoading}
            className="flex-1"
          >
            {confirmText}
          </Button>
        </div>
      </div>
    </Modal>
  )
}
