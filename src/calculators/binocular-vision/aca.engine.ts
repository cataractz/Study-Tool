// AC/A ratio. Sign convention throughout: esophoria = positive, exophoria = negative.
//
// Calculated AC/A = PD(cm) + (near phoria - distance phoria) / add power (D)
// Gradient AC/A = (phoria through lens - baseline phoria) / (-lens power used, D)
//   (a minus lens stimulates accommodation, so its "accommodative stimulus change" is the
//   negative of its dioptric power; a plus lens relaxes accommodation)

export function calculatedACA(pdCm: number, nearPhoria: number, distancePhoria: number, addD: number): number {
  if (addD === 0) throw new Error('Add power cannot be zero.')
  return pdCm + (nearPhoria - distancePhoria) / addD
}

export function gradientACA(baselinePhoria: number, phoriaThroughLens: number, lensPowerD: number): number {
  if (lensPowerD === 0) throw new Error('Lens power used for the gradient cannot be zero.')
  return (phoriaThroughLens - baselinePhoria) / -lensPowerD
}
