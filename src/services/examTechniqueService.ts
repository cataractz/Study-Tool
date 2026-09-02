import { allExamTechniques } from '../data/examTechniques'
import type { ExamTechnique, ExamCategory } from '../types/examTechnique'

export function getAllExamTechniques(): ExamTechnique[] {
  return allExamTechniques
}

export function getExamTechniqueById(id: string): ExamTechnique | undefined {
  return allExamTechniques.find((t) => t.id === id)
}

export function getExamTechniquesByCategory(category: ExamCategory): ExamTechnique[] {
  return allExamTechniques.filter((t) => t.category === category)
}

export function getExamCategories(): ExamCategory[] {
  return Array.from(new Set(allExamTechniques.map((t) => t.category)))
}

/** The cross-cutting "Special Tests" filter — techniques tagged `isSpecialTest`, regardless of
 * their primary category (see the ExamCategory doc comment: this is a tag, not a bucket, to avoid
 * duplicating entries like Seidel test or gonioscopy that already live under Cornea/Anterior Chamber). */
export function getSpecialTests(): ExamTechnique[] {
  return allExamTechniques.filter((t) => t.isSpecialTest)
}

export function searchExamTechniques(query: string): ExamTechnique[] {
  const q = query.trim().toLowerCase()
  if (!q) return allExamTechniques
  return allExamTechniques.filter((t) => {
    const haystack = [t.name, ...(t.aliases ?? []), t.category, t.section, t.purpose].join(' ').toLowerCase()
    return haystack.includes(q)
  })
}
