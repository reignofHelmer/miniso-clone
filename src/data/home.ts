import { photos } from "./photos";
import type { Line, Photo, Shelf, Stat, StoreRegion, Story } from "./types";

// MINILA is a fictional brand. All copy here is invented for this project.

// ---------- Hero: photos that show through the wordmark ----------
export const heroPhotos: Photo[] = [
  photos.plushShelf,
  photos.stationeryShop,
  photos.robots,
  photos.teddyCrowd,
  photos.pens,
];

// ---------- Stats band ----------
export const stats: Stat[] = [
  { id: "markets", label: "markets", value: 64 },
  { id: "stores", label: "stores", value: 3200, plus: true },
  { id: "members", label: "members", value: 40, unit: "million", plus: true },
  { id: "visits", label: "visits a year", value: 600, unit: "million" },
];

// ---------- Lines accordion ----------
export const lines: Line[] = [
  {
    id: "cloud-bunny",
    name: "Cloud Bunny",
    tagline: "Soft friends for every shelf",
    description:
      "Plush pals in sorbet colours, sized for a bed, a bag or a desk. Every one gets squeezed and hugged in testing before it ships.",
    tone: "bubblegum",
    photo: photos.pinkBear,
    shelfId: "cloud-bunny",
  },
  {
    id: "desk-club",
    name: "Desk Club",
    tagline: "Stationery that makes lists fun",
    description:
      "Notebooks, gel pens and pencil cases in calm pastels, designed to sit together on one tidy desk.",
    tone: "mint",
    photo: photos.blueNotebook,
    shelfId: "desk-club",
  },
  {
    id: "home-soft",
    name: "Home Soft",
    tagline: "Little upgrades for slow evenings",
    description:
      "Candles, mugs and cushions that turn one corner of your room into the best seat in the house.",
    tone: "butter",
    photo: photos.candleNook,
    shelfId: "home-away",
  },
  {
    id: "off-we-go",
    name: "Off We Go",
    tagline: "Travel bits that fit in a pocket",
    description:
      "Bottles, totes and small bags for the commute, the weekend away and everything in between.",
    tone: "cobalt",
    photo: photos.mapSunglasses,
    shelfId: "home-away",
  },
];

// ---------- Product rail ----------
const product = (id: string, name: string, photo: Photo) => ({
  id,
  name,
  photo,
});

export const shelves: Shelf[] = [
  {
    id: "cloud-bunny",
    name: "Cloud Bunny",
    products: [
      product("bow-tie-bear", "Bow-tie bear", photos.bowTieBear),
      product("ribbon-bear", "Ribbon bear", photos.ribbonBear),
      product("mint-bow-cub", "Mint-bow cub", photos.greenBowBear),
      product("puppy-pal", "Puppy pal", photos.puppy),
    ],
  },
  {
    id: "desk-club",
    name: "Desk Club",
    products: [
      product("spiral-notebook", "Spiral notebook", photos.spiralNotebook),
      product("rainbow-tin", "Rainbow pencil tin", photos.pencilTin),
      product("grid-trio", "Grid notebook trio", photos.gridNotebooks),
      product("art-case", "Zip-up art case", photos.artCase),
    ],
  },
  {
    id: "home-away",
    name: "Home & away",
    products: [
      product("sage-bottle", "Sage steel bottle", photos.bottle),
      product("everyday-tote", "Everyday tote", photos.tote),
      product("mini-sling", "Mini sling bag", photos.slingBag),
      product("morning-mug", "Morning mug", photos.mug),
      product("amber-candle", "Amber jar candle", photos.jarCandle),
    ],
  },
];

// ---------- Stores ----------
const store = (id: string, city: string, country: string, photo: Photo) => ({
  id,
  city,
  country,
  photo,
});

export const storeRegions: StoreRegion[] = [
  {
    id: "asia",
    name: "Asia",
    stores: [
      store("shanghai", "Shanghai", "China", photos.shanghai),
      store("hong-kong", "Hong Kong", "China", photos.hongKong),
      store("bangkok", "Bangkok", "Thailand", photos.bangkok),
      store("jakarta", "Jakarta", "Indonesia", photos.jakarta),
      store("seoul", "Seoul", "South Korea", photos.seoul),
    ],
  },
  {
    id: "north-america",
    name: "North America",
    stores: [
      store("toronto", "Toronto", "Canada", photos.toronto),
      store("new-york", "New York", "USA", photos.newYork),
      store("los-angeles", "Los Angeles", "USA", photos.losAngeles),
      store("santa-monica", "Santa Monica", "USA", photos.santaMonica),
      store("miami", "Miami", "USA", photos.miami),
    ],
  },
  {
    id: "europe",
    name: "Europe",
    stores: [
      store("warsaw", "Warsaw", "Poland", photos.warsaw),
      store("madrid", "Madrid", "Spain", photos.madrid),
      store("paris", "Paris", "France", photos.paris),
      store("london", "London", "UK", photos.london),
      store("barcelona", "Barcelona", "Spain", photos.barcelona),
    ],
  },
];

// ---------- Stories ----------
export const stories: Story[] = [
  {
    id: "moments",
    title: "MINILA moments",
    text: "Hauls, shelf tours and gift ideas from people who shop with us.",
    cta: "See moments",
    href: "#stories",
    photo: photos.shopper,
  },
  {
    id: "news",
    title: "Desk Club gets a refill bar",
    text: "Bring back an empty gel pen and fill it with any of 24 inks, in 40 stores from this month.",
    cta: "Read the story",
    href: "#stories",
    photo: photos.newspapers,
  },
  {
    id: "franchise",
    title: "Open a MINILA",
    text: "Bring small joys to your city. We help with the space, the stock and the training.",
    cta: "Start an enquiry",
    href: "#franchise",
    photo: photos.shopOwner,
  },
];
