import type { Disease } from '../../types/disease'
import { corneaDiseases } from './cornea'
import { glaucomaDiseases } from './glaucoma'
import { retinaDiseases } from './retina'
import { neuroOphthalmologyDiseases } from './neuro-ophthalmology'
import { anteriorSegmentDiseases } from './anterior-segment'

export const allDiseases: Disease[] = [
  ...corneaDiseases,
  ...glaucomaDiseases,
  ...retinaDiseases,
  ...neuroOphthalmologyDiseases,
  ...anteriorSegmentDiseases,
]
