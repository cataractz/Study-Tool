// Corneal asphericity (shape) descriptors: Q value (asphericity/conic constant), p (shape
// factor), and e (eccentricity) all describe the same underlying corneal conic section and are
// mathematically interconvertible:
//   p = Q + 1
//   e = sqrt(1 - p) = sqrt(-Q)      (only real-valued when p <= 1, i.e. Q <= 0)
//
// Classification by Q: Q < 0 -> prolate (cornea flattens toward the periphery — the normal/
// typical corneal shape, e.g. average cornea ~= Q -0.25, p 0.75, e ~= 0.5), Q = 0 -> spherical,
// Q > 0 -> oblate (cornea steepens toward the periphery — seen e.g. in many post-myopic-LASIK
// corneas). Eccentricity, as classically defined above, is NOT a real number for oblate corneas
// (p > 1 would require sqrt of a negative number) — this is handled explicitly below by
// returning e: null rather than NaN; p and Q remain valid and defined regardless of shape.
//
// IMPORTANT — sign convention is NOT universal: some instruments/sources report Q with the
// opposite sign, or report only an unsigned "eccentricity"/shape-factor magnitude without a
// prolate/oblate sign at all. This calculator uses the convention above (Q negative = prolate,
// matching most modern corneal topography literature and the p = Q+1 relationship), but ALWAYS
// confirm the sign convention your specific instrument/source uses before comparing values
// across devices. See meta.limitations / meta.references.

export type CornealShape = 'prolate' | 'spherical' | 'oblate'

export interface CornealShapeResult {
  Q: number
  p: number
  e: number | null
  shape: CornealShape
}

function classify(Q: number): CornealShape {
  if (Q < 0) return 'prolate'
  if (Q > 0) return 'oblate'
  return 'spherical'
}

function eccentricityFromP(p: number): number | null {
  const underRoot = 1 - p
  return underRoot >= 0 ? Math.sqrt(underRoot) : null
}

export function analyzeCornealShape(inputValue: number, inputType: 'Q' | 'p' | 'e'): CornealShapeResult {
  if (inputType === 'e' && inputValue < 0) {
    throw new Error('Eccentricity is conventionally entered as a non-negative value.')
  }

  let Q: number
  let p: number

  if (inputType === 'Q') {
    Q = inputValue
    p = Q + 1
  } else if (inputType === 'p') {
    p = inputValue
    Q = p - 1
  } else {
    // e = sqrt(1 - p) = sqrt(-Q)  =>  p = 1 - e^2, Q = -e^2
    p = 1 - inputValue ** 2
    Q = -(inputValue ** 2)
  }

  return { Q, p, e: eccentricityFromP(p), shape: classify(Q) }
}
