import { describe, it, expect } from 'vitest'
import { parseDateOnly, ageBetween, daysBetween, addDays, addMonths, formatDateOnly } from '../clinical-utilities/dateCalculations.engine'

describe('Age calculation', () => {
  it('computes a simple whole-year age', () => {
    const result = ageBetween(parseDateOnly('2000-01-15'), parseDateOnly('2024-01-15'))
    expect(result).toEqual({ years: 24, months: 0, days: 0, totalDays: expect.any(Number) })
  })

  it('handles a birthday not yet reached this year', () => {
    const result = ageBetween(parseDateOnly('2000-06-15'), parseDateOnly('2024-01-15'))
    expect(result.years).toBe(23)
    expect(result.months).toBe(7)
  })

  it('never produces negative days for an end-of-month birthday crossing a short month (Jan 31 -> Mar 1)', () => {
    // Jan 31 + 1 month overflows past Feb (29 days in 2024) to Mar 2/3, which is already past
    // Mar 1 -- so the anniversary hasn't technically arrived yet, and the correct breakdown
    // treats the last non-overshooting anniversary (Jan 31, 2024) as the base, giving 30
    // remaining days to Mar 1 rather than a negative or invalid day count.
    const result = ageBetween(parseDateOnly('2000-01-31'), parseDateOnly('2024-03-01'))
    expect(result.years).toBe(24)
    expect(result.months).toBe(0)
    expect(result.days).toBe(30)
    expect(result.days).toBeGreaterThanOrEqual(0)
  })

  it('a full year has elapsed exactly one year after an end-of-month birthday, once the month is reached', () => {
    const result = ageBetween(parseDateOnly('2000-01-31'), parseDateOnly('2001-01-31'))
    expect(result).toEqual({ years: 1, months: 0, days: 0, totalDays: expect.any(Number) })
  })

  it('throws when the reference date precedes the birth date', () => {
    expect(() => ageBetween(parseDateOnly('2024-01-01'), parseDateOnly('2023-01-01'))).toThrow()
  })
})

describe('Date arithmetic', () => {
  it('days between two dates', () => {
    expect(daysBetween(parseDateOnly('2024-01-01'), parseDateOnly('2024-01-31'))).toBe(30)
  })

  it('addDays', () => {
    expect(formatDateOnly(addDays(parseDateOnly('2024-01-01'), 14))).toBe('2024-01-15')
  })

  it('addMonths crossing a year boundary', () => {
    expect(formatDateOnly(addMonths(parseDateOnly('2024-11-15'), 3))).toBe('2025-02-15')
  })
})
