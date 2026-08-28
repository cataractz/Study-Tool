// Approximate thickness difference between the center and edge of a lens, using the standard
// paraxial sagitta approximation (sag ~ d^2 / 8r combined with F = (n-1)/r):
//   Δt (mm) = (d(mm))^2 * |F(D)| / (8000 * (n-1))
// This is a simplified, widely-used dispensing approximation — it treats the lens as a single
// thin surface of the given power and ignores the separate front/back curve split, so it is
// only an estimate, not what a lab's exact edging calculation would produce.
export function thicknessDifferenceMm(diameterMm: number, powerD: number, index: number): number {
  if (index === 1) throw new Error('Refractive index cannot be 1 (no lens material).')
  return (diameterMm ** 2 * Math.abs(powerD)) / (8000 * (index - 1))
}

export interface LensThicknessResult {
  thicknessDifferenceMm: number
  centerThicknessMm: number
  edgeThicknessMm: number
}

/**
 * For a PLUS lens (thicker at center): specify the minimum EDGE thickness -> center is derived.
 * For a MINUS lens (thicker at edge): specify the minimum CENTER thickness -> edge is derived.
 */
export function lensThickness(diameterMm: number, powerD: number, index: number, specifiedThicknessMm: number): LensThicknessResult {
  const diff = thicknessDifferenceMm(diameterMm, powerD, index)
  if (powerD >= 0) {
    return { thicknessDifferenceMm: diff, centerThicknessMm: specifiedThicknessMm + diff, edgeThicknessMm: specifiedThicknessMm }
  }
  return { thicknessDifferenceMm: diff, centerThicknessMm: specifiedThicknessMm, edgeThicknessMm: specifiedThicknessMm + diff }
}

// Approximate lens weight: volume ~ (average thickness) x (lens area), area = pi*(d/2)^2.
// This treats the lens as a flat disc of uniform average thickness — a simplification that
// ignores the curved front/back surfaces, adequate for a rough weight estimate.
export function lensWeightGrams(diameterMm: number, averageThicknessMm: number, densityGPerCm3: number): number {
  const radiusCm = diameterMm / 2 / 10
  const thicknessCm = averageThicknessMm / 10
  const volumeCm3 = Math.PI * radiusCm ** 2 * thicknessCm
  return volumeCm3 * densityGPerCm3
}

export const COMMON_LENS_DENSITIES: { material: string; density: number; index: number }[] = [
  { material: 'CR-39 (index 1.498)', density: 1.32, index: 1.498 },
  { material: 'Crown glass (index 1.523)', density: 2.54, index: 1.523 },
  { material: 'Polycarbonate (index 1.586)', density: 1.2, index: 1.586 },
  { material: 'Trivex (index 1.532)', density: 1.11, index: 1.532 },
  { material: 'High-index 1.60 plastic', density: 1.3, index: 1.6 },
  { material: 'High-index 1.67 plastic', density: 1.35, index: 1.67 },
  { material: 'High-index 1.74 plastic', density: 1.47, index: 1.74 },
]
