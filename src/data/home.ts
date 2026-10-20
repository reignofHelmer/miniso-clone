import { img } from "./site";
import type {
  Banner,
  IpCollection,
  IpFeature,
  JoyCard,
  Stat,
  StoreRegion,
} from "./types";

// ---------- Hero carousel ----------
const banner = (
  id: string,
  alt: string,
  path: string,
  width = 1920,
  height = 820,
): Banner => ({
  id,
  alt,
  image: img(`/vancheerfile/images${path}`),
  width,
  height,
});

export const banners: Banner[] = [
  banner("toy-story-5", "YOYO × Toy Story 5", "/2026/7/20260715165332866.jpg"),
  banner("star-wars", "Star Wars collection", "/2026/6/20260604172724912.jpg"),
  banner("sanrio", "Sanrio characters", "/2026/3/20260319094356345.jpg"),
  banner(
    "friends",
    "FRIENDS collection",
    "/2026/4/20260410105320732.jpg",
    2997,
    1280,
  ),
  banner("zootopia", "Zootopia collection", "/2025/10/20251014152027904.jpg"),
  banner(
    "vinyl-plush",
    "Vinyl plush collection",
    "/2025/8/20250828114151749.jpg",
  ),
  banner("one-piece", "ONE PIECE collection", "/2025/6/20250618103358387.jpg"),
  banner(
    "harry-potter",
    "Harry Potter collection",
    "/2024/12/20241206094227246.jpg",
  ),
];

// ---------- IP spotlight (Harry Potter / Peanuts / BT21 / Loopy) ----------
export const ipFeatures: IpFeature[] = [
  {
    id: "harry-potter",
    name: "Harry Potter",
    eyebrow: "IP Collaboration",
    description:
      "Explore MINISO's Harry Potter-inspired collection. Magical wonders await!",
    href: "#ip-collaboration",
    image: img("/vancheerfile/images/2024/10/20241010144528802.png"),
    logo: img("/vancheerfile/images/2024/11/2024110511402551.png"),
  },
  {
    id: "peanuts",
    name: "PEANUTS",
    eyebrow: "IP Collaboration",
    description:
      "MINISO has launched a collaboration with Snoopy, featuring creative representations of classic characters from the Peanuts comics on MINISO products.",
    href: "#ip-collaboration",
    image: img("/vancheerfile/images/2024/8/2024082009235934.jpg"),
    logo: img("/vancheerfile/images/2024/10/2024100915018464.png"),
  },
  {
    id: "bt21",
    name: "BT21",
    eyebrow: "IP Collaboration",
    description:
      "MINISO has introduced the highly anticipated BT21 series of IP products, with a variety of new items now available online, providing consumers with a fresh shopping experience.",
    href: "#ip-collaboration",
    image: img("/vancheerfile/images/2024/8/2024082009257529.jpg"),
    logo: img("/vancheerfile/images/2024/10/20241010141853361.png"),
  },
  {
    id: "loopy",
    name: "LOOPY",
    eyebrow: "IP Collaboration",
    description:
      'MINISO has partnered with Zanmang Loopy to exclusively release new products, catering to customers\' fun and personalized consumption needs. Additionally, the "LOOPY Mad Literature" themed store has opened, sweeping the world with this "crazy style" trend.',
    href: "#ip-collaboration",
    image: img("/vancheerfile/images/2024/8/20240819141717931.png"),
    logo: img("/vancheerfile/images/2024/10/20241009145737656.png"),
  },
];

// ---------- IP tabs (ONE PIECE / Stitch / CHiiKAWA) ----------
const product = (id: string, name: string, path: string) => ({
  id,
  name,
  image: img(`/vancheerfile/images${path}`),
});

export const ipCollections: IpCollection[] = [
  {
    id: "one-piece",
    name: "ONE PIECE",
    products: [
      product("op-bag", "Shopping Bag", "/2025/6/20250630102012756.jpg"),
      product(
        "op-pendant",
        "Big-head Cute Plush Pendant",
        "/2025/6/20250630101220264.jpg",
      ),
      product("op-pillow", "16in. Pillow", "/2025/6/20250630102216528.jpg"),
      product(
        "op-notepad",
        "Boxed Weekly-Planning Note Pad",
        "/2025/6/20250630102345573.jpg",
      ),
      product(
        "op-standee",
        "Acrylic Scene Standee Surprise Box",
        "/2025/6/20250630101813655.jpg",
      ),
      product(
        "op-bottle",
        "Straw Plastic Bottle 1250mL",
        "/2025/6/20250630102516967.jpg",
      ),
    ],
  },
  {
    id: "stitch",
    name: "Stitch",
    products: [
      product("st-blind-box", "Blind Box", "/2025/6/20250624152241316.png"),
      product("st-keychain", "Keychain", "/2025/6/20250624152131493.png"),
      product("st-lunch-box", "Lunch Box", "/2025/6/20250624151856300.png"),
      product("st-bottle", "Water Bottle", "/2025/6/20250624152011545.png"),
    ],
  },
  {
    id: "chiikawa",
    name: "CHiiKAWA",
    products: [
      product(
        "ck-pencil-case",
        "Plush Pencil Case",
        "/2025/7/20250707170144525.png",
      ),
      product(
        "ck-fan",
        "1200mAh Mini Handheld Fan",
        "/2025/7/20250707170056569.jpg",
      ),
      product(
        "ck-lunch-bag",
        "Handheld Lunch Bag",
        "/2025/7/20250707165942285.jpg",
      ),
      product(
        "ck-crossbody",
        "Plush Crossbody Bag",
        "/2025/7/20250707165818610.jpg",
      ),
    ],
  },
];

// ---------- "Life is for fun" stats (Tolu) ----------
export const stats: Stat[] = [
  {
    id: "markets",
    label: "Global Markets",
    icon: img("/vancheerfile/images/2024/3/20240308182650087.png"),
    value: 112,
  },
  {
    id: "stores",
    label: "Global Stores",
    icon: img("/vancheerfile/images/2024/3/20240308182626732.png"),
    value: 8500,
    plus: true,
  },
  {
    id: "members",
    label: "Registered Members",
    icon: img("/vancheerfile/images/2024/3/2024030818263935.png"),
    value: 100,
    unit: "million",
    plus: true,
  },
  {
    id: "customers",
    label: "In-store Customers",
    icon: img("/vancheerfile/images/2024/3/20240308182539248.png"),
    value: 1,
    unit: "billion",
  },
];

// ---------- Global stores (Tolu) ----------
const store = (id: string, city: string, path: string) => ({
  id,
  city,
  image: img(`/vancheerfile/images${path}`),
});

export const storeRegions: StoreRegion[] = [
  {
    id: "asia",
    name: "Asia",
    stores: [
      store("nanjing", "Nanjing, China", "/2025/8/20250807164444718.jpg"),
      store("shanghai", "Shanghai, China", "/2025/8/20250807164413200.jpg"),
      store("hong-kong", "Hongkong, China", "/2025/8/20250807164021215.jpg"),
      store("bangkok", "Bangkok, Thailand", "/2025/8/20250807163647126.jpg"),
      store("jakarta", "Jakarta, Indonesia", "/2025/8/20250807163748712.JPG"),
      store("seoul", "Seoul, Korea", "/2025/8/20250807163925101.jpg"),
    ],
  },
  {
    id: "north-america",
    name: "North America",
    stores: [
      store("toronto", "Toronto, Canada", "/2025/8/20250807163054481.jpg"),
      store("manhattan", "Manhattan, USA", "/2024/4/20240408153454411.jpg"),
      store("nyc", "New York City, USA", "/2024/4/20240408153327872.jpg"),
      store("california", "California, USA", "/2025/8/2025080811167843.jpg"),
      store(
        "santa-monica",
        "Santa Monica, USA",
        "/2024/11/20241112104554416.jpg",
      ),
      store("florida", "Florida, USA", "/2024/4/20240408154043111.jpg"),
    ],
  },
  {
    id: "europe",
    name: "Europe",
    stores: [
      store("warsaw", "Warsaw, Poland", "/2026/1/20260112171921644.jpg"),
      store("madrid", "Madrid, Spain", "/2025/8/20250807165110548.JPG"),
      store(
        "champs-elysees",
        "Champs-Elysées, France",
        "/2024/11/20241112095813281.png",
      ),
      store("london", "London, UK", "/2024/4/20240408152147571.jpg"),
      store(
        "oxford-street",
        "Oxford Street, UK",
        "/2024/11/20241112101735575.jpg",
      ),
      store("barcelona", "Barcelona, Spain", "/2024/11/20241112104812175.png"),
    ],
  },
];

// ---------- "Bringing Joy to the World" cards (Tolu) ----------
export const joyCards: JoyCard[] = [
  {
    id: "moments",
    title: "MINISO Moments",
    text: "Discover the wonderful experiences at MINISO!",
    image: img("/vancheerfile/images/2024/11/20241118135211825.jpg"),
    href: "#moments",
  },
  {
    id: "news",
    title: "Latest News",
    text: "MINISO Unveils Brand Upgrade Achievements, Aiming to Build the World's Leading IP Design Retail Group",
    image: img("/vancheerfile/images/2024/11/20241112144331098.jpg"),
    href: "#news",
  },
  {
    id: "franchise",
    title: "Franchise",
    text: "Learn more",
    image: img("/vancheerfile/images/2024/3/20240309090551653.jpg"),
    href: "#contact",
  },
];
