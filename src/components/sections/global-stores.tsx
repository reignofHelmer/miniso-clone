"use client";

import { useEffect, useId, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { MapPin } from "lucide-react";

import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { storeRegions } from "@/data/home";
import { onSelect } from "@/lib/select-event";
import { cn } from "@/lib/utils";

/**
 * A city index: pick a region, then hover, tap or tab through the cities
 * and the photo on the right swaps to that city.
 */
export function GlobalStores() {
  const [regionIndex, setRegionIndex] = useState(0);
  const [cityIndex, setCityIndex] = useState(0);
  const baseId = useId();

  const region = storeRegions[regionIndex];
  const store = region.stores[cityIndex];

  const chooseRegion = (index: number) => {
    setRegionIndex(index);
    setCityIndex(0);
  };

  // The header's Stores menu can open a region directly.
  useEffect(
    () =>
      onSelect("stores", (id) => {
        const index = storeRegions.findIndex((r) => r.id === id);
        if (index >= 0) {
          setRegionIndex(index);
          setCityIndex(0);
        }
      }),
    [],
  );

  const onTabKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    const step = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
    if (!step) return;
    e.preventDefault();
    const next =
      (regionIndex + step + storeRegions.length) % storeRegions.length;
    chooseRegion(next);
    document.getElementById(`${baseId}-tab-${next}`)?.focus();
  };

  return (
    <section
      id="stores"
      aria-labelledby={`${baseId}-title`}
      className="px-3 md:px-5"
    >
      <div className="bg-ink rounded-[2.5rem] py-16 text-white md:py-24">
        <Container className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <SectionHeading
              id={`${baseId}-title`}
              inverted
              title="Find us in 64 markets"
              intro="From Seoul side streets to Gran Vía. Choose a region, then a city."
            />

            <div
              role="tablist"
              aria-label="Regions"
              className="mt-8 flex flex-wrap gap-2"
            >
              {storeRegions.map((r, i) => (
                <button
                  key={r.id}
                  id={`${baseId}-tab-${i}`}
                  type="button"
                  role="tab"
                  aria-selected={i === regionIndex}
                  aria-controls={`${baseId}-panel`}
                  tabIndex={i === regionIndex ? 0 : -1}
                  onClick={() => chooseRegion(i)}
                  onKeyDown={onTabKeyDown}
                  className={cn(
                    "h-11 rounded-full px-5 font-semibold transition-colors",
                    i === regionIndex
                      ? "bg-butter text-ink"
                      : "bg-white/10 text-white hover:bg-white/20",
                  )}
                >
                  {r.name}
                </button>
              ))}
            </div>

            <ul
              id={`${baseId}-panel`}
              role="tabpanel"
              aria-labelledby={`${baseId}-tab-${regionIndex}`}
              className="mt-8 flex flex-wrap gap-2 lg:mt-10 lg:block lg:space-y-1"
            >
              {region.stores.map((s, i) => {
                const isActive = i === cityIndex;
                return (
                  <li key={s.id}>
                    <button
                      type="button"
                      onClick={() => setCityIndex(i)}
                      onMouseEnter={() => setCityIndex(i)}
                      onFocus={() => setCityIndex(i)}
                      aria-pressed={isActive}
                      className={cn(
                        "group flex items-baseline gap-3 rounded-full px-4 py-2 text-left font-semibold transition-colors",
                        "lg:font-display lg:rounded-none lg:px-0 lg:py-1 lg:text-[clamp(2rem,3.4vw,3.25rem)] lg:leading-tight lg:font-normal",
                        isActive
                          ? "text-ink bg-white lg:bg-transparent lg:text-white"
                          : "bg-white/10 text-white/80 lg:bg-transparent lg:text-white/35 lg:hover:text-white/70",
                      )}
                    >
                      {s.city}
                      <span
                        className={cn(
                          "hidden font-sans text-base font-medium transition-opacity lg:inline",
                          isActive ? "text-bubblegum opacity-100" : "opacity-0",
                        )}
                      >
                        {s.country}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="lg:col-span-7">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-white/5 lg:sticky lg:top-28">
              <AnimatePresence initial={false}>
                <motion.div
                  key={store.photo.src}
                  initial={{ opacity: 0, scale: 1.06 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="absolute inset-0"
                >
                  <Image
                    src={store.photo.src}
                    alt={store.photo.alt}
                    fill
                    sizes="(min-width: 1024px) 680px, 100vw"
                    className="object-cover"
                  />
                </motion.div>
              </AnimatePresence>
              <p
                aria-live="polite"
                className="text-ink absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-white py-2 pr-5 pl-3 font-semibold shadow-lg md:bottom-6 md:left-6"
              >
                <MapPin aria-hidden className="text-cobalt size-5" />
                MINILA {store.city}, {store.country}
              </p>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
