import type { Disease } from '../types/disease'

export interface GeneratedCase {
  vignette: string
  prompt: string
  answer: string
  explanation: string
}

/**
 * Generates a short clinical vignette from a disease's structured data, with
 * the diagnosis withheld until revealed. Pure function of the data layer so
 * it can later be replaced by an AI-generated case service.
 */
export function generateClinicalCase(disease: Disease): GeneratedCase {
  const age = disease.epidemiology.typicalAge ?? 'an adult patient'
  const risk = disease.riskFactors[0]?.label
  const symptoms = disease.symptoms.common.slice(0, 3).join(', ')
  const signs = disease.signs.slice(0, 2).map((s) => `${s.finding.toLowerCase()}`).join('; ')

  const vignetteParts = [
    `A patient (typical presenting age range: ${age}) presents with ${symptoms || 'ocular symptoms'}.`,
    risk ? `Notable history includes ${risk.toLowerCase()}.` : '',
    signs ? `Examination reveals ${signs}.` : '',
  ].filter(Boolean)

  return {
    vignette: vignetteParts.join(' '),
    prompt: 'What is the most likely diagnosis?',
    answer: disease.name,
    explanation: `${disease.definition} Key supporting features: ${symptoms}${
      signs ? `; ${signs}` : ''
    }.`,
  }
}
