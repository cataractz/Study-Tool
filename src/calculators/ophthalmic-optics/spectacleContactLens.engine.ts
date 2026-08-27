import { spectacleToContactLensPower, contactLensToSpectaclePower } from './vertexPower.engine'

export interface SphCylRx {
  sphere: number
  cylinder: number
  axis: number
}

/**
 * Converts a spherocylindrical Rx across a vertex distance by converting each PRINCIPAL
 * MERIDIAN's power independently (each meridian has its own power, so vertex effect differs
 * meridian-by-meridian) and reconstituting sphere/cylinder from the two converted powers.
 * This is the clinically correct approach for astigmatic vertex conversion — applying the
 * vertex formula only to the sphere (ignoring the cylinder's own vertex shift) is a common
 * shortcut but is not accurate for significant cylinder power.
 */
function convertRx(rx: SphCylRx, vertexMeters: number, convert: (p: number, v: number) => number): SphCylRx {
  const meridian1 = convert(rx.sphere, vertexMeters)
  const meridian2 = convert(rx.sphere + rx.cylinder, vertexMeters)
  const newSphere = meridian1
  const newCylinder = meridian2 - meridian1
  return { sphere: newSphere, cylinder: newCylinder, axis: rx.axis }
}

export function specToCL(rx: SphCylRx, vertexMeters: number): SphCylRx {
  return convertRx(rx, vertexMeters, spectacleToContactLensPower)
}

export function clToSpec(rx: SphCylRx, vertexMeters: number): SphCylRx {
  return convertRx(rx, vertexMeters, contactLensToSpectaclePower)
}
