import { Outlet } from 'react-router-dom'
import { Brand } from '../components/layout'

/**
 * Centered layout for authentication routes (login, register).
 */
export function AuthLayout() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-50 px-6 py-10 text-slate-900">
      <div className="mb-8">
        <Brand />
      </div>
      <div className="w-full max-w-md">
        <Outlet />
      </div>
    </div>
  )
}
