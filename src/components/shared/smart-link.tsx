"use client";

import Link from "next/link";

import type { NavLink } from "@/data/types";
import { sendSelect } from "@/lib/select-event";

type SmartLinkProps = {
  link: NavLink;
  children: React.ReactNode;
} & Omit<React.ComponentProps<"a">, "href" | "children">;

/**
 * One link component for the whole site: opens external links in a new tab,
 * uses next/link for pages, and switches a section's tab when `link.select` is set.
 */
export function SmartLink({
  link,
  children,
  onClick,
  ...props
}: SmartLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (link.select) sendSelect(link.select);
    onClick?.(e);
  };

  if (link.external) {
    return (
      <a
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        {...props}
      >
        {children}
      </a>
    );
  }

  if (link.href.startsWith("#")) {
    return (
      <a href={link.href} onClick={handleClick} {...props}>
        {children}
      </a>
    );
  }

  return (
    <Link href={link.href} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
}
