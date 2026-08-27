const STORAGE_KEY = 'study-tool.ai.usage.v1'

// A soft client-side safety net, well under Gemini's free-tier daily request cap,
// so a runaway loop or accidental spam can't silently burn through the day's quota.
// The backend is the real source of truth for actual quota errors.
export const DAILY_MESSAGE_LIMIT = 300

interface UsageRecord {
  date: string
  count: number
}

function todayKey(): string {
  return new Date().toISOString().slice(0, 10)
}

function readUsage(): UsageRecord {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return { date: todayKey(), count: 0 }
    const parsed = JSON.parse(raw) as UsageRecord
    if (parsed.date !== todayKey()) return { date: todayKey(), count: 0 }
    return parsed
  } catch {
    return { date: todayKey(), count: 0 }
  }
}

function writeUsage(usage: UsageRecord): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(usage))
  } catch {
    // ignore — usage tracking is a soft limit, not critical state
  }
}

export function getRemainingMessages(): number {
  return Math.max(0, DAILY_MESSAGE_LIMIT - readUsage().count)
}

export function canSendMessage(): boolean {
  return getRemainingMessages() > 0
}

export function recordMessageSent(): void {
  const usage = readUsage()
  usage.count += 1
  writeUsage(usage)
}
