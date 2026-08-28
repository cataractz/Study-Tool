import { getAllDiseases } from './diseaseService'
import { getAllDrugs } from './drugService'
import { calculatorRegistry } from '../calculators/registry'
import { referenceRegistry } from '../reference/registry'

export type SearchResultType = 'disease' | 'drug' | 'calculator' | 'reference'

export interface SearchResult {
  type: SearchResultType
  id: string
  title: string
  subtitle: string
  path: string
}

type SearchProvider = (q: string) => SearchResult[]

function matches(haystack: string, q: string): boolean {
  return haystack.toLowerCase().includes(q)
}

const searchDiseases: SearchProvider = (q) =>
  getAllDiseases()
    .filter((d) => matches([d.name, ...(d.aliases ?? []), d.category].join(' '), q))
    .map((d) => ({
      type: 'disease',
      id: d.id,
      title: d.name,
      subtitle: `Disease · ${d.category}`,
      path: `/diseases/${d.id}`,
    }))

const searchDrugsProvider: SearchProvider = (q) =>
  getAllDrugs()
    .filter((d) => matches([d.genericName, ...d.brandNames, d.drugClass].join(' '), q))
    .map((d) => ({
      type: 'drug',
      id: d.id,
      title: d.genericName,
      subtitle: `Drug · ${d.drugClass}`,
      path: `/drugs/${d.id}`,
    }))

const searchCalculatorsProvider: SearchProvider = (q) =>
  calculatorRegistry
    .filter((c) =>
      matches([c.meta.name, c.meta.description, c.meta.formula, c.meta.category, ...c.meta.keywords].join(' '), q),
    )
    .map((c) => ({
      type: 'calculator',
      id: c.meta.id,
      title: c.meta.name,
      subtitle: `Calculator · ${c.meta.category}`,
      path: `/calculators/${c.meta.id}`,
    }))

const searchReferencesProvider: SearchProvider = (q) =>
  referenceRegistry
    .filter((r) => matches([r.meta.name, r.meta.description, r.meta.category, ...r.meta.keywords].join(' '), q))
    .map((r) => ({
      type: 'reference',
      id: r.meta.id,
      title: r.meta.name,
      subtitle: `Reference · ${r.meta.category}`,
      path: `/references/${r.meta.id}`,
    }))

/**
 * Every searchable content source on the site, in one place. Adding a future tool to search
 * (once it's built) means writing one provider function like the ones above and pushing it here —
 * the search bar picks it up automatically, with no changes needed in the GlobalSearch component.
 */
const searchProviders: SearchProvider[] = [
  searchDiseases,
  searchDrugsProvider,
  searchCalculatorsProvider,
  searchReferencesProvider,
]

export function globalSearch(query: string, limit = 10): SearchResult[] {
  const q = query.trim().toLowerCase()
  if (!q) return []

  const byProvider = searchProviders.map((provider) => provider(q))

  // Round-robin across content types so a broad query surfaces a mix of diseases/drugs/
  // calculators/references instead of whichever provider ran first crowding out the rest.
  const merged: SearchResult[] = []
  for (let round = 0; merged.length < limit && byProvider.some((r) => r.length > round); round++) {
    for (const results of byProvider) {
      if (results.length > round) merged.push(results[round])
      if (merged.length >= limit) break
    }
  }

  return merged
}
