import { useEffect, useMemo, useRef, useState } from 'react'
import { ChevronDown, Sparkles } from 'lucide-react'
import clsx from 'clsx'
import { Card } from '../ui/Card'
import { Button } from '../ui/Button'
import { SearchInput } from '../ui/SearchInput'
import { getAllDiseases } from '../../services/diseaseService'
import type { Disease } from '../../types/disease'

function signsSummary(disease: Disease): string {
  return disease.signs.slice(0, 3).map((s) => s.finding).join('; ') || '—'
}

function DiseasePicker({
  others,
  selectedId,
  onSelect,
}: {
  others: Disease[]
  selectedId: string
  onSelect: (id: string) => void
}) {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', onClickOutside)
    return () => document.removeEventListener('mousedown', onClickOutside)
  }, [])

  const grouped = useMemo(() => {
    const q = query.trim().toLowerCase()
    const filtered = others.filter((d) => !q || d.name.toLowerCase().includes(q))
    const map = new Map<string, Disease[]>()
    for (const d of filtered) {
      const arr = map.get(d.category) ?? []
      arr.push(d)
      map.set(d.category, arr)
    }
    for (const arr of map.values()) arr.sort((a, b) => a.name.localeCompare(b.name))
    return Array.from(map.entries()).sort((a, b) => a[0].localeCompare(b[0]))
  }, [others, query])

  const selected = others.find((d) => d.id === selectedId)

  return (
    <div ref={containerRef} className="relative w-full sm:w-80">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between gap-2 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 hover:bg-slate-50 cursor-pointer"
      >
        <span className="truncate">{selected?.name ?? 'Select a disease'}</span>
        <ChevronDown size={15} className="text-slate-400 shrink-0" />
      </button>

      {open && (
        <div className="absolute z-20 mt-1.5 w-full max-h-96 overflow-y-auto bg-white border border-slate-200 rounded-lg shadow-lg">
          <div className="p-2 sticky top-0 bg-white border-b border-slate-100">
            <SearchInput
              autoFocus
              placeholder="Search diseases..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          {grouped.length === 0 ? (
            <p className="px-3 py-4 text-sm text-slate-400">No diseases found.</p>
          ) : (
            grouped.map(([category, items]) => (
              <div key={category}>
                <p className="px-3 pt-2 pb-1 text-xs font-semibold text-slate-500 uppercase tracking-wide bg-slate-50">
                  {category}
                </p>
                {items.map((d) => (
                  <button
                    key={d.id}
                    type="button"
                    onClick={() => {
                      onSelect(d.id)
                      setOpen(false)
                      setQuery('')
                    }}
                    className={clsx(
                      'w-full text-left px-3 py-1.5 text-sm hover:bg-brand-50 cursor-pointer',
                      d.id === selectedId ? 'bg-brand-50 text-brand-700 font-medium' : 'text-slate-700',
                    )}
                  >
                    {d.name}
                  </button>
                ))}
              </div>
            ))
          )}
        </div>
      )}
    </div>
  )
}

export function CompareDiseasesPanel({ disease }: { disease: Disease }) {
  const others = useMemo(
    () => getAllDiseases().filter((d) => d.id !== disease.id),
    [disease.id],
  )
  const [otherId, setOtherId] = useState<string>(
    disease.differentialDiagnosis[0]
      ? (others.find((o) => o.name === disease.differentialDiagnosis[0].disease)?.id ?? others[0]?.id)
      : others[0]?.id,
  )
  const [showPearl, setShowPearl] = useState(false)

  const other = others.find((o) => o.id === otherId)
  if (!other) return null

  const diffEntry = disease.differentialDiagnosis.find((d) => d.disease === other.name)

  const rows: { label: string; a: string; b: string }[] = [
    { label: 'Category', a: disease.category, b: other.category },
    { label: 'Common symptoms', a: disease.symptoms.common.slice(0, 3).join(', ') || '—', b: other.symptoms.common.slice(0, 3).join(', ') || '—' },
    { label: 'Key signs', a: signsSummary(disease), b: signsSummary(other) },
    { label: 'Major risk factors', a: disease.riskFactors.filter((r) => r.tier === 'major').map((r) => r.label).join(', ') || '—', b: other.riskFactors.filter((r) => r.tier === 'major').map((r) => r.label).join(', ') || '—' },
    { label: 'First-line treatment', a: disease.management.find((m) => m.category === 'First-line treatment')?.detail ?? '—', b: other.management.find((m) => m.category === 'First-line treatment')?.detail ?? '—' },
  ]

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center gap-2">
        <label className="text-sm text-slate-600 shrink-0">Compare {disease.name} with:</label>
        <DiseasePicker
          others={others}
          selectedId={otherId}
          onSelect={(id) => {
            setOtherId(id)
            setShowPearl(false)
          }}
        />
      </div>

      <Card padded={false} className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50">
              <th className="text-left font-semibold text-slate-500 px-4 py-2.5 w-40">Finding</th>
              <th className="text-left font-semibold text-slate-800 px-4 py-2.5">{disease.name}</th>
              <th className="text-left font-semibold text-slate-800 px-4 py-2.5">{other.name}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.label} className="border-b border-slate-100 last:border-0">
                <td className="px-4 py-2.5 text-slate-500 font-medium align-top">{row.label}</td>
                <td className="px-4 py-2.5 text-slate-700 align-top">{row.a}</td>
                <td className="px-4 py-2.5 text-slate-700 align-top">{row.b}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>

      <div>
        <Button variant="outline" size="sm" icon={<Sparkles size={14} />} onClick={() => setShowPearl(true)}>
          What is the single most useful differentiating finding?
        </Button>
        {showPearl && (
          <Card className="mt-3 bg-brand-50 border-brand-200">
            <p className="text-sm text-brand-800 leading-relaxed">
              {diffEntry
                ? diffEntry.keyDistinguisher
                : `No pre-authored differential entry links ${disease.name} and ${other.name} directly — compare their signs, risk factors, and testing above to identify the most distinguishing feature.`}
            </p>
          </Card>
        )}
      </div>
    </div>
  )
}
