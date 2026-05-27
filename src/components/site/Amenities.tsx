import {
  AirVent, Crown, Users2, BedDouble, ChefHat, Utensils, Zap, Lightbulb,
  Speaker, Wifi, ShieldCheck, Accessibility, Car, Flower2, Camera, Coffee,
} from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const AMENITIES = [
  { Icon: AirVent, label: "Central A/C" },
  { Icon: Crown, label: "Luxury Interiors" },
  { Icon: BedDouble, label: "Bridal Rooms" },
  { Icon: Users2, label: "VIP Suites" },
  { Icon: ChefHat, label: "Catering Area" },
  { Icon: Utensils, label: "Dining Hall" },
  { Icon: Zap, label: "Generator Backup" },
  { Icon: Lightbulb, label: "Modern Lighting" },
  { Icon: Speaker, label: "Pro Sound System" },
  { Icon: Wifi, label: "High-Speed Wi-Fi" },
  { Icon: ShieldCheck, label: "24/7 Security" },
  { Icon: Accessibility, label: "Wheelchair Access" },
  { Icon: Car, label: "Large Parking" },
  { Icon: Flower2, label: "Décor Support" },
  { Icon: Camera, label: "Photogenic Spaces" },
  { Icon: Coffee, label: "Guest Lounges" },
];

export function Amenities() {
  return (
    <section className="relative overflow-hidden border-t border-ivory/10 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Amenities"
          title={<>Every detail, <span className="italic text-gold">already taken care of.</span></>}
        />
        <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-ivory/10 bg-ivory/10 sm:grid-cols-3 md:grid-cols-4">
          {AMENITIES.map((a, i) => (
            <Reveal
              key={a.label}
              delay={(i % 4) * 0.04}
              className="group flex flex-col items-start gap-3 bg-card/60 p-6 backdrop-blur transition-colors hover:bg-card"
            >
              <a.Icon className="size-6 text-gold" strokeWidth={1.2} />
              <span className="font-serif text-base text-ivory md:text-lg">{a.label}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
