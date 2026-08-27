// Mean Arterial Pressure: MAP = DBP + 1/3(SBP - DBP)
export function meanArterialPressure(sbp: number, dbp: number): number {
  return dbp + (sbp - dbp) / 3
}

// Mean Ocular Perfusion Pressure. This calculator uses the convention most commonly cited in
// glaucoma epidemiology literature (e.g. Baltimore Eye Survey and related studies):
//   MOPP = (2/3) * MAP - IOP
// Other definitions exist in the literature (e.g. simple MAP - IOP, or separate systolic/
// diastolic OPP). This is an educational estimate, not a validated clinical risk score — OPP
// alone does not determine glaucoma risk.
export function meanOcularPerfusionPressure(map: number, iop: number): number {
  return (2 / 3) * map - iop
}
