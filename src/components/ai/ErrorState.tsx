import { AlertTriangle, RotateCcw } from 'lucide-react'

export function ErrorState({ message, onRetry }: { message: string; onRetry?: () => void }) {
  return (
    <div className="flex items-start gap-2.5 rounded-lg border border-red-200 bg-red-50 px-3.5 py-3 text-sm text-red-800">
      <AlertTriangle size={16} className="shrink-0 mt-0.5 text-red-500" />
      <div className="flex-1 min-w-0">
        <p>{message}</p>
        {onRetry && (
          <button
            onClick={onRetry}
            className="inline-flex items-center gap-1 mt-2 text-xs font-medium text-red-700 hover:text-red-900 cursor-pointer"
          >
            <RotateCcw size={12} /> Retry
          </button>
        )}
      </div>
    </div>
  )
}
