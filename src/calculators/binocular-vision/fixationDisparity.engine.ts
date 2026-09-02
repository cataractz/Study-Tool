// Fixation disparity / associated phoria.
//
// Associated phoria = the magnitude and base direction of prism that neutralizes (nulls) a
// measured fixation disparity on a card with a central fusion lock and peripheral nonius/vernier
// markers (e.g. Wesson card, Saladin card, AO vectographic slide at distance). Determining prism
// to prescribe directly from this value is a long-standing clinical method (Morgan, 1949, first
// reported ~90% symptom relief prescribing vertical prism this way); the associated phoria itself
// *is* the prism magnitude/direction to prescribe.
// Source: "Back to the Basics, Part 1: Prime Yourself to Prescribe Prism" (Review of Optometry);
// "A review of fixation disparity" (Grosvenor-tradition summary, avehjournal.org).
//
// Fixation disparity magnitude (the actual residual misalignment, in minutes of arc) is a
// different quantity from the associated phoria (the neutralizing prism) — see Ogle's curve,
// below. Reported "normal" bands vary with measurement error, but a commonly cited working range
// is roughly ≤ 6' of arc eso and ≤ 8' of arc exo (accounting for typical test-retest error);
// larger values are more often reported alongside asthenopia. Values as large as 30' of arc have
// been reported even without symptoms, so magnitude alone is not diagnostic — it is one of four
// features (curve type, slope, Y-intercept magnitude, X-intercept/associated phoria) that inform
// interpretation, in roughly that order of diagnostic weight.
// Source: "A review of fixation disparity" (avehjournal.org/index.php/aveh/article/download/258/227).
//
// Ogle's (1949) classification of the prism-induced fixation disparity curve shape:
//   Type I   - symmetric sigmoid; adapts well to both BI and BO; the most common pattern (~60%),
//              usually asymptomatic, responds well to vision therapy.
//   Type II  - little/no increase in exo fixation disparity with base-out; often seen with larger
//              esophoria; frequently needs lens/prism relief rather than therapy alone.
//   Type III - little/no increase in eso fixation disparity with base-in (mirror image of Type II);
//              often seen with larger exophoria.
//   Type IV  - flat curve; absorbs prism in both directions with little change; reflects an
//              unstable binocular system and is frequently symptomatic.
// Determining curve type requires plotting fixation disparity across several prism increments —
// it cannot be derived from a single associated-phoria measurement, so it is provided here as
// reference only (see FIXATION_DISPARITY_CURVE_TYPES), not as a computed output.
// Source: Ogle, Martens & Dyer (1949); summarized in "A review of fixation disparity" and
// "Fixation Disparity Analysis of Oculomotor Imbalance," Optom Vis Sci (1980).

export type PhoriaDirection = 'eso' | 'exo'

export interface AssociatedPhoriaResult {
  rxMagnitude: number
  baseDirection: 'Base In' | 'Base Out'
}

/**
 * The associated-phoria method: the prism that neutralizes the fixation disparity is, itself,
 * the prism magnitude/direction to prescribe. Base-in neutralizes an exo-direction fixation
 * disparity; base-out neutralizes an eso-direction fixation disparity.
 */
export function prismFromAssociatedPhoria(magnitude: number, direction: PhoriaDirection): AssociatedPhoriaResult {
  if (magnitude < 0) throw new Error('Associated phoria magnitude must be zero or positive.')
  return {
    rxMagnitude: magnitude,
    baseDirection: direction === 'exo' ? 'Base In' : 'Base Out',
  }
}

export interface FDMagnitudeResult {
  limitArcmin: number
  withinTypicalRange: boolean
}

/** Bands a measured fixation disparity magnitude (minutes of arc) against a commonly cited working range. */
export function classifyFixationDisparityMagnitude(magnitudeArcmin: number, direction: PhoriaDirection): FDMagnitudeResult {
  if (magnitudeArcmin < 0) throw new Error('Fixation disparity magnitude must be zero or positive.')
  const limitArcmin = direction === 'eso' ? 6 : 8
  return { limitArcmin, withinTypicalRange: magnitudeArcmin <= limitArcmin }
}

export const FIXATION_DISPARITY_CURVE_TYPES: { type: string; description: string }[] = [
  { type: 'Type I', description: 'Symmetric sigmoid curve; adapts well to both base-in and base-out. Most common (~60%); usually asymptomatic; responds well to vision therapy.' },
  { type: 'Type II', description: 'Little/no increase in exo fixation disparity with base-out prism. Often accompanies a larger esophoria; more often needs lens/prism relief than therapy alone.' },
  { type: 'Type III', description: 'Little/no increase in eso fixation disparity with base-in prism (mirror of Type II). Often accompanies a larger exophoria.' },
  { type: 'Type IV', description: 'Flat curve — absorbs prism in both directions with little change in fixation disparity. Reflects an unstable binocular system; frequently symptomatic.' },
]
