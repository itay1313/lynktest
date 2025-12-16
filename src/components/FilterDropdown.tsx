import { X } from 'lucide-react'
import { Button } from '../design-system/Button'
import { DatePicker } from './DatePicker'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'
import { CalendarIcon } from '../design-system/icons'

interface FilterDropdownProps {
  startDate?: string
  endDate?: string
  onStartDateChange: (date: string) => void
  onEndDateChange: (date: string) => void
  onClear: () => void
}

export const FilterDropdown: React.FC<FilterDropdownProps> = ({
  startDate,
  endDate,
  onStartDateChange,
  onEndDateChange,
  onClear,
}) => {
  const hasFilters = startDate || endDate

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className={`relative ${hasFilters ? 'bg-bg-glass-hover' : ''}`}
        >
          <CalendarIcon className="h-4 w-4" />
          {hasFilters && (
            <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-accent-primary"></span>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-full p-4 bg-bg-secondary border-border-primary">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-text-primary">Date Filters</h3>
            {hasFilters && (
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  onClear()
                }}
                className="text-text-secondary hover:text-text-primary text-xs flex items-center gap-1 transition-colors"
              >
                <X className="h-3 w-3" />
                Clear
              </button>
            )}
          </div>
          <div className="space-y-3">
            <DatePicker
              label="Start Date"
              value={startDate}
              onChange={onStartDateChange}
              labelClassName="text-text-secondary text-xs"
            />
            <DatePicker
              label="End Date"
              value={endDate}
              onChange={onEndDateChange}
              labelClassName="text-text-secondary text-xs"
              maxDate={new Date()} // Block future dates
            />
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

