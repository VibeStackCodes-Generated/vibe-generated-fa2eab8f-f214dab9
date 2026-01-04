# UI Components Quick Reference

## Import All Components

```tsx
import {
  Button,
  Card, CardHeader, CardTitle, CardContent, CardFooter,
  Input, Textarea, Select,
  Modal, ModalDialog,
  Badge, BadgeGroup, StatusBadge,
} from '@/components/ui'
```

## Button

### Basic Usage
```tsx
<Button>Default Button</Button>
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="danger">Danger</Button>
<Button variant="success">Success</Button>
```

### Sizes
```tsx
<Button size="sm">Small</Button>
<Button size="md">Medium (default)</Button>
<Button size="lg">Large</Button>
```

### States
```tsx
<Button isLoading>Loading...</Button>
<Button disabled>Disabled</Button>
```

---

## Card

### Complete Card
```tsx
<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
  </CardHeader>
  <CardContent>
    Main content goes here
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>
```

### Minimal Card
```tsx
<Card>
  <CardContent>
    Content only
  </CardContent>
</Card>
```

---

## Input

### Text Input
```tsx
<Input
  label="Full Name"
  placeholder="Enter your name"
  value={name}
  onChange={(e) => setName(e.target.value)}
/>
```

### With Error
```tsx
<Input
  label="Email"
  type="email"
  error="Invalid email format"
  helperText="Enter a valid email address"
/>
```

### With Icon
```tsx
import { SearchIcon } from 'some-icon-library'

<Input
  label="Search"
  icon={<SearchIcon />}
  placeholder="Search..."
/>
```

### Textarea
```tsx
<Textarea
  label="Message"
  placeholder="Enter message..."
  rows={5}
  helperText="Maximum 500 characters"
/>
```

### Select
```tsx
<Select
  label="Category"
  value={category}
  onChange={(e) => setCategory(e.target.value)}
  options={[
    { value: 'opt1', label: 'Option 1' },
    { value: 'opt2', label: 'Option 2' },
    { value: 'opt3', label: 'Option 3' },
  ]}
/>
```

---

## Modal

### Basic Modal
```tsx
const [isOpen, setIsOpen] = useState(false)

<>
  <Button onClick={() => setIsOpen(true)}>Open Modal</Button>

  <Modal
    isOpen={isOpen}
    onClose={() => setIsOpen(false)}
    title="Modal Title"
    size="md"
  >
    <p>Modal content here</p>
  </Modal>
</>
```

### Confirmation Dialog
```tsx
const [isOpen, setIsOpen] = useState(false)

<>
  <Button onClick={() => setIsOpen(true)}>Delete</Button>

  <ModalDialog
    isOpen={isOpen}
    onClose={() => setIsOpen(false)}
    onConfirm={handleDelete}
    title="Confirm Delete"
    description="Are you sure? This cannot be undone."
    confirmText="Delete"
    cancelText="Cancel"
    isDangerous={true}
    isLoading={isDeleting}
  />
</>
```

### Modal Sizes
```tsx
<Modal size="sm">Small</Modal>    {/* max-w-sm */}
<Modal size="md">Medium</Modal>   {/* max-w-md (default) */}
<Modal size="lg">Large</Modal>    {/* max-w-lg */}
```

---

## Badge

### Basic Badges
```tsx
<Badge>Default</Badge>
<Badge variant="primary">Primary</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="danger">Danger</Badge>
<Badge variant="info">Info</Badge>
```

### Sizes
```tsx
<Badge size="sm">Small</Badge>
<Badge size="md">Medium (default)</Badge>
<Badge size="lg">Large</Badge>
```

### Removable Badge
```tsx
<Badge
  variant="primary"
  removable
  onRemove={() => console.log('Removed')}
>
  Removable Tag
</Badge>
```

### Status Badges
```tsx
<StatusBadge status="pending" />      {/* Yellow */}
<StatusBadge status="processing" />  {/* Blue */}
<StatusBadge status="success" />     {/* Green */}
<StatusBadge status="failed" />      {/* Red */}

// With custom label
<StatusBadge status="success" label="Completed" />
```

### Badge Group
```tsx
<BadgeGroup gap="md">
  <Badge variant="primary">Tag 1</Badge>
  <Badge variant="secondary">Tag 2</Badge>
  <Badge variant="success">Tag 3</Badge>
</BadgeGroup>
```

---

## Complete Form Example

```tsx
import { useState } from 'react'
import {
  Button,
  Card, CardHeader, CardTitle, CardContent, CardFooter,
  Input, Textarea,
} from '@/components/ui'

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      console.log('Form submitted:', formData)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Contact Us</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Name"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            error={errors.name}
          />
          <Input
            label="Email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            error={errors.email}
          />
          <Textarea
            label="Message"
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
            rows={5}
          />
        </form>
      </CardContent>
      <CardFooter>
        <Button
          type="submit"
          isLoading={isSubmitting}
          onClick={handleSubmit}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>
      </CardFooter>
    </Card>
  )
}
```

---

## Color Variants Reference

### Button Variants
- `primary` - #5200ff (Purple)
- `secondary` - #f5e942 (Yellow)
- `outline` - #5200ff border
- `danger` - Red (#dc2626)
- `success` - Green (#16a34a)

### Badge Variants
- `default` - Gray
- `primary` - #5200ff (Purple)
- `secondary` - #f5e942 (Yellow)
- `success` - Green
- `warning` - Yellow
- `danger` - Red
- `info` - Blue

### Status Variants
- `pending` - Warning (yellow)
- `processing` - Info (blue)
- `success` - Green
- `failed` - Danger (red)

---

## TypeScript Types

### Button Types
```tsx
type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'danger' | 'success'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  isLoading?: boolean
  children: ReactNode
}
```

### Badge Types
```tsx
type BadgeVariant = 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info'
type BadgeSize = 'sm' | 'md' | 'lg'
type StatusType = 'pending' | 'processing' | 'success' | 'failed'

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode
  variant?: BadgeVariant
  size?: BadgeSize
  icon?: ReactNode
  removable?: boolean
  onRemove?: () => void
}
```

---

## Tips & Best Practices

1. **Always use the path alias** `@/components/ui` for imports
2. **Use TypeScript types** - Don't use `any`, leverage component prop types
3. **Test dark mode** - All components support dark mode
4. **Responsive first** - Design mobile-first then enhance
5. **Error messages** - Always provide helpful error messages for inputs
6. **Loading states** - Use `isLoading` prop for async operations
7. **Accessibility** - Use labels, ARIA attributes, and semantic HTML
8. **Consistent sizing** - Use the size variants for consistency

---

## Demo Page

View all components in action:
- Local: `http://localhost:5173/components`
- Production: `/components` route

---

**Last Updated:** 2024
**Version:** 1.0.0
