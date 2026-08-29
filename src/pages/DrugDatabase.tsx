import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { Pill, ChevronRight, GitCompare, ShieldAlert } from 'lucide-react'
import { SearchInput } from '../components/ui/SearchInput'
import { Card } from '../components/ui/Card'
import { Badge } from '../components/ui/Badge'
import { Button } from '../components/ui/Button'
import { EmptyState } from '../components/ui/EmptyState'
import { Tabs } from '../components/ui/Tabs'
import { searchDrugs, getDrugClasses } from '../services/drugService'
import type { DrugClass } from '../types/drug'
import { DrugCompareDrawer } from '../components/drug/DrugCompareDrawer'
import { InteractionChecker } from '../components/drug/InteractionChecker'

export function DrugDatabase() {
  const [query, setQuery] = useState('')
  const [activeClasses, setActiveClasses] = useState<DrugClass[]>([])
  const [compareIds, setCompareIds] = useState<string[]>([])
  const [compareOpen, setCompareOpen] = useState(false)

  const classes = getDrugClasses()
  const results = useMemo(() => searchDrugs(query, activeClasses), [query, activeClasses])

  function toggleClass(cls: DrugClass) {
    setActiveClasses((prev) => (prev.includes(cls) ? prev.filter((c) => c !== cls) : [...prev, cls]))
  }

  function toggleCompare(id: string) {
    setCompareIds((prev) => {
      if (prev.includes(id)) return prev.filter((c) => c !== id)
      if (prev.length >= 3) return prev
      return [...prev, id]
    })
  }

  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900 tracking-tight">Drug Database</h1>
          <p className="text-slate-500 mt-1">
            Search ocular and systemic medications and review their clinical relevance to
            optometry.
          </p>
        </div>
        {compareIds.length > 0 && (
          <Button icon={<GitCompare size={15} />} onClick={() => setCompareOpen(true)}>
            Compare ({compareIds.length})
          </Button>
        )}
      </div>

      <Tabs
        tabs={[
          {
            id: 'browse',
            label: 'Browse Database',
            content: (
              <div className="space-y-6">
                <SearchInput
                  placeholder="Search by generic name, brand name, class, or indication..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="max-w-xl"
                />

                <div className="flex gap-1.5 flex-wrap">
                  {classes.map((cls) => (
                    <button
                      key={cls}
                      onClick={() => toggleClass(cls)}
                      className={`px-3 py-1.5 rounded-lg text-sm font-medium border transition-colors cursor-pointer ${
                        activeClasses.includes(cls)
                          ? 'bg-brand-600 text-white border-brand-600'
                          : 'bg-white text-slate-600 border-slate-300 hover:bg-slate-50'
                      }`}
                    >
                      {cls}
                    </button>
                  ))}
                </div>

                {results.length === 0 ? (
                  <EmptyState icon={Pill} title="No drugs found" description="Try a different search term or filter." />
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {results.map((drug) => (
                      <Card key={drug.id} className="flex flex-col gap-2">
                        <div className="flex items-start justify-between gap-2">
                          <Badge tone="purple">{drug.drugClass}</Badge>
                          <label className="flex items-center gap-1.5 text-xs text-slate-400 cursor-pointer select-none">
                            <input
                              type="checkbox"
                              checked={compareIds.includes(drug.id)}
                              onChange={() => toggleCompare(drug.id)}
                              className="accent-brand-600"
                            />
                            Compare
                          </label>
                        </div>
                        <Link to={`/drugs/${drug.id}`} className="group">
                          <h3 className="text-sm font-semibold text-slate-900 group-hover:text-brand-600">
                            {drug.genericName}
                          </h3>
                          <p className="text-xs text-slate-500 mt-0.5">{drug.brandNames.join(', ')}</p>
                          <p className="text-xs text-slate-500 mt-2 line-clamp-2 leading-relaxed">
                            {drug.mechanismOfAction}
                          </p>
                          <span className="inline-flex items-center gap-1 text-xs font-medium text-brand-600 mt-2">
                            View details <ChevronRight size={13} />
                          </span>
                        </Link>
                      </Card>
                    ))}
                  </div>
                )}
              </div>
            ),
          },
          {
            id: 'interactions',
            label: 'Interaction Checker',
            badge: <ShieldAlert size={14} />,
            content: <InteractionChecker />,
          },
        ]}
      />

      <DrugCompareDrawer
        open={compareOpen}
        drugIds={compareIds}
        onClose={() => setCompareOpen(false)}
        onRemove={(id) => setCompareIds((prev) => prev.filter((c) => c !== id))}
      />
    </div>
  )
}
