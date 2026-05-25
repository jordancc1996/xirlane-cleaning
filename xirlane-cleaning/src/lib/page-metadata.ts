/**
 * Single source of truth for page titles and descriptions.
 * Titles: primary keyword first; inner pages append brand via layout template.
 * Descriptions: ~150–160 chars, unique, with a clear CTA where appropriate.
 */
export const PAGE_SEO = {
  home: {
    path: "/",
    title: "House Cleaning Philadelphia | Maid & Commercial",
    description:
      "Philadelphia's trusted house cleaning & maid service. Insured, eco-friendly crews serving Philadelphia, Montgomery, Delaware, Chester & Bucks County. Get a free quote.",
    keywords: [
      "house cleaning Philadelphia",
      "maid service Philadelphia",
      "commercial cleaning Philadelphia",
      "deep cleaning services Philadelphia",
      "move out cleaning Philadelphia",
      "residential cleaning Philadelphia",
    ],
    ogImageAlt: "Xirlane Cleaning house cleaning team in Philadelphia",
  },
  services: {
    path: "/services",
    title: "Philadelphia Cleaning Services | Home & Office",
    description:
      "Compare house, commercial, deep & move-out cleaning in Philadelphia and Montgomery, Delaware, Chester & Bucks counties. Insured crews. Free quote in minutes.",
    keywords: [
      "cleaning services Philadelphia",
      "Philadelphia cleaning company",
      "house cleaning packages Philadelphia",
      "office cleaning Philadelphia PA",
    ],
    ogImageAlt: "Philadelphia home and office cleaning services by Xirlane",
  },
  locations: {
    path: "/locations",
    title: "Philadelphia Cleaning by Neighborhood | Local Areas",
    description:
      "Find house & apartment cleaning in Philadelphia neighborhoods: Center City, Fishtown, Rittenhouse, University City, Main Line & more. Free quotes from Xirlane Cleaning.",
    keywords: [
      "cleaning service Philadelphia neighborhoods",
      "house cleaning near me Philadelphia",
      "maid service by neighborhood Philadelphia",
      "local cleaning company Philadelphia",
    ],
    ogImageAlt: "Philadelphia neighborhood cleaning service areas",
  },
  contact: {
    path: "/contact",
    title: "Free Cleaning Quote Philadelphia | Book Now",
    description:
      "Get a free cleaning quote from Xirlane Cleaning. Serving Philadelphia, Montgomery, Delaware, Chester & Bucks County. Call or email us today.",
    keywords: [
      "free house cleaning quote Philadelphia",
      "commercial cleaning estimate Philadelphia",
      "book maid service Philadelphia",
      "cleaning company contact Philadelphia",
    ],
    ogImageAlt: "Contact Xirlane Cleaning for a Philadelphia cleaning quote",
  },
  faq: {
    path: "/faq",
    title: "Philadelphia Cleaning FAQ | Price & Areas",
    description:
      "Answers to common questions about Xirlane Cleaning's house cleaning, maid service, commercial cleaning, pricing, service areas, and booking in Greater Philadelphia.",
    keywords: [
      "house cleaning cost Philadelphia",
      "cleaning service FAQ Philadelphia",
      "maid service pricing Philadelphia",
      "commercial cleaning FAQ",
    ],
    ogImageAlt: "Frequently asked questions about cleaning in Philadelphia",
  },
  gallery: {
    path: "/gallery",
    title: "Cleaning Photos Philadelphia | House & Commercial Gallery",
    description:
      "See before and after photos of Xirlane Cleaning's residential, commercial, and deep cleaning work across Greater Philadelphia.",
    keywords: [
      "cleaning company gallery Philadelphia",
      "house cleaning before and after Philadelphia",
      "commercial cleaning photos",
      "deep cleaning results Philadelphia",
      "move out cleaning photos",
      "professional house cleaning gallery",
    ],
    ogImageAlt:
      "Sparkling clean kitchen after professional house cleaning in Philadelphia by Xirlane Cleaning",
    ogImage: "/images/gallery/sparkling-clean-kitchen-philadelphia.jpg",
  },
  serviceAreas: {
    path: "/service-areas",
    title: "Cleaning Service Areas Philadelphia | 5 Counties",
    description:
      "Xirlane Cleaning serves Philadelphia, Montgomery, Delaware, Chester & Bucks counties. Maid service, deep cleaning, commercial & move-out cleaning. Free quotes.",
    keywords: [
      "cleaning services Philadelphia",
      "maid service Philadelphia area",
      "house cleaning near me Philadelphia",
      "commercial cleaning Montgomery County",
    ],
    ogImageAlt: "Greater Philadelphia cleaning service areas",
  },
  blog: {
    path: "/blog",
    title: "Philadelphia Cleaning Tips & Guides | Blog",
    description:
      "Cleaning tips, checklists, and local guides for Philadelphia homeowners and businesses from Xirlane Cleaning. House, commercial, and deep cleaning advice.",
    keywords: [
      "house cleaning tips Philadelphia",
      "maid service advice",
      "deep cleaning checklist",
      "commercial cleaning tips Philadelphia",
    ],
    ogImageAlt: "Xirlane Cleaning blog — Philadelphia cleaning guides",
  },
} as const;

export type PageSeoKey = keyof typeof PAGE_SEO;
