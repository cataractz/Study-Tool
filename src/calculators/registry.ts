import type { ComponentType } from 'react'
import type { CalculatorMeta } from '../types/calculator'

import { UnitConversions, meta as unitConversionsMeta } from './general/UnitConversions'
import { FocalLengthDiopter, meta as focalLengthMeta } from './ophthalmic-optics/FocalLengthDiopter'
import { Vergence, meta as vergenceMeta } from './ophthalmic-optics/Vergence'
import { LensCombination, meta as lensCombinationMeta } from './ophthalmic-optics/LensCombination'
import { VertexPower, meta as vertexPowerMeta } from './ophthalmic-optics/VertexPower'
import { SpectacleContactLens, meta as spectacleContactLensMeta } from './ophthalmic-optics/SpectacleContactLens'
import { Transposition, meta as transpositionMeta } from './spherocylindrical/Transposition'
import { SphericalEquivalent, meta as sphericalEquivalentMeta } from './spherocylindrical/SphericalEquivalent'
import { MeridionalPower, meta as meridionalPowerMeta } from './spherocylindrical/MeridionalPower'
import { PrenticesRule, meta as prenticesRuleMeta } from './prism/PrenticesRule'
import { PrismCombination, meta as prismCombinationMeta } from './prism/PrismCombination'
import { PrismResolution, meta as prismResolutionMeta } from './prism/PrismResolution'
import { ACA, meta as acaMeta } from './binocular-vision/ACA'
import { SheardsCriterion, meta as sheardsCriterionMeta } from './binocular-vision/SheardsCriterion'
import { PercivalsCriterion, meta as percivalsCriterionMeta } from './binocular-vision/PercivalsCriterion'
import { CACRatio, meta as cacRatioMeta } from './binocular-vision/CACRatio'
import { FixationDisparity, meta as fixationDisparityMeta } from './binocular-vision/FixationDisparity'
import { Accommodation, meta as accommodationMeta } from './accommodation/Accommodation'
import { NraPra, meta as nraPraMeta } from './accommodation/NraPra'
import { AccommodativeLagLead, meta as accommodativeLagLeadMeta } from './accommodation/AccommodativeLagLead'
import { AccommodativeReserve, meta as accommodativeReserveMeta } from './accommodation/AccommodativeReserve'
import { AmplitudeOfAccommodationHofstetter, meta as amplitudeHofstetterMeta } from './accommodation/AmplitudeOfAccommodationHofstetter'
import { VisualAcuity, meta as visualAcuityMeta } from './visual-acuity/VisualAcuity'
import { Keratometry, meta as keratometryMeta } from './keratometry/Keratometry'
import { ConcentrationConverter, meta as concentrationMeta } from './pharmacology/ConcentrationConverter'
import { DilutionCalculator, meta as dilutionMeta } from './pharmacology/DilutionCalculator'
import { DoseCalculator, meta as doseMeta } from './pharmacology/DoseCalculator'
import { OphthalmicDrops, meta as ophthalmicDropsMeta } from './pharmacology/OphthalmicDrops'
import { DiagnosticTestStatistics, meta as diagnosticTestMeta } from './diagnostics-statistics/DiagnosticTestStatistics'
import { RiskStatistics, meta as riskStatisticsMeta } from './diagnostics-statistics/RiskStatistics'
import { PerfusionPressure, meta as perfusionPressureMeta } from './ocular-hemodynamics/PerfusionPressure'
import { TearLens, meta as tearLensMeta } from './contact-lenses/TearLens'
import { RgpFinalPower, meta as rgpFinalPowerMeta } from './contact-lenses/RgpFinalPower'
import { LARS, meta as larsMeta } from './contact-lenses/LARS'
import { SagittalDepth, meta as sagittalDepthMeta } from './contact-lenses/SagittalDepth'
import { OxygenTransmissibility, meta as oxygenTransmissibilityMeta } from './contact-lenses/OxygenTransmissibility'
import { LinearAxialMagnification, meta as linearAxialMagnificationMeta } from './visual-optics/LinearAxialMagnification'
import { AngularMagnification, meta as angularMagnificationMeta } from './visual-optics/AngularMagnification'
import { SpectacleMagnification, meta as spectacleMagnificationMeta } from './visual-optics/SpectacleMagnification'
import { RetinalImageAniseikonia, meta as retinalImageAniseikoniaMeta } from './visual-optics/RetinalImageAniseikonia'
import { LowVisionMagnification, meta as lowVisionMagnificationMeta } from './low-vision/LowVisionMagnification'
import { TelescopeMagnification, meta as telescopeMagnificationMeta } from './low-vision/TelescopeMagnification'
import { AgeCalculator, meta as ageCalculatorMeta } from './clinical-utilities/AgeCalculator'
import { DateFollowUpCalculator, meta as dateFollowUpMeta } from './clinical-utilities/DateFollowUpCalculator'
import { WavelengthFrequencyEnergy, meta as wavelengthFrequencyMeta } from './physical-optics/WavelengthFrequencyEnergy'
import { Diffraction, meta as diffractionMeta } from './physical-optics/Diffraction'
import { Polarization, meta as polarizationMeta } from './physical-optics/Polarization'
import { FresnelReflection, meta as fresnelReflectionMeta } from './physical-optics/FresnelReflection'
import { Photometry, meta as photometryMeta } from './physical-optics/Photometry'
import { Mirror, meta as mirrorMeta } from './physical-optics/Mirror'
import { LensThicknessWeight, meta as lensThicknessWeightMeta } from './ophthalmic-optics/LensThicknessWeight'
import { RelativeSpectacleMagnification, meta as relativeSpectacleMagnificationMeta } from './visual-optics/RelativeSpectacleMagnification'
import { ContactLensDiameter, meta as contactLensDiameterMeta } from './contact-lenses/ContactLensDiameter'

export interface CalculatorEntry {
  meta: CalculatorMeta
  Component: ComponentType
}

export const calculatorRegistry: CalculatorEntry[] = [
  { meta: unitConversionsMeta, Component: UnitConversions },
  { meta: focalLengthMeta, Component: FocalLengthDiopter },
  { meta: vergenceMeta, Component: Vergence },
  { meta: lensCombinationMeta, Component: LensCombination },
  { meta: vertexPowerMeta, Component: VertexPower },
  { meta: spectacleContactLensMeta, Component: SpectacleContactLens },
  { meta: transpositionMeta, Component: Transposition },
  { meta: sphericalEquivalentMeta, Component: SphericalEquivalent },
  { meta: meridionalPowerMeta, Component: MeridionalPower },
  { meta: prenticesRuleMeta, Component: PrenticesRule },
  { meta: prismCombinationMeta, Component: PrismCombination },
  { meta: prismResolutionMeta, Component: PrismResolution },
  { meta: acaMeta, Component: ACA },
  { meta: sheardsCriterionMeta, Component: SheardsCriterion },
  { meta: percivalsCriterionMeta, Component: PercivalsCriterion },
  { meta: cacRatioMeta, Component: CACRatio },
  { meta: fixationDisparityMeta, Component: FixationDisparity },
  { meta: accommodationMeta, Component: Accommodation },
  { meta: nraPraMeta, Component: NraPra },
  { meta: accommodativeLagLeadMeta, Component: AccommodativeLagLead },
  { meta: accommodativeReserveMeta, Component: AccommodativeReserve },
  { meta: amplitudeHofstetterMeta, Component: AmplitudeOfAccommodationHofstetter },
  { meta: visualAcuityMeta, Component: VisualAcuity },
  { meta: keratometryMeta, Component: Keratometry },
  { meta: concentrationMeta, Component: ConcentrationConverter },
  { meta: dilutionMeta, Component: DilutionCalculator },
  { meta: doseMeta, Component: DoseCalculator },
  { meta: ophthalmicDropsMeta, Component: OphthalmicDrops },
  { meta: diagnosticTestMeta, Component: DiagnosticTestStatistics },
  { meta: riskStatisticsMeta, Component: RiskStatistics },
  { meta: perfusionPressureMeta, Component: PerfusionPressure },
  { meta: tearLensMeta, Component: TearLens },
  { meta: rgpFinalPowerMeta, Component: RgpFinalPower },
  { meta: larsMeta, Component: LARS },
  { meta: sagittalDepthMeta, Component: SagittalDepth },
  { meta: oxygenTransmissibilityMeta, Component: OxygenTransmissibility },
  { meta: linearAxialMagnificationMeta, Component: LinearAxialMagnification },
  { meta: angularMagnificationMeta, Component: AngularMagnification },
  { meta: spectacleMagnificationMeta, Component: SpectacleMagnification },
  { meta: retinalImageAniseikoniaMeta, Component: RetinalImageAniseikonia },
  { meta: lowVisionMagnificationMeta, Component: LowVisionMagnification },
  { meta: telescopeMagnificationMeta, Component: TelescopeMagnification },
  { meta: ageCalculatorMeta, Component: AgeCalculator },
  { meta: dateFollowUpMeta, Component: DateFollowUpCalculator },
  { meta: wavelengthFrequencyMeta, Component: WavelengthFrequencyEnergy },
  { meta: diffractionMeta, Component: Diffraction },
  { meta: polarizationMeta, Component: Polarization },
  { meta: fresnelReflectionMeta, Component: FresnelReflection },
  { meta: photometryMeta, Component: Photometry },
  { meta: mirrorMeta, Component: Mirror },
  { meta: lensThicknessWeightMeta, Component: LensThicknessWeight },
  { meta: relativeSpectacleMagnificationMeta, Component: RelativeSpectacleMagnification },
  { meta: contactLensDiameterMeta, Component: ContactLensDiameter },
]

export function getCalculatorById(id: string): CalculatorEntry | undefined {
  return calculatorRegistry.find((c) => c.meta.id === id)
}

export function searchCalculators(query: string): CalculatorEntry[] {
  const q = query.trim().toLowerCase()
  if (!q) return calculatorRegistry
  return calculatorRegistry.filter((c) => {
    const haystack = [c.meta.name, c.meta.description, c.meta.formula, c.meta.category, ...c.meta.keywords].join(' ').toLowerCase()
    return haystack.includes(q)
  })
}

export const categories: CalculatorMeta['category'][] = Array.from(new Set(calculatorRegistry.map((c) => c.meta.category)))
