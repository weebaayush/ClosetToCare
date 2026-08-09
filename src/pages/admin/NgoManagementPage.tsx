import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Mail,
  MapPin,
  Search,
  ShieldAlert,
  Users,
  X,
  RotateCcw,
  Inbox,
} from 'lucide-react'
import { Badge, Button, Card, CardBody, CardHeader, Input } from '../../components/ui'

const managementSummaryCards = [
  {
    label: 'Total NGOs',
    value: '45',
    icon: Users,
  },
  {
    label: 'Verified NGOs',
    value: '38',
    icon: CheckCircle2,
  },
  {
    label: 'Pending Review',
    value: '5',
    icon: Clock,
  },
  {
    label: 'Suspended NGOs',
    value: '2',
    icon: ShieldAlert,
  },
]

const exampleNgos = [
  {
    name: 'Greenfield Community Trust',
    contactPerson: 'Rajesh Kumar',
    email: 'contact@greenfield.org',
    location: 'Bengaluru',
    registrationDate: '15 Jan 2024',
    status: 'Verified',
    statusVariant: 'success' as const,
    focusArea: 'Community welfare',
    description: 'Example NGO record showing a verified organization with complete documentation.',
  },
  {
    name: 'Sunrise Women Collective',
    contactPerson: 'Priya Sharma',
    email: 'info@sunrisewomen.org',
    location: 'Pune',
    registrationDate: '08 Feb 2024',
    status: 'Verified',
    statusVariant: 'success' as const,
    focusArea: 'Women empowerment',
    description: 'Illustrative record for an approved NGO with active status.',
  },
  {
    name: 'Youth Development Initiative',
    contactPerson: 'Arun Desai',
    email: 'hello@youthdev.org',
    location: 'Mumbai',
    registrationDate: '22 Jul 2024',
    status: 'Pending Review',
    statusVariant: 'warning' as const,
    focusArea: 'Youth education',
    description: 'Example record showing a newly registered NGO awaiting admin verification.',
  },
  {
    name: 'Urban Aid Foundation',
    contactPerson: 'Meera Chopra',
    email: 'support@urbanaid.org',
    location: 'Delhi',
    registrationDate: '03 May 2023',
    status: 'Suspended',
    statusVariant: 'danger' as const,
    focusArea: 'Urban poverty relief',
    description: 'Sample record for an organization with suspended status pending review.',
  },
  {
    name: 'Tech for Good Society',
    contactPerson: 'Vikram Nair',
    email: 'team@techforgood.org',
    location: 'Bengaluru',
    registrationDate: '19 Jun 2024',
    status: 'Pending Review',
    statusVariant: 'warning' as const,
    focusArea: 'Digital literacy',
    description: 'Planned workflow example for a pending NGO application with documentation.',
  },
  {
    name: 'Rural Connect Initiative',
    contactPerson: 'Suresh Patel',
    email: 'reach@ruralconnect.org',
    location: 'Ahmedabad',
    registrationDate: '10 Sep 2023',
    status: 'Verified',
    statusVariant: 'success' as const,
    focusArea: 'Rural development',
    description: 'Example NGO record showing a long-standing verified partner organization.',
  },
]

const filterCategories = [
  { label: 'All', value: 'all' },
  { label: 'Verified', value: 'verified' },
  { label: 'Pending Review', value: 'pending' },
  { label: 'Suspended', value: 'suspended' },
]

export function NgoManagementPage() {
  return (
    <div className="space-y-8 lg:space-y-10">
      <section className="relative overflow-hidden rounded-[2rem] border border-emerald-100 bg-white px-6 py-8 shadow-sm sm:px-8 sm:py-10">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,_rgba(16,185,129,0.12),_transparent_28%)]" />

        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <Badge variant="success">NGO administration</Badge>
            <h1 className="mt-5 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              NGO Management
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              This page is a visual foundation for NGO verification, approval management, and
              organization oversight. The content shown here is illustrative only and does not
              represent actual ClosetToCare NGO partner data.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button size="lg" variant="outline">
              Export List
            </Button>
          </div>
        </div>
      </section>

      <section aria-labelledby="ngo-summary-heading" className="space-y-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">Summary</p>
          <h2 id="ngo-summary-heading" className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            NGO overview and status breakdown.
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

      <section className="space-y-4" aria-labelledby="ngo-list-heading">
        <div className="space-y-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
              Management
            </p>
            <h2 id="ngo-list-heading" className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              NGO records and verification status.
            </h2>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:gap-3">
            <div className="flex-1 min-w-0">
              <Input
                type="text"
                placeholder="Search NGO by name, email, or location..."
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
          {exampleNgos.map((ngo) => (
            <Card key={ngo.name} className="border-slate-200 shadow-sm">
              <CardBody className="p-0">
                <div className="flex flex-col gap-5 p-6 lg:flex-row lg:items-start lg:justify-between">
                  <div className="min-w-0 flex-1 space-y-4">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-lg font-semibold text-slate-900">{ngo.name}</h3>
                      <Badge variant={ngo.statusVariant}>{ngo.status}</Badge>
                    </div>
                    <p className="text-sm leading-6 text-slate-600">{ngo.description}</p>

                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                      <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4">
                        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                          Contact person
                        </p>
                        <p className="mt-2 text-sm font-medium text-slate-900">{ngo.contactPerson}</p>
                      </div>
                      <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4">
                        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                          Email
                        </p>
                        <p className="mt-2 text-sm font-medium text-slate-900">
                          <span className="inline-flex items-center gap-1.5">
                            <Mail className="size-4 text-emerald-600" aria-hidden="true" />
                            {ngo.email}
                          </span>
                        </p>
                      </div>
                      <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4">
                        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                          Location
                        </p>
                        <p className="mt-2 text-sm font-medium text-slate-900">
                          <span className="inline-flex items-center gap-1.5">
                            <MapPin className="size-4 text-emerald-600" aria-hidden="true" />
                            {ngo.location}
                          </span>
                        </p>
                      </div>
                      <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4">
                        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                          Registration date
                        </p>
                        <p className="mt-2 text-sm font-medium text-slate-900">{ngo.registrationDate}</p>
                      </div>
                      <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4">
                        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                          Focus area
                        </p>
                        <p className="mt-2 text-sm font-medium text-slate-900">{ngo.focusArea}</p>
                      </div>
                      <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4">
                        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                          Verification status
                        </p>
                        <p className="mt-2 text-sm font-medium text-slate-900">{ngo.status}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex shrink-0 flex-col gap-3 sm:flex-row sm:flex-wrap lg:flex-col lg:items-stretch">
                    <Button size="sm" variant="outline">
                      View Details
                      <ArrowRight className="size-4" aria-hidden="true" />
                    </Button>
                    {ngo.status === 'Pending Review' && (
                      <>
                        <Button size="sm">Approve</Button>
                        <Button size="sm" variant="outline">
                          <X className="size-4" aria-hidden="true" />
                          Reject
                        </Button>
                      </>
                    )}
                    {ngo.status === 'Verified' && (
                      <Button size="sm" variant="outline">
                        <ShieldAlert className="size-4" aria-hidden="true" />
                        Suspend
                      </Button>
                    )}
                    {ngo.status === 'Suspended' && (
                      <Button size="sm" variant="outline">
                        <RotateCcw className="size-4" aria-hidden="true" />
                        Restore
                      </Button>
                    )}
                  </div>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </section>

      <section aria-labelledby="ngo-empty-heading">
        <Card className="border-dashed border-emerald-200 bg-emerald-50/40 shadow-sm">
          <CardHeader>
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
              Planned capacity area
            </p>
            <h2 id="ngo-empty-heading" className="mt-1 text-xl font-semibold text-slate-900">
              When additional NGO applications are submitted, they will appear in this list.
            </h2>
          </CardHeader>
          <CardBody className="space-y-4 p-6">
            <div className="mx-auto flex size-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
              <Inbox className="size-5" aria-hidden="true" />
            </div>
            <p className="mx-auto max-w-2xl text-center text-sm leading-6 text-slate-600">
              This section illustrates where new NGO applications and registrations will be displayed
              for admin review and approval. It is purely a layout example and does not reflect live
              ClosetToCare NGO partner data.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button size="sm" variant="outline">
                Refresh list
              </Button>
              <Button size="sm" variant="outline">
                View Pending Applications
              </Button>
            </div>
          </CardBody>
        </Card>
      </section>
    </div>
  )
}
