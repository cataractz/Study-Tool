import { type LucideIcon } from 'lucide-react'

export function EmptyState({
  icon: Icon,
  title,
  description,
}: {
  icon: LucideIcon
  title: string
  description: string
}) {
  return (
    <div className="flex flex-col items-center justify-center text-center py-16 px-6 border border-dashed border-slate-300 rounded-xl bg-slate-50">
      <div className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center mb-4">
        <Icon size={22} className="text-slate-400" />
      </div>
      <h3 className="text-base font-semibold text-slate-800">{title}</h3>
      <p className="text-sm text-slate-500 mt-1 max-w-sm">{description}</p>
    </div>
  )
}
