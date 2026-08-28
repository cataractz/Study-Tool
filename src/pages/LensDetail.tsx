import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ChevronLeft, Disc, Star, Calculator as Calc } from 'lucide-react'
import { Badge } from '../components/ui/Badge'
import { Card } from '../components/ui/Card'
import { Section } from '../components/ui/Section'
import { EmptyState } from '../components/ui/EmptyState'
import { getLensById } from '../services/lensService'
import { isLensFavorite, toggleLensFavorite } from '../services/lensFavorites'
import { calculatorRegistry } from '../calculators/registry'
import { Linkify } from '../components/shared/Linkify'

export function LensDetail() {
  const { lensId } = useParams<{ lensId: string }>()
  const lens = lensId ? getLensById(lensId) : undefined
  const [fav, setFav] = useState(false)

  useEffect(() => {
    if (lens) setFav(isLensFavorite(lens.id))
  }, [lens])

  if (!lens) {
    return (
      <div className="space-y-4">
        <Link to="/lenses" className="inline-flex items-center gap-1 text-sm text-brand-600 hover:underline">
          <ChevronLeft size={15} /> Back to Contact Lens Database
        </Link>
        <EmptyState icon={Disc} title="Lens not found" description="This lens isn't in the database yet." />
      </div>
    )
  }

  const relatedCalculators = (lens.relatedCalculatorIds ?? [])
    .map((id) => calculatorRegistry.find((c) => c.meta.id === id))
    .filter((c): c is NonNullable<typeof c> => Boolean(c))

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <Link to="/lenses" className="inline-flex items-center gap-1 text-sm text-brand-600 hover:underline mb-3">
          <ChevronLeft size={15} /> Back to Contact Lens Database
        </Link>
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div>
            <Badge tone="purple">{lens.design}</Badge>
            <h1 className="text-2xl lg:text-3xl font-semibold text-slate-900 tracking-tight mt-2">{lens.brand}</h1>
            <p className="text-sm text-slate-500 mt-1">{lens.manufacturer}</p>
          </div>
          <button
            onClick={() => setFav(toggleLensFavorite(lens.id).includes(lens.id))}
            aria-label={fav ? `Remove ${lens.brand} from favorites` : `Add ${lens.brand} to favorites`}
            aria-pressed={fav}
            className="shrink-0 p-2 rounded-lg border border-slate-200 hover:bg-slate-50 cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-500"
          >
            <Star size={18} className={fav ? 'fill-amber-400 text-amber-400' : 'text-slate-300'} />
          </button>
        </div>
      </div>

      <Card className="bg-slate-50 border-slate-200">
        <p className="text-xs text-slate-500 leading-relaxed">
          Parameters reflect publicly published manufacturer specifications and may not capture the latest revision —
          confirm exact base curve, diameter, power availability, and UV-blocking status against the current
          manufacturer package insert or fitting guide before dispensing.
        </p>
      </Card>

      <Section title="Material & Optics">
        <Card className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-xs text-slate-400">Material class</p>
            <p className="text-slate-800 mt-0.5">{lens.materialClass}</p>
          </div>
          {lens.materialName && (
            <div>
              <p className="text-xs text-slate-400">Material name</p>
              <p className="text-slate-800 mt-0.5">{lens.materialName}</p>
            </div>
          )}
          {lens.fdaGroup && (
            <div>
              <p className="text-xs text-slate-400">FDA hydrogel group</p>
              <p className="text-slate-800 mt-0.5">Group {lens.fdaGroup}</p>
            </div>
          )}
          {lens.waterContent && (
            <div>
              <p className="text-xs text-slate-400">Water content</p>
              <p className="text-slate-800 mt-0.5">{lens.waterContent}</p>
            </div>
          )}
          {lens.dkt && (
            <div>
              <p className="text-xs text-slate-400">Dk/t</p>
              <p className="text-slate-800 mt-0.5">{lens.dkt}</p>
            </div>
          )}
          {lens.dk && (
            <div>
              <p className="text-xs text-slate-400">Dk (material)</p>
              <p className="text-slate-800 mt-0.5">{lens.dk}</p>
            </div>
          )}
        </Card>
      </Section>

      <Section title="Available Parameters">
        <Card className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-xs text-slate-400">Base curve(s)</p>
            <p className="text-slate-800 mt-0.5">{lens.baseCurves.join(', ')}</p>
          </div>
          <div>
            <p className="text-xs text-slate-400">Diameter</p>
            <p className="text-slate-800 mt-0.5">{lens.diameter}</p>
          </div>
          <div>
            <p className="text-xs text-slate-400">Sphere power range</p>
            <p className="text-slate-800 mt-0.5">{lens.sphereRange}</p>
          </div>
          {lens.cylinderRange && (
            <div>
              <p className="text-xs text-slate-400">Cylinder range</p>
              <p className="text-slate-800 mt-0.5">{lens.cylinderRange}</p>
            </div>
          )}
          {lens.axesAvailable && (
            <div>
              <p className="text-xs text-slate-400">Axes available</p>
              <p className="text-slate-800 mt-0.5">{lens.axesAvailable}</p>
            </div>
          )}
          {lens.addPowers && (
            <div>
              <p className="text-xs text-slate-400">Add powers</p>
              <p className="text-slate-800 mt-0.5">{lens.addPowers}</p>
            </div>
          )}
          {lens.centerThickness && (
            <div>
              <p className="text-xs text-slate-400">Center thickness</p>
              <p className="text-slate-800 mt-0.5">{lens.centerThickness}</p>
            </div>
          )}
          {lens.edgeDesign && (
            <div className="sm:col-span-2">
              <p className="text-xs text-slate-400">Edge / fit design</p>
              <p className="text-slate-800 mt-0.5">{lens.edgeDesign}</p>
            </div>
          )}
        </Card>
      </Section>

      <Section title="Wear & Handling">
        <Card className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-xs text-slate-400">Replacement schedule</p>
            <p className="text-slate-800 mt-0.5">{lens.replacementSchedule}</p>
          </div>
          <div>
            <p className="text-xs text-slate-400">Wear schedule</p>
            <p className="text-slate-800 mt-0.5">{lens.wearSchedule}</p>
          </div>
          <div>
            <p className="text-xs text-slate-400">UV blocking</p>
            <p className="text-slate-800 mt-0.5">
              {lens.uvBlocking === undefined ? 'Not confirmed — verify with manufacturer' : lens.uvBlocking ? 'Yes' : 'No'}
            </p>
          </div>
          <div>
            <p className="text-xs text-slate-400">Handling tint</p>
            <p className="text-slate-800 mt-0.5">{lens.handlingTint ? 'Yes' : 'No'}</p>
          </div>
        </Card>
      </Section>

      <Section title="Best For">
        <Card>
          <ul className="text-sm text-slate-700 space-y-1 list-disc pl-4">
            {lens.bestFor.map((b, i) => (
              <li key={i}><Linkify text={b} excludeId={lens.id} /></li>
            ))}
          </ul>
        </Card>
      </Section>

      <Section title="Clinical Notes">
        <Card className="bg-amber-50 border-amber-200">
          <ul className="space-y-2">
            {lens.clinicalNotes.map((n, i) => (
              <li key={i} className="text-sm text-amber-900">
                <Linkify text={n} excludeId={lens.id} />
              </li>
            ))}
          </ul>
        </Card>
      </Section>

      {relatedCalculators.length > 0 && (
        <Section title="Related Calculators">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {relatedCalculators.map((c) => (
              <Link key={c.meta.id} to={`/calculators/${c.meta.id}`}>
                <Card className="hover:border-brand-300 hover:shadow-md transition-all flex items-center gap-3">
                  <Calc size={16} className="text-brand-500 shrink-0" />
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-slate-900">{c.meta.name}</p>
                    <p className="text-xs text-slate-500 truncate">{c.meta.description}</p>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </Section>
      )}
    </div>
  )
}
