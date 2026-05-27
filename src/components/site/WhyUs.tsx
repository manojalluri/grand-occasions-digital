import {
  Building2, Sparkles, MapPin, Car, Snowflake, Palette, Headset, Wifi,
} from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const REASONS = [
  { Icon: Building2, title: "Elegant Architecture", body: "Pillarless ballroom, soaring ceilings and cinematic interiors designed for unforgettable photography." },
  { Icon: Sparkles, title: "Spacious Capacity", body: "Comfortable seating and dining for intimate 200-guest soirées up to 1,500-guest weddings." },
  { Icon: MapPin, title: "Prime Location", body: "Easy accessibility from every direction with excellent connectivity to the airport and city centre." },
  { Icon: Car, title: "Ample Valet Parking", body: "Safe, attended parking for 350+ vehicles with covered drop-off and dedicated VIP bays." },
  { Icon: Snowflake, title: "Air-Conditioned Comfort", body: "Fully climate-controlled halls with whisper-quiet HVAC engineered for large gatherings." },
  { Icon: Palette, title: "Customisable Décor", body: "Open vendor policy and an in-house design team to shape any theme or cultural ritual." },
  { Icon: Headset, title: "Dedicated Event Captain", body: "A senior coordinator assigned to your booking from venue tour to send-off." },
  { Icon: Wifi, title: "Modern Facilities", body: "Concert-grade sound, intelligent lighting, 100% power backup and high-speed Wi-Fi throughout." },
];

export function WhyUs() {
  return (
    <section className="border-t border-ivory/10 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Why choose Aurelia"
          title={<>Premium by design, <span className="italic text-gold">personal by nature.</span></>}
          description="Eight reasons families, planners and corporate organisers keep choosing us."
        />
        <div className="mt-16 grid gap-px overflow-hidden rounded-sm border border-ivory/10 bg-ivory/10 sm:grid-cols-2 lg:grid-cols-4">
          {REASONS.map((r, i) => (
            <Reveal
              key={r.title}
              delay={i * 0.05}
              className="group relative flex h-full flex-col gap-4 bg-card/60 p-7 backdrop-blur transition-colors hover:bg-card"
            >
              <r.Icon className="size-7 text-gold transition-transform group-hover:-translate-y-0.5" strokeWidth={1.25} />
              <h3 className="font-serif text-xl text-ivory">{r.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{r.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
