import { useMemo, useState } from 'react'
import { CheckCircle2, XCircle, RotateCcw } from 'lucide-react'
import { Card } from '../ui/Card'
import { Button } from '../ui/Button'
import { generateQuizQuestions } from '../../services/quizService'
import { getAllDiseases } from '../../services/diseaseService'
import type { Disease } from '../../types/disease'

export function QuizPanel({ disease }: { disease: Disease }) {
  const [seed, setSeed] = useState(0)
  const [selected, setSelected] = useState<Record<string, number>>({})

  const questions = useMemo(
    () => generateQuizQuestions(disease, getAllDiseases()),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [disease.id, seed],
  )

  if (questions.length === 0) {
    return (
      <Card className="text-sm text-slate-500">
        Not enough structured data to generate a quiz for this disease yet.
      </Card>
    )
  }

  const answeredCount = Object.keys(selected).length
  const correctCount = questions.filter((q) => selected[q.id] === q.correctIndex).length

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <p className="text-sm text-slate-500">
          {answeredCount === questions.length
            ? `Score: ${correctCount} / ${questions.length}`
            : `${questions.length} questions generated from this disease's clinical data`}
        </p>
        <Button
          variant="outline"
          size="sm"
          icon={<RotateCcw size={14} />}
          onClick={() => {
            setSelected({})
            setSeed((s) => s + 1)
          }}
        >
          New Questions
        </Button>
      </div>

      {questions.map((q, idx) => {
        const chosen = selected[q.id]
        const isAnswered = chosen !== undefined
        return (
          <Card key={q.id}>
            <p className="text-sm font-medium text-slate-900 mb-3">
              {idx + 1}. {q.question}
            </p>
            <div className="space-y-2">
              {q.choices.map((choice, choiceIdx) => {
                const isCorrectChoice = choiceIdx === q.correctIndex
                const isChosen = chosen === choiceIdx
                return (
                  <button
                    key={choiceIdx}
                    disabled={isAnswered}
                    onClick={() => setSelected((s) => ({ ...s, [q.id]: choiceIdx }))}
                    className={`w-full flex items-center justify-between gap-2 text-left text-sm rounded-lg border px-3.5 py-2.5 transition-colors ${
                      isAnswered
                        ? isCorrectChoice
                          ? 'border-emerald-300 bg-emerald-50 text-emerald-800'
                          : isChosen
                            ? 'border-red-300 bg-red-50 text-red-800'
                            : 'border-slate-200 text-slate-500'
                        : 'border-slate-200 hover:border-brand-300 hover:bg-brand-50/50 cursor-pointer text-slate-700'
                    }`}
                  >
                    {choice}
                    {isAnswered && isCorrectChoice && (
                      <CheckCircle2 size={16} className="shrink-0 text-emerald-600" />
                    )}
                    {isAnswered && isChosen && !isCorrectChoice && (
                      <XCircle size={16} className="shrink-0 text-red-600" />
                    )}
                  </button>
                )
              })}
            </div>
            {isAnswered && (
              <p className="text-xs text-slate-500 mt-3 leading-relaxed border-t border-slate-100 pt-3">
                {q.explanation}
              </p>
            )}
          </Card>
        )
      })}
    </div>
  )
}
