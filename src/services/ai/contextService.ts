import type { Disease } from '../../types/disease'
import type { Drug } from '../../types/drug'
import type { AIContext } from '../../types/ai'

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
