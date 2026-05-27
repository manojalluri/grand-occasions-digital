import { createFileRoute } from "@tanstack/react-router";
import { ContactSection } from "@/components/site/ContactSection";
import { Reveal } from "@/components/site/Reveal";
import { venue } from "@/lib/venue";
import exterior from "@/assets/exterior-night.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: `Contact & Book — ${venue.name} Convention, ${venue.city}` },
      { name: "description", content: `Speak to ${venue.name}'s event team. Call ${venue.phoneDisplay}, WhatsApp or schedule a private venue tour in ${venue.city}.` },
      { property: "og:title", content: `Contact & Book — ${venue.name}` },
      { property: "og:description", content: "Schedule a venue tour, request a quote, or chat with our event consultant on WhatsApp." },
      { property: "og:image", content: exterior },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden px-5 pb-12 pt-36 md:px-8 md:pb-20 md:pt-44">
        <div className="absolute inset-0 -z-10">
          <img src={exterior} alt="" className="h-full w-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal/70 to-charcoal" />
        </div>
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="eyebrow">Contact</div>
            <h1 className="mt-4 max-w-4xl font-serif text-5xl text-balance text-ivory md:text-7xl">
              Let's plan something <span className="italic text-gold">unforgettable.</span>
            </h1>
          </Reveal>
        </div>
      </section>
      <ContactSection />
    </>
  );
}
