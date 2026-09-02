import { allClinicalWorkups } from '../data/clinicalWorkups'
import type { ClinicalWorkup } from '../types/clinicalWorkup'

export function getAllClinicalWorkups(): ClinicalWorkup[] {
  return allClinicalWorkups
}

export function getClinicalWorkupById(id: string): ClinicalWorkup | undefined {
  return allClinicalWorkups.find((w) => w.id === id)
}

export function searchClinicalWorkups(query: string): ClinicalWorkup[] {
  const q = query.trim().toLowerCase()
  if (!q) return allClinicalWorkups
  return allClinicalWorkups.filter((w) => {
    const haystack = [w.name, w.chiefComplaint].join(' ').toLowerCase()
    return haystack.includes(q)
  })
}

/** Workups that reference a given exam technique in their ancillary testing — used to render
 * "Related Clinical Workups" on a technique's own detail page (the reverse direction of the link). */
export function getWorkupsReferencingTechnique(techniqueId: string): ClinicalWorkup[] {
  return allClinicalWorkups.filter((w) => w.ancillaryTestingIds?.includes(techniqueId))
}
