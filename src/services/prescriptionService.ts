import { prescriptionCases } from '../data/cases/prescriptionCases'
import type { PrescriptionCase, PrescriptionDifficulty, PrescriptionSubmission, GradingResult, GradedField } from '../types/prescription'

export function getCasesByDifficulty(difficulty: PrescriptionDifficulty): PrescriptionCase[] {
  return prescriptionCases.filter((c) => c.difficulty === difficulty)
}

export function getRandomCase(difficulty: PrescriptionDifficulty): PrescriptionCase | undefined {
  const pool = getCasesByDifficulty(difficulty)
  if (pool.length === 0) return undefined
  return pool[Math.floor(Math.random() * pool.length)]
}

function normalize(value: string): string {
  return value.trim().toLowerCase()
}

function fieldsMatch(submitted: string, expected: string): boolean {
  const s = normalize(submitted)
  const e = normalize(expected)
  if (!s) return false
  return s === e || e.includes(s) || s.includes(e)
}

const fieldLabels: Record<keyof PrescriptionSubmission, string> = {
  drugId: 'Drug',
  concentration: 'Concentration',
  dosageForm: 'Dosage Form',
  route: 'Route',
  frequency: 'Frequency',
  duration: 'Duration',
  quantity: 'Quantity',
  refills: 'Refills',
  specialInstructions: 'Special Instructions',
}

export function gradeSubmission(prescriptionCase: PrescriptionCase, submission: PrescriptionSubmission): GradingResult {
  const expected = prescriptionCase.correctAnswer
  const keys: (keyof PrescriptionSubmission)[] = [
    'drugId',
    'concentration',
    'dosageForm',
    'route',
    'frequency',
    'duration',
    'quantity',
    'refills',
  ]

  const fields: GradedField[] = keys.map((key) => {
    const submitted = submission[key] ?? ''
    const expectedValue = expected[key] ?? ''
    let correct: boolean
    if (key === 'drugId') {
      correct = prescriptionCase.correctDrugOptions.includes(submitted)
    } else {
      correct = fieldsMatch(submitted, expectedValue)
    }
    return { field: fieldLabels[key], correct, submitted: submitted || '(blank)', expected: expectedValue }
  })

  const whatYouGotRight = fields.filter((f) => f.correct).map((f) => `${f.field}: ${f.submitted}`)
  const whatYouMissed = fields
    .filter((f) => !f.correct)
    .map((f) => `${f.field} — you entered "${f.submitted}", expected "${f.expected}"`)

  return {
    fields,
    score: fields.filter((f) => f.correct).length,
    totalFields: fields.length,
    whatYouGotRight,
    whatYouMissed,
    whyCorrectIsAppropriate: prescriptionCase.reasoning,
  }
}
