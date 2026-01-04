/**
 * UI Components Usage Examples
 *
 * This file contains practical examples of how to use the reusable UI components
 * in real-world scenarios. Each example demonstrates best practices and common patterns.
 */

import { useState } from 'react'
import {
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  Input,
  Textarea,
  Select,
  Modal,
  ModalDialog,
  Badge,
  BadgeGroup,
  StatusBadge,
} from './index'

/**
 * Example 1: Form Component
 * Complete form with validation and submission
 */
export function FormExample() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    category: 'support',
    message: '',
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))
      console.log('Form submitted:', formData)
      // Reset form on success
      setFormData({
        name: '',
        email: '',
        subject: '',
        category: 'support',
        message: '',
      })
      setErrors({})
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Contact Form</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Name"
            placeholder="John Doe"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
            error={errors.name}
          />

          <Input
            label="Email"
            type="email"
            placeholder="john@example.com"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            error={errors.email}
          />

          <Input
            label="Subject"
            placeholder="How can we help?"
            value={formData.subject}
            onChange={(e) =>
              setFormData({ ...formData, subject: e.target.value })
            }
          />

          <Select
            label="Category"
            value={formData.category}
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
            options={[
              { value: 'support', label: 'Support' },
              { value: 'feedback', label: 'Feedback' },
              { value: 'bug', label: 'Bug Report' },
            ]}
          />

          <Textarea
            label="Message"
            placeholder="Please describe your message..."
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            error={errors.message}
            helperText={`${formData.message.length}/500 characters`}
            rows={5}
          />
        </form>
      </CardContent>
      <CardFooter className="flex gap-3">
        <Button
          variant="outline"
          onClick={() =>
            setFormData({
              name: '',
              email: '',
              subject: '',
              category: 'support',
              message: '',
            })
          }
          disabled={isSubmitting}
        >
          Clear
        </Button>
        <Button onClick={handleSubmit} isLoading={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>
      </CardFooter>
    </Card>
  )
}

/**
 * Example 2: Modal Dialog Example
 * Confirm deletion with dialog
 */
export function ModalDialogExample() {
  const [items, setItems] = useState([
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ])

  const [selectedId, setSelectedId] = useState<number | null>(null)
  const [isDeleting, setIsDeleting] = useState(false)

  const handleDelete = async () => {
    setIsDeleting(true)
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setItems(items.filter((item) => item.id !== selectedId))
      setSelectedId(null)
    } finally {
      setIsDeleting(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Item List</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between rounded-lg border border-gray-200 p-4 dark:border-gray-800"
            >
              <span>{item.name}</span>
              <Button
                variant="danger"
                size="sm"
                onClick={() => setSelectedId(item.id)}
              >
                Delete
              </Button>
            </div>
          ))}
        </div>
      </CardContent>

      <ModalDialog
        isOpen={selectedId !== null}
        onClose={() => setSelectedId(null)}
        onConfirm={handleDelete}
        title="Delete Item"
        description="Are you sure you want to delete this item? This action cannot be undone."
        confirmText="Delete"
        cancelText="Cancel"
        isDangerous={true}
        isLoading={isDeleting}
      />
    </Card>
  )
}

/**
 * Example 3: Status Tracking Component
 * Display and manage status of multiple items
 */
export function StatusTrackingExample() {
  const [tasks, setTasks] = useState([
    { id: 1, name: 'Design', status: 'success' as const },
    { id: 2, name: 'Development', status: 'processing' as const },
    { id: 3, name: 'Testing', status: 'pending' as const },
    { id: 4, name: 'Deployment', status: 'pending' as const },
  ])

  const updateStatus = (
    id: number,
    status: 'pending' | 'processing' | 'success' | 'failed'
  ) => {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, status } : task))
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Project Status</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="flex items-center justify-between rounded-lg border border-gray-200 p-4 dark:border-gray-800"
          >
            <div className="flex-1">
              <h4 className="font-medium text-gray-900 dark:text-gray-50">
                {task.name}
              </h4>
              <StatusBadge status={task.status} size="sm" />
            </div>
            <div className="flex gap-2">
              <Button
                size="sm"
                variant="outline"
                onClick={() => updateStatus(task.id, 'pending')}
              >
                Pending
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={() => updateStatus(task.id, 'processing')}
              >
                Processing
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={() => updateStatus(task.id, 'success')}
              >
                Complete
              </Button>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

/**
 * Example 4: Tag Management Component
 * Add and remove tags with badges
 */
export function TagManagementExample() {
  const [tags, setTags] = useState(['React', 'TypeScript', 'Tailwind'])
  const [newTag, setNewTag] = useState('')

  const addTag = () => {
    if (newTag.trim() && !tags.includes(newTag)) {
      setTags([...tags, newTag])
      setNewTag('')
    }
  }

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove))
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Tags</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex gap-2">
          <Input
            placeholder="Add a new tag"
            value={newTag}
            onChange={(e) => setNewTag(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                addTag()
              }
            }}
          />
          <Button onClick={addTag}>Add</Button>
        </div>

        <BadgeGroup>
          {tags.map((tag) => (
            <Badge
              key={tag}
              variant="primary"
              removable
              onRemove={() => removeTag(tag)}
            >
              {tag}
            </Badge>
          ))}
        </BadgeGroup>
      </CardContent>
    </Card>
  )
}

/**
 * Example 5: Multi-step Modal Example
 * Modal with multiple steps/screens
 */
export function MultiStepModalExample() {
  const [isOpen, setIsOpen] = useState(false)
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    step1Input: '',
    step2Input: '',
  })

  const handleNext = () => {
    if (step < 2) {
      setStep(step + 1)
    }
  }

  const handlePrevious = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  const handleSubmit = () => {
    console.log('Submitted:', formData)
    setIsOpen(false)
    setStep(1)
    setFormData({ step1Input: '', step2Input: '' })
  }

  return (
    <>
      <Card>
        <CardContent className="pt-6">
          <Button onClick={() => setIsOpen(true)}>Open Multi-step Modal</Button>
        </CardContent>
      </Card>

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title={`Step ${step} of 2`}
        size="md"
      >
        <div className="space-y-4">
          {step === 1 && (
            <Input
              label="Step 1 Input"
              placeholder="Enter something"
              value={formData.step1Input}
              onChange={(e) =>
                setFormData({ ...formData, step1Input: e.target.value })
              }
            />
          )}

          {step === 2 && (
            <Input
              label="Step 2 Input"
              placeholder="Enter more information"
              value={formData.step2Input}
              onChange={(e) =>
                setFormData({ ...formData, step2Input: e.target.value })
              }
            />
          )}

          <div className="flex gap-3 pt-4">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={step === 1}
            >
              Previous
            </Button>
            <Button
              variant="outline"
              onClick={() => setIsOpen(false)}
              className="flex-1"
            >
              Cancel
            </Button>
            {step < 2 && (
              <Button onClick={handleNext} className="flex-1">
                Next
              </Button>
            )}
            {step === 2 && (
              <Button onClick={handleSubmit} className="flex-1">
                Submit
              </Button>
            )}
          </div>
        </div>
      </Modal>
    </>
  )
}

/**
 * Example 6: Filter and Sort Component
 * Using selects and badges for filtering
 */
export function FilterAndSortExample() {
  const [filters, setFilters] = useState({
    category: 'all',
    status: 'all',
  })

  const [activeFilters, setActiveFilters] = useState<string[]>([])

  const applyFilter = () => {
    const appliedFilters: string[] = []
    if (filters.category !== 'all') {
      appliedFilters.push(`Category: ${filters.category}`)
    }
    if (filters.status !== 'all') {
      appliedFilters.push(`Status: ${filters.status}`)
    }
    setActiveFilters(appliedFilters)
  }

  const clearFilters = () => {
    setFilters({ category: 'all', status: 'all' })
    setActiveFilters([])
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Filters</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2">
          <Select
            label="Category"
            value={filters.category}
            onChange={(e) =>
              setFilters({ ...filters, category: e.target.value })
            }
            options={[
              { value: 'all', label: 'All Categories' },
              { value: 'tech', label: 'Technology' },
              { value: 'design', label: 'Design' },
              { value: 'business', label: 'Business' },
            ]}
          />

          <Select
            label="Status"
            value={filters.status}
            onChange={(e) =>
              setFilters({ ...filters, status: e.target.value })
            }
            options={[
              { value: 'all', label: 'All Statuses' },
              { value: 'active', label: 'Active' },
              { value: 'inactive', label: 'Inactive' },
            ]}
          />
        </div>

        {activeFilters.length > 0 && (
          <div>
            <p className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
              Active Filters:
            </p>
            <BadgeGroup>
              {activeFilters.map((filter, idx) => (
                <Badge
                  key={idx}
                  variant="primary"
                  removable
                  onRemove={clearFilters}
                >
                  {filter}
                </Badge>
              ))}
            </BadgeGroup>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex gap-3">
        <Button variant="outline" onClick={clearFilters}>
          Clear All
        </Button>
        <Button onClick={applyFilter}>Apply Filters</Button>
      </CardFooter>
    </Card>
  )
}

// Export all examples for demonstration
export const examples = {
  FormExample,
  ModalDialogExample,
  StatusTrackingExample,
  TagManagementExample,
  MultiStepModalExample,
  FilterAndSortExample,
}
