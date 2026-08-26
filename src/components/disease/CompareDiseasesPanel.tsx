import { useMemo, useState } from 'react'
import { Sparkles } from 'lucide-react'
import { Card } from '../ui/Card'
import { Button } from '../ui/Button'
import { getAllDiseases } from '../../services/diseaseService'
import type { Disease } from '../../types/disease'

function signsSummary(disease: Disease): string {
  return disease.signs.slice(0, 3).map((s) => s.finding).join('; ') || '—'
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
        <select
          value={otherId}
          onChange={(e) => {
            setOtherId(e.target.value)
            setShowPearl(false)
          }}
          className="rounded-lg border border-slate-300 text-sm px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-brand-500"
        >
          {others.map((o) => (
            <option key={o.id} value={o.id}>
              {o.name}
            </option>
          ))}
        </select>
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
