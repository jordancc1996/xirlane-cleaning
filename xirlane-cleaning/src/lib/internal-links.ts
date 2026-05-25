import { BLOG_CATEGORY_LIST, categoryUrl, type BlogCategorySlug } from "./blog-categories";
import { BLOG_POSTS, blogPostUrl, getPostsByCategory, getRelatedPosts } from "./blog";
import {
  getAllLocationSlugs,
  getLocationBySlug,
  LOCATION_NAV_LINKS,
} from "./location-landing-pages";
import { SEO_LANDING_PAGES } from "./seo-landing-pages";

export type InternalLinkItem = {
  href: string;
  label: string;
  description?: string;
};

/** Service slug → neighborhood slugs for contextual local links */
const SERVICE_TO_LOCATION_SLUGS: Record<string, string[]> = {
  "house-cleaning": [
    "center-city-philadelphia",
    "rittenhouse-square",
    "main-line",
    "south-philadelphia",
  ],
  "deep-cleaning": ["center-city-philadelphia", "fishtown", "rittenhouse-square", "main-line"],
  "move-out-cleaning": ["university-city", "south-philadelphia", "fishtown", "center-city-philadelphia"],
  "move-in-cleaning": ["university-city", "center-city-philadelphia", "main-line", "old-city"],
  "apartment-cleaning": [
    "center-city-philadelphia",
    "university-city",
    "rittenhouse-square",
    "northern-liberties",
  ],
  "commercial-cleaning": ["center-city-philadelphia", "rittenhouse-square", "old-city"],
  "office-cleaning": ["center-city-philadelphia", "rittenhouse-square", "university-city"],
  "recurring-cleaning": ["main-line", "south-philadelphia", "center-city-philadelphia", "rittenhouse-square"],
  "airbnb-cleaning": ["fishtown", "old-city", "northern-liberties", "center-city-philadelphia"],
  "post-construction-cleaning": ["fishtown", "old-city", "northern-liberties", "university-city"],
};

/** Service slug → blog article slugs */
const SERVICE_TO_BLOG_SLUGS: Record<string, string[]> = {
  "house-cleaning": ["eco-friendly-cleaning-products-safe-homes", "apartment-cleaning-schedule-philly-renters"],
  "deep-cleaning": ["when-to-book-deep-cleaning-philadelphia", "eco-friendly-cleaning-products-safe-homes"],
  "move-out-cleaning": ["move-out-cleaning-checklist-philadelphia", "apartment-cleaning-schedule-philly-renters"],
  "move-in-cleaning": ["when-to-book-deep-cleaning-philadelphia", "move-out-cleaning-checklist-philadelphia"],
  "apartment-cleaning": ["apartment-cleaning-schedule-philly-renters", "move-out-cleaning-checklist-philadelphia"],
  "commercial-cleaning": ["office-cleaning-frequency-philadelphia"],
  "office-cleaning": ["office-cleaning-frequency-philadelphia"],
  "recurring-cleaning": ["apartment-cleaning-schedule-philly-renters", "eco-friendly-cleaning-products-safe-homes"],
  "airbnb-cleaning": ["airbnb-turnover-cleaning-philadelphia-hosts", "philadelphia-neighborhood-cleaning-guide"],
  "post-construction-cleaning": [
    "when-to-book-deep-cleaning-philadelphia",
    "philadelphia-neighborhood-cleaning-guide",
  ],
};

/** Location slug → blog article slugs */
const LOCATION_TO_BLOG_SLUGS: Record<string, string[]> = {
  "center-city-philadelphia": [
    "philadelphia-neighborhood-cleaning-guide",
    "apartment-cleaning-schedule-philly-renters",
    "office-cleaning-frequency-philadelphia",
  ],
  fishtown: ["airbnb-turnover-cleaning-philadelphia-hosts", "move-out-cleaning-checklist-philadelphia"],
  "northern-liberties": ["when-to-book-deep-cleaning-philadelphia", "airbnb-turnover-cleaning-philadelphia-hosts"],
  "south-philadelphia": ["move-out-cleaning-checklist-philadelphia", "eco-friendly-cleaning-products-safe-homes"],
  "main-line": ["when-to-book-deep-cleaning-philadelphia", "eco-friendly-cleaning-products-safe-homes"],
  "rittenhouse-square": ["apartment-cleaning-schedule-philly-renters", "when-to-book-deep-cleaning-philadelphia"],
  "old-city": ["airbnb-turnover-cleaning-philadelphia-hosts", "when-to-book-deep-cleaning-philadelphia"],
  "university-city": ["move-out-cleaning-checklist-philadelphia", "apartment-cleaning-schedule-philly-renters"],
};

/** Blog category → top service paths */
const CATEGORY_TO_SERVICES: Record<BlogCategorySlug, string[]> = {
  "deep-cleaning": ["/services/deep-cleaning", "/services/house-cleaning"],
  "move-out-cleaning": ["/services/move-out-cleaning", "/services/apartment-cleaning"],
  "apartment-cleaning": ["/services/apartment-cleaning", "/services/recurring-cleaning"],
  "commercial-cleaning": ["/services/commercial-cleaning", "/services/office-cleaning"],
  "local-philadelphia-cleaning": ["/services/house-cleaning", "/locations"],
  "cleaning-tips": ["/services/house-cleaning", "/services/deep-cleaning"],
  "airbnb-cleaning": ["/services/airbnb-cleaning", "/services/apartment-cleaning"],
};

export function serviceSlugFromPath(path: string): string {
  return path.replace(/^\/services\//, "");
}

export function locationSlugFromPath(path: string): string {
  return path.replace(/^\/locations\//, "");
}

export function getLocationLinksForService(servicePath: string): InternalLinkItem[] {
  const slug = serviceSlugFromPath(servicePath);
  const locationSlugs = SERVICE_TO_LOCATION_SLUGS[slug] ?? [];
  const items: InternalLinkItem[] = [];
  for (const locSlug of locationSlugs) {
    const loc = getLocationBySlug(locSlug);
    if (!loc) continue;
    items.push({
      href: loc.path,
      label: loc.neighborhoodName,
      description: loc.introParagraphs[0].slice(0, 120) + "…",
    });
  }
  return items;
}

export function getBlogLinksForService(servicePath: string): InternalLinkItem[] {
  const slug = serviceSlugFromPath(servicePath);
  const postSlugs = SERVICE_TO_BLOG_SLUGS[slug] ?? [];
  return getRelatedPosts(postSlugs).map((post) => ({
    href: blogPostUrl(post.slug),
    label: post.title,
    description: post.excerpt,
  }));
}

export function getBlogLinksForLocation(locationPath: string): InternalLinkItem[] {
  const slug = locationSlugFromPath(locationPath);
  const postSlugs = LOCATION_TO_BLOG_SLUGS[slug] ?? [];
  return getRelatedPosts(postSlugs).map((post) => ({
    href: blogPostUrl(post.slug),
    label: post.title,
    description: post.excerpt,
  }));
}

export function getLocationLinksFromPaths(paths: string[]): InternalLinkItem[] {
  const items: InternalLinkItem[] = [];
  for (const path of paths) {
    const slug = locationSlugFromPath(path);
    const loc = getLocationBySlug(slug);
    if (!loc) continue;
    items.push({ href: loc.path, label: loc.neighborhoodName });
  }
  return items;
}

export function getServiceLinksFromPaths(paths: string[]): InternalLinkItem[] {
  const items: InternalLinkItem[] = [];
  for (const path of paths) {
    const page = SEO_LANDING_PAGES.find((p) => p.path === path);
    if (!page) continue;
    items.push({
      href: page.path,
      label: page.breadcrumbName,
      description: page.meta.description.slice(0, 100) + "…",
    });
  }
  return items;
}

/** Hub links for utility pages (FAQ, contact, gallery) — max crawl depth 2 */
export const SITE_HUB_LINKS: InternalLinkItem[] = [
  { href: "/services", label: "All cleaning services", description: "Compare house, commercial, deep, and specialty cleaning." },
  { href: "/locations", label: "Philadelphia neighborhoods", description: "Local pages for Center City, Fishtown, University City, and more." },
  { href: "/service-areas", label: "County service areas", description: "Philadelphia and five surrounding PA counties." },
  { href: "/blog", label: "Cleaning guides & tips", description: "Articles on deep cleaning, move-out, Airbnb, and local advice." },
  { href: "/gallery", label: "Cleaning results gallery", description: "Photos from residential and commercial work." },
  { href: "/contact", label: "Free cleaning quote", description: "Request a quote for your home or business." },
];

/** Primary navigation destinations for footer “Explore” */
export const FOOTER_EXPLORE_LINKS: InternalLinkItem[] = [
  { href: "/services/house-cleaning", label: "House cleaning" },
  { href: "/services/deep-cleaning", label: "Deep cleaning" },
  { href: "/services/commercial-cleaning", label: "Commercial cleaning" },
  { href: "/locations/center-city-philadelphia", label: "Center City" },
  { href: "/locations/fishtown", label: "Fishtown" },
  { href: "/blog/category/deep-cleaning", label: "Deep cleaning articles" },
  { href: "/blog/category/move-out-cleaning", label: "Move-out guides" },
];

/** All indexable paths for orphan detection (dev/reference) */
export function getAllIndexablePaths(): string[] {
  const staticPages = ["/", "/services", "/contact", "/faq", "/gallery", "/service-areas", "/blog", "/locations"];
  const services = SEO_LANDING_PAGES.map((p) => p.path);
  const locations = getAllLocationSlugs().map((s) => `/locations/${s}`);
  const posts = BLOG_POSTS.map((p) => blogPostUrl(p.slug));
  const categories = BLOG_CATEGORY_LIST.map((c) => categoryUrl(c.slug));
  return [...staticPages, ...services, ...locations, ...posts, ...categories];
}

export function getCategoryServiceLinks(categorySlug: BlogCategorySlug): InternalLinkItem[] {
  const paths = CATEGORY_TO_SERVICES[categorySlug] ?? ["/services"];
  return getServiceLinksFromPaths(paths);
}

export function getPostsForCategoryPreview(categorySlug: BlogCategorySlug, limit = 3) {
  return getPostsByCategory(categorySlug).slice(0, limit);
}

export { LOCATION_NAV_LINKS };
