import React from 'react'

export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  variant?: 'display-1' | 'display-2' | 'h1' | 'h2' | 'h3' | 'h4' | 'body-lg' | 'body' | 'body-sm' | 'caption'
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div'
  serif?: boolean
  italic?: boolean
  className?: string
  children: React.ReactNode
}

/**
 * Typography component - Consistent typography system
 * 
 * @example
 * <Typography variant="h1" serif italic>Heading</Typography>
 * <Typography variant="body">Body text</Typography>
 */
export const Typography: React.FC<TypographyProps> = ({
  variant = 'body',
  as,
  serif = false,
  italic = false,
  className = '',
  children,
  ...props
}) => {
  const getDefaultTag = () => {
    switch (variant) {
      case 'display-1':
      case 'display-2':
      case 'h1':
        return 'h1'
      case 'h2':
        return 'h2'
      case 'h3':
        return 'h3'
      case 'h4':
        return 'h4'
      case 'body-lg':
      case 'body':
      case 'body-sm':
      case 'caption':
        return 'p'
      default:
        return 'p'
    }
  }

  const Tag = as || getDefaultTag()

  const getVariantStyles = () => {
    switch (variant) {
      case 'display-1':
        return 'text-[3.5rem] leading-[1.1] tracking-[-0.02em]'
      case 'display-2':
        return 'text-[2.5rem] leading-[1.2] tracking-[-0.01em]'
      case 'h1':
        return 'text-[28px] leading-[1.3] tracking-[-0.01em]'
      case 'h2':
        return 'text-[1.5rem] leading-[1.4] tracking-[-0.01em]'
      case 'h3':
        return 'text-[1.25rem] leading-[1.5]'
      case 'h4':
        return 'text-[1.125rem] leading-[1.5]'
      case 'body-lg':
        return 'text-[1.125rem] leading-[1.75]'
      case 'body':
        return 'text-base leading-[1.75]'
      case 'body-sm':
        return 'text-sm leading-[1.5]'
      case 'caption':
        return 'text-xs leading-[1.5]'
      default:
        return 'text-base leading-[1.75]'
    }
  }

  const baseStyles = 'text-text-primary'
  const variantStyles = getVariantStyles()
  const fontFamilyStyles = serif ? 'font-serif' : 'font-sans'
  const italicStyles = italic ? 'italic' : ''

  return (
    <Tag
      className={`${baseStyles} ${variantStyles} ${fontFamilyStyles} ${italicStyles} ${className}`}
      {...props}
    >
      {children}
    </Tag>
  )
}

// Convenience components for common typography patterns
export const Display1: React.FC<Omit<TypographyProps, 'variant'>> = (props) => (
  <Typography variant="display-1" {...props} />
)

export const Display2: React.FC<Omit<TypographyProps, 'variant'>> = (props) => (
  <Typography variant="display-2" {...props} />
)

// Simple, direct typography components
export interface H1Props extends Omit<TypographyProps, 'variant'> {
  serif?: boolean
  italic?: boolean
}

export const H1: React.FC<H1Props> = ({ serif = false, italic = false, className = '', ...props }) => (
  <Typography variant="h1" as="h1" serif={serif} italic={italic} className={className} {...props} />
)

export interface H2Props extends Omit<TypographyProps, 'variant'> {
  serif?: boolean
  italic?: boolean
}

export const H2: React.FC<H2Props> = ({ serif = false, italic = false, className = '', ...props }) => (
  <Typography variant="h2" as="h2" serif={serif} italic={italic} className={className} {...props} />
)

export interface H3Props extends Omit<TypographyProps, 'variant'> {
  serif?: boolean
  italic?: boolean
}

export const H3: React.FC<H3Props> = ({ serif = false, italic = false, className = '', ...props }) => (
  <Typography variant="h3" as="h3" serif={serif} italic={italic} className={className} {...props} />
)

export interface H4Props extends Omit<TypographyProps, 'variant'> {
  serif?: boolean
  italic?: boolean
}

export const H4: React.FC<H4Props> = ({ serif = false, italic = false, className = '', ...props }) => (
  <Typography variant="h4" as="h4" serif={serif} italic={italic} className={className} {...props} />
)

export interface BodyProps extends Omit<TypographyProps, 'variant'> {
  as?: 'p' | 'span' | 'div'
}

export const Body: React.FC<BodyProps> = ({ as = 'p', className = '', ...props }) => (
  <Typography variant="body" as={as} className={className} {...props} />
)

// Legacy exports for backward compatibility
export const Heading1 = H1
export const Heading2 = H2
export const Heading3 = H3
export const Heading4 = H4

export const BodyLarge: React.FC<Omit<TypographyProps, 'variant'>> = (props) => (
  <Typography variant="body-lg" {...props} />
)

export const BodySmall: React.FC<Omit<TypographyProps, 'variant'>> = (props) => (
  <Typography variant="body-sm" {...props} />
)

export const Caption: React.FC<Omit<TypographyProps, 'variant'>> = (props) => (
  <Typography variant="caption" {...props} />
)

