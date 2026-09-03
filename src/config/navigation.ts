export interface NavItem {
  label: string
  path?: string
  icon: string
  comingSoon?: boolean
  children?: NavItem[]
}

export const primaryNav: NavItem[] = [
  { label: 'Dashboard', path: '/', icon: 'layout-dashboard' },
  { label: 'Disease Library', path: '/diseases', icon: 'book-open' },
  { label: 'Differential Diagnosis', path: '/differential', icon: 'git-compare' },
  { label: 'Drug Database', path: '/drugs', icon: 'pill' },
  { label: 'AI Clinical Assistant', path: '/ai-assistant', icon: 'sparkles' },
  { label: 'Calculations & Conversions', path: '/calculators', icon: 'calculator' },
  { label: 'References', path: '/references', icon: 'library' },
  { label: 'Contact Lens Database', path: '/lenses', icon: 'disc' },
  { label: 'Clinical Exam & Workups', path: '/exam-workup', icon: 'clipboard-check' },
  { label: 'Diagnostic Testing & Imaging', path: '/diagnostic-testing', icon: 'scan-eye' },
  { label: 'Emergency & Urgent Eye Care', path: '/emergency-care', icon: 'siren' },
  { label: 'Clinical Decision Trees', path: '/decision-trees', icon: 'git-branch' },
]

export const futureToolsNav: NavItem[] = [
  { label: 'Optics', icon: 'aperture', comingSoon: true },
  { label: 'Retinoscopy', icon: 'scan-eye', comingSoon: true },
  { label: 'Binocular Vision', icon: 'eye', comingSoon: true },
  { label: 'Clinical Cases', icon: 'clipboard-list', comingSoon: true },
  { label: 'Slit Lamp', icon: 'search', comingSoon: true },
  { label: 'Fundus', icon: 'circle-dot', comingSoon: true },
  { label: 'Pharmacology', icon: 'flask-conical', comingSoon: true },
]
