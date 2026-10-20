"use client";

import { useId, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";

import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { SmartLink } from "@/components/shared/smart-link";
import { lines } from "@/data/home";
import type { Tone } from "@/data/types";
import { cn } from "@/lib/utils";

const toneBg: Record<Tone, string> = {
  bubblegum: "bg-bubblegum text-ink",
  butter: "bg-butter text-ink",
  mint: "bg-mint text-ink",
  cobalt: "bg-cobalt text-white",
};

/**
 * The four lines as an accordion: the open panel stretches wide (tall on
 * phones) to show its photo and story, the others shrink to coloured tabs.
 */
export function Lines() {
  const [active, setActive] = useState(0);
  const baseId = useId();

  return (
    <section
      id="lines"
      aria-labelledby={`${baseId}-title`}
      className="py-20 md:py-28"
    >
      <Container>
        <SectionHeading
          id={`${baseId}-title`}
          title="Four lines, one happy shelf"
          intro="Each MINILA line has its own colour and character. Open one to see what's inside."
        />

        <div className="mt-10 flex h-[640px] flex-col gap-2.5 md:mt-14 lg:h-[560px] lg:flex-row lg:gap-3">
          {lines.map((line, i) => {
            const isActive = i === active;
            const panelId = `${baseId}-panel-${line.id}`;
            return (
              <div
                key={line.id}
                onMouseEnter={() => setActive(i)}
                style={{ flexGrow: isActive ? 7 : 1 }}
                className={cn(
                  "relative isolate min-h-16 basis-0 overflow-hidden rounded-[2rem] transition-[flex-grow] duration-700 ease-[cubic-bezier(0.65,0,0.25,1)] lg:min-w-[5.5rem]",
                  toneBg[line.tone],
                )}
              >
                <Image
                  src={line.photo.src}
                  alt={line.photo.alt}
                  fill
                  sizes="(min-width: 1024px) 70vw, 100vw"
                  className={cn(
                    "-z-10 object-cover transition-opacity duration-700",
                    isActive ? "opacity-100" : "opacity-0",
                  )}
                />
                <div
                  aria-hidden
                  className={cn(
                    "from-ink/80 via-ink/25 absolute inset-0 -z-10 bg-linear-to-t to-transparent transition-opacity duration-700",
                    isActive ? "opacity-100" : "opacity-0",
                  )}
                />

                <h3>
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    aria-expanded={isActive}
                    aria-controls={panelId}
                    className={cn(
                      "font-display absolute inset-0 flex items-center px-6 text-left text-2xl leading-none transition-opacity duration-300 lg:items-end lg:justify-center lg:px-0 lg:pb-8 lg:text-3xl",
                      isActive && "pointer-events-none opacity-0",
                    )}
                  >
                    <span className="lg:rotate-180 lg:[writing-mode:vertical-rl]">
                      {line.name}
                    </span>
                  </button>
                </h3>

                <AnimatePresence>
                  {isActive ? (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-label={line.name}
                      initial={{ opacity: 0, y: 24 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, transition: { duration: 0.15 } }}
                      transition={{ delay: 0.25, duration: 0.5 }}
                      className="absolute inset-x-0 bottom-0 p-6 text-white md:p-10"
                    >
                      <p className="text-base font-medium text-white/80 md:text-lg">
                        {line.tagline}
                      </p>
                      <p className="font-display mt-1 text-[clamp(2.5rem,6vw,4.75rem)] leading-[0.95]">
                        {line.name}
                      </p>
                      <p className="mt-3 max-w-[46ch] leading-relaxed text-white/85 max-sm:line-clamp-3">
                        {line.description}
                      </p>
                      <SmartLink
                        link={{
                          label: "Shop this line",
                          href: "#shop",
                          select: { section: "shop", id: line.shelfId },
                        }}
                        className="text-ink hover:bg-butter mt-5 inline-flex h-12 items-center rounded-full bg-white px-6 font-semibold transition-colors"
                      >
                        Shop this line
                      </SmartLink>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
