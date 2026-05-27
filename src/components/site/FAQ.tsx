import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const FAQ = [
  { q: "What is the maximum seating capacity?", a: "Our pillarless ballroom seats 1,500 guests dining-style and 1,800 in theatre arrangement. Smaller halls scale beautifully for 200-guest gatherings." },
  { q: "Is outside catering allowed?", a: "We offer in-house catering by award-winning chefs and also welcome empanelled outside caterers for traditional and community-specific menus." },
  { q: "Do you provide decoration services?", a: "Yes. Our in-house design team handles floral, drapery and stage setups, and we happily collaborate with your chosen decorator." },
  { q: "Is parking available?", a: "Attended valet parking for 350+ vehicles is included with every booking, with covered drop-off and dedicated VIP bays." },
  { q: "Can we schedule a venue visit?", a: "Absolutely. Visits are by appointment, seven days a week. Use the form below or WhatsApp us — we'll send a senior consultant." },
  { q: "What are the booking terms?", a: "Dates are confirmed with a refundable booking advance. Full breakdown of inclusions, taxes and timelines is shared in your customised quote." },
  { q: "Is generator backup available?", a: "Yes — 100% silent power backup covers the entire venue including AV, climate control and lighting." },
  { q: "Do you host corporate events?", a: "We host annual meetings, product launches, conferences and award nights with concert-grade AV, breakout rooms and tailored catering." },
];

export function FAQ_() {
  return (
    <section className="border-t border-ivory/10 py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Frequently asked"
          title={<>The details, <span className="italic text-gold">answered.</span></>}
        />
        <Reveal delay={0.1} className="mt-12">
          <Accordion type="single" collapsible className="w-full">
            {FAQ.map((item, i) => (
              <AccordionItem
                key={i}
                value={`f-${i}`}
                className="border-b border-ivory/10"
              >
                <AccordionTrigger className="py-6 text-left font-serif text-lg text-ivory hover:text-gold hover:no-underline md:text-xl">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-base leading-relaxed text-muted-foreground">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
