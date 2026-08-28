// Reflectance at NORMAL incidence only (the general oblique-incidence Fresnel equations
// require separate s- and p-polarization formulas and are not implemented here):
//   R = ((n2 - n1) / (n2 + n1))^2
export function reflectanceNormalIncidence(n1: number, n2: number): number {
  const denom = n2 + n1
  if (denom === 0) throw new Error('n1 + n2 cannot be zero.')
  return ((n2 - n1) / denom) ** 2
}
