import { allLenses } from '../data/lenses'
import type { ContactLens, LensDesign, MaterialClass, ReplacementSchedule } from '../types/lens'

export function getAllLenses(): ContactLens[] {
  return allLenses
}

export function getLensById(id: string): ContactLens | undefined {
  return allLenses.find((l) => l.id === id)
}

export function getLensDesigns(): LensDesign[] {
  return Array.from(new Set(allLenses.map((l) => l.design))).sort()
}

export function getLensManufacturers(): string[] {
  return Array.from(new Set(allLenses.map((l) => l.manufacturer))).sort()
}

export function getLensMaterialClasses(): MaterialClass[] {
  return Array.from(new Set(allLenses.map((l) => l.materialClass))).sort()
}

export function getLensReplacementSchedules(): ReplacementSchedule[] {
  return Array.from(new Set(allLenses.map((l) => l.replacementSchedule)))
}

export function searchLenses(
  query: string,
  designs: LensDesign[] = [],
  materialClasses: MaterialClass[] = [],
  manufacturers: string[] = [],
): ContactLens[] {
  const q = query.trim().toLowerCase()
  return allLenses.filter((l) => {
    if (designs.length > 0 && !designs.includes(l.design)) return false
    if (materialClasses.length > 0 && !materialClasses.includes(l.materialClass)) return false
    if (manufacturers.length > 0 && !manufacturers.includes(l.manufacturer)) return false
    if (!q) return true
    const haystack = [
      l.brand,
      l.manufacturer,
      l.design,
      l.materialClass,
      l.materialName ?? '',
      ...l.bestFor,
    ]
      .join(' ')
      .toLowerCase()
    return haystack.includes(q)
  })
}
