import { describe, it, expect } from 'vitest'
import { getAllLenses, getLensById, getLensDesigns, getLensManufacturers, searchLenses, formatBaseCurveDiopters } from '../lensService'

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

describe('formatBaseCurveDiopters', () => {
  it('converts a plain mm value to "D (mm)", diopters first', () => {
    // F = 337.5 / r — same formula/constant as the Keratometry calculator.
    expect(formatBaseCurveDiopters('8.6')).toBe('39.24 D (8.6 mm)')
  })

  it('matches the Keratometry calculator\'s conversion for a round number', () => {
    // 337.5 / 7.5 = 45 exactly.
    expect(formatBaseCurveDiopters('7.5')).toBe('45 D (7.5 mm)')
  })

  it('leaves a non-numeric / descriptive base curve string unchanged', () => {
    const custom = 'Custom lab order, typically 39.71–48.21 D (7.00–8.50 mm)'
    expect(formatBaseCurveDiopters(custom)).toBe(custom)
  })

  it('every lens in the database renders a base curve without throwing', () => {
    for (const lens of getAllLenses()) {
      for (const bc of lens.baseCurves) {
        expect(() => formatBaseCurveDiopters(bc)).not.toThrow()
      }
    }
  })
})
