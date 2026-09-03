// Visual angle subtended by a real object of known size at a known viewing distance, computed
// with exact trigonometry (arctan), not the small-angle approximation — appropriate across the
// full range of sizes/distances used clinically. size and distance must be the SAME unit.
//
// theta (deg) = 2 * atan(size / (2 * distance)) * (180/pi)
// arcmin = theta * 60
//
// The MAR-based decimal-acuity / logMAR conversion below ASSUMES the input size/angle IS the
// critical resolvable detail (e.g. a Landolt-C gap or a letter's stroke width) — NOT the overall
// optotype height. This is the standard convention: a 20/20 letter's overall height subtends
// 5 arcmin, while its critical stroke/gap detail subtends 1 arcmin (MAR = 1 arcmin = decimal
// 1.0). Conflating overall optotype size with critical detail size is a common error this
// calculator deliberately does not make — see meta.convention / the UI's caveat on this result.

export interface VisualAngleResult {
  degrees: number
  arcmin: number
  decimalAcuityEquivalent: number
  logMAR: number
}

export function visualAngle(sizeMm: number, distanceMm: number): VisualAngleResult {
  if (distanceMm <= 0) throw new Error('Viewing distance must be greater than zero.')
  if (sizeMm < 0) throw new Error('Object size cannot be negative.')

  const degrees = 2 * Math.atan(sizeMm / (2 * distanceMm)) * (180 / Math.PI)
  const arcmin = degrees * 60
  if (arcmin <= 0) throw new Error('Angular subtense must be greater than zero to compute an equivalent acuity.')

  const decimalAcuityEquivalent = 1 / arcmin
  const logMAR = Math.log10(arcmin)

  return { degrees, arcmin, decimalAcuityEquivalent, logMAR }
}
