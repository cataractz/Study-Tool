import type { Disease } from '../../types/disease'
import { corneaDiseases } from './cornea'
import { corneaAdditional1 } from './cornea-additional-1'
import { corneaAdditional2 } from './cornea-additional-2'
import { corneaAdditional3 } from './cornea-additional-3'
import { glaucomaDiseases } from './glaucoma'
import { glaucomaAdditional } from './glaucoma-additional'
import { glaucomaAdditional2 } from './glaucoma-additional-2'
import { retinaDiseases } from './retina'
import { retinaAdditional1 } from './retina-additional-1'
import { retinaAdditional2 } from './retina-additional-2'
import { retinaAdditional3 } from './retina-additional-3'
import { retinaAdditional4 } from './retina-additional-4'
import { neuroOphthalmologyDiseases } from './neuro-ophthalmology'
import { neuroOphthalmologyAdditional1 } from './neuro-ophthalmology-additional-1'
import { neuroOphthalmologyAdditional2 } from './neuro-ophthalmology-additional-2'
import { neuroOphthalmologyAdditional3 } from './neuro-ophthalmology-additional-3'
import { neuroOphthalmologyAdditional4 } from './neuro-ophthalmology-additional-4'
import { anteriorSegmentDiseases } from './anterior-segment'
import { anteriorSegmentAdditional } from './anterior-segment-additional'
import { anteriorSegmentAdditional2 } from './anterior-segment-additional-2'
import { anteriorSegmentAdditional3 } from './anterior-segment-additional-3'
import { eyelidAdnexaDiseases } from './eyelid-adnexa'
import { eyelidAdnexaAdditional } from './eyelid-adnexa-additional'
import { orbitLacrimalDiseases } from './orbit-lacrimal'
import { orbitLacrimalAdditional } from './orbit-lacrimal-additional'
import { pediatricBinocularVisionDiseases } from './pediatric-binocular-vision'
import { ocularTraumaDiseases } from './ocular-trauma'
import { systemicGeneticDisease1 } from './systemic-genetic-disease-1'
import { systemicGeneticDisease2 } from './systemic-genetic-disease-2'

export const allDiseases: Disease[] = [
  ...corneaDiseases,
  ...corneaAdditional1,
  ...corneaAdditional2,
  ...corneaAdditional3,
  ...glaucomaDiseases,
  ...glaucomaAdditional,
  ...glaucomaAdditional2,
  ...retinaDiseases,
  ...retinaAdditional1,
  ...retinaAdditional2,
  ...retinaAdditional3,
  ...retinaAdditional4,
  ...neuroOphthalmologyDiseases,
  ...neuroOphthalmologyAdditional1,
  ...neuroOphthalmologyAdditional2,
  ...neuroOphthalmologyAdditional3,
  ...neuroOphthalmologyAdditional4,
  ...anteriorSegmentDiseases,
  ...anteriorSegmentAdditional,
  ...anteriorSegmentAdditional2,
  ...anteriorSegmentAdditional3,
  ...eyelidAdnexaDiseases,
  ...eyelidAdnexaAdditional,
  ...orbitLacrimalDiseases,
  ...orbitLacrimalAdditional,
  ...pediatricBinocularVisionDiseases,
  ...ocularTraumaDiseases,
  ...systemicGeneticDisease1,
  ...systemicGeneticDisease2,
]
