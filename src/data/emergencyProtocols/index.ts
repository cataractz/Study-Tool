import type { EmergencyProtocol } from '../../types/emergencyProtocol'
import { traumaAndVascularProtocols } from './traumaAndVascular'
import { infectiousAndPressureProtocols } from './infectiousAndPressure'
import { orbitalNeuroSystemicProtocols } from './orbitalNeuroSystemic'

export const allEmergencyProtocols: EmergencyProtocol[] = [
  ...traumaAndVascularProtocols,
  ...infectiousAndPressureProtocols,
  ...orbitalNeuroSystemicProtocols,
]
