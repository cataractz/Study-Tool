// Rule of thumb only (not a precise formula): a soft contact lens total diameter is commonly
// chosen at roughly HVID (horizontal visible iris diameter) + 2mm, to give adequate corneal
// coverage and limbal clearance. Actual lens diameter selection depends on corneal shape,
// sagittal depth/fit, and the specific product's available parameters — this is a starting
// estimate only, not a fitting formula.
export const CL_DIAMETER_RULE_OF_THUMB_ADD_MM = 2

export function estimatedSoftLensDiameter(hvidMm: number): number {
  return hvidMm + CL_DIAMETER_RULE_OF_THUMB_ADD_MM
}
