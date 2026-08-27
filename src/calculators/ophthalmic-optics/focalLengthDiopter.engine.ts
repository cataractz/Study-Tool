// F = 1/f, with f in meters. Sign convention: converging (plus) power has a real, positive
// focal length behind the lens; diverging (minus) power has a virtual focal length, expressed
// as a negative number, in front of the lens.

export function powerFromFocalLengthMeters(fMeters: number): number {
  if (fMeters === 0) throw new Error('Focal length cannot be zero.')
  return 1 / fMeters
}

export function focalLengthMetersFromPower(powerD: number): number {
  if (powerD === 0) throw new Error('Power cannot be zero (focal length would be infinite).')
  return 1 / powerD
}
