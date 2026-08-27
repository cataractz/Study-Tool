import { describe, it, expect } from 'vitest'
import { tearLensPower, classifySamFap } from '../contact-lenses/tearLens.engine'
import { samFapAdjustment, classifyBaseCurveChange, finalRgpPower } from '../contact-lenses/rgpFinalPower.engine'
import { adjustedAxisLARS } from '../contact-lenses/lars.engine'
import { sagitta, radiusFromSagitta } from '../contact-lenses/sagitta.engine'
import { dkOverT } from '../contact-lenses/oxygenTransmissibility.engine'

describe('Tear lens power / SAM-FAP', () => {
  it('base curve steeper than K gives a minus tear lens (SAM)', () => {
    const result = tearLensPower(7.7, 7.8)
    expect(result).toBeLessThan(0)
    expect(classifySamFap(7.7, 7.8)).toBe('SAM (Steeper, Add Minus)')
  })

  it('base curve flatter than K gives a plus tear lens (FAP)', () => {
    const result = tearLensPower(7.9, 7.8)
    expect(result).toBeGreaterThan(0)
    expect(classifySamFap(7.9, 7.8)).toBe('FAP (Flatter, Add Plus)')
  })

  it('base curve on K gives zero tear lens power', () => {
    expect(tearLensPower(7.8, 7.8)).toBeCloseTo(0, 6)
    expect(classifySamFap(7.8, 7.8)).toBe('On K (no tear lens power)')
  })
})

describe('RGP final power with SAM-FAP base-curve-change adjustment', () => {
  it('no BC change: final power = trial + over-refraction', () => {
    expect(finalRgpPower(-3.0, -0.5, 0)).toBeCloseTo(-3.5, 6)
  })

  it('steepening the final BC relative to trial adds minus', () => {
    const adj = samFapAdjustment(7.8, 7.7)
    expect(adj).toBeLessThan(0)
    expect(classifyBaseCurveChange(7.8, 7.7)).toBe('SAM (Steeper, Add Minus)')
  })

  it('flattening the final BC relative to trial adds plus', () => {
    const adj = samFapAdjustment(7.8, 7.9)
    expect(adj).toBeGreaterThan(0)
    expect(classifyBaseCurveChange(7.8, 7.9)).toBe('FAP (Flatter, Add Plus)')
  })

  it('full worked example combines trial + over-refraction + adjustment', () => {
    const adj = samFapAdjustment(7.8, 7.7)
    const result = finalRgpPower(-3.0, -0.5, adj)
    expect(result).toBeCloseTo(-3.5 + adj, 6)
  })
})

describe('LARS (toric soft lens rotation)', () => {
  it('rotation to examiner\'s left is added to the axis', () => {
    expect(adjustedAxisLARS(90, 10, 'left')).toBe(100)
  })

  it('rotation to examiner\'s right is subtracted from the axis', () => {
    expect(adjustedAxisLARS(90, 10, 'right')).toBe(80)
  })

  it('normalizes the result to the 1-180 range', () => {
    expect(adjustedAxisLARS(175, 10, 'left')).toBe(5)
  })
})

describe('Sagittal depth', () => {
  it('matches a known reference value: 8.6mm BC, 14.0mm chord -> ~3.6mm sag', () => {
    expect(sagitta(8.6, 14.0)).toBeCloseTo(3.604, 2)
  })

  it('radius <-> sag round-trips', () => {
    const s = sagitta(7.8, 9.5)
    expect(radiusFromSagitta(s, 9.5)).toBeCloseTo(7.8, 6)
  })

  it('throws when the chord is too large for the radius', () => {
    expect(() => sagitta(5, 20)).toThrow()
  })
})

describe('Oxygen transmissibility Dk/t', () => {
  it('matches a known silicone hydrogel-range example: Dk 100, t 0.07mm -> ~142.9', () => {
    expect(dkOverT(100, 0.07)).toBeCloseTo(142.857, 1)
  })

  it('thinner lens (same Dk) has higher Dk/t', () => {
    expect(dkOverT(100, 0.05)).toBeGreaterThan(dkOverT(100, 0.1))
  })
})
