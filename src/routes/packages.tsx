import { createFileRoute } from "@tanstack/react-router";
import { PackagesPreview } from "@/components/site/Packages";
import { FAQ_ } from "@/components/site/FAQ";
import { ContactSection } from "@/components/site/ContactSection";
import { Reveal } from "@/components/site/Reveal";
import { venue } from "@/lib/venue";
import banquet from "@/assets/banquet-interior.jpg";

export const Route = createFileRoute("/packages")({
  head: () => ({
    meta: [
      { title: `Packages & Pricing — ${venue.name} Convention` },
      { name: "description", content: `Silver, Gold and Platinum event packages at ${venue.name}, ${venue.city}. Transparent pricing, every detail customisable.` },
      { property: "og:title", content: `Packages & Pricing — ${venue.name}` },
      { property: "og:description", content: "Three curated event packages — infinitely customisable to your vision." },
      { property: "og:image", content: banquet },
      { property: "og:url", content: "/packages" },
    ],
    links: [{ rel: "canonical", href: "/packages" }],
  }),
  component: PackagesPage,
});

function PackagesPage() {
  return (
    <>
      <section className="relative overflow-hidden px-5 pb-12 pt-36 md:px-8 md:pb-20 md:pt-44">
        <div className="absolute inset-0 -z-10">
          <img src={banquet} alt="" className="h-full w-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal/70 to-charcoal" />
        </div>
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="eyebrow">Packages</div>
            <h1 className="mt-4 max-w-4xl font-serif text-5xl text-balance text-ivory md:text-7xl">
              Pricing crafted around <span className="italic text-gold">your celebration.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
              Three curated experiences — Silver, Gold and Platinum — each fully tailored to your
              guest count, theme and rituals. Request a custom quote and we'll respond within the hour.
            </p>
          </Reveal>
        </div>
      </section>

      <PackagesPreview />
      <FAQ_ />
      <ContactSection />
    </>
  );
}
