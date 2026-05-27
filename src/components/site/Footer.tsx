import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Youtube, Phone, Mail, MapPin, Star } from "lucide-react";
import { venue, waLink, mapsLink } from "@/lib/venue";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-ivory/10 bg-charcoal pb-28 pt-20 md:pb-16">
      <div className="absolute inset-x-0 top-0 h-px gold-rule" />
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-4 md:px-8">
        <div className="md:col-span-2">
          <div className="font-serif text-3xl text-ivory">{venue.name}</div>
          <div className="eyebrow mt-2">{venue.tagline}</div>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
            A landmark celebration address in {venue.city} — where elegant architecture, devoted
            hospitality, and obsessive attention to detail come together for life's most beautiful
            moments.
          </p>
          <div className="mt-6 flex items-center gap-2 text-sm text-ivory/80">
            <Star className="size-4 fill-gold text-gold" />
            <span className="font-medium">{venue.stats.rating}</span>
            <span className="text-muted-foreground">· 1,200+ Google reviews</span>
          </div>
          <div className="mt-6 flex gap-3">
            {[
              { Icon: Instagram, href: venue.social.instagram },
              { Icon: Facebook, href: venue.social.facebook },
              { Icon: Youtube, href: venue.social.youtube },
            ].map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex size-10 items-center justify-center rounded-full border border-ivory/15 text-ivory/70 transition-colors hover:border-gold hover:text-gold"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <div className="eyebrow mb-4">Explore</div>
          <ul className="space-y-3 text-sm text-ivory/80">
            <li><Link to="/" className="hover:text-gold">Home</Link></li>
            <li><Link to="/gallery" className="hover:text-gold">Gallery</Link></li>
            <li><Link to="/packages" className="hover:text-gold">Packages</Link></li>
            <li><Link to="/contact" className="hover:text-gold">Contact</Link></li>
            <li><a href={waLink()} className="hover:text-gold">WhatsApp Enquiry</a></li>
          </ul>
        </div>

        <div>
          <div className="eyebrow mb-4">Contact</div>
          <ul className="space-y-3 text-sm text-ivory/80">
            <li className="flex items-start gap-3">
              <Phone size={14} className="mt-1 text-gold" />
              <a href={`tel:${venue.phoneHref}`}>{venue.phoneDisplay}</a>
            </li>
            <li className="flex items-start gap-3">
              <Mail size={14} className="mt-1 text-gold" />
              <a href={`mailto:${venue.email}`}>{venue.email}</a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={14} className="mt-1 text-gold" />
              <a href={mapsLink()} target="_blank" rel="noopener noreferrer">
                {venue.fullAddress}
              </a>
            </li>
            <li className="text-muted-foreground">{venue.hours}</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-7xl border-t border-ivory/10 px-5 pt-6 md:px-8">
        <p className="text-center text-xs text-muted-foreground md:text-left">
          © {new Date().getFullYear()} {venue.name} Convention. All rights reserved. ·
          <span className="ml-1">Crafted for unforgettable celebrations.</span>
        </p>
      </div>
    </footer>
  );
}
