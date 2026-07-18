import type { HTMLAttributes, ReactNode } from 'react'

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export interface CardSectionProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export function Card({ children, className = '', ...props }: CardProps) {
  const classes = ['rounded-xl border border-gray-200 bg-white shadow-sm', className]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

export function CardHeader({ children, className = '', ...props }: CardSectionProps) {
  const classes = ['border-b border-gray-200 px-5 py-4', className].filter(Boolean).join(' ')

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

export function CardTitle({ children, className = '', ...props }: CardSectionProps) {
  const classes = ['text-base font-semibold text-gray-900', className].filter(Boolean).join(' ')

  return (
    <h3 className={classes} {...props}>
      {children}
    </h3>
  )
}

export function CardDescription({ children, className = '', ...props }: CardSectionProps) {
  const classes = ['mt-1 text-sm text-gray-500', className].filter(Boolean).join(' ')

  return (
    <p className={classes} {...props}>
      {children}
    </p>
  )
}

export function CardContent({ children, className = '', ...props }: CardSectionProps) {
  const classes = ['px-5 py-4', className].filter(Boolean).join(' ')

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

export function CardFooter({ children, className = '', ...props }: CardSectionProps) {
  const classes = ['border-t border-gray-200 px-5 py-4', className].filter(Boolean).join(' ')

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}
