import { ReferenceShell } from './shared/ReferenceShell'
import { ReferenceTable } from './shared/ReferenceTable'
import type { ReferenceMeta } from '../types/reference'

export const meta: ReferenceMeta = {
  id: 'refractive-indices-table',
  name: 'Refractive Indices Reference',
  category: 'Physical Optics',
  description: 'Common refractive indices for ocular media and spectacle lens materials.',
  keywords: ['refractive index', 'index of refraction', 'ocular media', 'lens material', 'n value'],
}

const OCULAR_MEDIA: [string, string][] = [
  ['Air', '1.000'],
  ['Water', '1.333'],
  ['Tears', '1.336'],
  ['Cornea', '1.376'],
  ['Aqueous humor', '1.336'],
  ['Crystalline lens (average, gradient index)', '~1.42 (varies by region)'],
  ['Vitreous humor', '1.336'],
  ['Reduced/schematic eye (average)', '1.333–1.336'],
]

const LENS_MATERIALS: [string, string][] = [
  ['CR-39 plastic', '1.498'],
  ['Crown glass', '1.523'],
  ['Trivex', '1.532'],
  ['Polycarbonate', '1.586'],
  ['High-index plastic', '1.60 / 1.67 / 1.74'],
]

export function RefractiveIndicesTable() {
  return (
    <ReferenceShell meta={meta}>
      <div>
        <h2 className="text-sm font-semibold text-slate-700 mb-2">Ocular Media</h2>
        <ReferenceTable headers={['Medium', 'Refractive index (n)']} rows={OCULAR_MEDIA} />
      </div>
      <div>
        <h2 className="text-sm font-semibold text-slate-700 mb-2">Common Spectacle Lens Materials</h2>
        <ReferenceTable headers={['Material', 'Refractive index (n)']} rows={LENS_MATERIALS} />
      </div>
      <p className="text-xs text-slate-500">
        The crystalline lens has a gradient (non-uniform) index and its average value varies somewhat between
        sources and with age — treat it as an approximation, not a fixed constant. The standard keratometric index
        (1.3375, used by most manual keratometers) is deliberately different from the cornea's true refractive index
        (1.376) — see the Keratometry calculator for why.
      </p>
    </ReferenceShell>
  )
}
