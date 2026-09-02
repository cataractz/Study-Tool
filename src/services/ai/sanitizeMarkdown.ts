// Common LaTeX commands the model is instructed not to use, mapped to their plain-Unicode
// equivalent — a safety net in case that instruction is missed, since AIResponse renders through
// a plain Markdown renderer with no math support and would otherwise show "\ge" or "$...$" as
// literal text.
const LATEX_COMMANDS: [RegExp, string][] = [
  [/\\ge(?:q)?\b/g, '≥'],
  [/\\le(?:q)?\b/g, '≤'],
  [/\\neq?\b/g, '≠'],
  [/\\approx\b/g, '≈'],
  [/\\times\b/g, '×'],
  [/\\div\b/g, '÷'],
  [/\\pm\b/g, '±'],
  [/\\cdot\b/g, '·'],
  [/\\(?:rightarrow|to)\b/g, '→'],
  [/\\leftarrow\b/g, '←'],
  [/\\degree\b/g, '°'],
  [/\\alpha\b/g, 'α'],
  [/\\beta\b/g, 'β'],
  [/\\gamma\b/g, 'γ'],
  [/\\delta\b/g, 'δ'],
  [/\\mu\b/g, 'μ'],
]

// Math-shaped content (digits/symbols/single letters, capped short) — used to decide whether a
// $...$ pair is inert leftover math-mode delimiters versus a real "$50" price mention, which
// should be left alone.
const MATH_SHAPED = /^[\s0-9≥≤≠≈×÷±·→←°a-zA-Zαβγδμ.,()+\-^_]{1,24}$/

/** Defensively cleans up formatting the model was told not to produce but might still slip in:
 * raw HTML line breaks (AIResponse's renderer shows unknown HTML as literal text, not formatting)
 * and LaTeX/math-mode notation (there is no math renderer). Best-effort, not a full parser. */
export function sanitizeAIMarkdown(text: string): string {
  let out = text.replace(/<br\s*\/?>/gi, '; ')
  for (const [pattern, replacement] of LATEX_COMMANDS) {
    out = out.replace(pattern, replacement)
  }
  out = out.replace(/\$\$([^$\n]+)\$\$/g, (m, inner) => (MATH_SHAPED.test(inner) ? inner : m))
  out = out.replace(/\$([^$\n]+)\$/g, (m, inner) => (MATH_SHAPED.test(inner) ? inner : m))
  return out
}
