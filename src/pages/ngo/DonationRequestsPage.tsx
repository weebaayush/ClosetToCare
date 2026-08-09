import {
  ArrowRight,
  CalendarDays,
  MapPin,
  PackageSearch,
  UserRound,
  UsersRound,
} from 'lucide-react'
import { Button, Card, CardBody, CardHeader, Badge } from '../../components/ui'

const requestSummaryCards = [
  { label: 'Pending Review', value: '4', variant: 'warning' as const },
  { label: 'Accepted', value: '2', variant: 'success' as const },
  { label: 'Pickup Scheduled', value: '3', variant: 'default' as const },
  { label: 'Declined', value: '1', variant: 'danger' as const },
]

const exampleRequests = [
  {
    title: 'Winter jackets donation',
    donorName: 'Sarah M.',
    category: 'Clothing',
    quantity: '24 items',
    pickupLocation: 'Koramangala, Bengaluru',
    requestedPickupDate: '18 Aug 2026',
    status: 'Pending Review',
    statusVariant: 'warning' as const,
    description:
      'Example donation request showing a new incoming donation that has not yet been reviewed.',
  },
  {
    title: 'Household essentials set',
    donorName: 'Greenfield Office',
    category: 'Home essentials',
    quantity: '11 bundles',
    pickupLocation: 'Indiranagar, Bengaluru',
    requestedPickupDate: '19 Aug 2026',
    status: 'Accepted',
    statusVariant: 'success' as const,
    description:
      'Illustrative request card for a donation that has already been accepted by the NGO team.',
  },
  {
    title: 'School stationery pack',
    donorName: 'Anita R.',
    category: 'Education supplies',
    quantity: '32 kits',
    pickupLocation: 'Whitefield, Bengaluru',
    requestedPickupDate: '20 Aug 2026',
    status: 'Pickup Scheduled',
    statusVariant: 'default' as const,
    description:
      'Planned workflow example where the pickup has been arranged and is ready for coordination.',
  },
  {
    title: 'Mixed footwear donation',
    donorName: 'Northside Residency',
    category: 'Footwear',
    quantity: '18 pairs',
    pickupLocation: 'Hebbal, Bengaluru',
    requestedPickupDate: '22 Aug 2026',
    status: 'Declined',
    statusVariant: 'danger' as const,
    description:
      'Static UI example for a request that has been declined. No request actions are wired up.',
  },
]

function DonationRequestsContent() {
  return (
    <div className="space-y-8 lg:space-y-10">
      <section className="relative overflow-hidden rounded-[2rem] border border-emerald-100 bg-white px-6 py-8 shadow-sm sm:px-8 sm:py-10">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,_rgba(16,185,129,0.12),_transparent_28%)]" />

        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <Badge variant="success">NGO incoming requests</Badge>
            <h1 className="mt-5 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Review incoming donation requests.
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              This page is a visual foundation for reviewing example donation requests, checking
              their status, and previewing the request workflow. The content shown here is
              illustrative only and does not represent real ClosetToCare records.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button size="lg" variant="outline">
              Pending Review
            </Button>
            <Button size="lg" variant="outline">
              Accepted
            </Button>
            <Button size="lg" variant="outline">
              Pickup Scheduled
            </Button>
            <Button size="lg" variant="outline">
              Declined
            </Button>
          </div>
        </div>
      </section>

      <section aria-labelledby="requests-summary-heading" className="space-y-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">Summary</p>
          <h2 id="requests-summary-heading" className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Request status breakdown.
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {requestSummaryCards.map((card) => (
            <Card key={card.label} className="border-slate-200 shadow-sm">
              <CardBody className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-medium text-slate-500">{card.label}</p>
                    <p className="mt-2 text-3xl font-semibold text-slate-900">{card.value}</p>
                    <p className="mt-1 text-xs uppercase tracking-wide text-slate-400">
                      Example dashboard count
                    </p>
                  </div>
                  <Badge variant={card.variant} size="md">
                    {card.label}
                  </Badge>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="requests-list-heading">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">Incoming list</p>
            <h2 id="requests-list-heading" className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              Requests waiting for NGO review.
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button size="sm" variant="outline">
              All requests
            </Button>
            <Button size="sm" variant="outline">
              Latest first
            </Button>
            <Button size="sm" variant="outline">
              High priority
            </Button>
          </div>
        </div>

        <div className="grid gap-4">
          {exampleRequests.map((request) => (
            <Card key={request.title} className="border-slate-200 shadow-sm">
              <CardBody className="p-0">
                <div className="flex flex-col gap-5 p-6 lg:flex-row lg:items-start lg:justify-between">
                  <div className="min-w-0 flex-1 space-y-4">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-lg font-semibold text-slate-900">{request.title}</h3>
                      <Badge variant={request.statusVariant}>{request.status}</Badge>
                    </div>
                    <p className="text-sm leading-6 text-slate-600">{request.description}</p>

                    <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                      <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4">
                        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                          Donor name
                        </p>
                        <p className="mt-2 text-sm font-medium text-slate-900">
                          <span className="inline-flex items-center gap-1.5">
                            <UserRound className="size-4 text-emerald-600" aria-hidden="true" />
                            {request.donorName}
                          </span>
                        </p>
                      </div>
                      <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4">
                        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                          Item category
                        </p>
                        <p className="mt-2 text-sm font-medium text-slate-900">
                          <span className="inline-flex items-center gap-1.5">
                            <PackageSearch className="size-4 text-emerald-600" aria-hidden="true" />
                            {request.category}
                          </span>
                        </p>
                      </div>
                      <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4">
                        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                          Quantity
                        </p>
                        <p className="mt-2 text-sm font-medium text-slate-900">{request.quantity}</p>
                      </div>
                      <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4">
                        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                          Pickup location
                        </p>
                        <p className="mt-2 text-sm font-medium text-slate-900">
                          <span className="inline-flex items-start gap-1.5">
                            <MapPin className="mt-0.5 size-4 shrink-0 text-emerald-600" aria-hidden="true" />
                            <span>{request.pickupLocation}</span>
                          </span>
                        </p>
                      </div>
                      <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4">
                        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                          Requested pickup date
                        </p>
                        <p className="mt-2 text-sm font-medium text-slate-900">
                          <span className="inline-flex items-center gap-1.5">
                            <CalendarDays className="size-4 text-emerald-600" aria-hidden="true" />
                            {request.requestedPickupDate}
                          </span>
                        </p>
                      </div>
                      <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4">
                        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                          Current status
                        </p>
                        <p className="mt-2 text-sm font-medium text-slate-900">{request.status}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex shrink-0 flex-col gap-3 sm:flex-row sm:flex-wrap lg:flex-col lg:items-stretch">
                    <Button size="sm" variant="outline">
                      View Details
                      <ArrowRight className="size-4" aria-hidden="true" />
                    </Button>
                    <Button size="sm">Accept</Button>
                    <Button size="sm" variant="outline">
                      Decline
                    </Button>
                  </div>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </section>

      <section aria-labelledby="requests-empty-heading">
        <Card className="border-dashed border-emerald-200 bg-emerald-50/40 shadow-sm">
          <CardHeader>
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
              Planned empty state
            </p>
            <h2 id="requests-empty-heading" className="mt-1 text-xl font-semibold text-slate-900">
              No additional requests are available in this example view.
            </h2>
          </CardHeader>
          <CardBody className="space-y-4 p-6">
            <div className="mx-auto flex size-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
              <UsersRound className="size-5" aria-hidden="true" />
            </div>
            <p className="mx-auto max-w-2xl text-center text-sm leading-6 text-slate-600">
              This empty-state treatment is included to show where the UI would explain that no
              more requests are present. It is purely a layout example and does not reflect live
              ClosetToCare data.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button size="sm" variant="outline">
                Refresh list
              </Button>
              <Button size="sm" variant="outline">
                View Details
              </Button>
            </div>
          </CardBody>
        </Card>
      </section>
    </div>
  )
}

export function DonationRequestsPage() {
  return (
    <DonationRequestsContent />
  )
}
