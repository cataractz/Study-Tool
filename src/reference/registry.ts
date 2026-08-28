import type { ComponentType } from 'react'
import type { ReferenceMeta } from '../types/reference'

import { DondersTable, meta as dondersTableMeta } from './DondersTable'
import { AddPowerByAge, meta as addPowerByAgeMeta } from './AddPowerByAge'
import { VisualAcuityTable, meta as visualAcuityTableMeta } from './VisualAcuityTable'
import { RefractiveIndicesTable, meta as refractiveIndicesTableMeta } from './RefractiveIndicesTable'
import { LensDensityTable, meta as lensDensityTableMeta } from './LensDensityTable'
import { ClinicalRulesOfThumb, meta as clinicalRulesOfThumbMeta } from './ClinicalRulesOfThumb'
import { MorgansNorms, meta as morgansNormsMeta } from './MorgansNorms'
import { LowVisionClassification, meta as lowVisionClassificationMeta } from './LowVisionClassification'
import { CornealThicknessTable, meta as cornealThicknessTableMeta } from './CornealThicknessTable'
import { DiagnosticDropsTable, meta as diagnosticDropsTableMeta } from './DiagnosticDropsTable'
import { NormalValuesGuide, meta as normalValuesGuideMeta } from './NormalValuesGuide'

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
  { meta: morgansNormsMeta, Component: MorgansNorms },
  { meta: lowVisionClassificationMeta, Component: LowVisionClassification },
  { meta: cornealThicknessTableMeta, Component: CornealThicknessTable },
  { meta: diagnosticDropsTableMeta, Component: DiagnosticDropsTable },
  { meta: normalValuesGuideMeta, Component: NormalValuesGuide },
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
