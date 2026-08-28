// Working distance <-> accommodative demand: D = 1 / d(m). Identical formula, two names —
// the accommodative demand of a working distance IS that distance expressed in diopters.

export function distanceCmToDiopters(distanceCm: number): number {
  if (distanceCm === 0) throw new Error('Distance cannot be zero.')
  return 100 / distanceCm
}

export function diopterToDistanceCm(diopters: number): number {
  if (diopters === 0) throw new Error('Diopters cannot be zero (distance would be infinite).')
  return 100 / diopters
}

// Amplitude of Accommodation: AA = 1/NPA(m) - 1/FPA(m). When the far point is at optical
// infinity (i.e. the patient is corrected for distance), 1/FPA = 0 and AA reduces to 1/NPA(m).
export function amplitudeFromNearPoint(nearPointCm: number, farPointCm: number | null = null): number {
  if (nearPointCm === 0) throw new Error('Near point distance cannot be zero.')
  const nearD = 100 / nearPointCm
  const farD = farPointCm && farPointCm !== 0 ? 100 / farPointCm : 0
  return nearD - farD
}

export function nearPointFromAmplitude(amplitudeD: number, farPointCm: number | null = null): number {
  const farD = farPointCm && farPointCm !== 0 ? 100 / farPointCm : 0
  const nearD = amplitudeD + farD
  if (nearD === 0) throw new Error('Resulting near point would be at infinity.')
  return 100 / nearD
}

// RULE OF THUMB ONLY — one common clinical estimation approach (the "half-amplitude" reserve
// method), not a universal formula: keep roughly half of the amplitude of accommodation in
// reserve for comfortable sustained near work, and prescribe an add for the remainder of the
// demand. Other methods exist (e.g. age-based starting-point tables, trial-and-response);
// final add should always be refined by subjective response, not taken from this alone.
export function estimatedAddHalfAmplitudeRule(accommodativeDemandD: number, amplitudeOfAccommodationD: number): number {
  const estimatedAdd = accommodativeDemandD - amplitudeOfAccommodationD / 2
  return Math.max(0, estimatedAdd)
}

// Hofstetter's formulas: standard modern estimates for expected amplitude of accommodation by
// age, commonly used alongside (and preferred over) the older Donders' table for a
// standardized reference. Values below 0 are clamped since amplitude cannot be negative.
export interface HofstetterAmplitudes {
  minimum: number
  average: number
  maximum: number
}

export function hofstetterAmplitudes(age: number): HofstetterAmplitudes {
  return {
    minimum: Math.max(0, 15 - 0.25 * age),
    average: Math.max(0, 18.5 - 0.3 * age),
    maximum: Math.max(0, 25 - 0.4 * age),
  }
}
