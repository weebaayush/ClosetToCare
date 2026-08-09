import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  CirclePlay,
  MessagesSquare,
  PackageCheck,
  PackageOpen,
  Tag,
} from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { Badge, Button, Card, CardBody, CardHeader } from '../../components/ui'
import { ROUTE_PATHS } from '../../routes/routePaths'

type DonationStatus = 'Started' | 'Coordinating' | 'Received' | 'Completed'

interface DonationExample {
  title: string
  category: string
  status: DonationStatus
  timeline: string
  detail: string
}

const statusBadges: Record<DonationStatus, { variant: 'default' | 'success' | 'warning' | 'outline'; className?: string }> = {
  Started: { variant: 'outline' },
  Coordinating: { variant: 'warning' },
  Received: {
    variant: 'default',
    className: 'bg-sky-50 text-sky-700 ring-1 ring-inset ring-sky-200',
  },
  Completed: { variant: 'success' },
}

const statusLegend: Array<{ status: DonationStatus; description: string; icon: typeof CirclePlay }> = [
  {
    status: 'Started',
    description: 'The donation has been created and items are being prepared.',
    icon: CirclePlay,
  },
  {
    status: 'Coordinating',
    description: 'Handover details are being arranged with a partner NGO.',
    icon: MessagesSquare,
  },
  {
    status: 'Received',
    description: 'The items have been handed over and checked in.',
    icon: PackageCheck,
  },
  {
    status: 'Completed',
    description: 'The donation has reached its destination and is closed.',
    icon: CheckCircle2,
  },
]

const exampleDonations: DonationExample[] = [
  {
    title: 'Winter jackets and warm layers',
    category: 'Clothing',
    status: 'Started',
    timeline: 'Created this week',
    detail: 'Example entry showing a donation that has just been started.',
  },
  {
    title: 'Bedding and blanket bundle',
    category: 'Home essentials',
    status: 'Coordinating',
    timeline: 'Handover being arranged',
    detail: 'Example entry showing coordination with a receiving organization.',
  },
  {
    title: 'Kids clothing assortment',
    category: 'Clothing',
    status: 'Received',
    timeline: 'Checked in recently',
    detail: 'Example entry showing items that have been handed over.',
  },
  {
    title: 'Reusable footwear collection',
    category: 'Footwear',
    status: 'Completed',
    timeline: 'Closed last month',
    detail: 'Example entry showing a fully completed donation journey.',
  },
]

export function DonationManagementPage() {
  const navigate = useNavigate()

  return (
    <div className="space-y-8 lg:space-y-10">
      <section className="relative overflow-hidden rounded-[2rem] border border-emerald-100 bg-white px-6 py-8 shadow-sm sm:px-8 sm:py-10">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,_rgba(16,185,129,0.12),_transparent_28%)]" />

        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <Badge variant="success">My donations</Badge>
            <h1 className="mt-5 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Manage your donations in one place.
            </h1>
            <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
              Track each donation from the moment it is started until it is completed. The list
              below uses static interface examples so the layout can be reviewed before live donor
              data is connected.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button
              size="lg"
              onClick={() => {
                navigate(ROUTE_PATHS.donor.newDonation)
              }}
            >
              Start a Donation
              <ArrowRight className="size-4" aria-hidden="true" />
            </Button>
          </div>
        </div>
      </section>

      <section aria-labelledby="donation-status-heading" className="space-y-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">Status guide</p>
          <h2
            id="donation-status-heading"
            className="mt-2 text-2xl font-semibold tracking-tight text-slate-900"
          >
            How a donation moves through ClosetToCare.
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {statusLegend.map((entry) => {
            const Icon = entry.icon
            const badge = statusBadges[entry.status]

            return (
              <Card key={entry.status} className="border-slate-200 shadow-sm">
                <CardBody className="p-5">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex size-10 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                      <Icon className="size-5" aria-hidden="true" />
                    </div>
                    <Badge variant={badge.variant} className={badge.className}>
                      {entry.status}
                    </Badge>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-slate-600">{entry.description}</p>
                </CardBody>
              </Card>
            )
          })}
        </div>
      </section>

      <section aria-labelledby="donation-list-heading" className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
        <Card className="border-slate-200 shadow-sm">
          <CardHeader>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
                  Donation list
                </p>
                <h2 id="donation-list-heading" className="mt-1 text-xl font-semibold text-slate-900">
                  Your donations and their progress.
                </h2>
              </div>
              <Badge variant="outline">Example content</Badge>
            </div>
          </CardHeader>
          <CardBody className="p-0">
            <div className="divide-y divide-slate-200">
              {exampleDonations.map((donation) => {
                const badge = statusBadges[donation.status]

                return (
                  <article
                    key={donation.title}
                    className="flex flex-col gap-4 px-6 py-5 sm:flex-row sm:items-start sm:justify-between"
                  >
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-base font-semibold text-slate-900">{donation.title}</h3>
                        <Badge variant={badge.variant} className={badge.className}>
                          {donation.status}
                        </Badge>
                      </div>
                      <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
                        {donation.detail}
                      </p>
                      <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-500">
                        <span className="inline-flex items-center gap-1.5">
                          <Tag className="size-4 text-emerald-600" aria-hidden="true" />
                          {donation.category}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <CalendarDays className="size-4 text-emerald-600" aria-hidden="true" />
                          {donation.timeline}
                        </span>
                      </div>
                    </div>
                    <p className="shrink-0 text-xs font-medium uppercase tracking-wide text-slate-400">
                      Layout sample
                    </p>
                  </article>
                )
              })}
            </div>
          </CardBody>
        </Card>

        <Card className="border-emerald-100 bg-emerald-50/50 shadow-sm">
          <CardHeader className="border-emerald-100">
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">Planned state</p>
            <h3 className="mt-1 text-xl font-semibold text-slate-900">
              Where your live donation records will appear.
            </h3>
          </CardHeader>
          <CardBody className="space-y-4 p-6">
            <p className="text-sm leading-6 text-slate-600">
              This page currently shows static interface examples only. Once the platform is
              connected to real donor data, this area will list your actual donations along with
              their statuses and timelines.
            </p>
            <div className="rounded-2xl border border-dashed border-emerald-200 bg-white p-5 text-center">
              <div className="mx-auto flex size-11 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                <PackageOpen className="size-5" aria-hidden="true" />
              </div>
              <p className="mt-3 text-sm font-semibold text-slate-900">No live donations yet</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                When you start a donation, it will appear here with its current status.
              </p>
            </div>
            <Button
              className="w-full"
              variant="outline"
              onClick={() => {
                navigate(ROUTE_PATHS.donor.newDonation)
              }}
            >
              Start a Donation
            </Button>
          </CardBody>
        </Card>
      </section>
    </div>
  )
}
