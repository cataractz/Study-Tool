// Percival's Criterion: for comfort, the phoria/demand position should fall within the middle
// third of the total fusional vergence range (break-to-break, or blur-to-blur). Equivalently,
// neither reserve should exceed twice the other: max(BI, BO) <= 2 * min(BI, BO).
// If violated, the commonly cited magnitude of prism indicated is:
//   Rx = (larger reserve - 2 * smaller reserve) / 3
// Base direction convention varies between clinical references and is NOT asserted here with
// full confidence — see the "About this calculation" note in the UI.

export interface PercivalsResult {
  criterionMet: boolean
  rxPrism: number | null
  limitingReserve: 'BI' | 'BO' | null
}

export function evaluatePercivals(biReserve: number, boReserve: number): PercivalsResult {
  const larger = Math.max(biReserve, boReserve)
  const smaller = Math.min(biReserve, boReserve)
  const criterionMet = larger <= 2 * smaller
  if (criterionMet) {
    return { criterionMet, rxPrism: null, limitingReserve: null }
  }
  const rxPrism = (larger - 2 * smaller) / 3
  return {
    criterionMet,
    rxPrism,
    limitingReserve: biReserve < boReserve ? 'BI' : 'BO',
  }
}
