// Ophthalmic drop supply estimation. Actual drop volume varies meaningfully by bottle/tip
// design (commonly cited range is roughly 25-56 microliters), so drop size is a user-adjustable
// assumption rather than a hard-coded constant.
export const DEFAULT_DROP_SIZE_UL = 35

export function dropsPerDay(dropsPerDose: number, dosesPerDay: number): number {
  return dropsPerDose * dosesPerDay
}

export function totalDropsInBottle(bottleVolumeMl: number, dropSizeUl: number): number {
  if (dropSizeUl === 0) throw new Error('Drop size cannot be zero.')
  return (bottleVolumeMl * 1000) / dropSizeUl
}

export function daysOfSupply(bottleVolumeMl: number, dropSizeUl: number, dropsPerDayValue: number): number {
  if (dropsPerDayValue === 0) throw new Error('Drops per day cannot be zero.')
  return totalDropsInBottle(bottleVolumeMl, dropSizeUl) / dropsPerDayValue
}
