import type { BlogCategorySlug } from "./blog-categories";

export type BlogFaqItem = {
  id: string;
  question: string;
  answer: string;
};

export type BlogSection = {
  id: string;
  heading: string;
  level: 2 | 3;
  paragraphs: string[];
};

export type BlogInternalLink = {
  href: string;
  label: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  publishedAt: string;
  updatedAt?: string;
  categorySlug: BlogCategorySlug;
  featuredImage: string;
  featuredImageAlt: string;
  sections: BlogSection[];
  faqs: BlogFaqItem[];
  relatedPostSlugs: string[];
  relatedServicePaths: string[];
  relatedLocationPaths?: string[];
  internalLinks: BlogInternalLink[];
  keywords: string[];
};
