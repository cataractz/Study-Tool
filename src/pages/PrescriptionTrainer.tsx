import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { RotateCcw, Stethoscope, User, Sparkles } from 'lucide-react'
import { Card } from '../components/ui/Card'
import { Button } from '../components/ui/Button'
import { Badge } from '../components/ui/Badge'
import { EmptyState } from '../components/ui/EmptyState'
import { PrescriptionForm } from '../components/prescription/PrescriptionForm'
import { GradingResultView } from '../components/prescription/GradingResultView'
import { getRandomCase, gradeSubmission } from '../services/prescriptionService'
import { buildPrescriptionContext } from '../services/ai/contextService'
import { Linkify } from '../components/shared/Linkify'
import type { PrescriptionCase, PrescriptionDifficulty, PrescriptionSubmission, GradingResult } from '../types/prescription'

const difficulties: { value: PrescriptionDifficulty; description: string }[] = [
  { value: 'Easy', description: 'Straightforward common conditions.' },
  { value: 'Medium', description: 'Requires distinguishing between several medications.' },
  { value: 'Hard', description: 'Contraindications, interactions, comorbidities, allergies.' },
  { value: 'Expert', description: 'Multiple clinical variables and full prescription construction.' },
]

const difficultyTone: Record<PrescriptionDifficulty, 'success' | 'info' | 'warning' | 'danger'> = {
  Easy: 'success',
  Medium: 'info',
  Hard: 'warning',
  Expert: 'danger',
}

export function PrescriptionTrainer() {
  const [difficulty, setDifficulty] = useState<PrescriptionDifficulty>('Easy')
  const [currentCase, setCurrentCase] = useState<PrescriptionCase | undefined>(() => getRandomCase('Easy'))
  const [result, setResult] = useState<GradingResult | null>(null)
  const [lastSubmission, setLastSubmission] = useState<PrescriptionSubmission | null>(null)
  const navigate = useNavigate()

  function newCase(diff: PrescriptionDifficulty) {
    setDifficulty(diff)
    setCurrentCase(getRandomCase(diff))
    setResult(null)
    setLastSubmission(null)
  }

  function handleSubmit(submission: PrescriptionSubmission) {
    if (!currentCase) return
    setResult(gradeSubmission(currentCase, submission))
    setLastSubmission(submission)
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-slate-900 tracking-tight">Prescription Trainer</h1>
        <p className="text-slate-500 mt-1">
          Select the most appropriate medication and construct a complete ophthalmic prescription.
        </p>
      </div>

      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400 mb-2">Difficulty</p>
        <div className="flex flex-wrap gap-2">
          {difficulties.map((d) => (
            <button
              key={d.value}
              onClick={() => newCase(d.value)}
              className={`px-3.5 py-2 rounded-lg text-sm font-medium border transition-colors cursor-pointer ${
                difficulty === d.value
                  ? 'bg-brand-600 text-white border-brand-600'
                  : 'bg-white text-slate-600 border-slate-300 hover:bg-slate-50'
              }`}
              title={d.description}
            >
              {d.value}
            </button>
          ))}
        </div>
      </div>

      {!currentCase ? (
        <EmptyState
          icon={Stethoscope}
          title="No cases available"
          description="No prescription cases exist for this difficulty yet."
        />
      ) : (
        <>
          <Card className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <User size={15} />
                {currentCase.patientContext.age}-year-old {currentCase.patientContext.sex.toLowerCase()}
              </div>
              <Badge tone={difficultyTone[currentCase.difficulty]}>{currentCase.difficulty}</Badge>
            </div>
            <p className="text-sm text-slate-800 leading-relaxed">
              <Linkify text={currentCase.scenario} typesAllowed={['disease']} />
            </p>
            {(currentCase.patientContext.allergies.length > 0 ||
              currentCase.patientContext.medicalHistory.length > 0) && (
              <div className="flex flex-wrap gap-4 text-xs text-slate-500 border-t border-slate-100 pt-3">
                {currentCase.patientContext.allergies.length > 0 && (
                  <span>
                    <span className="font-medium text-slate-600">Allergies: </span>
                    {currentCase.patientContext.allergies.join(', ')}
                  </span>
                )}
                {currentCase.patientContext.medicalHistory.length > 0 && (
                  <span>
                    <span className="font-medium text-slate-600">History: </span>
                    {currentCase.patientContext.medicalHistory.join(', ')}
                  </span>
                )}
              </div>
            )}
            <p className="text-sm font-medium text-slate-900 border-t border-slate-100 pt-3">
              Select the most appropriate medication and construct the prescription below.
            </p>
          </Card>

          {!result ? (
            <PrescriptionForm prescriptionCase={currentCase} onSubmit={handleSubmit} />
          ) : (
            <div className="space-y-4">
              <GradingResultView result={result} />
              <div className="flex gap-3">
                <Button variant="outline" icon={<RotateCcw size={16} />} onClick={() => newCase(difficulty)}>
                  Try Another Case
                </Button>
                {lastSubmission && (
                  <Button
                    variant="outline"
                    icon={<Sparkles size={16} />}
                    onClick={() =>
                      navigate('/ai-assistant', {
                        state: {
                          context: buildPrescriptionContext(currentCase, lastSubmission, result),
                          mode: 'clinical-explanation',
                        },
                      })
                    }
                  >
                    Explain This Answer
                  </Button>
                )}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  )
}
