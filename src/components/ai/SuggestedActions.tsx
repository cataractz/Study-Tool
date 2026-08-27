import {
  Stethoscope,
  ClipboardList,
  GitCompare,
  Pill,
  FileSearch,
  GraduationCap,
  Lightbulb,
  Compass,
} from 'lucide-react'
import type { AIMode } from '../../types/ai'

interface QuickAction {
  label: string
  description: string
  mode: AIMode
  icon: typeof Stethoscope
  prompt?: string
}

const quickActions: QuickAction[] = [
  { label: 'Explain a condition', description: 'Get a structured clinical explanation', mode: 'clinical-explanation', icon: Stethoscope },
  { label: 'Analyze a clinical case', description: 'Work through an interactive scenario', mode: 'clinical-case', icon: ClipboardList },
  { label: 'Compare two conditions', description: 'Side-by-side clinical comparison', mode: 'compare', icon: GitCompare },
  { label: 'Analyze a medication', description: 'Mechanism, contraindications, interactions', mode: 'pharmacology', icon: Pill },
  { label: 'Analyze a document', description: 'Upload and ask questions about a file', mode: 'document-analysis', icon: FileSearch },
  { label: 'Create a knowledge check', description: 'Practice questions and vignettes', mode: 'knowledge-check', icon: GraduationCap },
  { label: 'Explain a difficult concept', description: 'Clear breakdown of a tricky topic', mode: 'general', icon: Lightbulb },
  { label: 'Build a differential', description: 'Describe findings, get a differential', mode: 'differential-diagnosis', icon: Compass },
]

export function SuggestedActions({ onSelect }: { onSelect: (mode: AIMode) => void }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
      {quickActions.map((action) => (
        <button
          key={action.label}
          type="button"
          onClick={() => onSelect(action.mode)}
          className="flex items-start gap-3 text-left bg-white border border-slate-200 rounded-xl px-4 py-3.5 hover:border-brand-300 hover:shadow-sm transition-all cursor-pointer"
        >
          <div className="w-8 h-8 rounded-lg bg-brand-50 text-brand-600 flex items-center justify-center shrink-0">
            <action.icon size={16} />
          </div>
          <div className="min-w-0">
            <p className="text-sm font-medium text-slate-900">{action.label}</p>
            <p className="text-xs text-slate-500 mt-0.5">{action.description}</p>
          </div>
        </button>
      ))}
    </div>
  )
}
