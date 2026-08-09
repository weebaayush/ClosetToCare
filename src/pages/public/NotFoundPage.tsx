import { Home } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '../../components/ui'
import { ROUTE_PATHS } from '../../routes/routePaths'

export function NotFoundPage() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 py-12 text-center">
      <p className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-800">
        404 Error
      </p>
      <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
        Page not found
      </h1>
      <p className="mt-4 max-w-md text-base leading-7 text-slate-600">
        Sorry, we couldn’t find the page you’re looking for. It might have been moved, deleted, or doesn't exist yet.
      </p>
      <div className="mt-10">
        <Link to={ROUTE_PATHS.home}>
          <Button size="lg" leftIcon={<Home className="size-4" aria-hidden="true" />}>
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  )
}
