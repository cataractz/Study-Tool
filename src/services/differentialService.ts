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

  const scored = diseases.map((disease) => {
    const text = diseaseText(disease)
    const matched = selected.filter((label) => findingMatchesDisease(label, text))
    const matchScore = Math.round((matched.length / selected.length) * 100)

    const unmatchedCommon = disease.symptoms.common.filter(
      (s) => !selected.some((label) => vocabKeywords(label).some((kw) => s.toLowerCase().includes(kw))),
    )

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
      findingsAgainst: unmatchedCommon.slice(0, 4),
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
