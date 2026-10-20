// Shared data types for every homepage section.

export type NavLink = {
  label: string;
  href: string;
  external?: boolean;
  /** Also switch a section's tab when clicked (e.g. open a store region). */
  select?: SelectEvent;
};

/** Sent with window events so one section can open a tab in another. */
export type SelectEvent = { section: "shop" | "stores"; id: string };

export type NavItem = NavLink & {
  /** Sub-links shown in the dropdown (desktop) and accordion (mobile). */
  children?: NavLink[];
};

/** Who took a photo, for the /credits page. Every photo is from Unsplash. */
export type Credit = {
  name: string;
  /** Unsplash photo page, e.g. https://unsplash.com/photos/abc123 */
  href: string;
};

export type Photo = {
  src: string;
  alt: string;
  credit: Credit;
};

export type Tone = "bubblegum" | "butter" | "mint" | "cobalt";

/** A product line, e.g. "Cloud Bunny". Shown in the lines accordion. */
export type Line = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  tone: Tone;
  photo: Photo;
  /** The product-rail tab that "Shop this line" opens. */
  shelfId: string;
};

export type Product = {
  id: string;
  name: string;
  photo: Photo;
};

/** Products grouped under one tab of the product rail. */
export type Shelf = {
  id: string;
  name: string;
  products: Product[];
};

export type Stat = {
  id: string;
  label: string;
  value: number;
  /** Word after the number, e.g. "million". */
  unit?: string;
  /** Show a "+" after the number. */
  plus?: boolean;
};

export type Store = {
  id: string;
  city: string;
  country: string;
  photo: Photo;
};

export type StoreRegion = {
  id: string;
  name: string;
  stores: Store[];
};

export type Story = {
  id: string;
  title: string;
  text: string;
  cta: string;
  href: string;
  photo: Photo;
};

export type FooterColumn = {
  heading: string;
  links: NavLink[];
};
