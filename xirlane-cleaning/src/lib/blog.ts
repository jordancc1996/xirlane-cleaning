import type { BlogCategorySlug } from "./blog-categories";
import { categoryUrl, getCategorySlugsForRoutes } from "./blog-categories";
import type { BlogPost } from "./blog-types";
import { BLOG_POSTS_DATA } from "./blog-posts-data";
import { sortPostsByDate } from "./blog-utils";
import { SITE_URL } from "./site";

export type { BlogPost, BlogSection, BlogFaqItem, BlogInternalLink } from "./blog-types";
export {
  BLOG_CATEGORIES,
  BLOG_CATEGORY_LIST,
  CATEGORY_SERVICE_PATHS,
  categoryUrl,
  getCategoryBySlug,
  getCategorySlugsForRoutes,
} from "./blog-categories";
export type { BlogCategorySlug } from "./blog-categories";
export { BLOG_AUTHOR } from "./blog-author";
export {
  estimateReadingTime,
  formatPostDate,
  getTocItems,
  sortPostsByDate,
} from "./blog-utils";

export const BLOG_INDEX_PATH = "/blog";

export const BLOG_POSTS: BlogPost[] = sortPostsByDate(BLOG_POSTS_DATA);

const BY_SLUG = Object.fromEntries(BLOG_POSTS.map((p) => [p.slug, p])) as Record<string, BlogPost>;

export function blogPostUrl(slug: string): string {
  return `${BLOG_INDEX_PATH}/${slug}`;
}

export function blogPostAbsoluteUrl(slug: string): string {
  return `${SITE_URL}${blogPostUrl(slug)}`;
}

export function getAllPostSlugs(): string[] {
  return BLOG_POSTS.map((p) => p.slug);
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BY_SLUG[slug];
}

export function getPostsByCategory(categorySlug: BlogCategorySlug): BlogPost[] {
  return BLOG_POSTS.filter((p) => p.categorySlug === categorySlug);
}

export function getRelatedPosts(slugs: string[]): BlogPost[] {
  return slugs.map((s) => BY_SLUG[s]).filter((p): p is BlogPost => Boolean(p));
}

export const BLOG_DEFAULT_SERVICE_LINKS = [
  { href: "/services/house-cleaning", label: "House cleaning" },
  { href: "/services/deep-cleaning", label: "Deep cleaning" },
  { href: "/services/commercial-cleaning", label: "Commercial cleaning" },
  { href: "/services/move-out-cleaning", label: "Move-out cleaning" },
  { href: "/services/airbnb-cleaning", label: "Airbnb cleaning" },
] as const;
