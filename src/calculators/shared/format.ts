/** Rounds to avoid floating-point artifacts (e.g. 0.1 + 0.2) before display. */
export function roundTo(value: number, decimals: number): number {
  const factor = 10 ** decimals
  return Math.round((value + Number.EPSILON) * factor) / factor
}

/** Formats a diopter value with an explicit sign and fixed decimals, e.g. +2.50, -1.25, 0.00. */
export function formatDiopter(value: number, decimals = 2): string {
  const rounded = roundTo(value, decimals)
  const sign = rounded > 0 ? '+' : rounded < 0 ? '−' : '+'
  return `${sign}${Math.abs(rounded).toFixed(decimals)}`
}

/** Formats a plain signed number (no D suffix), e.g. for prism, mm, etc. */
export function formatSigned(value: number, decimals = 2): string {
  const rounded = roundTo(value, decimals)
  const sign = rounded > 0 ? '+' : rounded < 0 ? '−' : ''
  return `${sign}${Math.abs(rounded).toFixed(decimals)}`
}

/** Formats an unsigned magnitude, e.g. prism diopters, mm, degrees. */
export function formatMagnitude(value: number, decimals = 2): string {
  return roundTo(Math.abs(value), decimals).toFixed(decimals)
}

/** Normalizes an axis to the standard 1-180 degree convention used for cylinder axes. */
export function normalizeAxis(axis: number): number {
  let a = axis % 180
  if (a <= 0) a += 180
  return a
}

export function formatAxis(axis: number): string {
  return `${Math.round(normalizeAxis(axis))}°`
}

/** Parses a user-entered numeric string; returns null (not NaN) for empty/invalid input. */
export function parseNumeric(raw: string): number | null {
  if (raw.trim() === '') return null
  const n = Number(raw)
  return Number.isFinite(n) ? n : null
}

export function isValidNumber(n: unknown): n is number {
  return typeof n === 'number' && Number.isFinite(n)
}

/** Tolerance-aware equality check used by Practice mode grading. */
export function withinTolerance(userValue: number, correctValue: number, tolerance: number): boolean {
  return Math.abs(userValue - correctValue) <= tolerance + 1e-9
}
