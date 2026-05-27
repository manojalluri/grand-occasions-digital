import { Star, Quote } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const TESTIMONIALS = [
  {
    name: "Priya & Aakash Reddy",
    event: "Wedding · Dec 2024",
    body: "Aurelia hosted 1,200 of our guests without a single misstep. The pillarless ballroom was breathtaking and the captain anticipated every need before we even asked.",
  },
  {
    name: "Karthik M.",
    event: "Corporate Annual · Mar 2025",
    body: "From AV to catering, this is the most professional venue we have worked with in the city. We have already locked them in for next year.",
  },
  {
    name: "Sneha Iyer",
    event: "Reception · Jan 2025",
    body: "The bridal suite is a dream and the parking team handled valet for 700+ cars effortlessly. Worth every rupee — guests are still talking about the food.",
  },
  {
    name: "Ramesh & Family",
    event: "60th Birthday · Sep 2024",
    body: "We wanted something intimate and refined for my father's milestone. The team scaled the décor down beautifully without losing any of the grandeur.",
  },
];

export function Testimonials() {
  return (
    <section className="relative overflow-hidden border-t border-ivory/10 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title={<>Beloved by the families <span className="italic text-gold">we serve.</span></>}
        />
        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {TESTIMONIALS.map((t, i) => (
            <Reveal
              key={t.name}
              delay={i * 0.08}
              className="relative flex h-full flex-col gap-5 rounded-sm border border-ivory/10 bg-card/60 p-8 backdrop-blur md:p-10"
            >
              <Quote className="size-8 text-gold/60" strokeWidth={1} />
              <p className="font-serif text-xl leading-snug text-ivory md:text-2xl">
                "{t.body}"
              </p>
              <div className="mt-auto flex items-center justify-between border-t border-ivory/10 pt-5">
                <div>
                  <div className="text-sm font-medium text-ivory">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.event}</div>
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="size-4 fill-gold text-gold" />
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
