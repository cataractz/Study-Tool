import { type ReactNode } from 'react'
import clsx from 'clsx'

export type BadgeTone =
  | 'default'
  | 'brand'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info'
  | 'purple'

const toneClasses: Record<BadgeTone, string> = {
  default: 'bg-slate-100 text-slate-700 border-slate-200',
  brand: 'bg-brand-50 text-brand-700 border-brand-200',
  success: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  warning: 'bg-amber-50 text-amber-700 border-amber-200',
  danger: 'bg-red-50 text-red-700 border-red-200',
  info: 'bg-sky-50 text-sky-700 border-sky-200',
  purple: 'bg-violet-50 text-violet-700 border-violet-200',
}

export function Badge({
  children,
  tone = 'default',
  className,
}: {
  children: ReactNode
  tone?: BadgeTone
  className?: string
}) {
  return (
    <span
      className={clsx(
        'inline-flex items-center gap-1 rounded-md border px-2 py-0.5 text-xs font-medium',
        toneClasses[tone],
        className,
      )}
    >
      {children}
    </span>
  )
}

export function urgencyTone(urgency: string): BadgeTone {
  switch (urgency) {
    case 'Emergency':
      return 'danger'
    case 'Urgent':
      return 'warning'
    case 'Prompt':
      return 'info'
    default:
      return 'success'
  }
}

/** Tone for EmergencyProtocol.urgencyTier — distinct scale from urgencyTone (WorkupUrgency). */
export function urgencyTierTone(tier: string): BadgeTone {
  switch (tier) {
    case 'Immediate (minutes)':
      return 'danger'
    case 'Emergent (same-visit / hours)':
      return 'warning'
    default:
      return 'info'
  }
}
