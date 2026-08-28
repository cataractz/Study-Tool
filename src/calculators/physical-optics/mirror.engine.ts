// Mirror equation, using the "REAL IS POSITIVE" sign convention standard for mirrors in most
// US optometric optics courses (Keating, Michaels, etc.) — this is a DIFFERENT convention from
// the signed-vergence convention used in the Vergence/lens calculators elsewhere in this tool.
// Do not mix values between the two without converting conventions first.
//
// Convention: distances measured from the mirror. Object distance (do) is positive for a real
// object in front of the mirror. Concave mirrors have positive radius of curvature (r) and
// focal length (f); convex mirrors have negative r and f. Image distance (di) is positive when
// the image is real (in front of the mirror, same side as the object), negative when virtual
// (behind the mirror).
//
//   1/do + 1/di = 1/f = 2/r
//   magnification m = -di/do   (negative m = inverted image)

export function focalLengthFromRadius(radiusMm: number): number {
  return radiusMm / 2
}

export function imageDistance(objectDistanceMm: number, focalLengthMm: number): number {
  const denom = objectDistanceMm - focalLengthMm
  if (denom === 0) throw new Error('Object at the focal point — image forms at infinity (undefined image distance).')
  return (focalLengthMm * objectDistanceMm) / denom
}

export function mirrorMagnification(imageDistanceMm: number, objectDistanceMm: number): number {
  if (objectDistanceMm === 0) throw new Error('Object distance cannot be zero.')
  return -imageDistanceMm / objectDistanceMm
}
