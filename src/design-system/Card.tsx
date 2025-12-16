import React, { useEffect, useRef } from 'react'

export interface CardProps {
  children: React.ReactNode
  className?: string
  onClick?: (e?: React.MouseEvent<HTMLDivElement>) => void
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
  const cardRef = useRef<HTMLDivElement>(null)
  const baseStyles = 'bg-bg-secondary rounded-[50px] p-6 transition-all duration-200'
  const hoverStyles = hover ? 'cursor-pointer' : ''
  const clickStyles = onClick ? 'cursor-pointer' : ''
  
  useEffect(() => {
    const updateShadow = () => {
      if (cardRef.current) {
        // Disable shadow on mobile (below 768px)
        if (window.innerWidth < 768) {
          cardRef.current.style.boxShadow = 'none'
        } else {
          cardRef.current.style.boxShadow = 'var(--neumorphism-shadow-dark)'
        }
      }
    }
    
    // Set initial shadow
    updateShadow()
    
    // Update on resize
    window.addEventListener('resize', updateShadow)
    
    return () => {
      window.removeEventListener('resize', updateShadow)
    }
  }, [])
  
  return (
    <div
      ref={cardRef}
      className={`${baseStyles} ${hoverStyles} ${clickStyles} ${className}`}
      onClick={onClick}
      onMouseEnter={(e) => {
        if (hover && window.innerWidth >= 768) {
          e.currentTarget.style.boxShadow = 'var(--neumorphism-shadow-light)'
        }
      }}
      onMouseLeave={(e) => {
        if (hover && window.innerWidth >= 768) {
          e.currentTarget.style.boxShadow = 'var(--neumorphism-shadow-dark)'
        }
      }}
    >
      {children}
    </div>
  )
}

