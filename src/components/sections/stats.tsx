"use client";

import { useEffect, useRef } from "react";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "motion/react";

import { Container } from "@/components/shared/container";
import { stats } from "@/data/home";
import type { Stat } from "@/data/types";

/** Cobalt band of headline numbers that count up when they scroll into view. */
export function Stats() {
  return (
    <section aria-labelledby="stats-title" className="px-3 md:px-5">
      <div className="bg-cobalt rounded-[2.5rem] py-16 text-white md:py-24">
        <Container>
          <h2
            id="stats-title"
            className="font-display max-w-[18ch] text-[clamp(2rem,4.5vw,3.5rem)] leading-[0.95]"
          >
            A little joy, almost everywhere
          </h2>
          <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 md:mt-16 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.id} className="border-t-2 border-white/25 pt-5">
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="font-display text-butter flex items-baseline gap-2 leading-none">
                    <span className="text-[clamp(3rem,7vw,5.5rem)]">
                      <Counter stat={stat} />
                    </span>
                    {stat.plus ? (
                      <span aria-hidden className="text-bubblegum text-4xl">
                        +
                      </span>
                    ) : null}
                  </span>
                  <span className="mt-3 block text-lg text-white/80">
                    {stat.unit ? `${stat.unit} ` : ""}
                    {stat.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </div>
    </section>
  );
}

function Counter({ stat }: { stat: Stat }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -15% 0px" });
  const reduceMotion = useReducedMotion();
  // Starts at the real value so it reads correctly before any animation.
  const count = useMotionValue(stat.value);
  const text = useTransform(count, (v) =>
    Math.round(v).toLocaleString("en-US"),
  );

  useEffect(() => {
    if (!inView || reduceMotion) return;
    count.jump(0);
    const controls = animate(count, stat.value, {
      duration: 1.8,
      ease: [0.16, 1, 0.3, 1],
    });
    return () => controls.stop();
  }, [inView, reduceMotion, count, stat.value]);

  return (
    <>
      <motion.span ref={ref} aria-hidden>
        {text}
      </motion.span>
      <span className="sr-only">
        {stat.value.toLocaleString("en-US")}
        {stat.plus ? " plus" : ""}
      </span>
    </>
  );
}
