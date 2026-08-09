import {
  ArrowRight,
  Calendar,
  CheckCircle2,
  MapPin,
  Package,
  Search,
  UserRound,
  Users,
  Inbox,
} from 'lucide-react'
import { Button, Card, CardBody, CardHeader, Badge, Input } from '../../components/ui'

const collectionSummaryCards = [
  {
    label: 'Total Collections',
    value: '47',
    icon: Package,
  },
  {
    label: 'Items Collected',
    value: '312',
    icon: CheckCircle2,
  },
  {
    label: 'Donors Supported',
    value: '28',
    icon: Users,
  },
  {
    label: 'Completed This Month',
    value: '12',
    icon: Calendar,
  },
]

const exampleCollectionHistory = [
  {
    title: 'Winter jackets donation',
    donorName: 'Sarah M.',
    category: 'Clothing',
    quantity: '24 items',
    collectionDate: '12 Aug 2026',
    location: 'Koramangala, Bengaluru',
    volunteer: 'Rajesh K.',
    status: 'Collected',
    statusVariant: 'success' as const,
    description:
      'Example collection record showing a donation that has been successfully collected from the donor location.',
  },
  {
    title: 'School stationery pack',
    donorName: 'Anita R.',
    category: 'Books',
    quantity: '32 kits',
    collectionDate: '11 Aug 2026',
    location: 'Whitefield, Bengaluru',
    volunteer: 'Priya S.',
    status: 'Delivered',
    statusVariant: 'success' as const,
    description:
      'Illustrative history card for a collection that has been collected and delivered to the NGO distribution center.',
  },
  {
    title: 'Household essentials set',
    donorName: 'Greenfield Office',
    category: 'Household',
    quantity: '11 bundles',
    collectionDate: '10 Aug 2026',
    location: 'Indiranagar, Bengaluru',
    volunteer: 'Vikram T.',
    status: 'Completed',
    statusVariant: 'success' as const,
    description:
      'Planned workflow example showing a collection that has been completed and is now part of the historical record.',
  },
  {
    title: 'Mixed footwear donation',
    donorName: 'Northside Residency',
    category: 'Clothing',
    quantity: '18 pairs',
    collectionDate: '08 Aug 2026',
    location: 'Hebbal, Bengaluru',
    volunteer: 'Arun M.',
    status: 'Collected',
    statusVariant: 'success' as const,
    description:
      'Static UI example for a completed collection entry that is part of the permanent history view.',
  },
  {
    title: 'Educational books collection',
    donorName: 'City Library Project',
    category: 'Books',
    quantity: '156 books',
    collectionDate: '06 Aug 2026',
    location: 'Jayanagar, Bengaluru',
    volunteer: 'Meera D.',
    status: 'Delivered',
    statusVariant: 'success' as const,
    description:
      'Example entry demonstrating how collections with higher quantities appear in the history list.',
  },
  {
    title: 'Kitchen appliances donation',
    donorName: 'Tech Park Wellness',
    category: 'Household',
    quantity: '8 items',
    collectionDate: '04 Aug 2026',
    location: 'Outer Ring Road, Bengaluru',
    volunteer: 'Rohan P.',
    status: 'Completed',
    statusVariant: 'success' as const,
    description:
      'Planned layout example for a historical record showing collection completion and handoff.',
  },
]

const filterCategories = [
  { label: 'All', value: 'all' },
  { label: 'Clothing', value: 'clothing' },
  { label: 'Household', value: 'household' },
  { label: 'Books', value: 'books' },
  { label: 'Other', value: 'other' },
]

export function CollectionHistoryPage() {
  return (
    <div className="space-y-8 lg:space-y-10">
      <section className="relative overflow-hidden rounded-[2rem] border border-emerald-100 bg-white px-6 py-8 shadow-sm sm:px-8 sm:py-10">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,_rgba(16,185,129,0.12),_transparent_28%)]" />

        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <Badge variant="success">NGO collection history</Badge>
            <h1 className="mt-5 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              View completed collection history.
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              This page displays a historical record of all completed donations that have been
              collected. The content shown here is illustrative only and does not represent real
              ClosetToCare collection records or donor information.
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="collection-summary-heading" className="space-y-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">Summary</p>
          <h2 id="collection-summary-heading" className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Collection activity overview.
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {collectionSummaryCards.map((card) => {
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

      <section className="space-y-4" aria-labelledby="history-list-heading">
        <div className="space-y-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
              History and records
            </p>
            <h2 id="history-list-heading" className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              Completed collections and records.
            </h2>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:gap-3">
            <div className="flex-1 min-w-0">
              <Input
                type="text"
                placeholder="Search collections by title or donor..."
                className="w-full"
                leftIcon={<Search className="size-5 text-slate-400" aria-hidden="true" />}
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {filterCategories.map((filter) => (
                <Button key={filter.value} size="sm" variant="outline">
                  {filter.label}
                </Button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-4">
          {exampleCollectionHistory.map((record) => (
            <Card key={record.title} className="border-slate-200 shadow-sm">
              <CardBody className="p-0">
                <div className="flex flex-col gap-5 p-6 lg:flex-row lg:items-start lg:justify-between">
                  <div className="min-w-0 flex-1 space-y-4">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-lg font-semibold text-slate-900">{record.title}</h3>
                      <Badge variant={record.statusVariant}>{record.status}</Badge>
                    </div>
                    <p className="text-sm leading-6 text-slate-600">{record.description}</p>

                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                      <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4">
                        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                          Donor name
                        </p>
                        <p className="mt-2 text-sm font-medium text-slate-900">
                          <span className="inline-flex items-center gap-1.5">
                            <UserRound className="size-4 text-emerald-600" aria-hidden="true" />
                            {record.donorName}
                          </span>
                        </p>
                      </div>
                      <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4">
                        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                          Category
                        </p>
                        <p className="mt-2 text-sm font-medium text-slate-900">
                          <span className="inline-flex items-center gap-1.5">
                            <Package className="size-4 text-emerald-600" aria-hidden="true" />
                            {record.category}
                          </span>
                        </p>
                      </div>
                      <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4">
                        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                          Quantity
                        </p>
                        <p className="mt-2 text-sm font-medium text-slate-900">{record.quantity}</p>
                      </div>
                      <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4">
                        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                          Collection date
                        </p>
                        <p className="mt-2 text-sm font-medium text-slate-900">
                          <span className="inline-flex items-center gap-1.5">
                            <Calendar className="size-4 text-emerald-600" aria-hidden="true" />
                            {record.collectionDate}
                          </span>
                        </p>
                      </div>
                      <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4">
                        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                          Collection location
                        </p>
                        <p className="mt-2 text-sm font-medium text-slate-900">
                          <span className="inline-flex items-start gap-1.5">
                            <MapPin className="mt-0.5 size-4 shrink-0 text-emerald-600" aria-hidden="true" />
                            <span>{record.location}</span>
                          </span>
                        </p>
                      </div>
                      <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4">
                        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                          Assigned volunteer
                        </p>
                        <p className="mt-2 text-sm font-medium text-slate-900">{record.volunteer}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex shrink-0 flex-col gap-3">
                    <Button size="sm" variant="outline">
                      View Details
                      <ArrowRight className="size-4" aria-hidden="true" />
                    </Button>
                  </div>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </section>

      <section aria-labelledby="history-empty-heading">
        <Card className="border-dashed border-emerald-200 bg-emerald-50/40 shadow-sm">
          <CardHeader>
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
              Planned capacity area
            </p>
            <h2 id="history-empty-heading" className="mt-1 text-xl font-semibold text-slate-900">
              When older collections are archived, they will appear in this historical view.
            </h2>
          </CardHeader>
          <CardBody className="space-y-4 p-6">
            <div className="mx-auto flex size-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
              <Inbox className="size-5" aria-hidden="true" />
            </div>
            <p className="mx-auto max-w-2xl text-center text-sm leading-6 text-slate-600">
              This section illustrates where completed and archived collection records will be displayed
              for long-term reference. It is purely a layout example and does not reflect live
              ClosetToCare historical data.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button size="sm" variant="outline">
                Refresh history
              </Button>
              <Button size="sm" variant="outline">
                Export records
              </Button>
            </div>
          </CardBody>
        </Card>
      </section>
    </div>
  )
}
