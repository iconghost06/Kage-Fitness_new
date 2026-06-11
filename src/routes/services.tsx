import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Flame, Heart, Users } from "lucide-react";
import equipmentImg from "@/assets/equipment.jpg";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services & Pricing — Kage Fitness Studio" },
      {
        name: "description",
        content:
          "Personal training packages, 90-day transformation program, and couple gym memberships at Kage Fitness Studio, Anna Nagar.",
      },
      { property: "og:title", content: "Services & Pricing — Kage Fitness Studio" },
      {
        property: "og:description",
        content: "Personal training, transformation programs, and gym memberships.",
      },
      { property: "og:image", content: equipmentImg },
      { name: "twitter:image", content: equipmentImg },
    ],
  }),
  component: ServicesPage,
});

const PT_PLANS = [
  { sessions: "12 Sessions", price: "₹8,000", per: "per month", popular: false },
  { sessions: "16 Sessions", price: "₹10,000", per: "per month", popular: true },
  { sessions: "20 Sessions", price: "₹12,000", per: "per month", popular: false },
];

const PT_INCLUDES = [
  "Strength Training",
  "Cardio Classes",
  "Bodyweight Classes",
  "Plyometrics Classes",
  "HIIT Classes",
];

function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-ink pt-40 pb-24 text-white md:pt-48 md:pb-32">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <SectionHeading
              light
              eyebrow="Programs & Pricing"
              title={
                <>
                  Built for results.
                  <br />
                  <span className="text-gold-gradient">Priced for commitment.</span>
                </>
              }
              description="Every program is led by certified coaches and structured around progressive, measurable progress."
            />
          </Reveal>
        </div>
      </section>

      {/* Personal Training */}
      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="flex items-end justify-between gap-6 border-b border-border pb-8">
              <div className="flex items-center gap-4">
                <div className="flex size-12 items-center justify-center rounded-xl bg-ink text-gold">
                  <Heart className="size-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-dark">
                    01 — Coaching
                  </div>
                  <h2 className="mt-1 font-display text-4xl tracking-wide md:text-5xl">
                    Personal Training
                  </h2>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {PT_PLANS.map((p, i) => (
              <Reveal key={p.sessions} delay={i * 0.08}>
                <div
                  className={cn(
                    "group relative flex h-full flex-col rounded-2xl border bg-card p-8 transition-all",
                    p.popular
                      ? "border-gold shadow-gold"
                      : "border-border hover:-translate-y-1 hover:border-gold/60",
                  )}
                >
                  {p.popular && (
                    <div className="absolute -top-3 left-8 rounded-full bg-gold-gradient px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-ink">
                      Most Popular
                    </div>
                  )}
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    {p.sessions}
                  </div>
                  <div className="mt-4 flex items-baseline gap-2">
                    <span className="text-gold-gradient font-display text-6xl">{p.price}</span>
                  </div>
                  <div className="mt-1 text-sm text-muted-foreground">{p.per}</div>
                  <Link
                    to="/contact"
                    className={cn(
                      "mt-8 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] transition-colors",
                      p.popular ? "bg-gold-gradient text-ink" : "bg-ink text-white hover:bg-ink/90",
                    )}
                  >
                    Enroll Now <ArrowRight className="size-3" />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <div className="mt-12 rounded-2xl bg-secondary p-8">
              <div className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-dark">
                Every plan includes
              </div>
              <div className="mt-5 flex flex-wrap gap-3">
                {PT_INCLUDES.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm"
                  >
                    <Check className="size-4 text-gold-dark" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 90 Day */}
      <section className="bg-ink py-24 text-white md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="flex items-center gap-4 border-b border-white/10 pb-8">
              <div className="flex size-12 items-center justify-center rounded-xl bg-gold-gradient text-ink">
                <Flame className="size-5" />
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
                  02 — Signature
                </div>
                <h2 className="mt-1 font-display text-4xl tracking-wide md:text-5xl">
                  90-Day Transformation Program
                </h2>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-12 grid gap-10 rounded-2xl border border-gold/40 bg-gradient-to-br from-white/[0.04] to-transparent p-10 md:grid-cols-2 md:items-center md:p-14">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-gold">
                  Guaranteed Results
                </div>
                <div className="mt-6 flex items-baseline gap-3">
                  <span className="text-gold-gradient font-display text-7xl md:text-8xl">
                    ₹60,000
                  </span>
                </div>
                <div className="mt-2 text-sm uppercase tracking-[0.2em] text-white/60">
                  + applicable taxes
                </div>
                <Link
                  to="/contact"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold-gradient px-7 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-ink"
                >
                  Apply Now <ArrowRight className="size-4" />
                </Link>
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
                  What's Included
                </div>
                <ul className="mt-5 space-y-4">
                  {[
                    "90 days of personal training sessions",
                    "Personalized diet consultation",
                    "3-month full gym membership",
                    "Progress tracking and weekly check-ins",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-base text-white/80">
                      <Check className="mt-1 size-5 shrink-0 text-gold" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Memberships */}
      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="flex items-center gap-4 border-b border-border pb-8">
              <div className="flex size-12 items-center justify-center rounded-xl bg-ink text-gold">
                <Users className="size-5" />
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-dark">
                  03 — Memberships
                </div>
                <h2 className="mt-1 font-display text-4xl tracking-wide md:text-5xl">
                  Gym Memberships
                </h2>
              </div>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-8 md:grid-cols-2 md:items-center">
            <Reveal>
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={equipmentImg}
                  alt="Dumbbell rack at Kage Fitness Studio"
                  width={1280}
                  height={896}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="rounded-2xl border border-border bg-card p-10">
                <div className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-dark">
                  Couple Package
                </div>
                <div className="mt-4 flex items-baseline gap-3">
                  <span className="text-gold-gradient font-display text-7xl">₹20,000</span>
                </div>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  Train together, transform together. Full studio access for two with all classes
                  and equipment included.
                </p>
                <Link
                  to="/contact"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-7 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-white hover:bg-ink/90"
                >
                  Get Started <ArrowRight className="size-4" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
