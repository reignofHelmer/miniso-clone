import Image from "next/image";

import { brand } from "@/data/site";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  /** Text before the red mark, e.g. "LIFE IS". */
  lead: string;
  /** Text after the red mark, e.g. "FOR FUN". Leave out for a plain heading. */
  trail?: string;
  align?: "center" | "left";
  as?: "h2" | "h3";
  className?: string;
};

/**
 * The big black section titles on miniso.com, e.g. "LIFE IS ✱ FOR FUN" or
 * "IP ✱ Collaboration". The red mark only shows when `trail` is set.
 * Font size defaults to 48u; override with className (e.g. "lg:u-text-38").
 */
export function SectionHeading({
  lead,
  trail,
  align = "center",
  as: Tag = "h2",
  className,
}: SectionHeadingProps) {
  return (
    <Tag
      className={cn(
        "u-text-48 flex flex-wrap items-center leading-none font-medium text-black",
        align === "center" ? "justify-center text-center" : "justify-start",
        className,
      )}
    >
      <span>{lead}</span>
      {trail ? (
        <>
          <Image
            src={brand.star}
            alt=""
            width={48}
            height={48}
            className="u-px-12 u-w-64 lg:u-w-72 h-auto"
          />
          <span>{trail}</span>
        </>
      ) : null}
    </Tag>
  );
}
