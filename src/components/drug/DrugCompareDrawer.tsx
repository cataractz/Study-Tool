import { X } from 'lucide-react'
import { getDrugById } from '../../services/drugService'

export function DrugCompareDrawer({
  open,
  drugIds,
  onClose,
  onRemove,
}: {
  open: boolean
  drugIds: string[]
  onClose: () => void
  onRemove: (id: string) => void
}) {
  if (!open) return null
  const drugs = drugIds.map((id) => getDrugById(id)).filter((d): d is NonNullable<typeof d> => Boolean(d))

  const rows: { label: string; render: (d: (typeof drugs)[number]) => string }[] = [
    { label: 'Class', render: (d) => d.drugClass },
    { label: 'Mechanism', render: (d) => d.mechanismOfAction },
    { label: 'Typical dosing', render: (d) => d.typicalDosing },
    { label: 'Ocular uses', render: (d) => d.ocularUses.join(', ') || '—' },
    { label: 'Major ocular side effects', render: (d) => d.sideEffects.ocular.slice(0, 3).join(', ') || '—' },
    { label: 'Major systemic side effects', render: (d) => d.sideEffects.systemic.slice(0, 3).join(', ') || '—' },
    { label: 'Contraindications', render: (d) => d.contraindications.slice(0, 3).join(', ') || '—' },
  ]

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/40 p-0 sm:p-6">
      <div className="bg-white w-full sm:max-w-4xl sm:rounded-xl shadow-xl max-h-[90vh] flex flex-col">
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-200">
          <h3 className="text-base font-semibold text-slate-900">Drug Comparison</h3>
          <button onClick={onClose} className="p-1.5 hover:bg-slate-100 rounded-lg cursor-pointer">
            <X size={18} />
          </button>
        </div>
        <div className="overflow-auto p-5">
          {drugs.length === 0 ? (
            <p className="text-sm text-slate-500">Select drugs from the database to compare.</p>
          ) : (
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr>
                  <th className="text-left font-semibold text-slate-500 px-3 py-2 w-40">Feature</th>
                  {drugs.map((d) => (
                    <th key={d.id} className="text-left font-semibold text-slate-900 px-3 py-2">
                      <div className="flex items-center justify-between gap-2">
                        {d.genericName}
                        <button
                          onClick={() => onRemove(d.id)}
                          className="text-slate-300 hover:text-red-500 cursor-pointer"
                        >
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
                    {drugs.map((d) => (
                      <td key={d.id} className="px-3 py-2.5 text-slate-700 align-top">
                        {row.render(d)}
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
