import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { AlertTriangle, Ban, AlertCircle, Info, X, ShieldCheck, ClipboardList } from 'lucide-react'
import { Card } from '../ui/Card'
import { Badge, type BadgeTone } from '../ui/Badge'
import { SearchInput } from '../ui/SearchInput'
import { searchDrugs, getDrugById } from '../../services/drugService'
import { getInteractionsForDrugs } from '../../services/drugInteractionService'
import type { InteractionSeverity } from '../../types/drugInteraction'

const severityTone: Record<InteractionSeverity, BadgeTone> = {
  Contraindicated: 'danger',
  Major: 'danger',
  Moderate: 'warning',
  Minor: 'info',
}

const severityIcon: Record<InteractionSeverity, typeof Ban> = {
  Contraindicated: Ban,
  Major: AlertTriangle,
  Moderate: AlertCircle,
  Minor: Info,
}

export function InteractionChecker() {
  const [medicationIds, setMedicationIds] = useState<string[]>([])
  const [query, setQuery] = useState('')

  const suggestions = useMemo(() => {
    if (!query.trim()) return []
    return searchDrugs(query)
      .filter((d) => !medicationIds.includes(d.id))
      .slice(0, 8)
  }, [query, medicationIds])

  const medications = medicationIds
    .map((id) => getDrugById(id))
    .filter((d): d is NonNullable<typeof d> => Boolean(d))

  const interactions = useMemo(() => getInteractionsForDrugs(medicationIds), [medicationIds])

  function addMedication(id: string) {
    setMedicationIds((prev) => (prev.includes(id) ? prev : [...prev, id]))
    setQuery('')
  }

  function removeMedication(id: string) {
    setMedicationIds((prev) => prev.filter((m) => m !== id))
  }

  return (
    <div className="space-y-5">
      <Card className="bg-slate-50 border-slate-200 flex gap-2.5">
        <ClipboardList size={16} className="text-slate-400 shrink-0 mt-0.5" />
        <p className="text-xs text-slate-500 leading-relaxed">
          Build a patient&apos;s medication list below (their existing systemic/ocular medications, plus anything
          you&apos;re considering prescribing) and every documented pairwise interaction among them will be flagged
          automatically — checking all combinations, not just adjacent pairs.{' '}
          <span className="font-medium text-slate-700">
            This checks a curated set of clinically significant interactions between drugs in this database, not
            an exhaustive interaction database.
          </span>{' '}
          A drug pair with nothing shown here is not thereby confirmed safe — always cross-check against a full
          clinical interaction reference (e.g. Lexicomp, Micromedex, or the prescribing pharmacist) before finalizing
          a prescribing decision, especially for anything unfamiliar or high-risk.
        </p>
      </Card>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1.5">Add a medication</label>
        <div className="relative max-w-xl">
          <SearchInput
            placeholder="Search by generic or brand name..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search for a medication to add to the patient's list"
          />
          {suggestions.length > 0 && (
            <div className="absolute z-10 mt-1 w-full bg-white border border-slate-200 rounded-lg shadow-lg max-h-72 overflow-auto">
              {suggestions.map((d) => (
                <button
                  key={d.id}
                  onClick={() => addMedication(d.id)}
                  className="w-full text-left px-3.5 py-2.5 hover:bg-slate-50 cursor-pointer flex items-center justify-between gap-2 border-b border-slate-100 last:border-b-0"
                >
                  <span>
                    <span className="text-sm font-medium text-slate-900">{d.genericName}</span>
                    {d.brandNames.length > 0 && (
                      <span className="text-xs text-slate-500 ml-1.5">({d.brandNames.join(', ')})</span>
                    )}
                  </span>
                  <Badge tone="default">{d.drugClass}</Badge>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div>
        <h2 className="text-sm font-semibold text-slate-700 mb-2">
          Patient&apos;s Medications {medications.length > 0 && `(${medications.length})`}
        </h2>
        {medications.length === 0 ? (
          <p className="text-sm text-slate-500">No medications added yet — search above to build the list.</p>
        ) : (
          <div className="flex flex-wrap gap-2">
            {medications.map((d) => (
              <span
                key={d.id}
                className="inline-flex items-center gap-1.5 pl-3 pr-2 py-1.5 rounded-full bg-brand-50 text-brand-700 border border-brand-200 text-sm font-medium"
              >
                {d.genericName}
                <button
                  onClick={() => removeMedication(d.id)}
                  aria-label={`Remove ${d.genericName}`}
                  className="p-0.5 hover:bg-brand-100 rounded-full cursor-pointer"
                >
                  <X size={13} />
                </button>
              </span>
            ))}
          </div>
        )}
      </div>

      {medications.length >= 2 && (
        <div>
          <h2 className="text-sm font-semibold text-slate-700 mb-2">
            {interactions.length > 0
              ? `${interactions.length} Interaction${interactions.length === 1 ? '' : 's'} Found`
              : 'Results'}
          </h2>
          {interactions.length === 0 ? (
            <Card className="bg-emerald-50 border-emerald-200 flex gap-2.5">
              <ShieldCheck size={16} className="text-emerald-600 shrink-0 mt-0.5" />
              <p className="text-sm text-emerald-900">
                No documented interactions found among these {medications.length} medications in this database.
                This does not guarantee the combination is safe — it means nothing in this curated dataset flags
                a conflict between them.
              </p>
            </Card>
          ) : (
            <div className="space-y-3">
              {interactions.map((interaction) => {
                const drugA = getDrugById(interaction.drugAId)
                const drugB = getDrugById(interaction.drugBId)
                const Icon = severityIcon[interaction.severity]
                return (
                  <Card key={interaction.id} className="space-y-2.5">
                    <div className="flex items-start justify-between gap-3 flex-wrap">
                      <div className="flex items-center gap-2 flex-wrap text-sm font-semibold text-slate-900">
                        {drugA && (
                          <Link to={`/drugs/${drugA.id}`} className="hover:text-brand-600">
                            {drugA.genericName}
                          </Link>
                        )}
                        <span className="text-slate-400 font-normal">+</span>
                        {drugB && (
                          <Link to={`/drugs/${drugB.id}`} className="hover:text-brand-600">
                            {drugB.genericName}
                          </Link>
                        )}
                      </div>
                      <Badge tone={severityTone[interaction.severity]} className="gap-1">
                        <Icon size={12} /> {interaction.severity}
                      </Badge>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                      <div>
                        <p className="font-medium text-slate-500 mb-0.5">Mechanism</p>
                        <p className="text-slate-700 leading-relaxed">{interaction.mechanism}</p>
                      </div>
                      <div>
                        <p className="font-medium text-slate-500 mb-0.5">Clinical effect</p>
                        <p className="text-slate-700 leading-relaxed">{interaction.clinicalEffect}</p>
                      </div>
                      <div>
                        <p className="font-medium text-slate-500 mb-0.5">Management</p>
                        <p className="text-slate-700 leading-relaxed">{interaction.management}</p>
                      </div>
                    </div>
                  </Card>
                )
              })}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
