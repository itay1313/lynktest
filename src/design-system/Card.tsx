import React from 'react'

export interface CardProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
  hover?: boolean
}

/**
 * Card component - A container component with consistent styling
 * 
 * @example
 * <Card hover onClick={handleClick}>
 *   <h2>Card Title</h2>
 *   <p>Card content</p>
 * </Card>
 */
export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  onClick,
  hover = false
}) => {
  const baseStyles = 'bg-bg-secondary rounded-lg shadow-sm border border-border-primary p-6 transition-all duration-200'
  const hoverStyles = hover ? 'hover:shadow-md cursor-pointer hover:border-border-secondary' : ''
  const clickStyles = onClick ? 'cursor-pointer' : ''
  
  return (
    <div
      className={`${baseStyles} ${hoverStyles} ${clickStyles} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  )
}

