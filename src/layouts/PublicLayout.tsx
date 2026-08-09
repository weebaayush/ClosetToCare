import { Outlet } from 'react-router-dom'
import { PublicFooter, PublicNav } from '../components/layout'

/**
 * Layout for public-facing routes such as the home page.
 */
export function PublicLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900">
      <PublicNav />
      <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-10">
        <Outlet />
      </main>
      <PublicFooter />
    </div>
  )
}
