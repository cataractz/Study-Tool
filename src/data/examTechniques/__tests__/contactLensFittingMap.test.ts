import { describe, it, expect } from 'vitest'
import {
  CONTACT_LENS_FITTING_CATEGORIES,
  CONTACT_LENS_FITTING_TECHNIQUE_IDS,
  CONTACT_LENS_MYOPIA_CONTROL_WORKUP_ID,
  CONTACT_LENS_CARE_SOLUTIONS_REFERENCE_ID,
  getContactLensFittingCategory,
  getContactLensFittingTechniqueIds,
  groupByFittingCategory,
} from '../contactLensFittingMap'
import { getAllExamTechniques, getExamTechniqueById } from '../../../services/examTechniqueService'
import { getClinicalWorkupById } from '../../../services/clinicalWorkupService'
import { getReferenceById } from '../../../reference/registry'

describe('contact lens fitting classification map', () => {
  it('every mapped technique id resolves to a real ExamTechnique', () => {
    for (const category of CONTACT_LENS_FITTING_CATEGORIES) {
      for (const id of CONTACT_LENS_FITTING_TECHNIQUE_IDS[category]) {
        expect(getExamTechniqueById(id), `${category}: "${id}"`).toBeDefined()
      }
    }
  })

  it('has no duplicate ids across categories', () => {
    const ids = getContactLensFittingTechniqueIds()
    const dupes = ids.filter((id, i) => ids.indexOf(id) !== i)
    expect(dupes).toEqual([])
  })

  it('getContactLensFittingCategory resolves every mapped id back to its category', () => {
    for (const category of CONTACT_LENS_FITTING_CATEGORIES) {
      for (const id of CONTACT_LENS_FITTING_TECHNIQUE_IDS[category]) {
        expect(getContactLensFittingCategory(id)).toBe(category)
      }
    }
  })

  it('returns undefined for a technique not in the map', () => {
    expect(getContactLensFittingCategory('not-a-real-technique')).toBeUndefined()
  })

  it('groupByFittingCategory buckets every mapped technique and no others', () => {
    const techniques = getAllExamTechniques()
    const grouped = groupByFittingCategory(techniques)
    const totalGrouped = Array.from(grouped.values()).reduce((sum, arr) => sum + arr.length, 0)
    expect(totalGrouped).toBe(getContactLensFittingTechniqueIds().length)
  })

  it('the myopia control workup pointer resolves to a real ClinicalWorkup', () => {
    expect(getClinicalWorkupById(CONTACT_LENS_MYOPIA_CONTROL_WORKUP_ID)).toBeDefined()
  })

  it('the care solutions reference pointer resolves to a real reference entry', () => {
    expect(getReferenceById(CONTACT_LENS_CARE_SOLUTIONS_REFERENCE_ID)).toBeDefined()
  })
})
