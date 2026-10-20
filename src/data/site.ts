import type { FooterColumn, NavItem, NavLink } from "./types";

export const brand = {
  name: "MINILA",
  wordmark: "minila",
  tagline: "Small things, big joy.",
};

export const mainNav: NavItem[] = [
  {
    label: "Lines",
    href: "#lines",
    children: [
      {
        label: "Cloud Bunny",
        href: "#shop",
        select: { section: "shop", id: "cloud-bunny" },
      },
      {
        label: "Desk Club",
        href: "#shop",
        select: { section: "shop", id: "desk-club" },
      },
      {
        label: "Home & away",
        href: "#shop",
        select: { section: "shop", id: "home-away" },
      },
    ],
  },
  { label: "Shop", href: "#shop" },
  {
    label: "Stores",
    href: "#stores",
    children: [
      {
        label: "Asia",
        href: "#stores",
        select: { section: "stores", id: "asia" },
      },
      {
        label: "North America",
        href: "#stores",
        select: { section: "stores", id: "north-america" },
      },
      {
        label: "Europe",
        href: "#stores",
        select: { section: "stores", id: "europe" },
      },
    ],
  },
  { label: "Stories", href: "#stories" },
];

export const headerCta: NavLink = { label: "Open a store", href: "#franchise" };

export const footer = {
  franchise: {
    heading: "Want a MINILA in your city?",
    text: "We partner with local owners in 64 markets. Tell us where, and we'll send you the numbers.",
    email: "franchise@minila.example",
  },
  columns: [
    {
      heading: "Shop",
      links: [
        { label: "All lines", href: "#lines" },
        {
          label: "Cloud Bunny",
          href: "#shop",
          select: { section: "shop", id: "cloud-bunny" },
        },
        {
          label: "Desk Club",
          href: "#shop",
          select: { section: "shop", id: "desk-club" },
        },
        {
          label: "Home & away",
          href: "#shop",
          select: { section: "shop", id: "home-away" },
        },
      ],
    },
    {
      heading: "Visit",
      links: [
        { label: "Find a store", href: "#stores" },
        { label: "Open a store", href: "#franchise" },
        { label: "Stories", href: "#stories" },
      ],
    },
    {
      heading: "Follow",
      links: [
        { label: "Instagram", href: "https://instagram.com", external: true },
        { label: "TikTok", href: "https://tiktok.com", external: true },
        { label: "Pinterest", href: "https://pinterest.com", external: true },
      ],
    },
  ] satisfies FooterColumn[],
  legal:
    "MINILA is a fictional brand, made for a practice project. Not affiliated with any real company.",
  credits: { label: "Photo credits", href: "/credits" },
  maker: {
    label: "Built by ReignTek",
    href: "https://reigntek.co",
    external: true,
  },
};
