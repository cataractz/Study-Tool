import { useState } from 'react'
import { AlertTriangle, ChevronDown, HelpCircle } from 'lucide-react'
import { Card } from '../ui/Card'
import type { QuestionNode, DecisionOption } from '../../types/decisionTree'

export function DecisionNodeCard({
  node,
  onAnswer,
}: {
  node: QuestionNode
  onAnswer: (option: DecisionOption) => void
}) {
  const [showRationale, setShowRationale] = useState(false)

  return (
    <Card
      className={
        node.isEmergencyScreen
          ? 'bg-red-50 border-red-200'
          : undefined
      }
    >
      {node.isEmergencyScreen && (
        <div className="flex items-center gap-1.5 text-xs font-semibold text-red-700 uppercase tracking-wide mb-2">
          <AlertTriangle size={13} /> Emergency Screen
        </div>
      )}

      <h2 className="text-lg font-semibold text-slate-900 leading-snug">{node.question}</h2>

      {node.rationale && (
        <div className="mt-2">
          <button
            onClick={() => setShowRationale((v) => !v)}
            className="inline-flex items-center gap-1 text-xs text-slate-500 hover:text-slate-700 cursor-pointer"
          >
            <HelpCircle size={13} />
            Why am I being asked this?
            <ChevronDown size={13} className={`transition-transform ${showRationale ? 'rotate-180' : ''}`} />
          </button>
          {showRationale && (
            <p className="mt-1.5 text-sm text-slate-600 leading-relaxed bg-slate-50 border border-slate-200 rounded-lg p-3">
              {node.rationale}
            </p>
          )}
        </div>
      )}

      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        {node.options.map((option) => (
          <button
            key={option.id}
            onClick={() => onAnswer(option)}
            className={`text-left px-4 py-3 rounded-lg border transition-colors cursor-pointer ${
              option.isRedFlag
                ? 'bg-red-50 border-red-300 hover:bg-red-100'
                : 'bg-white border-slate-300 hover:border-brand-400 hover:bg-brand-50'
            }`}
          >
            <span className={`block text-sm font-medium ${option.isRedFlag ? 'text-red-800' : 'text-slate-800'}`}>
              {option.label}
            </span>
            {option.description && (
              <span className="block text-xs text-slate-500 mt-0.5">{option.description}</span>
            )}
          </button>
        ))}
      </div>
    </Card>
  )
}
