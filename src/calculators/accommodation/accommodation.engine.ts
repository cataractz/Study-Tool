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
