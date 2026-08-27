// Decimal acuity is used as the central bridge value between notations, since it is the one
// quantity all the others are directly defined from:
//   Snellen num/denom  -> decimal = num/denom
//   logMAR             -> decimal = 10^(-logMAR)   (and inverse: logMAR = -log10(decimal))
//   M notation         -> decimal = testDistance(m) / M-size   (Sloan/Bailey-Lovie definition)
// ETDRS letter scoring is kept separate (see below) since it depends on the specific chart's
// starting logMAR, which is not universal across charts/protocols.

export function snellenToDecimal(numerator: number, denominator: number): number {
  if (denominator === 0) throw new Error('Snellen denominator cannot be zero.')
  return numerator / denominator
}

/** Returns a denominator for a fixed numerator (defaults to 20) approximating the decimal acuity. */
export function decimalToSnellenDenominator(decimal: number, numerator = 20): number {
  if (decimal === 0) throw new Error('Decimal acuity cannot be zero.')
  return numerator / decimal
}

export function decimalToLogMAR(decimal: number): number {
  if (decimal <= 0) throw new Error('Decimal acuity must be greater than zero.')
  return -Math.log10(decimal)
}

export function logMARToDecimal(logMAR: number): number {
  return 10 ** -logMAR
}

/** M-notation: decimal acuity = test distance (m) / M-size. */
export function decimalFromM(testDistanceMeters: number, mSize: number): number {
  if (mSize === 0) throw new Error('M size cannot be zero.')
  return testDistanceMeters / mSize
}

export function mFromDecimal(testDistanceMeters: number, decimal: number): number {
  if (decimal === 0) throw new Error('Decimal acuity cannot be zero.')
  return testDistanceMeters / decimal
}

// ETDRS: standard chart design is 5 letters per line, 0.1 logMAR per line -> 0.02 logMAR/letter.
// logMAR = startingChartLogMAR - 0.02 * lettersCorrect
// The starting logMAR depends on the chart and testing distance used and must be supplied by
// the user (commonly 1.0 for a standard 4m ETDRS chart, but this varies by protocol).
export function logMARFromETDRSLetters(startingLogMAR: number, lettersCorrect: number): number {
  return startingLogMAR - 0.02 * lettersCorrect
}

export function etdrsLettersFromLogMAR(startingLogMAR: number, logMAR: number): number {
  return (startingLogMAR - logMAR) / 0.02
}

export function logMARChange(logMAR1: number, logMAR2: number): number {
  return logMAR2 - logMAR1
}
