// All dates are handled as UTC-midnight Date objects to avoid daylight-saving/timezone drift
// when doing pure calendar arithmetic (age, day counts, adding intervals).

export function parseDateOnly(iso: string): Date {
  const [y, m, d] = iso.split('-').map(Number)
  return new Date(Date.UTC(y, m - 1, d))
}

export interface AgeBreakdown {
  years: number
  months: number
  days: number
  totalDays: number
}

function addYearsMonths(date: Date, years: number, months: number): Date {
  // JS Date normalizes day-of-month overflow (e.g. Jan 31 + 1 month -> Mar 3, since Feb has
  // no 31st) rather than clamping — that's intentional here, and handled by the walk-back
  // loop below rather than fought against.
  return new Date(Date.UTC(date.getUTCFullYear() + years, date.getUTCMonth() + months, date.getUTCDate()))
}

export function ageBetween(birthDate: Date, atDate: Date): AgeBreakdown {
  if (atDate < birthDate) throw new Error('The reference date cannot be before the birth date.')

  let years = atDate.getUTCFullYear() - birthDate.getUTCFullYear()
  let months = atDate.getUTCMonth() - birthDate.getUTCMonth()
  if (months < 0) {
    years -= 1
    months += 12
  }

  // Walk the (years, months) anniversary back until it no longer overshoots atDate — needed
  // for end-of-month birthdates (e.g. Jan 31) where a naive month offset can overflow past
  // atDate depending on the lengths of the months in between.
  let anniversary = addYearsMonths(birthDate, years, months)
  while (anniversary > atDate) {
    months -= 1
    if (months < 0) {
      years -= 1
      months += 12
    }
    anniversary = addYearsMonths(birthDate, years, months)
  }

  const days = Math.round((atDate.getTime() - anniversary.getTime()) / 86400000)
  const totalDays = Math.round((atDate.getTime() - birthDate.getTime()) / 86400000)

  return { years, months, days, totalDays }
}

export function daysBetween(startDate: Date, endDate: Date): number {
  return Math.round((endDate.getTime() - startDate.getTime()) / 86400000)
}

export function addDays(startDate: Date, days: number): Date {
  return new Date(startDate.getTime() + days * 86400000)
}

export function addMonths(startDate: Date, months: number): Date {
  const result = new Date(startDate.getTime())
  result.setUTCMonth(result.getUTCMonth() + months)
  return result
}

export function formatDateOnly(date: Date): string {
  return date.toISOString().slice(0, 10)
}
