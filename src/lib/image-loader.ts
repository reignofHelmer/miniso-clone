"use client";

import { unsplash } from "./unsplash";

type LoaderArgs = { src: string; width: number; quality?: number };

/** next/image loader: Unsplash resizes photos itself, others pass through. */
export default function imageLoader({ src, width, quality }: LoaderArgs) {
  return unsplash(src, width, quality ?? 75);
}
