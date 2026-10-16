"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Container } from "@/components/shared/container";
import { ipFeatures } from "@/data/home";
import { cn } from "@/lib/utils";

/**
 * Big IP feature (Harry Potter / PEANUTS / BT21 / LOOPY) with a frosted
 * switcher bar at the bottom. Like miniso.com, the active logo always sits
 * first in the switcher and the others rotate round after it.
 */
export function IpSpotlight() {
  const [active, setActive] = useState(0);
  const count = ipFeatures.length;
  const feature = ipFeatures[active];

  const go = (step: number) => setActive((i) => (i + step + count) % count);

  // Active item first, then the rest in order.
  const ordered = ipFeatures.map((_, i) => ipFeatures[(active + i) % count]);

  return (
    <section
      id="ip-collaboration"
      aria-roledescription="carousel"
      aria-label="IP collaborations"
      className="relative overflow-hidden"
    >
      {/* Artwork: all four are stacked so switching is instant. */}
      <div className="u-h-560 relative w-full lg:aspect-[1920/920] lg:h-auto">
        {ipFeatures.map((item, i) => (
          <Image
            key={item.id}
            src={item.image}
            alt=""
            fill
            sizes="100vw"
            className={cn(
              "object-cover transition-opacity duration-500",
              i === active ? "opacity-100" : "opacity-0",
            )}
          />
        ))}
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-[calc(100%-160*var(--u))] bg-linear-to-r from-black/55 via-black/20 to-transparent"
        />

        <Container className="h-full">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={feature.id}
              aria-live="polite"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, transition: { duration: 0.2 } }}
              transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
              className="u-top-50 u-w-450 u-left-30 lg:u-top-225 absolute z-10 text-white lg:left-0"
            >
              <p className="u-text-26 u-pb-20 lg:u-text-24 leading-none">
                {feature.eyebrow}
              </p>
              <h3 className="u-text-42 u-pb-20 lg:u-text-48 lg:u-pb-15 leading-none font-medium">
                {feature.name}
              </h3>
              <p className="u-text-24 u-leading-48 u-h-96 lg:u-text-16 lg:u-leading-24 lg:u-h-72 line-clamp-2 overflow-hidden lg:line-clamp-3">
                {feature.description}
              </p>
              <Link
                href={feature.href}
                className="u-mt-24 u-w-194 u-h-64 u-text-26 lg:u-w-124 lg:u-h-44 lg:u-text-16 before:bg-brand hover:border-brand relative isolate inline-flex items-center justify-center overflow-hidden rounded-full border border-white text-white transition-colors duration-300 before:absolute before:top-0 before:left-0 before:-z-10 before:h-full before:w-[150%] before:origin-bottom-left before:-translate-y-[3em] before:-rotate-45 before:transition-transform before:duration-300 before:ease-[cubic-bezier(0.2,1,0.3,1)] hover:before:translate-y-0 hover:before:rotate-0"
              >
                More
                <span className="sr-only"> about {feature.name}</span>
              </Link>
            </motion.div>
          </AnimatePresence>
        </Container>
      </div>

      {/* Frosted switcher bar */}
      <div className="u-h-160 u-pt-30 absolute inset-x-0 bottom-0 z-20 border-t border-white/50 bg-white/50 backdrop-blur-[20px]">
        <div className="u-w-680 lg:u-w-624 relative mx-auto">
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous collaboration"
            className="u-size-86 lg:u-size-60 text-ink hover:bg-brand absolute top-1/2 left-0 z-10 flex -translate-y-1/2 items-center justify-center rounded-full bg-white transition-colors duration-500 hover:text-white"
          >
            <ChevronLeft className="size-4" strokeWidth={2.5} />
          </button>

          <ul className="u-w-480 lg:u-w-460 mx-auto flex overflow-hidden">
            {ordered.map((item) => {
              const index = ipFeatures.indexOf(item);
              const isActive = index === active;
              return (
                <motion.li
                  key={item.id}
                  layout
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="flex basis-1/4 justify-center"
                >
                  <button
                    type="button"
                    onClick={() => setActive(index)}
                    aria-label={`Show ${item.name}`}
                    aria-pressed={isActive}
                    className={cn(
                      "u-size-100 relative flex items-center justify-center rounded-full bg-white",
                      "after:border-brand after:absolute after:inset-0 after:rounded-full after:border-2 after:transition-opacity after:duration-500",
                      isActive ? "after:opacity-100" : "after:opacity-0",
                    )}
                  >
                    <Image
                      src={item.logo}
                      alt=""
                      width={180}
                      height={100}
                      className="u-max-w-80 lg:u-max-w-90 h-auto max-h-[calc(50*var(--u))] w-auto object-contain"
                    />
                  </button>
                </motion.li>
              );
            })}
          </ul>

          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next collaboration"
            className="u-size-86 lg:u-size-60 text-ink hover:bg-brand absolute top-1/2 right-0 z-10 flex -translate-y-1/2 items-center justify-center rounded-full bg-white transition-colors duration-500 hover:text-white"
          >
            <ChevronRight className="size-4" strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </section>
  );
}
