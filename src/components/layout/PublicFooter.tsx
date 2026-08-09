import { HeartHandshake } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ROUTE_PATHS } from '../../routes/routePaths'
import { Brand } from './Brand'
import { publicNavLinks } from './publicNavLinks'

/**
 * Public site footer: brand, product description, navigation links,
 * donate CTA, and copyright.
 */
export function PublicFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-12 md:grid-cols-[1.2fr_0.8fr_1fr]">
        <div className="max-w-sm">
          <Brand />
          <p className="mt-3 text-sm leading-6 text-slate-600">
            ClosetToCare is a donation and reuse platform that connects donors with verified NGOs
            and beneficiaries, giving clothes and household items a second life.
          </p>
        </div>

        <nav aria-label="Footer">
          <p className="text-sm font-semibold text-slate-900">Explore</p>
          <ul className="mt-3 flex flex-col gap-2">
            {publicNavLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-sm text-slate-600 transition-colors hover:text-emerald-700"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to={ROUTE_PATHS.auth.login}
                className="text-sm text-slate-600 transition-colors hover:text-emerald-700"
              >
                Login
              </Link>
            </li>
          </ul>
        </nav>

        <div>
          <p className="text-sm font-semibold text-slate-900">Ready to give?</p>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Your unused clothes and household items can make a difference.
          </p>
          <Link
            to={ROUTE_PATHS.donor.newDonation}
            className="mt-4 inline-flex h-10 items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-emerald-700"
          >
            <HeartHandshake className="size-4" aria-hidden="true" />
            Donate Now
          </Link>
        </div>
      </div>

      <div className="border-t border-slate-200">
        <div className="mx-auto w-full max-w-6xl px-6 py-4">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} ClosetToCare. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
