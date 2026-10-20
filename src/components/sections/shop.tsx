"use client";

import { useEffect, useId, useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  useCarousel,
  type CarouselApi,
} from "@/components/ui/carousel";
import { shelves } from "@/data/home";
import type { Product } from "@/data/types";
import { onSelect } from "@/lib/select-event";
import { cn } from "@/lib/utils";

/** Product rail with a tab per shelf. Other sections can open a tab via sendSelect. */
export function Shop() {
  const [active, setActive] = useState(0);
  const [api, setApi] = useState<CarouselApi>();
  const baseId = useId();
  const shelf = shelves[active];

  // "Shop this line" buttons elsewhere on the page switch the tab here.
  useEffect(
    () =>
      onSelect("shop", (id) => {
        const index = shelves.findIndex((s) => s.id === id);
        if (index >= 0) setActive(index);
      }),
    [],
  );

  // Start each shelf from its first product.
  useEffect(() => {
    api?.scrollTo(0, true);
  }, [api, active]);

  const onTabKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    const step = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
    if (!step) return;
    e.preventDefault();
    const next = (active + step + shelves.length) % shelves.length;
    setActive(next);
    document.getElementById(`${baseId}-tab-${next}`)?.focus();
  };

  return (
    <section
      id="shop"
      aria-labelledby={`${baseId}-title`}
      className="overflow-hidden bg-white py-20 md:py-28"
    >
      <Container>
        <Carousel
          setApi={setApi}
          opts={{ align: "start", containScroll: "trimSnaps" }}
          aria-label={`${shelf.name} products`}
        >
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              id={`${baseId}-title`}
              title="Shop by line"
              intro="A few favourites from each shelf. Swipe or use the arrows to see more."
            />
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div
                role="tablist"
                aria-label="Product lines"
                className="flex flex-wrap gap-2"
              >
                {shelves.map((s, i) => (
                  <button
                    key={s.id}
                    id={`${baseId}-tab-${i}`}
                    type="button"
                    role="tab"
                    aria-selected={i === active}
                    aria-controls={`${baseId}-panel`}
                    tabIndex={i === active ? 0 : -1}
                    onClick={() => setActive(i)}
                    onKeyDown={onTabKeyDown}
                    className={cn(
                      "h-11 rounded-full px-5 font-semibold transition-colors",
                      i === active
                        ? "bg-ink text-white"
                        : "bg-paper text-ink hover:bg-lilac",
                    )}
                  >
                    {s.name}
                  </button>
                ))}
              </div>
              <RailArrows />
            </div>
          </div>

          <motion.div
            key={shelf.id}
            id={`${baseId}-panel`}
            role="tabpanel"
            aria-labelledby={`${baseId}-tab-${active}`}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="mt-10 md:mt-14"
          >
            <CarouselContent className="-ml-4 overflow-visible">
              {shelf.products.map((product) => (
                <CarouselItem
                  key={product.id}
                  className="basis-[78%] pl-4 sm:basis-[46%] lg:basis-[31%]"
                >
                  <ProductCard product={product} shelfName={shelf.name} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </motion.div>
        </Carousel>
      </Container>
    </section>
  );
}

function ProductCard({
  product,
  shelfName,
}: {
  product: Product;
  shelfName: string;
}) {
  return (
    <article className="group">
      <div className="bg-lilac relative aspect-[4/5] overflow-hidden rounded-[1.75rem]">
        <Image
          src={product.photo.src}
          alt={product.photo.alt}
          fill
          sizes="(min-width: 1024px) 380px, (min-width: 640px) 45vw, 78vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
      </div>
      <h3 className="mt-4 text-xl font-semibold">{product.name}</h3>
      <p className="text-ink/60 mt-0.5">{shelfName}</p>
    </article>
  );
}

function RailArrows() {
  const { scrollPrev, scrollNext, canScrollPrev, canScrollNext } =
    useCarousel();
  const base =
    "flex size-12 items-center justify-center rounded-full border-2 border-ink transition-colors hover:bg-ink hover:text-white disabled:pointer-events-none disabled:opacity-25";
  return (
    <div className="flex gap-2">
      <button
        type="button"
        onClick={scrollPrev}
        disabled={!canScrollPrev}
        aria-label="Previous products"
        className={base}
      >
        <ArrowLeft className="size-5" strokeWidth={2.25} />
      </button>
      <button
        type="button"
        onClick={scrollNext}
        disabled={!canScrollNext}
        aria-label="Next products"
        className={base}
      >
        <ArrowRight className="size-5" strokeWidth={2.25} />
      </button>
    </div>
  );
}
