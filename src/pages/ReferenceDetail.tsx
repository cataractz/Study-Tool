import { Link, useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { getReferenceById } from '../reference/registry'
import { NotFound } from './NotFound'

export function ReferenceDetail() {
  const { referenceId } = useParams<{ referenceId: string }>()
  const entry = referenceId ? getReferenceById(referenceId) : undefined

  if (!entry) return <NotFound />

  const { Component } = entry

  return (
    <div className="space-y-4">
      <Link to="/calculators" className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-800">
        <ArrowLeft size={14} /> All Calculators
      </Link>
      <Component />
    </div>
  )
}
