import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Card } from '../ui/Card'

export interface RelatedEntityItem {
  id: string
  title: string
  subtitle?: string
  path: string
}

/** Reusable "grid of link-cards to related content" — extracted from the near-identical snippet
 * hand-duplicated across ExamTechniqueDetailView, EmergencyProtocolDetail, and DiseaseDetail.
 * Takes already-resolved items rather than ids, so callers keep full control over lookups. */
export function RelatedEntityGrid({ items }: { items: RelatedEntityItem[] }) {
  if (items.length === 0) return null
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {items.map((item) => (
        <Link key={item.id} to={item.path}>
          <Card className="hover:border-brand-300 hover:shadow-md transition-all flex items-center justify-between gap-2">
            <span className="min-w-0">
              <span className="block text-sm font-medium text-slate-900 truncate">{item.title}</span>
              {item.subtitle && <span className="block text-xs text-slate-400">{item.subtitle}</span>}
            </span>
            <ArrowRight size={14} className="text-slate-300 shrink-0" />
          </Card>
        </Link>
      ))}
    </div>
  )
}
