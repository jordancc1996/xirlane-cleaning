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
  { path: "/services/home-cleaning", name: "Home Cleaning", slug: "home-cleaning" },
  { path: "/services/commercial-cleaning", name: "Commercial Cleaning", slug: "commercial-cleaning" },
  { path: "/services/post-construction", name: "Post-Construction Cleaning", slug: "post-construction" },
  { path: "/services/deep-cleaning", name: "Deep Cleaning", slug: "deep-cleaning" },
] as const;

export const DEFAULT_OG_IMAGE =
  "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200&h=630&fit=crop";

/** Public profiles — add GBP URL above to sync with Google. */
export function getBusinessSameAs(): string[] {
  const links: string[] = [];
  if (BUSINESS.googleBusinessProfileUrl) {
    links.push(BUSINESS.googleBusinessProfileUrl);
  }
  return links;
}
