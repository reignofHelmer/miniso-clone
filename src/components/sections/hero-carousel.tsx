"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { banners } from "@/data/home";
import { cn } from "@/lib/utils";

/** Full-width campaign banners that auto-rotate every 8 seconds. */
export function HeroCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  // Created once so the carousel isn't re-initialised on every render.
  const [autoplay] = useState(() =>
    Autoplay({ delay: 8000, stopOnInteraction: false }),
  );

  const onSelect = useCallback((embla: NonNullable<CarouselApi>) => {
    setCurrent(embla.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!api) return;
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api, onSelect]);

  return (
    <section aria-label="Featured collections" className="relative">
      <Carousel
        setApi={setApi}
        opts={{ loop: true, duration: 40 }}
        plugins={[autoplay]}
      >
        <CarouselContent className="ml-0">
          {banners.map((banner, i) => (
            <CarouselItem
              key={banner.id}
              aria-label={`${i + 1} of ${banners.length}`}
              className="pl-0"
            >
              <div className="relative aspect-[1920/820] w-full lg:aspect-auto lg:h-[calc(100svh-100px)]">
                <Image
                  src={banner.image}
                  alt={banner.alt}
                  fill
                  sizes="100vw"
                  priority={i === 0}
                  className="object-cover"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="u-bottom-30 absolute inset-x-0 z-10 flex justify-center lg:bottom-[45px]">
        {banners.map((banner, i) => (
          <button
            key={banner.id}
            type="button"
            onClick={() => api?.scrollTo(i)}
            aria-label={`Show banner ${i + 1}: ${banner.alt}`}
            aria-current={current === i ? "true" : undefined}
            className="group flex size-6 items-center justify-center lg:size-[30px]"
          >
            <span
              className={cn(
                "size-2.5 rounded-full transition-colors duration-300",
                current === i ? "bg-brand" : "bg-white group-hover:bg-white/80",
              )}
            />
          </button>
        ))}
      </div>
    </section>
  );
}
