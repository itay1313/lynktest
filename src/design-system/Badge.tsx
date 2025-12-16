import React from 'react'

export interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info'
  className?: string
}

/**
 * Badge component - A small status indicator with color variants
 * 
 * @example
 * <Badge variant="success">Active</Badge>
 * <Badge variant="error">Failed</Badge>
 */
export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  className = ''
}) => {
  const variants = {
    default: 'bg-bg-tertiary text-text-primary',
    success: 'bg-green-600 text-white border border-green-700/50',
    warning: 'bg-amber-600 text-white border border-amber-700/50',
    error: 'bg-red-600 text-white border border-red-700/50',
    info: 'bg-blue-600 text-white border border-blue-700/50'
  }
  
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  )
}

