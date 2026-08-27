import { useState } from 'react'
import clsx from 'clsx'
import { RefreshCw, CheckCircle2, XCircle } from 'lucide-react'
import { Card } from '../../components/ui/Card'
import { Button } from '../../components/ui/Button'
import { SelectField, StepsList } from './ui'
import { withinTolerance } from './format'
import type { Difficulty, PracticeGenerator, PracticeProblem } from '../../types/calculator'

const difficultyOptions: { value: Difficulty; label: string }[] = [
  { value: 'Basic', label: 'Basic' },
  { value: 'Intermediate', label: 'Intermediate' },
  { value: 'Advanced', label: 'Advanced' },
]

export function PracticePanel({ generate }: { generate: PracticeGenerator }) {
  const [difficulty, setDifficulty] = useState<Difficulty>('Basic')
  const [problem, setProblem] = useState<PracticeProblem>(() => generate('Basic'))
  const [inputs, setInputs] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)

  function newProblem(d: Difficulty) {
    setProblem(generate(d))
    setInputs({})
    setSubmitted(false)
  }

  function handleDifficultyChange(v: string) {
    const d = v as Difficulty
    setDifficulty(d)
    newProblem(d)
  }

  const results = problem.answers.map((a) => {
    const raw = inputs[a.key]
    const userValue = raw === undefined || raw.trim() === '' ? null : Number(raw)
    const correct = userValue !== null && Number.isFinite(userValue) && withinTolerance(userValue, a.value, a.tolerance)
    return { ...a, userValue, correct }
  })
  const allCorrect = submitted && results.every((r) => r.correct)
  const allAnswered = problem.answers.every((a) => inputs[a.key]?.trim())

  return (
    <Card className="space-y-4">
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <div className="w-40">
          <SelectField label="Difficulty" value={difficulty} onChange={handleDifficultyChange} options={difficultyOptions} />
        </div>
        <Button variant="outline" size="sm" icon={<RefreshCw size={14} />} onClick={() => newProblem(difficulty)}>
          New Problem
        </Button>
      </div>

      <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
        <p className="text-sm text-slate-800 leading-relaxed">{problem.prompt}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {problem.answers.map((a) => {
          const r = results.find((x) => x.key === a.key)!
          return (
            <label key={a.key} className="block">
              <span className="text-xs font-medium text-slate-500 mb-1 block">
                {a.label}
                {a.unit && <span className="text-slate-400"> ({a.unit})</span>}
              </span>
              <input
                type="number"
                inputMode="decimal"
                step="any"
                value={inputs[a.key] ?? ''}
                onChange={(e) => setInputs((prev) => ({ ...prev, [a.key]: e.target.value }))}
                disabled={submitted}
                className={clsx(
                  'w-full rounded-lg border px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 disabled:bg-slate-50',
                  submitted ? (r.correct ? 'border-emerald-300 bg-emerald-50' : 'border-red-300 bg-red-50') : 'border-slate-300',
                )}
              />
              {submitted && (
                <span className={clsx('text-xs mt-1 flex items-center gap-1', r.correct ? 'text-emerald-700' : 'text-red-700')}>
                  {r.correct ? <CheckCircle2 size={12} /> : <XCircle size={12} />}
                  Correct answer: {a.value.toFixed(2)}
                  {a.unit ? ` ${a.unit}` : ''}
                </span>
              )}
            </label>
          )
        })}
      </div>

      {!submitted ? (
        <Button onClick={() => setSubmitted(true)} disabled={!allAnswered}>
          Check Answer
        </Button>
      ) : (
        <div className="space-y-3 pt-2 border-t border-slate-100">
          <p className={clsx('text-sm font-semibold flex items-center gap-1.5', allCorrect ? 'text-emerald-700' : 'text-amber-700')}>
            {allCorrect ? <CheckCircle2 size={16} /> : <XCircle size={16} />}
            {allCorrect ? 'Correct!' : 'Not quite — review the steps below.'}
          </p>
          <div>
            <p className="text-xs font-semibold text-slate-500 mb-1">Formula</p>
            <p className="font-mono text-sm text-slate-800">{problem.formula}</p>
          </div>
          <div>
            <p className="text-xs font-semibold text-slate-500 mb-1">Substitution</p>
            <p className="font-mono text-sm text-slate-800">{problem.substitution}</p>
          </div>
          <div>
            <p className="text-xs font-semibold text-slate-500 mb-1">Calculation</p>
            <StepsList steps={problem.steps} />
          </div>
          <div>
            <p className="text-xs font-semibold text-slate-500 mb-1">Final Answer</p>
            <p className="text-sm text-slate-800">{problem.finalAnswerText}</p>
          </div>
          <div>
            <p className="text-xs font-semibold text-slate-500 mb-1">Why</p>
            <p className="text-sm text-slate-700">{problem.why}</p>
          </div>
        </div>
      )}
    </Card>
  )
}
