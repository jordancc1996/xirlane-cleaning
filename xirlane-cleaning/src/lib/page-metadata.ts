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
      "Insured house cleaning, maid service, deep cleans & move-out cleaning in Philadelphia & 5 PA counties. Weekly, biweekly, or one-time. Get a free quote today.",
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
  homeCleaning: {
    path: "/services/home-cleaning",
    title: "House Cleaning Philadelphia | Weekly & One-Time",
    description:
      "Book house cleaning in Philadelphia & nearby counties. Weekly, biweekly, monthly, or one-time maid service. Kitchens, baths & floors done right. Free estimate.",
    keywords: [
      "maid services Philadelphia",
      "maid service Philadelphia",
      "house cleaning Philadelphia",
      "residential cleaning Philadelphia",
    ],
    ogImageAlt: "Residential house cleaning in Philadelphia",
  },
  commercialCleaning: {
    path: "/services/commercial-cleaning",
    title: "Commercial Cleaning Philadelphia | Offices",
    description:
      "Commercial cleaning in Philadelphia for offices, studios & retail. Restrooms, workspaces & floors on your schedule. Insured & bonded. Request a quote.",
    keywords: [
      "commercial cleaning Philadelphia",
      "office cleaning Philadelphia PA",
      "janitorial service Philadelphia",
      "business cleaning near me",
    ],
    ogImageAlt: "Commercial office cleaning in Philadelphia",
  },
  deepCleaning: {
    path: "/services/deep-cleaning",
    title: "Deep Cleaning Philadelphia | Top-to-Bottom",
    description:
      "Deep cleaning services in Philadelphia for first visits, spring cleans & seasonal resets. Detailed packages from seasonal to ultimate. Free quote.",
    keywords: [
      "deep cleaning services Philadelphia",
      "spring cleaning Philadelphia PA",
      "move in deep clean Philadelphia",
      "intensive house cleaning",
    ],
    ogImageAlt: "Deep cleaning service in a Philadelphia home",
  },
  postConstruction: {
    path: "/services/post-construction",
    title: "Move-Out Cleaning Philadelphia | Post-Build",
    description:
      "Move-out cleaning & post-construction cleaning in Philadelphia. Dust, debris & final polish for move-in, staging & handoff. Insured team. Get a quote.",
    keywords: [
      "move out cleaning Philadelphia",
      "post construction cleaning Philadelphia",
      "renovation cleaning Philadelphia PA",
      "construction cleanup near me",
    ],
    ogImageAlt: "Move-out and post-construction cleaning in Philadelphia",
  },
  contact: {
    path: "/contact",
    title: "Free Cleaning Quote Philadelphia | Book Now",
    description:
      "Request a free house or commercial cleaning quote in Philadelphia & surrounding counties. Call, email, or book online. Insured, bonded & satisfaction guaranteed.",
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
      "FAQ for Philadelphia cleaning: pricing, service areas, supplies, insurance & scheduling. House, commercial, deep & move-out answers from Xirlane Cleaning.",
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
      "View completed cleaning photos from Xirlane Cleaning: professional house cleaning, deep cleaning service, move-out cleaning & commercial cleaning in Philadelphia, PA.",
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
} as const;

export type PageSeoKey = keyof typeof PAGE_SEO;
