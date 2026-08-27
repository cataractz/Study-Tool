// Sheard's Criterion (Scheiman & Wick, Clinical Management of Binocular Vision): the
// compensating fusional vergence reserve should be at least twice the phoria demand.
// If not met, prism to prescribe = (2 * phoria - reserve) / 3.
//
// Clinical direction rule: exophoria is compensated by base-in prism, esophoria by base-out
// prism (base-in relieves the demand on positive fusional vergence/convergence; base-out
// relieves the demand on negative fusional vergence/divergence).

export type PhoriaType = 'exophoria' | 'esophoria'

export interface SheardsResult {
  criterionMet: boolean
  requiredReserve: number
  rxPrism: number | null
  baseDirection: 'Base In' | 'Base Out' | null
}

export function evaluateSheards(phoriaMagnitude: number, reserveMagnitude: number, phoriaType: PhoriaType): SheardsResult {
  const requiredReserve = 2 * phoriaMagnitude
  const criterionMet = reserveMagnitude >= requiredReserve
  if (criterionMet) {
    return { criterionMet, requiredReserve, rxPrism: null, baseDirection: null }
  }
  const rxPrism = (2 * phoriaMagnitude - reserveMagnitude) / 3
  return {
    criterionMet,
    requiredReserve,
    rxPrism,
    baseDirection: phoriaType === 'exophoria' ? 'Base In' : 'Base Out',
  }
}
