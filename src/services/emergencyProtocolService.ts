import { allEmergencyProtocols } from '../data/emergencyProtocols'
import type { EmergencyProtocol, EmergencyCategory } from '../types/emergencyProtocol'

export function getAllEmergencyProtocols(): EmergencyProtocol[] {
  return allEmergencyProtocols
}

export function getEmergencyProtocolById(id: string): EmergencyProtocol | undefined {
  return allEmergencyProtocols.find((p) => p.id === id)
}

export function getEmergencyCategories(): EmergencyCategory[] {
  return Array.from(new Set(allEmergencyProtocols.map((p) => p.category)))
}

export function getEmergencyProtocolsByCategory(category: EmergencyCategory): EmergencyProtocol[] {
  return allEmergencyProtocols.filter((p) => p.category === category)
}

export function searchEmergencyProtocols(query: string): EmergencyProtocol[] {
  const q = query.trim().toLowerCase()
  if (!q) return allEmergencyProtocols
  return allEmergencyProtocols.filter((p) => {
    const haystack = [p.name, ...(p.aliases ?? []), p.category, p.overview].join(' ').toLowerCase()
    return haystack.includes(q)
  })
}
