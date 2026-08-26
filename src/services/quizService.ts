import type { Disease } from '../types/disease'

export interface GeneratedQuizQuestion {
  id: string
  question: string
  choices: string[]
  correctIndex: number
  explanation: string
}

function shuffle<T>(arr: T[]): T[] {
  const copy = [...arr]
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy
}

function buildChoices(correct: string, pool: string[], count = 4): { choices: string[]; correctIndex: number } {
  const distractors = shuffle(pool.filter((p) => p && p !== correct)).slice(0, count - 1)
  const choices = shuffle([correct, ...distractors])
  return { choices, correctIndex: choices.indexOf(correct) }
}

/**
 * Generates a locally-derived quiz from a disease's structured data. Kept as a
 * pure function of the data layer so this can later be swapped for/augmented
 * by an AI-generated question service without changing the UI.
 */
export function generateQuizQuestions(disease: Disease, allDiseases: Disease[]): GeneratedQuizQuestion[] {
  const questions: GeneratedQuizQuestion[] = []
  const otherDiseases = allDiseases.filter((d) => d.id !== disease.id)

  const firstLine = disease.management.find((m) => m.category === 'First-line treatment')
  if (firstLine) {
    const pool = otherDiseases
      .map((d) => d.management.find((m) => m.category === 'First-line treatment')?.detail)
      .filter((v): v is string => Boolean(v))
    const { choices, correctIndex } = buildChoices(firstLine.detail, pool)
    questions.push({
      id: `${disease.id}-q-firstline`,
      question: `What is the first-line treatment approach for ${disease.name}?`,
      choices,
      correctIndex,
      explanation: `First-line management of ${disease.name}: ${firstLine.detail}`,
    })
  }

  const majorRisk = disease.riskFactors.find((r) => r.tier === 'major')
  if (majorRisk) {
    const pool = otherDiseases.flatMap((d) => d.riskFactors.filter((r) => r.tier === 'major').map((r) => r.label))
    const { choices, correctIndex } = buildChoices(majorRisk.label, pool)
    questions.push({
      id: `${disease.id}-q-riskfactor`,
      question: `Which of the following is a major risk factor for ${disease.name}?`,
      choices,
      correctIndex,
      explanation: `${majorRisk.label} is considered a major risk factor for ${disease.name}.`,
    })
  }

  const diff = disease.differentialDiagnosis[0]
  if (diff) {
    const pool = otherDiseases.flatMap((d) => d.differentialDiagnosis.map((x) => x.keyDistinguisher))
    const { choices, correctIndex } = buildChoices(diff.keyDistinguisher, pool)
    questions.push({
      id: `${disease.id}-q-differential`,
      question: `What key finding helps distinguish ${disease.name} from ${diff.disease}?`,
      choices,
      correctIndex,
      explanation: `${diff.keyDistinguisher} (${diff.disease} is a differential because: ${diff.whySimilar})`,
    })
  }

  const test = disease.diagnosticTesting[0]
  if (test) {
    const pool = otherDiseases.flatMap((d) => d.diagnosticTesting.map((t) => t.expectedFinding))
    const { choices, correctIndex } = buildChoices(test.expectedFinding, pool)
    questions.push({
      id: `${disease.id}-q-testing`,
      question: `On ${test.name} in a patient with ${disease.name}, what would you expect to find?`,
      choices,
      correctIndex,
      explanation: `${test.name} is ordered because: ${test.whyOrdered}. Expected finding: ${test.expectedFinding}.`,
    })
  }

  if (disease.highYield.length > 0) {
    const fact = disease.highYield[0]
    const pool = otherDiseases.flatMap((d) => d.highYield.slice(0, 1))
    const { choices, correctIndex } = buildChoices(fact, pool)
    questions.push({
      id: `${disease.id}-q-highyield`,
      question: `Which high-yield fact is most associated with ${disease.name}?`,
      choices,
      correctIndex,
      explanation: fact,
    })
  }

  return questions
}
