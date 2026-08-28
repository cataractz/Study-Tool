import { Link } from 'react-router-dom'
import { findExactLink, linkifySegments, type LinkifyOptions } from '../../services/crossLinkService'

const linkClass = 'text-brand-600 hover:underline font-medium'

/** Renders text with any recognized disease/drug names scanned out and turned into links. Use for
 * prose (sentences, paragraphs) that merely *mentions* a condition or medication in passing. */
export function Linkify({ text, ...options }: { text: string } & LinkifyOptions) {
  const segments = linkifySegments(text, options)
  return (
    <>
      {segments.map((seg, i) =>
        seg.link ? (
          <Link key={i} to={seg.link.path} className={linkClass}>
            {seg.text}
          </Link>
        ) : (
          <span key={i}>{seg.text}</span>
        ),
      )}
    </>
  )
}

/** Renders a short field that is itself meant to literally BE a disease or drug name (e.g. a
 * differential-diagnosis item, an indication list entry). Tries an exact whole-string match first
 * — since the field IS the name, not just a sentence containing it — and only falls back to
 * scanning for a partial match if that fails. */
export function LinkifyLine({ text, ...options }: { text: string } & LinkifyOptions) {
  const exact = findExactLink(text)
  const allowed =
    exact &&
    exact.id !== options.excludeId &&
    (!options.typesAllowed || options.typesAllowed.includes(exact.type))

  if (allowed) {
    return (
      <Link to={exact.path} className={linkClass}>
        {text}
      </Link>
    )
  }
  return <Linkify text={text} {...options} />
}
