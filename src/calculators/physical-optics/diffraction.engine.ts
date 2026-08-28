// Rayleigh criterion for the diffraction-limited angular resolution of a circular aperture:
// theta (radians) = 1.22 * lambda / D, where lambda = wavelength (m), D = aperture diameter (m).
export function rayleighCriterionRadians(wavelengthMeters: number, apertureDiameterMeters: number): number {
  if (apertureDiameterMeters === 0) throw new Error('Aperture diameter cannot be zero.')
  return (1.22 * wavelengthMeters) / apertureDiameterMeters
}

export function radiansToArcseconds(radians: number): number {
  return radians * (180 / Math.PI) * 3600
}

export function radiansToArcminutes(radians: number): number {
  return radians * (180 / Math.PI) * 60
}
