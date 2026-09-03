// Anisometropia: the interocular difference in refractive power itself (spherical equivalent),
// distinct from the RetinalImageAniseikonia calculator, which quantifies the resulting percent
// retinal IMAGE SIZE difference. SE = Sphere + Cylinder/2 (imported, not reimplemented).
//
// Classification bands (standard optometric teaching):
//   < 1.00 D  — Mild / not typically clinically significant
//   1.00-2.00 D — Moderate: aniseikonia symptoms and amblyopia risk increase, particularly in children
//   > 2.00 D  — Significant: meaningful amblyopia risk in children; consider contact lens correction
//               to reduce induced aniseikonia
// See meta.references in the UI for supporting sources.

import { sphericalEquivalent } from '../spherocylindrical/sphericalEquivalent.engine'

export interface AnisometropiaResult {
  seOD: number
  seOS: number
  anisometropiaD: number
  classification: string
}

export function evaluateAnisometropia(sphereOD: number, cylOD: number, sphereOS: number, cylOS: number): AnisometropiaResult {
  const seOD = sphericalEquivalent(sphereOD, cylOD)
  const seOS = sphericalEquivalent(sphereOS, cylOS)
  const anisometropiaD = Math.abs(seOD - seOS)

  let classification: string
  if (anisometropiaD < 1.0) {
    classification = 'Mild / not typically clinically significant'
  } else if (anisometropiaD <= 2.0) {
    classification = 'Moderate — aniseikonia symptoms and amblyopia risk increase, particularly in children'
  } else {
    classification = 'Significant — meaningful amblyopia risk in children; consider contact lens correction to reduce induced aniseikonia'
  }

  return { seOD, seOS, anisometropiaD, classification }
}
