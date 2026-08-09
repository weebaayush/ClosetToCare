import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'
import { ROUTE_PATHS } from '../../routes/routePaths'
import { Brand } from './Brand'
import { publicNavLinks } from './publicNavLinks'

function navLinkClasses(isActive: boolean) {
  return [
    'rounded-lg px-3 py-2 text-sm font-medium transition-colors',
    isActive
      ? 'bg-emerald-50 text-emerald-700'
      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900',
  ].join(' ')
}

/**
 * Public site header: brand, primary navigation, login link, and donate CTA.
 * Collapses into a toggleable panel on small screens.
 */
export function PublicNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-6">
        <Brand />

        {/* Desktop navigation */}
        <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
          {publicNavLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === ROUTE_PATHS.home}
              className={({ isActive }) => navLinkClasses(isActive)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <NavLink
            to={ROUTE_PATHS.auth.login}
            className={({ isActive }) => navLinkClasses(isActive)}
          >
            Login
          </NavLink>
          <Link
            to={ROUTE_PATHS.donor.newDonation}
            className="inline-flex h-10 items-center justify-center rounded-xl bg-emerald-600 px-4 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-emerald-700"
          >
            Donate Now
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-lg text-slate-700 transition-colors hover:bg-slate-100 md:hidden"
          aria-expanded={isMenuOpen}
          aria-controls="public-mobile-nav"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile navigation panel */}
      {isMenuOpen && (
        <nav
          id="public-mobile-nav"
          aria-label="Main"
          className="border-t border-slate-200 bg-white px-6 py-4 md:hidden"
        >
          <ul className="flex flex-col gap-1">
            {publicNavLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === ROUTE_PATHS.home}
                  className={({ isActive }) => ['block', navLinkClasses(isActive)].join(' ')}
                  onClick={closeMenu}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
            <li>
              <NavLink
                to={ROUTE_PATHS.auth.login}
                className={({ isActive }) => ['block', navLinkClasses(isActive)].join(' ')}
                onClick={closeMenu}
              >
                Login
              </NavLink>
            </li>
            <li className="pt-2">
              <Link
                to={ROUTE_PATHS.donor.newDonation}
                className="inline-flex h-11 w-full items-center justify-center rounded-xl bg-emerald-600 px-4 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-emerald-700"
                onClick={closeMenu}
              >
                Donate Now
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
