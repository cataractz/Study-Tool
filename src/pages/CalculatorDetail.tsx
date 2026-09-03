import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { getCalculatorById } from '../calculators/registry'
import { addRecent } from '../calculators/shared/storage'
import { NotFound } from './NotFound'

export function CalculatorDetail() {
  const { calculatorId } = useParams<{ calculatorId: string }>()
  const entry = calculatorId ? getCalculatorById(calculatorId) : undefined

  useEffect(() => {
    if (calculatorId) addRecent(calculatorId)
  }, [calculatorId])

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
