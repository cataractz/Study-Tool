import type { RiskFactor, RiskFactorTier } from '../../types/disease'
import { Badge } from '../ui/Badge'

const tierMeta: Record<RiskFactorTier, { label: string; tone: 'danger' | 'warning' | 'default' }> = {
  major: { label: 'Major', tone: 'danger' },
  moderate: { label: 'Moderate', tone: 'warning' },
  associated: { label: 'Associated', tone: 'default' },
}

export function RiskFactorList({ riskFactors }: { riskFactors: RiskFactor[] }) {
  const tiers: RiskFactorTier[] = ['major', 'moderate', 'associated']
  return (
    <div className="space-y-3">
      {tiers.map((tier) => {
        const items = riskFactors.filter((r) => r.tier === tier)
        if (items.length === 0) return null
        return (
          <div key={tier} className="flex flex-wrap items-center gap-2">
            <Badge tone={tierMeta[tier].tone}>{tierMeta[tier].label}</Badge>
            <span className="text-sm text-slate-700">
              {items.map((i) => i.label).join(' · ')}
            </span>
          </div>
        )
      })}
    </div>
  )
}
