import { describe, it, expect } from 'vitest'
import { evaluateRelativeAccommodation, NRA_NORM, PRA_NORM } from '../accommodation/nraPra.engine'

describe('NRA/PRA relative accommodation', () => {
  it('flags both within norm at exactly the norm values', () => {
    const result = evaluateRelativeAccommodation(NRA_NORM, PRA_NORM)
    expect(result.nraWithinNorm).toBe(true)
    expect(result.praWithinNorm).toBe(true)
  })

  it('computes total range as NRA + |PRA|', () => {
    const result = evaluateRelativeAccommodation(2.0, -2.5)
    expect(result.totalRange).toBeCloseTo(4.5, 5)
  })

  it('flags low NRA as outside normal limits', () => {
    const result = evaluateRelativeAccommodation(0.5, -2.5)
    expect(result.nraWithinNorm).toBe(false)
    expect(result.interpretation).toMatch(/too plus|excess/i)
  })

  it('flags reduced PRA as outside normal limits', () => {
    const result = evaluateRelativeAccommodation(2.0, -0.5)
    expect(result.praWithinNorm).toBe(false)
    expect(result.interpretation).toMatch(/insufficiency|too plus/i)
  })

  it('throws when NRA is entered as negative', () => {
    expect(() => evaluateRelativeAccommodation(-1, -2)).toThrow()
  })

  it('throws when PRA is entered as positive', () => {
    expect(() => evaluateRelativeAccommodation(2, 1)).toThrow()
  })
})
