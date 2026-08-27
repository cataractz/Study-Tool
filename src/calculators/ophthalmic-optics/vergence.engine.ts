// Vergence equation: U + F = V (all in diopters, index of refraction of air = 1).
// Sign convention: light travels left to right. Vergence is positive when rays are converging,
// negative when diverging. Distance (meters) = 1 / vergence, using the same sign.

export function imageVergence(objectVergenceD: number, powerD: number): number {
  return objectVergenceD + powerD
}

export function objectVergenceFromImage(imageVergenceD: number, powerD: number): number {
  return imageVergenceD - powerD
}

export function powerFromVergences(objectVergenceD: number, imageVergenceD: number): number {
  return imageVergenceD - objectVergenceD
}

/** Distance in meters corresponding to a given vergence (same sign convention). */
export function vergenceToDistanceMeters(vergenceD: number): number {
  if (vergenceD === 0) throw new Error('Vergence of zero corresponds to an object/image at infinity.')
  return 1 / vergenceD
}

export function distanceMetersToVergence(distanceMeters: number): number {
  if (distanceMeters === 0) throw new Error('Distance cannot be zero.')
  return 1 / distanceMeters
}
