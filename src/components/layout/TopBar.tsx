import { Menu } from 'lucide-react'
import { GlobalSearch } from './GlobalSearch'
import { OfflineBadge } from '../pwa/OfflineBadge'

export function TopBar({ onMenuClick }: { onMenuClick: () => void }) {
  return (
    <header className="sticky top-0 z-20 h-16 bg-white/90 backdrop-blur border-b border-slate-200 flex items-center gap-3 px-4 lg:px-6 shrink-0">
      <button
        onClick={onMenuClick}
        className="lg:hidden p-2 -ml-2 text-slate-600 hover:bg-slate-100 rounded-lg cursor-pointer"
        aria-label="Open navigation"
      >
        <Menu size={20} />
      </button>
      <div className="flex-1 max-w-xl">
        <GlobalSearch />
      </div>
      <OfflineBadge />
    </header>
  )
}
