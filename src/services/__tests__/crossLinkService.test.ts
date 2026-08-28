import { describe, it, expect } from 'vitest'
import { findExactLink, linkifySegments } from '../crossLinkService'

describe('findExactLink', () => {
  it('resolves a disease by its exact name, case-insensitively', () => {
    const link = findExactLink('primary open-angle glaucoma')
    expect(link?.type).toBe('disease')
    expect(link?.id).toBe('primary-open-angle-glaucoma')
  })

  it('resolves a disease by an alias', () => {
    const link = findExactLink('POAG')
    expect(link?.id).toBe('primary-open-angle-glaucoma')
  })

  it('resolves a drug by its exact generic name', () => {
    const link = findExactLink('Moxifloxacin')
    expect(link?.type).toBe('drug')
    expect(link?.id).toBe('moxifloxacin')
  })

  it('resolves a drug by a brand name', () => {
    const link = findExactLink('Vigamox')
    expect(link?.id).toBe('moxifloxacin')
  })

  it('returns undefined for a phrase that is not a whole disease/drug name', () => {
    expect(findExactLink('some unrelated sentence about eyes')).toBeUndefined()
  })
})

describe('linkifySegments', () => {
  it('finds a known drug name mentioned inside a sentence', () => {
    const segments = linkifySegments('First-line treatment is topical Moxifloxacin four times daily.')
    const linked = segments.filter((s) => s.link)
    expect(linked).toHaveLength(1)
    expect(linked[0].link?.id).toBe('moxifloxacin')
    expect(linked[0].text).toBe('Moxifloxacin')
  })

  it('matches a generic name stripped of its salt suffix against reference-table style text', () => {
    // The drug database has "Proparacaine hydrochloride"; reference tables often show just
    // "Proparacaine 0.5%" — the base-name index should still resolve this.
    const segments = linkifySegments('Proparacaine 0.5% is a topical anesthetic.')
    const linked = segments.filter((s) => s.link)
    expect(linked.length).toBeGreaterThanOrEqual(1)
    expect(linked[0].link?.type).toBe('drug')
  })

  it('does not link back to the excluded id (a page linking to itself)', () => {
    const segments = linkifySegments('Consider Primary Open-Angle Glaucoma in this patient.', {
      excludeId: 'primary-open-angle-glaucoma',
    })
    expect(segments.every((s) => !s.link)).toBe(true)
  })

  it('restricts matches to the allowed types only', () => {
    const segments = linkifySegments('Diagnosed with Primary Open-Angle Glaucoma, treated with Moxifloxacin.', {
      typesAllowed: ['disease'],
    })
    const linked = segments.filter((s) => s.link)
    expect(linked).toHaveLength(1)
    expect(linked[0].link?.type).toBe('disease')
  })

  it('links only the first occurrence of a repeated name in the same text', () => {
    const segments = linkifySegments('Moxifloxacin is preferred. Moxifloxacin is well tolerated.')
    const linked = segments.filter((s) => s.link)
    expect(linked).toHaveLength(1)
  })

  it('returns the original text unlinked when nothing matches', () => {
    const segments = linkifySegments('No recognizable names in this sentence at all.')
    expect(segments).toEqual([{ text: 'No recognizable names in this sentence at all.' }])
  })

  it('handles empty text without throwing', () => {
    expect(linkifySegments('')).toEqual([{ text: '' }])
  })
})
