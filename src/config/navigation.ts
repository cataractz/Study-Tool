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
  { label: 'Prescription Trainer', path: '/prescription-trainer', icon: 'file-text' },
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
