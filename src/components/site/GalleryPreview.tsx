import { Link } from "@tanstack/react-router";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import g1 from "@/assets/hero-stage.jpg";
import g2 from "@/assets/banquet-interior.jpg";
import g3 from "@/assets/reception-dining.jpg";
import g4 from "@/assets/engagement-stage.jpg";
import g5 from "@/assets/detail-centerpiece.jpg";
import g6 from "@/assets/detail-chandelier.jpg";
import g7 from "@/assets/bridal-suite.jpg";
import g8 from "@/assets/exterior-night.jpg";

const IMAGES = [
  { src: g1, alt: "Wedding stage with floral arch", span: "row-span-2" },
  { src: g2, alt: "Marble ballroom with chandeliers" },
  { src: g3, alt: "Candlelit reception dining" },
  { src: g4, alt: "Engagement ceremony stage" },
  { src: g5, alt: "Centerpiece floral detail", span: "row-span-2" },
  { src: g6, alt: "Crystal chandelier detail" },
  { src: g7, alt: "Bridal suite with gilded mirror" },
  { src: g8, alt: "Convention hall exterior at night" },
];

export function GalleryPreview() {
  return (
    <section className="border-t border-ivory/10 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Gallery"
          title={<>A look inside <span className="italic text-gold">our world.</span></>}
          description="Past celebrations, candid moments and details that set the standard."
        />

        <div className="mt-16 grid auto-rows-[180px] grid-cols-2 gap-3 md:auto-rows-[220px] md:grid-cols-4">
          {IMAGES.map((img, i) => (
            <Reveal
              key={i}
              delay={(i % 4) * 0.05}
              className={"group relative overflow-hidden rounded-sm " + (img.span ?? "")}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-charcoal/0 transition-colors group-hover:bg-charcoal/20" />
            </Reveal>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/gallery"
            className="inline-flex items-center gap-3 rounded-sm border border-gold/60 px-7 py-4 text-xs uppercase tracking-[0.22em] text-gold transition-all hover:bg-gold hover:text-charcoal"
          >
            Explore Full Gallery
          </Link>
        </div>
      </div>
    </section>
  );
}
