import { Link } from 'react-router-dom'
import { ROUTE_PATHS } from '../../routes/routePaths'

export function Brand() {
  return (
    <Link
      to={ROUTE_PATHS.home}
      className="text-lg font-semibold tracking-tight text-slate-900 transition-colors hover:text-emerald-700"
    >
      ClosetToCare
    </Link>
  )
}
