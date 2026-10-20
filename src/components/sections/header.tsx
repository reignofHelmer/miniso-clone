"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dialog } from "@base-ui/react/dialog";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown, Menu, Search, X } from "lucide-react";

import { Container } from "@/components/shared/container";
import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet";
import { brand, languages, mainNav } from "@/data/site";
import type { NavItem, NavLink } from "@/data/types";
import { cn } from "@/lib/utils";

/** Opens external links in a new tab, internal ones with next/link. */
function SmartLink({
  link,
  className,
  children,
  ...props
}: {
  link: NavLink;
  className?: string;
  children: React.ReactNode;
} & Omit<React.ComponentProps<"a">, "href">) {
  if (link.external) {
    return (
      <a
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        {...props}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={link.href} className={className} {...props}>
      {children}
    </Link>
  );
}

export function Header() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const cancelClose = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  }, []);

  const scheduleClose = useCallback(() => {
    cancelClose();
    closeTimer.current = setTimeout(() => setOpenMenu(null), 150);
  }, [cancelClose]);

  const openFor = (item: NavItem) => {
    cancelClose();
    setOpenMenu(item.children?.length ? item.label : null);
  };

  useEffect(() => cancelClose, [cancelClose]);

  const activeItem = mainNav.find((item) => item.label === openMenu);
  const isActive = (item: NavItem) => !item.external && item.href === pathname;

  return (
    <header>
      {/* Reserves space under the fixed bar. */}
      <div aria-hidden className="u-h-120 lg:h-[100px]" />

      <div
        className="fixed inset-x-0 top-0 z-50 bg-white shadow-[0_0_14px_#ccc]"
        onMouseLeave={scheduleClose}
        onMouseEnter={cancelClose}
        onKeyDown={(e) => e.key === "Escape" && setOpenMenu(null)}
      >
        <Container className="u-h-120 lg:h-[100px]">
          <Link
            href="/"
            aria-label={`${brand.name} home`}
            className="u-left-30 u-top-20 absolute z-10 lg:top-5 lg:left-0"
          >
            <Image
              src={brand.logo}
              alt={brand.name}
              width={50}
              height={60}
              priority
              className="u-w-70 h-auto lg:w-[50px]"
            />
          </Link>

          {/* Desktop navigation */}
          <nav
            aria-label="Main"
            className="lg:u-right-190 absolute top-0 hidden lg:block"
          >
            <ul className="flex">
              {mainNav.map((item) => (
                <li key={item.label} onMouseEnter={() => openFor(item)}>
                  <SmartLink
                    link={item}
                    onFocus={() => openFor(item)}
                    aria-haspopup={item.children ? "true" : undefined}
                    aria-expanded={
                      item.children ? openMenu === item.label : undefined
                    }
                    aria-current={isActive(item) ? "page" : undefined}
                    className={cn(
                      "u-px-42 text-ink hover:text-brand block h-[100px] text-base leading-[100px] font-medium transition-colors duration-500",
                      (isActive(item) || openMenu === item.label) &&
                        "text-brand",
                    )}
                  >
                    {item.label}
                  </SmartLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Search + language */}
          <div className="u-right-140 u-top-20 absolute z-10 flex items-center lg:top-[30px] lg:right-0">
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              aria-label="Search"
              className="u-size-80 u-mr-10 text-ink hover:text-brand flex items-center justify-center transition-colors lg:mr-5 lg:size-10"
            >
              <Search className="u-size-36 lg:size-[22px]" strokeWidth={2} />
            </button>
            {languages.map((lang) =>
              lang.current ? (
                <span
                  key={lang.label}
                  aria-current="true"
                  className="u-ml-30 u-text-28 u-h-80 font-mont flex items-center text-[#ccc] uppercase lg:ml-5 lg:h-10 lg:text-base"
                >
                  {lang.label}
                </span>
              ) : (
                <a
                  key={lang.label}
                  href={lang.href}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  lang="zh"
                  aria-label="中文网站"
                  className="u-ml-30 u-text-28 u-h-80 font-mont hover:text-brand flex items-center text-[#ccc] uppercase transition-colors lg:ml-5 lg:h-10 lg:text-base"
                >
                  {lang.label}
                </a>
              ),
            )}
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            className="u-size-120 text-brand absolute top-0 right-0 flex items-center justify-center lg:hidden"
          >
            <Menu className="u-size-48" strokeWidth={2.5} />
          </button>
        </Container>

        {/* Desktop dropdown strip */}
        <AnimatePresence>
          {activeItem?.children ? (
            <motion.div
              key="strip"
              initial={{ height: 0 }}
              animate={{ height: 70 }}
              exit={{ height: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-x-0 top-full hidden overflow-hidden border-y border-[#f1f1f1] bg-white lg:block"
            >
              <ul
                aria-label={`${activeItem.label} links`}
                className="flex h-[70px] items-center justify-center"
              >
                {activeItem.children.map((child, i) => (
                  <motion.li
                    key={`${activeItem.label}-${child.label}`}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.15 + i * 0.1 }}
                    className="mx-[35px]"
                  >
                    <SmartLink
                      link={child}
                      onClick={() => setOpenMenu(null)}
                      className="u-text-16 group text-copy hover:text-brand relative block leading-[70px] transition-colors duration-500"
                    >
                      {child.label}
                      <span className="bg-brand absolute bottom-0 left-1/2 h-px w-0 transition-all duration-500 group-hover:left-0 group-hover:w-full" />
                    </SmartLink>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>

      <SearchOverlay open={searchOpen} onOpenChange={setSearchOpen} />
      <MobileMenu open={mobileOpen} onOpenChange={setMobileOpen} />
    </header>
  );
}

function SearchOverlay({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Backdrop className="fixed inset-0 z-[60] bg-black/80 transition-opacity duration-300 data-[ending-style]:opacity-0 data-[starting-style]:opacity-0" />
        <Dialog.Popup className="fixed top-1/2 left-1/2 z-[61] w-[90%] max-w-[1200px] -translate-x-1/2 -translate-y-1/2 transition-all duration-300 outline-none data-[ending-style]:opacity-0 data-[starting-style]:translate-y-[-40%] data-[starting-style]:opacity-0 lg:w-[30%]">
          <Dialog.Title className="sr-only">Search MINISO</Dialog.Title>
          <form
            role="search"
            onSubmit={(e) => {
              e.preventDefault();
              onOpenChange(false);
            }}
            className="flex w-full justify-between border-b border-[#555]"
          >
            <input
              type="search"
              name="q"
              placeholder="Please enter keywords"
              aria-label="Search keywords"
              className="h-[50px] w-[calc(100%-60px)] bg-transparent px-5 text-sm text-white outline-none placeholder:text-white"
            />
            <button
              type="submit"
              aria-label="Submit search"
              className="flex h-[50px] w-[60px] items-center justify-end text-white"
            >
              <Search className="size-4" />
            </button>
          </form>
          <Dialog.Close
            aria-label="Close search"
            className="group mx-auto mt-[50px] flex size-[30px] items-center justify-center text-white"
          >
            <X className="size-[30px] opacity-60 transition duration-500 group-hover:-rotate-180 group-hover:opacity-100" />
          </Dialog.Close>
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
  const [expanded, setExpanded] = useState<string | null>(null);

  // Close the drawer if the screen grows to desktop size.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 64rem)");
    const onChange = () => mq.matches && onOpenChange(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [onOpenChange]);

  const close = () => onOpenChange(false);

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="right"
        showCloseButton={false}
        className="gap-0 overflow-y-auto border-0 bg-white p-0 data-[side=right]:w-full data-[side=right]:border-l-0 data-[side=right]:sm:max-w-none"
      >
        <SheetTitle className="sr-only">Menu</SheetTitle>
        <div className="u-h-120 relative shrink-0 border-b border-[#d6d6d6]">
          <Link
            href="/"
            onClick={close}
            aria-label={`${brand.name} home`}
            className="u-left-30 u-top-20 absolute"
          >
            <Image
              src={brand.logo}
              alt={brand.name}
              width={50}
              height={60}
              className="u-w-70 h-auto"
            />
          </Link>
          <button
            type="button"
            onClick={close}
            aria-label="Close menu"
            className="u-right-30 u-top-24 u-size-72 bg-brand absolute flex items-center justify-center rounded-full text-white"
          >
            <X className="u-size-36" strokeWidth={2.5} />
          </button>
        </div>

        <nav aria-label="Mobile">
          <ul>
            {mainNav.map((item) => {
              const isOpen = expanded === item.label;
              if (!item.children?.length) {
                return (
                  <li key={item.label}>
                    <SmartLink
                      link={item}
                      onClick={close}
                      className="u-h-88 u-text-30 u-px-30 text-copy flex items-center"
                    >
                      {item.label}
                    </SmartLink>
                  </li>
                );
              }
              return (
                <li key={item.label}>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setExpanded(isOpen ? null : item.label)}
                    className={cn(
                      "u-h-88 u-text-30 u-px-30 text-copy flex w-full items-center justify-between",
                      isOpen && "text-brand",
                    )}
                  >
                    {item.label}
                    <ChevronDown
                      className={cn(
                        "u-size-32 transition-transform duration-300",
                        isOpen && "rotate-180",
                      )}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.ul
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="bg-mist overflow-hidden"
                      >
                        {item.children.map((child) => (
                          <li key={child.label}>
                            <SmartLink
                              link={child}
                              onClick={close}
                              className="u-h-80 u-text-26 u-pl-60 text-copy flex items-center"
                            >
                              {child.label}
                            </SmartLink>
                          </li>
                        ))}
                      </motion.ul>
                    ) : null}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
