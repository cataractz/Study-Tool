import { useState } from 'react'
import { RotateCcw, Eye, EyeOff } from 'lucide-react'
import { Card } from '../ui/Card'
import { Button } from '../ui/Button'
import { generateClinicalCase } from '../../services/caseService'
import type { Disease } from '../../types/disease'

export function CasePanel({ disease }: { disease: Disease }) {
  const [seed, setSeed] = useState(0)
  const [revealed, setRevealed] = useState(false)
  const generatedCase = generateClinicalCase(disease)

  return (
    <Card className="space-y-4" key={seed}>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400 mb-2">
          Clinical Vignette
        </p>
        <p className="text-sm text-slate-800 leading-relaxed">{generatedCase.vignette}</p>
      </div>
      <div className="border-t border-slate-100 pt-3">
        <p className="text-sm font-medium text-slate-900">{generatedCase.prompt}</p>
      </div>

      {revealed && (
        <div className="rounded-lg bg-brand-50 border border-brand-200 p-4 space-y-1.5">
          <p className="text-sm font-semibold text-brand-800">{generatedCase.answer}</p>
          <p className="text-xs text-brand-700 leading-relaxed">{generatedCase.explanation}</p>
        </div>
      )}

      <div className="flex gap-2">
        <Button
          variant={revealed ? 'outline' : 'primary'}
          size="sm"
          icon={revealed ? <EyeOff size={14} /> : <Eye size={14} />}
          onClick={() => setRevealed((r) => !r)}
        >
          {revealed ? 'Hide Answer' : 'Reveal Diagnosis'}
        </Button>
        <Button
          variant="outline"
          size="sm"
          icon={<RotateCcw size={14} />}
          onClick={() => {
            setRevealed(false)
            setSeed((s) => s + 1)
          }}
        >
          New Case
        </Button>
      </div>
    </Card>
  )
}
