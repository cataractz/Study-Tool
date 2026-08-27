// Equivalent power of two thin lenses.
// In contact (separation d = 0): Feq = F1 + F2.
// Separated by distance d (meters), in air: Feq = F1 + F2 - d * F1 * F2.
// This calculator is intentionally scoped to two lenses: extending the shortcut formula to
// three or more separated lenses requires sequential (step-along) vergence tracing through
// each element rather than a simple algebraic extension, and would misstate "equivalent power"
// if applied naively.

export function equivalentPowerTwoLenses(f1D: number, f2D: number, separationMeters = 0): number {
  return f1D + f2D - separationMeters * f1D * f2D
}
