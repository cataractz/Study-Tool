// Oxygen transmissibility Dk/t. Convention: Dk entered in the standard ×10⁻¹¹ units
// (cm²/sec)(mLO2/mL·mmHg), lens center thickness entered in mm. Result reported in the standard
// ×10⁻⁹ (cm/sec)(mLO2/mL·mmHg) units used for Dk/t, i.e. Dk/t = (Dk × 10⁻¹¹) / (t in cm).
export function dkOverT(dk: number, thicknessMm: number): number {
  if (thicknessMm === 0) throw new Error('Thickness cannot be zero.')
  return (0.1 * dk) / thicknessMm
}
