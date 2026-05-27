import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

interface Props {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
}

export function SectionHeading({ eyebrow, title, description, align = "center" }: Props) {
  return (
    <Reveal
      className={
        "flex flex-col gap-4 " +
        (align === "center" ? "items-center text-center" : "items-start text-left")
      }
    >
      {eyebrow && (
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-gold/60" />
          <span className="eyebrow">{eyebrow}</span>
          <span className="h-px w-8 bg-gold/60" />
        </div>
      )}
      <h2 className="font-serif text-4xl leading-[1.05] text-balance text-ivory sm:text-5xl md:text-6xl">
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          {description}
        </p>
      )}
    </Reveal>
  );
}
