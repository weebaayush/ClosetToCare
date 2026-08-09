import {
  ArrowRight,
  CalendarClock,
  CheckCircle2,
  ClipboardList,
  Eye,
  Gift,
  HandHeart,
  HeartHandshake,
  Home,
  Inbox,
  Lamp,
  PackageCheck,
  PackageOpen,
  Recycle,
  Shirt,
} from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/ui'
import { ROUTE_PATHS } from '../../routes/routePaths'

const journeySteps = [
  {
    icon: Shirt,
    title: 'Sitting unused',
    text: 'Clothes and household items waiting in closets and storage.',
  },
  {
    icon: HeartHandshake,
    title: 'Donated with care',
    text: 'Offered through ClosetToCare to NGOs that can put them to use.',
  },
  {
    icon: Home,
    title: 'A second life',
    text: 'Reaching people who need them instead of ending up as waste.',
  },
]

const howItWorksSteps = [
  {
    icon: PackageOpen,
    title: 'Choose what to give',
    text: 'Identify clothes or household items you no longer need.',
  },
  {
    icon: ClipboardList,
    title: 'Share donation details',
    text: 'Provide basic information about the items you want to donate.',
  },
  {
    icon: CalendarClock,
    title: 'Arrange the next step',
    text: 'The donation journey moves toward collection and coordination.',
  },
  {
    icon: Gift,
    title: 'Give items a second life',
    text: 'Donated items can reach people who need them.',
  },
]

const donationCategories = [
  {
    icon: Shirt,
    name: 'Clothes',
    description:
      'Shirts, trousers, sarees, jackets, and other garments in good, wearable condition.',
    examples: ['Everyday wear', 'Winter wear', 'Kidswear'],
  },
  {
    icon: Lamp,
    name: 'Household Items',
    description:
      'Useful things for a home — utensils, bedding, small appliances, and everyday essentials.',
    examples: ['Kitchenware', 'Bedding', 'Small appliances'],
  },
]

const journeyStages = [
  {
    icon: Inbox,
    label: 'Donation started',
    text: 'Your donation is created and its journey begins.',
  },
  {
    icon: HandHeart,
    label: 'Donation being coordinated',
    text: 'The next steps of the journey are being arranged.',
  },
  {
    icon: PackageCheck,
    label: 'Donation received',
    text: 'Your items have arrived where they are needed.',
  },
  {
    icon: CheckCircle2,
    label: 'Donation journey completed',
    text: 'The journey ends with your items in their second life.',
  },
]

export function HomePage() {
  const navigate = useNavigate()

  return (
    <>
      <section aria-labelledby="hero-heading">
      <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        {/* Copy and CTAs */}
        <div className="max-w-xl">
          <p className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-800">
            <Recycle className="size-3.5" aria-hidden="true" />
            Donate. Reuse. Care.
          </p>
          <h1
            id="hero-heading"
            className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-5xl"
          >
            Your closet is full.
            <span className="block text-emerald-700">Someone&apos;s isn&apos;t.</span>
          </h1>
          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            Most of us own clothes and household items we no longer use. ClosetToCare is being
            built to make giving them away simple — connecting your donations with NGOs so good
            things get a second life instead of gathering dust.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              size="lg"
              rightIcon={<ArrowRight className="size-4" aria-hidden="true" />}
              onClick={() => navigate(ROUTE_PATHS.donor.newDonation)}
            >
              Donate Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => navigate(ROUTE_PATHS.howItWorks)}
            >
              How It Works
            </Button>
          </div>
        </div>

        {/* Visual: the journey of a donated item */}
        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-emerald-100 via-transparent to-amber-100/60"
          />
          <ol className="relative flex flex-col gap-3 rounded-3xl border border-emerald-100 bg-white/80 p-5 shadow-sm backdrop-blur-sm sm:p-6">
            {journeySteps.map((step, index) => (
              <li key={step.title} className="flex items-start gap-4 rounded-2xl bg-slate-50 p-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-emerald-600/10 text-emerald-700">
                  <step.icon className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                    Step {index + 1}
                  </p>
                  <p className="mt-0.5 font-medium text-slate-900">{step.title}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
      </section>

      {/* How ClosetToCare works */}
      <section aria-labelledby="how-it-works-heading" className="mt-24 lg:mt-32">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
            How it works
          </p>
          <h2
            id="how-it-works-heading"
            className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl"
          >
            From your closet to a second life, in four steps.
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            ClosetToCare is designed to keep giving simple — a clear journey from the items you no
            longer need to the people who can use them.
          </p>
        </div>

        <ol className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {howItWorksSteps.map((step, index) => (
            <li
              key={step.title}
              className="relative flex flex-col rounded-3xl border border-emerald-100 bg-white p-6 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <span className="flex size-11 items-center justify-center rounded-xl bg-emerald-600/10 text-emerald-700">
                  <step.icon className="size-5" aria-hidden="true" />
                </span>
                <span className="text-sm font-semibold text-emerald-700">
                  Step {index + 1}
                  <span className="text-slate-300"> / 4</span>
                </span>
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{step.text}</p>
              {index < howItWorksSteps.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute -right-5 top-1/2 hidden -translate-y-1/2 text-emerald-300 xl:block"
                >
                  <ArrowRight className="size-4" />
                </span>
              )}
            </li>
          ))}
        </ol>
      </section>

      {/* Donation categories */}
      <section aria-labelledby="categories-heading" className="mt-24 lg:mt-32">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
            What you can give
          </p>
          <h2
            id="categories-heading"
            className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl"
          >
            Two kinds of things, one shared purpose.
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            ClosetToCare is built around the items most homes already have to spare.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {donationCategories.map((category) => (
            <div
              key={category.name}
              className="group relative overflow-hidden rounded-3xl border border-emerald-100 bg-white p-6 shadow-sm sm:p-8"
            >
              <div
                aria-hidden="true"
                className="absolute -right-10 -top-10 size-32 rounded-full bg-emerald-50 transition-transform duration-300 group-hover:scale-125"
              />
              <div className="relative">
                <span className="flex size-12 items-center justify-center rounded-2xl bg-emerald-600/10 text-emerald-700">
                  <category.icon className="size-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-xl font-semibold text-slate-900">{category.name}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
                  {category.description}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {category.examples.map((example) => (
                    <li
                      key={example}
                      className="rounded-full border border-emerald-100 bg-emerald-50/60 px-3 py-1 text-xs font-medium text-emerald-800"
                    >
                      {example}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-6 text-center text-sm text-slate-500">
          Please donate items that are clean and in usable condition — quality giving is the heart
          of ClosetToCare.
        </p>
      </section>

      {/* Donation transparency */}
      <section aria-labelledby="transparency-heading" className="mt-24 lg:mt-32">
        <div className="rounded-3xl border border-emerald-100 bg-gradient-to-br from-emerald-50/70 via-white to-white p-6 sm:p-10 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
            <div className="max-w-xl">
              <p className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-800">
                <Eye className="size-3.5" aria-hidden="true" />
                Transparency
              </p>
              <h2
                id="transparency-heading"
                className="mt-5 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl"
              >
                You should always know where your giving stands.
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                Giving something away shouldn&apos;t mean losing sight of it. ClosetToCare is
                designed around a clear donation journey, so donors can understand what is
                happening with their donation at every stage — from the moment it starts to the
                moment it&apos;s complete.
              </p>
            </div>

            {/* Visual: donation status journey */}
            <ol className="relative flex flex-col gap-0">
              {journeyStages.map((stage, index) => {
                const isLast = index === journeyStages.length - 1
                return (
                  <li key={stage.label} className="relative flex gap-4 sm:gap-5">
                    {/* Timeline rail */}
                    <div className="flex flex-col items-center">
                      <span
                        className={[
                          'flex size-11 shrink-0 items-center justify-center rounded-full border',
                          isLast
                            ? 'border-emerald-600 bg-emerald-600 text-white'
                            : 'border-emerald-200 bg-white text-emerald-700',
                        ].join(' ')}
                      >
                        <stage.icon className="size-5" aria-hidden="true" />
                      </span>
                      {!isLast && (
                        <span
                          aria-hidden="true"
                          className="w-px flex-1 bg-gradient-to-b from-emerald-300 to-emerald-100"
                        />
                      )}
                    </div>
                    <div className={isLast ? 'pb-0' : 'pb-6 sm:pb-8'}>
                      <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
                        Stage {index + 1}
                      </p>
                      <p className="mt-0.5 font-semibold text-slate-900">{stage.label}</p>
                      <p className="mt-1 text-sm leading-6 text-slate-600">{stage.text}</p>
                    </div>
                  </li>
                )
              })}
            </ol>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section aria-labelledby="final-cta-heading" className="mt-24 lg:mt-32">
        <div className="relative overflow-hidden rounded-3xl bg-emerald-700 px-6 py-14 text-center sm:px-10 sm:py-16 lg:py-20">
          <div
            aria-hidden="true"
            className="absolute -left-16 -top-16 size-56 rounded-full bg-emerald-600/50"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-20 -right-12 size-64 rounded-full bg-emerald-800/60"
          />
          <div className="relative mx-auto max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-200">
              Start today
            </p>
            <h2
              id="final-cta-heading"
              className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl"
            >
              The things you no longer need could be exactly what someone else does.
            </h2>
            <p className="mt-4 text-base leading-7 text-emerald-50/90 sm:text-lg">
              Begin your donation journey with ClosetToCare and give your unused clothes and
              household items a second life.
            </p>
            <div className="mt-8 flex justify-center">
              <Button
                size="lg"
                className="!bg-white !text-emerald-700 shadow-md hover:!bg-emerald-50 focus-visible:ring-white focus-visible:ring-offset-emerald-700"
                rightIcon={<ArrowRight className="size-4" aria-hidden="true" />}
                onClick={() => navigate(ROUTE_PATHS.donor.newDonation)}
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
