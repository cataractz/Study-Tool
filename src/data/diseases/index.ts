import type { Disease } from '../../types/disease'
import { corneaDiseases } from './cornea'
import { corneaAdditional1 } from './cornea-additional-1'
import { corneaAdditional2 } from './cornea-additional-2'
import { corneaAdditional3 } from './cornea-additional-3'
import { corneaAdditional4 } from './cornea-additional-4'
import { corneaAdditional5 } from './cornea-additional-5'
import { corneaAdditional6 } from './cornea-additional-6'
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
import { retinaAdditional6 } from './retina-additional-6'
import { retinaAdditional7 } from './retina-additional-7'
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
import { anteriorSegmentAdditional4 } from './anterior-segment-additional-4'
import { anteriorSegmentAdditional5 } from './anterior-segment-additional-5'
import { eyelidAdnexaDiseases } from './eyelid-adnexa'
import { eyelidAdnexaAdditional } from './eyelid-adnexa-additional'
import { eyelidAdnexaAdditional2 } from './eyelid-adnexa-additional-2'
import { orbitLacrimalDiseases } from './orbit-lacrimal'
import { orbitLacrimalAdditional } from './orbit-lacrimal-additional'
import { orbitLacrimalAdditional2 } from './orbit-lacrimal-additional-2'
import { pediatricBinocularVisionDiseases } from './pediatric-binocular-vision'
import { pediatricBinocularVisionAdditional } from './pediatric-binocular-vision-additional'
import { pediatricBinocularVisionAdditional2 } from './pediatric-binocular-vision-additional-2'
import { pediatricBinocularVisionAdditional3 } from './pediatric-binocular-vision-additional-3'
import { ocularTraumaDiseases } from './ocular-trauma'
import { ocularTraumaAdditional } from './ocular-trauma-additional'
import { systemicGeneticDisease1 } from './systemic-genetic-disease-1'
import { systemicGeneticDisease2 } from './systemic-genetic-disease-2'
import { systemicGeneticDisease3 } from './systemic-genetic-disease-3'
import { systemicGeneticDisease4 } from './systemic-genetic-disease-4'
import { systemicGeneticDisease5 } from './systemic-genetic-disease-5'
import { systemicGeneticDisease6 } from './systemic-genetic-disease-6'
import { systemicGeneticDisease7 } from './systemic-genetic-disease-7'
import { systemicGeneticDisease8 } from './systemic-genetic-disease-8'
import { systemicGeneticDisease9 } from './systemic-genetic-disease-9'
import { systemicGeneticDisease10 } from './systemic-genetic-disease-10'
import { systemicGeneticDisease11 } from './systemic-genetic-disease-11'
import { systemicGeneticDisease12 } from './systemic-genetic-disease-12'
import { systemicGeneticDisease13 } from './systemic-genetic-disease-13'
import { systemicGeneticDisease14 } from './systemic-genetic-disease-14'
import { systemicGeneticDisease15 } from './systemic-genetic-disease-15'
import { systemicGeneticDisease16 } from './systemic-genetic-disease-16'
import { systemicGeneticDisease17 } from './systemic-genetic-disease-17'

export const allDiseases: Disease[] = [
  ...corneaDiseases,
  ...corneaAdditional1,
  ...corneaAdditional2,
  ...corneaAdditional3,
  ...corneaAdditional4,
  ...corneaAdditional5,
  ...corneaAdditional6,
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
  ...retinaAdditional6,
  ...retinaAdditional7,
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
  ...anteriorSegmentAdditional4,
  ...anteriorSegmentAdditional5,
  ...eyelidAdnexaDiseases,
  ...eyelidAdnexaAdditional,
  ...eyelidAdnexaAdditional2,
  ...orbitLacrimalDiseases,
  ...orbitLacrimalAdditional,
  ...orbitLacrimalAdditional2,
  ...pediatricBinocularVisionDiseases,
  ...pediatricBinocularVisionAdditional,
  ...pediatricBinocularVisionAdditional2,
  ...pediatricBinocularVisionAdditional3,
  ...ocularTraumaDiseases,
  ...ocularTraumaAdditional,
  ...systemicGeneticDisease1,
  ...systemicGeneticDisease2,
  ...systemicGeneticDisease3,
  ...systemicGeneticDisease4,
  ...systemicGeneticDisease5,
  ...systemicGeneticDisease6,
  ...systemicGeneticDisease7,
  ...systemicGeneticDisease8,
  ...systemicGeneticDisease9,
  ...systemicGeneticDisease10,
  ...systemicGeneticDisease11,
  ...systemicGeneticDisease12,
  ...systemicGeneticDisease13,
  ...systemicGeneticDisease14,
  ...systemicGeneticDisease15,
  ...systemicGeneticDisease16,
  ...systemicGeneticDisease17,
]
