// Photometric quantities only (radiometric-to-photometric conversion depends on the eye's
// wavelength-dependent photopic luminosity function, not a fixed constant, so it is
// intentionally not included here).

// Inverse square law: illuminance from a point source. E (lux) = I (candela) / d^2 (meters).
export function illuminanceFromIntensity(intensityCandela: number, distanceMeters: number): number {
  if (distanceMeters === 0) throw new Error('Distance cannot be zero.')
  return intensityCandela / distanceMeters ** 2
}

// Illuminance = luminous flux / area, for flux spread uniformly over a surface.
export function illuminanceFromFlux(luminousFluxLumens: number, areaMeters2: number): number {
  if (areaMeters2 === 0) throw new Error('Area cannot be zero.')
  return luminousFluxLumens / areaMeters2
}

export function fluxFromIlluminance(illuminanceLux: number, areaMeters2: number): number {
  return illuminanceLux * areaMeters2
}
