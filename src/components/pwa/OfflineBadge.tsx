import { useEffect, useState } from 'react'
import { WifiOff } from 'lucide-react'

export function OfflineBadge() {
  const [online, setOnline] = useState(navigator.onLine)

  useEffect(() => {
    const goOnline = () => setOnline(true)
    const goOffline = () => setOnline(false)
    window.addEventListener('online', goOnline)
    window.addEventListener('offline', goOffline)
    return () => {
      window.removeEventListener('online', goOnline)
      window.removeEventListener('offline', goOffline)
    }
  }, [])

  if (online) return null

  return (
    <span
      title="No connection detected — everything except the AI Clinical Assistant works from data cached on this device."
      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-xs font-medium shrink-0"
    >
      <WifiOff size={12} /> Offline
    </span>
  )
}
