// c = λf. Using the exact SI speed of light.
export const SPEED_OF_LIGHT = 299792458 // m/s
export const PLANCK_CONSTANT = 6.62607015e-34 // J*s (exact, SI 2019 definition)
export const EV_IN_JOULES = 1.602176634e-19 // J per electronvolt (exact)

export function frequencyFromWavelength(wavelengthMeters: number): number {
  if (wavelengthMeters === 0) throw new Error('Wavelength cannot be zero.')
  return SPEED_OF_LIGHT / wavelengthMeters
}

export function wavelengthFromFrequency(frequencyHz: number): number {
  if (frequencyHz === 0) throw new Error('Frequency cannot be zero.')
  return SPEED_OF_LIGHT / frequencyHz
}

// E = hf = hc/lambda
export function photonEnergyJoules(frequencyHz: number): number {
  return PLANCK_CONSTANT * frequencyHz
}

export function photonEnergyFromWavelengthJoules(wavelengthMeters: number): number {
  return photonEnergyJoules(frequencyFromWavelength(wavelengthMeters))
}

export function joulesToEv(joules: number): number {
  return joules / EV_IN_JOULES
}
