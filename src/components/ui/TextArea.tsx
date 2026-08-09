import type { TextareaHTMLAttributes } from 'react'
import { forwardRef, useId } from 'react'

export interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  hint?: string
  error?: string
}

function joinClasses(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ')
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(function TextArea(
  { label, hint, error, className, id, rows = 4, ...props },
  ref,
) {
  const generatedId = useId()
  const textareaId = id ?? generatedId
  const hintId = hint ? `${textareaId}-hint` : undefined
  const errorId = error ? `${textareaId}-error` : undefined

  return (
    <label className="flex w-full flex-col gap-1.5 text-sm font-medium text-slate-700" htmlFor={textareaId}>
      {label && <span>{label}</span>}
      <textarea
        id={textareaId}
        ref={ref}
        rows={rows}
        aria-invalid={error ? true : undefined}
        aria-describedby={[hintId, errorId].filter(Boolean).join(' ') || undefined}
        className={joinClasses(
          'min-h-28 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm transition-colors placeholder:text-slate-400 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 disabled:cursor-not-allowed disabled:bg-slate-100',
          error && 'border-rose-500 focus:border-rose-500 focus:ring-rose-500/20',
          className,
        )}
        {...props}
      />
      {hint && !error && (
        <span id={hintId} className="text-xs font-normal text-slate-500">
          {hint}
        </span>
      )}
      {error && (
        <span id={errorId} className="text-xs font-medium text-rose-600">
          {error}
        </span>
      )}
    </label>
  )
})