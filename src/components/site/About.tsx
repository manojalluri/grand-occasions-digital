import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import bridal from "@/assets/bridal-suite.jpg";
import detail from "@/assets/detail-centerpiece.jpg";

export function About() {
  return (
    <section id="about" className="relative overflow-hidden border-t border-ivory/10 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid items-center gap-16 md:grid-cols-2">
          <div className="relative">
            <Reveal>
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
                <img
                  src={bridal}
                  alt="Ornate bridal suite with gilded mirror"
                  loading="lazy"
                  width={1200}
                  height={1500}
                  className="h-full w-full object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="absolute -bottom-10 -right-4 hidden aspect-[4/5] w-40 overflow-hidden rounded-sm border-4 border-charcoal shadow-luxe md:block md:w-56">
                <img
                  src={detail}
                  alt="Wedding centerpiece detail"
                  loading="lazy"
                  width={600}
                  height={750}
                  className="h-full w-full object-cover"
                />
              </div>
            </Reveal>
          </div>

          <div>
            <SectionHeading
              align="left"
              eyebrow="Our Story"
              title={<>An address shaped by <span className="italic text-gold">eighteen years</span> of celebration.</>}
            />
            <Reveal delay={0.15} className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                Since 2007, families across the city have entrusted us with the most important
                moments of their lives — from the first ring exchanged to the last dance of the
                evening. Every event passes through the same uncompromising standard: faultless
                hospitality, immaculate spaces, and a team that anticipates before it is asked.
              </p>
              <p>
                Our pillarless grand ballroom, intimate ceremony lawns and dedicated bridal &amp;
                VIP suites are tuned for celebrations from <span className="text-ivory">200 to 1,500 guests</span>.
                A senior event captain is assigned to your booking — from the venue tour to the
                final farewell.
              </p>
            </Reveal>

            <Reveal delay={0.3} className="mt-10 grid grid-cols-3 gap-4">
              {[
                { k: "4.9★", v: "Google Rated" },
                { k: "100%", v: "On-time Setup" },
                { k: "24/7", v: "Event Concierge" },
              ].map((b) => (
                <div key={b.v} className="rounded-sm border border-ivory/10 bg-card/40 p-4 text-center backdrop-blur">
                  <div className="font-serif text-2xl text-gold">{b.k}</div>
                  <div className="mt-1 text-[0.65rem] uppercase tracking-[0.18em] text-ivory/70">
                    {b.v}
                  </div>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
