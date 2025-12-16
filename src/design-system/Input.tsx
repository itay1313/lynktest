import React from 'react'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  labelClassName?: string
}

/**
 * Input component - A styled input field with optional label and error message
 * 
 * @example
 * <Input
 *   label="Email"
 *   type="email"
 *   value={email}
 *   onChange={(e) => setEmail(e.target.value)}
 *   error={errors.email}
 * />
 */
export const Input: React.FC<InputProps> = ({
  label,
  error,
  className = '',
  labelClassName = '',
  ...props
}) => {
  return (
    <div className="w-full">
      {label && (
        <label className={`block text-sm font-medium text-text-secondary mb-1 ${labelClassName}`}>
          {label}
        </label>
      )}
      <input
        className={`
          w-full px-4 py-2 border rounded-lg bg-bg-secondary text-text-primary
          focus:outline-none focus:ring-2 focus:ring-accent-primary focus:border-transparent
          transition-all duration-200
          ${error ? 'border-red-500' : 'border-border-primary'}
          ${className}
        `}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  )
}

