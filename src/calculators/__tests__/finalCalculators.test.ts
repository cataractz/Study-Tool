import { describe, it, expect } from 'vitest'
import { thicknessDifferenceMm, lensThickness, lensWeightGrams } from '../ophthalmic-optics/lensThicknessWeight.engine'
import { relativeSpectacleMagnification } from '../visual-optics/relativeSpectacleMagnification.engine'
import { estimatedSoftLensDiameter } from '../contact-lenses/clDiameterRuleOfThumb.engine'
import { estimatedAddHalfAmplitudeRule, hofstetterAmplitudes } from '../accommodation/accommodation.engine'

describe('Lens thickness', () => {
  it('thickness difference formula matches hand calculation', () => {
    // d=60mm, F=-6D, n=1.5: (60^2 * 6) / (8000 * 0.5) = 21600/4000 = 5.4
    expect(thicknessDifferenceMm(60, -6, 1.5)).toBeCloseTo(5.4, 6)
  })

  it('plus lens: specified thickness is the minimum EDGE, center is thicker', () => {
    const result = lensThickness(60, 6, 1.5, 1.0)
    expect(result.edgeThicknessMm).toBe(1.0)
    expect(result.centerThicknessMm).toBeGreaterThan(result.edgeThicknessMm)
  })

  it('minus lens: specified thickness is the minimum CENTER, edge is thicker', () => {
    const result = lensThickness(60, -6, 1.5, 2.0)
    expect(result.centerThicknessMm).toBe(2.0)
    expect(result.edgeThicknessMm).toBeGreaterThan(result.centerThicknessMm)
  })

  it('plano lens has zero thickness difference', () => {
    expect(thicknessDifferenceMm(60, 0, 1.5)).toBe(0)
  })
})

describe('Lens weight', () => {
  it('matches volume x density hand calculation', () => {
    // radius=3cm, thickness=0.2cm, volume=pi*9*0.2=5.655cm^3, density 1.32 -> ~7.46g
    const result = lensWeightGrams(60, 2, 1.32)
    expect(result).toBeCloseTo(Math.PI * 3 ** 2 * 0.2 * 1.32, 4)
  })

  it('denser material weighs more for the same geometry', () => {
    const plastic = lensWeightGrams(60, 2, 1.32)
    const glass = lensWeightGrams(60, 2, 2.54)
    expect(glass).toBeGreaterThan(plastic)
  })
})

describe('Relative Spectacle Magnification', () => {
  it("axial ametropia (Knapp's Law) gives RSM = 1 regardless of power", () => {
    expect(relativeSpectacleMagnification('axial')).toBe(1)
  })

  it('refractive ametropia follows the power-factor formula', () => {
    const result = relativeSpectacleMagnification('refractive', 10, 0.012)
    expect(result).toBeCloseTo(1 / (1 - 0.012 * 10), 6)
  })

  it('throws for refractive type without power/vertex supplied', () => {
    expect(() => relativeSpectacleMagnification('refractive')).toThrow()
  })
})

describe('Contact lens diameter rule of thumb', () => {
  it('adds 2mm to HVID', () => {
    expect(estimatedSoftLensDiameter(11.8)).toBeCloseTo(13.8, 6)
  })
})

describe('Near add rule of thumb', () => {
  it('subtracts half the amplitude from the demand', () => {
    expect(estimatedAddHalfAmplitudeRule(2.5, 4)).toBeCloseTo(0.5, 6)
  })

  it('never goes negative even when amplitude comfortably exceeds demand', () => {
    expect(estimatedAddHalfAmplitudeRule(2.5, 10)).toBe(0)
  })
})

describe("Hofstetter's amplitude of accommodation formulas", () => {
  it('age 40 gives commonly-cited values in the expected range', () => {
    const result = hofstetterAmplitudes(40)
    expect(result.minimum).toBeCloseTo(5, 6)
    expect(result.average).toBeCloseTo(6.5, 6)
    expect(result.maximum).toBeCloseTo(9, 6)
  })

  it('amplitude decreases with age', () => {
    const younger = hofstetterAmplitudes(20)
    const older = hofstetterAmplitudes(60)
    expect(older.average).toBeLessThan(younger.average)
  })

  it('never returns a negative amplitude for very old ages', () => {
    const result = hofstetterAmplitudes(100)
    expect(result.minimum).toBe(0)
    expect(result.average).toBe(0)
    expect(result.maximum).toBe(0)
  })
})
