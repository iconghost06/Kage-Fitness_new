import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Award, Dumbbell, Flame, Users } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import interiorImg from "@/assets/interior.jpg";
import ownerImg from "@/assets/owner.jpg";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kage Fitness Studio — Anna Nagar's Premier Fitness Studio" },
      {
        name: "description",
        content:
          "Personal training, body transformation, and gym memberships at Kage Fitness Studio, Anna Nagar Chennai. Train with Coach Kamal Kumar.",
      },
      { property: "og:title", content: "Kage Fitness Studio" },
      { property: "og:description", content: "Building a stronger and healthier community." },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: HomePage,
});

const STATS = [
  { value: "500+", label: "Active Members" },
  { value: "10+", label: "Expert Trainers" },
  { value: "2021", label: "Founded" },
  { value: "#2", label: "Anna Nagar (IBB)" },
];

const PROGRAMS = [
  {
    icon: Dumbbell,
    title: "Personal Training",
    desc: "1-on-1 coaching with strength, cardio, HIIT and plyometrics tailored to your goals.",
  },
  {
    icon: Flame,
    title: "90-Day Transformation",
    desc: "Our signature program. Training, diet consultation and gym access with guaranteed results.",
  },
  {
    icon: Users,
    title: "Gym Memberships",
    desc: "Full access to our facility. Couple packages available for partners who train together.",
  },
];

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate flex min-h-screen items-center overflow-hidden bg-ink text-white">
        <img
          src={heroImg}
          alt="Athlete training under dramatic gold lighting at Kage Fitness Studio"
          width={1920}
          height={1080}
          className="absolute inset-0 size-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-ink/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-32 pb-24">
          <Reveal>
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              <span className="h-px w-10 bg-gold-gradient" />
              Est. 2021 · Anna Nagar, Chennai
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="mt-8 max-w-5xl font-display text-[clamp(3rem,9vw,8rem)] leading-[0.9] tracking-wide">
              Building a stronger,
              <br />
              <span className="text-gold-gradient">healthier community.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-8 max-w-xl text-lg text-white/70">
              Kage Fitness Studio is where discipline meets transformation. Train with Coach
              Kamal Kumar and a team of 10+ specialists in a studio built for real progress.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-gold-gradient px-7 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-ink shadow-gold transition-transform hover:scale-[1.03]"
              >
                Start Your Transformation
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:border-gold hover:text-gold"
              >
                View Programs
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border bg-background">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-border md:grid-cols-4 md:divide-x">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.05}>
              <div className="px-6 py-12 text-center">
                <div className="text-gold-gradient font-display text-5xl md:text-6xl">
                  {s.value}
                </div>
                <div className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  {s.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Programs */}
      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <SectionHeading
              eyebrow="Our Programs"
              title={
                <>
                  Train smarter.
                  <br />
                  <span className="text-gold-gradient">Transform faster.</span>
                </>
              }
              description="Choose the program that matches your goal — every plan is built around a proven, results-oriented methodology."
            />
          </Reveal>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {PROGRAMS.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.1}>
                <Link
                  to="/services"
                  className="group relative block h-full overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-gold hover:shadow-gold"
                >
                  <div className="flex size-14 items-center justify-center rounded-xl bg-ink text-gold">
                    <p.icon className="size-6" />
                  </div>
                  <h3 className="mt-6 font-display text-2xl tracking-wide">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                  <div className="mt-8 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold-dark">
                    Learn more
                    <ArrowRight className="size-3 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* About teaser */}
      <section className="bg-ink py-24 text-white md:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-2 md:items-center">
          <Reveal>
            <div className="relative">
              <img
                src={ownerImg}
                alt="Kamal Kumar D, founder of Kage Fitness Studio"
                width={1024}
                height={1280}
                loading="lazy"
                className="relative z-10 aspect-[4/5] w-full rounded-2xl object-cover"
              />
              <div className="absolute -bottom-6 -right-6 z-0 size-48 rounded-2xl bg-gold-gradient opacity-30 blur-3xl" />
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <SectionHeading
              light
              eyebrow="Meet the Coach"
              title={<>Coach Kamal Kumar D</>}
              description="A results-oriented professional dedicated to strength, transformation and sustainable lifestyles. Personalized coaching for every client, every session."
            />
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-full bg-gold-gradient px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-ink"
              >
                Read His Story <ArrowRight className="size-3" />
              </Link>
              <div className="flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                <Award className="size-4 text-gold" /> Featured by IBB Chennai
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative isolate overflow-hidden bg-background py-24 md:py-32">
        <img
          src={interiorImg}
          alt=""
          aria-hidden
          width={1920}
          height={1080}
          loading="lazy"
          className="absolute inset-0 size-full object-cover opacity-15"
        />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <SectionHeading
              align="center"
              eyebrow="Ready when you are"
              title={
                <>
                  Your strongest self is
                  <br />
                  <span className="text-gold-gradient">90 days away.</span>
                </>
              }
              description="Walk in for a free consultation. We'll map out the program, diet and timeline."
            />
          </Reveal>
          <Reveal delay={0.15}>
            <Link
              to="/contact"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-ink px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:bg-ink/90"
            >
              Book a Free Consultation
              <ArrowRight className="size-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
