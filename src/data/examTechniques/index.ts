import type { ExamTechnique } from '../../types/examTechnique'
import { patientHistoryPreliminaryTechniques } from './patientHistoryPreliminary'
import { anteriorSegmentTechniques } from './anteriorSegment'
import { posteriorSegmentTechniques } from './posteriorSegment'
import { binocularVisionAccommodationTechniques } from './binocularVisionAccommodation'
import { neuroOphthalmologyTechniques } from './neuroOphthalmology'
import { pediatricsTechniques } from './pediatrics'
import { contactLensExamTechniques } from './contactLenses'
import { contactLensFittingTechniques } from './contactLensFitting'
import { diagnosticImagingTechniques } from './diagnosticImaging'
import { orbitTechniques } from './orbit'

export const allExamTechniques: ExamTechnique[] = [
  ...patientHistoryPreliminaryTechniques,
  ...anteriorSegmentTechniques,
  ...posteriorSegmentTechniques,
  ...binocularVisionAccommodationTechniques,
  ...neuroOphthalmologyTechniques,
  ...pediatricsTechniques,
  ...contactLensExamTechniques,
  ...contactLensFittingTechniques,
  ...diagnosticImagingTechniques,
  ...orbitTechniques,
]
