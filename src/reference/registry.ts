import type { ComponentType } from 'react'
import type { ReferenceMeta } from '../types/reference'

import { DondersTable, meta as dondersTableMeta } from './DondersTable'
import { AddPowerByAge, meta as addPowerByAgeMeta } from './AddPowerByAge'
import { VisualAcuityTable, meta as visualAcuityTableMeta } from './VisualAcuityTable'
import { RefractiveIndicesTable, meta as refractiveIndicesTableMeta } from './RefractiveIndicesTable'
import { LensDensityTable, meta as lensDensityTableMeta } from './LensDensityTable'
import { ClinicalRulesOfThumb, meta as clinicalRulesOfThumbMeta } from './ClinicalRulesOfThumb'

export interface ReferenceEntry {
  meta: ReferenceMeta
  Component: ComponentType
}

export const referenceRegistry: ReferenceEntry[] = [
  { meta: dondersTableMeta, Component: DondersTable },
  { meta: addPowerByAgeMeta, Component: AddPowerByAge },
  { meta: visualAcuityTableMeta, Component: VisualAcuityTable },
  { meta: refractiveIndicesTableMeta, Component: RefractiveIndicesTable },
  { meta: lensDensityTableMeta, Component: LensDensityTable },
  { meta: clinicalRulesOfThumbMeta, Component: ClinicalRulesOfThumb },
]

export function getReferenceById(id: string): ReferenceEntry | undefined {
  return referenceRegistry.find((r) => r.meta.id === id)
}

export function searchReferences(query: string): ReferenceEntry[] {
  const q = query.trim().toLowerCase()
  if (!q) return referenceRegistry
  return referenceRegistry.filter((r) => {
    const haystack = [r.meta.name, r.meta.description, r.meta.category, ...r.meta.keywords].join(' ').toLowerCase()
    return haystack.includes(q)
  })
}
