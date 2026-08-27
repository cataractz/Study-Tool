// Basic dose arithmetic. Kept intentionally simple/explicit rather than trying to encode any
// clinical dosing guideline — this converts between the mg/mL/frequency quantities a clinician
// has already decided on; it does not recommend a dose.

export function mgFromMl(mL: number, concentrationMgPerMl: number): number {
  return mL * concentrationMgPerMl
}

export function mlFromMg(mg: number, concentrationMgPerMl: number): number {
  if (concentrationMgPerMl === 0) throw new Error('Concentration cannot be zero.')
  return mg / concentrationMgPerMl
}

export function totalMgFromWeight(mgPerKg: number, weightKg: number): number {
  return mgPerKg * weightKg
}

export function totalDailyDose(dosePerAdministrationMg: number, administrationsPerDay: number): number {
  return dosePerAdministrationMg * administrationsPerDay
}
