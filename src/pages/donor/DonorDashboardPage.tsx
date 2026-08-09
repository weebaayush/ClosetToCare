import {
  ArrowRight,
  CalendarClock,
  ClipboardList,
  Gift,
  PackageSearch,
  Sparkles,
} from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { Badge, Button, Card, CardBody, CardHeader } from '../../components/ui'
import { ROUTE_PATHS } from '../../routes/routePaths'

export function DonorDashboardPage() {
  const navigate = useNavigate()

  const metricCards = [
    {
      label: 'Donation drafts',
      value: '2',
      icon: ClipboardList,
    },
    {
      label: 'Awaiting scheduling',
      value: '1',
      icon: CalendarClock,
    },
    {
      label: 'Ready to start',
      value: '3',
      icon: Gift,
    },
  ]

  const recentItems = [
    {
      title: 'Winter jackets and bedding',
      status: 'Draft',
      detail: 'Example entry for how a future donation card may appear in the dashboard.',
    },
    {
      title: 'Household essentials bundle',
      status: 'Planned',
      detail: 'Interface placeholder showing where recent activity will eventually surface.',
    },
    {
      title: 'Reusable clothing set',
      status: 'Example',
      detail: 'Static sample content used to demonstrate the layout only.',
    },
  ]

  return (
    <div className="space-y-8 lg:space-y-10">
      <section className="relative overflow-hidden rounded-[2rem] border border-emerald-100 bg-white px-6 py-8 shadow-sm sm:px-8 sm:py-10">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,_rgba(16,185,129,0.12),_transparent_28%)]" />

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="max-w-2xl">
            <Badge variant="success" className="bg-emerald-50 text-emerald-700 ring-1 ring-inset ring-emerald-200">
              Donor dashboard
            </Badge>
            <h1 className="mt-5 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Welcome back to ClosetToCare.
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              This dashboard is designed to give you a clear starting point for donation planning,
              with layout examples that show how your items, status updates, and recent activity
              will be organized later.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Button
                size="lg"
                onClick={() => {
                  navigate(ROUTE_PATHS.donor.newDonation)
                }}
              >
                Start a Donation
                <ArrowRight className="size-4" aria-hidden="true" />
              </Button>
              <Button variant="outline" size="lg" className="border-emerald-200 bg-white text-emerald-700 hover:border-emerald-300 hover:text-emerald-800">
                View donation layout
              </Button>
            </div>
          </div>

          <Card className="border-emerald-100 bg-gradient-to-br from-emerald-50 via-white to-white shadow-sm">
            <CardBody className="p-6 sm:p-7">
              <div className="flex items-start gap-4">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-sm shadow-emerald-500/20">
                  <Sparkles className="size-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
                    Planned-state overview
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    The dashboard currently uses static interface examples so the layout can be
                    reviewed before any real donor data is connected.
                  </p>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-dashed border-emerald-200 bg-white p-4">
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                    <PackageSearch className="size-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Donation activity preview</p>
                    <p className="text-sm text-slate-500">Example only, not live platform data.</p>
                  </div>
                </div>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-xl bg-slate-50 px-4 py-3">
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Next step</p>
                    <p className="mt-1 text-sm font-medium text-slate-900">Choose items to donate</p>
                  </div>
                  <div className="rounded-xl bg-slate-50 px-4 py-3">
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Status</p>
                    <p className="mt-1 text-sm font-medium text-slate-900">Planned dashboard state</p>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
      </section>

      <section aria-labelledby="donor-summary-heading" className="space-y-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">Summary</p>
          <h2 id="donor-summary-heading" className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Donation overview at a glance.
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {metricCards.map((metric) => {
            const Icon = metric.icon

            return (
              <Card key={metric.label} className="border-slate-200 shadow-sm">
                <CardBody className="p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-medium text-slate-500">{metric.label}</p>
                      <p className="mt-2 text-3xl font-semibold text-slate-900">{metric.value}</p>
                    </div>
                    <div className="flex size-11 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                      <Icon className="size-5" aria-hidden="true" />
                    </div>
                  </div>
                </CardBody>
              </Card>
            )
          })}
        </div>
      </section>

      <section aria-labelledby="recent-donations-heading" className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <Card className="border-slate-200 shadow-sm">
          <CardHeader>
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">Recent donations</p>
                <h2 id="recent-donations-heading" className="mt-1 text-xl font-semibold text-slate-900">
                  Planned list of recent donation activity.
                </h2>
              </div>
              <Badge variant="outline">Example content</Badge>
            </div>
          </CardHeader>
          <CardBody className="p-0">
            <div className="divide-y divide-slate-200">
              {recentItems.map((item) => (
                <div key={item.title} className="flex flex-col gap-4 px-6 py-5 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-base font-semibold text-slate-900">{item.title}</h3>
                      <Badge variant="success">{item.status}</Badge>
                    </div>
                    <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">{item.detail}</p>
                  </div>
                  <p className="text-xs font-medium uppercase tracking-wide text-slate-400">Layout sample</p>
                </div>
              ))}
            </div>
          </CardBody>
        </Card>

        <Card className="border-emerald-100 bg-emerald-50/50 shadow-sm">
          <CardHeader className="border-emerald-100">
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">Planned state</p>
            <h3 className="mt-1 text-xl font-semibold text-slate-900">Where live donation data will appear.</h3>
          </CardHeader>
          <CardBody className="space-y-4 p-6">
            <p className="text-sm leading-6 text-slate-600">
              This dashboard section is intentionally shown as a planned interface state. Once the
              platform is connected to real donor data, this area can display donation history,
              pickup status, and progress updates.
            </p>
            <div className="rounded-2xl border border-dashed border-emerald-200 bg-white p-4">
              <p className="text-sm font-semibold text-slate-900">Empty-state placeholder</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                No live donation records are connected yet, so this area is prepared for future
                content.
              </p>
            </div>
            <Button className="w-full" variant="outline" onClick={() => navigate(ROUTE_PATHS.donor.newDonation)}>
              Start a Donation
            </Button>
          </CardBody>
        </Card>
      </section>
    </div>
  )
}
