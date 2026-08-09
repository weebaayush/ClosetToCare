import {
  ArrowRight,
  Calendar,
  Clock,
  MapPin,
  Phone,
  ThumbsUp,
  AlertCircle,
  Truck,
  CheckCircle2,
  UserRound,
  PackageOpen,
} from 'lucide-react'
import { Button, Card, CardBody, CardHeader, Badge } from '../../components/ui'

const pickupSummaryCards = [
  {
    label: 'Pickups Scheduled',
    value: '6',
    icon: Calendar,
  },
  {
    label: 'Pickups Today',
    value: '2',
    icon: Clock,
  },
  {
    label: 'Collections Completed',
    value: '18',
    icon: CheckCircle2,
  },
  {
    label: 'Attention Required',
    value: '1',
    icon: AlertCircle,
  },
]

const examplePickups = [
  {
    title: 'Winter jackets donation',
    donorName: 'Sarah M.',
    category: 'Clothing',
    quantity: '24 items',
    pickupDate: '18 Aug 2026',
    pickupTimeSlot: '10:00 AM - 12:00 PM',
    location: 'Koramangala, Bengaluru',
    volunteer: 'Rajesh K.',
    status: 'Scheduled',
    statusVariant: 'default' as const,
    description: 'Example pickup entry showing a scheduled collection that is ready for volunteer assignment.',
  },
  {
    title: 'School stationery pack',
    donorName: 'Anita R.',
    category: 'Education supplies',
    quantity: '32 kits',
    pickupDate: '18 Aug 2026',
    pickupTimeSlot: '2:00 PM - 4:00 PM',
    location: 'Whitefield, Bengaluru',
    volunteer: 'Priya S.',
    status: 'On the Way',
    statusVariant: 'warning' as const,
    description: 'Illustrative pickup card for a collection currently in progress with an assigned volunteer.',
  },
  {
    title: 'Household essentials set',
    donorName: 'Greenfield Office',
    category: 'Home essentials',
    quantity: '11 bundles',
    pickupDate: '17 Aug 2026',
    pickupTimeSlot: '9:00 AM - 11:00 AM',
    location: 'Indiranagar, Bengaluru',
    volunteer: 'Vikram T.',
    status: 'Collected',
    statusVariant: 'success' as const,
    description: 'Planned workflow example showing a donation that has already been successfully collected.',
  },
  {
    title: 'Mixed footwear donation',
    donorName: 'Northside Residency',
    category: 'Footwear',
    quantity: '18 pairs',
    pickupDate: '16 Aug 2026',
    pickupTimeSlot: '11:00 AM - 1:00 PM',
    location: 'Hebbal, Bengaluru',
    volunteer: 'Arun M.',
    status: 'Reschedule Required',
    statusVariant: 'danger' as const,
    description: 'Static UI example for a pickup that requires rescheduling. No status changes are wired up.',
  },
]

export function PickupManagementPage() {
  return (
    <div className="space-y-8 lg:space-y-10">
      <section className="relative overflow-hidden rounded-[2rem] border border-emerald-100 bg-white px-6 py-8 shadow-sm sm:px-8 sm:py-10">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,_rgba(16,185,129,0.12),_transparent_28%)]" />

        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <Badge variant="success">NGO pickup management</Badge>
            <h1 className="mt-5 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Manage donation pickups and collections.
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              This page is a visual foundation for scheduling pickups, tracking volunteer assignments,
              and monitoring collection status. The content shown here is illustrative only and does
              not represent real ClosetToCare pickup records.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button size="lg" variant="outline">
              Scheduled
            </Button>
            <Button size="lg" variant="outline">
              On the Way
            </Button>
            <Button size="lg" variant="outline">
              Collected
            </Button>
            <Button size="lg" variant="outline">
              Reschedule
            </Button>
          </div>
        </div>
      </section>

      <section aria-labelledby="pickup-summary-heading" className="space-y-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">Summary</p>
          <h2 id="pickup-summary-heading" className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Pickup and collection overview.
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {pickupSummaryCards.map((card) => {
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

      <section className="space-y-4" aria-labelledby="pickups-list-heading">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">Pickup schedule</p>
            <h2 id="pickups-list-heading" className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              Scheduled and in-progress collections.
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button size="sm" variant="outline">
              All pickups
            </Button>
            <Button size="sm" variant="outline">
              Today
            </Button>
            <Button size="sm" variant="outline">
              By volunteer
            </Button>
          </div>
        </div>

        <div className="grid gap-4">
          {examplePickups.map((pickup) => (
            <Card key={pickup.title} className="border-slate-200 shadow-sm">
              <CardBody className="p-0">
                <div className="flex flex-col gap-5 p-6 lg:flex-row lg:items-start lg:justify-between">
                  <div className="min-w-0 flex-1 space-y-4">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-lg font-semibold text-slate-900">{pickup.title}</h3>
                      <Badge variant={pickup.statusVariant}>{pickup.status}</Badge>
                    </div>
                    <p className="text-sm leading-6 text-slate-600">{pickup.description}</p>

                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                      <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4">
                        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                          Donor name
                        </p>
                        <p className="mt-2 text-sm font-medium text-slate-900">
                          <span className="inline-flex items-center gap-1.5">
                            <UserRound className="size-4 text-emerald-600" aria-hidden="true" />
                            {pickup.donorName}
                          </span>
                        </p>
                      </div>
                      <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4">
                        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                          Item category
                        </p>
                        <p className="mt-2 text-sm font-medium text-slate-900">
                          <span className="inline-flex items-center gap-1.5">
                            <PackageOpen className="size-4 text-emerald-600" aria-hidden="true" />
                            {pickup.category}
                          </span>
                        </p>
                      </div>
                      <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4">
                        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                          Quantity
                        </p>
                        <p className="mt-2 text-sm font-medium text-slate-900">{pickup.quantity}</p>
                      </div>
                      <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4">
                        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                          Pickup date
                        </p>
                        <p className="mt-2 text-sm font-medium text-slate-900">
                          <span className="inline-flex items-center gap-1.5">
                            <Calendar className="size-4 text-emerald-600" aria-hidden="true" />
                            {pickup.pickupDate}
                          </span>
                        </p>
                      </div>
                      <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4">
                        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                          Time slot
                        </p>
                        <p className="mt-2 text-sm font-medium text-slate-900">
                          <span className="inline-flex items-center gap-1.5">
                            <Clock className="size-4 text-emerald-600" aria-hidden="true" />
                            {pickup.pickupTimeSlot}
                          </span>
                        </p>
                      </div>
                      <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4">
                        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                          Pickup location
                        </p>
                        <p className="mt-2 text-sm font-medium text-slate-900">
                          <span className="inline-flex items-start gap-1.5">
                            <MapPin className="mt-0.5 size-4 shrink-0 text-emerald-600" aria-hidden="true" />
                            <span>{pickup.location}</span>
                          </span>
                        </p>
                      </div>
                      <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4">
                        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                          Assigned volunteer
                        </p>
                        <p className="mt-2 text-sm font-medium text-slate-900">
                          <span className="inline-flex items-center gap-1.5">
                            <Truck className="size-4 text-emerald-600" aria-hidden="true" />
                            {pickup.volunteer}
                          </span>
                        </p>
                      </div>
                      <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4">
                        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                          Status
                        </p>
                        <p className="mt-2 text-sm font-medium text-slate-900">{pickup.status}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex shrink-0 flex-col gap-3 sm:flex-row sm:flex-wrap lg:flex-col lg:items-stretch">
                    <Button size="sm" variant="outline">
                      View Details
                      <ArrowRight className="size-4" aria-hidden="true" />
                    </Button>
                    <Button size="sm" variant="outline">
                      <Phone className="size-4" aria-hidden="true" />
                      Contact Donor
                    </Button>
                    <Button size="sm">
                      <ThumbsUp className="size-4" aria-hidden="true" />
                      Mark Collected
                    </Button>
                    <Button size="sm" variant="outline">
                      Reschedule
                    </Button>
                  </div>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </section>

      <section aria-labelledby="pickups-empty-heading">
        <Card className="border-dashed border-emerald-200 bg-emerald-50/40 shadow-sm">
          <CardHeader>
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
              Planned capacity area
            </p>
            <h2 id="pickups-empty-heading" className="mt-1 text-xl font-semibold text-slate-900">
              When live assignments are active, additional pickup cards will appear here.
            </h2>
          </CardHeader>
          <CardBody className="space-y-4 p-6">
            <div className="mx-auto flex size-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
              <Truck className="size-5" aria-hidden="true" />
            </div>
            <p className="mx-auto max-w-2xl text-center text-sm leading-6 text-slate-600">
              This section illustrates where future pickup schedules, volunteer assignment snapshots,
              and real-time collection tracking will appear. It is purely a layout example and does
              not reflect live ClosetToCare collection data.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button size="sm" variant="outline">
                Refresh schedule
              </Button>
              <Button size="sm" variant="outline">
                View Volunteer Map
              </Button>
            </div>
          </CardBody>
        </Card>
      </section>
    </div>
  )
}
