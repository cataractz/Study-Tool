// Accommodative Lag/Lead — compares the accommodative RESPONSE (measured via MEM or Nott dynamic
// retinoscopy at near) to the accommodative DEMAND of the near task being viewed. By convention,
// Lag = Demand - Response. A positive result means the patient under-accommodated relative to
// demand ("lag", the common, expected finding at near); a negative result means the patient
// over-accommodated relative to demand ("lead"). Normal MEM lag range: +0.25 D to +0.75 D
// (average ~ +0.50 D).
//
// References:
// - Scheiman M, Wick B. Clinical Management of Binocular Vision, 4th ed. Lippincott Williams & Wilkins, 2013.
// - Rouse MW, London R, Allen DC. An evaluation of the monocular estimate method of dynamic retinoscopy. Am J Optom Physiol Opt. 1982.

export const LAG_NORM_LOW = 0.25
export const LAG_NORM_HIGH = 0.75

export type LagLeadClassification = 'lag' | 'lead' | 'none'

export interface AccommodativeLagLeadResult {
  lag: number
  classification: LagLeadClassification
  withinNorm: boolean
  interpretation: string
}

export function evaluateAccommodativeLagLead(demandD: number, responseD: number): AccommodativeLagLeadResult {
  const lag = demandD - responseD

  let classification: LagLeadClassification
  if (lag > 0) classification = 'lag'
  else if (lag < 0) classification = 'lead'
  else classification = 'none'

  const withinNorm = lag >= LAG_NORM_LOW && lag <= LAG_NORM_HIGH

  let interpretation: string
  if (withinNorm) {
    interpretation = 'Lag falls within the normal range for MEM/Nott dynamic retinoscopy — accommodative response is appropriately matched to demand.'
  } else if (lag < LAG_NORM_LOW) {
    interpretation =
      classification === 'lead'
        ? 'A lead (over-accommodation, negative lag) or an unusually low lag below the normal range can suggest accommodative excess, which is often associated with esophoria/eso-fixation-disparity at near.'
        : 'Lag below the normal range (too little lag) can suggest accommodative excess, often associated with esophoria at near.'
  } else {
    interpretation =
      'Lag above the normal range (excessive lag) is the more common clinical finding and suggests accommodative insufficiency, often associated with esophoria at near — consider a plus add for near work.'
  }

  return { lag, classification, withinNorm, interpretation }
}
