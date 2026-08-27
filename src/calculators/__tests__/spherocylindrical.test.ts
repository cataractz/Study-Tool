import { describe, it, expect } from 'vitest'
import { transpose } from '../spherocylindrical/transposition.engine'
import { sphericalEquivalent } from '../spherocylindrical/sphericalEquivalent.engine'
import { meridionalPower, principalMeridians } from '../spherocylindrical/meridionalPower.engine'

describe('transpose', () => {
  it('matches the worked example from the spec: +2.00 -1.00 x180 -> +1.00 +1.00 x090', () => {
    const result = transpose({ sphere: 2.0, cylinder: -1.0, axis: 180 })
    expect(result.sphere).toBeCloseTo(1.0, 6)
    expect(result.cylinder).toBeCloseTo(1.0, 6)
    expect(result.axis).toBe(90)
  })

  it('is its own inverse (transposing twice returns the original Rx)', () => {
    const original = { sphere: -3.25, cylinder: -1.75, axis: 45 }
    const twice = transpose(transpose(original))
    expect(twice.sphere).toBeCloseTo(original.sphere, 6)
    expect(twice.cylinder).toBeCloseTo(original.cylinder, 6)
    expect(twice.axis).toBe(original.axis)
  })

  it('normalizes axis to the 1-180 range, e.g. 170 + 90 -> 80', () => {
    const result = transpose({ sphere: 0, cylinder: -2, axis: 170 })
    expect(result.axis).toBe(80)
  })
})

describe('sphericalEquivalent', () => {
  it('SE = S + C/2', () => {
    expect(sphericalEquivalent(2.0, -1.0)).toBeCloseTo(1.5, 6)
  })

  it('is unchanged by transposition', () => {
    const plus = { sphere: 1.0, cylinder: 1.0, axis: 90 }
    const minus = transpose(plus)
    expect(sphericalEquivalent(plus.sphere, plus.cylinder)).toBeCloseTo(sphericalEquivalent(minus.sphere, minus.cylinder), 6)
  })
})

describe('meridionalPower', () => {
  it('power at the axis meridian equals sphere', () => {
    expect(meridionalPower(-2, -3, 90, 90)).toBeCloseTo(-2, 6)
  })

  it('power at axis+90 equals sphere + cylinder', () => {
    expect(meridionalPower(-2, -3, 90, 180)).toBeCloseTo(-5, 6)
  })

  it('power at 45 degrees off axis is the mean of the two principal powers', () => {
    // sin^2(45) = 0.5, so F(45 off axis) = S + 0.5C = spherical equivalent
    expect(meridionalPower(1, 2, 0, 45)).toBeCloseTo(sphericalEquivalent(1, 2), 6)
  })
})

describe('principalMeridians', () => {
  it('returns S at the axis and S+C at axis+90, normalized', () => {
    const result = principalMeridians(-1, -2, 170)
    expect(result.axisMeridianPower).toBe(-1)
    expect(result.axisMeridianAxis).toBe(170)
    expect(result.perpendicularMeridianPower).toBe(-3)
    expect(result.perpendicularMeridianAxis).toBe(80)
  })
})
