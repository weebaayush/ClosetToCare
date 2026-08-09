import {
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  Clock,
  Gift,
  TrendingUp,
  Users,
  UserCheck,
  Activity,
  FileText,
} from 'lucide-react'
import { Badge, Button, Card, CardBody } from '../../components/ui'
import { ROUTE_PATHS } from '../../routes/routePaths'
import { useNavigate } from 'react-router-dom'

const summaryMetrics = [
  {
    label: 'Total Donors',
    value: '284',
    icon: Users,
    trend: '+12 this month',
  },
  {
    label: 'Registered NGOs',
    value: '45',
    icon: UserCheck,
    trend: '+3 this month',
  },
  {
    label: 'Active Donations',
    value: '67',
    icon: Gift,
    trend: '+8 this week',
  },
  {
    label: 'Completed Donations',
    value: '156',
    icon: CheckCircle2,
    trend: '+24 this month',
  },
]

const platformOverviewCards = [
  {
    label: 'Awaiting Coordination',
    value: '12',
    description: 'Donations waiting for NGO assignment',
    color: 'bg-amber-50',
    accentColor: 'bg-amber-100 text-amber-700',
  },
  {
    label: 'Scheduled Pickups',
    value: '28',
    description: 'Pickups scheduled for this week',
    color: 'bg-blue-50',
    accentColor: 'bg-blue-100 text-blue-700',
  },
  {
    label: 'Collections Completed',
    value: '156',
    description: 'Donations successfully collected',
    color: 'bg-emerald-50',
    accentColor: 'bg-emerald-100 text-emerald-700',
  },
  {
    label: 'Pending NGO Registrations',
    value: '7',
    description: 'NGO applications awaiting review',
    color: 'bg-purple-50',
    accentColor: 'bg-purple-100 text-purple-700',
  },
]

const recentActivityEvents = [
  {
    type: 'Donor Registered',
    title: 'Sarah M. registered as a new donor',
    timestamp: '2 hours ago',
    badge: 'new',
    badgeVariant: 'success' as const,
    description: 'Example activity event showing a new donor registration.',
  },
  {
    type: 'NGO Registration',
    title: 'Green Future NGO submitted registration application',
    timestamp: '5 hours ago',
    badge: 'pending',
    badgeVariant: 'warning' as const,
    description: 'Illustrative event for an NGO application awaiting admin review.',
  },
  {
    type: 'Donation Created',
    title: 'Greenfield Office donated 24 items - Winter clothing bundle',
    timestamp: '8 hours ago',
    badge: 'active',
    badgeVariant: 'default' as const,
    description: 'Example event showing a new donation created and awaiting coordination.',
  },
  {
    type: 'Pickup Completed',
    title: 'Collection completed for "School stationery pack" donation',
    timestamp: '1 day ago',
    badge: 'completed',
    badgeVariant: 'success' as const,
    description: 'Sample activity event showing a successfully completed collection.',
  },
]

const attentionItems = [
  {
    title: 'NGO Application: Sunrise Community Center',
    description: 'Pending review for 4 days. Application includes documents and references.',
    priority: 'high',
    priorityBadge: 'danger' as const,
    type: 'NGO Review',
  },
  {
    title: 'Donation Coordination Delay: Mixed household items',
    description: 'Awaiting NGO assignment for 3 days. Donor has requested pickup window.',
    priority: 'medium',
    priorityBadge: 'warning' as const,
    type: 'Coordination',
  },
  {
    title: 'Pickup Rescheduling Request: Winter jackets',
    description: 'Volunteer unavailable for scheduled pickup on Aug 20. Requires rescheduling.',
    priority: 'medium',
    priorityBadge: 'warning' as const,
    type: 'Pickup Issue',
  },
]

export function AdminDashboardPage() {
  const navigate = useNavigate()

  return (
    <div className="space-y-8 lg:space-y-10">
      <section className="relative overflow-hidden rounded-[2rem] border border-emerald-100 bg-white px-6 py-8 shadow-sm sm:px-8 sm:py-10">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,_rgba(16,185,129,0.12),_transparent_28%)]" />

        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <Badge variant="success">Platform administration</Badge>
            <h1 className="mt-5 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Admin Dashboard
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              This dashboard provides a high-level overview of platform activity, pending tasks, and
              key metrics. The content shown here is illustrative only and represents example
              frontend data, not actual ClosetToCare platform statistics.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button size="lg" variant="outline">
              Export Report
            </Button>
            <Button
              size="lg"
              onClick={() => {
                navigate(ROUTE_PATHS.admin.donations)
              }}
            >
              View All Donations
              <ArrowRight className="size-4" aria-hidden="true" />
            </Button>
          </div>
        </div>
      </section>

      <section aria-labelledby="metrics-heading" className="space-y-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
            Key metrics
          </p>
          <h2 id="metrics-heading" className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Platform summary at a glance.
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {summaryMetrics.map((metric) => {
            const Icon = metric.icon

            return (
              <Card key={metric.label} className="border-slate-200 shadow-sm">
                <CardBody className="p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-medium text-slate-500">{metric.label}</p>
                      <p className="mt-2 text-3xl font-semibold text-slate-900">{metric.value}</p>
                      <p className="mt-2 text-xs font-medium text-emerald-700">{metric.trend}</p>
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

      <section aria-labelledby="overview-heading" className="space-y-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">Overview</p>
          <h2 id="overview-heading" className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Platform coordination snapshot.
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {platformOverviewCards.map((item) => (
            <Card key={item.label} className="border-slate-200 shadow-sm">
              <CardBody className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-medium text-slate-500">{item.label}</p>
                    <p className="mt-2 text-3xl font-semibold text-slate-900">{item.value}</p>
                    <p className="mt-2 text-sm text-slate-600">{item.description}</p>
                  </div>
                  <div className={`flex size-12 items-center justify-center rounded-2xl ${item.accentColor}`}>
                    <TrendingUp className="size-5" aria-hidden="true" />
                  </div>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </section>

      <div className="grid gap-8 lg:grid-cols-3">
        <section aria-labelledby="activity-heading" className="lg:col-span-2 space-y-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">Activity</p>
            <h2 id="activity-heading" className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              Recent platform activity.
            </h2>
          </div>

          <Card className="border-slate-200 shadow-sm">
            <CardBody className="p-0">
              <div className="divide-y divide-slate-200">
                {recentActivityEvents.map((event) => (
                  <article key={event.title} className="flex gap-4 p-5">
                    <div className="mt-1 flex size-8 shrink-0 items-center justify-center rounded-lg bg-slate-100">
                      <Activity className="size-4 text-slate-600" aria-hidden="true" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <p className="text-sm font-semibold text-slate-900">{event.type}</p>
                        <Badge variant={event.badgeVariant} size="sm">
                          {event.badge}
                        </Badge>
                      </div>
                      <p className="mt-1 text-sm font-medium text-slate-900">{event.title}</p>
                      <p className="mt-2 text-xs text-slate-600">{event.description}</p>
                      <p className="mt-2 text-xs font-medium text-slate-400">{event.timestamp}</p>
                    </div>
                  </article>
                ))}
              </div>
            </CardBody>
          </Card>
        </section>

        <section aria-labelledby="attention-heading" className="space-y-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
              Attention
            </p>
            <h2 id="attention-heading" className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              Requires admin review.
            </h2>
          </div>

          <div className="space-y-3">
            {attentionItems.map((item) => (
              <Card key={item.title} className="border-slate-200 shadow-sm">
                <CardBody className="p-5">
                  <div className="flex gap-3">
                    <div className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-lg bg-rose-50 text-rose-700">
                      <AlertCircle className="size-4" aria-hidden="true" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <p className="text-sm font-semibold text-slate-900">{item.title}</p>
                        <Badge variant={item.priorityBadge} size="sm">
                          {item.type}
                        </Badge>
                      </div>
                      <p className="mt-1 text-xs text-slate-600">{item.description}</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        <Button size="sm" variant="outline">
                          Review
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </section>
      </div>

      <section className="space-y-4" aria-labelledby="quick-actions-heading">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
            Quick actions
          </p>
          <h2 id="quick-actions-heading" className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Common administration tasks.
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Button
            size="lg"
            variant="outline"
            onClick={() => {
              navigate(ROUTE_PATHS.admin.ngos)
            }}
          >
            <UserCheck className="size-5" aria-hidden="true" />
            Manage NGOs
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => {
              navigate(ROUTE_PATHS.admin.donations)
            }}
          >
            <Gift className="size-5" aria-hidden="true" />
            Manage Donations
          </Button>
          <Button size="lg" variant="outline">
            <FileText className="size-5" aria-hidden="true" />
            View Reports
          </Button>
          <Button size="lg" variant="outline">
            <Clock className="size-5" aria-hidden="true" />
            Pending Approvals
          </Button>
          <Button size="lg" variant="outline">
            <Users className="size-5" aria-hidden="true" />
            Volunteer Management
          </Button>
          <Button size="lg" variant="outline">
            <TrendingUp className="size-5" aria-hidden="true" />
            Analytics
          </Button>
        </div>
      </section>
    </div>
  )
}
