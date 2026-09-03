import { Link, useParams } from 'react-router-dom'
import { ChevronLeft, GitBranch } from 'lucide-react'
import { EmptyState } from '../components/ui/EmptyState'
import { DecisionTreePlayer } from '../components/shared/DecisionTreePlayer'
import { getDecisionTreeById } from '../services/decisionTreeService'

export function DecisionTreeDetail() {
  const { treeId } = useParams<{ treeId: string }>()
  const tree = treeId ? getDecisionTreeById(treeId) : undefined

  if (!tree) {
    return (
      <div className="space-y-4">
        <Link to="/decision-trees" className="inline-flex items-center gap-1 text-sm text-brand-600 hover:underline">
          <ChevronLeft size={15} /> Back to Clinical Decision Trees
        </Link>
        <EmptyState icon={GitBranch} title="Decision tree not found" description="This pathway isn't in the library yet." />
      </div>
    )
  }

  return <DecisionTreePlayer tree={tree} backTo="/decision-trees" backLabel="Clinical Decision Trees" />
}
