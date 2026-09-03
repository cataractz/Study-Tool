// Accommodative Reserve — how much amplitude of accommodation (AA) remains available above what
// a near task demands. Distinct from the "Estimated Near Add" half-amplitude rule (see
// accommodation.engine.ts's estimatedAddHalfAmplitudeRule), which solves for an add power; this
// calculator instead directly reports the remaining reserve and flags whether it is adequate for
// comfortable, sustained near work.
//
// Formula: Reserve = AA - Demand. adequateReserve applies the same "half-amplitude" clinical
// principle already used for the near-add rule of thumb (see accommodation.engine.ts) — reserve
// of at least half the amplitude is considered adequate to sustain comfortable near work.

export interface AccommodativeReserveResult {
  reserve: number
  reservePercentOfAmplitude: number
  adequateReserve: boolean
  interpretation: string
}

export function evaluateAccommodativeReserve(amplitudeD: number, demandD: number): AccommodativeReserveResult {
  if (demandD > amplitudeD) {
    throw new Error('Accommodative demand exceeds the amplitude of accommodation — the patient cannot clear this demand, so reserve is not a valid finding to evaluate here.')
  }

  const reserve = amplitudeD - demandD
  const reservePercentOfAmplitude = amplitudeD !== 0 ? (reserve / amplitudeD) * 100 : 0
  const adequateReserve = reservePercentOfAmplitude >= 50

  const interpretation = adequateReserve
    ? 'Reserve is at least half the amplitude of accommodation — consistent with the half-amplitude rule of thumb for comfortable, sustained near work.'
    : 'Reserve is less than half the amplitude of accommodation — even though the demand can be cleared, sustained near work may provoke asthenopia/eye strain. Consider a near add or vision therapy referral.'

  return { reserve, reservePercentOfAmplitude, adequateReserve, interpretation }
}
