// Prism combination/resolution: horizontal and vertical prism components combine as vectors.
// Sign convention used throughout this calculator: horizontal positive = Base Out, negative =
// Base In; vertical positive = Base Up, negative = Base Down. Resultant magnitude and meridian
// follow standard vector addition (valid for prism diopters combined this way, per Prentice's
// convention used in clinical prism prescribing).

export interface PrismVector {
  horizontal: number // signed: + = BO, - = BI
  vertical: number // signed: + = BU, - = BD
}

export interface PrismResultant {
  magnitude: number
  /** Angle in degrees from the horizontal (BO) axis, standard mathematical convention (CCW positive). */
  angleDeg: number
}

export function combinePrism(v: PrismVector): PrismResultant {
  const magnitude = Math.sqrt(v.horizontal ** 2 + v.vertical ** 2)
  const angleDeg = (Math.atan2(v.vertical, v.horizontal) * 180) / Math.PI
  return { magnitude, angleDeg }
}

export function resolvePrism(magnitude: number, angleDeg: number): PrismVector {
  const rad = (angleDeg * Math.PI) / 180
  return {
    horizontal: magnitude * Math.cos(rad),
    vertical: magnitude * Math.sin(rad),
  }
}

export function describeComponents(v: PrismVector): string {
  const parts: string[] = []
  if (Math.abs(v.horizontal) > 1e-9) parts.push(`${Math.abs(v.horizontal).toFixed(2)}Δ ${v.horizontal > 0 ? 'Base Out' : 'Base In'}`)
  if (Math.abs(v.vertical) > 1e-9) parts.push(`${Math.abs(v.vertical).toFixed(2)}Δ ${v.vertical > 0 ? 'Base Up' : 'Base Down'}`)
  return parts.join(' and ') || '0Δ'
}
