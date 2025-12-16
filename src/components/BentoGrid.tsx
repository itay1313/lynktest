import React from 'react'
import { Card } from '../design-system'

export interface BentoCardProps {
  title?: string
  description?: string
  header?: React.ReactNode
  footer?: React.ReactNode
  className?: string
  children: React.ReactNode
  onClick?: () => void
}

export const BentoCard: React.FC<BentoCardProps> = ({
  title,
  description,
  header,
  footer,
  className = '',
  children,
  onClick
}) => {
  return (
    <Card
      className={`backdrop-blur-2xl bg-bg-glass border-border-glass hover:border-accent-primary/50 transition-all duration-300 ${onClick ? 'cursor-pointer hover:scale-[1.02]' : ''} ${className}`}
      onClick={onClick}
      hover={!!onClick}
    >
      {header && <div className="mb-4">{header}</div>}
      {title && (
        <h3 className="text-lg font-semibold text-text-primary mb-2">{title}</h3>
      )}
      {description && (
        <p className="text-sm text-text-secondary mb-4">{description}</p>
      )}
      <div className="flex-1">{children}</div>
      {footer && <div className="mt-4">{footer}</div>}
    </Card>
  )
}

export interface BentoGridProps {
  children: React.ReactNode
  className?: string
}

export const BentoGrid: React.FC<BentoGridProps> = ({
  children,
  className = ''
}) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ${className}`}>
      {children}
    </div>
  )
}

