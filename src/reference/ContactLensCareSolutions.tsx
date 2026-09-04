import { ReferenceShell } from './shared/ReferenceShell'
import { CareSolutions } from '../components/lens/CareSolutions'
import type { ReferenceMeta } from '../types/reference'

export const meta: ReferenceMeta = {
  id: 'contact-lens-care-solutions',
  name: 'Contact Lens Care Solutions & Disinfection',
  category: 'Contact Lenses',
  description:
    'Solution types, active ingredients/preservatives, named commercial products, the ISO 14729 disinfection standard, solution-associated complications, and the contact lens-related corneal infiltrative event spectrum.',
  keywords: [
    'multipurpose solution',
    'MPS',
    'hydrogen peroxide',
    'saline',
    'enzymatic cleaner',
    'RGP conditioning solution',
    'preservative',
    'PHMB',
    'polyquad',
    'chlorhexidine',
    'ISO 14729',
    'Acanthamoeba',
    'Fusarium',
    'lens care',
    'disinfection',
  ],
}

/**
 * Thin wrapper promoting the existing Care Solutions content (already rendered inside the Lens
 * Database's "Care Solutions" tab) into the reference-table registry, so it is also independently
 * browsable/searchable/favoritable from the References hub and global search. The underlying
 * `CareSolutions` component is reused unchanged — this is not a second copy of the content.
 */
export function ContactLensCareSolutions() {
  return (
    <ReferenceShell meta={meta}>
      <CareSolutions />
    </ReferenceShell>
  )
}
