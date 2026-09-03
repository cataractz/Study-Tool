import { Routes, Route } from 'react-router-dom'
import { AppLayout } from './components/layout/AppLayout'
import { Dashboard } from './pages/Dashboard'
import { DiseaseLibrary } from './pages/DiseaseLibrary'
import { DiseaseDetail } from './pages/DiseaseDetail'
import { DifferentialDiagnosis } from './pages/DifferentialDiagnosis'
import { DrugDatabase } from './pages/DrugDatabase'
import { DrugDetail } from './pages/DrugDetail'
import { AIClinicalAssistant } from './pages/AIClinicalAssistant'
import { CalculationsConversions } from './pages/CalculationsConversions'
import { CalculatorDetail } from './pages/CalculatorDetail'
import { References } from './pages/References'
import { ReferenceDetail } from './pages/ReferenceDetail'
import { LensDatabase } from './pages/LensDatabase'
import { LensDetail } from './pages/LensDetail'
import { ExamWorkupHub } from './pages/ExamWorkupHub'
import { ExamTechniqueDetail } from './pages/ExamTechniqueDetail'
import { ClinicalWorkupDetail } from './pages/ClinicalWorkupDetail'
import { DiagnosticTestingHub } from './pages/DiagnosticTestingHub'
import { DiagnosticTestingDetail } from './pages/DiagnosticTestingDetail'
import { NotFound } from './pages/NotFound'

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/diseases" element={<DiseaseLibrary />} />
        <Route path="/diseases/:diseaseId" element={<DiseaseDetail />} />
        <Route path="/differential" element={<DifferentialDiagnosis />} />
        <Route path="/drugs" element={<DrugDatabase />} />
        <Route path="/drugs/:drugId" element={<DrugDetail />} />
        <Route path="/ai-assistant" element={<AIClinicalAssistant />} />
        <Route path="/calculators" element={<CalculationsConversions />} />
        <Route path="/calculators/:calculatorId" element={<CalculatorDetail />} />
        <Route path="/references" element={<References />} />
        <Route path="/references/:referenceId" element={<ReferenceDetail />} />
        <Route path="/lenses" element={<LensDatabase />} />
        <Route path="/lenses/:lensId" element={<LensDetail />} />
        <Route path="/exam-workup" element={<ExamWorkupHub />} />
        <Route path="/exam-workup/technique/:techniqueId" element={<ExamTechniqueDetail />} />
        <Route path="/exam-workup/workup/:workupId" element={<ClinicalWorkupDetail />} />
        <Route path="/diagnostic-testing" element={<DiagnosticTestingHub />} />
        <Route path="/diagnostic-testing/:techniqueId" element={<DiagnosticTestingDetail />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
