import { describe, it, expect } from 'vitest'
import { equivalentViewingPower } from '../low-vision/equivalentViewingPower.engine'
import { requiredMagnification } from '../low-vision/requiredMagnification.engine'
import { visualAngle } from '../visual-acuity/visualAngleMar.engine'
import { gratingToCPD, acuityToApproxMaxCPD, APPROX_CPD_CONSTANT } from '../visual-acuity/spatialFrequencyCPD.engine'
import { analyzeCornealShape } from '../keratometry/cornealEccentricity.engine'

describe('Equivalent Viewing Power (EVP)', () => {
  it('matches the vertex/effective-power form: F=20D at d=0 gives EVP=F', () => {
    const result = equivalentViewingPower(20, 0)
    expect(result.evp).toBeCloseTo(20, 6)
    expect(result.evdCm).toBeCloseTo(5, 6)
  })

  it('EVP increases when the eye moves closer to a plus lens (d > 0)', () => {
    const result = equivalentViewingPower(20, 0.025)
    // EVP = 20 / (1 - 0.025*20) = 20 / 0.5 = 40
    expect(result.evp).toBeCloseTo(40, 6)
    expect(result.evdCm).toBeCloseTo(2.5, 6)
  })

  it('throws when the denominator is zero (undefined EVP)', () => {
    expect(() => equivalentViewingPower(20, 0.05)).toThrow() // 1 - 0.05*20 = 0
  })

  it('throws when resulting EVP would be zero (power is zero)', () => {
    expect(() => equivalentViewingPower(0, 0.02)).toThrow()
  })
})

describe('Required magnification (M-notation)', () => {
  it('3M current / 1M target -> 3x', () => {
    expect(requiredMagnification(3, 1)).toBeCloseTo(3, 6)
  })

  it('reading target smaller than current acuity requires magnification > 1', () => {
    expect(requiredMagnification(2, 0.5)).toBeCloseTo(4, 6)
  })

  it('equal current and target acuity requires 1x', () => {
    expect(requiredMagnification(1, 1)).toBeCloseTo(1, 6)
  })

  it('throws for non-positive current acuity', () => {
    expect(() => requiredMagnification(0, 1)).toThrow()
    expect(() => requiredMagnification(-1, 1)).toThrow()
  })

  it('throws for non-positive target print size', () => {
    expect(() => requiredMagnification(3, 0)).toThrow()
    expect(() => requiredMagnification(3, -1)).toThrow()
  })
})

describe('Visual angle & MAR from object size/distance', () => {
  it('a 20/20 letter stroke detail (critical detail) subtends ~1 arcmin at 6m / 20ft', () => {
    // Standard 20/20 optotype: overall letter height subtends 5 arcmin at 20ft, stroke width 1/5 of that = 1 arcmin.
    // At 6000mm, 1 arcmin -> size = 2 * 6000 * tan(0.5 arcmin in rad)
    const oneArcminRad = (1 / 60) * (Math.PI / 180)
    const sizeMm = 2 * 6000 * Math.tan(oneArcminRad / 2)
    const result = visualAngle(sizeMm, 6000)
    expect(result.arcmin).toBeCloseTo(1, 3)
    expect(result.decimalAcuityEquivalent).toBeCloseTo(1.0, 2)
    expect(result.logMAR).toBeCloseTo(0, 2)
  })

  it('doubling the object size roughly doubles the angle for small angles', () => {
    const small = visualAngle(1, 1000)
    const doubled = visualAngle(2, 1000)
    expect(doubled.arcmin).toBeGreaterThan(small.arcmin)
    expect(doubled.arcmin / small.arcmin).toBeCloseTo(2, 1)
  })

  it('uses exact arctan geometry, not small-angle approximation, at large angles', () => {
    // At size == distance, half-angle = atan(0.5) which is NOT well approximated by size/distance in radians for a large angle check
    const result = visualAngle(1000, 1000)
    const smallAngleApproxDeg = (1000 / 1000) * (180 / Math.PI) // would be wildly wrong if used directly
    expect(result.degrees).not.toBeCloseTo(smallAngleApproxDeg, 0)
    expect(result.degrees).toBeCloseTo(2 * Math.atan(0.5) * (180 / Math.PI), 6)
  })

  it('throws when distance is zero or negative', () => {
    expect(() => visualAngle(5, 0)).toThrow()
    expect(() => visualAngle(5, -10)).toThrow()
  })

  it('throws when size is negative', () => {
    expect(() => visualAngle(-5, 100)).toThrow()
  })
})

describe('Spatial frequency (cycles/degree)', () => {
  it('grating -> cpd: a fine grating at typical viewing distance gives a plausible cpd', () => {
    // 1 cycle = 1 arcmin angular period (matches the 1-arcmin MAR reference) -> should be ~60 cpd
    const oneArcminRad = (1 / 60) * (Math.PI / 180)
    const cycleWidthMm = 2 * 6000 * Math.tan(oneArcminRad / 2)
    const cpd = gratingToCPD(cycleWidthMm, 6000)
    expect(cpd).toBeCloseTo(60, 0)
  })

  it('grating -> cpd is the reciprocal of the angular period in degrees', () => {
    const cpd = gratingToCPD(5, 3000)
    const angularPeriodDeg = 2 * Math.atan(5 / (2 * 3000)) * (180 / Math.PI)
    expect(cpd).toBeCloseTo(1 / angularPeriodDeg, 6)
  })

  it('throws for non-positive cycle width or distance', () => {
    expect(() => gratingToCPD(0, 1000)).toThrow()
    expect(() => gratingToCPD(5, 0)).toThrow()
    expect(() => gratingToCPD(5, -100)).toThrow()
  })

  it('acuity -> approx max cpd: MAR=1 arcmin (20/20) gives the anchor constant', () => {
    expect(acuityToApproxMaxCPD(1)).toBeCloseTo(APPROX_CPD_CONSTANT, 6)
  })

  it('acuity -> approx max cpd: worse acuity (larger MAR) gives lower cpd', () => {
    expect(acuityToApproxMaxCPD(2)).toBeLessThan(acuityToApproxMaxCPD(1))
  })

  it('throws for non-positive MAR', () => {
    expect(() => acuityToApproxMaxCPD(0)).toThrow()
    expect(() => acuityToApproxMaxCPD(-1)).toThrow()
  })
})

describe('Corneal eccentricity / shape factor (Q, p, e)', () => {
  it('average cornea: Q = -0.25 -> p = 0.75, e ~= 0.5, prolate', () => {
    const result = analyzeCornealShape(-0.25, 'Q')
    expect(result.p).toBeCloseTo(0.75, 6)
    expect(result.e).not.toBeNull()
    expect(result.e as number).toBeCloseTo(0.5, 2)
    expect(result.shape).toBe('prolate')
  })

  it('Q = 0 is spherical with e = 0', () => {
    const result = analyzeCornealShape(0, 'Q')
    expect(result.p).toBeCloseTo(1, 6)
    expect(result.e).toBeCloseTo(0, 6)
    expect(result.shape).toBe('spherical')
  })

  it('oblate cornea (Q > 0) has e = null, not NaN, while p remains valid', () => {
    const result = analyzeCornealShape(0.3, 'Q')
    expect(result.shape).toBe('oblate')
    expect(result.p).toBeCloseTo(1.3, 6)
    expect(result.e).toBeNull()
  })

  it('input as p round-trips to the same Q', () => {
    const result = analyzeCornealShape(0.75, 'p')
    expect(result.Q).toBeCloseTo(-0.25, 6)
    expect(result.e as number).toBeCloseTo(0.5, 6)
    expect(result.shape).toBe('prolate')
  })

  it('input as e round-trips to Q and p (keratoconus-like steep prolate example)', () => {
    const result = analyzeCornealShape(0.8, 'e')
    // e=0.8 -> p = 1 - 0.64 = 0.36, Q = -0.64
    expect(result.p).toBeCloseTo(0.36, 6)
    expect(result.Q).toBeCloseTo(-0.64, 6)
    expect(result.shape).toBe('prolate')
  })

  it('throws for a negative eccentricity input', () => {
    expect(() => analyzeCornealShape(-0.1, 'e')).toThrow()
  })
})
