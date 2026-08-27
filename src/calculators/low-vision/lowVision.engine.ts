// Magnification required to go from a current Snellen acuity to a target acuity:
// M = (current denominator / current numerator) / (target denominator / target numerator)
//   = decimal(current) ... expressed as a ratio: M = target decimal / current decimal is
// WRONG direction to remember by name alone, so this is derived explicitly from decimals.
export function magnificationRequired(currentNum: number, currentDenom: number, targetNum: number, targetDenom: number): number {
  const currentDecimal = currentNum / currentDenom
  const targetDecimal = targetNum / targetDenom
  if (currentDecimal === 0) throw new Error('Current acuity cannot be zero.')
  return targetDecimal / currentDecimal
}

// Relative Distance Magnification: moving an object closer by a factor increases its retinal
// image size by that same factor. RDM = reference viewing distance / new viewing distance.
export function relativeDistanceMagnification(referenceDistanceCm: number, newDistanceCm: number): number {
  if (newDistanceCm === 0) throw new Error('New viewing distance cannot be zero.')
  return referenceDistanceCm / newDistanceCm
}

// Relative Size Magnification: the ratio of an enlarged object's physical size to the
// original (reference) object's physical size, viewed at the same distance.
export function relativeSizeMagnification(newSize: number, referenceSize: number): number {
  if (referenceSize === 0) throw new Error('Reference size cannot be zero.')
  return newSize / referenceSize
}
