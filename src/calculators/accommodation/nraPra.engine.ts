// NRA/PRA — Negative and Positive Relative Accommodation. Both are measured binocularly at a fixed
// near working distance (fixed accommodative + vergence demand): NRA is the most PLUS power that can
// be added before sustained blur (accommodation relaxes); PRA is the most MINUS power that can be
// added before sustained blur (accommodation is stimulated further). By convention NRA is recorded
// as a positive value and PRA as a negative value. Norms per Morgan: NRA = +2.00 +/- 0.50 D,
// PRA = -2.37 +/- 1.00 D.

export interface RelativeAccommodationResult {
  totalRange: number
  nraWithinNorm: boolean
  praWithinNorm: boolean
  interpretation: string
}

export const NRA_NORM = 2.0
export const NRA_TOLERANCE = 0.5
export const PRA_NORM = -2.37
export const PRA_TOLERANCE = 1.0

export function evaluateRelativeAccommodation(nra: number, pra: number): RelativeAccommodationResult {
  if (nra < 0) throw new Error('NRA is conventionally recorded as a positive (plus-lens) finding.')
  if (pra > 0) throw new Error('PRA is conventionally recorded as a negative (minus-lens) finding.')

  const totalRange = nra + Math.abs(pra)
  const nraWithinNorm = Math.abs(nra - NRA_NORM) <= NRA_TOLERANCE
  const praWithinNorm = Math.abs(pra - PRA_NORM) <= PRA_TOLERANCE

  let interpretation: string
  if (nraWithinNorm && praWithinNorm) {
    interpretation = 'Both NRA and PRA fall within normal limits — relative accommodation is balanced for the near correction/add in place.'
  } else if (!nraWithinNorm && nra < NRA_NORM - NRA_TOLERANCE) {
    interpretation = 'Low NRA (below norm) suggests the near add may be too plus for this patient, or an underlying accommodative/convergence excess — consider reducing the add or reassessing the near phoria.'
  } else if (!praWithinNorm && pra > PRA_NORM + PRA_TOLERANCE) {
    interpretation = 'Reduced PRA (less negative than norm) suggests accommodative insufficiency or an add that is already too plus — consider reducing the add, or accommodative therapy if amplitude is also low.'
  } else if (!nraWithinNorm) {
    interpretation = 'High NRA (above norm) can reflect a near add that is too minus relative to demand.'
  } else {
    interpretation = 'High-magnitude PRA (beyond norm) can reflect a near add that is too minus relative to demand, or unusually large accommodative reserves.'
  }

  return { totalRange, nraWithinNorm, praWithinNorm, interpretation }
}
