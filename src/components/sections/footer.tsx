import { Mail } from "lucide-react";

import { Container } from "@/components/shared/container";
import { SmartLink } from "@/components/shared/smart-link";
import { brand, footer } from "@/data/site";

/** Cobalt footer: franchise enquiry, link columns, then a giant wordmark. */
export function Footer() {
  return (
    <footer className="px-3 pb-3 md:px-5 md:pb-5">
      <div className="bg-cobalt overflow-hidden rounded-[2.5rem] text-white">
        <Container className="pt-16 md:pt-24">
          <div className="grid gap-12 lg:grid-cols-12">
            <div id="franchise" className="lg:col-span-6">
              <h2 className="font-display max-w-[16ch] text-[clamp(2.25rem,4.5vw,3.75rem)] leading-[0.95]">
                {footer.franchise.heading}
              </h2>
              <p className="mt-6 max-w-[46ch] text-lg leading-relaxed text-white/80">
                {footer.franchise.text}
              </p>
              <a
                href={`mailto:${footer.franchise.email}`}
                className="bg-butter text-ink mt-7 inline-flex h-12 items-center gap-2 rounded-full px-6 font-semibold transition-colors hover:bg-white"
              >
                <Mail aria-hidden className="size-5" />
                {footer.franchise.email}
              </a>
            </div>

            <nav
              aria-label="Footer"
              className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-6"
            >
              {footer.columns.map((column) => (
                <div key={column.heading}>
                  <h3 className="font-semibold text-white/60">
                    {column.heading}
                  </h3>
                  <ul className="mt-4 space-y-3">
                    {column.links.map((link) => (
                      <li key={link.label}>
                        <SmartLink
                          link={link}
                          className="text-lg font-medium underline-offset-4 hover:underline"
                        >
                          {link.label}
                        </SmartLink>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>
          </div>

          <div className="mt-16 flex flex-col gap-3 border-t-2 border-white/20 pt-6 text-sm text-white/70 md:flex-row md:items-center md:justify-between">
            <p className="max-w-[60ch]">
              © 2026 {brand.name}. {footer.legal}
            </p>
            <div className="flex gap-5">
              <SmartLink
                link={footer.credits}
                className="font-semibold text-white underline-offset-4 hover:underline"
              >
                {footer.credits.label}
              </SmartLink>
              <SmartLink
                link={footer.maker}
                className="font-semibold text-white underline-offset-4 hover:underline"
              >
                {footer.maker.label}
              </SmartLink>
            </div>
          </div>
        </Container>

        {/* Giant wordmark, cropped by the bottom edge. */}
        <svg
          aria-hidden
          viewBox="0 0 1000 250"
          className="text-butter mt-10 block h-auto w-full"
        >
          <text
            x={500}
            y={300}
            textAnchor="middle"
            fontSize={380}
            textLength={980}
            lengthAdjust="spacingAndGlyphs"
            fill="currentColor"
            style={{ fontFamily: "var(--font-bagel)" }}
          >
            {brand.wordmark}
          </text>
        </svg>
      </div>
    </footer>
  );
}
