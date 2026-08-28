import { ReferenceShell } from './shared/ReferenceShell'
import { ReferenceTable } from './shared/ReferenceTable'
import { snellenToDecimal, decimalToLogMAR } from '../calculators/visual-acuity/visualAcuity.engine'
import { roundTo } from '../calculators/shared/format'
import type { ReferenceMeta } from '../types/reference'

export const meta: ReferenceMeta = {
  id: 'visual-acuity-table',
  name: 'Visual Acuity Notation Table',
  category: 'Visual Acuity',
  description: 'Common Snellen values with their decimal and logMAR equivalents, side by side.',
  keywords: ['visual acuity', 'snellen', 'logmar', 'decimal acuity', 'acuity chart', 'conversion table'],
}

// Denominators computed against the same tested engine used by the Visual Acuity Converter
// calculator, guaranteeing the two never drift out of sync.
const SNELLEN_DENOMINATORS = [10, 12.5, 16, 20, 25, 32, 40, 50, 63, 80, 100, 125, 160, 200, 400]

export function VisualAcuityTable() {
  const rows = SNELLEN_DENOMINATORS.map((denom) => {
    const decimal = snellenToDecimal(20, denom)
    const logMAR = decimalToLogMAR(decimal)
    const denomLabel = Number.isInteger(denom) ? denom.toString() : denom.toFixed(1)
    return [`20/${denomLabel}`, roundTo(decimal, 2).toFixed(2), roundTo(logMAR, 2).toFixed(2)]
  })

  return (
    <ReferenceShell meta={meta}>
      <ReferenceTable headers={['Snellen (ft)', 'Decimal', 'logMAR']} rows={rows} />
      <p className="text-xs text-slate-500">
        Computed directly from decimal = 20/denominator and logMAR = −log₁₀(decimal) — the same formulas used by the
        Visual Acuity Converter calculator. For a value not listed here, use that calculator directly.
      </p>
    </ReferenceShell>
  )
}
