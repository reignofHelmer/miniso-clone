import type { Photo } from "./types";

/**
 * Every photo on the site, all free to use under the Unsplash License
 * (https://unsplash.com/license). Hotlinked from Unsplash, nothing stored here.
 * Credits are listed on /credits.
 */
const photo = (id: string, alt: string, by: string, slug: string): Photo => ({
  src: `https://images.unsplash.com/photo-${id}`,
  alt,
  credit: { name: by, href: `https://unsplash.com/photos/${slug}` },
});

export const photos = {
  // Hero wordmark fill
  robots: photo(
    "1558060370-d644479cb6f7",
    "Shelves of tin robots and toy cars",
    "Huy Hung Trinh",
    "zoyBqT7ytLU",
  ),
  stationeryShop: photo(
    "1779684998897-ce5de594a5ac",
    "A stationery shop full of pens, cards and notebooks",
    "Caroline",
    "colorful-products-on-display-in-a-well-stocked-stationery-store-6f-dCqHDqNU",
  ),
  teddyCrowd: photo(
    "1760699128374-e4a4b8a7402e",
    "A crowd of teddy bears",
    "Tita",
    "1OUIkPGvmBU",
  ),
  plushShelf: photo(
    "1559764995-a071c12d009f",
    "Plush animals lined up on shop shelves",
    "Pallavi Gondane",
    "assorted-animal-plush-toy-lot-pYv65Fd4JW0",
  ),
  pens: photo(
    "1774878520736-6cacbcce1b7b",
    "Rows of colourful pens and pencils",
    "Caroline",
    "rows-of-colorful-pens-and-pencils-neatly-organized-on-display-ddAn2tozJvk",
  ),

  // Lines
  pinkBear: photo(
    "1624534881842-3d46b79c318e",
    "A pink and white bear plush beside a sweet dispenser",
    "Minha Baek",
    "pink-and-white-bear-plush-toy-QXqBcIsbgiw",
  ),
  blueNotebook: photo(
    "1784798455842-3a0be501172c",
    "A light blue notebook, coffee and pens on marble",
    "Mengkol Smile",
    "a-light-blue-notebook-coffee-pastry-and-pens-on-marble-ndzacdfVECo",
  ),
  candleNook: photo(
    "1483095348487-53dbf97d8d5b",
    "A candle on a tray beside a cushion by the window",
    "Alisa Anton",
    "photo-of-gel-candle-on-board-beside-pillow-u_z0X-yrJIE",
  ),
  mapSunglasses: photo(
    "1619467416348-6a782839e95f",
    "Sunglasses resting on a world map",
    "GeoJango Maps",
    "brown-framed-sunglasses-on-map-CWbbJW_7Fsw",
  ),

  // Products
  bowTieBear: photo(
    "1602734846297-9299fc2d4703",
    "A brown teddy bear wearing a bow tie",
    "Carter Baran",
    "brown-teddy-bear-with-black-and-white-bow-tie-75IgLbgqRls",
  ),
  ribbonBear: photo(
    "1556012018-50c5c0da73bf",
    "A soft teddy bear with a red ribbon",
    "Sandy Millar",
    "S5pFhDxUXyw",
  ),
  greenBowBear: photo(
    "1652501595862-1d06fe543544",
    "A small bear plush with a green bow",
    "Izabelly Marques",
    "a-stuffed-bear-with-a-green-bow-8xpfM2QHJSE",
  ),
  puppy: photo(
    "1591926828257-2eefb8aa42fa",
    "A white and brown puppy plush",
    "Clarissa Watson",
    "white-and-brown-dog-plush-toy-fcWEuEtjae4",
  ),
  spiralNotebook: photo(
    "1620275765334-4ed948bb4502",
    "A spiral notebook with a pen",
    "Justin Morgan",
    "black-pen-on-white-notebook-Hx-4TbpsoIw",
  ),
  pencilTin: photo(
    "1574944558125-f8d12f23be89",
    "A pencil case full of coloured pencils",
    "Markus Spiske",
    "assorted-color-pencil-and-pens-inside-pencil-case-fWDZ2bhhuc8",
  ),
  gridNotebooks: photo(
    "1787640619073-3dcb10c316c4",
    "Open notebooks with grid paper",
    "Anna Evans",
    "notebooks-with-grid-paper-and-covers-X3jAModcnMU",
  ),
  artCase: photo(
    "1609126788187-323a73f38a4e",
    "A zip-up case of coloured pencils",
    "Bernie Almanzar",
    "black-and-white-pen-holder-9nuHmadulLk",
  ),
  bottle: photo(
    "1602143407151-7111542de6e8",
    "A sage green steel bottle",
    "Joan Tran",
    "green-bottle-on-white-table-reEySFadyJQ",
  ),
  tote: photo(
    "1544816155-12df9643f363",
    "A plain canvas tote bag",
    "Kelly Sikkema",
    "beige-eco-bag-1Pgq9ZpIatI",
  ),
  slingBag: photo(
    "1600857062241-98e5dba7f214",
    "A small tan sling bag",
    "Aurélia Dubois",
    "brown-leather-sling-bag-on-white-background-xzrJCS4grC4",
  ),
  mug: photo(
    "1616241673111-508b4662c707",
    "A white ceramic mug on a windowsill",
    "Mediamodifier",
    "white-ceramic-mug-on-white-table-he_xuL-CyyI",
  ),
  jarCandle: photo(
    "1612293905607-b003de9e54fb",
    "Lighting an amber jar candle",
    "No Revisions",
    "hand-lighting-candle-in-glass-jar-OAW0OCLn52I",
  ),

  // Stores (city photos)
  shanghai: photo(
    "1551771279-b47900068e00",
    "A busy shopping street in Shanghai at night",
    "Hyunwon Jang",
    "people-walking-and-standing-at-the-streets-of-the-city-during-night-njUBfL1Oc3Y",
  ),
  hongKong: photo(
    "1502099530544-2b61cbaed85c",
    "Neon signs over a wet Hong Kong street",
    "Nic Low",
    "neon-signs-on-wet-hong-kong-street-DdQkVaQbSsg",
  ),
  bangkok: photo(
    "1510381472442-644984d5c08d",
    "People crossing between high-rises in Bangkok",
    "Evan Krause",
    "people-walking-surrounded-by-high-rise-buildings-JTAR4XJ7FbA",
  ),
  jakarta: photo(
    "1555043722-4523972f07ee",
    "A wide road and footbridge in Jakarta",
    "Afif Ramdhasuma",
    "jakarta-city-road-with-pedestrian-bridge-XYQPyn4KkiY",
  ),
  seoul: photo(
    "1601621915196-2621bfb0cd6e",
    "A tree-lined pavement in Seoul",
    "Zequn Gui",
    "people-walking-on-sidewalk-near-high-rise-buildings-during-daytime-xVFS3meofYM",
  ),
  toronto: photo(
    "1507992781348-310259076fe0",
    "The Toronto skyline across the water",
    "Berkay Gumustekin",
    "toronto-skyline-and-cn-tower-hRg1KL4-AUE",
  ),
  newYork: photo(
    "1788398891534-28803fa6a5e2",
    "Yellow taxis on a busy New York street",
    "Thuy Duong Nguyen",
    "busy-street-in-new-york-city-zZs5VGTbzwQ",
  ),
  losAngeles: photo(
    "1580655653885-65763b2597d0",
    "Palm trees lining a Los Angeles street at sunset",
    "Jake Blucker",
    "palm-trees-lining-street-at-sunset-8LlJNFLTEm0",
  ),
  santaMonica: photo(
    "1505887579242-c7bc04062e98",
    "The Ferris wheel on Santa Monica pier",
    "Matthew LeJune",
    "ferris-wheel-near-body-of-water-50hokKYxznc",
  ),
  miami: photo(
    "1589083130544-0d6a2926e519",
    "Miami Beach from the air",
    "Antonio Cuellar",
    "aerial-view-of-miami-beach-coastline-KDS5lCrj_ew",
  ),
  warsaw: photo(
    "1783444327817-bca4a85e1c22",
    "Colourful buildings around a Warsaw square",
    "Wojciech Wyszkowski",
    "historic-city-square-with-colorful-buildings-and-many-people-9Uru3kw2AIg",
  ),
  madrid: photo(
    "1539037116277-4db20889f2d4",
    "Gran Vía in Madrid from above",
    "Florian Wehde",
    "metropolis-building-and-gran-via-madrid-WBGjg0DsO_g",
  ),
  paris: photo(
    "1499856871958-5b9627545d1a",
    "Pont Alexandre III in Paris at dusk",
    "Léonard Cotte",
    "pont-alexandre-iii-bridge-in-paris-R5scocnOOdM",
  ),
  london: photo(
    "1632897271846-b6e3ca78aded",
    "A red double-decker bus on a London street",
    "Jacob Smith",
    "a-red-double-decker-bus-driving-down-a-busy-street-LcuBRr7pRCc",
  ),
  barcelona: photo(
    "1786780410540-6a2ef442f192",
    "The Sagrada Família rising over Barcelona",
    "Filipe Nobre",
    "sagrada-familia-in-barcelona-tZqiP3AUS_E",
  ),

  // Stories
  shopper: photo(
    "1758525223709-2dc38e53f55d",
    "A woman laughing with shopping bags in each hand",
    "Vitaly Gariev",
    "woman-holding-shopping-bags-with-a-smile-DvHdJ5PLVPU",
  ),
  newspapers: photo(
    "1504711434969-e33886168f5c",
    "A stack of folded newspapers",
    "AbsolutVision",
    "business-newspaper-article-WYd_PkCa1BY",
  ),
  shopOwner: photo(
    "1531058240690-006c446962d8",
    "A shop owner behind her counter",
    "Ellicia",
    "woman-standing-beside-the-table-24HcJhf0u6M",
  ),
} satisfies Record<string, Photo>;
