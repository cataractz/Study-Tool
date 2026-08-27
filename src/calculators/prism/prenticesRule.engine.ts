// Prentice's Rule: P (prism diopters) = c (decentration, cm) * F (lens power, D)
// Solves for whichever of the three quantities is unknown given the other two.

export function prismFromDecentration(decentrationCm: number, powerD: number): number {
  return decentrationCm * powerD
}

export function decentrationFromPrism(prismD: number, powerD: number): number {
  if (powerD === 0) throw new Error('Lens power cannot be zero — no decentration can induce prism.')
  return prismD / powerD
}

export function powerFromPrismAndDecentration(prismD: number, decentrationCm: number): number {
  if (decentrationCm === 0) throw new Error('Decentration cannot be zero.')
  return prismD / decentrationCm
}

export type DecentrationDirection = 'nasal' | 'temporal' | 'up' | 'down'
export type BaseDirection = 'Base In' | 'Base Out' | 'Base Up' | 'Base Down'

/**
 * Direction of the induced prism base, given the decentration direction and the sign of the
 * lens power. Rule: for a PLUS lens, the prism base points in the SAME direction the optical
 * center was decentered. For a MINUS lens, the base points in the OPPOSITE direction.
 * (A plus lens is thickest centrally — decentering it moves the thick/base part of the local
 * prism toward the decentration direction; a minus lens is thickest peripherally, so the effect
 * reverses.)
 */
export function inducedBaseDirection(decentration: DecentrationDirection, powerD: number): BaseDirection {
  const samePairs: Record<DecentrationDirection, BaseDirection> = {
    nasal: 'Base In',
    temporal: 'Base Out',
    up: 'Base Up',
    down: 'Base Down',
  }
  const oppositePairs: Record<DecentrationDirection, BaseDirection> = {
    nasal: 'Base Out',
    temporal: 'Base In',
    up: 'Base Down',
    down: 'Base Up',
  }
  return powerD >= 0 ? samePairs[decentration] : oppositePairs[decentration]
}
