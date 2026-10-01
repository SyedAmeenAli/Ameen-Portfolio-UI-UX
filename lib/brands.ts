/** Brand-identity dataset. Swap board/sketch + copy when real work lands. */

export type BrandVis = {
  slug: string;
  name: string;
  order: string;
  tagline: string;
  sectorLine: string;
  concept: string;
  blurb: string;
  accent: string;      // brand accent for headings
  palette: string[];   // this brand's own colour system
  board: string;       // full identity board (show contained, never cropped)
  sketch: string;      // exploration sheet
  deck?: { src: string; title: string; caption?: string }[]; // optional full case-study deck
  deckPhone?: boolean; // show deck slides inside a phone-frame (real app/site screens)
};

const cap = (s: string) => s.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
// 03/04/06/08/14/15 dropped — carry a faint Gemini sparkle baked into the art
const bluemeterDeck = [
  "01-cover", "02-the-question", "05-strategy-vocabulary",
  "07-five-ways-into-the-mark", "09-the-ones-that-stayed",
  "10-three-directions", "11-one-direction", "12-logo-construction", "13-final-mark",
  "16-type-as-infrastructure", "17-blue-as-infrastructure-not-water", "18-a-system-not-a-symbol",
  "19-pattern-system", "20-graphic-elements", "21-iconography", "22-data-information-graphics",
  "23-layout-grid-system", "24-photography-direction", "25-art-direction", "26-stationery-system",
  "27-business-documents", "28-technical-documentation", "29-report-presentation-system", "30-social-media-system",
  "31-social-media-templates", "32-social-media-campaign", "33-digital-experience", "34-ui-design-system",
  "35-data-information-graphics-2", "36-identity-in-the-field", "37-identity-in-use", "38-environmental-applications",
  "39-identity-in-motion", "40-final-brand-world",
].map((s) => ({ src: `/brands/bluemeter/${s}.jpg`, title: cap(s.replace(/^\d+-/, "")) }));

const laundrygoDeck = [
  { src: "/brands/laundrygo/01-onboarding-fresh.jpg", title: "Onboarding", caption: "First launch — introduces the core promise: pickup, care and delivery, made simple." },
  { src: "/brands/laundrygo/02-home.jpg", title: "Home", caption: "Search, a featured offer, and the four core service categories — one tap from a new order." },
  { src: "/brands/laundrygo/03-services.jpg", title: "Services", caption: "Wash & Fold, Dry Cleaning, Ironing, Special Care — every service a customer can book." },
  { src: "/brands/laundrygo/04-schedule-pickup.jpg", title: "Schedule pickup", caption: "Booking flow — pick a verified partner, a pickup date, a time slot, review and confirm." },
  { src: "/brands/laundrygo/05-partners.jpg", title: "Partners", caption: "Nearby laundry partners with rating, distance, services offered and open status." },
  { src: "/brands/laundrygo/06-login.jpg", title: "Sign in", caption: "Email/password plus Apple, Google and phone sign-in." },
  { src: "/brands/laundrygo/07-order-history.jpg", title: "Order history", caption: "Past orders with partner, status — completed or cancelled — and price." },
];

const aqaratiDeck = [
  { src: "/brands/aqarati/01-website-hero.jpg", title: "Website — hero", caption: "Marketing site homepage, bilingual EN/AR, leading with the core promise." },
  { src: "/brands/aqarati/02-website-verification.jpg", title: "Website — verification", caption: "Explains Aqarati's verification system for people, businesses and properties." },
  { src: "/brands/aqarati/03-app-home.webp", title: "App — home", caption: "Buy / Rent / Lease toggle, picks in Muscat, and nearby verified professionals." },
  { src: "/brands/aqarati/04-app-explore.webp", title: "App — explore", caption: "Browse by property type, then professionals and services, in one search surface." },
  { src: "/brands/aqarati/05-app-property.webp", title: "App — property", caption: "Listing detail — gallery, price, specs, description, book a viewing or ask a question." },
  { src: "/brands/aqarati/06-app-search.webp", title: "App — search", caption: "Filtered results list with verification badges, price and specs per card." },
  { src: "/brands/aqarati/07-app-map.webp", title: "App — map", caption: "Map view of listings by price, with a quick-glance card for the selected pin." },
  { src: "/brands/aqarati/08-app-business.webp", title: "App — business profile", caption: "A verified professional's profile — services, pricing, recent projects, book a call." },
  { src: "/brands/aqarati/09-app-saved.webp", title: "App — saved", caption: "Saved properties, businesses, projects and searches in one tabbed view." },
  { src: "/brands/aqarati/10-app-verification.webp", title: "App — verification centre", caption: "Account verification status — identity, property ownership, phone — tracked per item." },
];

export const BRAND_VIS: BrandVis[] = [
  {
    slug: "bluemeter", name: "Blue Meter", order: "01",
    tagline: "Make water visible",
    sectorLine: "Water access / civic infrastructure",
    concept: "An angular B built from stacked meter bars — infrastructure you can read at a glance. Blue as a system, not as water.",
    blurb: "A civic water-access identity turning invisible infrastructure into visible information. Deep-navy structure, electric-blue signal, carried from field meters to the monitoring app and city-scale data.",
    accent: "#2f9bff",
    palette: ["#0a1a2f", "#0057ff", "#00b4ff", "#8a94a6", "#e6f4ff"],
    board: "/brands/bluemeter-brand-visualisation.jpg",
    sketch: "/brands/bluemeter-sketch.jpg",
    deck: bluemeterDeck,
  },
  {
    slug: "nexora", name: "Nexora", order: "02",
    tagline: "Beyond the ordinary",
    sectorLine: "Technology / AI infrastructure",
    concept: "An arch and a rising stair — climb, threshold, the ordinary left behind. A four-point star of forward motion.",
    blurb: "A futuristic identity system built around innovation, structure and visual experimentation. Metallic on near-black with restrained purple energy.",
    accent: "#b46bff",
    palette: ["#050505", "#1a1a1a", "#6b6b6b", "#b46bff", "#f1ebdd"],
    board: "/brands/nexora-brand-visualisation.jpg",
    sketch: "/brands/nexora-sketch.jpg",
  },
  {
    slug: "verdant", name: "Verdant", order: "03",
    tagline: "Technology that grows a better world",
    sectorLine: "Plant technology",
    concept: "Two leaves resolve into a V. Nature and technology drawn with a single weight.",
    blurb: "A plant-tech identity exploring nature, technology and a more sustainable visual language. Green-forward, applied across dashboards and environment graphics.",
    accent: "#2ec27e",
    palette: ["#12211a", "#1c7a4f", "#2ec27e", "#a7e3c4", "#eef6f1"],
    board: "/brands/verdant-brand-visulaisation.jpg",
    sketch: "/brands/verdant-sketch.jpg",
  },
  {
    slug: "terralis", name: "Terralis", order: "04",
    tagline: "Earth. Craft. Home.",
    sectorLine: "Earthy lifestyle / home",
    concept: "A leaf inside an arched doorway, one weight, so it stamps clean on a candle jar or a shipping box.",
    blurb: "Homeware made by hand — tactile materials, natural forms and contemporary design. Packaging that looks made, not printed.",
    accent: "#c79a5c",
    palette: ["#171411", "#574438", "#a66a4c", "#d7b89c", "#ede4d7"],
    board: "/brands/terralis-brand-visualisation.jpg",
    sketch: "/brands/terralis-sketch.jpg",
  },
  {
    slug: "auria", name: "Auria", order: "05",
    tagline: "Feel every frequency",
    sectorLine: "Immersive audio",
    concept: "The mark is a live equaliser frozen mid-beat — it reads as sound before it reads as a letter.",
    blurb: "A studio identity for immersive audio. A dark atmospheric environment with a luminous violet aura, carried from app UI to retail signage.",
    accent: "#9a7bff",
    palette: ["#0b0a14", "#3b1e8f", "#7c4dff", "#b39cff", "#ececea"],
    board: "/brands/auria-brand-visualization.jpg",
    sketch: "/brands/auria-sketch.jpg",
  },
  {
    slug: "vayora", name: "Vayora", order: "06",
    tagline: "Quicken forward",
    sectorLine: "Experimental / distinctive identity",
    concept: "A hidden V and a star of forward motion — geometric, minimal, one accent colour, built for a favicon and a billboard.",
    blurb: "An experimental brand identity developed around a distinctive visual language and unconventional form.",
    accent: "#67d4e8",
    palette: ["#07131f", "#0b3a53", "#087ea4", "#67d4e8", "#e4ecef"],
    board: "/brands/vayora-brand-visualisation.jpg",
    sketch: "/brands/vayora-sketch.jpg",
  },
  {
    slug: "laundrygo", name: "LaundryGo", order: "07",
    tagline: "Fresh Laundry, Brighter Days",
    sectorLine: "On-demand laundry / consumer app",
    concept: "A spiralling mark built from two interlocking fabric folds — red and green turning into one another, caught mid-wash.",
    blurb: "A pickup-and-delivery laundry app for Oman, designed and shipped end to end in Flutter — onboarding, partner discovery, scheduled pickup and live order tracking.",
    accent: "#c62828",
    palette: ["#17140f", "#c62828", "#1d7a3c", "#f4efe4", "#78705f"],
    board: "/brands/laundrygo/board.svg",
    sketch: "/brands/laundrygo/01-onboarding-fresh.jpg",
    deck: laundrygoDeck,
    deckPhone: true,
  },
  {
    slug: "aqarati", name: "Aqarati", order: "08",
    tagline: "Property, without the guesswork.",
    sectorLine: "Proptech / marketing site + app",
    concept: "An arched doorway resolving into a rising roofline — threshold and shelter drawn as a single mark.",
    blurb: "Oman's property ecosystem: a bilingual (EN/AR) marketing site paired with a consumer app for property discovery, verified professionals and the wider home journey.",
    accent: "#b5452f",
    palette: ["#1c1a17", "#b5452f", "#8a7f6c", "#d8c9ae", "#f3efe8"],
    board: "/brands/aqarati/board.svg",
    sketch: "/brands/aqarati/03-app-home.webp",
    deck: aqaratiDeck,
    deckPhone: true,
  },
];
