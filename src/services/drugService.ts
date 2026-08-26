import { allDrugs } from '../data/drugs'
import type { Drug, DrugClass } from '../types/drug'

export function getAllDrugs(): Drug[] {
  return allDrugs
}

export function getDrugById(id: string): Drug | undefined {
  return allDrugs.find((d) => d.id === id)
}

export function getDrugClasses(): DrugClass[] {
  return Array.from(new Set(allDrugs.map((d) => d.drugClass))).sort()
}

export function searchDrugs(query: string, classes: DrugClass[] = []): Drug[] {
  const q = query.trim().toLowerCase()
  return allDrugs.filter((d) => {
    if (classes.length > 0 && !classes.includes(d.drugClass)) return false
    if (!q) return true
    const haystack = [
      d.genericName,
      ...d.brandNames,
      d.drugClass,
      ...d.indications,
      d.mechanismOfAction,
    ]
      .join(' ')
      .toLowerCase()
    return haystack.includes(q)
  })
}
