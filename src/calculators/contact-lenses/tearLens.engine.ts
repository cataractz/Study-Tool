import { powerFromRadiusMm, DEFAULT_KERATOMETRIC_INDEX } from '../keratometry/keratometry.engine'

// The tear layer trapped between the back of a rigid (GP) contact lens and the front of the
// cornea acts as its own lens. Using the same keratometric-index power conversion as flat
// keratometry: tear lens power = K power − base curve power.
//   - Base curve STEEPER than K (smaller radius) -> BC power > K power -> tear lens is MINUS
//     ("Steeper, Add Minus" / SAM)
//   - Base curve FLATTER than K (larger radius) -> BC power < K power -> tear lens is PLUS
//     ("Flatter, Add Plus" / FAP)

export type SamFap = 'SAM (Steeper, Add Minus)' | 'FAP (Flatter, Add Plus)' | 'On K (no tear lens power)'

export function tearLensPower(baseCurveMm: number, kMm: number, keratometricIndex = DEFAULT_KERATOMETRIC_INDEX): number {
  const kPower = powerFromRadiusMm(kMm, keratometricIndex)
  const bcPower = powerFromRadiusMm(baseCurveMm, keratometricIndex)
  return kPower - bcPower
}

export function classifySamFap(baseCurveMm: number, kMm: number): SamFap {
  if (Math.abs(baseCurveMm - kMm) < 1e-9) return 'On K (no tear lens power)'
  return baseCurveMm < kMm ? 'SAM (Steeper, Add Minus)' : 'FAP (Flatter, Add Plus)'
}
