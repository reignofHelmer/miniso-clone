// Shared data types for every homepage section.
// Only Helmer edits this file. Ask before changing a type.

export type NavLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type NavItem = NavLink & {
  /** Sub-links shown in the dropdown strip (desktop) and accordion (mobile). */
  children?: NavLink[];
};

export type Banner = {
  id: string;
  image: string;
  alt: string;
  width: number;
  height: number;
};

export type IpFeature = {
  id: string;
  name: string;
  eyebrow: string;
  description: string;
  href: string;
  /** Full-width background artwork. */
  image: string;
  /** Small logo shown in the round switcher. */
  logo: string;
};

export type Product = {
  id: string;
  name: string;
  image: string;
};

export type IpCollection = {
  id: string;
  name: string;
  products: Product[];
};

export type Stat = {
  id: string;
  label: string;
  icon: string;
  value: number;
  /** Word after the number, e.g. "million". */
  unit?: string;
  /** Show the small red "+" after the number. */
  plus?: boolean;
};

export type Store = {
  id: string;
  city: string;
  image: string;
};

export type StoreRegion = {
  id: string;
  name: string;
  stores: Store[];
};

export type JoyCard = {
  id: string;
  title: string;
  text: string;
  image: string;
  href: string;
  external?: boolean;
};

export type FooterColumn = {
  heading: NavLink;
  links: NavLink[];
};

export type SocialLink = {
  id: string;
  label: string;
  icon: string;
  iconHover: string;
  href: string;
};
