import { ReferenceShell } from './shared/ReferenceShell'
import { ReferenceTable } from './shared/ReferenceTable'
import type { ReferenceMeta } from '../types/reference'

export const meta: ReferenceMeta = {
  id: 'corneal-thickness-table',
  name: 'Central Corneal Thickness Reference',
  category: 'Keratometry & Cornea',
  description: 'Typical central corneal thickness and common thin/average/thick classification cutoffs.',
  keywords: ['central corneal thickness', 'CCT', 'pachymetry', 'thin cornea', 'thick cornea'],
}

export function CornealThicknessTable() {
  return (
    <ReferenceShell meta={meta}>
      <ReferenceTable
        headers={['Category', 'Central corneal thickness']}
        rows={[
          ['Typical average (adult)', '~540–550 µm'],
          ['Thin cornea', '≤ 500 µm'],
          ['Average cornea', '501–570 µm'],
          ['Thick cornea', '> 570 µm'],
          ['Peripheral cornea (for comparison)', '~600–700 µm (thicker than center)'],
        ]}
      />
      <p className="text-xs text-slate-500">
        Thin corneas are associated with higher measured/estimated glaucoma risk and are one factor considered
        alongside IOP and other risk factors — CCT alone does not diagnose glaucoma. CCT also affects the accuracy
        of applanation IOP measurement (thinner corneas tend to under-read true IOP, thicker corneas tend to
        over-read it), though no single correction formula is universally accepted — see the note on this in the
        Keratometry calculator's limitations. Reported "normal" ranges vary somewhat by measurement device and
        population studied.
      </p>
    </ReferenceShell>
  )
}
