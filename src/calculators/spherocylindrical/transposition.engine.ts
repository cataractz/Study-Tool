import { normalizeAxis } from '../shared/format'
import type { SphCylRx } from '../ophthalmic-optics/spectacleContactLens.engine'

/**
 * Transposes a spherocylindrical Rx between plus-cylinder and minus-cylinder form.
 * New sphere = old sphere + old cylinder
 * New cylinder = -(old cylinder)
 * New axis = old axis ± 90°, normalized to 1-180°
 * This is symmetric — the same operation converts plus->minus and minus->plus.
 */
export function transpose(rx: SphCylRx): SphCylRx {
  return {
    sphere: rx.sphere + rx.cylinder,
    cylinder: -rx.cylinder,
    axis: normalizeAxis(rx.axis + 90),
  }
}
