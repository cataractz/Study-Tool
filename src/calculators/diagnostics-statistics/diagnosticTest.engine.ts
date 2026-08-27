// All standard diagnostic test statistics derived from a single 2x2 table:
//                    Disease present   Disease absent
// Test positive            TP               FP
// Test negative            FN               TN

export interface ConfusionCounts {
  tp: number
  fp: number
  fn: number
  tn: number
}

export interface DiagnosticStats {
  sensitivity: number
  specificity: number
  ppv: number
  npv: number
  falsePositiveRate: number
  falseNegativeRate: number
  positiveLikelihoodRatio: number
  negativeLikelihoodRatio: number
  prevalence: number
}

export function statsFromCounts({ tp, fp, fn, tn }: ConfusionCounts): DiagnosticStats {
  const diseased = tp + fn
  const healthy = fp + tn
  const total = diseased + healthy
  if (diseased === 0) throw new Error('No diseased subjects (TP + FN = 0) — sensitivity is undefined.')
  if (healthy === 0) throw new Error('No healthy subjects (FP + TN = 0) — specificity is undefined.')

  const sensitivity = tp / diseased
  const specificity = tn / healthy
  const positiveTests = tp + fp
  const negativeTests = fn + tn

  return {
    sensitivity,
    specificity,
    ppv: positiveTests === 0 ? NaN : tp / positiveTests,
    npv: negativeTests === 0 ? NaN : tn / negativeTests,
    falsePositiveRate: 1 - specificity,
    falseNegativeRate: 1 - sensitivity,
    positiveLikelihoodRatio: specificity === 1 ? Infinity : sensitivity / (1 - specificity),
    negativeLikelihoodRatio: specificity === 0 ? Infinity : (1 - sensitivity) / specificity,
    prevalence: total === 0 ? NaN : diseased / total,
  }
}

/**
 * PPV/NPV at an arbitrary prevalence, given sensitivity and specificity (Bayes' theorem).
 * Useful for the common exam framing: "given Se/Sp, what is PPV at a prevalence of X%?"
 */
export function predictiveValuesAtPrevalence(sensitivity: number, specificity: number, prevalence: number): { ppv: number; npv: number } {
  const truePositive = sensitivity * prevalence
  const falsePositive = (1 - specificity) * (1 - prevalence)
  const trueNegative = specificity * (1 - prevalence)
  const falseNegative = (1 - sensitivity) * prevalence
  const ppvDenominator = truePositive + falsePositive
  const npvDenominator = trueNegative + falseNegative
  return {
    ppv: ppvDenominator === 0 ? NaN : truePositive / ppvDenominator,
    npv: npvDenominator === 0 ? NaN : trueNegative / npvDenominator,
  }
}
