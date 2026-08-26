import type { Drug } from '../../types/drug'
import { antiInfectiveDrugs } from './anti-infectives'
import { antiInflammatoryDrugs } from './anti-inflammatory'
import { glaucomaMedicationDrugs } from './glaucoma-medications'
import { surfaceAndDiagnosticDrugs } from './surface-and-diagnostic'

export const allDrugs: Drug[] = [
  ...antiInfectiveDrugs,
  ...antiInflammatoryDrugs,
  ...glaucomaMedicationDrugs,
  ...surfaceAndDiagnosticDrugs,
]
