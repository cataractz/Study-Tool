import { powerFromRadiusMm, DEFAULT_KERATOMETRIC_INDEX } from '../keratometry/keratometry.engine'
import type { SamFap } from './tearLens.engine'

// SAM-FAP adjustment when the FINAL (ordered) base curve differs from the TRIAL lens base
// curve used for the over-refraction: the power difference between the two base curves
// (expressed via the keratometric index, same convention as tearLens.engine) must be added to
// keep the same effective power on the eye.
export function samFapAdjustment(trialBCmm: number, finalBCmm: number, keratometricIndex = DEFAULT_KERATOMETRIC_INDEX): number {
  return powerFromRadiusMm(trialBCmm, keratometricIndex) - powerFromRadiusMm(finalBCmm, keratometricIndex)
}

export function classifyBaseCurveChange(trialBCmm: number, finalBCmm: number): SamFap {
  if (Math.abs(trialBCmm - finalBCmm) < 1e-9) return 'On K (no tear lens power)'
  return finalBCmm < trialBCmm ? 'SAM (Steeper, Add Minus)' : 'FAP (Flatter, Add Plus)'
}

/** Final power to order = trial lens power + over-refraction + SAM-FAP adjustment for any base-curve change. */
export function finalRgpPower(trialPowerD: number, overRefractionD: number, baseCurveAdjustmentD = 0): number {
  return trialPowerD + overRefractionD + baseCurveAdjustmentD
}
