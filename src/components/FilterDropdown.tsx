import { Calendar, X } from 'lucide-react'
import { Button } from '../design-system/Button'
import { Input } from '../design-system/Input'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'

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
          <Calendar className="mr-2 h-4 w-4" />
          Filters
          {hasFilters && (
            <span className="ml-2 h-2 w-2 rounded-full bg-accent-primary"></span>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-80 p-4 bg-bg-secondary border-border-primary">
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
            <Input
              type="date"
              label="Start Date"
              value={startDate || ''}
              onChange={(e) => onStartDateChange(e.target.value)}
              labelClassName="text-text-secondary text-xs"
            />
            <Input
              type="date"
              label="End Date"
              value={endDate || ''}
              onChange={(e) => onEndDateChange(e.target.value)}
              labelClassName="text-text-secondary text-xs"
            />
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

