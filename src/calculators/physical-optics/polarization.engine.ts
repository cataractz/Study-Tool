// Malus's Law: I = I0 * cos^2(theta), theta = angle between the light's polarization axis and
// the polarizer/analyzer's transmission axis (degrees, converted internally).
export function malusLaw(incidentIntensity: number, angleDegrees: number): number {
  const rad = (angleDegrees * Math.PI) / 180
  return incidentIntensity * Math.cos(rad) ** 2
}

// Brewster's angle: the angle of incidence (from medium n1 into n2) at which reflected light
// is completely polarized (perpendicular to the plane of incidence).
export function brewstersAngleDegrees(n1: number, n2: number): number {
  return (Math.atan(n2 / n1) * 180) / Math.PI
}
