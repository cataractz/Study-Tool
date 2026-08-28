export type LensDesign =
  | 'Soft Spherical'
  | 'Soft Toric'
  | 'Soft Multifocal'
  | 'Soft Multifocal Toric'
  | 'RGP Spherical'
  | 'RGP Toric'
  | 'RGP Multifocal'
  | 'Scleral'
  | 'Hybrid'

export type MaterialClass =
  | 'Silicone hydrogel'
  | 'Hydrogel'
  | 'RGP (rigid gas permeable)'
  | 'Hybrid (RGP center / soft skirt)'

export type ReplacementSchedule =
  | 'Daily disposable'
  | 'Bi-weekly (2 weeks)'
  | 'Monthly (4 weeks)'
  | 'Quarterly to annual (custom RGP/scleral)'

export type WearSchedule = 'Daily wear only' | 'Extended wear (up to 6 nights)' | 'Extended wear (up to 30 nights)'

export interface ContactLens {
  id: string
  brand: string
  manufacturer: string
  design: LensDesign
  materialClass: MaterialClass
  /** USAN adopted name for the lens material, e.g. "senofilcon A" — blank for lab-custom RGP/scleral entries that cover a material family rather than one branded product. */
  materialName?: string
  /** FDA hydrogel material group (I-IV), applicable to non-silicone hydrogel soft lenses only. */
  fdaGroup?: 'I' | 'II' | 'III' | 'IV'
  waterContent?: string
  dkt?: string
  dk?: string
  baseCurves: string[]
  diameter: string
  sphereRange: string
  cylinderRange?: string
  axesAvailable?: string
  addPowers?: string
  centerThickness?: string
  replacementSchedule: ReplacementSchedule
  wearSchedule: WearSchedule
  /** Undefined when the manufacturer's current UV-blocking claim couldn't be confirmed — never
   * inferred, since telling a wearer a lens blocks UV when it doesn't (or vice versa) is a real
   * clinical/counseling error, not just a wrong spec. */
  uvBlocking?: boolean
  handlingTint: boolean
  edgeDesign?: string
  bestFor: string[]
  clinicalNotes: string[]
  /** Calculator ids (from the Contact Lenses calculator category) relevant to fitting this lens. */
  relatedCalculatorIds?: string[]
}
