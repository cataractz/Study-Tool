import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ChevronLeft, GraduationCap, Stethoscope, GitCompare, Sparkles, EyeOff, Eye } from 'lucide-react'
import { Badge } from '../components/ui/Badge'
import { Card } from '../components/ui/Card'
import { Button } from '../components/ui/Button'
import { Section } from '../components/ui/Section'
import { EmptyState } from '../components/ui/EmptyState'
import { SignsByArea } from '../components/disease/SignsByArea'
import { RiskFactorList } from '../components/disease/RiskFactorList'
import { ManagementList } from '../components/disease/ManagementList'
import { QuizPanel } from '../components/disease/QuizPanel'
import { CasePanel } from '../components/disease/CasePanel'
import { CompareDiseasesPanel } from '../components/disease/CompareDiseasesPanel'
import { getDiseaseById } from '../services/diseaseService'

type InteractivePanel = 'quiz' | 'case' | 'compare' | null

export function DiseaseDetail() {
  const { diseaseId } = useParams<{ diseaseId: string }>()
  const disease = diseaseId ? getDiseaseById(diseaseId) : undefined
  const [activePanel, setActivePanel] = useState<InteractivePanel>(null)
  const [showHighYield, setShowHighYield] = useState(true)

  useEffect(() => {
    setActivePanel(null)
    window.scrollTo(0, 0)
  }, [diseaseId])

  if (!disease) {
    return (
      <div className="space-y-4">
        <Link to="/diseases" className="inline-flex items-center gap-1 text-sm text-brand-600 hover:underline">
          <ChevronLeft size={15} /> Back to Disease Library
        </Link>
        <EmptyState
          icon={Stethoscope}
          title="Disease not found"
          description="This disease isn't in the library yet. Browse the full library to find one."
        />
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <Link to="/diseases" className="inline-flex items-center gap-1 text-sm text-brand-600 hover:underline mb-3">
          <ChevronLeft size={15} /> Back to Disease Library
        </Link>
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <Badge tone="brand">{disease.category}</Badge>
              {disease.aliases && disease.aliases.length > 0 && (
                <span className="text-xs text-slate-400">aka {disease.aliases.join(', ')}</span>
              )}
            </div>
            <h1 className="text-2xl lg:text-3xl font-semibold text-slate-900 tracking-tight">
              {disease.name}
            </h1>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mt-4">
          <Button
            size="sm"
            variant={activePanel === 'quiz' ? 'primary' : 'outline'}
            icon={<GraduationCap size={15} />}
            onClick={() => setActivePanel(activePanel === 'quiz' ? null : 'quiz')}
          >
            Quiz Me
          </Button>
          <Button
            size="sm"
            variant={activePanel === 'case' ? 'primary' : 'outline'}
            icon={<Stethoscope size={15} />}
            onClick={() => setActivePanel(activePanel === 'case' ? null : 'case')}
          >
            Give Me a Clinical Case
          </Button>
          <Button
            size="sm"
            variant={activePanel === 'compare' ? 'primary' : 'outline'}
            icon={<GitCompare size={15} />}
            onClick={() => setActivePanel(activePanel === 'compare' ? null : 'compare')}
          >
            Compare With Another Disease
          </Button>
          <Button
            size="sm"
            variant="outline"
            icon={showHighYield ? <EyeOff size={15} /> : <Eye size={15} />}
            onClick={() => setShowHighYield((v) => !v)}
          >
            {showHighYield ? 'Hide High-Yield' : 'Show High-Yield Facts'}
          </Button>
        </div>
      </div>

      {activePanel && (
        <Card className="bg-slate-50/60 border-slate-200">
          {activePanel === 'quiz' && <QuizPanel disease={disease} />}
          {activePanel === 'case' && <CasePanel disease={disease} />}
          {activePanel === 'compare' && <CompareDiseasesPanel disease={disease} />}
        </Card>
      )}

      <Section title="1. Definition">
        <div className="prose-clinical text-slate-700 text-sm">
          <p>{disease.definition}</p>
          <p>
            <span className="font-medium text-slate-900">Affected structure: </span>
            {disease.affectedStructure}
          </p>
          <p>
            <span className="font-medium text-slate-900">Pathological process: </span>
            {disease.pathologicalProcess}
          </p>
        </div>
      </Section>

      <Section title="2. Epidemiology">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
          {disease.epidemiology.typicalAge && (
            <Card className="py-3"><span className="text-slate-400 text-xs">Typical age</span><p className="text-slate-800">{disease.epidemiology.typicalAge}</p></Card>
          )}
          {disease.epidemiology.sexDistribution && (
            <Card className="py-3"><span className="text-slate-400 text-xs">Sex distribution</span><p className="text-slate-800">{disease.epidemiology.sexDistribution}</p></Card>
          )}
          {disease.epidemiology.prevalence && (
            <Card className="py-3"><span className="text-slate-400 text-xs">Prevalence / incidence</span><p className="text-slate-800">{disease.epidemiology.prevalence}</p></Card>
          )}
          {disease.epidemiology.importantPopulations && (
            <Card className="py-3"><span className="text-slate-400 text-xs">Important populations</span><p className="text-slate-800">{disease.epidemiology.importantPopulations}</p></Card>
          )}
        </div>
      </Section>

      <Section title="3. Risk Factors">
        <RiskFactorList riskFactors={disease.riskFactors} />
      </Section>

      <Section title="4. Pathophysiology">
        <Card>
          <ol className="space-y-2">
            {disease.pathophysiology.map((step, i) => (
              <li key={i} className="flex gap-3 text-sm text-slate-700">
                <span className="shrink-0 w-5 h-5 rounded-full bg-brand-100 text-brand-700 text-xs font-semibold flex items-center justify-center mt-0.5">
                  {i + 1}
                </span>
                <span className="leading-relaxed">{step}</span>
              </li>
            ))}
          </ol>
        </Card>
      </Section>

      <Section title="5. Symptoms">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Card>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400 mb-2">Common</p>
            <ul className="text-sm text-slate-700 space-y-1 list-disc pl-4">
              {disease.symptoms.common.map((s, i) => <li key={i}>{s}</li>)}
            </ul>
          </Card>
          {disease.symptoms.lessCommon && disease.symptoms.lessCommon.length > 0 && (
            <Card>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400 mb-2">Less Common</p>
              <ul className="text-sm text-slate-700 space-y-1 list-disc pl-4">
                {disease.symptoms.lessCommon.map((s, i) => <li key={i}>{s}</li>)}
              </ul>
            </Card>
          )}
          {disease.symptoms.importantNegatives && disease.symptoms.importantNegatives.length > 0 && (
            <Card>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400 mb-2">Important Negatives</p>
              <ul className="text-sm text-slate-700 space-y-1 list-disc pl-4">
                {disease.symptoms.importantNegatives.map((s, i) => <li key={i}>{s}</li>)}
              </ul>
            </Card>
          )}
          {disease.symptoms.typicalProgression && (
            <Card>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400 mb-2">Typical Progression</p>
              <p className="text-sm text-slate-700">{disease.symptoms.typicalProgression}</p>
            </Card>
          )}
        </div>
      </Section>

      <Section title="6. Signs">
        <SignsByArea signs={disease.signs} />
      </Section>

      <Section title="7. Differential Diagnosis">
        <div className="space-y-2.5">
          {disease.differentialDiagnosis.map((d, i) => (
            <Card key={i}>
              <p className="text-sm font-semibold text-slate-900 mb-1.5">{d.disease}</p>
              <p className="text-sm text-slate-600"><span className="text-slate-400">Why it looks similar: </span>{d.whySimilar}</p>
              <p className="text-sm text-slate-600 mt-1"><span className="text-slate-400">Key distinguisher: </span>{d.keyDistinguisher}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="8. Diagnostic Testing">
        <Card padded={false} className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="text-left font-semibold text-slate-500 px-4 py-2.5">Test</th>
                <th className="text-left font-semibold text-slate-500 px-4 py-2.5">Why Ordered</th>
                <th className="text-left font-semibold text-slate-500 px-4 py-2.5">Expected Finding</th>
                <th className="text-left font-semibold text-slate-500 px-4 py-2.5">Contribution</th>
              </tr>
            </thead>
            <tbody>
              {disease.diagnosticTesting.map((t, i) => (
                <tr key={i} className="border-b border-slate-100 last:border-0">
                  <td className="px-4 py-2.5 font-medium text-slate-800 align-top whitespace-nowrap">{t.name}</td>
                  <td className="px-4 py-2.5 text-slate-600 align-top">{t.whyOrdered}</td>
                  <td className="px-4 py-2.5 text-slate-600 align-top">{t.expectedFinding}</td>
                  <td className="px-4 py-2.5 text-slate-600 align-top">{t.contribution}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </Section>

      <Section title="9. Diagnosis">
        <Card className="space-y-2 text-sm text-slate-700">
          {disease.diagnosis.criteria && <p><span className="font-medium text-slate-900">Diagnostic criteria: </span>{disease.diagnosis.criteria}</p>}
          <p><span className="font-medium text-slate-900">Confirmation: </span>{disease.diagnosis.confirmation}</p>
          {disease.diagnosis.classification && <p><span className="font-medium text-slate-900">Classification: </span>{disease.diagnosis.classification}</p>}
        </Card>
      </Section>

      <Section title="10. Management">
        <Card>
          <ManagementList items={disease.management} />
        </Card>
      </Section>

      <Section title="11. Follow-Up">
        <Card className="space-y-2 text-sm text-slate-700">
          <p><span className="font-medium text-slate-900">Typical follow-up: </span>{disease.followUp.typical}</p>
          <p><span className="font-medium text-slate-900">What to monitor: </span>{disease.followUp.monitor}</p>
          <p><span className="font-medium text-slate-900">Signs of progression: </span>{disease.followUp.progression}</p>
          {disease.followUp.shortenWhen && <p><span className="font-medium text-slate-900">Shorten follow-up when: </span>{disease.followUp.shortenWhen}</p>}
        </Card>
      </Section>

      <Section title="12. Prognosis">
        <Card className="space-y-2 text-sm text-slate-700">
          <p><span className="font-medium text-slate-900">Typical course: </span>{disease.prognosis.typicalCourse}</p>
          <p><span className="font-medium text-slate-900">Risk of progression: </span>{disease.prognosis.progressionRisk}</p>
          <p><span className="font-medium text-slate-900">Potential complications: </span>{disease.prognosis.complications}</p>
          <p><span className="font-medium text-slate-900">Visual prognosis: </span>{disease.prognosis.visualPrognosis}</p>
        </Card>
      </Section>

      <Section title="13. Clinical Pearls">
        <Card className="bg-amber-50 border-amber-200">
          <ul className="space-y-2">
            {disease.clinicalPearls.map((p, i) => (
              <li key={i} className="flex gap-2 text-sm text-amber-900">
                <Sparkles size={15} className="shrink-0 mt-0.5 text-amber-500" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </Card>
      </Section>

      {showHighYield && (
        <Section title="14. NBEO / Exam High-Yield">
          <Card className="bg-violet-50 border-violet-200">
            <ul className="space-y-2">
              {disease.highYield.map((p, i) => (
                <li key={i} className="flex gap-2 text-sm text-violet-900">
                  <GraduationCap size={15} className="shrink-0 mt-0.5 text-violet-500" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </Card>
        </Section>
      )}
    </div>
  )
}
