import {
  CheckCircle2,
  Clock,
  Gift,
  MapPin,
  Search,
  AlertCircle,
  Users,
  TrendingUp,
  Inbox,
  Truck,
  UserPlus,
  Eye,
} from 'lucide-react'
import { Badge, Button, Card, CardBody, CardHeader, Input } from '../../components/ui'

const managementSummaryCards = [
  {
    label: 'Total Donations',
    value: '156',
    icon: Gift,
  },
  {
    label: 'Awaiting Coordination',
    value: '12',
    icon: Clock,
  },
  {
    label: 'In Progress',
    value: '28',
    icon: TrendingUp,
  },
  {
    label: 'Completed',
    value: '116',
    icon: CheckCircle2,
  },
]

const exampleDonations = [
  {
    title: 'Winter jackets donation',
    donorName: 'Sarah M.',
    category: 'Clothing',
    quantity: '24 items',
    location: 'Koramangala, Bengaluru',
    createdDate: '18 Aug 2024',
    assignedNgo: 'Greenfield Community Trust',
    status: 'Coordinating',
    statusVariant: 'warning' as const,
    coordinationStatus: 'NGO Assigned',
    description: 'Example donation showing an active coordination in progress with assigned NGO partner.',
  },
  {
    title: 'School stationery pack',
    donorName: 'Anita R.',
    category: 'Education supplies',
    quantity: '32 kits',
    location: 'Whitefield, Bengaluru',
    createdDate: '17 Aug 2024',
    assignedNgo: null,
    status: 'Started',
    statusVariant: 'default' as const,
    coordinationStatus: 'NGO Not Assigned',
    description: 'Illustrative record showing a newly created donation awaiting NGO assignment.',
  },
  {
    title: 'Household essentials set',
    donorName: 'Greenfield Office',
    category: 'Home essentials',
    quantity: '11 bundles',
    location: 'Indiranagar, Bengaluru',
    createdDate: '16 Aug 2024',
    assignedNgo: 'Sunrise Women Collective',
    status: 'Received',
    statusVariant: 'success' as const,
    coordinationStatus: 'Collection Complete',
    description: 'Example record for a donation that has been successfully collected and received.',
  },
  {
    title: 'Mixed footwear donation',
    donorName: 'Northside Residency',
    category: 'Footwear',
    quantity: '18 pairs',
    location: 'Hebbal, Bengaluru',
    createdDate: '15 Aug 2024',
    assignedNgo: 'Youth Development Initiative',
    status: 'Coordinating',
    statusVariant: 'warning' as const,
    coordinationStatus: 'Pickup Scheduled',
    description: 'Planned workflow example showing a scheduled pickup with coordination in progress.',
  },
  {
    title: 'Educational books collection',
    donorName: 'City Library Project',
    category: 'Books',
    quantity: '156 books',
    location: 'Jayanagar, Bengaluru',
    createdDate: '12 Aug 2024',
    assignedNgo: 'Tech for Good Society',
    status: 'Completed',
    statusVariant: 'success' as const,
    coordinationStatus: 'Collection Complete',
    description: 'Sample record for a completed donation with successful coordination and collection.',
  },
  {
    title: 'Kitchen appliances donation',
    donorName: 'Tech Park Wellness',
    category: 'Household',
    quantity: '8 items',
    location: 'Outer Ring Road, Bengaluru',
    createdDate: '10 Aug 2024',
    assignedNgo: null,
    status: 'Started',
    statusVariant: 'default' as const,
    coordinationStatus: 'NGO Not Assigned',
    description: 'Example donation awaiting review and assignment to an appropriate NGO partner.',
  },
]

const filterStatuses = [
  { label: 'All', value: 'all' },
  { label: 'Started', value: 'started' },
  { label: 'Coordinating', value: 'coordinating' },
  { label: 'Received', value: 'received' },
  { label: 'Completed', value: 'completed' },
]

export function DonationOversightPage() {
  return (
    <div className="space-y-8 lg:space-y-10">
      <section className="relative overflow-hidden rounded-[2rem] border border-emerald-100 bg-white px-6 py-8 shadow-sm sm:px-8 sm:py-10">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,_rgba(16,185,129,0.12),_transparent_28%)]" />

        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <Badge variant="success">Donation administration</Badge>
            <h1 className="mt-5 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Donation Management
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              This page is a visual foundation for donation oversight, coordination tracking, and
              status management. The content shown here is illustrative only and does not represent
              actual ClosetToCare platform donation records.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button size="lg" variant="outline">
              Export List
            </Button>
          </div>
        </div>
      </section>

      <section aria-labelledby="donation-summary-heading" className="space-y-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">Summary</p>
          <h2 id="donation-summary-heading" className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Donation oversight and status breakdown.
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {managementSummaryCards.map((card) => {
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

      <section className="space-y-4" aria-labelledby="donation-list-heading">
        <div className="space-y-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
              Management
            </p>
            <h2 id="donation-list-heading" className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              Donations requiring coordination and oversight.
            </h2>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:gap-3">
            <div className="flex-1 min-w-0">
              <Input
                type="text"
                placeholder="Search donation by title, donor, or NGO..."
                className="w-full"
                leftIcon={<Search className="size-5 text-slate-400" aria-hidden="true" />}
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {filterStatuses.map((filter) => (
                <Button key={filter.value} size="sm" variant="outline">
                  {filter.label}
                </Button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-4">
          {exampleDonations.map((donation) => (
            <Card key={donation.title} className="border-slate-200 shadow-sm">
              <CardBody className="p-0">
                <div className="flex flex-col gap-5 p-6 lg:flex-row lg:items-start lg:justify-between">
                  <div className="min-w-0 flex-1 space-y-4">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-lg font-semibold text-slate-900">{donation.title}</h3>
                      <Badge variant={donation.statusVariant}>{donation.status}</Badge>
                    </div>
                    <p className="text-sm leading-6 text-slate-600">{donation.description}</p>

                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                      <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4">
                        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                          Donor name
                        </p>
                        <p className="mt-2 text-sm font-medium text-slate-900">
                          <span className="inline-flex items-center gap-1.5">
                            <Users className="size-4 text-emerald-600" aria-hidden="true" />
                            {donation.donorName}
                          </span>
                        </p>
                      </div>
                      <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4">
                        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                          Category
                        </p>
                        <p className="mt-2 text-sm font-medium text-slate-900">
                          <span className="inline-flex items-center gap-1.5">
                            <Gift className="size-4 text-emerald-600" aria-hidden="true" />
                            {donation.category}
                          </span>
                        </p>
                      </div>
                      <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4">
                        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                          Quantity
                        </p>
                        <p className="mt-2 text-sm font-medium text-slate-900">{donation.quantity}</p>
                      </div>
                      <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4">
                        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                          Pickup location
                        </p>
                        <p className="mt-2 text-sm font-medium text-slate-900">
                          <span className="inline-flex items-start gap-1.5">
                            <MapPin className="mt-0.5 size-4 shrink-0 text-emerald-600" aria-hidden="true" />
                            <span>{donation.location}</span>
                          </span>
                        </p>
                      </div>
                      <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4">
                        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                          Created date
                        </p>
                        <p className="mt-2 text-sm font-medium text-slate-900">{donation.createdDate}</p>
                      </div>
                      <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4">
                        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                          Assigned NGO
                        </p>
                        <p className="mt-2 text-sm font-medium text-slate-900">
                          {donation.assignedNgo || (
                            <span className="text-slate-500">Not assigned</span>
                          )}
                        </p>
                      </div>
                      <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4">
                        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                          Status
                        </p>
                        <p className="mt-2 text-sm font-medium text-slate-900">{donation.status}</p>
                      </div>
                      <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4">
                        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                          Coordination
                        </p>
                        <p className="mt-2 text-sm font-medium text-slate-900">
                          {donation.coordinationStatus}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex shrink-0 flex-col gap-3 sm:flex-row sm:flex-wrap lg:flex-col lg:items-stretch">
                    <Button size="sm" variant="outline">
                      <Eye className="size-4" aria-hidden="true" />
                      View Details
                    </Button>
                    {donation.status === 'Started' && (
                      <>
                        <Button size="sm">
                          <UserPlus className="size-4" aria-hidden="true" />
                          Assign NGO
                        </Button>
                      </>
                    )}
                    {donation.status === 'Coordinating' && (
                      <>
                        <Button size="sm" variant="outline">
                          <Truck className="size-4" aria-hidden="true" />
                          View Pickup
                        </Button>
                        <Button size="sm" variant="outline">
                          <AlertCircle className="size-4" aria-hidden="true" />
                          Mark for Attention
                        </Button>
                      </>
                    )}
                    {donation.status === 'Received' && (
                      <Button size="sm" variant="outline">
                        <CheckCircle2 className="size-4" aria-hidden="true" />
                        Confirm Complete
                      </Button>
                    )}
                    {donation.status === 'Completed' && (
                      <Button size="sm" variant="outline">
                        <Eye className="size-4" aria-hidden="true" />
                        View Record
                      </Button>
                    )}
                  </div>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </section>

      <section aria-labelledby="donation-empty-heading">
        <Card className="border-dashed border-emerald-200 bg-emerald-50/40 shadow-sm">
          <CardHeader>
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
              Planned capacity area
            </p>
            <h2 id="donation-empty-heading" className="mt-1 text-xl font-semibold text-slate-900">
              When new donations are created, they will appear in the management list above.
            </h2>
          </CardHeader>
          <CardBody className="space-y-4 p-6">
            <div className="mx-auto flex size-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
              <Inbox className="size-5" aria-hidden="true" />
            </div>
            <p className="mx-auto max-w-2xl text-center text-sm leading-6 text-slate-600">
              This section illustrates where additional donation records and moderation tasks will be
              displayed for admin oversight and coordination. It is purely a layout example and does
              not reflect live ClosetToCare donation data.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button size="sm" variant="outline">
                Refresh list
              </Button>
              <Button size="sm" variant="outline">
                View Pending Assignments
              </Button>
            </div>
          </CardBody>
        </Card>
      </section>
    </div>
  )
}
