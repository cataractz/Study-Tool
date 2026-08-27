import type { Disease } from '../../types/disease'
import type { Drug } from '../../types/drug'
import type { AIContext } from '../../types/ai'
import type { DifferentialFindings, DifferentialResult } from '../../types/differential'
import type { PrescriptionCase, PrescriptionSubmission, GradingResult } from '../../types/prescription'
import { collectAllFindings } from '../differentialService'

export function buildDiseaseContext(disease: Disease): AIContext {
  const lines = [
    `Disease: ${disease.name}${disease.aliases?.length ? ` (aka ${disease.aliases.join(', ')})` : ''}`,
    `Category: ${disease.category}`,
    `Definition: ${disease.definition}`,
    `Affected structure: ${disease.affectedStructure}`,
    `Pathophysiology: ${disease.pathophysiology.join(' ')}`,
    `Common symptoms: ${disease.symptoms.common.join(', ')}`,
    `Key signs: ${disease.signs.map((s) => s.finding).join('; ')}`,
    `Differential diagnosis: ${disease.differentialDiagnosis.map((d) => d.disease).join(', ')}`,
    `Management: ${disease.management.map((m) => `${m.category}: ${m.detail}`).join(' | ')}`,
    `Clinical pearls: ${disease.clinicalPearls.join(' ')}`,
  ]
  return {
    sourceLabel: `${disease.name} (Disease Library)`,
    summary: lines.join('\n'),
  }
}

export function buildDrugContext(drug: Drug): AIContext {
  const lines = [
    `Medication: ${drug.genericName} (${drug.brandNames.join(', ') || 'no listed brand names'})`,
    `Class: ${drug.drugClass}`,
    `Mechanism: ${drug.mechanismOfAction}`,
    `Indications: ${drug.indications.join(', ')}`,
    `Ocular uses: ${drug.ocularUses.join(', ')}`,
    `Typical dosing: ${drug.typicalDosing}`,
    `Ocular side effects: ${drug.sideEffects.ocular.join('; ')}`,
    `Systemic side effects: ${drug.sideEffects.systemic.join('; ')}`,
    `Contraindications: ${drug.contraindications.join('; ')}`,
    `Drug interactions: ${drug.drugInteractions.join('; ')}`,
  ]
  return {
    sourceLabel: `${drug.genericName} (Drug Database)`,
    summary: lines.join('\n'),
  }
}

const collectFindings = collectAllFindings

export function buildDifferentialContext(findings: DifferentialFindings, results: DifferentialResult[]): AIContext {
  const patientLines = [
    findings.age && `Age: ${findings.age}`,
    findings.sex && `Sex: ${findings.sex}`,
    findings.chiefComplaint && `Chief complaint: ${findings.chiefComplaint}`,
    findings.duration && `Duration: ${findings.duration}`,
    findings.laterality && `Laterality: ${findings.laterality}`,
    findings.history && `Relevant history: ${findings.history}`,
    (findings.vaOD || findings.vaOS) && `VA: OD ${findings.vaOD || '—'} / OS ${findings.vaOS || '—'}`,
    (findings.iopOD || findings.iopOS) && `IOP: OD ${findings.iopOD || '—'} / OS ${findings.iopOS || '—'}`,
  ].filter((l): l is string => Boolean(l))

  const lines = [
    ...patientLines,
    `Selected findings: ${collectFindings(findings).join(', ') || 'none'}`,
    '',
    `Ranked differential produced by the structured matching engine (${results.length} result${results.length === 1 ? '' : 's'}):`,
    ...results
      .slice(0, 8)
      .map(
        (r, i) =>
          `${i + 1}. ${r.name} — match score ${r.matchScore}%, urgency ${r.urgency}. Matched: ${r.whyItMatches.join(', ') || 'none'}. Not reported: ${r.findingsAgainst.join(', ') || 'none'}. Distinguishing factors: ${r.distinguishingFactors.join('; ') || 'none'}.`,
      ),
  ]

  return {
    sourceLabel: 'Differential Diagnosis results (Differential Diagnosis tool)',
    summary: lines.join('\n'),
  }
}

export function buildPrescriptionContext(
  prescriptionCase: PrescriptionCase,
  submission: PrescriptionSubmission,
  result: GradingResult,
): AIContext {
  const lines = [
    `Case (${prescriptionCase.difficulty}): ${prescriptionCase.scenario}`,
    `Patient: ${prescriptionCase.patientContext.age}-year-old ${prescriptionCase.patientContext.sex}${
      prescriptionCase.patientContext.allergies.length ? `, allergies: ${prescriptionCase.patientContext.allergies.join(', ')}` : ''
    }${
      prescriptionCase.patientContext.medicalHistory.length
        ? `, history: ${prescriptionCase.patientContext.medicalHistory.join(', ')}`
        : ''
    }`,
    `Student's submission: drug ${submission.drugId}, ${submission.concentration} ${submission.dosageForm}, ${submission.route}, ${submission.frequency}, duration ${submission.duration}, qty ${submission.quantity}, refills ${submission.refills}${submission.specialInstructions ? `, instructions: ${submission.specialInstructions}` : ''}`,
    `Score: ${result.score}/${result.totalFields}`,
    `Field-by-field grading: ${result.fields.map((f) => `${f.field}: submitted "${f.submitted}" (expected "${f.expected}") — ${f.correct ? 'correct' : 'incorrect'}`).join(' | ')}`,
    `What the student got right: ${result.whatYouGotRight.join(', ') || 'none'}`,
    `What the student missed: ${result.whatYouMissed.join(', ') || 'none'}`,
    `Why the correct prescription is appropriate: ${result.whyCorrectIsAppropriate}`,
  ]

  return {
    sourceLabel: 'Prescription Trainer grading result',
    summary: lines.join('\n'),
  }
}
