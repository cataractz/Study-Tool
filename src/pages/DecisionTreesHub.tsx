import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight, GitBranch, AlertTriangle } from 'lucide-react'
import { SearchInput } from '../components/ui/SearchInput'
import { Card } from '../components/ui/Card'
import { Badge } from '../components/ui/Badge'
import { EmptyState } from '../components/ui/EmptyState'
import {
  getAllDecisionTrees,
  getDecisionTreeCategories,
  decisionTreeCategoryLabels,
} from '../services/decisionTreeService'
import type { DecisionTree, DecisionTreeCategory } from '../types/decisionTree'

export function DecisionTreesHub() {
  const [query, setQuery] = useState('')
  const [activeCategories, setActiveCategories] = useState<DecisionTreeCategory[]>([])

  const trees = getAllDecisionTrees()
  const categories = getDecisionTreeCategories()

  function toggleCategory(cat: DecisionTreeCategory) {
    setActiveCategories((prev) => (prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]))
  }

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return trees.filter((t) => {
      const matchesFilter =
        activeCategories.length === 0 || activeCategories.some((c) => t.categories.includes(c))
      const matchesQuery = !q || [t.name, ...(t.aliases ?? []), t.summary].join(' ').toLowerCase().includes(q)
      return matchesFilter && matchesQuery
    })
  }, [trees, query, activeCategories])

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-slate-900 tracking-tight">Clinical Decision Trees</h1>
        <p className="text-slate-500 mt-1 max-w-2xl">
          Answer sequential clinical questions and arrive at a structured pathway — most-likely and
          must-not-miss differentials, recommended next steps, and referral urgency. Search by
          presenting complaint (e.g. "red eye") or clinical finding (e.g. "elevated IOP").
        </p>
      </div>

      <Card className="bg-amber-50 border-amber-200 flex gap-2.5">
        <AlertTriangle size={16} className="text-amber-500 shrink-0 mt-0.5" />
        <p className="text-xs text-amber-900 leading-relaxed">
          These pathways are clinical decision support, not a diagnosis — every finding must be
          interpreted in the context of the complete examination. Suspicion for a condition is not the
          same as confirming it.
        </p>
      </Card>

      <div className="space-y-3">
        <SearchInput
          placeholder="Search decision trees..."
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
              {decisionTreeCategoryLabels[cat]}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <EmptyState
          icon={GitBranch}
          title="No decision trees found"
          description="Try a different search term or category filter."
        />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {filtered.map((tree: DecisionTree) => (
            <Link key={tree.id} to={`/decision-trees/${tree.id}`}>
              <Card className="h-full hover:shadow-md hover:border-slate-300 transition-all flex flex-col">
                <div className="flex items-start justify-between mb-2 gap-2">
                  <div className="flex items-center gap-1 flex-wrap">
                    {tree.categories.map((cat) => (
                      <Badge key={cat} tone="brand">
                        {decisionTreeCategoryLabels[cat]}
                      </Badge>
                    ))}
                  </div>
                  <ChevronRight size={16} className="text-slate-300 shrink-0" />
                </div>
                <h3 className="text-sm font-semibold text-slate-900 mb-1">{tree.name}</h3>
                <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">{tree.summary}</p>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
