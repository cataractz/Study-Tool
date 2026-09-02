import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Search, RotateCcw, Info, Sparkles } from 'lucide-react'
import { Card } from '../components/ui/Card'
import { Button } from '../components/ui/Button'
import { Section } from '../components/ui/Section'
import { EmptyState } from '../components/ui/EmptyState'
import { MultiSelectChips } from '../components/differential/MultiSelectChips'
import { DifferentialResultCard } from '../components/differential/DifferentialResultCard'
import { AIDifferentialPanel } from '../components/differential/AIDifferentialPanel'
import {
  symptomOptions,
  pupilOptions,
  anteriorSegmentOptions,
  posteriorSegmentOptions,
  visualFieldOptions,
  otherTestingOptions,
} from '../config/differentialVocab'
import { runDifferential } from '../services/differentialService'
import { buildDifferentialContext } from '../services/ai/contextService'
import type { DifferentialFindings, DifferentialResult } from '../types/differential'
import { GitCompare } from 'lucide-react'

const emptyFindings: DifferentialFindings = {
  age: '',
  sex: '',
  history: '',
  chiefComplaint: '',
  duration: '',
  laterality: '',
  symptoms: [],
  symptomsOther: '',
  vaOD: '',
  vaOS: '',
  pupils: [],
  pupilsOther: '',
  iopOD: '',
  iopOS: '',
  anteriorSegment: [],
  anteriorSegmentOther: '',
  posteriorSegment: [],
  posteriorSegmentOther: '',
  visualField: [],
  visualFieldOther: '',
  otherTesting: [],
  otherTestingOther: '',
  otherTestingDetails: {},
  binocularVision: [],
  binocularVisionOther: '',
  npc: '',
  coverTestDistance: '',
  coverTestNear: '',
  vonGraefeDistance: '',
  vonGraefeNear: '',
  nra: '',
  pra: '',
  biRangeDistance: '',
  boRangeDistance: '',
  biRangeNear: '',
  boRangeNear: '',
  acaRatio: '',
  stereoacuity: '',
  amplitudeOfAccommodation: '',
}

export function DifferentialDiagnosis() {
  const [findings, setFindings] = useState<DifferentialFindings>(emptyFindings)
  const [results, setResults] = useState<DifferentialResult[] | null>(null)
  const navigate = useNavigate()
  const [resetKey, setResetKey] = useState(0)

  function update<K extends keyof DifferentialFindings>(key: K, value: DifferentialFindings[K]) {
    setFindings((f) => ({ ...f, [key]: value }))
  }

  function handleSubmit() {
    setResults(runDifferential(findings))
  }

  function handleReset() {
    setResetKey((k) => k + 1)
    setFindings(emptyFindings)
    setResults(null)
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-semibold text-slate-900 tracking-tight">
          Differential Diagnosis
        </h1>
        <p className="text-slate-500 mt-1">
          Enter clinical findings using the structured controls below to build a ranked
          differential diagnosis.
        </p>
      </div>

      <AIDifferentialPanel findings={findings} results={results} />

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-6 items-start">
        <div className="space-y-6">
          <Section title="Patient">
            <Card className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field label="Age">
                <input className="input" value={findings.age} onChange={(e) => update('age', e.target.value)} placeholder="e.g. 34" />
              </Field>
              <Field label="Sex">
                <select className="input" value={findings.sex} onChange={(e) => update('sex', e.target.value)}>
                  <option value="">Select</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </Field>
              <Field label="Chief complaint">
                <input className="input" value={findings.chiefComplaint} onChange={(e) => update('chiefComplaint', e.target.value)} placeholder="e.g. painful red eye" />
              </Field>
              <Field label="Duration">
                <input className="input" value={findings.duration} onChange={(e) => update('duration', e.target.value)} placeholder="e.g. 2 days" />
              </Field>
              <Field label="Laterality">
                <select className="input" value={findings.laterality} onChange={(e) => update('laterality', e.target.value)}>
                  <option value="">Select</option>
                  <option value="OD">OD (right)</option>
                  <option value="OS">OS (left)</option>
                  <option value="OU">OU (both)</option>
                </select>
              </Field>
              <Field label="Relevant history">
                <input className="input" value={findings.history} onChange={(e) => update('history', e.target.value)} placeholder="e.g. contact lens wearer" />
              </Field>
            </Card>
          </Section>

          <Section title="Symptoms">
            <Card>
              <MultiSelectChips
                key={`symptoms-${resetKey}`}
                options={symptomOptions}
                selected={findings.symptoms}
                onChange={(v) => update('symptoms', v)}
                otherValue={findings.symptomsOther}
                onOtherChange={(v) => update('symptomsOther', v)}
                otherPlaceholder="Describe the symptom..."
              />
            </Card>
          </Section>

          <Section title="Visual Acuity & IOP">
            <Card className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <Field label="VA OD"><input className="input" value={findings.vaOD} onChange={(e) => update('vaOD', e.target.value)} placeholder="20/20" /></Field>
              <Field label="VA OS"><input className="input" value={findings.vaOS} onChange={(e) => update('vaOS', e.target.value)} placeholder="20/20" /></Field>
              <Field label="IOP OD"><input className="input" value={findings.iopOD} onChange={(e) => update('iopOD', e.target.value)} placeholder="16" /></Field>
              <Field label="IOP OS"><input className="input" value={findings.iopOS} onChange={(e) => update('iopOS', e.target.value)} placeholder="16" /></Field>
            </Card>
          </Section>

          <Section title="Pupils">
            <Card>
              <MultiSelectChips
                key={`pupils-${resetKey}`}
                options={pupilOptions}
                selected={findings.pupils}
                onChange={(v) => update('pupils', v)}
                otherValue={findings.pupilsOther}
                onOtherChange={(v) => update('pupilsOther', v)}
                otherPlaceholder="Describe the pupil finding..."
              />
            </Card>
          </Section>

          <Section title="Anterior Segment">
            <Card>
              <MultiSelectChips
                key={`anterior-${resetKey}`}
                options={anteriorSegmentOptions}
                selected={findings.anteriorSegment}
                onChange={(v) => update('anteriorSegment', v)}
                otherValue={findings.anteriorSegmentOther}
                onOtherChange={(v) => update('anteriorSegmentOther', v)}
                otherPlaceholder="Describe the anterior segment finding..."
              />
            </Card>
          </Section>

          <Section title="Posterior Segment">
            <Card>
              <MultiSelectChips
                key={`posterior-${resetKey}`}
                options={posteriorSegmentOptions}
                selected={findings.posteriorSegment}
                onChange={(v) => update('posteriorSegment', v)}
                otherValue={findings.posteriorSegmentOther}
                onOtherChange={(v) => update('posteriorSegmentOther', v)}
                otherPlaceholder="Describe the posterior segment finding..."
              />
            </Card>
          </Section>

          <Section title="Visual Field">
            <Card>
              <MultiSelectChips
                key={`visualfield-${resetKey}`}
                options={visualFieldOptions}
                selected={findings.visualField}
                onChange={(v) => update('visualField', v)}
                otherValue={findings.visualFieldOther}
                onOtherChange={(v) => update('visualFieldOther', v)}
                otherPlaceholder="Describe the visual field defect..."
              />
            </Card>
          </Section>

          <Section title="Other Testing">
            <Card>
              <MultiSelectChips
                key={`othertesting-${resetKey}`}
                options={otherTestingOptions}
                selected={findings.otherTesting}
                onChange={(v) => update('otherTesting', v)}
                otherValue={findings.otherTestingOther}
                onOtherChange={(v) => update('otherTestingOther', v)}
                otherPlaceholder="Describe the test/finding..."
                details={findings.otherTestingDetails}
                onDetailChange={(label, value) =>
                  update('otherTestingDetails', { ...findings.otherTestingDetails, [label]: value })
                }
                detailPlaceholder="Value or what you observed..."
              />
            </Card>
          </Section>

          <Section title="Binocular Vision & Accommodative Testing">
            <div className="space-y-3">
              <Card className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <Field label="NPC (break/recovery)">
                  <input className="input" value={findings.npc} onChange={(e) => update('npc', e.target.value)} placeholder="e.g. 6cm / 10cm" />
                </Field>
                <Field label="Cover Test — Distance">
                  <input className="input" value={findings.coverTestDistance} onChange={(e) => update('coverTestDistance', e.target.value)} placeholder="e.g. 4Δ XP'" />
                </Field>
                <Field label="Cover Test — Near">
                  <input className="input" value={findings.coverTestNear} onChange={(e) => update('coverTestNear', e.target.value)} placeholder="e.g. 10Δ XP'" />
                </Field>
                <Field label="Von Graefe Phoria — Distance">
                  <input className="input" value={findings.vonGraefeDistance} onChange={(e) => update('vonGraefeDistance', e.target.value)} placeholder="e.g. 2Δ exophoria" />
                </Field>
                <Field label="Von Graefe Phoria — Near">
                  <input className="input" value={findings.vonGraefeNear} onChange={(e) => update('vonGraefeNear', e.target.value)} placeholder="e.g. 8Δ exophoria" />
                </Field>
                <Field label="AC/A Ratio">
                  <input className="input" value={findings.acaRatio} onChange={(e) => update('acaRatio', e.target.value)} placeholder="e.g. 6:1" />
                </Field>
              </Card>

              <Card>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400 mb-3">
                  Vergence Ranges (prism diopters, blur/break/recovery)
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <Field label="BI — Distance">
                    <input className="input" value={findings.biRangeDistance} onChange={(e) => update('biRangeDistance', e.target.value)} placeholder="e.g. x/6/3" />
                  </Field>
                  <Field label="BO — Distance">
                    <input className="input" value={findings.boRangeDistance} onChange={(e) => update('boRangeDistance', e.target.value)} placeholder="e.g. x/14/8" />
                  </Field>
                  <Field label="BI — Near">
                    <input className="input" value={findings.biRangeNear} onChange={(e) => update('biRangeNear', e.target.value)} placeholder="e.g. 12/16/10" />
                  </Field>
                  <Field label="BO — Near">
                    <input className="input" value={findings.boRangeNear} onChange={(e) => update('boRangeNear', e.target.value)} placeholder="e.g. 14/22/10" />
                  </Field>
                </div>
              </Card>

              <Card className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <Field label="NRA">
                  <input className="input" value={findings.nra} onChange={(e) => update('nra', e.target.value)} placeholder="e.g. +2.00" />
                </Field>
                <Field label="PRA">
                  <input className="input" value={findings.pra} onChange={(e) => update('pra', e.target.value)} placeholder="e.g. -2.50" />
                </Field>
                <Field label="Amplitude of Accommodation">
                  <input className="input" value={findings.amplitudeOfAccommodation} onChange={(e) => update('amplitudeOfAccommodation', e.target.value)} placeholder="e.g. 8.00 D" />
                </Field>
                <Field label="Stereoacuity">
                  <input className="input" value={findings.stereoacuity} onChange={(e) => update('stereoacuity', e.target.value)} placeholder="e.g. 40 arc sec" />
                </Field>
              </Card>

            </div>
          </Section>

          <div className="flex gap-3">
            <Button icon={<Search size={16} />} onClick={handleSubmit}>
              Generate Differential
            </Button>
            <Button variant="outline" icon={<RotateCcw size={16} />} onClick={handleReset}>
              Reset
            </Button>
          </div>
        </div>

        <div className="lg:sticky lg:top-24 space-y-4">
          {results === null && (
            <EmptyState
              icon={GitCompare}
              title="No differential generated yet"
              description="Select findings on the left, then click Generate Differential to see a ranked list of matching conditions."
            />
          )}

          {results !== null && results.length === 0 && (
            <EmptyState
              icon={GitCompare}
              title="No matches found"
              description="Try selecting more findings, or broaden your selections to match conditions in the database."
            />
          )}

          {results !== null && results.length > 0 && (
            <>
              <Card className="bg-slate-50 border-slate-200 flex gap-2.5">
                <Info size={16} className="text-slate-400 shrink-0 mt-0.5" />
                <p className="text-xs text-slate-500 leading-relaxed">
                  Conditions are listed in order of likelihood, and each is labeled{' '}
                  <span className="font-medium text-slate-700">High</span>,{' '}
                  <span className="font-medium text-slate-700">Moderate</span>,{' '}
                  <span className="font-medium text-slate-700">Low</span>, or{' '}
                  <span className="font-medium text-slate-700">Possible</span> based on how closely
                  your entered findings match that condition's typical presentation, judged
                  independently per condition — so it's normal for a couple of candidates to land
                  in the same tier, or for every candidate to come back "Possible" when only a few
                  nonspecific findings were entered. This is a qualitative fit label, not a
                  validated diagnostic probability, and it doesn't replace clinical judgment.
                </p>
              </Card>
              <Button
                variant="outline"
                size="sm"
                icon={<Sparkles size={14} />}
                onClick={() =>
                  navigate('/ai-assistant', {
                    state: {
                      context: buildDifferentialContext(findings, results),
                      mode: 'differential-diagnosis',
                    },
                  })
                }
              >
                Explain This Differential
              </Button>
              {results.map((r, i) => (
                <DifferentialResultCard key={r.diseaseId} result={r} rank={i + 1} />
              ))}
            </>
          )}
        </div>
      </div>

      <style>{`.input { border: 1px solid #cbd5e1; border-radius: 0.5rem; padding: 0.5rem 0.75rem; font-size: 0.875rem; background: white; width: 100%; } .input:focus { outline: none; box-shadow: 0 0 0 2px #3b82f6; border-color: #3b82f6; }`}</style>
    </div>
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
