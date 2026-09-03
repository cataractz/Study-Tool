// Two related but distinct spatial-frequency calculations:
//
// (a) Grating -> cpd (exact geometry, no ambiguity): given a grating's cycle width (one full
// light+dark bar pair) and viewing distance in the same units, the angular period of one cycle
// is computed with exact trigonometry, and cpd is simply its reciprocal.
//
// (b) Acuity -> approximate max resolvable cpd — RULE OF THUMB ONLY, not exact geometry. The
// commonly-cited approximation is cpd_max ~= 30 / MAR(arcmin), which is consistent with the
// standard reference point that 20/20 acuity (MAR = 1 arcmin) corresponds to a grating
// resolution limit of about 30 cycles/degree. This is an empirical correspondence between
// letter (recognition) acuity and grating (detection) acuity, not a geometric identity — the
// two acuity TYPES are measured differently and the literature reports a range of constants
// (commonly cited values run from roughly 30 to 60 depending on the study/stimulus), so treat
// this as an estimate only. See meta.limitations / meta.references.

export function gratingToCPD(cycleWidthMm: number, distanceMm: number): number {
  if (distanceMm <= 0) throw new Error('Viewing distance must be greater than zero.')
  if (cycleWidthMm <= 0) throw new Error('Cycle (stripe pair) width must be greater than zero.')

  const angularPeriodDeg = 2 * Math.atan(cycleWidthMm / (2 * distanceMm)) * (180 / Math.PI)
  if (angularPeriodDeg <= 0) throw new Error('Angular period must be greater than zero to compute cycles per degree.')
  return 1 / angularPeriodDeg
}

// RULE OF THUMB ONLY — see file header. Constant of 30 is the commonly-cited approximation
// anchored to 20/20 = 1 arcmin MAR = ~30 cpd resolution limit.
export const APPROX_CPD_CONSTANT = 30

export function acuityToApproxMaxCPD(marArcmin: number): number {
  if (marArcmin <= 0) throw new Error('Minimum angle of resolution (arcmin) must be greater than zero.')
  return APPROX_CPD_CONSTANT / marArcmin
}
