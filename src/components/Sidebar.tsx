import React from 'react'
import { FilterDropdown } from './FilterDropdown'
import { FilterOptions } from '../types'

interface SidebarProps {
  searchQuery: string
  onSearchChange: (value: string) => void
  filterOptions: FilterOptions
  onFilterChange: (options: FilterOptions) => void
  onClearFilters: () => void
  totalQuestions: number
  filteredCount: number
}

export const Sidebar: React.FC<SidebarProps> = ({
  searchQuery,
  onSearchChange,
  filterOptions,
  onFilterChange,
  onClearFilters,
  totalQuestions,
  filteredCount,
}) => {
  return (
    <div className="fixed left-0 top-0 h-screen w-80 bg-bg-secondary border-r border-border-primary flex flex-col z-40 hidden lg:flex">
      {/* Logo Section */}
      <div className="p-6 border-b border-border-primary">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-accent-primary flex items-center justify-center">
            <span className="text-white font-bold text-lg">L</span>
          </div>
          <span className="text-xl font-bold text-text-primary">Lynk</span>
        </div>
      </div>

      {/* Search and Filters Section */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        <div>
          <h2 className="text-sm font-semibold text-text-secondary uppercase tracking-wide mb-4">
            Search & Filters
          </h2>
          
          {/* Search Input */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-text-secondary mb-2">
              Search
            </label>
            <input
              type="text"
              placeholder="Search questions, users, or responses..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full px-4 py-2 bg-bg-primary border border-border-primary rounded-lg text-text-primary placeholder-text-tertiary focus:outline-none focus:ring-2 focus:ring-accent-primary focus:border-transparent transition-all"
            />
          </div>

          {/* Filter Dropdown */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-text-secondary mb-2">
              Date Filters
            </label>
            <FilterDropdown
              startDate={filterOptions.startDate}
              endDate={filterOptions.endDate}
              onStartDateChange={(date) => onFilterChange({ ...filterOptions, startDate: date || undefined })}
              onEndDateChange={(date) => onFilterChange({ ...filterOptions, endDate: date || undefined })}
              onClear={onClearFilters}
            />
          </div>

          {/* Results Count */}
          {(filterOptions.startDate || filterOptions.endDate || searchQuery) && (
            <div className="pt-4 border-t border-border-primary">
              <div className="text-sm text-text-secondary mb-3">
                Showing <span className="font-semibold text-text-primary">{filteredCount}</span> of{' '}
                <span className="font-semibold text-text-primary">{totalQuestions}</span> questions
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

