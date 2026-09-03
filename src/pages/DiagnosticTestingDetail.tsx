import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ExamTechniqueDetailView } from '../components/shared/ExamTechniqueDetailView'
import { getExamTechniqueById } from '../services/examTechniqueService'
import { isExamWorkupFavorite, toggleExamWorkupFavorite } from '../services/examTechniqueFavorites'

export function DiagnosticTestingDetail() {
  const { techniqueId } = useParams<{ techniqueId: string }>()
  const technique = techniqueId ? getExamTechniqueById(techniqueId) : undefined
  const [fav, setFav] = useState(false)

  useEffect(() => {
    if (technique) setFav(isExamWorkupFavorite(technique.id))
    window.scrollTo(0, 0)
  }, [technique])

  return (
    <ExamTechniqueDetailView
      technique={technique}
      backTo="/diagnostic-testing"
      backLabel="Diagnostic Testing & Imaging"
      techniqueLinkPrefix="/diagnostic-testing"
      fav={fav}
      onToggleFavorite={() =>
        technique && setFav(toggleExamWorkupFavorite(technique.id).includes(technique.id))
      }
    />
  )
}
