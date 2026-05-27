import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Phone, Mail, MapPin, MessageCircle, Clock, ArrowRight, Check } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { venue, waLink, mapsLink } from "@/lib/venue";

const EVENT_TYPES = [
  "Wedding", "Reception", "Engagement", "Corporate Event",
  "Birthday / Anniversary", "Cultural Program", "Exhibition", "Other",
] as const;

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  phone: z.string().trim().min(7, "Enter a valid phone number").max(20),
  email: z.string().trim().email("Enter a valid email").max(120).optional().or(z.literal("")),
  eventType: z.enum(EVENT_TYPES),
  eventDate: z.string().min(1, "Choose an event date"),
  guests: z.number({ message: "Enter guest count" }).int().min(20, "Minimum 20 guests").max(2000, "Up to 2,000 guests"),
  message: z.string().max(500).optional(),
});
type FormValues = z.infer<typeof schema>;

export function ContactSection() {
  const [sent, setSent] = useState(false);
  const {
    register, handleSubmit, formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { eventType: "Wedding", guests: 250 },
  });

  function onSubmit(v: FormValues) {
    const msg = [
      `Hi ${venue.name}, I'd like to enquire about a booking.`,
      `Name: ${v.name}`,
      `Phone: ${v.phone}`,
      v.email ? `Email: ${v.email}` : null,
      `Event: ${v.eventType}`,
      `Date: ${v.eventDate}`,
      `Guests: ${v.guests}`,
      v.message ? `Notes: ${v.message}` : null,
    ].filter(Boolean).join("\n");
    window.open(waLink(msg), "_blank", "noopener,noreferrer");
    setSent(true);
  }

  return (
    <section id="contact" className="border-t border-ivory/10 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Plan your event"
          title={<>Tell us about your day. <span className="italic text-gold">We'll do the rest.</span></>}
          description="Share a few details and a senior consultant will reach out within the hour."
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-5">
          {/* Form */}
          <Reveal className="lg:col-span-3">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="rounded-sm border border-ivory/10 bg-card/60 p-7 backdrop-blur md:p-10"
            >
              {sent ? (
                <div className="flex flex-col items-center gap-4 py-12 text-center">
                  <div className="flex size-16 items-center justify-center rounded-full bg-gold/15 text-gold">
                    <Check size={28} />
                  </div>
                  <h3 className="font-serif text-3xl text-ivory">We'll be in touch.</h3>
                  <p className="max-w-md text-sm text-muted-foreground">
                    Your enquiry has been opened in WhatsApp. Tap send and our team will respond
                    within the hour.
                  </p>
                </div>
              ) : (
                <>
                  <div className="grid gap-5 md:grid-cols-2">
                    <Field label="Full name" error={errors.name?.message}>
                      <input className="form-input" placeholder="Your name" {...register("name")} />
                    </Field>
                    <Field label="Phone" error={errors.phone?.message}>
                      <input className="form-input" placeholder="+91 …" {...register("phone")} />
                    </Field>
                    <Field label="Email (optional)" error={errors.email?.message} className="md:col-span-2">
                      <input className="form-input" type="email" placeholder="you@example.com" {...register("email")} />
                    </Field>
                    <Field label="Event type" error={errors.eventType?.message}>
                      <select className="form-input" {...register("eventType")}>
                        {EVENT_TYPES.map((e) => <option key={e}>{e}</option>)}
                      </select>
                    </Field>
                    <Field label="Event date" error={errors.eventDate?.message}>
                      <input className="form-input" type="date" {...register("eventDate")} />
                    </Field>
                    <Field label="Approximate guests" error={errors.guests?.message} className="md:col-span-2">
                      <input className="form-input" type="number" min={20} max={2000} {...register("guests", { valueAsNumber: true })} />
                    </Field>
                    <Field label="Anything we should know? (optional)" error={errors.message?.message} className="md:col-span-2">
                      <textarea className="form-input min-h-[110px]" rows={4} {...register("message")} />
                    </Field>
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-sm bg-gold px-7 py-4 text-xs uppercase tracking-[0.22em] text-charcoal transition-all hover:bg-gold-soft disabled:opacity-60 md:w-auto"
                  >
                    Send Enquiry via WhatsApp
                    <ArrowRight className="size-4" />
                  </button>
                  <p className="mt-4 text-xs text-muted-foreground">
                    By submitting you agree to be contacted about your event. We never share your details.
                  </p>
                </>
              )}
            </form>
            <style>{`
              .form-input {
                width: 100%;
                background: color-mix(in oklab, var(--ivory) 4%, transparent);
                border: 1px solid color-mix(in oklab, var(--ivory) 14%, transparent);
                border-radius: 2px;
                color: var(--ivory);
                padding: 0.85rem 1rem;
                font-size: 0.95rem;
                outline: none;
                transition: border-color .2s;
              }
              .form-input:focus { border-color: var(--gold); }
              .form-input::placeholder { color: color-mix(in oklab, var(--ivory) 40%, transparent); }
            `}</style>
          </Reveal>

          {/* Side card */}
          <Reveal delay={0.15} className="lg:col-span-2">
            <div className="flex h-full flex-col gap-6 rounded-sm border border-gold/30 bg-gradient-to-b from-gold/10 to-transparent p-7 md:p-10">
              <div>
                <div className="eyebrow">Visit us</div>
                <h3 className="mt-3 font-serif text-3xl text-ivory">Let's plan in person.</h3>
                <p className="mt-3 text-sm text-muted-foreground">
                  Book a private venue walk-through with our event consultant — coffee on us.
                </p>
              </div>

              <ul className="space-y-4 border-y border-ivory/10 py-6">
                <Info Icon={Phone} label="Call" value={venue.phoneDisplay} href={`tel:${venue.phoneHref}`} />
                <Info Icon={MessageCircle} label="WhatsApp" value="Chat with our team" href={waLink()} external />
                <Info Icon={Mail} label="Email" value={venue.email} href={`mailto:${venue.email}`} />
                <Info Icon={MapPin} label="Address" value={venue.fullAddress} href={mapsLink()} external />
                <Info Icon={Clock} label="Open" value={venue.hours} />
              </ul>

              <a
                href={mapsLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block aspect-[4/3] overflow-hidden rounded-sm border border-ivory/10"
              >
                <img
                  src={`https://maps.googleapis.com/maps/api/staticmap?center=${encodeURIComponent(venue.fullAddress)}&zoom=14&size=600x450&scale=2&style=feature:all|element:geometry|color:0x16140f&style=feature:road|element:geometry|color:0x2a2620&style=feature:water|element:geometry|color:0x0e0d0a&style=feature:all|element:labels.text.fill|color:0xc9a84c`}
                  alt={`Map showing ${venue.name} location`}
                  loading="lazy"
                  className="h-full w-full object-cover opacity-90 transition-opacity group-hover:opacity-100"
                  onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-5 text-ivory">
                  <span className="text-xs uppercase tracking-[0.2em]">Open in Maps</span>
                  <ArrowRight size={16} className="text-gold" />
                </div>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label, error, children, className,
}: { label: string; error?: string; children: React.ReactNode; className?: string }) {
  return (
    <label className={"block " + (className ?? "")}>
      <div className="mb-2 text-[0.7rem] uppercase tracking-[0.18em] text-ivory/70">{label}</div>
      {children}
      {error && <div className="mt-1.5 text-xs text-destructive">{error}</div>}
    </label>
  );
}

function Info({
  Icon, label, value, href, external,
}: { Icon: typeof Phone; label: string; value: string; href?: string; external?: boolean }) {
  const content = (
    <div className="flex items-start gap-4">
      <Icon className="mt-0.5 size-4 shrink-0 text-gold" strokeWidth={1.5} />
      <div>
        <div className="text-[0.65rem] uppercase tracking-[0.18em] text-ivory/60">{label}</div>
        <div className="mt-0.5 text-sm text-ivory">{value}</div>
      </div>
    </div>
  );
  return href ? (
    <li>
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className="block transition-opacity hover:opacity-80"
      >
        {content}
      </a>
    </li>
  ) : (
    <li>{content}</li>
  );
}
