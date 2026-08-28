import { spectacleMagnificationPowerFactor } from './magnification.engine'

// Relative Spectacle Magnification (RSM) compares the ametropic (corrected) eye's retinal
// image size to that of the schematic emmetropic eye.
//
// Knapp's Law: for AXIAL ametropia (abnormal axial length, otherwise normal corneal/lens
// power), correcting with a spectacle lens placed at the eye's ANTERIOR FOCAL POINT
// (~15mm in front of the cornea for a schematic eye) gives RSM = 1.00 regardless of the
// amount of ametropia. This is a large part of why real spectacles — worn near that same
// distance by convention — cause comparatively little image-size change for axial ametropia,
// while a contact lens (worn at the cornea, not at the focal point) does not benefit from this
// and behaves more like the general power-factor case.
//
// For REFRACTIVE ametropia (abnormal corneal/lens power, normal axial length), Knapp's Law
// does not apply — RSM follows the same power-factor formula as ordinary spectacle
// magnification, since there is no analogous "magic" correcting plane.
export type AmetropiaType = 'axial' | 'refractive'

export function relativeSpectacleMagnification(type: AmetropiaType, vertexPowerD?: number, vertexDistanceMeters?: number): number {
  if (type === 'axial') return 1
  if (vertexPowerD === undefined || vertexDistanceMeters === undefined) {
    throw new Error('Refractive ametropia requires lens power and vertex distance.')
  }
  return spectacleMagnificationPowerFactor(vertexPowerD, vertexDistanceMeters)
}
