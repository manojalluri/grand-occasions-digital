import { Link } from "@tanstack/react-router";
import { Play, Compass, Camera } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import exterior from "@/assets/exterior-night.jpg";

export function VirtualTour() {
  return (
    <section className="relative overflow-hidden border-t border-ivory/10 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Virtual Tour"
          title={<>Explore the venue <span className="italic text-gold">before you visit.</span></>}
          description="Walk every corridor, ballroom and ceremony lawn from anywhere."
        />

        <Reveal className="mt-16">
          <div className="group relative aspect-[16/10] overflow-hidden rounded-sm md:aspect-[21/9]">
            <img
              src={exterior}
              alt="Convention hall illuminated at dusk"
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-[1500ms] group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-charcoal/40" />
            <div className="absolute inset-0 flex items-center justify-center">
              <Link
                to="/contact"
                className="flex size-20 items-center justify-center rounded-full border border-ivory/40 bg-charcoal/40 text-ivory backdrop-blur-md transition-all hover:scale-110 hover:border-gold hover:bg-gold hover:text-charcoal md:size-24"
                aria-label="Start virtual tour"
              >
                <Play className="ml-1 size-7 md:size-9" />
              </Link>
            </div>

            <div className="absolute inset-x-0 bottom-0 grid grid-cols-3 border-t border-ivory/10 bg-charcoal/70 backdrop-blur-md">
              {[
                { Icon: Compass, label: "360° Hall Tour" },
                { Icon: Camera, label: "Drone Footage" },
                { Icon: Play, label: "Setup Walkthroughs" },
              ].map((i) => (
                <div
                  key={i.label}
                  className="flex flex-col items-center gap-2 border-l border-ivory/10 px-4 py-5 text-center first:border-l-0 md:flex-row md:justify-center md:gap-3"
                >
                  <i.Icon className="size-4 text-gold" strokeWidth={1.5} />
                  <span className="text-[0.7rem] uppercase tracking-[0.2em] text-ivory/80 md:text-xs">
                    {i.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
