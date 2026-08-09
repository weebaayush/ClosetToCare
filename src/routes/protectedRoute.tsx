import { Outlet } from 'react-router-dom'

/**
 * Guard wrapper for routes that will require authentication.
 *
 * Authentication is not implemented yet, so this renders its child routes
 * unconditionally. Once auth exists, this component will redirect
 * unauthenticated users to the login page instead of rendering the Outlet.
 */
export function ProtectedRoute() {
  return <Outlet />
}
