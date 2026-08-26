import { allDiseases } from '../data/diseases'
import type { Disease } from '../types/disease'

export function getAllDiseases(): Disease[] {
  return allDiseases
}

export function getDiseaseById(id: string): Disease | undefined {
  return allDiseases.find((d) => d.id === id)
}

export function getDiseasesByCategory(category: Disease['category']): Disease[] {
  return allDiseases.filter((d) => d.category === category)
}

export function getDiseaseCategories(): Disease['category'][] {
  return Array.from(new Set(allDiseases.map((d) => d.category)))
}

export function searchDiseases(query: string): Disease[] {
  const q = query.trim().toLowerCase()
  if (!q) return allDiseases
  return allDiseases.filter((d) => {
    const haystack = [d.name, ...(d.aliases ?? []), d.category, d.definition].join(' ').toLowerCase()
    return haystack.includes(q)
  })
}
