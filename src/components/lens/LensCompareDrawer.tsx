import { X } from 'lucide-react'
import { getLensById, formatBaseCurveDiopters } from '../../services/lensService'

export function LensCompareDrawer({
  open,
  lensIds,
  onClose,
  onRemove,
}: {
  open: boolean
  lensIds: string[]
  onClose: () => void
  onRemove: (id: string) => void
}) {
  if (!open) return null
  const lenses = lensIds.map((id) => getLensById(id)).filter((l): l is NonNullable<typeof l> => Boolean(l))

  const rows: { label: string; render: (l: (typeof lenses)[number]) => string }[] = [
    { label: 'Design', render: (l) => l.design },
    { label: 'Material', render: (l) => `${l.materialClass}${l.materialName ? ` — ${l.materialName}` : ''}` },
    { label: 'Water content', render: (l) => l.waterContent ?? '—' },
    { label: 'Dk/t', render: (l) => l.dkt ?? (l.dk ? `Dk ${l.dk}` : '—') },
    { label: 'Base curve(s)', render: (l) => l.baseCurves.map(formatBaseCurveDiopters).join('; ') },
    { label: 'Diameter', render: (l) => l.diameter },
    { label: 'Sphere range', render: (l) => l.sphereRange },
    { label: 'Cylinder range', render: (l) => l.cylinderRange ?? '—' },
    { label: 'Add powers', render: (l) => l.addPowers ?? '—' },
    { label: 'Replacement', render: (l) => l.replacementSchedule },
    { label: 'Wear schedule', render: (l) => l.wearSchedule },
    { label: 'UV blocking', render: (l) => (l.uvBlocking === undefined ? 'Not confirmed' : l.uvBlocking ? 'Yes' : 'No') },
    { label: 'Handling tint', render: (l) => (l.handlingTint ? 'Yes' : 'No') },
  ]

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/40 p-0 sm:p-6">
      <div className="bg-white w-full sm:max-w-4xl sm:rounded-xl shadow-xl max-h-[90vh] flex flex-col">
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-200">
          <h3 className="text-base font-semibold text-slate-900">Lens Comparison</h3>
          <button onClick={onClose} className="p-1.5 hover:bg-slate-100 rounded-lg cursor-pointer">
            <X size={18} />
          </button>
        </div>
        <div className="overflow-auto p-5">
          {lenses.length === 0 ? (
            <p className="text-sm text-slate-500">Select lenses from the database to compare.</p>
          ) : (
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr>
                  <th className="text-left font-semibold text-slate-500 px-3 py-2 w-40">Parameter</th>
                  {lenses.map((l) => (
                    <th key={l.id} className="text-left font-semibold text-slate-900 px-3 py-2">
                      <div className="flex items-center justify-between gap-2">
                        {l.brand}
                        <button onClick={() => onRemove(l.id)} className="text-slate-300 hover:text-red-500 cursor-pointer">
                          <X size={14} />
                        </button>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.label} className="border-t border-slate-100">
                    <td className="px-3 py-2.5 text-slate-500 font-medium align-top">{row.label}</td>
                    {lenses.map((l) => (
                      <td key={l.id} className="px-3 py-2.5 text-slate-700 align-top">
                        {row.render(l)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  )
}
