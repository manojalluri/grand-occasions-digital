import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { WhyUs } from "@/components/site/WhyUs";
import { Categories } from "@/components/site/Categories";
import { Amenities } from "@/components/site/Amenities";
import { GalleryPreview } from "@/components/site/GalleryPreview";
import { Testimonials } from "@/components/site/Testimonials";
import { VirtualTour } from "@/components/site/VirtualTour";
import { PackagesPreview } from "@/components/site/Packages";
import { FAQ_ } from "@/components/site/FAQ";
import { ContactSection } from "@/components/site/ContactSection";
import { venue } from "@/lib/venue";
import heroImg from "@/assets/hero-stage.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${venue.name} — Luxury Convention & Banquet Hall in ${venue.city}` },
      { name: "description", content: `Premium pillarless convention hall in ${venue.city} for weddings, receptions, corporate events and grand celebrations. Capacity up to 1,500 guests. Book a private venue tour.` },
      { property: "og:title", content: `${venue.name} — Luxury Convention & Banquet Hall` },
      { property: "og:description", content: `Where grand celebrations become timeless memories. ${venue.city}'s most trusted address for weddings, receptions and prestige events.` },
      { property: "og:image", content: heroImg },
      { property: "og:url", content: "/" },
      { name: "twitter:image", content: heroImg },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <About />
      <WhyUs />
      <Categories />
      <Amenities />
      <GalleryPreview />
      <Testimonials />
      <VirtualTour />
      <PackagesPreview />
      <FAQ_ />
      <ContactSection />
    </>
  );
}
