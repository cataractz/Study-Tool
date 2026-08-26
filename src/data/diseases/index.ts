import type { Disease } from '../../types/disease'
import { corneaDiseases } from './cornea'
import { corneaAdditional1 } from './cornea-additional-1'
import { corneaAdditional2 } from './cornea-additional-2'
import { glaucomaDiseases } from './glaucoma'
import { glaucomaAdditional } from './glaucoma-additional'
import { retinaDiseases } from './retina'
import { retinaAdditional1 } from './retina-additional-1'
import { retinaAdditional2 } from './retina-additional-2'
import { neuroOphthalmologyDiseases } from './neuro-ophthalmology'
import { neuroOphthalmologyAdditional1 } from './neuro-ophthalmology-additional-1'
import { neuroOphthalmologyAdditional2 } from './neuro-ophthalmology-additional-2'
import { anteriorSegmentDiseases } from './anterior-segment'
import { anteriorSegmentAdditional } from './anterior-segment-additional'
import { eyelidAdnexaDiseases } from './eyelid-adnexa'
import { orbitLacrimalDiseases } from './orbit-lacrimal'

export const allDiseases: Disease[] = [
  ...corneaDiseases,
  ...corneaAdditional1,
  ...corneaAdditional2,
  ...glaucomaDiseases,
  ...glaucomaAdditional,
  ...retinaDiseases,
  ...retinaAdditional1,
  ...retinaAdditional2,
  ...neuroOphthalmologyDiseases,
  ...neuroOphthalmologyAdditional1,
  ...neuroOphthalmologyAdditional2,
  ...anteriorSegmentDiseases,
  ...anteriorSegmentAdditional,
  ...eyelidAdnexaDiseases,
  ...orbitLacrimalDiseases,
]
