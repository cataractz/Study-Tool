import { ReferenceShell } from './shared/ReferenceShell'
import { ReferenceTable } from './shared/ReferenceTable'
import { COMMON_LENS_DENSITIES } from '../calculators/ophthalmic-optics/lensThicknessWeight.engine'
import type { ReferenceMeta } from '../types/reference'

export const meta: ReferenceMeta = {
  id: 'lens-density-table',
  name: 'Spectacle Lens Material Density',
  category: 'Ophthalmic Optics',
  description: 'Density of common spectacle lens materials, used for lens weight estimation.',
  keywords: ['lens density', 'lens material', 'lens weight', 'g/cm3', 'material selection'],
}

export function LensDensityTable() {
  return (
    <ReferenceShell meta={meta}>
      <ReferenceTable
        headers={['Material', 'Density (g/cm³)', 'Refractive index (n)']}
        rows={COMMON_LENS_DENSITIES.map((m) => [m.material, m.density.toFixed(2), m.index.toFixed(3)])}
      />
      <p className="text-xs text-slate-500">
        Same data used by the Lens Thickness & Weight calculator's material selector — figures are representative for
        each material family; specific manufacturer formulations vary slightly.
      </p>
    </ReferenceShell>
  )
}
