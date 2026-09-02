const EXAM_WORKUP_FAVORITES_KEY = 'study-tool.examWorkup.favorites.v1'

function readList(): string[] {
  try {
    const raw = localStorage.getItem(EXAM_WORKUP_FAVORITES_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed.filter((x): x is string => typeof x === 'string') : []
  } catch {
    return []
  }
}

function writeList(list: string[]): void {
  try {
    localStorage.setItem(EXAM_WORKUP_FAVORITES_KEY, JSON.stringify(list))
  } catch {
    // ignore — favorites are a soft convenience, not critical state
  }
}

/** Covers both exam techniques and clinical workups — their ids are unique by construction
 * (e.g. "van-herick-test" vs "red-eye-workup"), so one favorites list is sufficient. */
export function getExamWorkupFavorites(): string[] {
  return readList()
}

export function isExamWorkupFavorite(id: string): boolean {
  return readList().includes(id)
}

export function toggleExamWorkupFavorite(id: string): string[] {
  const current = readList()
  const next = current.includes(id) ? current.filter((x) => x !== id) : [...current, id]
  writeList(next)
  return next
}
