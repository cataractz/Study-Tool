import {
  BookOpen,
  GitCompare,
  Pill,
  FileText,
  Aperture,
  ScanEye,
  Eye,
  ClipboardList,
  Search,
  CircleDot,
  FlaskConical,
} from 'lucide-react'
import { ToolCard } from '../components/ui/ToolCard'
import { Card } from '../components/ui/Card'
import { getAllDiseases } from '../services/diseaseService'
import { getAllDrugs } from '../services/drugService'

export function Dashboard() {
  const diseaseCount = getAllDiseases().length
  const drugCount = getAllDrugs().length

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl lg:text-3xl font-semibold text-slate-900 tracking-tight">
          Optometry Clinical Learning
        </h1>
        <p className="text-slate-500 mt-1.5 max-w-2xl">
          Interactive tools for learning ocular disease, pharmacology, diagnosis, and clinical
          decision-making.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <Card className="text-center py-4">
          <p className="text-2xl font-semibold text-slate-900">{diseaseCount}</p>
          <p className="text-xs text-slate-500 mt-0.5">Diseases in library</p>
        </Card>
        <Card className="text-center py-4">
          <p className="text-2xl font-semibold text-slate-900">{drugCount}</p>
          <p className="text-xs text-slate-500 mt-0.5">Drugs in database</p>
        </Card>
        <Card className="text-center py-4">
          <p className="text-2xl font-semibold text-slate-900">4</p>
          <p className="text-xs text-slate-500 mt-0.5">Active tools</p>
        </Card>
        <Card className="text-center py-4">
          <p className="text-2xl font-semibold text-slate-900">7</p>
          <p className="text-xs text-slate-500 mt-0.5">Tools coming soon</p>
        </Card>
      </div>

      <div>
        <h2 className="text-lg font-semibold text-slate-900 mb-3">Learning Tools</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <ToolCard
            icon={BookOpen}
            iconTone="#2563eb"
            title="Teach Me This Disease"
            description="Learn an ocular disease from definition through management using a structured clinical framework."
            buttonLabel="Open Disease Trainer"
            path="/diseases"
          />
          <ToolCard
            icon={GitCompare}
            iconTone="#0d9488"
            title="Differential Diagnosis"
            description="Enter clinical findings and build a ranked differential diagnosis."
            buttonLabel="Open Differential Engine"
            path="/differential"
          />
          <ToolCard
            icon={Pill}
            iconTone="#7c3aed"
            title="Drug Database"
            description="Search ocular and systemic medications and review their clinical relevance to optometry."
            buttonLabel="Open Drug Database"
            path="/drugs"
          />
          <ToolCard
            icon={FileText}
            iconTone="#b45309"
            title="Prescription Trainer"
            description="Practice selecting medications and writing complete ophthalmic prescriptions."
            buttonLabel="Practice Prescribing"
            path="/prescription-trainer"
          />
        </div>
      </div>

      <div>
        <h2 className="text-lg font-semibold text-slate-900 mb-3">Future Tools</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <ToolCard icon={Aperture} iconTone="#94a3b8" title="Optics" description="Vergence, lenses, and optical calculations for clinical practice." buttonLabel="Coming Soon" comingSoon />
          <ToolCard icon={ScanEye} iconTone="#94a3b8" title="Retinoscopy" description="Practice objective refraction technique and interpretation." buttonLabel="Coming Soon" comingSoon />
          <ToolCard icon={Eye} iconTone="#94a3b8" title="Binocular Vision" description="Vergence, accommodation, and binocular vision disorders." buttonLabel="Coming Soon" comingSoon />
          <ToolCard icon={ClipboardList} iconTone="#94a3b8" title="Clinical Cases" description="Full patient workups spanning history through management." buttonLabel="Coming Soon" comingSoon />
          <ToolCard icon={Search} iconTone="#94a3b8" title="Slit Lamp" description="Interactive slit lamp finding recognition and technique." buttonLabel="Coming Soon" comingSoon />
          <ToolCard icon={CircleDot} iconTone="#94a3b8" title="Fundus" description="Fundus photo interpretation and posterior segment findings." buttonLabel="Coming Soon" comingSoon />
          <ToolCard icon={FlaskConical} iconTone="#94a3b8" title="Pharmacology" description="Deep-dive pharmacology mechanisms and interactions." buttonLabel="Coming Soon" comingSoon />
        </div>
      </div>
    </div>
  )
}
