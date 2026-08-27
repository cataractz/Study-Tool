// Concentration unit conversions for compounded/topical medications.
// % w/v is defined as grams of solute per 100 mL of solution: 1% = 1 g/100mL = 10 mg/mL.
// Ratio strength (e.g. "1:1000") means 1 g of solute per that many mL of solution.

export function percentToMgPerMl(percent: number): number {
  return percent * 10
}

export function mgPerMlToPercent(mgPerMl: number): number {
  return mgPerMl / 10
}

export function mgPerMlToMgPerL(mgPerMl: number): number {
  return mgPerMl * 1000
}

export function mgPerLToMgPerMl(mgPerL: number): number {
  return mgPerL / 1000
}

/** Ratio strength "1:X" -> percent. */
export function ratioStrengthToPercent(ratioX: number): number {
  if (ratioX === 0) throw new Error('Ratio denominator cannot be zero.')
  return 100 / ratioX
}

/** Percent -> ratio strength, returned as the X in "1:X". */
export function percentToRatioStrengthX(percent: number): number {
  if (percent === 0) throw new Error('Percent cannot be zero (ratio would be infinite).')
  return 100 / percent
}
