import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { venue } from "@/lib/venue";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/gallery", label: "Gallery" },
  { to: "/packages", label: "Packages" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={
        "fixed inset-x-0 top-0 z-50 transition-all duration-500 " +
        (scrolled
          ? "border-b border-ivory/10 bg-charcoal/80 backdrop-blur-xl"
          : "bg-transparent")
      }
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <Link to="/" className="group flex items-baseline gap-2">
          <span className="font-serif text-2xl tracking-tight text-ivory md:text-3xl">
            {venue.name}
          </span>
          <span className="hidden text-[0.65rem] uppercase tracking-[0.32em] text-gold sm:inline">
            {venue.tagline}
          </span>
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm font-medium text-ivory/80 transition-colors hover:text-gold"
              activeProps={{ className: "text-gold" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="rounded-sm border border-gold/60 bg-transparent px-5 py-2.5 text-xs uppercase tracking-[0.2em] text-gold transition-all hover:bg-gold hover:text-charcoal"
          >
            Book Venue
          </Link>
        </nav>

        <button
          aria-label="Toggle menu"
          className="rounded-sm p-2 text-ivory md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-ivory/10 bg-charcoal/95 backdrop-blur-xl md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-5 py-6">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="border-b border-ivory/5 py-4 font-serif text-2xl text-ivory"
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-6 rounded-sm border border-gold bg-gold px-5 py-3 text-center text-xs uppercase tracking-[0.2em] text-charcoal"
            >
              Book Venue
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
