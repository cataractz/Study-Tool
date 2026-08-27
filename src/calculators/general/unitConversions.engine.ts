// General unit conversions. Each converter is a pure function; no optics-specific assumptions.

export const lengthToMeters: Record<string, number> = {
  nm: 1e-9,
  um: 1e-6,
  mm: 1e-3,
  cm: 1e-2,
  m: 1,
  in: 0.0254,
}

export function convertLength(value: number, from: keyof typeof lengthToMeters, to: keyof typeof lengthToMeters): number {
  return (value * lengthToMeters[from]) / lengthToMeters[to]
}

export const massToGrams: Record<string, number> = {
  mg: 1e-3,
  g: 1,
  kg: 1000,
}

export function convertMass(value: number, from: keyof typeof massToGrams, to: keyof typeof massToGrams): number {
  return (value * massToGrams[from]) / massToGrams[to]
}

export const volumeToLiters: Record<string, number> = {
  mL: 1e-3,
  L: 1,
}

export function convertVolume(value: number, from: keyof typeof volumeToLiters, to: keyof typeof volumeToLiters): number {
  return (value * volumeToLiters[from]) / volumeToLiters[to]
}

export const timeToSeconds: Record<string, number> = {
  s: 1,
  min: 60,
  hr: 3600,
}

export function convertTime(value: number, from: keyof typeof timeToSeconds, to: keyof typeof timeToSeconds): number {
  return (value * timeToSeconds[from]) / timeToSeconds[to]
}

export function degreesToRadians(deg: number): number {
  return (deg * Math.PI) / 180
}

export function radiansToDegrees(rad: number): number {
  return (rad * 180) / Math.PI
}

export function celsiusToFahrenheit(c: number): number {
  return (c * 9) / 5 + 32
}

export function fahrenheitToCelsius(f: number): number {
  return ((f - 32) * 5) / 9
}

export function decimalToPercentage(d: number): number {
  return d * 100
}

export function percentageToDecimal(p: number): number {
  return p / 100
}

export function decimalToFraction(d: number, maxDenominator = 1000): { numerator: number; denominator: number } {
  if (d === 0) return { numerator: 0, denominator: 1 }
  const sign = d < 0 ? -1 : 1
  const abs = Math.abs(d)
  let bestNum = 1
  let bestDenom = 1
  let bestError = Infinity
  for (let denom = 1; denom <= maxDenominator; denom++) {
    const num = Math.round(abs * denom)
    const error = Math.abs(abs - num / denom)
    if (error < bestError) {
      bestError = error
      bestNum = num
      bestDenom = denom
      if (error < 1e-9) break
    }
  }
  return { numerator: sign * bestNum, denominator: bestDenom }
}

export function fractionToDecimal(numerator: number, denominator: number): number {
  if (denominator === 0) throw new Error('Denominator cannot be zero.')
  return numerator / denominator
}

/** mm ↔ imperial inches, and other metric↔imperial helpers commonly relevant to spectacle work. */
export function mmToInches(mm: number): number {
  return mm / 25.4
}

export function inchesToMm(inches: number): number {
  return inches * 25.4
}

export function toScientificNotation(value: number, sigFigs = 4): string {
  if (value === 0) return `0 × 10⁰`
  return value.toExponential(sigFigs - 1).replace('e', ' × 10^').replace('+', '')
}

export function roundToSignificantFigures(value: number, sigFigs: number): number {
  if (value === 0) return 0
  const magnitude = Math.ceil(Math.log10(Math.abs(value)))
  const factor = 10 ** (sigFigs - magnitude)
  return Math.round(value * factor) / factor
}
