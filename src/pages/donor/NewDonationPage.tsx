import {
  ArrowLeft,
  ArrowRight,
  BellRing,
  CalendarDays,
  ChevronDown,
  ClipboardCheck,
  MapPin,
  PackagePlus,
} from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { Badge, Button, Card, CardBody, CardHeader, Input, TextArea } from '../../components/ui'
import { ROUTE_PATHS } from '../../routes/routePaths'

const donationSteps = [
  { label: 'Items', icon: PackagePlus },
  { label: 'Pickup Details', icon: MapPin },
  { label: 'Schedule', icon: CalendarDays },
  { label: 'Review', icon: ClipboardCheck },
] as const

export function NewDonationPage() {
  const navigate = useNavigate()

  const timeSlots = [
    {
      label: 'Morning',
      window: '9:00 AM–12:00 PM',
      description: 'Best for early pickups and lighter schedules.',
    },
    {
      label: 'Afternoon',
      window: '12:00 PM–3:00 PM',
      description: 'A practical middle-of-day option.',
    },
    {
      label: 'Evening',
      window: '3:00 PM–6:00 PM',
      description: 'Useful when daytime availability is limited.',
    },
  ]

  return (
    <div className="space-y-8 lg:space-y-10">
      <section className="relative overflow-hidden rounded-[2rem] border border-emerald-100 bg-white px-6 py-8 shadow-sm sm:px-8 sm:py-10">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,_rgba(16,185,129,0.12),_transparent_28%)]" />

        <Button
          variant="ghost"
          size="sm"
          className="-ml-3 text-slate-600 hover:text-emerald-700"
          leftIcon={<ArrowLeft className="size-4" aria-hidden="true" />}
          onClick={() => {
            navigate(ROUTE_PATHS.donor.donations)
          }}
        >
          Back to Donations
        </Button>

        <div className="mt-7 max-w-2xl">
          <Badge variant="success">New donation</Badge>
          <h1 className="mt-5 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Start a new donation.
          </h1>
          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
            Share reusable items with care. We’ll guide you through item details, pickup
            information, scheduling, and a final review.
          </p>
        </div>
      </section>

      <Card aria-labelledby="donation-progress-heading" className="overflow-hidden">
        <CardHeader className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
              Donation progress
            </p>
            <h2 id="donation-progress-heading" className="mt-1 text-xl font-semibold text-slate-900">
              Four simple steps to complete your donation.
            </h2>
          </div>
          <Badge variant="success" className="self-start sm:self-auto">
            Step 1 of 4
          </Badge>
        </CardHeader>

        <CardBody className="p-5 sm:p-6">
          <ol className="relative grid gap-3 md:grid-cols-4 md:gap-4 md:before:absolute md:before:left-[12.5%] md:before:right-[12.5%] md:before:top-6 md:before:h-0.5 md:before:bg-slate-200">
            {donationSteps.map((step, index) => {
              const Icon = step.icon
              const isActive = index === 0

              return (
                <li
                  key={step.label}
                  aria-current={isActive ? 'step' : undefined}
                  className={[
                    'relative z-10 flex items-center gap-4 rounded-2xl border p-4',
                    'md:flex-col md:border-0 md:bg-transparent md:p-0 md:text-center',
                    isActive
                      ? 'border-emerald-200 bg-emerald-50/70'
                      : 'border-slate-200 bg-slate-50/70',
                  ].join(' ')}
                >
                  <div
                    className={[
                      'flex size-12 shrink-0 items-center justify-center rounded-2xl border shadow-sm',
                      isActive
                        ? 'border-emerald-600 bg-emerald-600 text-white'
                        : 'border-slate-200 bg-white text-slate-400',
                    ].join(' ')}
                  >
                    <Icon className="size-5" aria-hidden="true" />
                  </div>

                  <div>
                    <p
                      className={[
                        'text-xs font-semibold uppercase tracking-wide',
                        isActive ? 'text-emerald-700' : 'text-slate-400',
                      ].join(' ')}
                    >
                      Step {index + 1}
                    </p>
                    <p
                      className={[
                        'mt-1 text-sm font-semibold',
                        isActive ? 'text-slate-900' : 'text-slate-500',
                      ].join(' ')}
                    >
                      {step.label}
                    </p>
                    <p
                      className={[
                        'mt-1 text-xs font-medium',
                        isActive ? 'text-emerald-700' : 'text-slate-400',
                      ].join(' ')}
                    >
                      {isActive ? 'Current step' : 'Upcoming'}
                    </p>
                  </div>
                </li>
              )
            })}
          </ol>
        </CardBody>
      </Card>

      <Card className="border-emerald-100 bg-emerald-50/40">
        <CardHeader className="border-emerald-100">
          <div className="flex items-start gap-4">
            <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
              <PackagePlus className="size-5" aria-hidden="true" />
            </div>
            <div>
              <Badge variant="success">Active step</Badge>
              <h2 className="mt-3 text-xl font-semibold text-slate-900">Items</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                This first step will collect the details of the reusable items you want to donate.
              </p>
            </div>
          </div>
        </CardHeader>
        <CardBody className="rounded-b-2xl bg-white p-5 sm:p-6">
          <form
            aria-label="Donation item details"
            className="space-y-7"
            onSubmit={(event) => {
              event.preventDefault()
            }}
          >
            <div className="grid gap-5 md:grid-cols-2 md:gap-6">
              <div className="md:col-span-2">
                <Input
                  id="donation-title"
                  name="donationTitle"
                  label="Donation title or item group name"
                  placeholder="Enter a short, descriptive title"
                  hint="Use a name that clearly describes this group of items."
                />
              </div>

              <label
                className="flex w-full flex-col gap-1.5 text-sm font-medium text-slate-700"
                htmlFor="item-category"
              >
                <span>Item category</span>
                <span className="relative">
                  <select
                    id="item-category"
                    name="itemCategory"
                    defaultValue=""
                    className="h-11 w-full appearance-none rounded-xl border border-slate-300 bg-white px-4 pr-10 text-sm text-slate-900 shadow-sm transition-colors focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                    aria-describedby="item-category-hint"
                  >
                    <option value="" disabled>
                      Select a category
                    </option>
                    <option value="clothing">Clothing</option>
                    <option value="footwear">Footwear</option>
                    <option value="household-items">Household Items</option>
                    <option value="books">Books</option>
                    <option value="other">Other</option>
                  </select>
                  <ChevronDown
                    className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-slate-400"
                    aria-hidden="true"
                  />
                </span>
                <span id="item-category-hint" className="text-xs font-normal text-slate-500">
                  Choose the category that best represents the items.
                </span>
              </label>

              <label
                className="flex w-full flex-col gap-1.5 text-sm font-medium text-slate-700"
                htmlFor="item-condition"
              >
                <span>Item condition</span>
                <span className="relative">
                  <select
                    id="item-condition"
                    name="itemCondition"
                    defaultValue=""
                    className="h-11 w-full appearance-none rounded-xl border border-slate-300 bg-white px-4 pr-10 text-sm text-slate-900 shadow-sm transition-colors focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                    aria-describedby="item-condition-hint"
                  >
                    <option value="" disabled>
                      Select a condition
                    </option>
                    <option value="new">New</option>
                    <option value="like-new">Like New</option>
                    <option value="good">Good</option>
                    <option value="usable">Usable</option>
                  </select>
                  <ChevronDown
                    className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-slate-400"
                    aria-hidden="true"
                  />
                </span>
                <span id="item-condition-hint" className="text-xs font-normal text-slate-500">
                  Select the condition that applies to most items.
                </span>
              </label>

              <div className="md:max-w-sm">
                <Input
                  id="item-quantity"
                  name="itemQuantity"
                  type="number"
                  min="1"
                  inputMode="numeric"
                  label="Item quantity"
                  placeholder="Enter quantity"
                  hint="Enter the total number of items in this group."
                />
              </div>

              <div className="md:col-span-2">
                <TextArea
                  id="donation-description"
                  name="donationDescription"
                  label="Donation description"
                  placeholder="Describe the items you plan to donate"
                  hint="Include useful details such as sizes, materials, or anything else a receiving organization should know."
                  rows={5}
                />
              </div>
            </div>

            <div className="flex flex-col gap-4 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-xl text-sm leading-6 text-slate-500">
                Complete the item details before moving on to pickup information.
              </p>
              <Button
                type="button"
                size="lg"
                className="w-full sm:w-auto"
                rightIcon={<ArrowRight className="size-4" aria-hidden="true" />}
              >
                Continue
              </Button>
            </div>
          </form>
        </CardBody>
      </Card>

      <Card className="border-emerald-100 bg-emerald-50/40">
        <CardHeader className="border-emerald-100">
          <div className="flex items-start gap-4">
            <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
              <CalendarDays className="size-5" aria-hidden="true" />
            </div>
            <div>
              <Badge variant="outline" className="border-emerald-200 bg-white text-emerald-700">
                Step 3 preview
              </Badge>
              <h2 className="mt-3 text-xl font-semibold text-slate-900">Pickup Schedule</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Pick a preferred pickup window and leave a note for the team. The schedule shown
                here is part of the frontend experience and does not represent a confirmed pickup.
              </p>
            </div>
          </div>
        </CardHeader>

        <CardBody className="rounded-b-2xl bg-white p-5 sm:p-6">
          <form
            aria-label="Pickup schedule details"
            className="space-y-7"
            onSubmit={(event) => {
              event.preventDefault()
            }}
          >
            <div className="grid gap-5 md:grid-cols-2 md:gap-6">
              <div>
                <Input
                  id="preferred-pickup-date"
                  name="preferredPickupDate"
                  type="date"
                  label="Preferred pickup date"
                  hint="Choose the date you would like to request first."
                />
              </div>

              <div>
                <Input
                  id="alternative-pickup-date"
                  name="alternativePickupDate"
                  type="date"
                  label="Alternative pickup date"
                  hint="Add a backup date in case the preferred one is unavailable."
                />
              </div>
            </div>

            <div>
              <div className="mb-3 flex items-center gap-2">
                <BellRing className="size-4 text-emerald-700" aria-hidden="true" />
                <label className="text-sm font-medium text-slate-700" htmlFor="pickup-time-slot">
                  Preferred time slot
                </label>
              </div>
              <div className="grid gap-3 md:grid-cols-3">
                {timeSlots.map((slot) => (
                  <label
                    key={slot.label}
                    className="flex cursor-pointer flex-col rounded-2xl border border-slate-200 bg-slate-50 p-4 transition-colors hover:border-emerald-300 hover:bg-emerald-50/40"
                  >
                    <span className="flex items-center gap-3">
                      <input
                        id="pickup-time-slot"
                        name="pickupTimeSlot"
                        type="radio"
                        value={slot.label.toLowerCase()}
                        className="size-4 border-slate-300 text-emerald-600 focus:ring-emerald-500"
                      />
                      <span className="text-sm font-semibold text-slate-900">{slot.label}</span>
                    </span>
                    <span className="mt-2 text-sm font-medium text-emerald-700">{slot.window}</span>
                    <span className="mt-1 text-xs leading-5 text-slate-500">{slot.description}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <TextArea
                id="pickup-instructions"
                name="pickupInstructions"
                label="Pickup instructions or notes"
                placeholder="Share access details, preferred contact instructions, or any helpful notes."
                hint="This helps the pickup flow stay clear in the interface. It does not submit a real scheduling request yet."
                rows={5}
              />
            </div>

            <div className="rounded-2xl border border-dashed border-emerald-200 bg-emerald-50/60 p-4">
              <label className="flex items-start gap-3 text-sm text-slate-700">
                <input
                  id="same-as-profile-address"
                  name="sameAsProfileAddress"
                  type="checkbox"
                  className="mt-1 size-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
                />
                <span>
                  <span className="block font-medium text-slate-900">
                    Pickup address is the same as my profile address.
                  </span>
                  <span className="mt-1 block text-xs leading-5 text-slate-500">
                    UI-only checkbox for the scheduled pickup experience.
                  </span>
                </span>
              </label>
            </div>

            <div className="flex flex-col gap-4 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-xl text-sm leading-6 text-slate-500">
                Use this section to sketch your preferred pickup timing before moving on to the
                review step.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button
                  type="button"
                  variant="outline"
                  size="lg"
                  className="w-full border-emerald-200 bg-white text-emerald-700 hover:border-emerald-300 hover:text-emerald-800 sm:w-auto"
                  leftIcon={<ArrowLeft className="size-4" aria-hidden="true" />}
                >
                  Previous
                </Button>
                <Button
                  type="button"
                  size="lg"
                  className="w-full sm:w-auto"
                  rightIcon={<ArrowRight className="size-4" aria-hidden="true" />}
                >
                  Continue
                </Button>
              </div>
            </div>
          </form>
        </CardBody>
      </Card>
    </div>
  )
}
