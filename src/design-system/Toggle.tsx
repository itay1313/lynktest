import React from 'react'
import { useTheme } from '../contexts/ThemeContext'

export interface ToggleProps {
  checked: boolean
  onChange: (checked: boolean) => void
  ariaLabel?: string
  className?: string
}

/**
 * Toggle component - A neumorphic toggle switch
 * 
 * @example
 * <Toggle checked={isEnabled} onChange={setIsEnabled} ariaLabel="Toggle feature" />
 */
export const Toggle: React.FC<ToggleProps> = ({
  checked,
  onChange,
  ariaLabel,
  className = ''
}) => {
  const { theme } = useTheme()

  const containerShadow = theme === 'dark' 
    ? '-8px -4px 8px 0px rgba(255, 255, 255, 0.02), 8px 4px 12px 0px rgba(0, 0, 0, 0.5), 4px 4px 4px 0px rgba(0, 0, 0, 0.6) inset, -4px -4px 4px 0px rgba(255, 255, 255, 0.02) inset'
    : '-8px -4px 8px 0px #ffffff, 8px 4px 12px 0px #d1d9e6, 4px 4px 4px 0px #d1d9e6 inset, -4px -4px 4px 0px #ffffff inset'

  const indicatorBackground = theme === 'dark' ? '#1a1a1a' : '#ecf0f3'
  const indicatorTransform = checked ? 'translate3d(25%, 0, 0)' : 'translate3d(-75%, 0, 0)'
  const indicatorShadow = theme === 'dark'
    ? '-8px -4px 8px 0px rgba(255, 255, 255, 0.02), 8px 4px 12px 0px rgba(0, 0, 0, 0.5)'
    : '-8px -4px 8px 0px #ffffff, 8px 4px 12px 0px #d1d9e6'

  return (
    <label className={`inline-flex items-center cursor-pointer ${className}`} aria-label={ariaLabel}>
      <div 
        className="relative h-[30px] w-[60px] rounded-[15px] overflow-hidden" 
        style={{
          isolation: 'isolate',
          boxShadow: containerShadow
        }}
      >
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="hidden"
        />
        <div
          className="h-full w-[200%] rounded-[15px]"
          style={{
            background: indicatorBackground,
            transform: indicatorTransform,
            boxShadow: indicatorShadow,
            transition: 'transform 0.4s cubic-bezier(0.85, 0.05, 0.18, 1.35)'
          }}
        />
      </div>
    </label>
  )
}

