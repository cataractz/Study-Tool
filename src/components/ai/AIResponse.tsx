import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export function AIResponse({ content }: { content: string }) {
  return (
    <div className="prose-ai text-sm text-slate-800 leading-relaxed">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </div>
  )
}

export const proseAiStyles = `
  .prose-ai :where(h1,h2,h3) { font-weight: 600; color: #0f172a; margin: 0.9em 0 0.4em; }
  .prose-ai h1 { font-size: 1.05rem; }
  .prose-ai h2 { font-size: 1rem; }
  .prose-ai h3 { font-size: 0.925rem; }
  .prose-ai :where(h1,h2,h3):first-child { margin-top: 0; }
  .prose-ai p { margin: 0.5em 0; }
  .prose-ai ul, .prose-ai ol { margin: 0.5em 0; padding-left: 1.3em; }
  .prose-ai li { margin: 0.2em 0; }
  .prose-ai ul { list-style: disc; }
  .prose-ai ol { list-style: decimal; }
  .prose-ai strong { color: #0f172a; font-weight: 600; }
  .prose-ai code { background: #f1f5f9; padding: 0.1em 0.35em; border-radius: 0.3em; font-size: 0.85em; }
  .prose-ai pre { background: #0f172a; color: #e2e8f0; padding: 0.75em 1em; border-radius: 0.5em; overflow-x: auto; margin: 0.6em 0; }
  .prose-ai pre code { background: transparent; padding: 0; }
  .prose-ai table { border-collapse: collapse; width: 100%; margin: 0.6em 0; font-size: 0.875em; }
  .prose-ai th, .prose-ai td { border: 1px solid #e2e8f0; padding: 0.4em 0.6em; text-align: left; vertical-align: top; }
  .prose-ai th { background: #f8fafc; font-weight: 600; }
  .prose-ai blockquote { border-left: 3px solid #cbd5e1; padding-left: 0.8em; color: #475569; margin: 0.6em 0; }
  .prose-ai hr { border: none; border-top: 1px solid #e2e8f0; margin: 0.8em 0; }
  .prose-ai a { color: #2563eb; text-decoration: underline; }
`
