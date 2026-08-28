const LENS_FAVORITES_KEY = 'study-tool.lenses.favorites.v1'

function readList(): string[] {
  try {
    const raw = localStorage.getItem(LENS_FAVORITES_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed.filter((x): x is string => typeof x === 'string') : []
  } catch {
    return []
  }
}

function writeList(list: string[]): void {
  try {
    localStorage.setItem(LENS_FAVORITES_KEY, JSON.stringify(list))
  } catch {
    // ignore — favorites are a soft convenience, not critical state
  }
}

export function getLensFavorites(): string[] {
  return readList()
}

export function isLensFavorite(id: string): boolean {
  return readList().includes(id)
}

export function toggleLensFavorite(id: string): string[] {
  const current = readList()
  const next = current.includes(id) ? current.filter((x) => x !== id) : [...current, id]
  writeList(next)
  return next
}
