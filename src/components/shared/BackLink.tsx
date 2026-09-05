import type { ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'
import { ChevronLeft, type LucideIcon } from 'lucide-react'

interface BackLinkProps {
  /** Fallback destination used only when there's no in-app history to return to (the page was
   * opened directly via URL, bookmark, or a new tab). */
  to: string
  children: ReactNode
  icon?: LucideIcon
  iconSize?: number
  className?: string
}

/**
 * A "back" control that returns the user to wherever they actually navigated from within the
 * app (via browser history) instead of always jumping to one hardcoded parent page — so
 * following a cross-link from, say, the Pediatrics hub to a Clinical Workup and then hitting
 * "back" returns to Pediatrics, not to the generic Clinical Exam & Workups hub. `to` is used
 * only as a fallback when there's no prior in-app history entry (react-router's BrowserRouter
 * stores an incrementing `idx` on `window.history.state`; `idx === 0` means this is the first
 * entry in the session, i.e. a direct link/bookmark/new tab).
 */
export function BackLink({ to, children, icon: Icon = ChevronLeft, iconSize = 15, className }: BackLinkProps) {
  const navigate = useNavigate()

  function handleClick() {
    const idx = (window.history.state as { idx?: number } | null)?.idx ?? 0
    if (idx > 0) navigate(-1)
    else navigate(to)
  }

  return (
    <button type="button" onClick={handleClick} className={className}>
      <Icon size={iconSize} /> {children}
    </button>
  )
}
