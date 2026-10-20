import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/shared/container";
import { photos } from "@/data/photos";
import { brand } from "@/data/site";

export const metadata: Metadata = {
  title: "Photo credits | MINILA",
  description: "The photographers whose Unsplash photos appear on this site.",
};

export default function CreditsPage() {
  const list = Object.values(photos);

  return (
    <main className="flex-1 py-10 md:py-16">
      <Container>
        <Link
          href="/"
          className="font-display text-cobalt text-[1.75rem] leading-none"
        >
          {brand.wordmark}
        </Link>

        <h1 className="font-display mt-12 text-[clamp(2.5rem,6vw,4.5rem)] leading-[0.95]">
          Photo credits
        </h1>
        <p className="text-ink/70 mt-4 max-w-[60ch] text-lg leading-relaxed">
          Every photo on this site comes from Unsplash and is free to use under
          the{" "}
          <a
            href="https://unsplash.com/license"
            className="text-cobalt font-semibold underline underline-offset-4"
          >
            Unsplash License
          </a>
          . Thank you to the {list.length} photographers below. {brand.name}{" "}
          itself is a fictional brand made for a practice project.
        </p>

        <ul className="mt-12 grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((photo) => (
            <li key={photo.src} className="flex gap-4">
              <div className="bg-lilac relative size-20 shrink-0 overflow-hidden rounded-2xl">
                <Image
                  src={photo.src}
                  alt=""
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="leading-snug">{photo.alt}</p>
                <a
                  href={photo.credit.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink/60 hover:text-cobalt mt-1 inline-block text-sm underline underline-offset-4"
                >
                  Photo by {photo.credit.name} on Unsplash
                </a>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </main>
  );
}
