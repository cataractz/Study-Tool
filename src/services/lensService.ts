import { allLenses } from '../data/lenses'
import type { ContactLens, LensDesign, MaterialClass, ReplacementSchedule } from '../types/lens'
import { powerFromRadiusMm } from '../calculators/keratometry/keratometry.engine'

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

/**
 * Renders a base curve value diopters-first, mm-second (e.g. "43.25 D (7.80 mm)"), computed via
 * the same keratometric conversion (F = 337.5/r, at the standard 1.3375 index) the Keratometry
 * and Tear Lens calculators already use, THEN rounded to the nearest quarter diopter (0.25 D).
 * That rounding isn't a display nicety — it's the actual published convention: NCLE/keratometry
 * conversion charts and lab base-curve tables round to the nearest 0.25 D rather than reporting
 * raw unrounded output (e.g. 7.80 mm's raw conversion is 43.27 D, but the value every published
 * conversion chart lists is 43.25 D — confirmed against lens lab and NCLE board-prep sources).
 * Falls through unchanged for a value that isn't a single plain mm number (e.g. a "custom lab
 * order" description), since those don't have one fixed radius to convert.
 */
export function formatBaseCurveDiopters(bc: string): string {
  const trimmed = bc.trim()
  if (!/^\d+(\.\d+)?$/.test(trimmed)) return bc
  const mm = Number(trimmed)
  if (!(mm > 0)) return bc
  const diopters = Math.round(powerFromRadiusMm(mm) * 4) / 4
  return `${diopters.toFixed(2)} D (${trimmed} mm)`
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
