import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import wedding from "@/assets/hero-stage.jpg";
import reception from "@/assets/reception-dining.jpg";
import engagement from "@/assets/engagement-stage.jpg";
import corporate from "@/assets/corporate-setup.jpg";
import birthday from "@/assets/birthday-decor.jpg";
import banquet from "@/assets/banquet-interior.jpg";

const CATEGORIES = [
  { img: wedding, title: "Weddings", desc: "Traditional & modern wedding celebrations.", tall: true },
  { img: reception, title: "Receptions", desc: "Elegant evening dining experiences." },
  { img: engagement, title: "Engagements", desc: "Memorable pre-wedding ceremonies." },
  { img: corporate, title: "Corporate Events", desc: "Meetings, conferences, launches." },
  { img: birthday, title: "Birthdays & Anniversaries", desc: "Luxury private milestone parties." },
  { img: banquet, title: "Cultural & Exhibitions", desc: "Community gatherings and trade events.", tall: true },
];

export function Categories() {
  return (
    <section id="events" className="border-t border-ivory/10 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Event Categories"
          title={<>Every occasion, <span className="italic text-gold">staged to perfection.</span></>}
          description="A versatile venue tuned for the full spectrum of life's celebrations and business gatherings."
        />

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2">
          {CATEGORIES.map((c, i) => (
            <Reveal
              key={c.title}
              delay={i * 0.05}
              className={
                "group relative overflow-hidden rounded-sm " +
                (c.tall ? "lg:row-span-2" : "")
              }
            >
              <div className={"relative " + (c.tall ? "aspect-[4/5] lg:h-full" : "aspect-[4/5] sm:aspect-[4/3]")}>
                <img
                  src={c.img}
                  alt={c.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <h3 className="font-serif text-2xl text-ivory md:text-3xl">{c.title}</h3>
                      <p className="mt-1 text-sm text-ivory/70">{c.desc}</p>
                    </div>
                    <Link
                      to="/gallery"
                      className="flex size-10 shrink-0 items-center justify-center rounded-full border border-ivory/30 text-ivory transition-colors group-hover:border-gold group-hover:bg-gold group-hover:text-charcoal"
                      aria-label={`View ${c.title} gallery`}
                    >
                      <ArrowUpRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
