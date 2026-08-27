// Telescope (afocal system) magnification from objective and eyepiece power:
//   M = -F_eyepiece / F_objective
// Sign convention: objective and eyepiece powers entered as signed diopter values (plus lens
// positive, minus lens negative). Keplerian telescopes use two plus lenses (M negative =
// inverted image); Galilean telescopes use a plus objective and minus eyepiece (M positive =
// upright image). Telescope (tube) length for the afocal case = f_objective + f_eyepiece
// (signed focal lengths, meters).

export interface TelescopeResult {
  magnification: number
  orientation: 'Upright' | 'Inverted'
  type: 'Galilean' | 'Keplerian' | 'Mixed/Unusual'
  lengthMeters: number
}

export function calculateTelescope(objectivePowerD: number, eyepiecePowerD: number): TelescopeResult {
  if (objectivePowerD === 0) throw new Error('Objective power cannot be zero.')
  if (eyepiecePowerD === 0) throw new Error('Eyepiece power cannot be zero.')

  const magnification = -eyepiecePowerD / objectivePowerD
  const orientation = magnification >= 0 ? 'Upright' : 'Inverted'

  let type: TelescopeResult['type'] = 'Mixed/Unusual'
  if (objectivePowerD > 0 && eyepiecePowerD > 0) type = 'Keplerian'
  else if (objectivePowerD > 0 && eyepiecePowerD < 0) type = 'Galilean'

  const lengthMeters = 1 / objectivePowerD + 1 / eyepiecePowerD

  return { magnification: Math.abs(magnification), orientation, type, lengthMeters }
}
