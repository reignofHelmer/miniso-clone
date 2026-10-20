"use client";

import { useId, useRef, useState } from "react";
import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";

import { Container } from "@/components/shared/container";
import { heroPhotos } from "@/data/home";
import { brand } from "@/data/site";
import { cn } from "@/lib/utils";
import { unsplash } from "@/lib/unsplash";

const SLIDE_MS = 6000;

// Same text settings for the mask and the outline drawn over it.
const wordmarkProps = {
  x: 500,
  y: 296,
  textAnchor: "middle",
  fontSize: 380,
  textLength: 992,
  lengthAdjust: "spacingAndGlyphs",
  style: { fontFamily: "var(--font-bagel)" },
  initial: { y: 140, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { type: "spring", stiffness: 120, damping: 16, delay: 0.1 },
} as const;
// SVG canvas for the wordmark. The text is stretched to exactly fill WIDTH.
const WIDTH = 1000;
const HEIGHT = 318;

/**
 * The signature moment: a giant "minila" whose letters are windows onto
 * rotating shop photos. The word rises in on load, the photos drift as you
 * scroll, and the thumbnails below switch photos (or run on a timer).
 */
export function Hero() {
  const [active, setActive] = useState(0);
  const reduceMotion = useReducedMotion();
  const maskId = useId();
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const drift = useTransform(scrollYProgress, [0, 1], [0, 90]);

  const next = () => setActive((i) => (i + 1) % heroPhotos.length);
  const current = heroPhotos[active];

  return (
    <section
      ref={ref}
      id="top"
      aria-labelledby="hero-title"
      className="group/hero relative overflow-hidden pt-28 pb-14 md:pt-36 md:pb-20"
    >
      <Container>
        <h1 id="hero-title" className="sr-only">
          {brand.name}: {brand.tagline}
        </h1>

        <svg
          viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
          className="block h-auto w-full overflow-visible"
          role="img"
          aria-label={`${brand.name}, filled with a photo: ${current.alt}`}
        >
          <defs>
            <mask id={maskId} maskUnits="userSpaceOnUse">
              <rect width={WIDTH} height={HEIGHT} fill="black" />
              <motion.text {...wordmarkProps} fill="white">
                {brand.wordmark}
              </motion.text>
            </mask>
          </defs>

          <g mask={`url(#${maskId})`}>
            {/* Shows while the first photo loads. */}
            <rect width={WIDTH} height={HEIGHT} fill="var(--cobalt)" />
            <motion.g style={{ y: drift }}>
              <AnimatePresence initial={false}>
                <motion.image
                  key={current.src}
                  href={unsplash(current.src, 2000, 72)}
                  x={0}
                  y={-110}
                  width={WIDTH}
                  height={HEIGHT + 220}
                  preserveAspectRatio="xMidYMid slice"
                  initial={{ opacity: 0, scale: 1.08 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    opacity: { duration: 0.9 },
                    scale: { duration: SLIDE_MS / 1000 + 1, ease: "linear" },
                  }}
                  style={{
                    transformOrigin: "50% 50%",
                    transformBox: "fill-box",
                  }}
                />
              </AnimatePresence>
            </motion.g>
          </g>
          {/* Faint outline keeps the letters readable over pale photos. */}
          <motion.text
            {...wordmarkProps}
            aria-hidden
            fill="none"
            stroke="var(--ink)"
            strokeOpacity={0.14}
            strokeWidth={2}
          >
            {brand.wordmark}
          </motion.text>
        </svg>

        <div className="mt-8 flex flex-col gap-8 md:mt-10 md:flex-row md:items-end md:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.6 }}
            className="max-w-md"
          >
            <p className="text-ink/80 text-xl leading-snug md:text-2xl">
              Cute, useful little things for desks, bags and bedrooms. Most of
              it costs less than lunch.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#lines"
                className="bg-cobalt hover:bg-cobalt-deep flex h-12 items-center rounded-full px-6 font-semibold text-white transition-colors"
              >
                Explore our lines
              </a>
              <a
                href="#stores"
                className="border-ink hover:bg-ink flex h-12 items-center rounded-full border-2 px-6 font-semibold transition-colors hover:text-white"
              >
                Find a store
              </a>
            </div>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            aria-label="Choose the photo inside the logo"
            className="flex gap-2.5"
          >
            {heroPhotos.map((photo, i) => {
              const isActive = i === active;
              return (
                <li key={photo.src} className="w-14 sm:w-16">
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    aria-label={`Photo ${i + 1}: ${photo.alt}`}
                    aria-pressed={isActive}
                    className={cn(
                      "relative block aspect-square w-full overflow-hidden rounded-2xl transition duration-300",
                      isActive
                        ? "ring-cobalt ring-offset-paper ring-3 ring-offset-2"
                        : "opacity-60 hover:opacity-100",
                    )}
                  >
                    <Image
                      src={photo.src}
                      alt=""
                      fill
                      sizes="64px"
                      className="object-cover"
                    />
                  </button>
                  <span
                    aria-hidden
                    className="bg-ink/10 mt-2 block h-1 overflow-hidden rounded-full"
                  >
                    {isActive && !reduceMotion ? (
                      <span
                        key={active}
                        onAnimationEnd={next}
                        className="bg-cobalt block h-full origin-left rounded-full group-hover/hero:[animation-play-state:paused]"
                        style={{
                          animation: `fill-bar ${SLIDE_MS}ms linear forwards`,
                        }}
                      />
                    ) : isActive ? (
                      <span className="bg-cobalt block h-full rounded-full" />
                    ) : null}
                  </span>
                </li>
              );
            })}
          </motion.ul>
        </div>
      </Container>
    </section>
  );
}
