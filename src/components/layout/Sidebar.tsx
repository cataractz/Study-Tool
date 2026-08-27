import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import clsx from 'clsx'
import {
  LayoutDashboard,
  BookOpen,
  GitCompare,
  Pill,
  FileText,
  Aperture,
  ScanEye,
  Eye,
  ClipboardList,
  Search as SearchIcon,
  CircleDot,
  FlaskConical,
  ChevronDown,
  Stethoscope,
  Sparkles,
  Calculator,
  type LucideIcon,
} from 'lucide-react'
import { primaryNav, futureToolsNav } from '../../config/navigation'

const iconMap: Record<string, LucideIcon> = {
  'layout-dashboard': LayoutDashboard,
  'book-open': BookOpen,
  'git-compare': GitCompare,
  pill: Pill,
  'file-text': FileText,
  aperture: Aperture,
  'scan-eye': ScanEye,
  eye: Eye,
  'clipboard-list': ClipboardList,
  search: SearchIcon,
  'circle-dot': CircleDot,
  'flask-conical': FlaskConical,
  sparkles: Sparkles,
  calculator: Calculator,
}

export function Sidebar({
  mobileOpen,
  onCloseMobile,
}: {
  mobileOpen: boolean
  onCloseMobile: () => void
}) {
  const [futureOpen, setFutureOpen] = useState(false)

  return (
    <>
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-30 lg:hidden"
          onClick={onCloseMobile}
        />
      )}
      <aside
        className={clsx(
          'fixed lg:sticky top-0 left-0 z-40 h-svh w-64 shrink-0 bg-white border-r border-slate-200 flex flex-col transition-transform lg:translate-x-0',
          mobileOpen ? 'translate-x-0' : '-translate-x-full',
        )}
      >
        <div className="flex items-center gap-2.5 px-5 h-16 border-b border-slate-200 shrink-0">
          <div className="w-8 h-8 rounded-lg bg-brand-600 flex items-center justify-center text-white">
            <Stethoscope size={18} />
          </div>
          <div className="leading-tight">
            <p className="text-sm font-semibold text-slate-900">Optometry Clinical</p>
            <p className="text-xs text-slate-500">Learning Platform</p>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-0.5">
          {primaryNav.map((item) => {
            const Icon = iconMap[item.icon]
            return (
              <NavLink
                key={item.path}
                to={item.path!}
                end={item.path === '/'}
                onClick={onCloseMobile}
                className={({ isActive }) =>
                  clsx(
                    'flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors',
                    isActive
                      ? 'bg-brand-50 text-brand-700'
                      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900',
                  )
                }
              >
                {Icon && <Icon size={17} />}
                {item.label}
              </NavLink>
            )
          })}

          <div className="pt-2">
            <button
              onClick={() => setFutureOpen((o) => !o)}
              className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium text-slate-500 hover:bg-slate-100 hover:text-slate-800 transition-colors cursor-pointer"
            >
              <span>Future Tools</span>
              <ChevronDown
                size={15}
                className={clsx('transition-transform', futureOpen && 'rotate-180')}
              />
            </button>
            {futureOpen && (
              <div className="mt-0.5 space-y-0.5">
                {futureToolsNav.map((item) => {
                  const Icon = iconMap[item.icon]
                  return (
                    <div
                      key={item.label}
                      className="flex items-center justify-between gap-3 pl-6 pr-3 py-2 rounded-lg text-sm text-slate-400 cursor-not-allowed"
                      title="Coming soon"
                    >
                      <span className="flex items-center gap-3">
                        {Icon && <Icon size={16} />}
                        {item.label}
                      </span>
                      <span className="text-[10px] font-semibold uppercase tracking-wide text-slate-300">
                        Soon
                      </span>
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        </nav>

        <div className="p-4 border-t border-slate-200 text-xs text-slate-400 leading-relaxed shrink-0">
          Educational use only. Not a substitute for clinical judgment or
          professional medical advice.
        </div>
      </aside>
    </>
  )
}
