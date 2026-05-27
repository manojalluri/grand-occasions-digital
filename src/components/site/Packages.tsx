import { Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export const PACKAGES = [
  {
    name: "Silver",
    tagline: "Intimate gatherings",
    capacity: "Up to 400 guests",
    price: "From ₹1.2 L",
    features: [
      "Hall rental (4 hours)",
      "Standard floral décor",
      "Round table seating",
      "Basic stage setup",
      "Sound system & mic",
      "Valet & security",
    ],
  },
  {
    name: "Gold",
    tagline: "Most loved",
    capacity: "Up to 800 guests",
    price: "From ₹2.4 L",
    featured: true,
    features: [
      "Hall rental (8 hours)",
      "Premium floral & drapery",
      "Bridal suite included",
      "Elevated stage with backdrop",
      "Intelligent lighting & sound",
      "Dedicated event captain",
      "Valet for 200+ vehicles",
    ],
  },
  {
    name: "Platinum",
    tagline: "Grand celebrations",
    capacity: "Up to 1,500 guests",
    price: "From ₹4.5 L",
    features: [
      "Full-day hall rental",
      "Couture floral installations",
      "Bridal + VIP suite",
      "Designer mandap / stage",
      "Concert-grade AV package",
      "Dual event captains",
      "Full valet, security & guest concierge",
      "Custom menu by master chef",
    ],
  },
];

export function PackagesPreview() {
  return (
    <section className="border-t border-ivory/10 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Packages"
          title={<>Three curated packages, <span className="italic text-gold">infinitely customisable.</span></>}
          description="Start with a thoughtfully assembled experience, then tailor every detail to your vision."
        />

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {PACKAGES.map((p, i) => (
            <Reveal
              key={p.name}
              delay={i * 0.08}
              className={
                "relative flex flex-col rounded-sm border p-8 backdrop-blur md:p-10 " +
                (p.featured
                  ? "border-gold bg-gradient-to-b from-gold/10 to-transparent shadow-luxe"
                  : "border-ivory/10 bg-card/60")
              }
            >
              {p.featured && (
                <div className="absolute -top-3 left-8 rounded-sm bg-gold px-3 py-1 text-[0.6rem] uppercase tracking-[0.2em] text-charcoal">
                  Most Booked
                </div>
              )}
              <div className="eyebrow">{p.tagline}</div>
              <h3 className="mt-3 font-serif text-4xl text-ivory">{p.name}</h3>
              <div className="mt-1 text-sm text-muted-foreground">{p.capacity}</div>
              <div className="mt-6 font-serif text-3xl text-gold">{p.price}</div>
              <div className="my-6 h-px bg-ivory/10" />
              <ul className="space-y-3 text-sm text-ivory/85">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <Check className="mt-0.5 size-4 shrink-0 text-gold" strokeWidth={2} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className={
                  "mt-8 inline-flex items-center justify-center rounded-sm px-6 py-3.5 text-xs uppercase tracking-[0.2em] transition-all " +
                  (p.featured
                    ? "bg-gold text-charcoal hover:bg-gold-soft"
                    : "border border-ivory/20 text-ivory hover:border-gold hover:text-gold")
                }
              >
                Request {p.name}
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
