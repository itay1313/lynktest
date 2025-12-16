import React, { useState, useRef, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { CalendarIcon } from '../design-system/icons'

interface DatePickerProps {
  value?: string
  onChange: (date: string) => void
  label?: string
  labelClassName?: string
  placeholder?: string
  maxDate?: Date
}

const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
]

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

export const DatePicker: React.FC<DatePickerProps> = ({
  value,
  onChange,
  label,
  labelClassName = '',
  placeholder = 'dd/mm/yyyy',
  maxDate
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth())
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear())
  const containerRef = useRef<HTMLDivElement>(null)

  const selectedDate = value ? new Date(value) : null

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  useEffect(() => {
    if (selectedDate) {
      setCurrentMonth(selectedDate.getMonth())
      setCurrentYear(selectedDate.getFullYear())
    }
  }, [selectedDate])

  const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate()
  }

  const getFirstDayOfMonth = (month: number, year: number) => {
    return new Date(year, month, 1).getDay()
  }

  const formatDateForInput = (date: Date | null) => {
    if (!date) return ''
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')
    return `${year}-${month}-${day}`
  }

  const formatDisplayDate = (date: Date | null) => {
    if (!date) return placeholder
    const day = String(date.getDate()).padStart(2, '0')
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const year = date.getFullYear()
    return `${day}/${month}/${year}`
  }

  const handleDateSelect = (day: number) => {
    const newDate = new Date(currentYear, currentMonth, day)
    const today = new Date()
    today.setHours(23, 59, 59, 999) // End of today
    
    // Check if date is in the future
    if (maxDate && newDate > maxDate) {
      return // Don't allow selecting future dates
    }
    
    onChange(formatDateForInput(newDate))
    setIsOpen(false)
  }
  
  const isDisabled = (day: number | null) => {
    if (!day || !maxDate) return false
    const date = new Date(currentYear, currentMonth, day)
    return date > maxDate
  }

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11)
      setCurrentYear(currentYear - 1)
    } else {
      setCurrentMonth(currentMonth - 1)
    }
  }

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      const nextYear = currentYear + 1
      const nextMonth = 0
      const nextDate = new Date(nextYear, nextMonth, 1)
      if (maxDate && nextDate > maxDate) {
        return // Don't allow navigating to future months
      }
      setCurrentMonth(0)
      setCurrentYear(nextYear)
    } else {
      const nextMonth = currentMonth + 1
      const nextDate = new Date(currentYear, nextMonth, 1)
      if (maxDate && nextDate > maxDate) {
        return // Don't allow navigating to future months
      }
      setCurrentMonth(nextMonth)
    }
  }
  
  const canNavigateNext = () => {
    if (!maxDate) return true
    if (currentMonth === 11) {
      const nextDate = new Date(currentYear + 1, 0, 1)
      return nextDate <= maxDate
    }
    const nextDate = new Date(currentYear, currentMonth + 1, 1)
    return nextDate <= maxDate
  }

  const daysInMonth = getDaysInMonth(currentMonth, currentYear)
  const firstDay = getFirstDayOfMonth(currentMonth, currentYear)
  const days: (number | null)[] = []

  // Add empty cells for days before the first day of the month
  for (let i = 0; i < firstDay; i++) {
    days.push(null)
  }

  // Add days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    days.push(day)
  }

  const isToday = (day: number | null) => {
    if (!day) return false
    const today = new Date()
    return (
      day === today.getDate() &&
      currentMonth === today.getMonth() &&
      currentYear === today.getFullYear()
    )
  }

  const isSelected = (day: number | null) => {
    if (!day || !selectedDate) return false
    return (
      day === selectedDate.getDate() &&
      currentMonth === selectedDate.getMonth() &&
      currentYear === selectedDate.getFullYear()
    )
  }

  return (
    <div className="w-full relative" ref={containerRef}>
      {label && (
        <label className={`block text-sm font-medium text-text-secondary mb-1 ${labelClassName}`}>
          {label}
        </label>
      )}
      <div className="relative">
        <input
          type="text"
          readOnly
          value={formatDisplayDate(selectedDate)}
          onClick={() => setIsOpen(!isOpen)}
          className="w-full px-4 py-2 pr-10 border rounded-lg bg-bg-secondary text-text-primary cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent-primary focus:border-transparent transition-all duration-200 border-border-primary"
          placeholder={placeholder}
        />
        <CalendarIcon
          className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-text-secondary pointer-events-none"
        />
      </div>

      {isOpen && (
        <div className="absolute z-50 mt-2 w-full bg-bg-secondary border border-border-primary rounded-lg shadow-lg p-4">
          {/* Calendar Header */}
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={handlePrevMonth}
              className="p-1 rounded-lg hover:bg-bg-tertiary transition-colors text-text-secondary hover:text-text-primary"
              aria-label="Previous month"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <h3 className="text-sm font-semibold text-text-primary">
              {months[currentMonth]} {currentYear}
            </h3>
            <button
              onClick={handleNextMonth}
              disabled={!canNavigateNext()}
              className={`p-1 rounded-lg transition-colors ${
                canNavigateNext()
                  ? 'hover:bg-bg-tertiary text-text-secondary hover:text-text-primary'
                  : 'text-text-tertiary cursor-not-allowed opacity-50'
              }`}
              aria-label="Next month"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          {/* Days of Week Header */}
          <div className="grid grid-cols-7 gap-1 mb-2">
            {daysOfWeek.map((day) => (
              <div
                key={day}
                className="text-xs font-medium text-text-secondary text-center py-2"
              >
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Days */}
          <div className="grid grid-cols-7 gap-1">
            {days.map((day, index) => {
              if (day === null) {
                return <div key={`empty-${index}`} className="aspect-square" />
              }

              const today = isToday(day)
              const selected = isSelected(day)
              const disabled = isDisabled(day)

              return (
                <button
                  key={day}
                  onClick={() => handleDateSelect(day)}
                  disabled={disabled}
                  className={`
                    aspect-square rounded-lg text-sm transition-colors
                    ${selected
                      ? 'bg-accent-primary text-white'
                      : today
                      ? 'bg-bg-tertiary text-accent-primary font-semibold'
                      : disabled
                      ? 'text-text-tertiary cursor-not-allowed opacity-50'
                      : 'text-text-primary hover:bg-bg-tertiary'
                    }
                  `}
                >
                  {day}
                </button>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}

