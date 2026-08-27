// Sagittal depth of a spherical cap: sag = r - sqrt(r^2 - (d/2)^2), where r = radius of
// curvature and d = chord diameter, both in the same units (mm).
export function sagitta(radiusMm: number, diameterMm: number): number {
  const halfChord = diameterMm / 2
  const underRoot = radiusMm ** 2 - halfChord ** 2
  if (underRoot < 0) throw new Error('Diameter is too large for this radius of curvature (no real sagitta).')
  return radiusMm - Math.sqrt(underRoot)
}

/** Inverse: radius of curvature from a known sagitta and chord diameter. */
export function radiusFromSagitta(sagMm: number, diameterMm: number): number {
  if (sagMm === 0) throw new Error('Sagitta cannot be zero.')
  const halfChord = diameterMm / 2
  return (sagMm ** 2 + halfChord ** 2) / (2 * sagMm)
}
