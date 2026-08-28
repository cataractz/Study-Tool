import type { ManagementItem } from '../../types/disease'
import { Badge } from '../ui/Badge'
import { Linkify } from '../shared/Linkify'

const order: ManagementItem['category'][] = [
  'Observation',
  'First-line treatment',
  'Second-line treatment',
  'Advanced treatment',
  'Referral',
  'Emergency management',
]

const tone: Record<ManagementItem['category'], 'default' | 'brand' | 'purple' | 'info' | 'warning' | 'danger'> = {
  Observation: 'default',
  'First-line treatment': 'brand',
  'Second-line treatment': 'purple',
  'Advanced treatment': 'info',
  Referral: 'warning',
  'Emergency management': 'danger',
}

export function ManagementList({ items, excludeId }: { items: ManagementItem[]; excludeId?: string }) {
  const sorted = order
    .map((cat) => items.find((i) => i.category === cat))
    .filter((i): i is ManagementItem => Boolean(i))

  return (
    <div className="space-y-3">
      {sorted.map((item) => (
        <div key={item.category} className="flex gap-3">
          <div className="w-40 shrink-0 pt-0.5">
            <Badge tone={tone[item.category]}>{item.category}</Badge>
          </div>
          <p className="text-sm text-slate-700 leading-relaxed">
            <Linkify text={item.detail} excludeId={excludeId} />
          </p>
        </div>
      ))}
    </div>
  )
}
