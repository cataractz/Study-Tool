export type CalculatorCategory =
  | 'General Conversions'
  | 'Ophthalmic Optics'
  | 'Visual Optics'
  | 'Spherocylindrical'
  | 'Prism'
  | 'Binocular Vision'
  | 'Accommodation & Near Vision'
  | 'Visual Acuity'
  | 'Keratometry & Cornea'
  | 'Contact Lenses'
  | 'Low Vision'
  | 'Pharmacology'
  | 'Diagnostics & Statistics'
  | 'Ocular Hemodynamics'
  | 'Physical Optics'
  | 'Clinical Utilities'

export type BoardRelevance = 'High' | 'Moderate' | 'Low' | 'Clinical only'

export type Difficulty = 'Basic' | 'Intermediate' | 'Advanced'

/** One symbol used in `formula`, defined for the "Key" shown under it — e.g. { symbol: 'F', meaning: 'Vergence/power (D)' }. */
export interface CalculatorVariable {
  symbol: string
  meaning: string
}

export interface CalculatorMeta {
  id: string
  name: string
  category: CalculatorCategory
  description: string
  /** Display string of the primary formula, e.g. "F = 1 / f" */
  formula: string
  /** Definitions for every symbol in `formula`, rendered as a compact key beneath it. */
  variables?: CalculatorVariable[]
  /** Extra search terms beyond name/description/formula/category */
  keywords: string[]
  boardRelevance: BoardRelevance
  clinicalRelevance: string
  supportsPractice: boolean
  /** Sign convention or important assumption shown in the "About" panel */
  convention?: string
  /** Known limitations / caveats shown in the "About" panel */
  limitations?: string[]
}

/** One answer field in a practice problem — supports multi-part answers (e.g. sphere + cyl + axis). */
export interface PracticeAnswerField {
  key: string
  label: string
  unit?: string
  value: number
  /** Absolute tolerance for correctness, in the same units as `value`. */
  tolerance: number
}

export interface PracticeProblem {
  prompt: string
  difficulty: Difficulty
  answers: PracticeAnswerField[]
  formula: string
  substitution: string
  steps: string[]
  finalAnswerText: string
  why: string
}

export type PracticeGenerator = (difficulty: Difficulty) => PracticeProblem
