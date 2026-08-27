// Effective power at a new vertex distance: F' = F / (1 - d*F)
// d = the distance (meters) the new plane is moved TOWARD the eye relative to the original
// plane (positive d = moving closer to the eye, e.g. spectacle plane -> corneal plane).
// Moving AWAY from the eye uses a negative d (equivalent to F / (1 + |d|*F)).
// This is the standard "vertex distance" / "effective power" formula (same equation covers
// both framings, since effective power at any new reference plane is just power re-evaluated
// at a new distance along the same optical axis).

export function effectivePowerAtNewVertex(powerD: number, dMeters: number): number {
  const denominator = 1 - dMeters * powerD
  if (Math.abs(denominator) < 1e-9) {
    throw new Error('This power and vertex shift combination is undefined (the new vergence would be infinite).')
  }
  return powerD / denominator
}

/** Spectacle power (further from eye) -> contact lens power (at the cornea), vertex distance in meters, positive. */
export function spectacleToContactLensPower(specPowerD: number, vertexMeters: number): number {
  return effectivePowerAtNewVertex(specPowerD, vertexMeters)
}

/** Contact lens power (at the cornea) -> spectacle power at a given vertex distance, in meters, positive. */
export function contactLensToSpectaclePower(clPowerD: number, vertexMeters: number): number {
  return effectivePowerAtNewVertex(clPowerD, -vertexMeters)
}
