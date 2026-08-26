import type { SignFinding } from '../../types/disease'

export function SignsByArea({ signs }: { signs: SignFinding[] }) {
  const grouped = new Map<string, string[]>()
  for (const s of signs) {
    const arr = grouped.get(s.area) ?? []
    arr.push(s.finding)
    grouped.set(s.area, arr)
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {Array.from(grouped.entries()).map(([area, findings]) => (
        <div key={area} className="rounded-lg border border-slate-200 p-3.5">
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-600 mb-1.5">
            {area}
          </p>
          <ul className="text-sm text-slate-700 space-y-1 list-disc pl-4">
            {findings.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
