import { normalizeAxis } from '../shared/format'

// Corneal power from radius of curvature: F = (n' - 1) / r(m), using a KERATOMETRIC (not true)
// refractive index that approximates the combined power of the anterior and posterior corneal
// surfaces from the anterior radius alone. The most common value used by manual keratometers
// is 1.3375 (giving the familiar "337.5 / r(mm)" shortcut); some instruments use 1.3315 or
// other values — this is user-adjustable and defaults to 1.3375. This calculator does NOT
// measure the posterior corneal surface directly and is an instrument approximation, not a
// true total corneal power.
export const DEFAULT_KERATOMETRIC_INDEX = 1.3375

export function powerFromRadiusMm(radiusMm: number, keratometricIndex = DEFAULT_KERATOMETRIC_INDEX): number {
  if (radiusMm === 0) throw new Error('Radius cannot be zero.')
  return ((keratometricIndex - 1) * 1000) / radiusMm
}

export function radiusFromPowerMm(powerD: number, keratometricIndex = DEFAULT_KERATOMETRIC_INDEX): number {
  if (powerD === 0) throw new Error('Power cannot be zero.')
  return ((keratometricIndex - 1) * 1000) / powerD
}

export interface CornealAstigmatismResult {
  amount: number
  steepAxis: number
  steepMeridianPower: number
  flatMeridianPower: number
  meanK: number
  classification: 'With-the-Rule' | 'Against-the-Rule' | 'Oblique'
}

/**
 * Corneal astigmatism from two K readings. Classification convention used here: steep meridian
 * within 20° of 90° = With-the-Rule; within 20° of 180°/0° = Against-the-Rule; otherwise Oblique.
 * (Some texts use a ±30° band — this is stated explicitly since the boundary is a convention,
 * not a universal constant.)
 */
export function cornealAstigmatism(k1Power: number, k1Axis: number, k2Power: number, k2Axis: number): CornealAstigmatismResult {
  const steepPower = Math.max(k1Power, k2Power)
  const flatPower = Math.min(k1Power, k2Power)
  const steepAxis = normalizeAxis(k1Power >= k2Power ? k1Axis : k2Axis)
  const amount = steepPower - flatPower

  const distanceFrom90 = Math.min(Math.abs(steepAxis - 90), 180 - Math.abs(steepAxis - 90))
  const distanceFrom180or0 = Math.min(Math.abs(steepAxis - 180), Math.abs(steepAxis - 0))
  let classification: CornealAstigmatismResult['classification'] = 'Oblique'
  if (distanceFrom90 <= 20) classification = 'With-the-Rule'
  else if (distanceFrom180or0 <= 20) classification = 'Against-the-Rule'

  return {
    amount,
    steepAxis,
    steepMeridianPower: steepPower,
    flatMeridianPower: flatPower,
    meanK: (k1Power + k2Power) / 2,
    classification,
  }
}
