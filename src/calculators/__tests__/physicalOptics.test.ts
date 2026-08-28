import { describe, it, expect } from 'vitest'
import { frequencyFromWavelength, photonEnergyFromWavelengthJoules, joulesToEv } from '../physical-optics/wavelengthFrequency.engine'
import { rayleighCriterionRadians, radiansToArcminutes } from '../physical-optics/diffraction.engine'
import { malusLaw, brewstersAngleDegrees } from '../physical-optics/polarization.engine'
import { reflectanceNormalIncidence } from '../physical-optics/fresnelReflection.engine'
import { illuminanceFromIntensity, illuminanceFromFlux } from '../physical-optics/photometry.engine'
import { focalLengthFromRadius, imageDistance, mirrorMagnification } from '../physical-optics/mirror.engine'

describe('Wavelength, frequency, photon energy', () => {
  it('555nm green light gives ~2.23 eV (known reference value)', () => {
    const freq = frequencyFromWavelength(555e-9)
    const energyJ = photonEnergyFromWavelengthJoules(555e-9)
    expect(joulesToEv(energyJ)).toBeCloseTo(2.234, 2)
    expect(freq).toBeCloseTo(5.4e14, -13)
  })
})

describe('Diffraction (Rayleigh criterion)', () => {
  it('3mm pupil at 555nm gives ~0.78 arcmin (known reference range)', () => {
    const theta = rayleighCriterionRadians(555e-9, 3e-3)
    expect(radiansToArcminutes(theta)).toBeCloseTo(0.78, 1)
  })

  it('a larger aperture gives finer (smaller) resolution angle', () => {
    const small = rayleighCriterionRadians(555e-9, 2e-3)
    const large = rayleighCriterionRadians(555e-9, 6e-3)
    expect(large).toBeLessThan(small)
  })
})

describe("Malus's Law and Brewster's angle", () => {
  it('Malus: 0 degrees transmits full intensity', () => {
    expect(malusLaw(100, 0)).toBeCloseTo(100, 6)
  })

  it('Malus: 90 degrees transmits none', () => {
    expect(malusLaw(100, 90)).toBeCloseTo(0, 6)
  })

  it('Malus: 45 degrees transmits half', () => {
    expect(malusLaw(100, 45)).toBeCloseTo(50, 6)
  })

  it("Brewster's angle for air-to-water is ~53 degrees (known reference value)", () => {
    expect(brewstersAngleDegrees(1.0, 1.33)).toBeCloseTo(53.06, 1)
  })
})

describe('Fresnel reflection at normal incidence', () => {
  it('air-to-cornea reflectance is ~2% (known clinical reference)', () => {
    const r = reflectanceNormalIncidence(1.0, 1.376)
    expect(r * 100).toBeCloseTo(2.5, 1)
  })

  it('identical indices give zero reflectance', () => {
    expect(reflectanceNormalIncidence(1.5, 1.5)).toBe(0)
  })
})

describe('Photometry', () => {
  it('inverse square law', () => {
    expect(illuminanceFromIntensity(100, 2)).toBeCloseTo(25, 6)
  })

  it('doubling distance quarters illuminance', () => {
    const near = illuminanceFromIntensity(100, 1)
    const far = illuminanceFromIntensity(100, 2)
    expect(far).toBeCloseTo(near / 4, 6)
  })

  it('flux over area', () => {
    expect(illuminanceFromFlux(500, 10)).toBe(50)
  })
})

describe('Mirror equation', () => {
  it('concave mirror, object beyond center of curvature: real, inverted, minified image', () => {
    const f = focalLengthFromRadius(200) // concave, r=+200mm -> f=100mm
    const di = imageDistance(300, f)
    const m = mirrorMagnification(di, 300)
    expect(di).toBeCloseTo(150, 6)
    expect(m).toBeCloseTo(-0.5, 6)
  })

  it('convex mirror always gives a virtual, upright, minified image', () => {
    const f = focalLengthFromRadius(-200) // convex, r=-200mm -> f=-100mm
    const di = imageDistance(300, f)
    const m = mirrorMagnification(di, 300)
    expect(di).toBeLessThan(0) // virtual
    expect(m).toBeGreaterThan(0) // upright
    expect(Math.abs(m)).toBeLessThan(1) // minified
  })
})
