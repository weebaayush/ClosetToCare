import {
  CalendarClock,
  Check,
  ClipboardList,
  Compass,
  Eye,
  Gift,
  PackageOpen,
  Route,
  ShieldCheck,
} from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/ui'
import { ROUTE_PATHS } from '../../routes/routePaths'

const journeyStages = [
  {
    icon: PackageOpen,
    title: 'Choose what to give',
    text: 'Identify clothes or household items that are no longer needed.',
    detail:
      'Look through your closet and home for things in good, usable condition that could serve someone else better than they serve your storage.',
  },
  {
    icon: ClipboardList,
    title: 'Share donation details',
    text: 'Provide basic information about the items.',
    detail:
      'A short description of what you are giving — the kind of items, their condition, and anything helpful to know about them.',
  },
  {
    icon: CalendarClock,
    title: 'Coordinate the donation',
    text: 'The donation journey moves through its next coordination stage.',
    detail:
      'Once the details are in, the journey is designed to move toward collection and hand-over in a way that stays clear at every point.',
  },
  {
    icon: Gift,
    title: 'Give items a second life',
    text: 'The donated items move toward their intended purpose of reuse and care.',
    detail:
      'The journey ends where it matters — with your items on their way to being used again instead of sitting forgotten.',
  },
]

export function HowItWorksPage() {
  const navigate = useNavigate()

  return (
    <>
      <section aria-labelledby="how-it-works-hero-heading">
        <div className="relative overflow-hidden rounded-3xl border border-emerald-100 bg-white px-6 py-14 sm:px-10 sm:py-16 lg:py-20">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-emerald-500 via-emerald-300 to-amber-200"
          />
          <div
            aria-hidden="true"
            className="absolute -right-24 -top-24 size-72 rounded-full bg-emerald-50"
          />
          <div className="relative mx-auto max-w-3xl text-center">
            <p className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-800">
              <Route className="size-3.5" aria-hidden="true" />
              The donation journey
            </p>
            <h1
              id="how-it-works-hero-heading"
              className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-5xl"
            >
              How a donation moves through ClosetToCare.
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              This page walks you through the journey of a donation — from the moment you decide to
              give an item you no longer need, to the steps that carry it toward its next stage.
              Every part of the process is designed to be simple to follow and clear to understand.
            </p>
          </div>
        </div>
      </section>

      {/* Detailed donation journey */}
      <section aria-labelledby="journey-heading" className="mt-20 lg:mt-28">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="journey-heading"
            className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl"
          >
            The four stages of every donation.
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            One connected journey, from a decision in front of your closet to an item starting its
            second life.
          </p>
        </div>

        <div className="relative mx-auto mt-14 max-w-3xl">
          {/* Connecting rail (desktop/tablet) */}
          <div
            aria-hidden="true"
            className="absolute bottom-8 left-7 top-8 hidden w-px bg-gradient-to-b from-emerald-400 via-emerald-200 to-amber-200 sm:block"
          />
          <ol className="flex flex-col gap-6 sm:gap-8">
            {journeyStages.map((stage, index) => (
              <li key={stage.title} className="relative sm:pl-24">
                {/* Numbered node on the rail */}
                <div className="mb-4 flex items-center gap-3 sm:absolute sm:left-0 sm:top-6 sm:mb-0 sm:block">
                  <span className="relative z-10 flex size-14 items-center justify-center rounded-2xl border border-emerald-200 bg-white text-emerald-700 shadow-sm">
                    <stage.icon className="size-6" aria-hidden="true" />
                    <span className="absolute -right-1.5 -top-1.5 flex size-6 items-center justify-center rounded-full bg-emerald-600 text-xs font-bold text-white">
                      {index + 1}
                    </span>
                  </span>
                </div>
                <div className="rounded-3xl border border-emerald-100 bg-white p-6 shadow-sm sm:p-7">
                  <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
                    Stage {index + 1} of {journeyStages.length}
                  </p>
                  <h3 className="mt-1.5 text-lg font-semibold text-slate-900">{stage.title}</h3>
                  <p className="mt-2 text-sm font-medium leading-6 text-slate-700">{stage.text}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{stage.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Why transparency matters */}
      <section aria-labelledby="transparency-heading" className="mt-20 lg:mt-28">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="max-w-xl">
            <p className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-800">
              <Eye className="size-3.5" aria-hidden="true" />
              Why transparency matters
            </p>
            <h2
              id="transparency-heading"
              className="mt-5 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl"
            >
              Giving feels better when you can see the journey.
            </h2>
            <div className="mt-6 space-y-5">
              <div className="flex gap-4">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-emerald-600/10 text-emerald-700">
                  <Compass className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-semibold text-slate-900">Clarity at every stage</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Donors should always be able to tell which stage their donation journey has
                    reached — no guesswork, no wondering.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-emerald-600/10 text-emerald-700">
                  <Route className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-semibold text-slate-900">A process that explains itself</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    A donation platform should make the process easier to understand, not add
                    layers of confusion to an act of goodwill.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-emerald-600/10 text-emerald-700">
                  <ShieldCheck className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-semibold text-slate-900">Visibility builds trust</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Clear status information gives donors confidence in the platform — and
                    confidence is what turns one donation into a habit of giving.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Conceptual status-flow illustration */}
          <div className="rounded-3xl border border-emerald-100 bg-gradient-to-br from-emerald-50/70 via-white to-white p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              Concept — a donation status at a glance
            </p>
            <div className="mt-6">
              {/* Horizontal progress flow */}
              <div className="flex items-center">
                {['Started', 'Coordinating', 'Received', 'Completed'].map((label, index, all) => (
                  <div
                    key={label}
                    className={index < all.length - 1 ? 'flex flex-1 items-center' : 'flex items-center'}
                  >
                    <div className="flex flex-col items-center">
                      <span
                        className={[
                          'flex size-8 items-center justify-center rounded-full text-xs font-bold',
                          index < 2
                            ? 'bg-emerald-600 text-white'
                            : 'border-2 border-emerald-200 bg-white text-emerald-300',
                        ].join(' ')}
                      >
                        {index < 2 ? <Check className="size-4" aria-hidden="true" /> : index + 1}
                      </span>
                      <span
                        className={[
                          'mt-2 text-[11px] font-medium sm:text-xs',
                          index < 2 ? 'text-emerald-800' : 'text-slate-400',
                        ].join(' ')}
                      >
                        {label}
                      </span>
                    </div>
                    {index < all.length - 1 && (
                      <span
                        aria-hidden="true"
                        className={[
                          'mx-2 mb-6 h-0.5 flex-1 rounded-full',
                          index < 1 ? 'bg-emerald-500' : 'bg-emerald-100',
                        ].join(' ')}
                      />
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-emerald-100 bg-white p-4">
                <p className="text-sm font-medium text-slate-900">
                  Winter jackets &amp; bedding
                </p>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  Currently in the coordination stage — the next step of the journey is being
                  arranged.
                </p>
              </div>
              <p className="mt-4 text-xs leading-5 text-slate-500">
                Illustration of the experience ClosetToCare is designed around — a donation&apos;s
                stage, visible at a glance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="how-it-works-cta-heading" className="mt-20 lg:mt-28">
        <div className="rounded-3xl border border-emerald-100 bg-gradient-to-br from-emerald-50 via-white to-white px-6 py-10 shadow-sm sm:px-8 sm:py-12">
          <div className="mx-auto max-w-3xl text-center">
            <p className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-800">
              Ready to begin
            </p>
            <h2
              id="how-it-works-cta-heading"
              className="mt-5 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl"
            >
              Start your donation journey with ClosetToCare.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              If you have items that are ready for a second life, begin the donation flow and take
              the next step toward helping them reach a meaningful destination.
            </p>

            <div className="mt-8 flex justify-center">
              <Button
                size="lg"
                onClick={() => {
                  navigate(ROUTE_PATHS.donor.newDonation)
                }}
              >
                Donate Now
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
