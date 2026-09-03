// Prism neutralization (alternate cover test) resultant: combines a horizontal AND vertical
// deviation finding, measured by prism neutralization, into a single oblique resultant for
// documentation and comparison across visits.
//   Resultant magnitude R (Δ) = sqrt(H^2 + V^2)
//   Direction angle from horizontal (deg) = atan(V / H) * 180/pi
// This is distinct from same-axis prism combination/vertex math (see the "Prism Combination"
// calculator): here H and V are two orthogonal cover-test measurements being resolved into one
// oblique vector for charting, not multiple prisms stacked on the same visual axis.
//
// This Pythagorean combination is a widely used CLINICAL APPROXIMATION for describing an oblique
// deviation — prism diopters are not strictly additive as linear vectors for larger deviations
// (unlike Prentice's Rule, which is exact for the decentration effect of a single prism). Treat the
// resultant as an approximation for documentation/comparison, not an exact optical law.

export interface PrismNeutralizationResult {
  resultant: number
  angleDegrees: number
}

export function combineHorizontalVertical(horizontalDelta: number, verticalDelta: number): PrismNeutralizationResult {
  const h = Math.abs(horizontalDelta)
  const v = Math.abs(verticalDelta)

  if (h === 0 && v === 0) {
    throw new Error('No deviation to combine — enter a horizontal and/or vertical finding.')
  }

  const resultant = Math.sqrt(h * h + v * v)
  const angleDegrees = h === 0 ? 90 : Math.atan(v / h) * (180 / Math.PI)

  return { resultant, angleDegrees }
}
