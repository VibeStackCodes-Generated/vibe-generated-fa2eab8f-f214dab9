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
} from '@/components/ui'

/**
 * Components Demo Page
 * Showcase of all reusable UI components with examples
 */
export function ComponentsDemo() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isConfirmOpen, setIsConfirmOpen] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: 'option1',
    message: '',
  })

  const handleRemoveBadge = (index: number) => {
    console.log(`Removed badge ${index}`)
  }

  return (
    <div className="space-y-12 py-8">
      {/* Page Title */}
      <div className="space-y-2">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-50">
          UI Components
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Showcase of all reusable components available in the system
        </p>
      </div>

      {/* Button Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-50">
          Buttons
        </h2>

        <Card>
          <CardContent className="space-y-6">
            {/* Primary Buttons */}
            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                Primary Variant
              </h3>
              <div className="flex flex-wrap gap-3">
                <Button size="sm">Small Button</Button>
                <Button size="md">Medium Button</Button>
                <Button size="lg">Large Button</Button>
              </div>
            </div>

            {/* Secondary Buttons */}
            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                Secondary Variant
              </h3>
              <div className="flex flex-wrap gap-3">
                <Button variant="secondary" size="sm">
                  Small Button
                </Button>
                <Button variant="secondary" size="md">
                  Medium Button
                </Button>
                <Button variant="secondary" size="lg">
                  Large Button
                </Button>
              </div>
            </div>

            {/* Outline Buttons */}
            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                Outline Variant
              </h3>
              <div className="flex flex-wrap gap-3">
                <Button variant="outline" size="sm">
                  Small Button
                </Button>
                <Button variant="outline" size="md">
                  Medium Button
                </Button>
                <Button variant="outline" size="lg">
                  Large Button
                </Button>
              </div>
            </div>

            {/* Status Buttons */}
            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                Status Variants
              </h3>
              <div className="flex flex-wrap gap-3">
                <Button variant="success">Success Button</Button>
                <Button variant="danger">Danger Button</Button>
              </div>
            </div>

            {/* Loading State */}
            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                Loading State
              </h3>
              <div className="flex flex-wrap gap-3">
                <Button isLoading>Loading Button</Button>
              </div>
            </div>

            {/* Disabled State */}
            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                Disabled State
              </h3>
              <div className="flex flex-wrap gap-3">
                <Button disabled>Disabled Button</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Card Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-50">
          Cards
        </h2>

        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardContent className="pt-6">
              <p className="text-gray-600 dark:text-gray-400">
                Basic card with just content
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Card with Header</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-400">
                Card with header section
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Full Featured Card</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-400">
                This card has header, content, and footer sections
              </p>
            </CardContent>
            <CardFooter>
              <Button size="sm">Action</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Hover Effect</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-400">
                Cards have smooth hover shadow effect
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Input Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-50">
          Form Inputs
        </h2>

        <Card>
          <CardContent className="space-y-6 pt-6">
            {/* Text Input */}
            <div>
              <h3 className="mb-3 text-sm font-semibold text-gray-700 dark:text-gray-300">
                Text Input
              </h3>
              <Input
                label="Full Name"
                placeholder="John Doe"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                helperText="Enter your full name"
              />
            </div>

            {/* Input with Error */}
            <div>
              <h3 className="mb-3 text-sm font-semibold text-gray-700 dark:text-gray-300">
                Input with Error
              </h3>
              <Input
                label="Email"
                type="email"
                placeholder="example@email.com"
                error="Invalid email format"
              />
            </div>

            {/* Textarea */}
            <div>
              <h3 className="mb-3 text-sm font-semibold text-gray-700 dark:text-gray-300">
                Textarea
              </h3>
              <Textarea
                label="Message"
                placeholder="Enter your message here..."
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                helperText="Maximum 500 characters"
                rows={4}
              />
            </div>

            {/* Select */}
            <div>
              <h3 className="mb-3 text-sm font-semibold text-gray-700 dark:text-gray-300">
                Select
              </h3>
              <Select
                label="Category"
                value={formData.category}
                onChange={(e) =>
                  setFormData({ ...formData, category: e.target.value })
                }
                options={[
                  { value: 'option1', label: 'Option 1' },
                  { value: 'option2', label: 'Option 2' },
                  { value: 'option3', label: 'Option 3' },
                ]}
              />
            </div>

            {/* Disabled Input */}
            <div>
              <h3 className="mb-3 text-sm font-semibold text-gray-700 dark:text-gray-300">
                Disabled Input
              </h3>
              <Input
                label="Disabled Field"
                placeholder="This field is disabled"
                disabled
              />
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Modal Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-50">
          Modals
        </h2>

        <Card>
          <CardContent className="space-y-4 pt-6">
            <div>
              <h3 className="mb-3 text-sm font-semibold text-gray-700 dark:text-gray-300">
                Basic Modal
              </h3>
              <Button onClick={() => setIsModalOpen(true)}>
                Open Modal
              </Button>
            </div>

            <div>
              <h3 className="mb-3 text-sm font-semibold text-gray-700 dark:text-gray-300">
                Confirmation Dialog
              </h3>
              <Button onClick={() => setIsConfirmOpen(true)}>
                Open Confirmation
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Modal Examples */}
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="Modal Example"
          size="md"
        >
          <div className="space-y-4">
            <p className="text-gray-600 dark:text-gray-400">
              This is a modal dialog. Click the X button or press ESC to close.
            </p>
            <div className="flex gap-3">
              <Button
                variant="outline"
                onClick={() => setIsModalOpen(false)}
              >
                Close
              </Button>
              <Button onClick={() => setIsModalOpen(false)}>
                Confirm
              </Button>
            </div>
          </div>
        </Modal>

        <ModalDialog
          isOpen={isConfirmOpen}
          onClose={() => setIsConfirmOpen(false)}
          onConfirm={() => setIsConfirmOpen(false)}
          title="Are you sure?"
          description="This action cannot be undone. Please confirm to proceed."
          confirmText="Confirm"
          cancelText="Cancel"
        />
      </section>

      {/* Badge Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-50">
          Badges
        </h2>

        <Card>
          <CardContent className="space-y-6 pt-6">
            {/* Default Badges */}
            <div>
              <h3 className="mb-3 text-sm font-semibold text-gray-700 dark:text-gray-300">
                Default Variant
              </h3>
              <BadgeGroup>
                <Badge>Default</Badge>
                <Badge size="sm">Small</Badge>
                <Badge size="lg">Large</Badge>
              </BadgeGroup>
            </div>

            {/* Primary Badges */}
            <div>
              <h3 className="mb-3 text-sm font-semibold text-gray-700 dark:text-gray-300">
                Primary Variant
              </h3>
              <BadgeGroup>
                <Badge variant="primary">Primary</Badge>
                <Badge variant="primary" size="sm">
                  Small
                </Badge>
                <Badge variant="primary" size="lg">
                  Large
                </Badge>
              </BadgeGroup>
            </div>

            {/* Secondary Badges */}
            <div>
              <h3 className="mb-3 text-sm font-semibold text-gray-700 dark:text-gray-300">
                Secondary Variant
              </h3>
              <BadgeGroup>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="secondary" size="sm">
                  Small
                </Badge>
              </BadgeGroup>
            </div>

            {/* Status Badges */}
            <div>
              <h3 className="mb-3 text-sm font-semibold text-gray-700 dark:text-gray-300">
                Status Badges
              </h3>
              <BadgeGroup>
                <StatusBadge status="pending" />
                <StatusBadge status="processing" />
                <StatusBadge status="success" />
                <StatusBadge status="failed" />
              </BadgeGroup>
            </div>

            {/* Color Variants */}
            <div>
              <h3 className="mb-3 text-sm font-semibold text-gray-700 dark:text-gray-300">
                All Color Variants
              </h3>
              <BadgeGroup>
                <Badge variant="success">Success</Badge>
                <Badge variant="warning">Warning</Badge>
                <Badge variant="danger">Danger</Badge>
                <Badge variant="info">Info</Badge>
              </BadgeGroup>
            </div>

            {/* Removable Badges */}
            <div>
              <h3 className="mb-3 text-sm font-semibold text-gray-700 dark:text-gray-300">
                Removable Badges
              </h3>
              <BadgeGroup>
                <Badge
                  removable
                  onRemove={() => handleRemoveBadge(0)}
                >
                  Removable 1
                </Badge>
                <Badge
                  variant="primary"
                  removable
                  onRemove={() => handleRemoveBadge(1)}
                >
                  Removable 2
                </Badge>
              </BadgeGroup>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Spacing */}
      <div className="h-8" />
    </div>
  )
}
