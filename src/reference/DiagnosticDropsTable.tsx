import { ReferenceShell } from './shared/ReferenceShell'
import { ReferenceTable } from './shared/ReferenceTable'
import type { ReferenceMeta } from '../types/reference'

export const meta: ReferenceMeta = {
  id: 'diagnostic-drops-table',
  name: 'Diagnostic Drops — Onset & Duration',
  category: 'Pharmacology',
  description: 'Onset and duration of action for common topical anesthetics, mydriatics, and cycloplegics.',
  keywords: ['proparacaine', 'tropicamide', 'cyclopentolate', 'phenylephrine', 'cycloplegic', 'mydriatic', 'anesthetic', 'onset', 'duration'],
}

export function DiagnosticDropsTable() {
  return (
    <ReferenceShell meta={meta}>
      <ReferenceTable
        headers={['Agent', 'Class', 'Onset', 'Duration']}
        rows={[
          ['Proparacaine 0.5%', 'Topical anesthetic', '~20 seconds', '10–15 minutes'],
          ['Tropicamide 1%', 'Mydriatic/cycloplegic', '15–20 minutes', '~6 hours'],
          ['Cyclopentolate 1%', 'Cycloplegic (+ mydriatic)', '30–60 minutes', '~24 hours'],
          ['Phenylephrine 2.5%', 'Mydriatic only (no cycloplegia)', '~15 minutes', '3–4 hours'],
          ['Cyclopentolate + Phenylephrine (combination)', 'Mydriatic + cycloplegic', '3–6 minutes (partial effect)', 'Usually < 24 hours'],
        ]}
      />
      <p className="text-xs text-slate-500">
        Phenylephrine dilates via alpha-1 agonism on the iris dilator but does not relax the ciliary body, so it
        provides mydriasis without cycloplegia. Onset/duration vary with individual pigmentation (darker irides
        often show slower onset and shorter apparent duration), concentration used, and instillation technique —
        treat these as typical ranges, not guarantees for a specific patient. Always confirm with current product
        labeling before use.
      </p>
    </ReferenceShell>
  )
}
