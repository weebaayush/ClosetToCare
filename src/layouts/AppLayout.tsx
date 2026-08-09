import { Outlet } from 'react-router-dom'

/**
 * Root application shell. All routes render inside this layout, which is the
 * place to mount app-wide chrome (toasts, modals, providers) later on.
 */
export function AppLayout() {
  return <Outlet />
}
