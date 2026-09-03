import { describe, it, expect } from 'vitest'
import { evaluateRelativeAccommodation, NRA_NORM, PRA_NORM } from '../accommodation/nraPra.engine'
import { evaluateAccommodativeLagLead, LAG_NORM_LOW, LAG_NORM_HIGH } from '../accommodation/accommodativeLagLead.engine'
import { evaluateAccommodativeReserve } from '../accommodation/accommodativeReserve.engine'
import { hofstetterAmplitudes } from '../accommodation/accommodation.engine'

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

describe('Accommodative Lag/Lead', () => {
  it('classifies a lag within the normal range (average ~0.50 D)', () => {
    const result = evaluateAccommodativeLagLead(2.5, 2.0)
    expect(result.lag).toBeCloseTo(0.5, 5)
    expect(result.classification).toBe('lag')
    expect(result.withinNorm).toBe(true)
  })

  it('is within norm at the low and high edges of the norm band', () => {
    const low = evaluateAccommodativeLagLead(2.0, 2.0 - LAG_NORM_LOW)
    expect(low.withinNorm).toBe(true)
    const high = evaluateAccommodativeLagLead(2.0, 2.0 - LAG_NORM_HIGH)
    expect(high.withinNorm).toBe(true)
  })

  it('classifies excessive lag (above norm) as outside normal limits', () => {
    const result = evaluateAccommodativeLagLead(3.0, 1.0)
    expect(result.lag).toBeCloseTo(2.0, 5)
    expect(result.classification).toBe('lag')
    expect(result.withinNorm).toBe(false)
    expect(result.interpretation).toMatch(/insufficiency/i)
  })

  it('classifies a lead (over-accommodation, negative lag) as outside normal limits', () => {
    const result = evaluateAccommodativeLagLead(2.0, 2.5)
    expect(result.lag).toBeCloseTo(-0.5, 5)
    expect(result.classification).toBe('lead')
    expect(result.withinNorm).toBe(false)
    expect(result.interpretation).toMatch(/excess/i)
  })

  it('classifies exact zero lag as none', () => {
    const result = evaluateAccommodativeLagLead(2.0, 2.0)
    expect(result.lag).toBe(0)
    expect(result.classification).toBe('none')
    expect(result.withinNorm).toBe(false)
  })
})

describe('Accommodative Reserve', () => {
  it('flags adequate reserve when at least half the amplitude remains', () => {
    const result = evaluateAccommodativeReserve(8, 2)
    expect(result.reserve).toBeCloseTo(6, 5)
    expect(result.reservePercentOfAmplitude).toBeCloseTo(75, 5)
    expect(result.adequateReserve).toBe(true)
  })

  it('flags exactly 50% reserve as adequate (inclusive boundary)', () => {
    const result = evaluateAccommodativeReserve(8, 4)
    expect(result.reservePercentOfAmplitude).toBeCloseTo(50, 5)
    expect(result.adequateReserve).toBe(true)
  })

  it('flags inadequate reserve when less than half the amplitude remains', () => {
    const result = evaluateAccommodativeReserve(8, 6)
    expect(result.reserve).toBeCloseTo(2, 5)
    expect(result.reservePercentOfAmplitude).toBeCloseTo(25, 5)
    expect(result.adequateReserve).toBe(false)
    expect(result.interpretation).toMatch(/asthenopia|eye strain/i)
  })

  it('throws when demand exceeds amplitude', () => {
    expect(() => evaluateAccommodativeReserve(2, 3)).toThrow()
  })
})

describe('Amplitude of Accommodation (Hofstetter)', () => {
  it('reuses hofstetterAmplitudes and matches the documented formulas', () => {
    const result = hofstetterAmplitudes(40)
    expect(result.minimum).toBeCloseTo(15 - 0.25 * 40, 5)
    expect(result.average).toBeCloseTo(18.5 - 0.3 * 40, 5)
    expect(result.maximum).toBeCloseTo(25 - 0.4 * 40, 5)
  })

  it('clamps all three values at 0 for advanced ages', () => {
    const result = hofstetterAmplitudes(100)
    expect(result.minimum).toBe(0)
    expect(result.average).toBe(0)
    expect(result.maximum).toBe(0)
  })

  it('produces a strictly decreasing minimum/average/maximum ordering for a mid-range age', () => {
    const result = hofstetterAmplitudes(25)
    expect(result.minimum).toBeLessThan(result.average)
    expect(result.average).toBeLessThan(result.maximum)
  })
})
