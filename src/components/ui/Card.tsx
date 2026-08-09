import type { HTMLAttributes, ReactNode } from 'react'

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export interface CardBodyProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

function joinClasses(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ')
}

export function Card({ className, children, ...props }: CardProps) {
  return (
    <div
      className={joinClasses(
        'rounded-2xl border border-slate-200 bg-white text-slate-900 shadow-sm',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export function CardHeader({ className, children, ...props }: CardHeaderProps) {
  return (
    <div className={joinClasses('border-b border-slate-200 px-6 py-5', className)} {...props}>
      {children}
    </div>
  )
}

export function CardBody({ className, children, ...props }: CardBodyProps) {
  return (
    <div className={joinClasses('px-6 py-5', className)} {...props}>
      {children}
    </div>
  )
}

export function CardFooter({ className, children, ...props }: CardFooterProps) {
  return (
    <div className={joinClasses('border-t border-slate-200 px-6 py-4', className)} {...props}>
      {children}
    </div>
  )
}