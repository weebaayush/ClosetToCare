import { ArrowRight, LockKeyhole, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button, Card, CardBody, Input } from '../../components/ui'
import { ROUTE_PATHS } from '../../routes/routePaths'

export function LoginPage() {
  return (
    <Card className="overflow-hidden border-emerald-100 shadow-lg shadow-emerald-100/40">
      <div className="h-1.5 bg-gradient-to-r from-emerald-500 via-emerald-400 to-amber-200" />
      <CardBody className="p-6 sm:p-8">
        <div className="text-center">
          <p className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-800">
            ClosetToCare access
          </p>
          <h1 className="mt-5 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Welcome back
          </h1>
          <p className="mt-4 text-sm leading-6 text-slate-600 sm:text-base">
            Sign in to continue your donation journey and return to your ClosetToCare account.
          </p>
        </div>

        <div className="mt-8 space-y-5">
          <Input
            label="Email address"
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            leftIcon={<Mail className="size-4" aria-hidden="true" />}
          />

          <Input
            label="Password"
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            placeholder="Enter your password"
            leftIcon={<LockKeyhole className="size-4" aria-hidden="true" />}
          />
        </div>

        <div className="mt-6 flex items-center justify-between gap-4 text-sm">
          <Link
            to={ROUTE_PATHS.auth.forgotPassword}
            className="font-medium text-emerald-700 hover:text-emerald-800 transition-colors"
          >
            Forgot your password?
          </Link>
        </div>

        <div className="mt-8">
          <Button className="w-full" size="lg">
            Login
          </Button>
        </div>

        <p className="mt-6 flex flex-col items-center gap-2 text-center text-sm text-slate-600 sm:flex-row sm:justify-center">
          <span>New to ClosetToCare?</span>
          <Link
            to={ROUTE_PATHS.auth.register}
            className="inline-flex items-center gap-1.5 font-semibold text-emerald-700 transition hover:text-emerald-800"
          >
            Create an account
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </p>
      </CardBody>
    </Card>
  )
}
