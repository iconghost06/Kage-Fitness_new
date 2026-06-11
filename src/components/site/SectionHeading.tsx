import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface Props {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
  className,
}: Props) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && (
        <div
          className={cn(
            "mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-gold",
            align === "center" && "justify-center",
          )}
        >
          <span className="h-px w-8 bg-gold-gradient" />
          {eyebrow}
        </div>
      )}
      <h2
        className={cn(
          "font-display text-4xl leading-[0.95] tracking-wide sm:text-5xl md:text-6xl",
          light ? "text-white" : "text-ink",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed sm:text-lg",
            light ? "text-white/70" : "text-muted-foreground",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
