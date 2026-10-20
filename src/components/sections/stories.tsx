import Image from "next/image";

import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { stories } from "@/data/home";
import type { Story } from "@/data/types";
import { cn } from "@/lib/utils";

/** Three stories in a bento: one tall card, two stacked beside it. */
export function Stories() {
  return (
    <section
      id="stories"
      aria-labelledby="stories-title"
      className="py-20 md:py-28"
    >
      <Container>
        <SectionHeading
          id="stories-title"
          title="Fresh from the shop floor"
          intro="What's new at MINILA, what people are buying, and how to open a store of your own."
        />
        <ul className="mt-10 grid gap-3 md:mt-14 md:grid-cols-2 lg:h-[640px] lg:grid-cols-12 lg:grid-rows-2">
          {stories.map((story, i) => (
            <li
              key={story.id}
              className={cn(
                i === 0
                  ? "md:col-span-2 lg:col-span-7 lg:row-span-2"
                  : "lg:col-span-5",
              )}
            >
              <StoryCard story={story} large={i === 0} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

function StoryCard({ story, large }: { story: Story; large: boolean }) {
  return (
    <a
      href={story.href}
      className={cn(
        "group relative isolate flex h-full flex-col justify-end overflow-hidden rounded-[2rem] p-6 text-white md:p-8",
        large
          ? "aspect-[4/5] md:aspect-[16/10] lg:aspect-auto"
          : "aspect-[4/3] lg:aspect-auto",
      )}
    >
      <Image
        src={story.photo.src}
        alt={story.photo.alt}
        fill
        sizes={
          large
            ? "(min-width: 1024px) 720px, 100vw"
            : "(min-width: 1024px) 520px, (min-width: 768px) 50vw, 100vw"
        }
        className="-z-10 object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
      <div
        aria-hidden
        className="from-ink/85 via-ink/30 absolute inset-0 -z-10 bg-linear-to-t to-transparent"
      />
      <h3
        className={cn(
          "font-display leading-[0.95]",
          large
            ? "text-[clamp(2.25rem,4.5vw,3.75rem)]"
            : "text-3xl md:text-4xl",
        )}
      >
        {story.title}
      </h3>
      <p className="mt-3 max-w-[44ch] leading-relaxed text-white/85">
        {story.text}
      </p>
      <span className="text-ink group-hover:bg-butter mt-5 inline-flex w-fit items-center rounded-full bg-white px-5 py-2.5 font-semibold transition-colors">
        {story.cta}
      </span>
    </a>
  );
}
