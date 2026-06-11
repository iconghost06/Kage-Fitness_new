import { createFileRoute } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Clock, Instagram, Mail, MapPin, Phone, Send } from "lucide-react";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Kage Fitness Studio | Anna Nagar, Chennai" },
      {
        name: "description",
        content:
          "Get in touch with Kage Fitness Studio. Call 7200388808, email kagefitnessstudio10@gmail.com, or send us a message to book a free consultation.",
      },
      { property: "og:title", content: "Contact Kage Fitness Studio" },
      {
        property: "og:description",
        content: "Open Mon–Sun, 5 AM – 10 PM. Anna Nagar, Chennai.",
      },
    ],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  email: z.string().trim().email("Enter a valid email").max(120),
  phone: z
    .string()
    .trim()
    .min(7, "Enter a valid phone number")
    .max(20)
    .regex(/^[+\d\s\-()]+$/, "Only digits and + - ( ) allowed"),
  program: z.string().min(1, "Choose an option"),
  message: z.string().trim().min(10, "Tell us a bit more (min 10 chars)").max(1000),
});

type FormValues = z.infer<typeof schema>;

function ContactPage() {
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", phone: "", program: "", message: "" },
  });

  const onSubmit = (values: FormValues) => {
    // No backend wired yet — show a friendly confirmation.
    toast.success("Message sent!", {
      description: `Thanks ${values.name}, we'll reach out within 24 hours.`,
    });
    form.reset();
  };

  return (
    <>
      {/* Hero */}
      <section className="relative bg-ink pt-40 pb-20 text-white md:pt-48">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <SectionHeading
              light
              eyebrow="Get In Touch"
              title={
                <>
                  Let's build your
                  <br />
                  <span className="text-gold-gradient">strongest chapter.</span>
                </>
              }
              description="Send a message or drop by the studio. We answer every enquiry within 24 hours."
            />
          </Reveal>
        </div>
      </section>

      {/* Content */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-5">
          {/* Form */}
          <Reveal className="lg:col-span-3">
            <div className="rounded-2xl border border-border bg-card p-8 md:p-10">
              <h3 className="font-display text-3xl tracking-wide">Send a message</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Fill out the form and our team will reach out shortly.
              </p>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="mt-8 space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="you@email.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone</FormLabel>
                          <FormControl>
                            <Input placeholder="Your phone number" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="program"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Interested in</FormLabel>
                          <Select onValueChange={field.onChange} value={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Choose a program" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="personal-training">Personal Training</SelectItem>
                              <SelectItem value="90-day-transformation">
                                90-Day Transformation
                              </SelectItem>
                              <SelectItem value="gym-membership">Gym Membership</SelectItem>
                              <SelectItem value="couple-package">Couple Package</SelectItem>
                              <SelectItem value="other">Something else</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea rows={5} placeholder="Tell us about your goals…" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <button
                    type="submit"
                    disabled={form.formState.isSubmitting}
                    className="inline-flex items-center gap-2 rounded-full bg-gold-gradient px-7 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-ink shadow-gold transition-transform hover:scale-[1.02] disabled:opacity-60"
                  >
                    Send Message <Send className="size-4" />
                  </button>
                </form>
              </Form>
            </div>
          </Reveal>

          {/* Info */}
          <Reveal delay={0.1} className="lg:col-span-2">
            <div className="flex h-full flex-col gap-6">
              <div className="rounded-2xl bg-ink p-8 text-white">
                <h3 className="font-display text-2xl tracking-wide">Studio Details</h3>
                <ul className="mt-6 space-y-5 text-sm">
                  <li className="flex items-start gap-3">
                    <Phone className="mt-0.5 size-5 shrink-0 text-gold" />
                    <div>
                      <div className="text-xs uppercase tracking-[0.2em] text-white/50">Phone</div>
                      <a href="tel:+917200388808" className="text-base font-medium hover:text-gold">
                        7200388808
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Mail className="mt-0.5 size-5 shrink-0 text-gold" />
                    <div>
                      <div className="text-xs uppercase tracking-[0.2em] text-white/50">Email</div>
                      <a
                        href="mailto:kagefitnessstudio10@gmail.com"
                        className="break-all text-base font-medium hover:text-gold"
                      >
                        kagefitnessstudio10@gmail.com
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="mt-0.5 size-5 shrink-0 text-gold" />
                    <div>
                      <div className="text-xs uppercase tracking-[0.2em] text-white/50">Hours</div>
                      <div className="text-base font-medium">Mon – Sun · 5:00 AM – 10:00 PM</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="mt-0.5 size-5 shrink-0 text-gold" />
                    <div>
                      <div className="text-xs uppercase tracking-[0.2em] text-white/50">
                        Location
                      </div>
                      <div className="text-base font-medium">Anna Nagar, Chennai</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Instagram className="mt-0.5 size-5 shrink-0 text-gold" />
                    <div>
                      <div className="text-xs uppercase tracking-[0.2em] text-white/50">Follow</div>
                      <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-base font-medium hover:text-gold"
                      >
                        @kagefitnessstudio
                      </a>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="overflow-hidden rounded-2xl border border-border">
                <iframe
                  title="Kage Fitness Studio location"
                  src="https://www.google.com/maps?q=Anna+Nagar,+Chennai&output=embed"
                  className="aspect-[4/3] w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
