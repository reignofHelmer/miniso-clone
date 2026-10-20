import type { FooterColumn, NavItem, SocialLink } from "./types";

/** Every image in this clone is loaded from miniso.com (see next.config.ts). */
export const MINISO = "https://www.miniso.com";
export const img = (path: string) => `${MINISO}${path}`;

export const brand = {
  name: "MINISO",
  /** Red bag logo, 50 x 60. */
  logo: img("/vancheerfile/images/2024/3/20240306121923689.png"),
  /** Red smile mark used inside headings like "LIFE IS ✱ FOR FUN" (48 x 48). */
  star: img("/en/images/nimg48_1.png"),
  /** Faint decorative pattern used behind some sections (448 x 438). */
  decor: img("/en/images/nimg448Bg.png"),
  /** Small red "+" after some stats. */
  plus: img("/en/images/nimg16_1.png"),
};

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Brand",
    href: "#brand",
    children: [
      { label: "Brand Profile", href: "#brand-profile" },
      { label: "News", href: "#news" },
      { label: "Contact Us", href: "#contact" },
    ],
  },
  {
    label: "Product",
    href: "#product",
    children: [{ label: "IP Collaboration", href: "#ip-collaboration" }],
  },
  {
    label: "Stores",
    href: "#stores",
    children: [
      { label: "Store Image", href: "#store-image" },
      { label: "E-Shop", href: "https://miniso-us.com/", external: true },
      { label: "Global Market", href: "#global-market" },
    ],
  },
  { label: "Investors", href: "https://ir.miniso.com/", external: true },
  { label: "Social Responsibility", href: "#social-responsibility" },
];

export const languages: { label: string; href?: string; current?: boolean }[] =
  [
    { label: "中", href: "https://www.miniso.cn/" },
    { label: "en", current: true },
  ];

export const footer = {
  franchiseLabel: "Franchise Inquiries",
  franchiseIcon: img("/en/images/nimg17_1.png"),
  franchiseEmail: "Franchise@miniso.com",
  columns: [
    {
      heading: { label: "Brand", href: "#brand" },
      links: [
        { label: "Brand Profile", href: "#brand-profile" },
        { label: "News", href: "#news" },
        { label: "Contact Us", href: "#contact" },
      ],
    },
    {
      heading: { label: "Product", href: "#product" },
      links: [{ label: "IP Collaboration", href: "#ip-collaboration" }],
    },
    {
      heading: { label: "Stores", href: "#stores" },
      links: [
        { label: "Store Image", href: "#store-image" },
        { label: "E-Shop", href: "https://miniso-us.com/", external: true },
        { label: "Global Market", href: "#global-market" },
      ],
    },
  ] satisfies FooterColumn[],
  /** Rendered as headings with no sub-links, in the last footer column. */
  standalone: [
    { label: "Investors", href: "https://ir.miniso.com/", external: true },
    { label: "Social Responsibility", href: "#social-responsibility" },
  ],
  privacy: { label: "Privacy Policy", href: "#privacy" },
  copyright: "Copyright © 2026 MINISO(GUANGZHOU)Co.,Ltd",
  socials: [
    {
      id: "weibo",
      label: "Weibo",
      icon: img("/en/images/nimg44_3.png"),
      iconHover: img("/en/images/nimg44_3on.png"),
      href: "#",
    },
    {
      id: "wechat",
      label: "WeChat",
      icon: img("/en/images/nimg44_4.png"),
      iconHover: img("/en/images/nimg44_4on.png"),
      href: "#",
    },
  ] satisfies SocialLink[],
};
