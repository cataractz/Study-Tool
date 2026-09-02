import { Link } from 'react-router-dom'
import clsx from 'clsx'
import { ArrowRight, CheckCircle2, XCircle, Compass, ArrowRightCircle } from 'lucide-react'
import { Card } from '../ui/Card'
import { Badge, urgencyTone } from '../ui/Badge'
import { Linkify } from '../shared/Linkify'
import type { DifferentialResult, Likelihood } from '../../types/differential'

const LIKELIHOOD_STYLES: Record<Likelihood, string> = {
  High: 'bg-emerald-600 text-white border-emerald-600',
  Moderate: 'bg-sky-100 text-sky-700 border-sky-300',
  Low: 'bg-slate-100 text-slate-600 border-slate-300',
  Possible: 'bg-slate-50 text-slate-400 border-slate-200',
}

export function DifferentialResultCard({
  result,
  rank,
}: {
  result: DifferentialResult
  rank: number
}) {
  return (
    <Card className="space-y-3.5">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-slate-100 text-slate-500 font-semibold text-sm flex items-center justify-center shrink-0">
            {rank}
          </div>
          <div>
            <Link
              to={`/diseases/${result.diseaseId}`}
              className="text-base font-semibold text-slate-900 hover:text-brand-600 hover:underline"
            >
              {result.name}
            </Link>
            <div className="flex items-center gap-2 mt-1">
              <Badge tone={urgencyTone(result.urgency)}>{result.urgency}</Badge>
            </div>
          </div>
        </div>
        <div className="text-right shrink-0">
          <span
            className={clsx(
              'inline-block px-3 py-1 rounded-full text-sm font-semibold border whitespace-nowrap',
              LIKELIHOOD_STYLES[result.likelihood],
            )}
          >
            {result.likelihood === 'Possible' ? 'Possible' : `${result.likelihood} likelihood`}
          </span>
        </div>
      </div>

      <div>
        <p className="text-xs text-slate-500 mb-1">Clinical match strength</p>
        <div className="w-full h-1.5 rounded-full bg-slate-100 overflow-hidden">
          <div
            className="h-full bg-brand-500 rounded-full"
            style={{ width: `${result.matchScore}%` }}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
        <div>
          <p className="text-xs font-semibold text-slate-500 flex items-center gap-1 mb-1.5">
            <CheckCircle2 size={13} className="text-emerald-500" /> Why it matches
          </p>
          {result.whyItMatches.length > 0 ? (
            <ul className="text-sm text-slate-700 space-y-1 list-disc pl-4">
              {result.whyItMatches.map((f, i) => <li key={i}>{f}</li>)}
            </ul>
          ) : (
            <p className="text-sm text-slate-400">—</p>
          )}
        </div>
        <div>
          <p className="text-xs font-semibold text-slate-500 flex items-center gap-1 mb-1.5">
            <XCircle size={13} className="text-red-400" /> Findings against it
          </p>
          {result.findingsAgainst.length > 0 ? (
            <ul className="text-sm text-slate-700 space-y-1 list-disc pl-4">
              {result.findingsAgainst.map((f, i) => <li key={i}>{f} (not reported)</li>)}
            </ul>
          ) : (
            <p className="text-sm text-slate-400">—</p>
          )}
        </div>
        <div>
          <p className="text-xs font-semibold text-slate-500 flex items-center gap-1 mb-1.5">
            <Compass size={13} className="text-brand-500" /> What would distinguish it
          </p>
          <ul className="text-sm text-slate-700 space-y-1 list-disc pl-4">
            {result.distinguishingFactors.map((f, i) => <li key={i}><Linkify text={f} excludeId={result.diseaseId} /></li>)}
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold text-slate-500 flex items-center gap-1 mb-1.5">
            <ArrowRightCircle size={13} className="text-slate-400" /> Recommended next steps
          </p>
          <ul className="text-sm text-slate-700 space-y-1 list-disc pl-4">
            {result.nextSteps.map((f, i) => <li key={i}><Linkify text={f} excludeId={result.diseaseId} /></li>)}
          </ul>
        </div>
      </div>

      <Link
        to={`/diseases/${result.diseaseId}`}
        className="inline-flex items-center gap-1 text-sm font-medium text-brand-600 hover:gap-2 transition-all"
      >
        View full disease page <ArrowRight size={14} />
      </Link>
    </Card>
  )
}
