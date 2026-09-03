// Hirschberg test: estimates the angle of strabismic deviation from how far the corneal light
// reflex is decentered from the pupil center. The conversion from mm of decentration to prism
// diopters (Δ) is a well-known point of disagreement between sources — commonly 15 Δ/mm in US
// optometric teaching, but biometric/photographic studies report values closer to 20-22 Δ/mm (see
// meta.limitations and meta.references in the UI for citations). This calculator does not assert
// one "true" ratio — the caller supplies it.
//
// Direction convention: a NASAL decentration of the reflex means the visual axis is deviated
// OUTWARD relative to fixation, i.e. the eye is exotropic. A TEMPORAL decentration means the eye
// is esotropic.
//
// Krimsky is the prism-neutralized refinement of Hirschberg (prism is held before the fixating or
// deviating eye until the reflex is centered) — it is a directly MEASURED finding, not calculated,
// so it has no formula here; the UI notes this distinction.

export type DecentrationDirection = 'nasal' | 'temporal'

export interface HirschbergResult {
  estimatedPrismDiopters: number
  estimatedDegrees: number
  deviationType: 'exodeviation' | 'esodeviation'
}

export function estimateDeviationFromDecentration(decentrationMm: number, ratioDeltaPerMm: number): number {
  if (decentrationMm < 0) throw new Error('Decentration must be zero or a positive number of millimeters.')
  if (ratioDeltaPerMm <= 0) throw new Error('The Δ/mm ratio must be greater than zero.')
  return decentrationMm * ratioDeltaPerMm
}

export function estimateDeviationDegrees(prismDiopters: number): number {
  return Math.atan(prismDiopters / 100) * (180 / Math.PI)
}

export function evaluateHirschberg(decentrationMm: number, ratioDeltaPerMm: number, direction: DecentrationDirection): HirschbergResult {
  const estimatedPrismDiopters = estimateDeviationFromDecentration(decentrationMm, ratioDeltaPerMm)
  const estimatedDegrees = estimateDeviationDegrees(estimatedPrismDiopters)
  const deviationType = direction === 'nasal' ? 'exodeviation' : 'esodeviation'
  return { estimatedPrismDiopters, estimatedDegrees, deviationType }
}
