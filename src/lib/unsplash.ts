/** Builds a resized Unsplash URL. Non-Unsplash sources are returned as is. */
export function unsplash(src: string, width: number, quality = 70) {
  if (!src.startsWith("https://images.unsplash.com/")) return src;
  const url = new URL(src);
  url.searchParams.set("w", String(width));
  url.searchParams.set("q", String(quality));
  url.searchParams.set("auto", "format");
  url.searchParams.set("fit", "crop");
  return url.toString();
}
