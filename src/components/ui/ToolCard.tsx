import { Link } from 'react-router-dom'
import { type LucideIcon, ArrowRight } from 'lucide-react'
import { Card } from './Card'
import { Badge } from './Badge'

export function ToolCard({
  icon: Icon,
  iconTone,
  title,
  description,
  buttonLabel,
  path,
  comingSoon,
}: {
  icon: LucideIcon
  iconTone: string
  title: string
  description: string
  buttonLabel: string
  path?: string
  comingSoon?: boolean
}) {
  const content = (
    <Card className="h-full flex flex-col group hover:shadow-md hover:border-slate-300 transition-all">
      <div className="flex items-start justify-between mb-4">
        <div
          className="w-11 h-11 rounded-lg flex items-center justify-center"
          style={{ backgroundColor: iconTone }}
        >
          <Icon size={20} className="text-white" />
        </div>
        {comingSoon && <Badge tone="warning">Coming Soon</Badge>}
      </div>
      <h3 className="text-base font-semibold text-slate-900 mb-1.5">{title}</h3>
      <p className="text-sm text-slate-500 leading-relaxed flex-1">{description}</p>
      <div
        className={`mt-4 inline-flex items-center gap-1.5 text-sm font-medium ${
          comingSoon ? 'text-slate-400' : 'text-brand-600 group-hover:gap-2.5 transition-all'
        }`}
      >
        {buttonLabel}
        {!comingSoon && <ArrowRight size={15} />}
      </div>
    </Card>
  )

  if (comingSoon || !path) {
    return <div className="opacity-90 cursor-not-allowed">{content}</div>
  }

  return (
    <Link to={path} className="block h-full">
      {content}
    </Link>
  )
}
