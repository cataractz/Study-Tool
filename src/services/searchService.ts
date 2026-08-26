import { getAllDiseases } from './diseaseService'
import { getAllDrugs } from './drugService'

export interface SearchResult {
  type: 'disease' | 'drug'
  id: string
  title: string
  subtitle: string
  path: string
}

export function globalSearch(query: string, limit = 8): SearchResult[] {
  const q = query.trim().toLowerCase()
  if (!q) return []

  const diseaseResults: SearchResult[] = getAllDiseases()
    .filter((d) =>
      [d.name, ...(d.aliases ?? []), d.category].join(' ').toLowerCase().includes(q),
    )
    .map((d) => ({
      type: 'disease',
      id: d.id,
      title: d.name,
      subtitle: `Disease · ${d.category}`,
      path: `/diseases/${d.id}`,
    }))

  const drugResults: SearchResult[] = getAllDrugs()
    .filter((d) =>
      [d.genericName, ...d.brandNames, d.drugClass].join(' ').toLowerCase().includes(q),
    )
    .map((d) => ({
      type: 'drug',
      id: d.id,
      title: d.genericName,
      subtitle: `Drug · ${d.drugClass}`,
      path: `/drugs/${d.id}`,
    }))

  return [...diseaseResults, ...drugResults].slice(0, limit)
}
