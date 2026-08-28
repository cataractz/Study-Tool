import { Routes, Route } from 'react-router-dom'
import { AppLayout } from './components/layout/AppLayout'
import { Dashboard } from './pages/Dashboard'
import { DiseaseLibrary } from './pages/DiseaseLibrary'
import { DiseaseDetail } from './pages/DiseaseDetail'
import { DifferentialDiagnosis } from './pages/DifferentialDiagnosis'
import { DrugDatabase } from './pages/DrugDatabase'
import { DrugDetail } from './pages/DrugDetail'
import { PrescriptionTrainer } from './pages/PrescriptionTrainer'
import { AIClinicalAssistant } from './pages/AIClinicalAssistant'
import { CalculationsConversions } from './pages/CalculationsConversions'
import { CalculatorDetail } from './pages/CalculatorDetail'
import { ReferenceDetail } from './pages/ReferenceDetail'
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
        <Route path="/prescription-trainer" element={<PrescriptionTrainer />} />
        <Route path="/ai-assistant" element={<AIClinicalAssistant />} />
        <Route path="/calculators" element={<CalculationsConversions />} />
        <Route path="/calculators/reference/:referenceId" element={<ReferenceDetail />} />
        <Route path="/calculators/:calculatorId" element={<CalculatorDetail />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
