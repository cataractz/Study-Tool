import { normalizeAxis } from '../shared/format'

// Power in any meridian theta: F(theta) = S + C * sin^2(theta - axis).
// Works with the Rx entered in either plus- or minus-cylinder notation, as long as S and C are
// taken from the same notation — F(theta) is simply the power actually present in that meridian.

export function meridionalPower(sphere: number, cylinder: number, axis: number, theta: number): number {
  const deltaRad = ((theta - axis) * Math.PI) / 180
  return sphere + cylinder * Math.sin(deltaRad) ** 2
}

export interface PrincipalMeridians {
  axisMeridianPower: number
  axisMeridianAxis: number
  perpendicularMeridianPower: number
  perpendicularMeridianAxis: number
}

/** The two principal meridians: power = S at the axis meridian, power = S + C at axis + 90°. */
export function principalMeridians(sphere: number, cylinder: number, axis: number): PrincipalMeridians {
  return {
    axisMeridianPower: sphere,
    axisMeridianAxis: normalizeAxis(axis),
    perpendicularMeridianPower: sphere + cylinder,
    perpendicularMeridianAxis: normalizeAxis(axis + 90),
  }
}
