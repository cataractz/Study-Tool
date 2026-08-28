import { ReferenceShell } from './shared/ReferenceShell'
import { ReferenceTable } from './shared/ReferenceTable'
import type { ReferenceMeta } from '../types/reference'

export const meta: ReferenceMeta = {
  id: 'low-vision-classification',
  name: 'Legal Blindness & Low Vision Classification',
  category: 'Low Vision',
  description: 'WHO and U.S. legal definitions for low vision and blindness, by visual acuity and visual field.',
  keywords: ['legal blindness', 'low vision classification', 'WHO', 'visual impairment', 'visual field', 'disability criteria'],
}

export function LowVisionClassification() {
  return (
    <ReferenceShell meta={meta}>
      <div>
        <h2 className="text-sm font-semibold text-slate-700 mb-2">U.S. Legal Definitions</h2>
        <ReferenceTable
          headers={['Category', 'Criterion (better-seeing eye, best correction)']}
          rows={[
            ['Legal blindness', '20/200 or worse VA, OR visual field ≤ 20° diameter ("tunnel vision")'],
          ]}
        />
      </div>

      <div>
        <h2 className="text-sm font-semibold text-slate-700 mb-2">WHO Classification</h2>
        <ReferenceTable
          headers={['Category', 'Visual acuity (better eye, best correction)', 'Or visual field']}
          rows={[
            ['Low vision', 'Worse than 20/70 through 20/400', '≤ 20°'],
            ['Blindness', 'Worse than 20/400', '≤ 10°'],
          ]}
        />
      </div>

      <p className="text-xs text-slate-500">
        "Legal blindness" is a legal/administrative threshold (used for U.S. disability benefits, tax provisions,
        etc.), not a clinical description of functional vision — many people who meet this definition retain
        significant, useful vision. "Low vision" is better understood as a functional description of how vision
        loss affects daily activities than as a strict cutoff. Definitions used for driving eligibility, disability
        benefits, and similar programs vary by country/jurisdiction and are not reproduced here — confirm the
        applicable local standard when it matters for a specific determination.
      </p>
    </ReferenceShell>
  )
}
