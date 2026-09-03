// Required magnification from M-notation acuities (distinct from the Snellen-ratio-based
// "Magnification Required" tab on the low-vision-magnification calculator): the ratio of the
// patient's current best (measured) acuity in M-units to the M-size of the print/target the
// patient wants to be able to read. M-notation is a print-size metric where a size-N M print
// subtends the critical detail size of a standard optotype at a distance of N meters — so the
// ratio of two M-sizes measured/targeted at the same distance directly gives the magnification
// needed to bring the target detail up to the size the patient can currently resolve.
//
// e.g. patient reads 3M best (their threshold print size), wants to read 1M newsprint:
// required magnification = 3M / 1M = 3x.

export function requiredMagnification(currentAcuityM: number, targetPrintSizeM: number): number {
  if (currentAcuityM <= 0) throw new Error('Current best acuity (M) must be greater than zero.')
  if (targetPrintSizeM <= 0) throw new Error('Desired target print size (M) must be greater than zero.')
  return currentAcuityM / targetPrintSizeM
}
