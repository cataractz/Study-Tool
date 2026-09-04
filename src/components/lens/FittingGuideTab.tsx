import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight, ClipboardList, Library, Stethoscope } from 'lucide-react'
import { Card } from '../ui/Card'
import { Badge, urgencyTone, type BadgeTone } from '../ui/Badge'
import { getExamTechniqueById } from '../../services/examTechniqueService'
import { getClinicalWorkupById } from '../../services/clinicalWorkupService'
import { getReferenceById } from '../../reference/registry'
import {
  CONTACT_LENS_FITTING_CATEGORIES,
  CONTACT_LENS_CARE_SOLUTIONS_REFERENCE_ID,
  CONTACT_LENS_MYOPIA_CONTROL_WORKUP_ID,
  getContactLensFittingTechniqueIds,
  groupByFittingCategory,
  type ContactLensFittingCategory,
} from '../../data/examTechniques/contactLensFittingMap'
import type { ExamTechnique } from '../../types/examTechnique'

const categoryColors: Record<ContactLensFittingCategory, BadgeTone> = {
  'Soft Lens Fitting': 'brand',
  'RGP Fitting': 'info',
  'Scleral Lens Fitting': 'purple',
  'Specialty Lenses': 'warning',
  'Lens Complications': 'danger',
}

export function FittingGuideTab() {
  const techniques = useMemo(
    () =>
      getContactLensFittingTechniqueIds()
        .map((id) => getExamTechniqueById(id))
        .filter((t): t is ExamTechnique => Boolean(t)),
    [],
  )
  const grouped = useMemo(() => groupByFittingCategory(techniques), [techniques])

  const myopiaControlWorkup = getClinicalWorkupById(CONTACT_LENS_MYOPIA_CONTROL_WORKUP_ID)
  const careSolutionsReference = getReferenceById(CONTACT_LENS_CARE_SOLUTIONS_REFERENCE_ID)

  return (
    <div className="space-y-8">
      <p className="text-sm text-slate-600">
        Fitting and evaluation techniques for every lens modality in the database — soft, RGP,
        scleral, and specialty — organized by lens type, plus the myopia control decision workup
        and the full care solutions reference.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {myopiaControlWorkup && (
          <Link to={`/exam-workup/workup/${myopiaControlWorkup.id}`}>
            <Card className="h-full hover:shadow-md hover:border-slate-300 transition-all flex flex-col">
              <div className="flex items-start justify-between mb-2">
                <Badge tone={urgencyTone(myopiaControlWorkup.urgency)}>{myopiaControlWorkup.urgency}</Badge>
                <ChevronRight size={16} className="text-slate-300" />
              </div>
              <h3 className="text-sm font-semibold text-slate-900 mb-1 flex items-center gap-1.5">
                <ClipboardList size={13} className="text-slate-400 shrink-0" />
                {myopiaControlWorkup.name}
              </h3>
              <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">{myopiaControlWorkup.chiefComplaint}</p>
            </Card>
          </Link>
        )}
        {careSolutionsReference && (
          <Link to={`/references/${careSolutionsReference.meta.id}`}>
            <Card className="h-full hover:shadow-md hover:border-slate-300 transition-all flex flex-col">
              <div className="flex items-start justify-between mb-2">
                <Badge tone="default">Reference</Badge>
                <ChevronRight size={16} className="text-slate-300" />
              </div>
              <h3 className="text-sm font-semibold text-slate-900 mb-1 flex items-center gap-1.5">
                <Library size={13} className="text-slate-400 shrink-0" />
                {careSolutionsReference.meta.name}
              </h3>
              <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">{careSolutionsReference.meta.description}</p>
            </Card>
          </Link>
        )}
      </div>

      {CONTACT_LENS_FITTING_CATEGORIES.map((category) => {
        const items = grouped.get(category) ?? []
        if (items.length === 0) return null
        return (
          <div key={category}>
            <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-3">{category}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {items.map((technique) => (
                <Link key={technique.id} to={`/exam-workup/technique/${technique.id}`}>
                  <Card className="h-full hover:shadow-md hover:border-slate-300 transition-all flex flex-col">
                    <div className="flex items-start justify-between mb-2">
                      <Badge tone={categoryColors[category]}>{technique.section}</Badge>
                      <ChevronRight size={16} className="text-slate-300" />
                    </div>
                    <h3 className="text-sm font-semibold text-slate-900 mb-1 flex items-center gap-1.5">
                      <Stethoscope size={13} className="text-slate-400 shrink-0" />
                      {technique.name}
                    </h3>
                    <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">{technique.purpose}</p>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}
