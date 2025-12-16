/**
 * Design System Package
 * 
 * This package contains reusable UI components following a consistent design system.
 * All components are built with TypeScript and Tailwind CSS for styling.
 * 
 * Components:
 * - Button: Interactive button with multiple variants and sizes
 * - Card: Container component with consistent styling
 * - Table: Data table with customizable columns
 * - Input: Form input with label and error handling
 * - Badge: Status indicator with color variants
 * - Toggle: Neumorphic toggle switch component
 */

export { Button } from './Button'
export type { ButtonProps } from './Button'

export { Card } from './Card'
export type { CardProps } from './Card'

export { Table } from './Table'
export type { TableProps, TableColumn } from './Table'

export { Input } from './Input'
export type { InputProps } from './Input'

export { Badge } from './Badge'
export type { BadgeProps } from './Badge'

export { Toggle } from './Toggle'
export type { ToggleProps } from './Toggle'

export { 
  Typography,
  Display1,
  Display2,
  H1,
  H2,
  H3,
  H4,
  Body,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  BodyLarge,
  BodySmall,
  Caption
} from './Typography'
export type { TypographyProps, H1Props, H2Props, H3Props, H4Props, BodyProps } from './Typography'

