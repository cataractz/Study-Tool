import { getAllDiseases } from './diseaseService'
import type { Disease } from '../types/disease'
import type { DifferentialFindings, DifferentialResult, Urgency } from '../types/differential'
import {
  symptomOptions,
  pupilOptions,
  anteriorSegmentOptions,
  posteriorSegmentOptions,
  visualFieldOptions,
  otherTestingOptions,
  binocularVisionOptions,
  type VocabTerm,
} from '../config/differentialVocab'

const allVocab: VocabTerm[] = [
  ...symptomOptions,
  ...pupilOptions,
  ...anteriorSegmentOptions,
  ...posteriorSegmentOptions,
  ...visualFieldOptions,
  ...otherTestingOptions,
  ...binocularVisionOptions,
]

function vocabKeywords(label: string): string[] {
  return allVocab.find((v) => v.label === label)?.keywords ?? [label.toLowerCase()]
}

function vocabWeight(label: string): number {
  return allVocab.find((v) => v.label === label)?.weight ?? 1
}

function diseaseText(disease: Disease): string {
  return [
    ...disease.symptoms.common,
    ...(disease.symptoms.lessCommon ?? []),
    ...disease.signs.map((s) => s.finding),
    disease.definition,
  ]
    .join(' | ')
    .toLowerCase()
}

function findingMatchesDisease(label: string, text: string): boolean {
  return vocabKeywords(label).some((kw) => text.includes(kw))
}

/**
 * Each exam section paired with the findings the user actually selected in it.
 * A section only participates in pertinent-negative scoring when the user selected
 * at least one finding from it — i.e. that part of the exam was actually performed,
 * so an expected-but-unselected finding is a real negative rather than just missing data.
 */
function buildSections(findings: DifferentialFindings): { vocab: VocabTerm[]; selected: string[] }[] {
  return [
    { vocab: symptomOptions, selected: findings.symptoms },
    { vocab: pupilOptions, selected: findings.pupils },
    { vocab: anteriorSegmentOptions, selected: findings.anteriorSegment },
    { vocab: posteriorSegmentOptions, selected: findings.posteriorSegment },
    { vocab: visualFieldOptions, selected: findings.visualField },
    { vocab: otherTestingOptions, selected: findings.otherTesting },
    { vocab: binocularVisionOptions, selected: findings.binocularVision },
  ]
}

// Only a disease's most specific/pathognomonic-leaning findings (weight 3) count as pertinent
// negatives when absent — penalizing on moderately-specific findings would unfairly ding the
// correct diagnosis just because the user didn't happen to check every related box.
const PERTINENT_NEGATIVE_MIN_WEIGHT = 3
const PERTINENT_NEGATIVE_PENALTY_FACTOR = 0.5

function deriveUrgency(disease: Disease): Urgency {
  const categories = disease.management.map((m) => m.category)
  if (categories.includes('Emergency management')) return 'Emergency'
  if (disease.category === 'Neuro-Ophthalmology' || disease.category === 'Glaucoma') return 'Urgent'
  if (categories.includes('Referral')) return 'Prompt'
  return 'Routine'
}

export function collectAllFindings(findings: DifferentialFindings): string[] {
  const others = [
    findings.symptomsOther,
    findings.pupilsOther,
    findings.anteriorSegmentOther,
    findings.posteriorSegmentOther,
    findings.visualFieldOther,
    findings.otherTestingOther,
    findings.binocularVisionOther,
    findings.npc,
    findings.coverTestDistance,
    findings.coverTestNear,
    findings.vonGraefeDistance,
    findings.vonGraefeNear,
    findings.nra,
    findings.pra,
    findings.biRangeDistance,
    findings.boRangeDistance,
    findings.biRangeNear,
    findings.boRangeNear,
    findings.acaRatio,
    findings.stereoacuity,
    findings.amplitudeOfAccommodation,
  ]
    .map((o) => o?.trim())
    .filter((o): o is string => Boolean(o))

  return [
    ...findings.symptoms,
    ...findings.pupils,
    ...findings.anteriorSegment,
    ...findings.posteriorSegment,
    ...findings.visualField,
    ...findings.otherTesting,
    ...findings.binocularVision,
    ...others,
  ]
}

export function runDifferential(findings: DifferentialFindings, limit = 8): DifferentialResult[] {
  const selected = collectAllFindings(findings)
  if (selected.length === 0) return []

  const diseases = getAllDiseases()
  const sections = buildSections(findings)

  const scored = diseases.map((disease) => {
    const text = diseaseText(disease)
    const matched = selected.filter((label) => findingMatchesDisease(label, text))

    // Positive evidence: each matched finding contributes its clinical-specificity weight,
    // so a pathognomonic sign counts for more than a nonspecific symptom.
    const positiveScore = matched.reduce((sum, label) => sum + vocabWeight(label), 0)
    const possibleScore = selected.reduce((sum, label) => sum + vocabWeight(label), 0)

    // Pertinent negatives: for any exam section the user actually filled in, a highly specific
    // finding that's characteristic of this disease but wasn't selected argues against it.
    const pertinentNegatives: string[] = []
    let negativeScore = 0
    for (const section of sections) {
      if (section.selected.length === 0) continue
      for (const v of section.vocab) {
        if (v.weight < PERTINENT_NEGATIVE_MIN_WEIGHT) continue
        if (section.selected.includes(v.label)) continue
        if (findingMatchesDisease(v.label, text)) {
          pertinentNegatives.push(v.label)
          negativeScore += v.weight * PERTINENT_NEGATIVE_PENALTY_FACTOR
        }
      }
    }

    const rawScore = possibleScore > 0 ? ((positiveScore - negativeScore) / possibleScore) * 100 : 0
    const matchScore = Math.max(0, Math.min(100, Math.round(rawScore)))

    const distinguishing = disease.differentialDiagnosis
      .slice(0, 2)
      .map((d) => d.keyDistinguisher)
      .concat(disease.diagnosticTesting.slice(0, 1).map((t) => `${t.name}: ${t.expectedFinding}`))

    const nextSteps = disease.diagnosticTesting.slice(0, 3).map((t) => t.whyOrdered)
    if (nextSteps.length === 0) {
      const firstLine = disease.management.find((m) => m.category === 'First-line treatment')
      if (firstLine) nextSteps.push(firstLine.detail)
    }

    const result: DifferentialResult = {
      diseaseId: disease.id,
      name: disease.name,
      matchScore,
      whyItMatches: matched,
      findingsAgainst: pertinentNegatives.slice(0, 4),
      distinguishingFactors: distinguishing,
      urgency: deriveUrgency(disease),
      nextSteps,
    }
    return result
  })

  return scored
    .filter((r) => r.matchScore > 0)
    .sort((a, b) => b.matchScore - a.matchScore)
    .slice(0, limit)
}
