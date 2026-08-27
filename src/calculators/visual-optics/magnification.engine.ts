// Linear (transverse) magnification, in vergence terms: m = U / V (object vergence / image
// vergence). Negative m = inverted image; |m| < 1 = minified, |m| > 1 = magnified.
export function transverseMagnification(objectVergenceD: number, imageVergenceD: number): number {
  if (imageVergenceD === 0) throw new Error('Image vergence cannot be zero.')
  return objectVergenceD / imageVergenceD
}

// Axial magnification for a system in air (n = n' = 1): m_axial = m_transverse^2.
export function axialMagnification(transverseM: number): number {
  return transverseM ** 2
}

// Angular magnification of a simple magnifier/loupe, referenced to the conventional 25cm
// (4D) near point.
//   Relaxed eye (image at infinity, object at the lens's focal point): M = F / 4
//   Accommodating eye (image formed at the 25cm near point):           M = 1 + F / 4
// This 25cm reference is itself the standard convention, not a universal physiological
// constant — some sources use a different reference distance.
export function angularMagnificationRelaxed(powerD: number): number {
  return powerD / 4
}

export function angularMagnificationAtNearPoint(powerD: number): number {
  return 1 + powerD / 4
}

// Spectacle magnification, POWER FACTOR ONLY: SM = 1 / (1 - d*Fv), d = vertex distance (m),
// Fv = back vertex power (D). The full spectacle magnification formula also includes a "shape
// factor" from the lens's front surface power, center thickness, and index, which is not
// included here since that data is rarely available at point of care — see calculator
// metadata limitations.
export function spectacleMagnificationPowerFactor(vertexPowerD: number, vertexDistanceMeters: number): number {
  const denominator = 1 - vertexDistanceMeters * vertexPowerD
  if (Math.abs(denominator) < 1e-9) throw new Error('This power and vertex distance combination is undefined.')
  return 1 / denominator
}

// Retinal image size via the small-angle/reduced-eye approximation:
//   image size = object size * (posterior nodal distance / object distance)
// Default nodal distance 17mm (reduced schematic eye) — adjustable since real eyes vary.
export const DEFAULT_NODAL_DISTANCE_MM = 17

export function retinalImageSizeMm(objectSizeMm: number, objectDistanceMeters: number, nodalDistanceMm = DEFAULT_NODAL_DISTANCE_MM): number {
  if (objectDistanceMeters === 0) throw new Error('Object distance cannot be zero.')
  return (objectSizeMm * nodalDistanceMm) / (objectDistanceMeters * 1000)
}

// Percent aniseikonia, using the difference relative to the MEAN of the two retinal image
// sizes (a symmetric definition that doesn't require choosing one eye as "the" reference —
// some clinical sources instead reference one eye specifically; this is stated explicitly).
export function percentAniseikonia(imageSizeOD: number, imageSizeOS: number): number {
  const mean = (imageSizeOD + imageSizeOS) / 2
  if (mean === 0) throw new Error('Image sizes cannot both be zero.')
  return (Math.abs(imageSizeOD - imageSizeOS) / mean) * 100
}
