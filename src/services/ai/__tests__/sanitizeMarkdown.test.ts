import { describe, it, expect } from 'vitest'
import { sanitizeAIMarkdown } from '../sanitizeMarkdown'

describe('sanitizeAIMarkdown', () => {
  it('replaces raw <br> tags with a separator that keeps a table row intact', () => {
    expect(sanitizeAIMarkdown('Age >= 50<br>- Scalp tenderness<br>- Jaw claudication')).toBe(
      'Age >= 50; - Scalp tenderness; - Jaw claudication',
    )
  })

  it('handles <br/> and <br /> variants case-insensitively', () => {
    expect(sanitizeAIMarkdown('a<br/>b<BR />c<Br>d')).toBe('a; b; c; d')
  })

  it('converts common LaTeX commands to plain Unicode', () => {
    expect(sanitizeAIMarkdown('Age \\ge 50')).toBe('Age ≥ 50')
    expect(sanitizeAIMarkdown('IOP \\le 21')).toBe('IOP ≤ 21')
    expect(sanitizeAIMarkdown('CD ratio \\times 2')).toBe('CD ratio × 2')
    expect(sanitizeAIMarkdown('30 \\pm 5 degrees')).toBe('30 ± 5 degrees')
    expect(sanitizeAIMarkdown('improves \\rightarrow resolves')).toBe('improves → resolves')
  })

  it('strips inert $...$ math delimiters around short math-shaped content', () => {
    expect(sanitizeAIMarkdown('Age $\\ge 50$')).toBe('Age ≥ 50')
    expect(sanitizeAIMarkdown('$\\le 21$ mmHg')).toBe('≤ 21 mmHg')
  })

  it('leaves a real dollar amount alone', () => {
    expect(sanitizeAIMarkdown('The copay is $50 for this visit')).toBe('The copay is $50 for this visit')
  })

  it('leaves ordinary text with no HTML or LaTeX unchanged', () => {
    const text = 'Giant cell arteritis presents with jaw claudication and an elevated ESR.'
    expect(sanitizeAIMarkdown(text)).toBe(text)
  })

  it('handles combined <br> and LaTeX in one table cell', () => {
    expect(sanitizeAIMarkdown('Age $\\ge 50$<br>- Elevated ESR, CRP')).toBe('Age ≥ 50; - Elevated ESR, CRP')
  })
})
