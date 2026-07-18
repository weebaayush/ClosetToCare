import { useId } from 'react'
import type { InputHTMLAttributes } from 'react'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  helperText?: string
  fullWidth?: boolean
}

export function Input({
  label,
  error,
  helperText,
  id,
  className = '',
  fullWidth = true,
  ...props
}: InputProps) {
  const generatedId = useId()
  const inputId = id ?? generatedId
  const messageId = `${inputId}-message`
  const classes = [
    'rounded-lg border bg-white px-3 py-2.5 text-sm text-gray-900 shadow-sm outline-none transition-colors',
    'placeholder:text-gray-400 focus:ring-2 focus:ring-offset-0',
    error
      ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
      : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500/20',
    fullWidth ? 'w-full' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={fullWidth ? 'w-full' : ''}>
      {label ? (
        <label htmlFor={inputId} className="mb-1.5 block text-sm font-medium text-gray-700">
          {label}
        </label>
      ) : null}
      <input
        id={inputId}
        className={classes}
        aria-invalid={error ? true : undefined}
        aria-describedby={error || helperText ? messageId : undefined}
        {...props}
      />
      {error || helperText ? (
        <p
          id={messageId}
          className={`mt-1.5 text-xs ${error ? 'text-red-600' : 'text-gray-500'}`}
        >
          {error ?? helperText}
        </p>
      ) : null}
    </div>
  )
}
