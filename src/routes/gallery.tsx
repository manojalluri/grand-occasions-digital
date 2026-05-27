import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Reveal } from "@/components/site/Reveal";
import { venue } from "@/lib/venue";
import g1 from "@/assets/hero-stage.jpg";
import g2 from "@/assets/banquet-interior.jpg";
import g3 from "@/assets/reception-dining.jpg";
import g4 from "@/assets/engagement-stage.jpg";
import g5 from "@/assets/detail-centerpiece.jpg";
import g6 from "@/assets/detail-chandelier.jpg";
import g7 from "@/assets/bridal-suite.jpg";
import g8 from "@/assets/exterior-night.jpg";
import g9 from "@/assets/corporate-setup.jpg";
import g10 from "@/assets/birthday-decor.jpg";

type Cat = "All" | "Weddings" | "Receptions" | "Corporate" | "Décor" | "Architecture";
const ITEMS: { src: string; alt: string; cat: Exclude<Cat, "All">; tall?: boolean }[] = [
  { src: g1, alt: "Wedding stage with floral arch", cat: "Weddings", tall: true },
  { src: g2, alt: "Marble ballroom with chandeliers", cat: "Architecture" },
  { src: g3, alt: "Candlelit reception dining", cat: "Receptions" },
  { src: g4, alt: "Engagement ceremony stage", cat: "Weddings" },
  { src: g5, alt: "Floral centerpiece detail", cat: "Décor", tall: true },
  { src: g6, alt: "Crystal chandelier", cat: "Architecture" },
  { src: g7, alt: "Bridal suite interior", cat: "Décor" },
  { src: g8, alt: "Convention hall exterior at night", cat: "Architecture", tall: true },
  { src: g9, alt: "Corporate conference setup", cat: "Corporate" },
  { src: g10, alt: "Birthday party décor", cat: "Décor" },
];

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: `Gallery — ${venue.name} Convention` },
      { name: "description", content: `Step inside ${venue.name}: wedding stages, reception halls, corporate setups, décor close-ups and exterior architecture in ${venue.city}.` },
      { property: "og:title", content: `Gallery — ${venue.name} Convention` },
      { property: "og:description", content: "A visual tour through weddings, receptions, corporate events and the architecture that hosts them." },
      { property: "og:image", content: g2 },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  const [cat, setCat] = useState<Cat>("All");
  const [lightbox, setLightbox] = useState<string | null>(null);
  const cats: Cat[] = ["All", "Weddings", "Receptions", "Corporate", "Décor", "Architecture"];
  const filtered = cat === "All" ? ITEMS : ITEMS.filter((i) => i.cat === cat);

  return (
    <>
      <section className="px-5 pb-12 pt-36 md:px-8 md:pb-16 md:pt-44">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="eyebrow">Gallery</div>
            <h1 className="mt-4 max-w-4xl font-serif text-5xl text-balance text-ivory md:text-7xl">
              Moments captured at <span className="italic text-gold">Aurelia Grand.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
              A curated selection from celebrations across our halls and lawns.
            </p>
          </Reveal>

          <div className="mt-12 flex flex-wrap gap-2 overflow-x-auto">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={
                  "rounded-sm border px-4 py-2 text-xs uppercase tracking-[0.18em] transition-all " +
                  (cat === c
                    ? "border-gold bg-gold text-charcoal"
                    : "border-ivory/15 text-ivory/70 hover:border-gold hover:text-gold")
                }
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-32 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid auto-rows-[180px] grid-cols-2 gap-3 md:auto-rows-[240px] md:grid-cols-4">
            {filtered.map((img, i) => (
              <Reveal
                key={img.src + i}
                delay={(i % 4) * 0.05}
                className={"group relative cursor-pointer overflow-hidden rounded-sm " + (img.tall ? "row-span-2" : "")}
              >
                <button
                  onClick={() => setLightbox(img.src)}
                  className="block h-full w-full"
                  aria-label={`View ${img.alt}`}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal/80 to-transparent p-4">
                    <div className="text-[0.65rem] uppercase tracking-[0.2em] text-gold">{img.cat}</div>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 rounded-sm bg-gold px-7 py-4 text-xs uppercase tracking-[0.22em] text-charcoal hover:bg-gold-soft"
            >
              Book a Private Tour
            </Link>
          </div>
        </div>
      </section>

      {lightbox && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-charcoal/95 p-4 backdrop-blur-xl"
          onClick={() => setLightbox(null)}
          role="dialog"
        >
          <img src={lightbox} alt="" className="max-h-[90vh] max-w-[95vw] rounded-sm object-contain" />
          <button
            onClick={() => setLightbox(null)}
            className="absolute right-5 top-5 rounded-full border border-ivory/20 px-4 py-2 text-xs uppercase tracking-[0.2em] text-ivory"
          >
            Close
          </button>
        </div>
      )}
    </>
  );
}
