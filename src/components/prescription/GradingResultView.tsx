import { CheckCircle2, XCircle } from 'lucide-react'
import { Card } from '../ui/Card'
import { Badge } from '../ui/Badge'
import type { GradingResult } from '../../types/prescription'

export function GradingResultView({ result }: { result: GradingResult }) {
  const pct = Math.round((result.score / result.totalFields) * 100)
  return (
    <div className="space-y-4">
      <Card className="flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-500">Score</p>
          <p className="text-2xl font-semibold text-slate-900">
            {result.score} / {result.totalFields}
          </p>
        </div>
        <Badge tone={pct >= 80 ? 'success' : pct >= 50 ? 'warning' : 'danger'}>{pct}%</Badge>
      </Card>

      <Card padded={false}>
        <div className="divide-y divide-slate-100">
          {result.fields.map((f) => (
            <div key={f.field} className="flex items-center justify-between px-4 py-2.5 text-sm">
              <span className="text-slate-600 font-medium">{f.field}</span>
              <span className="flex items-center gap-2">
                {f.correct ? (
                  <CheckCircle2 size={16} className="text-emerald-600" />
                ) : (
                  <XCircle size={16} className="text-red-500" />
                )}
                <span className={f.correct ? 'text-emerald-700' : 'text-red-600'}>{f.submitted}</span>
              </span>
            </div>
          ))}
        </div>
      </Card>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Card>
          <p className="text-xs font-semibold uppercase tracking-wide text-emerald-600 mb-2">
            What you got right
          </p>
          {result.whatYouGotRight.length > 0 ? (
            <ul className="text-sm text-slate-700 space-y-1 list-disc pl-4">
              {result.whatYouGotRight.map((r, i) => <li key={i}>{r}</li>)}
            </ul>
          ) : (
            <p className="text-sm text-slate-400">Nothing matched yet — review the reasoning below.</p>
          )}
        </Card>
        <Card>
          <p className="text-xs font-semibold uppercase tracking-wide text-red-500 mb-2">
            What you missed
          </p>
          {result.whatYouMissed.length > 0 ? (
            <ul className="text-sm text-slate-700 space-y-1 list-disc pl-4">
              {result.whatYouMissed.map((r, i) => <li key={i}>{r}</li>)}
            </ul>
          ) : (
            <p className="text-sm text-slate-400">Nothing missed — great work.</p>
          )}
        </Card>
      </div>

      <Card className="bg-brand-50 border-brand-200">
        <p className="text-xs font-semibold uppercase tracking-wide text-brand-700 mb-2">
          Why the correct prescription is appropriate
        </p>
        <p className="text-sm text-brand-900 leading-relaxed">{result.whyCorrectIsAppropriate}</p>
      </Card>
    </div>
  )
}
