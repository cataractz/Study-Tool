import { Link } from 'react-router-dom'
import { EmptyState } from '../components/ui/EmptyState'
import { CompassIcon } from 'lucide-react'
import { Button } from '../components/ui/Button'

export function NotFound() {
  return (
    <div className="flex flex-col items-center gap-4">
      <EmptyState
        icon={CompassIcon}
        title="Page not found"
        description="The page you're looking for doesn't exist or hasn't been built yet."
      />
      <Link to="/">
        <Button variant="outline">Back to Dashboard</Button>
      </Link>
    </div>
  )
}
