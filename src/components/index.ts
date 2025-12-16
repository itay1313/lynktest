/**
 * Components Package
 * 
 * Reusable application components organized by functionality.
 */

// Layout Components
export { default as BottomNavigation } from './BottomNavigation'
export { default as MagicBento } from './MagicBento'
export { BentoCard, BentoGrid } from './BentoGrid'
export type { BentoCardProps, BentoGridProps } from './BentoGrid'
export { Sidebar } from './Sidebar'

// Data Components
export { DataTable } from './DataTable'

// Form Components
export { FilterDropdown } from './FilterDropdown'

// Modal Components
export { HelpModal } from './HelpModal'
export { AnalyticsModal } from './AnalyticsModal'
export { SettingsModal } from './SettingsModal'
export { ProfileModal } from './ProfileModal'

// UI Primitives (shadcn-style)
export {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from './ui/table'

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuCheckboxItem,
} from './ui/dropdown-menu'

