import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  PackageCheck,
  PackageSearch,
  Users,
} from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { Badge, Button, Card, CardBody, CardHeader } from '../../components/ui'
import { ROUTE_PATHS } from '../../routes/routePaths'

export function NgoDashboardPage() {
  const navigate = useNavigate()

  const summaryCards = [
    {
      label: 'Pending Requests',
      value: '8',
      icon: PackageSearch,
    },
    {
      label: 'Scheduled Pickups',
      value: '4',
      icon: Clock3,
    },
    {
      label: 'Completed Collections',
      value: '12',
      icon: CheckCircle2,
    },
    {
      label: 'Beneficiaries Supported',
      value: '5',
      icon: Users,
    },
  ]

  const incomingRequests = [
    {
      title: 'Winter clothing bundle',
      category: 'Clothing',
      status: 'Pending',
      timing: 'Received today',
      detail: 'Example request showing how incoming donations may appear in the dashboard.',
    },
    {
      title: 'Household essentials set',
      category: 'Household items',
      status: 'Scheduled',
      timing: 'Pickup planned',
      detail: 'Planned state preview for a request that is ready for collection coordination.',
    },
    {
      title: 'Footwear donation pack',
      category: 'Footwear',
      status: 'Review',
      timing: 'Awaiting confirmation',
      detail: 'Static interface example for reviewing an incoming donation request.',
    },
  ]

  const collectionOverview = [
    {
      label: 'Incoming today',
      value: '3',
      description: 'Example value for the collection queue overview.',
    },
    {
      label: 'Ready for sorting',
      value: '2',
      description: 'Planned layout state for items that are ready to be handled.',
    },
    {
      label: 'Awaiting handoff',
      value: '1',
      description: 'Placeholder metric for the future collection workflow.',
    },
  ]

  return (
    <div className="space-y-8 lg:space-y-10">
      <section className="relative overflow-hidden rounded-[2rem] border border-emerald-100 bg-white px-6 py-8 shadow-sm sm:px-8 sm:py-10">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,_rgba(16,185,129,0.12),_transparent_28%)]" />

        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <Badge variant="success">NGO dashboard</Badge>
            <h1 className="mt-5 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Welcome to your NGO workspace.
            </h1>
            <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
              This dashboard is a visual foundation for incoming requests, collection planning, and
              other NGO-facing activity. The content shown here is example interface data only.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button
              size="lg"
              onClick={() => {
                navigate(ROUTE_PATHS.ngo.donations)
              }}
            >
              View Donations
              <ArrowRight className="size-4" aria-hidden="true" />
            </Button>
          </div>
        </div>
      </section>

      <section aria-labelledby="ngo-summary-heading" className="space-y-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">Summary</p>
          <h2 id="ngo-summary-heading" className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Key operational counts at a glance.
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {summaryCards.map((card) => {
            const Icon = card.icon

            return (
              <Card key={card.label} className="border-slate-200 shadow-sm">
                <CardBody className="p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-medium text-slate-500">{card.label}</p>
                      <p className="mt-2 text-3xl font-semibold text-slate-900">{card.value}</p>
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

      <section aria-labelledby="incoming-requests-heading" className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
        <Card className="border-slate-200 shadow-sm">
          <CardHeader>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
                  Incoming donation requests
                </p>
                <h2 id="incoming-requests-heading" className="mt-1 text-xl font-semibold text-slate-900">
                  Requests waiting for NGO attention.
                </h2>
              </div>
              <Badge variant="outline">Example content</Badge>
            </div>
          </CardHeader>
          <CardBody className="p-0">
            <div className="divide-y divide-slate-200">
              {incomingRequests.map((request) => (
                <article
                  key={request.title}
                  className="flex flex-col gap-4 px-6 py-5 sm:flex-row sm:items-start sm:justify-between"
                >
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-base font-semibold text-slate-900">{request.title}</h3>
                      <Badge variant="success">{request.status}</Badge>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{request.detail}</p>
                    <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-500">
                      <span className="inline-flex items-center gap-1.5">
                        <PackageSearch className="size-4 text-emerald-600" aria-hidden="true" />
                        {request.category}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Clock3 className="size-4 text-emerald-600" aria-hidden="true" />
                        {request.timing}
                      </span>
                    </div>
                  </div>
                  <p className="shrink-0 text-xs font-medium uppercase tracking-wide text-slate-400">
                    Layout sample
                  </p>
                </article>
              ))}
            </div>
          </CardBody>
        </Card>

        <Card className="border-emerald-100 bg-emerald-50/50 shadow-sm">
          <CardHeader className="border-emerald-100">
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
              Collection overview
            </p>
            <h3 className="mt-1 text-xl font-semibold text-slate-900">
              Planned view for incoming collection work.
            </h3>
          </CardHeader>
          <CardBody className="space-y-4 p-6">
            <p className="text-sm leading-6 text-slate-600">
              This section is intentionally shown as example UI content. It provides a visual place
              for future live request data, pickup coordination snapshots, and collection tracking.
            </p>

            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {collectionOverview.map((item) => (
                <div key={item.label} className="rounded-2xl border border-emerald-100 bg-white p-4">
                  <p className="text-sm font-medium text-slate-500">{item.label}</p>
                  <p className="mt-2 text-2xl font-semibold text-slate-900">{item.value}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-dashed border-emerald-200 bg-white p-5 text-center">
              <div className="mx-auto flex size-11 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                <PackageCheck className="size-5" aria-hidden="true" />
              </div>
              <p className="mt-3 text-sm font-semibold text-slate-900">Future live requests area</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                When the dashboard is connected to live NGO data, this area can reflect incoming
                collection activity.
              </p>
            </div>
          </CardBody>
        </Card>
      </section>
    </div>
  )
}
