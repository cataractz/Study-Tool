import { useState } from 'react'
import { ChevronRight, RotateCcw, Stethoscope } from 'lucide-react'
import { Button } from '../ui/Button'
import { EmptyState } from '../ui/EmptyState'
import { DecisionNodeCard } from './DecisionNodeCard'
import { DecisionOutcomeSummary } from './DecisionOutcomeSummary'
import { BackLink } from './BackLink'
import type { DecisionTree, DecisionOption } from '../../types/decisionTree'

interface PathStep {
  nodeId: string
  /** The label of the option chosen to leave this node — undefined until an answer is picked
   * (always undefined for the current/last step). */
  answerLabel?: string
}

export function DecisionTreePlayer({
  tree,
  backTo,
  backLabel,
}: {
  tree: DecisionTree
  backTo: string
  backLabel: string
}) {
  const [path, setPath] = useState<PathStep[]>([{ nodeId: tree.startNodeId }])

  const currentStep = path[path.length - 1]
  const currentNode = tree.nodes[currentStep.nodeId]

  function handleAnswer(option: DecisionOption) {
    setPath((prev) => {
      const updated = [...prev]
      updated[updated.length - 1] = { ...updated[updated.length - 1], answerLabel: option.label }
      return [...updated, { nodeId: option.nextNodeId }]
    })
  }

  function handleBack() {
    setPath((prev) => (prev.length > 1 ? prev.slice(0, -1) : prev))
  }

  function handleRestart() {
    setPath([{ nodeId: tree.startNodeId }])
  }

  if (!currentNode) {
    return (
      <div className="space-y-4">
        <BackLink to={backTo} className="inline-flex items-center gap-1 text-sm text-brand-600 hover:underline">
          Back to {backLabel}
        </BackLink>
        <EmptyState icon={Stethoscope} title="Pathway error" description="This decision tree has a broken node reference." />
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div>
        <BackLink to={backTo} className="inline-flex items-center gap-1 text-sm text-brand-600 hover:underline mb-3">
          Back to {backLabel}
        </BackLink>
        <div className="flex items-start justify-between gap-3 flex-wrap">
          <h1 className="text-xl font-semibold text-slate-900 tracking-tight">{tree.name}</h1>
          <div className="flex items-center gap-2 shrink-0">
            <Button variant="outline" size="sm" onClick={handleBack} disabled={path.length === 1}>
              Back
            </Button>
            <Button variant="ghost" size="sm" icon={<RotateCcw size={13} />} onClick={handleRestart}>
              Restart
            </Button>
          </div>
        </div>

        {/* Breadcrumb path */}
        <div className="flex flex-wrap items-center gap-x-1.5 gap-y-1 mt-3 text-xs text-slate-500">
          <span className="font-medium text-slate-700">{tree.name}</span>
          {path.slice(0, -1).map((step, i) => (
            <span key={i} className="flex items-center gap-1.5">
              <ChevronRight size={11} className="text-slate-300" />
              <span>{step.answerLabel}</span>
            </span>
          ))}
        </div>
      </div>

      {currentNode.type === 'question' ? (
        <DecisionNodeCard node={currentNode} onAnswer={handleAnswer} />
      ) : (
        <DecisionOutcomeSummary outcome={currentNode} treeReferences={tree.references} />
      )}
    </div>
  )
}
