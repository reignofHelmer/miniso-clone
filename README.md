# MINILA

A homepage for **MINILA**, a fictional lifestyle brand for cute, useful little things.

It started as a clone of the MINISO brand site and became a reinterpretation: the same set of sections (hero, stats, product lines, product rail, global stores, stories, footer), with its own brand, layout, type and motion.

> **Unofficial practice project.** MINILA is made up. This project is not affiliated with, endorsed by or connected to MINISO or any other company. Product names, numbers and news on the page are invented.

Built by [ReignTek](https://reigntek.co) as a pair-programming exercise.

## Stack

- [Next.js 16](https://nextjs.org) (App Router) + TypeScript
- [Tailwind CSS 4](https://tailwindcss.com) + [shadcn/ui](https://ui.shadcn.com) on Base UI
- [Motion](https://motion.dev) for animation
- [Embla Carousel](https://www.embla-carousel.com) for the product rail
- [lucide-react](https://lucide.dev) icons
- Fonts: Bagel Fat One and Schibsted Grotesk from Google Fonts

## Run it

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Where things live

| Path                       | What's in it                                                                                            |
| -------------------------- | ------------------------------------------------------------------------------------------------------- |
| `src/app/page.tsx`         | The homepage: one line per section, top to bottom                                                       |
| `src/components/sections/` | One file per section                                                                                    |
| `src/components/shared/`   | Container, SectionHeading, SmartLink, MotionProvider                                                    |
| `src/data/`                | All copy, links and photos (`photos.ts` has every image and its credit)                                 |
| `src/app/globals.css`      | Colour tokens (`bg-paper`, `text-ink`, `bg-cobalt`, `bg-bubblegum`, `bg-butter`, `bg-mint`, `bg-lilac`) |
| `src/app/credits/`         | The photo credits page                                                                                  |

To switch a tab in another section from a link, give the link a `select` (see `src/lib/select-event.ts`). The nav uses this to open a store region or product line.

## Photos

Every photo is from [Unsplash](https://unsplash.com) and free to use under the [Unsplash License](https://unsplash.com/license). They are loaded from Unsplash's servers (`src/lib/image-loader.ts` asks for the right size), so no image files are stored in this repo. The photographers are credited on `/credits`.

Animations respect the "reduce motion" setting on your device.
