import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, ArrowRight, Star, Quote } from "lucide-react";
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

const TESTIMONIALS = [
  {
    name: "Abhishek Kumar",
    role: "Active Member",
    rating: 5,
    text: "An extraordinary fitness centre with all the facilities. The trainers are always helpful and friendly. Coach Kamal has built an incredible community here.",
  },
  {
    name: "Karthik R.",
    role: "Trained with Coach Hari",
    rating: 5,
    text: "The trainers, especially Hari and Manikandan, are exceptionally motivating. They don't just hand you a standard template; they customize every single routine based on your progress. The environment is extremely positive.",
  },
  {
    name: "Aishwarya M.",
    role: "Trained with Coach Prem",
    rating: 5,
    text: "Kage Fitness is by far the best gym in Anna Nagar. Cleanliness is top-notch. The staff is always sanitizing the equipment, and the training from Prem and Venkatesh has helped me achieve my weight goals in record time.",
  },
  {
    name: "Rahul S.",
    role: "Trained with Coach Chandru",
    rating: 5,
    text: "Amazing atmosphere with great music and imported equipment. Coach Kamal and the entire training team (especially Chandru) make you feel welcome from day one. Perfect place for both beginners and advanced lifters.",
  },
  {
    name: "Deepak Kumar",
    role: "90-Day Transformation",
    rating: 5,
    text: "What stands out about Kage is the level of accountability. Every session is structured, and the trainers focus on form and progressive overload. Highly recommend it if you are serious about transformation!",
  },
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
                  D. Kamal Kumar is a passionate fitness professional and the driving force behind
                  Kage Fitness Studio. With a strong commitment to helping individuals transform
                  both physically and mentally, he brings a results-oriented approach to fitness
                  training.
                </p>
                <p>
                  His expertise lies in strength training, body transformation, and personalized
                  fitness coaching, ensuring that every client receives guidance tailored to their
                  unique goals.
                </p>
                <p>
                  Known for his disciplined methodology and motivating presence, Kamal Kumar has
                  built Kage Fitness Studio into a space where consistency, dedication, and real
                  progress take center stage. His vision is to empower people to unlock their full
                  potential and adopt a sustainable, healthy lifestyle.
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

      {/* Testimonials */}
      <section className="bg-background py-24 md:py-32 border-t border-border">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal align="center">
            <div className="flex flex-col items-center">
              <SectionHeading
                align="center"
                eyebrow="Testimonials"
                title={
                  <>
                    What our community
                    <br />
                    <span className="text-gold-gradient">says about us.</span>
                  </>
                }
                description="Real feedback from members who have transformed their lives at Kage Fitness Studio."
              />

              {/* Google Review Summary Badge */}
              <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-border bg-card px-5 py-2.5 shadow-sm">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="size-4 fill-gold text-gold" />
                  ))}
                </div>
                <div className="h-4 w-px bg-border" />
                <span className="text-sm font-medium text-ink">
                  <strong className="text-gold">4.9 / 5.0</strong> rating based on 240+ reviews on
                  Google
                </span>
              </div>
            </div>
          </Reveal>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.1}>
                <div className="group relative flex h-full flex-col justify-between rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-gold">
                  {/* Quote icon overlay */}
                  <div className="absolute top-6 right-8 text-gold/10 transition-colors group-hover:text-gold/20">
                    <Quote className="size-12" />
                  </div>

                  <div className="relative z-10">
                    {/* Stars */}
                    <div className="flex items-center gap-0.5 text-gold">
                      {[...Array(t.rating)].map((_, idx) => (
                        <Star key={idx} className="size-4 fill-gold text-gold" />
                      ))}
                    </div>

                    {/* Testimonial text */}
                    <p className="mt-6 text-base leading-relaxed text-muted-foreground italic">
                      "{t.text}"
                    </p>
                  </div>

                  {/* Reviewer details */}
                  <div className="relative z-10 mt-8 flex items-center gap-3 border-t border-border/50 pt-5">
                    <div className="flex size-10 items-center justify-center rounded-full bg-gold-gradient text-sm font-bold text-ink">
                      {t.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <h4 className="font-semibold text-ink leading-tight">{t.name}</h4>
                      <p className="text-xs font-medium text-gold-dark mt-0.5 uppercase tracking-wider">
                        {t.role}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
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
