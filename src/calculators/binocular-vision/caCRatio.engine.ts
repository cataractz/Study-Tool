// CA/C ratio: diopters of convergence-driven ("convergence") accommodation induced per unit of
// convergence. Clinically measured by holding fixation on a near target while accommodative
// response (dynamic retinoscopy, autorefraction, or binocular crossed-cylinder) is recorded first
// with no prism and then through a known base-out prism, which stimulates additional convergence
// without changing the accommodative stimulus:
//   CA/C (D/Δ) = (accommodative response with prism − accommodative response without prism) / prism (Δ)
// This is the same two-point "gradient" logic as gradient AC/A, applied to the reciprocal cross-link.
// Basis: Hung, Ciuffreda & Rosenfield's classical work on the accommodation-vergence cross-links;
// see also the 2024 British & Irish Orthoptic Journal literature review "The Measurement and
// Clinical Implications of the CA/C Ratio in Binocular Vision" (bioj-online.com/articles/10.22599/bioj.455).
//
// Units: most commonly reported as D per prism diopter (D/Δ). Converting to D per meter angle
// (D/MA) uses the same PD-based relationship as AC/A (convergence in Δ ≈ PD(cm) × convergence in MA).
//
// NOTE ON NORMAL RANGE: unlike AC/A, published normal values for CA/C vary substantially by study
// and technique (e.g. mean 0.13 ± 0.04 D/Δ, range 0.04-0.20 in one dataset; median 0.03 D/Δ with
// values up to 0.58 D/Δ in another). No single normal range is treated as authoritative here —
// see meta.limitations.

export function caCRatio(accommodationBaselineD: number, accommodationWithPrismD: number, prismD: number): number {
  if (prismD === 0) throw new Error('Prism power cannot be zero.')
  return (accommodationWithPrismD - accommodationBaselineD) / prismD
}

/** Converts a CA/C ratio from D per prism diopter to D per meter angle, using PD(cm) ≈ Δ per MA. */
export function caCRatioPerMeterAngle(caCPerPrismDiopter: number, pdCm: number): number {
  if (pdCm === 0) throw new Error('Interpupillary distance cannot be zero.')
  return caCPerPrismDiopter * pdCm
}
