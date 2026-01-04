# Reusable UI Components Library

This directory contains a comprehensive collection of reusable UI components for the VibeStack application. All components are built with React, TypeScript, and Tailwind CSS.

## Components Overview

### 1. Button Component (`button.tsx`)

Reusable button component with multiple variants and sizes.

**Features:**
- 5 Variants: `primary`, `secondary`, `outline`, `danger`, `success`
- 3 Sizes: `sm`, `md` (default), `lg`
- Loading state with spinner
- Disabled state
- Brand colors: Primary (#5200ff), Accent (#f5e942)

**Usage:**
```tsx
import { Button } from '@/components/ui'

// Primary button
<Button onClick={() => {}}>Click me</Button>

// Different variants
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="danger">Delete</Button>
<Button variant="success">Success</Button>

// Different sizes
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>

// Loading state
<Button isLoading>Saving...</Button>

// Disabled state
<Button disabled>Disabled</Button>
```

### 2. Card Component (`card.tsx`)

Container component for organizing content with border and shadow.

**Components:**
- `Card` - Main container
- `CardHeader` - Header section with border
- `CardTitle` - Title element
- `CardContent` - Content section with padding
- `CardFooter` - Footer section with border

**Features:**
- Hover shadow effect
- Responsive padding
- Optional padding
- Dark mode support

**Usage:**
```tsx
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui'

// Basic card
<Card>
  <CardContent>
    Content goes here
  </CardContent>
</Card>

// Full featured card
<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
  </CardHeader>
  <CardContent>
    Main content
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>

// Without padding
<Card noPadding>
  <div>Custom content</div>
</Card>
```

### 3. Input Component (`input.tsx`)

Form input components including text input, textarea, and select.

**Components:**
- `Input` - Text input field
- `Textarea` - Multi-line text input
- `Select` - Dropdown select

**Features:**
- Label support
- Error states with error messages
- Helper text
- Icon support (Input only)
- Full width option
- Disabled state
- Responsive design

**Usage:**
```tsx
import { Input, Textarea, Select } from '@/components/ui'

// Text input
<Input
  label="Full Name"
  placeholder="John Doe"
  value={name}
  onChange={(e) => setName(e.target.value)}
  helperText="Enter your full name"
/>

// Input with error
<Input
  label="Email"
  type="email"
  error="Invalid email format"
/>

// Textarea
<Textarea
  label="Message"
  placeholder="Enter message..."
  rows={4}
  helperText="Max 500 characters"
/>

// Select dropdown
<Select
  label="Category"
  value={category}
  onChange={(e) => setCategory(e.target.value)}
  options={[
    { value: 'opt1', label: 'Option 1' },
    { value: 'opt2', label: 'Option 2' },
  ]}
/>

// Disabled input
<Input label="Field" disabled />
```

### 4. Modal Component (`modal.tsx`)

Dialog/modal components for displaying content in a focused overlay.

**Components:**
- `Modal` - General purpose modal dialog
- `ModalDialog` - Confirmation dialog with action buttons

**Features:**
- 3 Sizes: `sm`, `md` (default), `lg`
- Backdrop click to close
- ESC key to close
- Close button
- Accessible (ARIA attributes)
- Body scroll lock when open

**Usage:**
```tsx
import { Modal, ModalDialog } from '@/components/ui'
import { useState } from 'react'

// Basic modal
const [isOpen, setIsOpen] = useState(false)

<Button onClick={() => setIsOpen(true)}>Open Modal</Button>

<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Modal Title"
  size="md"
  closeButton={true}
>
  <p>Modal content goes here</p>
</Modal>

// Confirmation dialog
const [isConfirm, setIsConfirm] = useState(false)

<ModalDialog
  isOpen={isConfirm}
  onClose={() => setIsConfirm(false)}
  onConfirm={handleConfirm}
  title="Confirm Action"
  description="Are you sure you want to continue?"
  confirmText="Confirm"
  cancelText="Cancel"
  isDangerous={false}
  isLoading={false}
/>
```

### 5. Badge Component (`badge.tsx`)

Small label/status component for displaying tags, statuses, and labels.

**Components:**
- `Badge` - General purpose badge
- `BadgeGroup` - Container for multiple badges
- `StatusBadge` - Pre-configured status badges

**Features:**
- 7 Variants: `default`, `primary`, `secondary`, `success`, `warning`, `danger`, `info`
- 3 Sizes: `sm`, `md` (default), `lg`
- Icon support
- Removable option with callback
- Pre-configured status states
- Hover effects

**Usage:**
```tsx
import { Badge, BadgeGroup, StatusBadge } from '@/components/ui'

// Basic badges
<Badge>Default</Badge>
<Badge variant="primary">Primary</Badge>
<Badge variant="success">Success</Badge>

// Different sizes
<Badge size="sm">Small</Badge>
<Badge size="md">Medium</Badge>
<Badge size="lg">Large</Badge>

// With icon
<Badge icon={<CheckIcon />}>With Icon</Badge>

// Removable badge
<Badge
  removable
  onRemove={() => console.log('Removed')}
>
  Removable
</Badge>

// Badge group
<BadgeGroup gap="md">
  <Badge>Tag 1</Badge>
  <Badge variant="primary">Tag 2</Badge>
  <Badge variant="success">Tag 3</Badge>
</BadgeGroup>

// Status badges
<StatusBadge status="pending" />
<StatusBadge status="processing" />
<StatusBadge status="success" />
<StatusBadge status="failed" />

// Custom status label
<StatusBadge status="success" label="Completed" />
```

## Styling

All components use:
- **Tailwind CSS v4.1.17** for styling
- **Brand Colors:**
  - Primary: `#5200ff` (purple)
  - Accent: `#f5e942` (yellow)
- **Font:** Inter (from system font stack)
- **Dark Mode:** Full dark mode support via `dark:` prefix

## TypeScript Types

All components are fully typed with TypeScript. Import types as needed:

```tsx
import {
  Button,
  type ButtonVariant,
  type ButtonSize,
  Card,
  Input,
  type InputProps,
  Modal,
  type ModalProps,
  Badge,
  type BadgeVariant,
  StatusBadge,
  type StatusBadgeProps,
} from '@/components/ui'
```

## Component Props

### Button Props
```tsx
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'danger' | 'success'
  size?: 'sm' | 'md' | 'lg'
  isLoading?: boolean
  children: ReactNode
}
```

### Input Props
```tsx
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  helperText?: string
  icon?: ReactNode
  fullWidth?: boolean
}
```

### Card Props
```tsx
interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  noPadding?: boolean
}
```

### Modal Props
```tsx
interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  children: ReactNode
  size?: 'sm' | 'md' | 'lg'
  closeButton?: boolean
}
```

### Badge Props
```tsx
interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode
  variant?: BadgeVariant
  size?: BadgeSize
  icon?: ReactNode
  removable?: boolean
  onRemove?: () => void
}
```

## Accessibility

All components follow WCAG accessibility guidelines:

- Semantic HTML elements
- Proper ARIA attributes
- Keyboard navigation support
- Focus management
- Screen reader support
- Color contrast ratios

## Responsive Design

All components are responsive and optimized for:
- Mobile devices (320px+)
- Tablets (768px+)
- Desktop (1024px+)
- Large screens (1280px+)

## Demo Page

View all components in action at `/components` route. The demo page showcases:
- All component variants
- Different sizes
- States (loading, disabled, error)
- Dark mode
- Responsive behavior

## Integration

To use components in your page:

```tsx
import {
  Button,
  Card,
  Input,
  Modal,
  Badge
} from '@/components/ui'

export function MyComponent() {
  const [isOpen, setIsOpen] = useState(false)
  const [value, setValue] = useState('')

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>My Component</CardTitle>
        </CardHeader>
        <CardContent>
          <Input
            label="Input"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </CardContent>
        <CardFooter>
          <Button onClick={() => setIsOpen(true)}>
            Open Modal
          </Button>
        </CardFooter>
      </Card>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <p>Modal content</p>
      </Modal>
    </>
  )
}
```

## Best Practices

1. **Always import from `@/components/ui`** - Use the path alias for clean imports
2. **Use TypeScript types** - Don't use `any`, leverage component prop types
3. **Dark mode support** - Test components in both light and dark modes
4. **Accessibility** - Use labels, error messages, and ARIA attributes
5. **Responsive** - Design mobile-first and test on multiple screen sizes
6. **Consistent styling** - Use component variants and sizes for consistent UI
7. **Error handling** - Always provide error messages for input validation
8. **Loading states** - Use `isLoading` prop for async operations

## File Structure

```
src/components/ui/
├── button.tsx          # Button component
├── card.tsx            # Card components (Card, CardHeader, CardTitle, CardContent, CardFooter)
├── input.tsx           # Form inputs (Input, Textarea, Select)
├── modal.tsx           # Modal components (Modal, ModalDialog)
├── badge.tsx           # Badge components (Badge, BadgeGroup, StatusBadge)
├── index.ts            # Main export file
└── COMPONENTS.md       # This file
```

## Future Enhancements

Potential additions to the component library:
- Table component
- Pagination component
- Dropdown/Menu component
- Toast/Notification system
- Tabs component
- Accordion component
- Tooltip component
- Date picker
- Color picker
- File upload

---

**Last Updated:** 2024
**Version:** 1.0.0
