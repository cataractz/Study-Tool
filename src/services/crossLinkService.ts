import { getAllDiseases } from './diseaseService'
import { getAllDrugs } from './drugService'
import { getAllLenses } from './lensService'
import { getAllExamTechniques } from './examTechniqueService'

export type LinkableType = 'disease' | 'drug' | 'lens' | 'exam-technique'

export interface LinkTarget {
  id: string
  type: LinkableType
  path: string
  label: string
}

interface IndexEntry {
  pattern: string
  target: LinkTarget
}

// Free-text scanning only auto-links patterns that are either multi-word (inherently specific,
// e.g. "primary open-angle glaucoma") or at least this long on their own — a short single-word
// name (e.g. a 3-4 letter brand name) produces too many false-positive substring hits in
// unrelated prose to safely auto-link. Structured exact-match lookups (findExactLink) aren't
// subject to this filter, since there the whole field is already known to name one specific thing.
const MIN_AUTOLINK_LENGTH = 5

function escapeRegExp(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

// Many generic drug names are "<base> <salt form>" (e.g. "Proparacaine hydrochloride"), but other
// content on the site (reference tables especially) often names just the base compound with a
// concentration instead (e.g. "Proparacaine 0.5%"). Indexing the base name too lets those still
// resolve to the same drug.
const SALT_SUFFIXES = new Set([
  'hydrochloride', 'sulfate', 'sulphate', 'phosphate', 'acetate', 'besylate', 'besilate',
  'tartrate', 'maleate', 'citrate', 'mesylate', 'succinate', 'fumarate', 'bromide', 'chloride',
  'sodium', 'potassium', 'calcium', 'nitrate', 'valerate', 'propionate', 'dipropionate',
  'furoate', 'palmitate', 'stearate', 'edisylate', 'lactate', 'gluconate',
])

function baseNameWithoutSalt(name: string): string | null {
  const words = name.trim().split(/\s+/)
  if (words.length < 2) return null
  if (!SALT_SUFFIXES.has(words[words.length - 1].toLowerCase())) return null
  return words.slice(0, -1).join(' ')
}

let scanRegex: RegExp | null = null
let byLowerName: Map<string, LinkTarget> | null = null

function buildIndex(): void {
  if (byLowerName) return

  const entries: IndexEntry[] = []
  const names = new Map<string, LinkTarget>()

  for (const d of getAllDiseases()) {
    const target: LinkTarget = { id: d.id, type: 'disease', path: `/diseases/${d.id}`, label: d.name }
    for (const name of [d.name, ...(d.aliases ?? [])]) {
      const trimmed = name.trim()
      if (!trimmed) continue
      const key = trimmed.toLowerCase()
      if (names.has(key)) continue
      entries.push({ pattern: trimmed, target })
      names.set(key, target)
    }
  }

  for (const drug of getAllDrugs()) {
    const target: LinkTarget = { id: drug.id, type: 'drug', path: `/drugs/${drug.id}`, label: drug.genericName }
    const drugNames = [drug.genericName, ...drug.brandNames]
    const base = baseNameWithoutSalt(drug.genericName)
    if (base) drugNames.push(base)
    for (const name of drugNames) {
      const trimmed = name.trim()
      if (!trimmed) continue
      const key = trimmed.toLowerCase()
      if (names.has(key)) continue
      entries.push({ pattern: trimmed, target })
      names.set(key, target)
    }
  }

  for (const lens of getAllLenses()) {
    const target: LinkTarget = { id: lens.id, type: 'lens', path: `/lenses/${lens.id}`, label: lens.brand }
    const trimmed = lens.brand.trim()
    const key = trimmed.toLowerCase()
    if (trimmed && !names.has(key)) {
      entries.push({ pattern: trimmed, target })
      names.set(key, target)
    }
  }

  for (const technique of getAllExamTechniques()) {
    const target: LinkTarget = {
      id: technique.id,
      type: 'exam-technique',
      path: `/exam-workup/technique/${technique.id}`,
      label: technique.name,
    }
    for (const name of [technique.name, ...(technique.aliases ?? [])]) {
      const trimmed = name.trim()
      if (!trimmed) continue
      const key = trimmed.toLowerCase()
      if (names.has(key)) continue
      entries.push({ pattern: trimmed, target })
      names.set(key, target)
    }
  }

  // Longest pattern first, so the regex alternation prefers a more specific multi-word match over
  // a shorter one that happens to be a substring of it (e.g. a specific named condition over a
  // broader category word that also appears in the index).
  entries.sort((a, b) => b.pattern.length - a.pattern.length)
  const forScan = entries.filter((e) => e.pattern.includes(' ') || e.pattern.length >= MIN_AUTOLINK_LENGTH)

  byLowerName = names
  scanRegex =
    forScan.length > 0
      ? new RegExp(`(?<![A-Za-z0-9])(${forScan.map((e) => escapeRegExp(e.pattern)).join('|')})(?![A-Za-z0-9])`, 'gi')
      : null
}

/**
 * Exact (whole-string, case-insensitive) name/alias lookup. Use this for structured fields that
 * are themselves meant to literally BE a disease or drug name (e.g. a differential-diagnosis
 * item's `disease` field, or a drug's indication list entry) rather than a sentence that merely
 * mentions one.
 */
export function findExactLink(text: string): LinkTarget | undefined {
  buildIndex()
  return byLowerName!.get(text.trim().toLowerCase())
}

export interface TextSegment {
  text: string
  link?: LinkTarget
}

export interface LinkifyOptions {
  /** Don't link back to the disease/drug whose own page this text is being rendered on. */
  excludeId?: string
  /** Restrict matches to only these types — e.g. disease-only, to avoid a prescription-trainer
   * case scenario hinting at the expected drug answer before the student submits. */
  typesAllowed?: LinkableType[]
}

/**
 * Splits free text into plain/linked segments by scanning for known disease and drug names.
 * Only the first occurrence of each unique target is linked per call, so a paragraph that repeats
 * a name doesn't turn into a wall of identical links.
 */
export function linkifySegments(text: string, options: LinkifyOptions = {}): TextSegment[] {
  buildIndex()
  if (!scanRegex || !text) return [{ text }]

  const seen = new Set<string>()
  const segments: TextSegment[] = []
  let lastIndex = 0
  scanRegex.lastIndex = 0

  let match: RegExpExecArray | null
  while ((match = scanRegex.exec(text))) {
    const matched = match[1]
    const target = byLowerName!.get(matched.toLowerCase())
    const start = match.index

    if (
      !target ||
      target.id === options.excludeId ||
      (options.typesAllowed && !options.typesAllowed.includes(target.type)) ||
      seen.has(target.id)
    ) {
      continue
    }

    if (start > lastIndex) segments.push({ text: text.slice(lastIndex, start) })
    segments.push({ text: matched, link: target })
    seen.add(target.id)
    lastIndex = start + matched.length
  }

  if (lastIndex < text.length) segments.push({ text: text.slice(lastIndex) })
  return segments.length > 0 ? segments : [{ text }]
}
