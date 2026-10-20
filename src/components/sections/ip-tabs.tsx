"use client";

import { useId, useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  useCarousel,
} from "@/components/ui/carousel";
import { ipCollections } from "@/data/home";
import { brand } from "@/data/site";
import type { Product } from "@/data/types";
import { cn } from "@/lib/utils";

/**
 * "IP ✱ Collaboration": tabs on the left (ONE PIECE / Stitch / CHiiKAWA),
 * a product carousel on the right that bleeds off the edge of the page.
 * Same tabs + carousel pattern as the Global Stores section.
 */
export function IpTabs() {
  const [active, setActive] = useState(0);
  const baseId = useId();
  const collection = ipCollections[active];

  const onTabKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    const step =
      e.key === "ArrowRight" || e.key === "ArrowDown"
        ? 1
        : e.key === "ArrowLeft" || e.key === "ArrowUp"
          ? -1
          : 0;
    if (!step) return;
    e.preventDefault();
    const next = (active + step + ipCollections.length) % ipCollections.length;
    setActive(next);
    document.getElementById(`${baseId}-tab-${next}`)?.focus();
  };

  return (
    <section
      id="ip-products"
      aria-labelledby={`${baseId}-heading`}
      className="u-pt-110 u-pb-90 bg-mist relative overflow-hidden"
    >
      {/* Faint pattern bottom-left (desktop only) */}
      <div
        aria-hidden
        className="u-bottom-50 u-w-448 pointer-events-none absolute left-0 hidden aspect-[448/438] lg:block"
      >
        <Image src={brand.decor} alt="" fill sizes="448px" />
      </div>

      <Container>
        {/* Left column: heading + tabs */}
        <div className="lg:u-w-380 relative z-10 lg:absolute lg:top-0 lg:left-0">
          <div id={`${baseId}-heading`}>
            <SectionHeading
              lead="IP"
              trail="Collaboration"
              align="left"
              className="u-text-38"
            />
          </div>

          <div
            role="tablist"
            aria-label="IP collections"
            aria-orientation="vertical"
            className="u-mt-60 lg:u-h-370 flex justify-between lg:block"
          >
            {ipCollections.map((item, i) => {
              const selected = i === active;
              return (
                <button
                  key={item.id}
                  id={`${baseId}-tab-${i}`}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  aria-controls={`${baseId}-panel`}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActive(i)}
                  onKeyDown={onTabKeyDown}
                  className="u-text-28 lg:u-text-18 lg:u-mb-24 relative flex items-start leading-none lg:last:mb-0"
                >
                  <span
                    aria-hidden
                    className={cn(
                      "u-h-28 absolute top-0 left-0 overflow-hidden transition-all duration-500 lg:h-[18px]",
                      selected ? "u-w-28 lg:w-[18px]" : "w-0",
                    )}
                  >
                    <Image
                      src={brand.star}
                      alt=""
                      width={48}
                      height={48}
                      className="u-size-28 max-w-none lg:size-[18px]"
                    />
                  </span>
                  <span
                    className={cn(
                      "u-h-42 lg:u-h-24 relative inline-block transition-all duration-500",
                      "after:bg-brand-alt after:absolute after:bottom-0 after:left-0 after:h-[2px] after:transition-all after:duration-500",
                      selected
                        ? "u-pl-40 text-brand-alt after:w-full lg:pl-6"
                        : "hover:text-brand-alt text-black after:w-0",
                    )}
                  >
                    {item.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right column: product carousel */}
        <div className="u-pt-70 lg:u-pl-380 lg:pt-0">
          <motion.div
            key={collection.id}
            id={`${baseId}-panel`}
            role="tabpanel"
            aria-labelledby={`${baseId}-tab-${active}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Carousel
              opts={{ loop: true, align: "start" }}
              aria-label={`${collection.name} products`}
              className="lg:u-w-1520"
            >
              <CarouselContent className="ml-0">
                {collection.products.map((product) => (
                  <CarouselItem
                    key={product.id}
                    className="lg:u-pr-60 basis-1/2 pr-[10px] pl-0 lg:basis-1/3"
                  >
                    <ProductCard product={product} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <Arrows />
            </Carousel>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group">
      <div className="relative aspect-[7/8] overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 30vw, 50vw"
          className="object-cover transition duration-1000 group-hover:scale-105 group-hover:opacity-70"
        />
      </div>
      <h3 className="u-mt-30 u-h-48 u-leading-48 u-text-30 lg:u-mt-25 lg:u-h-42 lg:u-leading-42 lg:u-text-24 truncate font-medium text-black">
        {product.name}
      </h3>
    </article>
  );
}

/**
 * Desktop: a pair of round buttons under the tabs.
 * Mobile: one button on each side of the carousel.
 */
function Arrows() {
  const { scrollPrev, scrollNext } = useCarousel();
  const base =
    "u-size-86 lg:u-size-60 z-10 flex items-center justify-center rounded-full border-2 border-hairline bg-white text-ink transition-colors duration-500 hover:border-brand hover:bg-brand hover:text-white";

  return (
    <div className="lg:u-top-480 lg:u-gap-20 lg:absolute lg:-left-[calc(380*var(--u))] lg:flex">
      <button
        type="button"
        onClick={scrollPrev}
        aria-label="Previous products"
        className={cn(
          base,
          "u-left-20 absolute top-[40%] -translate-y-1/2 lg:static lg:translate-y-0",
        )}
      >
        <ChevronLeft className="size-4" strokeWidth={2.5} />
      </button>
      <button
        type="button"
        onClick={scrollNext}
        aria-label="Next products"
        className={cn(
          base,
          "u-right-20 absolute top-[40%] -translate-y-1/2 lg:static lg:translate-y-0",
        )}
      >
        <ChevronRight className="size-4" strokeWidth={2.5} />
      </button>
    </div>
  );
}
