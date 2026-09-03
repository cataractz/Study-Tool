// Convergence (vergence) demand: the horizontal convergence, in prism diopters, required for both
// eyes to fixate a near target given the total interpupillary distance and the working distance.
//   Convergence demand (Δ) = 100 * PD (cm) / d (cm)
// Sanity check: PD = 6 cm, d = 40 cm -> 100 * 6 / 40 = 15 Δ, the standard textbook figure used to
// illustrate near-point convergence demand at the conventional 40 cm testing distance.

export function convergenceDemand(pdCm: number, distanceCm: number): number {
  if (pdCm <= 0) throw new Error('Interpupillary distance must be greater than zero.')
  if (distanceCm <= 0) throw new Error('Working distance must be greater than zero.')
  return (100 * pdCm) / distanceCm
}
