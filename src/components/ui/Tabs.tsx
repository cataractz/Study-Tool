import { useState, type ReactNode } from 'react'
import clsx from 'clsx'

export interface TabItem {
  id: string
  label: string
  content: ReactNode
  badge?: ReactNode
}

export function Tabs({
  tabs,
  defaultTab,
  className,
}: {
  tabs: TabItem[]
  defaultTab?: string
  className?: string
}) {
  const [active, setActive] = useState(defaultTab ?? tabs[0]?.id)
  const activeTab = tabs.find((t) => t.id === active) ?? tabs[0]

  return (
    <div className={className}>
      <div className="flex gap-1 border-b border-slate-200 overflow-x-auto no-scrollbar">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActive(tab.id)}
            className={clsx(
              'flex items-center gap-1.5 whitespace-nowrap px-3.5 py-2.5 text-sm font-medium border-b-2 -mb-px transition-colors cursor-pointer',
              active === tab.id
                ? 'border-brand-600 text-brand-700'
                : 'border-transparent text-slate-500 hover:text-slate-800',
            )}
          >
            {tab.label}
            {tab.badge}
          </button>
        ))}
      </div>
      <div className="pt-4">{activeTab?.content}</div>
    </div>
  )
}
