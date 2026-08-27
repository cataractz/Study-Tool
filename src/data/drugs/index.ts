import type { Drug } from '../../types/drug'
import { antiInfectiveDrugs } from './anti-infectives'
import { antiInflammatoryDrugs } from './anti-inflammatory'
import { glaucomaMedicationDrugs } from './glaucoma-medications'
import { surfaceAndDiagnosticDrugs } from './surface-and-diagnostic'
import { systemicCardiovascular1 } from './systemic-cardiovascular-1'
import { systemicCardiovascular2 } from './systemic-cardiovascular-2'
import { systemicEndocrineOther } from './systemic-endocrine-other'
import { systemicPsychiatric } from './systemic-psychiatric'
import { systemicNeurologic } from './systemic-neurologic'
import { systemicGiPulmonary } from './systemic-gi-pulmonary'
import { systemicImmunosuppressant1 } from './systemic-immunosuppressant-1'
import { systemicImmunosuppressant2AntiInfective } from './systemic-immunosuppressant-2-antiinfective'

export const allDrugs: Drug[] = [
  ...antiInfectiveDrugs,
  ...antiInflammatoryDrugs,
  ...glaucomaMedicationDrugs,
  ...surfaceAndDiagnosticDrugs,
  ...systemicCardiovascular1,
  ...systemicCardiovascular2,
  ...systemicEndocrineOther,
  ...systemicPsychiatric,
  ...systemicNeurologic,
  ...systemicGiPulmonary,
  ...systemicImmunosuppressant1,
  ...systemicImmunosuppressant2AntiInfective,
]
