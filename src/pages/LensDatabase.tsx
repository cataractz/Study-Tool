import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { Disc, ChevronRight, GitCompare, Star, Info } from 'lucide-react'
import { SearchInput } from '../components/ui/SearchInput'
import { Card } from '../components/ui/Card'
import { Badge } from '../components/ui/Badge'
import { Button } from '../components/ui/Button'
import { EmptyState } from '../components/ui/EmptyState'
import { searchLenses, getLensDesigns, getLensManufacturers } from '../services/lensService'
import { getLensFavorites, isLensFavorite, toggleLensFavorite } from '../services/lensFavorites'
import type { LensDesign } from '../types/lens'
import { LensCompareDrawer } from '../components/lens/LensCompareDrawer'

export function LensDatabase() {
  const [query, setQuery] = useState('')
  const [activeDesigns, setActiveDesigns] = useState<LensDesign[]>([])
  const [manufacturer, setManufacturer] = useState<string | null>(null)
  const [favoritesOnly, setFavoritesOnly] = useState(false)
  const [favorites, setFavorites] = useState<string[]>([])
  const [compareIds, setCompareIds] = useState<string[]>([])
  const [compareOpen, setCompareOpen] = useState(false)

  useEffect(() => {
    setFavorites(getLensFavorites())
  }, [])

  const designs = getLensDesigns()
  const manufacturers = getLensManufacturers()

  const results = useMemo(() => {
    let list = searchLenses(query, activeDesigns, [], manufacturer ? [manufacturer] : [])
    if (favoritesOnly) list = list.filter((l) => favorites.includes(l.id))
    return list
  }, [query, activeDesigns, manufacturer, favoritesOnly, favorites])

  function toggleDesign(d: LensDesign) {
    setActiveDesigns((prev) => (prev.includes(d) ? prev.filter((x) => x !== d) : [...prev, d]))
  }

  function toggleCompare(id: string) {
    setCompareIds((prev) => {
      if (prev.includes(id)) return prev.filter((c) => c !== id)
      if (prev.length >= 3) return prev
      return [...prev, id]
    })
  }

  function toggleFav(id: string) {
    setFavorites(toggleLensFavorite(id))
  }

  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900 tracking-tight">Contact Lens Database</h1>
          <p className="text-slate-500 mt-1 max-w-2xl">
            Search commercially available soft, RGP, scleral, and hybrid lenses by material, design, and parameters —
            base curve, diameter, water content, Dk/t, power range, replacement schedule, and clinical fit notes.
          </p>
        </div>
        {compareIds.length > 0 && (
          <Button icon={<GitCompare size={15} />} onClick={() => setCompareOpen(true)}>
            Compare ({compareIds.length})
          </Button>
        )}
      </div>

      <Card className="bg-slate-50 border-slate-200 flex gap-2.5">
        <Info size={16} className="text-slate-400 shrink-0 mt-0.5" />
        <p className="text-xs text-slate-500 leading-relaxed">
          Core specs (base curve, diameter, water content, Dk/t, UV-blocking status) have been checked against
          manufacturer/practitioner sources, including catching a few cases where a sphere and toric version of the
          same lens family differ in UV-blocking status (e.g. Dailies Total1) — don&apos;t assume one variant&apos;s
          UV status applies to its sibling.{' '}
          <span className="font-medium text-slate-700">Still, always confirm exact parameters against the current
          manufacturer package insert before dispensing</span> — specs change with product revisions, and this is
          {' '}<strong>38 of the most commonly prescribed/discussed lenses (including Proclear, Total30, MiSight,
          Abiliti 1-Day, and NaturalVue Multifocal), not every lens on the market.</strong> Notably absent by choice:
          colored/cosmetic lenses and non-US-market brands (Menicon, Seed). RGP, scleral, and hybrid entries describe
          lab-custom material families rather than one fixed catalog product. Fields deliberately left out (unlike
          print parameter guides): packaging/box count and retail cost — these vary by retailer and change too often
          to belong in a clinical reference; check a distributor site for current pricing.
        </p>
      </Card>

      <SearchInput
        placeholder="Search by brand, manufacturer, material, or clinical use..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="max-w-xl"
      />

      <div className="space-y-2.5">
        <div className="flex gap-1.5 flex-wrap items-center">
          {designs.map((d) => (
            <button
              key={d}
              onClick={() => toggleDesign(d)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium border transition-colors cursor-pointer ${
                activeDesigns.includes(d)
                  ? 'bg-brand-600 text-white border-brand-600'
                  : 'bg-white text-slate-600 border-slate-300 hover:bg-slate-50'
              }`}
            >
              {d}
            </button>
          ))}
        </div>
        <div className="flex gap-1.5 flex-wrap items-center">
          <select
            value={manufacturer ?? ''}
            onChange={(e) => setManufacturer(e.target.value || null)}
            className="px-3 py-1.5 rounded-lg text-sm border border-slate-300 bg-white text-slate-600 cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-500"
          >
            <option value="">All manufacturers</option>
            {manufacturers.map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>
          <button
            onClick={() => setFavoritesOnly((v) => !v)}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium border transition-colors cursor-pointer ${
              favoritesOnly
                ? 'bg-amber-50 text-amber-700 border-amber-300'
                : 'bg-white text-slate-600 border-slate-300 hover:bg-slate-50'
            }`}
          >
            <Star size={14} className={favoritesOnly ? 'fill-amber-400 text-amber-400' : ''} /> Favorites only
          </button>
        </div>
      </div>

      {results.length === 0 ? (
        <EmptyState icon={Disc} title="No lenses found" description="Try a different search term or filter." />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {results.map((lens) => (
            <Card key={lens.id} className="flex flex-col gap-2">
              <div className="flex items-start justify-between gap-2">
                <Badge tone="purple">{lens.design}</Badge>
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => toggleFav(lens.id)}
                    aria-label={isLensFavorite(lens.id) ? `Remove ${lens.brand} from favorites` : `Add ${lens.brand} to favorites`}
                    className="text-slate-300 hover:text-amber-400 cursor-pointer"
                  >
                    <Star size={15} className={favorites.includes(lens.id) ? 'fill-amber-400 text-amber-400' : ''} />
                  </button>
                  <label className="flex items-center gap-1.5 text-xs text-slate-400 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={compareIds.includes(lens.id)}
                      onChange={() => toggleCompare(lens.id)}
                      className="accent-brand-600"
                    />
                    Compare
                  </label>
                </div>
              </div>
              <Link to={`/lenses/${lens.id}`} className="group">
                <h3 className="text-sm font-semibold text-slate-900 group-hover:text-brand-600">{lens.brand}</h3>
                <p className="text-xs text-slate-500 mt-0.5">{lens.manufacturer}</p>
                <div className="flex flex-wrap gap-x-3 gap-y-0.5 text-xs text-slate-500 mt-2">
                  {lens.dkt && <span>Dk/t {lens.dkt.split(' ')[0]}</span>}
                  {lens.waterContent && <span>{lens.waterContent}</span>}
                  <span>{lens.replacementSchedule}</span>
                </div>
                <span className="inline-flex items-center gap-1 text-xs font-medium text-brand-600 mt-2">
                  View full parameters <ChevronRight size={13} />
                </span>
              </Link>
            </Card>
          ))}
        </div>
      )}

      <LensCompareDrawer
        open={compareOpen}
        lensIds={compareIds}
        onClose={() => setCompareOpen(false)}
        onRemove={(id) => setCompareIds((prev) => prev.filter((c) => c !== id))}
      />
    </div>
  )
}
