import React from 'react'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
}

/**
 * Button component - A reusable button with multiple variants and sizes
 * 
 * @example
 * <Button variant="primary" size="md" onClick={handleClick}>
 *   Click me
 * </Button>
 */
export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}) => {
  const baseStyles = 'font-medium rounded-lg transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer'
  
  const getVariantStyles = () => {
    if (variant === 'primary') {
      return {
        className: 'bg-bg-secondary text-text-primary border border-bg-secondary',
        style: {
          boxShadow: 'var(--button-shadow)'
        },
        activeStyle: {
          boxShadow: 'var(--button-shadow-active)',
          color: 'var(--button-active-color)'
        }
      }
    } else if (variant === 'secondary') {
      return {
        className: 'bg-bg-tertiary text-text-primary border border-bg-tertiary',
        style: {
          boxShadow: 'var(--button-shadow)'
        },
        activeStyle: {
          boxShadow: 'var(--button-shadow-active)',
          color: 'var(--button-active-color)'
        }
      }
    } else if (variant === 'ghost') {
      // ghost variant - no shadow, minimal styling
      return {
        className: 'bg-transparent text-text-secondary hover:bg-transparent hover:text-accent-primary border-none',
        style: {
          boxShadow: 'none'
        },
        activeStyle: {
          boxShadow: 'none',
          color: ''
        }
      }
    } else {
      // outline variant
      return {
        className: 'bg-transparent text-accent-primary border-2 border-accent-primary',
        style: {
          boxShadow: 'var(--button-shadow)'
        },
        activeStyle: {
          boxShadow: 'var(--button-shadow-active)',
          color: 'var(--button-active-color)'
        }
      }
    }
  }
  
  const variantStyles = getVariantStyles()
  
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  }
  
  return (
    <button
      className={`${baseStyles} ${variantStyles.className} ${sizes[size]} ${className}`}
      style={variantStyles.style}
      onMouseDown={(e) => {
        Object.assign(e.currentTarget.style, variantStyles.activeStyle)
      }}
      onMouseUp={(e) => {
        e.currentTarget.style.boxShadow = variantStyles.style.boxShadow
        e.currentTarget.style.color = ''
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = variantStyles.style.boxShadow
        e.currentTarget.style.color = ''
      }}
      {...props}
    >
      {children}
    </button>
  )
}

