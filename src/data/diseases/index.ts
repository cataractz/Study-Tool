import type { Disease } from '../../types/disease'
import { corneaDiseases } from './cornea'
import { corneaAdditional1 } from './cornea-additional-1'
import { corneaAdditional2 } from './cornea-additional-2'
import { corneaAdditional3 } from './cornea-additional-3'
import { corneaAdditional4 } from './cornea-additional-4'
import { glaucomaDiseases } from './glaucoma'
import { glaucomaAdditional } from './glaucoma-additional'
import { glaucomaAdditional2 } from './glaucoma-additional-2'
import { glaucomaAdditional3 } from './glaucoma-additional-3'
import { retinaDiseases } from './retina'
import { retinaAdditional1 } from './retina-additional-1'
import { retinaAdditional2 } from './retina-additional-2'
import { retinaAdditional3 } from './retina-additional-3'
import { retinaAdditional4 } from './retina-additional-4'
import { retinaAdditional5 } from './retina-additional-5'
import { neuroOphthalmologyDiseases } from './neuro-ophthalmology'
import { neuroOphthalmologyAdditional1 } from './neuro-ophthalmology-additional-1'
import { neuroOphthalmologyAdditional2 } from './neuro-ophthalmology-additional-2'
import { neuroOphthalmologyAdditional3 } from './neuro-ophthalmology-additional-3'
import { neuroOphthalmologyAdditional4 } from './neuro-ophthalmology-additional-4'
import { neuroOphthalmologyAdditional5 } from './neuro-ophthalmology-additional-5'
import { anteriorSegmentDiseases } from './anterior-segment'
import { anteriorSegmentAdditional } from './anterior-segment-additional'
import { anteriorSegmentAdditional2 } from './anterior-segment-additional-2'
import { anteriorSegmentAdditional3 } from './anterior-segment-additional-3'
import { eyelidAdnexaDiseases } from './eyelid-adnexa'
import { eyelidAdnexaAdditional } from './eyelid-adnexa-additional'
import { orbitLacrimalDiseases } from './orbit-lacrimal'
import { orbitLacrimalAdditional } from './orbit-lacrimal-additional'
import { pediatricBinocularVisionDiseases } from './pediatric-binocular-vision'
import { pediatricBinocularVisionAdditional } from './pediatric-binocular-vision-additional'
import { ocularTraumaDiseases } from './ocular-trauma'
import { systemicGeneticDisease1 } from './systemic-genetic-disease-1'
import { systemicGeneticDisease2 } from './systemic-genetic-disease-2'
import { systemicGeneticDisease3 } from './systemic-genetic-disease-3'

export const allDiseases: Disease[] = [
  ...corneaDiseases,
  ...corneaAdditional1,
  ...corneaAdditional2,
  ...corneaAdditional3,
  ...corneaAdditional4,
  ...glaucomaDiseases,
  ...glaucomaAdditional,
  ...glaucomaAdditional2,
  ...glaucomaAdditional3,
  ...retinaDiseases,
  ...retinaAdditional1,
  ...retinaAdditional2,
  ...retinaAdditional3,
  ...retinaAdditional4,
  ...retinaAdditional5,
  ...neuroOphthalmologyDiseases,
  ...neuroOphthalmologyAdditional1,
  ...neuroOphthalmologyAdditional2,
  ...neuroOphthalmologyAdditional3,
  ...neuroOphthalmologyAdditional4,
  ...neuroOphthalmologyAdditional5,
  ...anteriorSegmentDiseases,
  ...anteriorSegmentAdditional,
  ...anteriorSegmentAdditional2,
  ...anteriorSegmentAdditional3,
  ...eyelidAdnexaDiseases,
  ...eyelidAdnexaAdditional,
  ...orbitLacrimalDiseases,
  ...orbitLacrimalAdditional,
  ...pediatricBinocularVisionDiseases,
  ...pediatricBinocularVisionAdditional,
  ...ocularTraumaDiseases,
  ...systemicGeneticDisease1,
  ...systemicGeneticDisease2,
  ...systemicGeneticDisease3,
]
