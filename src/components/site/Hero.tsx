import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImg from "@/assets/hero-stage.jpg";
import { venue, waLink } from "@/lib/venue";

const STATS = [
  { value: venue.stats.events, label: "Events Hosted" },
  { value: venue.stats.years, label: "Years of Excellence" },
  { value: venue.stats.capacity, label: "Guest Capacity" },
  { value: venue.stats.rating + "★", label: "Customer Rating" },
];

export function Hero() {
  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Grand wedding stage with floral arch and crystal chandeliers at Aurelia Grand"
          width={1920}
          height={1280}
          className="h-full w-full object-cover animate-kenburns"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/55 to-charcoal" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/70 via-transparent to-charcoal/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-5 pb-20 pt-40 md:px-8 md:pb-24 md:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-3"
        >
          <Sparkles className="size-4 text-gold" />
          <span className="eyebrow">Est. 2007 · {venue.city}</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-4xl font-serif text-[clamp(2.8rem,8vw,6.5rem)] leading-[0.98] text-ivory text-balance"
        >
          Where grand celebrations
          <span className="block italic text-gold-soft">become timeless memories.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="mt-6 max-w-xl text-base leading-relaxed text-ivory/80 md:text-lg"
        >
          A landmark address for weddings, receptions and prestige gatherings in {venue.city}.
          Pillarless ballrooms, devoted hospitality, and a dedicated event team — all in one
          unforgettable venue.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <Link
            to="/contact"
            className="group inline-flex items-center gap-3 rounded-sm bg-gold px-7 py-4 text-xs uppercase tracking-[0.22em] text-charcoal transition-all hover:bg-gold-soft"
          >
            Book the Venue
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            to="/gallery"
            className="inline-flex items-center gap-3 rounded-sm border border-ivory/30 px-7 py-4 text-xs uppercase tracking-[0.22em] text-ivory backdrop-blur-md transition-colors hover:border-gold hover:text-gold"
          >
            View Gallery
          </Link>
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden text-xs uppercase tracking-[0.22em] text-ivory/70 underline-offset-8 hover:text-gold hover:underline md:inline-flex md:px-2"
          >
            or chat on WhatsApp
          </a>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7 }}
          className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-ivory/10 bg-ivory/5 backdrop-blur-md md:mt-20 md:grid-cols-4"
        >
          {STATS.map((s) => (
            <div key={s.label} className="bg-charcoal/60 px-5 py-6 md:px-7 md:py-8">
              <div className="font-serif text-3xl text-gold md:text-4xl">{s.value}</div>
              <div className="mt-2 text-[0.65rem] uppercase tracking-[0.2em] text-ivory/70">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <div className="pointer-events-none absolute inset-x-0 bottom-4 z-10 hidden justify-center md:flex">
        <div className="h-10 w-px bg-gradient-to-b from-gold to-transparent" />
      </div>
    </section>
  );
}
