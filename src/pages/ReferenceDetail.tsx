import { useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { getReferenceById } from '../reference/registry'
import { BackLink } from '../components/shared/BackLink'
import { NotFound } from './NotFound'

export function ReferenceDetail() {
  const { referenceId } = useParams<{ referenceId: string }>()
  const entry = referenceId ? getReferenceById(referenceId) : undefined

  if (!entry) return <NotFound />

  const { Component } = entry

  return (
    <div className="space-y-4">
      <BackLink
        to="/references"
        icon={ArrowLeft}
        iconSize={14}
        className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-800"
      >
        All References
      </BackLink>
      <Component />
    </div>
  )
}
