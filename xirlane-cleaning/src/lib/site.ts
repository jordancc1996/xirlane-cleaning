/** Shared business and site constants for SEO, schema, and NAP consistency. */
export const SITE_URL = "https://xirlanecleaning.com";

export const BUSINESS = {
  name: "Xirlane Cleaning",
  legalName: "Xirlane Cleaning",
  email: "hello@xirlanecleaning.com",
  /** Must match Google Business Profile exactly (E.164). */
  phone: "+12150000000",
  phoneDisplay: "(215) 000-0000",
  locality: "Philadelphia",
  region: "PA",
  postalCode: "19103",
  country: "US",
  priceRange: "$$",
  /** Add your Google Business Profile URL to strengthen sameAs / entity links. */
  googleBusinessProfileUrl: "" as string,
  openingHours: [
    { dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "07:00", closes: "19:00" },
    { dayOfWeek: ["Saturday"], opens: "08:00", closes: "17:00" },
  ],
  serviceAreas: [
    "Philadelphia, PA",
    "Montgomery County, PA",
    "Delaware County, PA",
    "Chester County, PA",
    "Bucks County, PA",
  ],
  philadelphiaNeighborhoods: [
    "Center City",
    "University City",
    "Northern Liberties",
    "Fishtown",
    "South Philadelphia",
    "Chestnut Hill",
    "Manayunk",
    "Rittenhouse",
  ],
  geo: {
    latitude: 39.9526,
    longitude: -75.1652,
  },
  /** Approximate service radius from Center City (meters). ~35 mi covers Greater Philadelphia. */
  serviceRadiusMeters: 56000,
  trustSignals: [
    "Insured & bonded",
    "100% satisfaction guarantee",
    "Trained & certified staff",
    "Eco-friendly products available",
  ],
} as const;

export const SERVICE_ROUTES = [
  { path: "/services/house-cleaning", name: "House Cleaning", slug: "house-cleaning" },
  { path: "/services/deep-cleaning", name: "Deep Cleaning", slug: "deep-cleaning" },
  { path: "/services/move-out-cleaning", name: "Move-Out Cleaning", slug: "move-out-cleaning" },
  { path: "/services/move-in-cleaning", name: "Move-In Cleaning", slug: "move-in-cleaning" },
  { path: "/services/apartment-cleaning", name: "Apartment Cleaning", slug: "apartment-cleaning" },
  { path: "/services/commercial-cleaning", name: "Commercial Cleaning", slug: "commercial-cleaning" },
  { path: "/services/office-cleaning", name: "Office Cleaning", slug: "office-cleaning" },
  { path: "/services/recurring-cleaning", name: "Recurring Cleaning", slug: "recurring-cleaning" },
  { path: "/services/airbnb-cleaning", name: "Airbnb Cleaning", slug: "airbnb-cleaning" },
  {
    path: "/services/post-construction-cleaning",
    name: "Post-Construction Cleaning",
    slug: "post-construction-cleaning",
  },
] as const;

/** First-party OG image (1200×630 recommended). */
export const DEFAULT_OG_IMAGE = "/images/gallery/sparkling-clean-kitchen-philadelphia.jpg";

/** ISO date for static pages in sitemap (update when site content changes). */
export const SITE_CONTENT_UPDATED = "2025-05-01";

/** Public profiles — add GBP URL above to sync with Google. */
export function getBusinessSameAs(): string[] {
  const links: string[] = [];
  if (BUSINESS.googleBusinessProfileUrl) {
    links.push(BUSINESS.googleBusinessProfileUrl);
  }
  return links;
}
