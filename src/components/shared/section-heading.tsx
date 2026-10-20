import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  title: string;
  intro?: string;
  id?: string;
  /** Light text for dark or coloured sections. */
  inverted?: boolean;
  className?: string;
};

/** Big rounded heading with an optional one-line intro under it. */
export function SectionHeading({
  title,
  intro,
  id,
  inverted,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-2xl", className)}>
      <h2
        id={id}
        className={cn(
          "font-display text-[clamp(2.25rem,5vw,4rem)] leading-[0.95] tracking-tight",
          inverted ? "text-paper" : "text-ink",
        )}
      >
        {title}
      </h2>
      {intro ? (
        <p
          className={cn(
            "mt-4 max-w-[52ch] text-lg leading-relaxed",
            inverted ? "text-paper/75" : "text-ink/70",
          )}
        >
          {intro}
        </p>
      ) : null}
    </div>
  );
}
