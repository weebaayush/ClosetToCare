import { ArrowRight, UserPlus } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button, Card, CardBody, Input } from '../../components/ui'
import { ROUTE_PATHS } from '../../routes/routePaths'

export function RegisterPage() {
  return (
    <Card className="overflow-hidden border-emerald-100 shadow-lg shadow-emerald-100/40">
      <div className="h-1.5 bg-gradient-to-r from-emerald-500 via-emerald-400 to-amber-200" />
      <CardBody className="p-6 sm:p-8">
        <div className="text-center">
          <p className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-800">
            ClosetToCare access
          </p>
          <h1 className="mt-5 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Create your account
          </h1>
          <p className="mt-4 text-sm leading-6 text-slate-600 sm:text-base">
            Set up a ClosetToCare account to start a clearer donation journey when you are ready.
          </p>
        </div>

        <div className="mt-8 space-y-5">
          <Input
            label="Full name"
            id="full-name"
            name="fullName"
            type="text"
            autoComplete="name"
            placeholder="Enter your full name"
            leftIcon={<UserPlus className="size-4" aria-hidden="true" />}
          />

          <Input
            label="Email address"
            id="register-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
          />

          <Input
            label="Password"
            id="register-password"
            name="password"
            type="password"
            autoComplete="new-password"
            placeholder="Create a password"
          />

          <Input
            label="Confirm password"
            id="confirm-password"
            name="confirmPassword"
            type="password"
            autoComplete="new-password"
            placeholder="Repeat your password"
          />
        </div>

        <div className="mt-8">
          <Button className="w-full" size="lg">
            Create Account
          </Button>
        </div>

        <p className="mt-6 flex flex-col items-center gap-2 text-center text-sm text-slate-600 sm:flex-row sm:justify-center">
          <span>Already have an account?</span>
          <Link
            to={ROUTE_PATHS.auth.login}
            className="inline-flex items-center gap-1.5 font-semibold text-emerald-700 transition hover:text-emerald-800"
          >
            Back to Login
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </p>
      </CardBody>
    </Card>
  )
}
