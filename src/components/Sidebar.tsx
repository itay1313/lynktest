import React, { useState } from 'react'
import { ChevronLeft, ChevronRight, Search, Filter, X } from 'lucide-react'
import { UserIcon } from '../design-system/icons'
import { FilterDropdown } from './FilterDropdown'
import { Logo } from './Logo'
import { ProfileModal } from './ProfileModal'
import { DatePicker } from './DatePicker'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'
import { FilterOptions } from '../types'
import { useSidebar } from '../contexts/useSidebar'

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
  const { isCollapsed, toggleSidebar } = useSidebar()
  const [profileModalOpen, setProfileModalOpen] = useState(false)

  return (
    <>
      <div
        className={`fixed left-0 top-0 h-screen bg-bg-secondary border-r border-border-primary flex flex-col z-40 hidden lg:flex transition-all duration-300 ease-in-out ${
          isCollapsed ? "w-16" : "w-80"
        }`}
      >
        {/* Logo Section */}
        <div
          className={`p-6 border-b border-border-primary transition-all duration-300 ${
            isCollapsed ? "px-4" : ""
          }`}
        >
          <div
            className={`flex items-center gap-2 ${
              isCollapsed ? "justify-center flex-col" : "justify-between"
            }`}
          >
            {isCollapsed && (
              <button
                onClick={toggleSidebar}
                className="p-1.5 rounded-lg hover:bg-bg-tertiary transition-colors text-text-secondary hover:text-text-primary"
                aria-label="Expand sidebar"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            )}
            <div
              className={`mt-2 flex items-center ${
                isCollapsed ? "justify-center w-full" : "gap-2 min-w-0"
              }`}
            >
              <Logo showText={!isCollapsed} className="h-8 w-auto" />
            </div>
            {!isCollapsed && (
              <button
                onClick={toggleSidebar}
                className="p-1.5 rounded-lg hover:bg-bg-tertiary transition-colors text-text-secondary hover:text-text-primary"
                aria-label="Collapse sidebar"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
            )}
          </div>
        </div>

        {/* Collapsed Icons Section */}
        {isCollapsed && (
          <div className="flex-1 flex flex-col items-center gap-3 py-4">
            <button
              onClick={() => {
                toggleSidebar()
                setTimeout(() => {
                  const searchInput = document.querySelector(
                    'input[type="text"]'
                  ) as HTMLInputElement
                  searchInput?.focus()
                }, 300)
              }}
              className={`w-10 h-10 rounded-lg flex items-center justify-center hover:bg-bg-tertiary transition-colors ${
                searchQuery
                  ? "text-accent-primary"
                  : "text-text-secondary hover:text-accent-primary"
              }`}
              aria-label="Search"
              title="Search"
            >
              <Search className="h-5 w-5" />
            </button>
            <div className="relative w-full flex items-center justify-center">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button
                    className={`w-10 h-10 rounded-lg flex items-center justify-center hover:bg-bg-tertiary transition-colors relative ${
                      filterOptions.startDate || filterOptions.endDate
                        ? "text-accent-primary"
                        : "text-text-secondary hover:text-accent-primary"
                    }`}
                    aria-label="Filters"
                    title="Filters"
                  >
                    <Filter className="h-5 w-5" />
                    {(filterOptions.startDate || filterOptions.endDate) && (
                      <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-accent-primary"></span>
                    )}
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="start"
                  className="!left-0 w-[320px] p-4 bg-bg-secondary border-border-primary"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-semibold text-text-primary">
                        Date Filters
                      </h3>
                      {(filterOptions.startDate || filterOptions.endDate) && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            onClearFilters()
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
                        value={filterOptions.startDate}
                        onChange={(date) =>
                          onFilterChange({
                            ...filterOptions,
                            startDate: date || undefined,
                          })
                        }
                        labelClassName="text-text-secondary text-xs"
                      />
                      <DatePicker
                        label="End Date"
                        value={filterOptions.endDate}
                        onChange={(date) =>
                          onFilterChange({
                            ...filterOptions,
                            endDate: date || undefined,
                          })
                        }
                        labelClassName="text-text-secondary text-xs"
                        maxDate={new Date()} // Block future dates
                      />
                    </div>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        )}

        {/* Search and Filters Section */}
        {!isCollapsed && (
          <div className="flex-1 overflow-y-auto p-6 space-y-6 transition-opacity duration-300">
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
                  onStartDateChange={(date) =>
                    onFilterChange({
                      ...filterOptions,
                      startDate: date || undefined,
                    })
                  }
                  onEndDateChange={(date) =>
                    onFilterChange({
                      ...filterOptions,
                      endDate: date || undefined,
                    })
                  }
                  onClear={onClearFilters}
                />
              </div>

              {/* Results Count */}
              {(filterOptions.startDate ||
                filterOptions.endDate ||
                searchQuery) && (
                <div className="pt-4 border-t border-border-primary">
                  <div className="text-sm text-text-secondary mb-3">
                    Showing{" "}
                    <span className="font-semibold text-text-primary">
                      {filteredCount}
                    </span>{" "}
                    of{" "}
                    <span className="font-semibold text-text-primary">
                      {totalQuestions}
                    </span>{" "}
                    questions
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Profile Avatar Button at Bottom */}
        <div
          className={`p-4 border-t border-border-primary transition-all duration-300 ${
            isCollapsed ? "px-2" : ""
          }`}
        >
          <button
            onClick={() => setProfileModalOpen(true)}
            className={`w-full flex items-center gap-3 p-3 rounded-lg hover:bg-bg-tertiary transition-colors ${
              isCollapsed ? "justify-center" : ""
            }`}
            aria-label="Profile"
          >
            <div className="w-10 h-10 rounded-full bg-accent-primary flex items-center justify-center flex-shrink-0">
              <UserIcon className="h-5 w-5 text-white" />
            </div>
            {!isCollapsed && (
              <div className="flex-1 text-left min-w-0">
                <p className="text-sm font-medium text-text-primary truncate">
                  Profile
                </p>
                <p className="text-xs text-text-secondary truncate">
                  View profile
                </p>
              </div>
            )}
          </button>
        </div>
      </div>
      <ProfileModal
        isOpen={profileModalOpen}
        onClose={() => setProfileModalOpen(false)}
      />
    </>
  )
}

