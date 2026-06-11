import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, ArrowRight } from "lucide-react";
import ownerImg from "@/assets/owner.jpg";
import interiorImg from "@/assets/interior.jpg";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Kage Fitness Studio | Coach Kamal Kumar D" },
      {
        name: "description",
        content:
          "Meet Kamal Kumar D, founder of Kage Fitness Studio. Strength training, body transformation, and personalized fitness coaching since 2021.",
      },
      { property: "og:title", content: "About Kage Fitness Studio" },
      {
        property: "og:description",
        content: "Founded in 2021 by Coach Kamal Kumar D in Anna Nagar, Chennai.",
      },
      { property: "og:image", content: ownerImg },
      { name: "twitter:image", content: ownerImg },
    ],
  }),
  component: AboutPage,
});

const NUMBERS = [
  { value: "500+", label: "Active Members" },
  { value: "10+", label: "Expert Trainers" },
  { value: "2021", label: "Established" },
];

function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-ink pt-40 pb-24 text-white md:pt-48 md:pb-32">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <SectionHeading
              light
              eyebrow="About Us"
              title={
                <>
                  Where consistency
                  <br />
                  meets <span className="text-gold-gradient">real progress.</span>
                </>
              }
              description="Kage Fitness Studio is a space built for people who are serious about transformation — physically, mentally, and for the long run."
            />
          </Reveal>
        </div>
      </section>

      {/* Owner bio */}
      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-5 md:items-start">
          <Reveal className="md:col-span-2">
            <div className="relative">
              <img
                src={ownerImg}
                alt="Portrait of Kamal Kumar D, founder of Kage Fitness Studio"
                width={1024}
                height={1280}
                loading="lazy"
                className="relative z-10 aspect-[4/5] w-full rounded-2xl object-cover shadow-elegant"
              />
              <div className="absolute -inset-2 -z-0 rounded-2xl bg-gold-gradient opacity-20 blur-2xl" />
            </div>
          </Reveal>

          <div className="md:col-span-3">
            <Reveal>
              <div className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">
                Founder & Head Coach
              </div>
              <h2 className="mt-4 font-display text-5xl tracking-wide md:text-6xl">
                Kamal Kumar D
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-8 space-y-6 text-base leading-relaxed text-muted-foreground md:text-lg">
                <p>
                  D. Kamal Kumar is a passionate fitness professional and the driving force
                  behind Kage Fitness Studio. With a strong commitment to helping individuals
                  transform both physically and mentally, he brings a results-oriented approach
                  to fitness training.
                </p>
                <p>
                  His expertise lies in strength training, body transformation, and personalized
                  fitness coaching, ensuring that every client receives guidance tailored to
                  their unique goals.
                </p>
                <p>
                  Known for his disciplined methodology and motivating presence, Kamal Kumar has
                  built Kage Fitness Studio into a space where consistency, dedication, and real
                  progress take center stage. His vision is to empower people to unlock their
                  full potential and adopt a sustainable, healthy lifestyle.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-10 inline-flex items-center gap-3 rounded-2xl border border-border bg-card p-5">
                <div className="flex size-12 items-center justify-center rounded-xl bg-ink text-gold">
                  <Award className="size-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-dark">
                    Recognition
                  </div>
                  <div className="mt-1 text-sm font-medium text-ink">
                    Featured by IBB Chennai as the 2nd best gym in Anna Nagar.
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Numbers */}
      <section className="border-y border-border bg-secondary/50 py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 md:grid-cols-3">
          {NUMBERS.map((n, i) => (
            <Reveal key={n.label} delay={i * 0.08}>
              <div className="text-center">
                <div className="text-gold-gradient font-display text-6xl md:text-7xl">
                  {n.value}
                </div>
                <div className="mt-3 text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                  {n.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Mission */}
      <section className="relative isolate overflow-hidden bg-ink py-24 text-white md:py-32">
        <img
          src={interiorImg}
          alt=""
          aria-hidden
          width={1920}
          height={1080}
          loading="lazy"
          className="absolute inset-0 size-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/40" />
        <div className="relative z-10 mx-auto max-w-4xl px-6">
          <Reveal>
            <SectionHeading
              light
              eyebrow="Our Mission"
              title={
                <>
                  Empowering people to
                  <br />
                  <span className="text-gold-gradient">unlock their full potential.</span>
                </>
              }
              description="We believe a healthy lifestyle is built — one disciplined day at a time. Our studio exists to give you the coaching, environment and accountability to make it last."
            />
          </Reveal>
          <Reveal delay={0.15}>
            <Link
              to="/contact"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-gold-gradient px-7 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-ink"
            >
              Visit the Studio <ArrowRight className="size-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
