import { type ReactNode } from 'react'
import clsx from 'clsx'

export function Card({
  children,
  className,
  padded = true,
  id,
}: {
  children: ReactNode
  className?: string
  padded?: boolean
  id?: string
}) {
  return (
    <div
      id={id}
      className={clsx(
        'bg-white border border-slate-200 rounded-xl shadow-sm',
        padded && 'p-5',
        className,
      )}
    >
      {children}
    </div>
  )
}
