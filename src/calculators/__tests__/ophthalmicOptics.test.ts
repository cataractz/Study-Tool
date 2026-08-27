import { describe, it, expect } from 'vitest'
import { powerFromFocalLengthMeters, focalLengthMetersFromPower } from '../ophthalmic-optics/focalLengthDiopter.engine'
import { imageVergence, objectVergenceFromImage, powerFromVergences } from '../ophthalmic-optics/vergence.engine'
import { equivalentPowerTwoLenses } from '../ophthalmic-optics/lensCombination.engine'
import { effectivePowerAtNewVertex, spectacleToContactLensPower, contactLensToSpectaclePower } from '../ophthalmic-optics/vertexPower.engine'
import { specToCL, clToSpec } from '../ophthalmic-optics/spectacleContactLens.engine'

describe('Focal length <-> diopters', () => {
  it('F = 1/f: a +4.00 D lens has a 25 cm focal length', () => {
    expect(focalLengthMetersFromPower(4) * 100).toBeCloseTo(25, 6)
  })

  it('is symmetric', () => {
    expect(powerFromFocalLengthMeters(0.25)).toBeCloseTo(4, 6)
  })
})

describe('Vergence equation U + F = V', () => {
  it('computes image vergence', () => {
    expect(imageVergence(-4, 10)).toBe(6)
  })

  it('computes object vergence from image vergence and power', () => {
    expect(objectVergenceFromImage(6, 10)).toBe(-4)
  })

  it('computes power from object and image vergence', () => {
    expect(powerFromVergences(-4, 6)).toBe(10)
  })
})

describe('Lens combination', () => {
  it('lenses in contact simply add', () => {
    expect(equivalentPowerTwoLenses(5, 3, 0)).toBe(8)
  })

  it('separated lenses use Feq = F1 + F2 - d*F1*F2', () => {
    // Two +10.00D lenses separated by 5cm (0.05m): 10+10-0.05*10*10 = 15
    expect(equivalentPowerTwoLenses(10, 10, 0.05)).toBeCloseTo(15, 6)
  })
})

describe('Vertex distance / effective power', () => {
  it('a +10.00D lens moved 12mm closer to the eye becomes stronger', () => {
    const result = effectivePowerAtNewVertex(10, 0.012)
    expect(result).toBeGreaterThan(10)
    expect(result).toBeCloseTo(10 / (1 - 0.012 * 10), 6)
  })

  it('a -10.00D lens moved 12mm closer to the eye becomes weaker in magnitude', () => {
    const result = effectivePowerAtNewVertex(-10, 0.012)
    expect(Math.abs(result)).toBeLessThan(10)
  })

  it('spectacle -> CL and CL -> spectacle are inverses at the same vertex distance', () => {
    const spec = 8
    const cl = spectacleToContactLensPower(spec, 0.012)
    const back = contactLensToSpectaclePower(cl, 0.012)
    expect(back).toBeCloseTo(spec, 6)
  })

  it('throws when the shift makes the new vergence infinite', () => {
    expect(() => effectivePowerAtNewVertex(10, 0.1)).toThrow()
  })
})

describe('Spectacle <-> contact lens (spherocylindrical, per-meridian)', () => {
  it('converts sphere-only Rx consistently with the scalar vertex formula', () => {
    const result = specToCL({ sphere: 8, cylinder: 0, axis: 90 }, 0.012)
    expect(result.sphere).toBeCloseTo(spectacleToContactLensPower(8, 0.012), 6)
    expect(result.cylinder).toBeCloseTo(0, 6)
  })

  it('round-trips spec -> CL -> spec for an astigmatic Rx', () => {
    const original = { sphere: -6, cylinder: -2, axis: 30 }
    const cl = specToCL(original, 0.012)
    const back = clToSpec(cl, 0.012)
    expect(back.sphere).toBeCloseTo(original.sphere, 6)
    expect(back.cylinder).toBeCloseTo(original.cylinder, 6)
  })
})
