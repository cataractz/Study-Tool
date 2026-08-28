import { describe, it, expect } from 'vitest'
import { getAllLenses, getLensById, getLensDesigns, getLensManufacturers, searchLenses } from '../lensService'

describe('lens data integrity', () => {
  it('has no duplicate lens ids', () => {
    const ids = getAllLenses().map((l) => l.id)
    const dupes = ids.filter((id, i) => ids.indexOf(id) !== i)
    expect(dupes).toEqual([])
  })

  it('every lens has a non-empty brand, manufacturer, and at least one bestFor entry', () => {
    for (const lens of getAllLenses()) {
      expect(lens.brand.trim().length).toBeGreaterThan(0)
      expect(lens.manufacturer.trim().length).toBeGreaterThan(0)
      expect(lens.bestFor.length).toBeGreaterThan(0)
      expect(lens.clinicalNotes.length).toBeGreaterThan(0)
    }
  })

  it('covers multiple lens designs, not just one category', () => {
    expect(getLensDesigns().length).toBeGreaterThanOrEqual(5)
  })
})

describe('getLensById', () => {
  it('finds a known lens by id', () => {
    expect(getLensById('biofinity')?.brand).toBe('Biofinity')
  })

  it('returns undefined for an unknown id', () => {
    expect(getLensById('not-a-real-lens')).toBeUndefined()
  })
})

describe('searchLenses', () => {
  it('finds lenses by brand name substring', () => {
    const results = searchLenses('oasys')
    expect(results.length).toBeGreaterThan(0)
    expect(results.every((l) => l.brand.toLowerCase().includes('oasys'))).toBe(true)
  })

  it('filters by design', () => {
    const results = searchLenses('', ['Scleral'])
    expect(results.length).toBeGreaterThan(0)
    expect(results.every((l) => l.design === 'Scleral')).toBe(true)
  })

  it('filters by manufacturer', () => {
    const manufacturers = getLensManufacturers()
    const target = manufacturers.find((m) => m.includes('CooperVision'))
    expect(target).toBeDefined()
    const results = searchLenses('', [], [], [target!])
    expect(results.length).toBeGreaterThan(0)
    expect(results.every((l) => l.manufacturer === target)).toBe(true)
  })

  it('returns everything for an empty query with no filters', () => {
    expect(searchLenses('')).toHaveLength(getAllLenses().length)
  })
})
