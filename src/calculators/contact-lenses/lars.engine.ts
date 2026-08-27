import { normalizeAxis } from '../shared/format'

// LARS: "Left Add, Right Subtract" — for a toric soft contact lens with a rotation reference
// mark, if the mark rotates to the LEFT as viewed by the EXAMINER looking at the patient's eye
// (not the patient's own left/right), add that many degrees to the axis before reordering; if
// it rotates to the examiner's RIGHT, subtract.
export type RotationDirection = 'left' | 'right'

export function adjustedAxisLARS(orderedAxis: number, rotationDegrees: number, direction: RotationDirection): number {
  const delta = direction === 'left' ? rotationDegrees : -rotationDegrees
  return normalizeAxis(orderedAxis + delta)
}
