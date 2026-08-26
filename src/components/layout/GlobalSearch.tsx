import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Search, BookOpen, Pill } from 'lucide-react'
import { globalSearch, type SearchResult } from '../../services/searchService'

export function GlobalSearch() {
  const [query, setQuery] = useState('')
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  const containerRef = useRef<HTMLDivElement>(null)

  const results: SearchResult[] = query.trim() ? globalSearch(query) : []

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', onClickOutside)
    return () => document.removeEventListener('mousedown', onClickOutside)
  }, [])

  function handleSelect(result: SearchResult) {
    navigate(result.path)
    setQuery('')
    setOpen(false)
  }

  return (
    <div ref={containerRef} className="relative">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={17} />
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value)
            setOpen(true)
          }}
          onFocus={() => setOpen(true)}
          placeholder="Search diseases, drugs..."
          className="w-full rounded-lg border border-slate-300 bg-slate-50 py-2 pl-9 pr-3 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 focus:bg-white transition-colors"
        />
      </div>
      {open && query.trim() && (
        <div className="absolute mt-1.5 w-full bg-white border border-slate-200 rounded-lg shadow-lg overflow-hidden z-50 max-h-80 overflow-y-auto">
          {results.length === 0 ? (
            <div className="px-4 py-3 text-sm text-slate-500">No results found.</div>
          ) : (
            results.map((r) => (
              <button
                key={`${r.type}-${r.id}`}
                onClick={() => handleSelect(r)}
                className="w-full flex items-center gap-3 px-4 py-2.5 text-left hover:bg-slate-50 transition-colors cursor-pointer"
              >
                <div className="w-7 h-7 rounded-md bg-slate-100 flex items-center justify-center shrink-0">
                  {r.type === 'disease' ? (
                    <BookOpen size={14} className="text-brand-600" />
                  ) : (
                    <Pill size={14} className="text-teal-accent" />
                  )}
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-medium text-slate-800 truncate">{r.title}</p>
                  <p className="text-xs text-slate-500">{r.subtitle}</p>
                </div>
              </button>
            ))
          )}
        </div>
      )}
    </div>
  )
}
