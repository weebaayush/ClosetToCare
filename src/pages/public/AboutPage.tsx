import {
  ArrowRight,
  Compass,
  HelpCircle,
  PackageSearch,
  Route,
  ScanLine,
  ShieldAlert,
  Sparkles,
} from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { Card, CardBody } from '../../components/ui'
import { Button } from '../../components/ui'
import { ROUTE_PATHS } from '../../routes/routePaths'

export function AboutPage() {
  const navigate = useNavigate()

  return (
    <>
      <section aria-labelledby="about-hero-heading" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.16),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(34,197,94,0.1),_transparent_28%)]" />

        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8 lg:py-24">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-800">
              <HelpCircle className="size-3.5" aria-hidden="true" />
              About ClosetToCare
            </p>

            <h1
              id="about-hero-heading"
              className="mt-5 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
            >
              Making donation feel clearer, easier, and more approachable.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              Many people have clothes and household items that are still usable, but the process of
              donating them can feel unclear, time-consuming, or inconvenient. ClosetToCare is being
              built to remove that friction by making the donation journey feel more guided and more
              accessible from the moment someone decides to give.
            </p>
          </div>

          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -inset-5 rounded-[2rem] bg-emerald-50/70 blur-2xl"
            />
            <div className="relative rounded-[2rem] border border-emerald-100 bg-white p-6 shadow-sm sm:p-8">
              <div className="rounded-2xl bg-gradient-to-br from-emerald-600 to-emerald-500 p-5 text-white shadow-lg shadow-emerald-500/20 sm:p-6">
                <div className="flex items-center gap-3">
                  <span className="flex size-11 items-center justify-center rounded-2xl bg-white/15">
                    <PackageSearch className="size-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wide text-emerald-50">
                      What we are solving
                    </p>
                    <p className="mt-1 text-sm text-emerald-50/90">
                      Donation journeys that are often too vague or inconvenient.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">Clearer next steps</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    ClosetToCare is designed to help people understand what happens after they decide
                    to donate.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">Less friction</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    The experience aims to reduce the uncertainty and effort that can make donating
                    feel harder than it should be.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:col-span-2">
                  <p className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                    <Sparkles className="size-4 text-emerald-700" aria-hidden="true" />
                    Built around generosity
                  </p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    The platform focuses on making reuse feel respectful, practical, and easy to
                    understand.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="about-problem-heading" className="mx-auto max-w-6xl px-6 pb-20 sm:pb-24 lg:px-8">
        <div className="max-w-2xl">
          <p className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-800">
            <ShieldAlert className="size-3.5" aria-hidden="true" />
            Why ClosetToCare exists
          </p>
          <h2
            id="about-problem-heading"
            className="mt-5 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl"
          >
            Donation should not feel like a puzzle.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            ClosetToCare exists because useful items often remain unused at home while the path to
            giving them away still feels uncertain, inconvenient, or hard to start.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <Card className="border-emerald-100 bg-white shadow-sm transition-shadow hover:shadow-md">
            <CardBody className="p-6">
              <div className="flex size-11 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                <PackageSearch className="size-5" aria-hidden="true" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-slate-900">Unused items stay at home</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Good clothes and household items often sit unused simply because there is no clear
                path to move them onward.
              </p>
            </CardBody>
          </Card>

          <Card className="border-emerald-100 bg-white shadow-sm transition-shadow hover:shadow-md">
            <CardBody className="p-6">
              <div className="flex size-11 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                <ArrowRight className="size-5" aria-hidden="true" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-slate-900">Starting the process feels unclear</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Many people want to donate, but they do not always know where to begin or what the
                next step should be.
              </p>
            </CardBody>
          </Card>

          <Card className="border-emerald-100 bg-white shadow-sm transition-shadow hover:shadow-md">
            <CardBody className="p-6">
              <div className="flex size-11 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                <ScanLine className="size-5" aria-hidden="true" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-slate-900">Visibility and coordination are missing</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                A clearer process helps the journey feel more coordinated and easier to trust from
                start to finish.
              </p>
            </CardBody>
          </Card>
        </div>
      </section>

      <section
        aria-labelledby="about-direction-heading"
        className="mx-auto max-w-6xl px-6 pb-24 sm:pb-28 lg:px-8"
      >
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
          <Card className="overflow-hidden border-emerald-100 bg-white shadow-sm">
            <CardBody className="p-6 sm:p-8">
              <p className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-800">
                <Compass className="size-3.5" aria-hidden="true" />
                The challenge
              </p>
              <h2
                id="about-direction-heading"
                className="mt-5 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl"
              >
                Donating should feel straightforward from the start.
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                ClosetToCare is being built around a simple observation: when the next step is hard
                to understand, people are less likely to follow through. The experience should help a
                donor move from "I want to give this away" to a clear, guided path without extra
                confusion.
              </p>
            </CardBody>
          </Card>

          <Card className="border-emerald-100 bg-gradient-to-br from-emerald-50 via-white to-white shadow-sm">
            <CardBody className="p-6 sm:p-8">
              <p className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-800 shadow-sm ring-1 ring-inset ring-emerald-100">
                <Route className="size-3.5" aria-hidden="true" />
                The direction
              </p>
              <h3 className="mt-5 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                ClosetToCare is being shaped to make the journey easier to follow.
              </h3>

              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-emerald-100 bg-white p-4 shadow-sm">
                  <div className="flex size-10 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                    <HelpCircle className="size-4" aria-hidden="true" />
                  </div>
                  <p className="mt-4 text-sm font-semibold text-slate-900">Easier to understand</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    The product direction focuses on making the donation process feel more obvious
                    and less intimidating.
                  </p>
                </div>

                <div className="rounded-2xl border border-emerald-100 bg-white p-4 shadow-sm">
                  <div className="flex size-10 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                    <ScanLine className="size-4" aria-hidden="true" />
                  </div>
                  <p className="mt-4 text-sm font-semibold text-slate-900">Clearer journey</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    The platform is being designed to show each stage of the journey in a way that
                    feels calm and coordinated.
                  </p>
                </div>

                <div className="rounded-2xl border border-emerald-100 bg-white p-4 shadow-sm">
                  <div className="flex size-10 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                    <Sparkles className="size-4" aria-hidden="true" />
                  </div>
                  <p className="mt-4 text-sm font-semibold text-slate-900">Second life for usable items</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    ClosetToCare aims to help useful items move onward instead of remaining unused at
                    home.
                  </p>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
      </section>

      <section aria-labelledby="about-cta-heading" className="mx-auto max-w-6xl px-6 pb-24 lg:px-8">
        <div className="rounded-[2rem] border border-emerald-100 bg-gradient-to-br from-emerald-50 via-white to-white px-6 py-10 shadow-sm sm:px-8 sm:py-12 lg:px-10 lg:py-14">
          <div className="mx-auto max-w-3xl text-center">
            <p className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-800">
              Ready to start
            </p>
            <h2
              id="about-cta-heading"
              className="mt-5 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl"
            >
              Begin with the next step ClosetToCare is built to make easier.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              If you already have items that could be reused, start the donation journey and move
              one step closer to giving them a clearer path forward.
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
