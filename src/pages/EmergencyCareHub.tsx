import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight, Siren, AlertTriangle } from 'lucide-react'
import { SearchInput } from '../components/ui/SearchInput'
import { Card } from '../components/ui/Card'
import { Badge, urgencyTierTone, type BadgeTone } from '../components/ui/Badge'
import { EmptyState } from '../components/ui/EmptyState'
import { getAllEmergencyProtocols, getEmergencyCategories } from '../services/emergencyProtocolService'
import type { EmergencyCategory, EmergencyProtocol } from '../types/emergencyProtocol'

const categoryColors: Record<EmergencyCategory, BadgeTone> = {
  'Chemical & Trauma': 'danger',
  'Vascular & Retinal': 'purple',
  'Angle-Closure & Pressure': 'warning',
  Infectious: 'success',
  Orbital: 'info',
  'Neuro-Ophthalmic': 'brand',
  Systemic: 'default',
}

export function EmergencyCareHub() {
  const [query, setQuery] = useState('')
  const [activeCategories, setActiveCategories] = useState<EmergencyCategory[]>([])

  const protocols = getAllEmergencyProtocols()
  const categories = getEmergencyCategories()

  function toggleCategory(cat: EmergencyCategory) {
    setActiveCategories((prev) => (prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]))
  }

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return protocols.filter((p) => {
      const matchesFilter = activeCategories.length === 0 || activeCategories.includes(p.category)
      const matchesQuery = !q || [p.name, ...(p.aliases ?? [])].join(' ').toLowerCase().includes(q)
      return matchesFilter && matchesQuery
    })
  }, [protocols, query, activeCategories])

  const grouped = useMemo(() => {
    const map = new Map<EmergencyCategory, EmergencyProtocol[]>()
    for (const p of filtered) {
      const arr = map.get(p.category) ?? []
      arr.push(p)
      map.set(p.category, arr)
    }
    return map
  }, [filtered])

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-slate-900 tracking-tight">
          Emergency &amp; Urgent Eye Care
        </h1>
        <p className="text-slate-500 mt-1 max-w-2xl">
          Sight- and life-threatening presentations — what to do right now, in what order, and what
          not to do. Search by condition (e.g. "chemical burn", "CRAO", "open globe") or browse by
          category.
        </p>
      </div>

      <Card className="bg-red-50 border-red-200 flex gap-2.5">
        <AlertTriangle size={16} className="text-red-500 shrink-0 mt-0.5" />
        <p className="text-xs text-red-900 leading-relaxed">
          These protocols are a clinical study reference, not a substitute for your practice's own
          emergency procedures, your clinical judgment, or a poison control/emergency medical
          services call when one is indicated. When in doubt, escalate.
        </p>
      </Card>

      <div className="space-y-3">
        <SearchInput
          placeholder="Search emergency protocols..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="max-w-xl"
        />
        <div className="flex gap-1.5 flex-wrap">
          <button
            onClick={() => setActiveCategories([])}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium border transition-colors cursor-pointer ${
              activeCategories.length === 0
                ? 'bg-brand-600 text-white border-brand-600'
                : 'bg-white text-slate-600 border-slate-300 hover:bg-slate-50'
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => toggleCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium border transition-colors cursor-pointer ${
                activeCategories.includes(cat)
                  ? 'bg-brand-600 text-white border-brand-600'
                  : 'bg-white text-slate-600 border-slate-300 hover:bg-slate-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <EmptyState
          icon={Siren}
          title="No emergency protocols found"
          description="Try a different search term or category filter."
        />
      ) : (
        <div className="space-y-8">
          {Array.from(grouped.entries()).map(([category, items]) => (
            <div key={category}>
              <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-3">
                {category}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {items.map((protocol) => (
                  <Link key={protocol.id} to={`/emergency-care/${protocol.id}`}>
                    <Card className="h-full hover:shadow-md hover:border-slate-300 transition-all flex flex-col">
                      <div className="flex items-start justify-between mb-2 gap-2">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <Badge tone={urgencyTierTone(protocol.urgencyTier)}>{protocol.urgencyTier}</Badge>
                          <Badge tone={categoryColors[protocol.category]}>{protocol.category}</Badge>
                        </div>
                        <ChevronRight size={16} className="text-slate-300 shrink-0" />
                      </div>
                      <h3 className="text-sm font-semibold text-slate-900 mb-1">{protocol.name}</h3>
                      <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                        {protocol.overview}
                      </p>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
