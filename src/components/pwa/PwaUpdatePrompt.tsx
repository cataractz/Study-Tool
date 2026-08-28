import { useRegisterSW } from 'virtual:pwa-register/react'
import { RefreshCw, CheckCircle2, X } from 'lucide-react'

/** Registers the service worker and surfaces the two moments a user needs to know about:
 * the site just became available offline for the first time, or a new version was cached and
 * is ready to take over on reload. Silent otherwise — most visits show neither toast. */
export function PwaUpdatePrompt() {
  const { offlineReady: [offlineReady, setOfflineReady], needRefresh: [needRefresh, setNeedRefresh], updateServiceWorker } =
    useRegisterSW({
      onRegisteredSW(_url, registration) {
        // Check for a new version each time the tab regains focus, not just on load — a
        // student who leaves a tab open all day should still get prompted to update.
        if (!registration) return
        document.addEventListener('visibilitychange', () => {
          if (document.visibilityState === 'visible') registration.update()
        })
      },
    })

  function close() {
    setOfflineReady(false)
    setNeedRefresh(false)
  }

  if (!offlineReady && !needRefresh) return null

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-sm">
      <div className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white shadow-lg p-4">
        {needRefresh ? (
          <RefreshCw size={18} className="text-brand-600 shrink-0 mt-0.5" />
        ) : (
          <CheckCircle2 size={18} className="text-emerald-600 shrink-0 mt-0.5" />
        )}
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-slate-900">
            {needRefresh ? 'Update available' : 'Ready to work offline'}
          </p>
          <p className="text-xs text-slate-500 mt-0.5">
            {needRefresh
              ? 'A new version of the site has been downloaded.'
              : 'This site is now cached on your device — the disease library, drug database, calculators, references, and lens database all work with no connection.'}
          </p>
          {needRefresh && (
            <button
              onClick={() => updateServiceWorker(true)}
              className="mt-2 text-xs font-medium text-brand-600 hover:underline cursor-pointer"
            >
              Reload to update
            </button>
          )}
        </div>
        <button
          onClick={close}
          aria-label="Dismiss"
          className="shrink-0 text-slate-400 hover:text-slate-600 cursor-pointer"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  )
}
