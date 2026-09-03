// Equivalent Viewing Power (EVP) — a low-vision-specific way of specifying a magnifier's
// power that (unlike simply quoting the lens's dioptric power) accounts for how far the
// lens sits in front of the eye. The concept was introduced by Bailey (see meta.references)
// specifically because stand magnifiers and CCTV/video magnifiers are used at a range of
// eye-to-lens working distances, and the angular size of what the eye actually perceives
// depends on that distance, not on lens power alone.
//
// The general form used here is the same physics as vertex/effective-power calculations
// (see ophthalmic-optics/vertexPower.engine.ts): the lens's vergence, as it would be measured
// from the eye's own reference plane a distance d further back, is F / (1 - d*F). This is the
// form commonly taught for computing EVP/EVD when a measured eye-to-lens working distance is
// used (matching Bailey's original approach of tabulating EVD at several eye-to-lens distances
// for a set of real stand magnifiers). See meta.limitations for the documented special case
// (image formed at optical infinity) where EVP reduces to simply the lens power, independent
// of eye position.
//
// EVD (Equivalent Viewing Distance, cm) = 100 / EVP(D) — the distance at which an unmagnified
// object would need to be viewed to subtend the same angle as the magnified image.

export interface EquivalentViewingPowerResult {
  evp: number
  evdCm: number
}

export function equivalentViewingPower(lensPowerD: number, lensToEyeDistanceM: number): EquivalentViewingPowerResult {
  const denominator = 1 - lensToEyeDistanceM * lensPowerD
  if (Math.abs(denominator) < 1e-9) {
    throw new Error('This lens power and eye distance combination is undefined (the equivalent viewing power would be infinite).')
  }
  const evp = lensPowerD / denominator
  if (evp === 0) {
    throw new Error('Equivalent viewing power cannot be zero (equivalent viewing distance would be infinite).')
  }
  return { evp, evdCm: 100 / evp }
}
