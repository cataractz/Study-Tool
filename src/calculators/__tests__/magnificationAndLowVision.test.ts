import { describe, it, expect } from 'vitest'
import {
  transverseMagnification,
  axialMagnification,
  angularMagnificationRelaxed,
  angularMagnificationAtNearPoint,
  spectacleMagnificationPowerFactor,
  retinalImageSizeMm,
  percentAniseikonia,
} from '../visual-optics/magnification.engine'
import { magnificationRequired, relativeDistanceMagnification, relativeSizeMagnification } from '../low-vision/lowVision.engine'
import { calculateTelescope } from '../low-vision/telescope.engine'

describe('Transverse and axial magnification', () => {
  it('matches the classic 2f-to-2f result: m = -1', () => {
    // +10D lens, object at u=-0.2m (20cm, 2f) -> U=-5D, V=U+F=5D
    const m = transverseMagnification(-5, 5)
    expect(m).toBeCloseTo(-1, 6)
  })

  it('axial magnification is m^2 (always positive)', () => {
    expect(axialMagnification(-2)).toBe(4)
    expect(axialMagnification(0.5)).toBe(0.25)
  })
})

describe('Angular magnification', () => {
  it('relaxed eye: M = F/4', () => {
    expect(angularMagnificationRelaxed(20)).toBe(5)
  })

  it('at near point: M = 1 + F/4', () => {
    expect(angularMagnificationAtNearPoint(20)).toBe(6)
  })
})

describe('Spectacle magnification (power factor)', () => {
  it('SM = 1/(1-dF): +10D at 12mm vertex', () => {
    const result = spectacleMagnificationPowerFactor(10, 0.012)
    expect(result).toBeCloseTo(1 / (1 - 0.012 * 10), 6)
    expect(result).toBeGreaterThan(1) // plus lens magnifies
  })

  it('minus lens minifies (SM < 1)', () => {
    const result = spectacleMagnificationPowerFactor(-10, 0.012)
    expect(result).toBeLessThan(1)
  })
})

describe('Retinal image size and aniseikonia', () => {
  it('matches the known 5-arcmin subtense at 17mm nodal distance (~24.7 microns)', () => {
    // A 20/20 letter (8.73mm) at 6m subtends 5 arcmin
    const result = retinalImageSizeMm(8.73, 6)
    expect(result).toBeCloseTo(0.0247, 3)
  })

  it('percent aniseikonia relative to the mean of two image sizes', () => {
    expect(percentAniseikonia(1.05, 1.0)).toBeCloseTo((0.05 / 1.025) * 100, 4)
  })

  it('zero aniseikonia when image sizes match', () => {
    expect(percentAniseikonia(1.0, 1.0)).toBe(0)
  })
})

describe('Low vision: magnification required, RDM, RSM', () => {
  it('20/200 to 20/40 needs 5x magnification', () => {
    expect(magnificationRequired(20, 200, 20, 40)).toBeCloseTo(5, 6)
  })

  it('relative distance magnification: 40cm ref, 10cm new -> 4x', () => {
    expect(relativeDistanceMagnification(40, 10)).toBeCloseTo(4, 6)
  })

  it('relative size magnification is a straight size ratio', () => {
    expect(relativeSizeMagnification(20, 5)).toBe(4)
  })
})

describe('Telescope magnification', () => {
  it('Keplerian: two plus lenses give an inverted image', () => {
    const result = calculateTelescope(4, 20)
    expect(result.type).toBe('Keplerian')
    expect(result.orientation).toBe('Inverted')
    expect(result.magnification).toBeCloseTo(5, 6)
  })

  it('Galilean: plus objective, minus eyepiece gives an upright image', () => {
    const result = calculateTelescope(10, -40)
    expect(result.type).toBe('Galilean')
    expect(result.orientation).toBe('Upright')
    expect(result.magnification).toBeCloseTo(4, 6)
  })

  it('Galilean telescopes are shorter than the sum of |focal lengths| due to sign', () => {
    const result = calculateTelescope(10, -40)
    // length = 1/10 + 1/-40 = 0.1 - 0.025 = 0.075m = 7.5cm
    expect(result.lengthMeters).toBeCloseTo(0.075, 6)
  })
})
