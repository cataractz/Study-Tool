import { useState } from 'react'
import { FileCheck } from 'lucide-react'
import { Card } from '../ui/Card'
import { Button } from '../ui/Button'
import { getAllDrugs } from '../../services/drugService'
import type { PrescriptionCase, PrescriptionSubmission } from '../../types/prescription'

const dosageForms = ['Solution', 'Suspension', 'Ointment', 'Gel', 'Tablet', 'Capsule']
const routes = ['Topical ophthalmic', 'Oral', 'Intravenous', 'Subconjunctival']

export function PrescriptionForm({
  prescriptionCase,
  onSubmit,
}: {
  prescriptionCase: PrescriptionCase
  onSubmit: (submission: PrescriptionSubmission) => void
}) {
  const drugOptions = Array.from(
    new Set([...prescriptionCase.correctDrugOptions, ...prescriptionCase.distractorDrugIds]),
  )
  const drugs = getAllDrugs().filter((d) => drugOptions.includes(d.id))

  const [submission, setSubmission] = useState<PrescriptionSubmission>({
    drugId: '',
    concentration: '',
    dosageForm: '',
    route: 'Topical ophthalmic',
    frequency: '',
    duration: '',
    quantity: '',
    refills: '',
    specialInstructions: '',
  })

  function update<K extends keyof PrescriptionSubmission>(key: K, value: PrescriptionSubmission[K]) {
    setSubmission((s) => ({ ...s, [key]: value }))
  }

  const canSubmit = submission.drugId && submission.frequency && submission.duration

  return (
    <Card className="space-y-4">
      <p className="text-sm font-semibold text-slate-900">Construct the Prescription</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="Drug">
          <select className="input" value={submission.drugId} onChange={(e) => update('drugId', e.target.value)}>
            <option value="">Select a medication</option>
            {drugs.map((d) => (
              <option key={d.id} value={d.id}>{d.genericName}</option>
            ))}
          </select>
        </Field>
        <Field label="Concentration">
          <input className="input" value={submission.concentration} onChange={(e) => update('concentration', e.target.value)} placeholder="e.g. 0.5%" />
        </Field>
        <Field label="Dosage Form">
          <select className="input" value={submission.dosageForm} onChange={(e) => update('dosageForm', e.target.value)}>
            <option value="">Select</option>
            {dosageForms.map((f) => <option key={f} value={f}>{f}</option>)}
          </select>
        </Field>
        <Field label="Route">
          <select className="input" value={submission.route} onChange={(e) => update('route', e.target.value)}>
            {routes.map((r) => <option key={r} value={r}>{r}</option>)}
          </select>
        </Field>
        <Field label="Frequency">
          <input className="input" value={submission.frequency} onChange={(e) => update('frequency', e.target.value)} placeholder="e.g. Three times daily" />
        </Field>
        <Field label="Duration">
          <input className="input" value={submission.duration} onChange={(e) => update('duration', e.target.value)} placeholder="e.g. 7 days" />
        </Field>
        <Field label="Quantity">
          <input className="input" value={submission.quantity} onChange={(e) => update('quantity', e.target.value)} placeholder="e.g. 1 bottle (5mL)" />
        </Field>
        <Field label="Refills">
          <input className="input" value={submission.refills} onChange={(e) => update('refills', e.target.value)} placeholder="e.g. 0" />
        </Field>
      </div>
      <Field label="Special Instructions">
        <textarea
          className="input min-h-[70px]"
          value={submission.specialInstructions}
          onChange={(e) => update('specialInstructions', e.target.value)}
          placeholder="Counseling points, tapering instructions, precautions..."
        />
      </Field>

      <Button icon={<FileCheck size={16} />} disabled={!canSubmit} onClick={() => onSubmit(submission)}>
        Submit Prescription
      </Button>

      <style>{`.input { border: 1px solid #cbd5e1; border-radius: 0.5rem; padding: 0.5rem 0.75rem; font-size: 0.875rem; background: white; width: 100%; } .input:focus { outline: none; box-shadow: 0 0 0 2px #3b82f6; border-color: #3b82f6; }`}</style>
    </Card>
  )
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-xs font-medium text-slate-500 mb-1 block">{label}</span>
      {children}
    </label>
  )
}
