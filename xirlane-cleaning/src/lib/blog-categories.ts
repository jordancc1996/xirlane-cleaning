export const BLOG_CATEGORIES = {
  "deep-cleaning": {
    slug: "deep-cleaning",
    name: "Deep Cleaning",
    description:
      "Guides on intensive deep cleaning, seasonal resets, and first-visit preparation for Philadelphia homes and offices.",
    metaTitle: "Deep Cleaning Articles Philadelphia",
    metaDescription:
      "Deep cleaning tips, checklists, and Philadelphia-specific advice from Xirlane Cleaning. Learn when to book a top-to-bottom reset.",
  },
  "move-out-cleaning": {
    slug: "move-out-cleaning",
    name: "Move Out Cleaning",
    description:
      "Move-out cleaning timelines, landlord checklists, and deposit-ready strategies for Philadelphia renters and homeowners.",
    metaTitle: "Move-Out Cleaning Guides Philadelphia",
    metaDescription:
      "Move-out cleaning checklists and Philadelphia rental advice. Get your unit inspection-ready with professional cleaning tips.",
  },
  "apartment-cleaning": {
    slug: "apartment-cleaning",
    name: "Apartment Cleaning",
    description:
      "Apartment and condo cleaning advice for Philly studios, high-rises, and walk-ups with efficient recurring plans.",
    metaTitle: "Apartment Cleaning Tips Philadelphia",
    metaDescription:
      "Apartment cleaning schedules, scope, and Philadelphia building access tips for renters and condo owners.",
  },
  "commercial-cleaning": {
    slug: "commercial-cleaning",
    name: "Commercial Cleaning",
    description:
      "Office and workplace cleaning best practices for Philadelphia businesses, retail, and shared workspaces.",
    metaTitle: "Commercial Cleaning Articles Philadelphia",
    metaDescription:
      "Commercial and office cleaning guidance for Philadelphia workplaces. Scheduling, scope, and janitorial standards.",
  },
  "local-philadelphia-cleaning": {
    slug: "local-philadelphia-cleaning",
    name: "Local Philadelphia Cleaning",
    description:
      "Neighborhood-focused cleaning insights for Center City, Fishtown, University City, the Main Line, and surrounding areas.",
    metaTitle: "Philadelphia Local Cleaning Guides",
    metaDescription:
      "Local Philadelphia cleaning articles by neighborhood and service area. House cleaning near you in Greater Philadelphia.",
  },
  "cleaning-tips": {
    slug: "cleaning-tips",
    name: "Cleaning Tips",
    description:
      "Everyday cleaning tips, product choices, and maintenance habits for healthier Philadelphia homes.",
    metaTitle: "House Cleaning Tips Philadelphia",
    metaDescription:
      "Practical cleaning tips for Philadelphia homeowners and renters. Supplies, habits, and when to hire professionals.",
  },
  "airbnb-cleaning": {
    slug: "airbnb-cleaning",
    name: "Airbnb Cleaning",
    description:
      "Short-term rental turnover cleaning, host checklists, and fast reset strategies for Philadelphia STR properties.",
    metaTitle: "Airbnb Cleaning Guides Philadelphia",
    metaDescription:
      "Airbnb and vacation rental turnover cleaning in Philadelphia. Host checklists, timing, and guest-ready standards.",
  },
} as const;

export type BlogCategorySlug = keyof typeof BLOG_CATEGORIES;

export const BLOG_CATEGORY_LIST = Object.values(BLOG_CATEGORIES);

export function getCategoryBySlug(slug: string) {
  return BLOG_CATEGORIES[slug as BlogCategorySlug];
}

export function categoryUrl(slug: BlogCategorySlug): string {
  return `/blog/category/${slug}`;
}

/** Primary service page linked from each blog category. */
export const CATEGORY_SERVICE_PATHS: Record<BlogCategorySlug, string> = {
  "deep-cleaning": "/services/deep-cleaning",
  "move-out-cleaning": "/services/move-out-cleaning",
  "apartment-cleaning": "/services/apartment-cleaning",
  "commercial-cleaning": "/services/commercial-cleaning",
  "local-philadelphia-cleaning": "/locations",
  "cleaning-tips": "/services/house-cleaning",
  "airbnb-cleaning": "/services/airbnb-cleaning",
};

export function getCategorySlugsForRoutes(): BlogCategorySlug[] {
  return Object.keys(BLOG_CATEGORIES) as BlogCategorySlug[];
}
