import { type ReactNode } from 'react'

export function ReferenceTable({
  headers,
  rows,
  highlightRowIndex,
}: {
  headers: string[]
  rows: ReactNode[][]
  highlightRowIndex?: number
}) {
  return (
    <div className="overflow-x-auto rounded-lg border border-slate-200">
      <table className="w-full text-sm">
        <thead className="bg-slate-50">
          <tr>
            {headers.map((h, i) => (
              <th key={i} className="text-left font-semibold text-slate-600 px-3 py-2 whitespace-nowrap">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className={
                i === highlightRowIndex
                  ? 'bg-brand-50'
                  : i % 2 === 0
                    ? 'bg-white'
                    : 'bg-slate-50/50'
              }
            >
              {row.map((cell, j) => (
                <td key={j} className="px-3 py-1.5 text-slate-700 whitespace-nowrap">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
