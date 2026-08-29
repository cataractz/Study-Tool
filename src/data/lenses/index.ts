import type { ContactLens } from '../../types/lens'
import { dailyDisposableLenses } from './dailyDisposable'
import { frpSphericalLenses } from './frpSpherical'
import { toricLenses } from './torics'
import { multifocalLenses } from './multifocals'
import { rgpAndSpecialtyLenses } from './rgpAndSpecialty'
import { orthokeratologyLenses } from './orthokeratology'

export const allLenses: ContactLens[] = [
  ...dailyDisposableLenses,
  ...frpSphericalLenses,
  ...toricLenses,
  ...multifocalLenses,
  ...rgpAndSpecialtyLenses,
  ...orthokeratologyLenses,
]
