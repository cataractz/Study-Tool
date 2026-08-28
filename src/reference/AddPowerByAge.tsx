import { ReferenceShell } from './shared/ReferenceShell'
import { ReferenceTable } from './shared/ReferenceTable'
import type { ReferenceMeta } from '../types/reference'

export const meta: ReferenceMeta = {
  id: 'add-power-by-age',
  name: 'Typical Starting Near Add by Age',
  category: 'Accommodation & Near Vision',
  description: 'Commonly cited starting-point ranges for presbyopic add power by age.',
  keywords: ['near add', 'reading add', 'presbyopia', 'add power by age', 'rule of thumb'],
}

const ROWS: { range: string; add: string }[] = [
  { range: '40–44', add: '+1.00 to +1.25 D' },
  { range: '45–49', add: '+1.50 to +1.75 D' },
  { range: '50–54', add: '+2.00 to +2.25 D' },
  { range: '55–59', add: '+2.25 to +2.50 D' },
  { range: '60+', add: '+2.50 to +3.00 D' },
]

export function AddPowerByAge() {
  return (
    <ReferenceShell meta={meta}>
      <ReferenceTable headers={['Age range (years)', 'Typical starting add']} rows={ROWS.map((r) => [r.range, r.add])} />
      <p className="text-xs text-slate-500">
        RULE OF THUMB ONLY — these are commonly cited typical starting points, not a prescribing formula. Actual add
        depends on the patient's amplitude of accommodation, working distance/task, and subjective response; always
        refine at the exam rather than prescribing directly from age. See the Accommodation calculator's "Estimated
        Near Add" tab for a demand-based rule-of-thumb estimate instead.
      </p>
    </ReferenceShell>
  )
}
