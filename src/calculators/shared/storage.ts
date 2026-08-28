const FAVORITES_KEY = 'study-tool.calculators.favorites.v1'

function readList(key: string): string[] {
  try {
    const raw = localStorage.getItem(key)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed.filter((x): x is string => typeof x === 'string') : []
  } catch {
    return []
  }
}

function writeList(key: string, list: string[]): void {
  try {
    localStorage.setItem(key, JSON.stringify(list))
  } catch {
    // ignore — favorites are a soft convenience, not critical state
  }
}

export function getFavorites(): string[] {
  return readList(FAVORITES_KEY)
}

export function isFavorite(id: string): boolean {
  return getFavorites().includes(id)
}

export function toggleFavorite(id: string): string[] {
  const current = getFavorites()
  const next = current.includes(id) ? current.filter((x) => x !== id) : [...current, id]
  writeList(FAVORITES_KEY, next)
  return next
}
