import { Phone, MessageCircle, MapPin, CalendarHeart } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { venue, waLink, mapsLink } from "@/lib/venue";

export function MobileCTA() {
  const items = [
    { icon: Phone, label: "Call", href: `tel:${venue.phoneHref}` },
    { icon: MessageCircle, label: "WhatsApp", href: waLink() },
    { icon: MapPin, label: "Directions", href: mapsLink() },
  ];

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-ivory/10 bg-charcoal/95 backdrop-blur-xl md:hidden">
      <div className="grid grid-cols-4">
        {items.map((it) => (
          <a
            key={it.label}
            href={it.href}
            target={it.label === "WhatsApp" || it.label === "Directions" ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-1 py-3 text-[0.65rem] uppercase tracking-[0.15em] text-ivory/80 active:bg-ivory/5"
          >
            <it.icon size={18} className="text-gold" />
            {it.label}
          </a>
        ))}
        <Link
          to="/contact"
          className="flex flex-col items-center gap-1 bg-gold py-3 text-[0.65rem] uppercase tracking-[0.15em] text-charcoal"
        >
          <CalendarHeart size={18} />
          Book
        </Link>
      </div>
    </div>
  );
}
