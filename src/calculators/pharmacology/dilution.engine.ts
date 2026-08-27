// Dilution equation: C1 * V1 = C2 * V2. Units for C1/C2 and V1/V2 just need to be
// consistent with each other respectively (e.g. both concentrations in %, both volumes in mL).

export function stockConcentration(c2: number, v2: number, v1: number): number {
  if (v1 === 0) throw new Error('Stock volume cannot be zero.')
  return (c2 * v2) / v1
}

export function finalConcentration(c1: number, v1: number, v2: number): number {
  if (v2 === 0) throw new Error('Final volume cannot be zero.')
  return (c1 * v1) / v2
}

export function stockVolume(c1: number, c2: number, v2: number): number {
  if (c1 === 0) throw new Error('Stock concentration cannot be zero.')
  return (c2 * v2) / c1
}

export function finalVolume(c1: number, v1: number, c2: number): number {
  if (c2 === 0) throw new Error('Desired concentration cannot be zero.')
  return (c1 * v1) / c2
}
