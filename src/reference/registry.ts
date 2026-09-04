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
import { VisualFieldDefectLocalization, meta as visualFieldDefectLocalizationMeta } from './VisualFieldDefectLocalization'
import { OctNormativeThicknessTable, meta as octNormativeThicknessTableMeta } from './OctNormativeThicknessTable'
import { VisualFieldIndicesGuide, meta as visualFieldIndicesGuideMeta } from './VisualFieldIndicesGuide'
import { ElectrophysiologyNormsTable, meta as electrophysiologyNormsTableMeta } from './ElectrophysiologyNormsTable'
import { CorneaSpecularTopographyNormsTable, meta as corneaSpecularTopographyNormsTableMeta } from './CorneaSpecularTopographyNormsTable'
import { ContactLensCareSolutions, meta as contactLensCareSolutionsMeta } from './ContactLensCareSolutions'

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
  { meta: visualFieldDefectLocalizationMeta, Component: VisualFieldDefectLocalization },
  { meta: octNormativeThicknessTableMeta, Component: OctNormativeThicknessTable },
  { meta: visualFieldIndicesGuideMeta, Component: VisualFieldIndicesGuide },
  { meta: electrophysiologyNormsTableMeta, Component: ElectrophysiologyNormsTable },
  { meta: corneaSpecularTopographyNormsTableMeta, Component: CorneaSpecularTopographyNormsTable },
  { meta: contactLensCareSolutionsMeta, Component: ContactLensCareSolutions },
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
