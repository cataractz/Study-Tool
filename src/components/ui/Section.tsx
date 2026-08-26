import { type ReactNode } from 'react'

export function Section({
  title,
  children,
  action,
  id,
}: {
  title: string
  children: ReactNode
  action?: ReactNode
  id?: string
}) {
  return (
    <section id={id} className="scroll-mt-20">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-semibold text-slate-900">{title}</h2>
        {action}
      </div>
      {children}
    </section>
  )
}
