"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Dialog } from "@base-ui/react/dialog";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "motion/react";
import { ChevronDown, Menu, Search, X } from "lucide-react";

import { SmartLink } from "@/components/shared/smart-link";
import { lines } from "@/data/home";
import { brand, headerCta, mainNav } from "@/data/site";
import type { NavItem } from "@/data/types";
import { cn } from "@/lib/utils";

/** Floating pill header: shrinks and firms up once you scroll. */
export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 24));

  const cancelClose = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  }, []);
  const scheduleClose = useCallback(() => {
    cancelClose();
    closeTimer.current = setTimeout(() => setOpenMenu(null), 160);
  }, [cancelClose]);
  useEffect(() => cancelClose, [cancelClose]);

  const openFor = (item: NavItem) => {
    cancelClose();
    setOpenMenu(item.children?.length ? item.label : null);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-5 md:pt-5">
      <div
        className={cn(
          "mx-auto flex max-w-[1180px] items-center justify-between gap-3 rounded-full border pr-2 pl-5 transition-all duration-500 md:pl-7",
          scrolled
            ? "h-14 border-transparent bg-white/90 shadow-[0_12px_32px_-14px_rgba(30,24,56,0.35)] backdrop-blur-md"
            : "border-ink/10 h-16 bg-white/60 backdrop-blur-sm",
        )}
        onKeyDown={(e) => e.key === "Escape" && setOpenMenu(null)}
      >
        <a
          href="#top"
          aria-label={`${brand.name} home`}
          className="font-display text-cobalt text-[1.75rem] leading-none"
        >
          {brand.wordmark}
        </a>

        {/* Desktop navigation */}
        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1" onMouseLeave={scheduleClose}>
            {mainNav.map((item) => (
              <li
                key={item.label}
                className="relative"
                onMouseEnter={() => openFor(item)}
                onBlur={(e) => {
                  // Close when keyboard focus leaves this item and its dropdown.
                  if (!e.currentTarget.contains(e.relatedTarget as Node))
                    setOpenMenu((open) => (open === item.label ? null : open));
                }}
              >
                <SmartLink
                  link={item}
                  onFocus={() => openFor(item)}
                  aria-expanded={
                    item.children ? openMenu === item.label : undefined
                  }
                  className={cn(
                    "hover:bg-lilac flex items-center gap-1 rounded-full px-4 py-2 font-medium transition-colors",
                    openMenu === item.label && "bg-lilac",
                  )}
                >
                  {item.label}
                  {item.children ? (
                    <ChevronDown
                      aria-hidden
                      className={cn(
                        "size-4 transition-transform duration-300",
                        openMenu === item.label && "rotate-180",
                      )}
                    />
                  ) : null}
                </SmartLink>

                <AnimatePresence>
                  {item.children && openMenu === item.label ? (
                    <motion.ul
                      initial={{ opacity: 0, y: -6, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -6, scale: 0.97 }}
                      transition={{ duration: 0.18 }}
                      onMouseEnter={cancelClose}
                      className="absolute top-full left-0 mt-3 min-w-56 origin-top-left rounded-3xl bg-white p-2 shadow-[0_20px_40px_-16px_rgba(30,24,56,0.35)]"
                    >
                      {item.children.map((child) => (
                        <li key={child.label}>
                          <SmartLink
                            link={child}
                            onClick={() => setOpenMenu(null)}
                            className="hover:bg-lilac block rounded-2xl px-4 py-3 font-medium transition-colors"
                          >
                            {child.label}
                          </SmartLink>
                        </li>
                      ))}
                    </motion.ul>
                  ) : null}
                </AnimatePresence>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => setSearchOpen(true)}
            aria-label="Search"
            className="hover:bg-lilac flex size-11 items-center justify-center rounded-full transition-colors"
          >
            <Search className="size-5" strokeWidth={2.25} />
          </button>
          <SmartLink
            link={headerCta}
            className="bg-cobalt hover:bg-cobalt-deep hidden h-11 items-center rounded-full px-5 font-semibold text-white transition-colors sm:flex"
          >
            {headerCta.label}
          </SmartLink>
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            className="bg-ink flex size-11 items-center justify-center rounded-full text-white lg:hidden"
          >
            <Menu className="size-5" strokeWidth={2.25} />
          </button>
        </div>
      </div>

      <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
      <MobileMenu open={mobileOpen} onOpenChange={setMobileOpen} />
    </header>
  );
}

function SearchDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Backdrop className="bg-ink/50 fixed inset-0 z-[60] backdrop-blur-sm transition-opacity duration-300 data-[ending-style]:opacity-0 data-[starting-style]:opacity-0" />
        <Dialog.Popup className="fixed inset-x-3 top-20 z-[61] mx-auto max-w-2xl rounded-[2rem] bg-white p-3 shadow-2xl transition-all duration-300 outline-none data-[ending-style]:-translate-y-3 data-[ending-style]:opacity-0 data-[starting-style]:-translate-y-3 data-[starting-style]:opacity-0 md:top-28">
          <Dialog.Title className="sr-only">Search MINILA</Dialog.Title>
          <form
            role="search"
            action="#shop"
            onSubmit={() => onOpenChange(false)}
            className="bg-paper flex items-center gap-2 rounded-full pl-5"
          >
            <Search aria-hidden className="text-ink/50 size-5 shrink-0" />
            <input
              type="search"
              name="q"
              autoFocus
              placeholder="Search plush, pens, bottles…"
              aria-label="Search products"
              className="placeholder:text-ink/45 h-14 w-full bg-transparent text-lg outline-none"
            />
            <Dialog.Close
              aria-label="Close search"
              className="hover:bg-lilac mr-1.5 flex size-11 shrink-0 items-center justify-center rounded-full transition-colors"
            >
              <X className="size-5" />
            </Dialog.Close>
          </form>
          <p className="text-ink/60 mt-4 px-3 text-sm">Popular right now</p>
          <ul className="flex flex-wrap gap-2 p-3">
            {lines.map((line) => (
              <li key={line.id}>
                <SmartLink
                  link={{
                    label: line.name,
                    href: "#shop",
                    select: { section: "shop", id: line.shelfId },
                  }}
                  onClick={() => onOpenChange(false)}
                  className="border-ink/15 hover:border-cobalt hover:text-cobalt block rounded-full border px-4 py-2 font-medium transition-colors"
                >
                  {line.name}
                </SmartLink>
              </li>
            ))}
          </ul>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

function MobileMenu({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  // Close the menu if the window grows to desktop size.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 64rem)");
    const onChange = () => mq.matches && onOpenChange(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [onOpenChange]);

  const close = () => onOpenChange(false);
  const items: NavItem[] = [...mainNav, headerCta];

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Popup className="bg-cobalt fixed inset-0 z-[70] flex flex-col overflow-y-auto px-5 pt-4 pb-10 text-white transition-[clip-path] duration-500 ease-[cubic-bezier(0.7,0,0.2,1)] outline-none [clip-path:circle(150%_at_calc(100%-2.5rem)_2.5rem)] data-[ending-style]:[clip-path:circle(0%_at_calc(100%-2.5rem)_2.5rem)] data-[starting-style]:[clip-path:circle(0%_at_calc(100%-2.5rem)_2.5rem)]">
          <Dialog.Title className="sr-only">Menu</Dialog.Title>
          <div className="flex h-14 items-center justify-between pl-2">
            <a
              href="#top"
              onClick={close}
              className="font-display text-[1.75rem] leading-none"
            >
              {brand.wordmark}
            </a>
            <Dialog.Close
              aria-label="Close menu"
              className="text-cobalt flex size-11 items-center justify-center rounded-full bg-white"
            >
              <X className="size-5" strokeWidth={2.5} />
            </Dialog.Close>
          </div>

          <nav aria-label="Mobile" className="mt-10 flex-1">
            <ul className="space-y-6">
              {items.map((item, i) => (
                <motion.li
                  key={item.label}
                  initial={{ opacity: 0, y: 24 }}
                  animate={open ? { opacity: 1, y: 0 } : undefined}
                  transition={{ delay: 0.15 + i * 0.06, duration: 0.4 }}
                >
                  <SmartLink
                    link={item}
                    onClick={close}
                    className="font-display text-5xl leading-none"
                  >
                    {item.label}
                  </SmartLink>
                  {item.children ? (
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {item.children.map((child) => (
                        <li key={child.label}>
                          <SmartLink
                            link={child}
                            onClick={close}
                            className="block rounded-full bg-white/15 px-4 py-2 font-medium"
                          >
                            {child.label}
                          </SmartLink>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </motion.li>
              ))}
            </ul>
          </nav>

          <p className="mt-10 max-w-[30ch] pl-1 text-white/70">
            {brand.tagline}
          </p>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
