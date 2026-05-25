import type { MetadataRoute } from "next";
import {
  blogPostUrl,
  getAllPostSlugs,
  getCategorySlugsForRoutes,
  getPostBySlug,
} from "@/lib/blog";
import { categoryUrl } from "@/lib/blog-categories";
import { getAllLocationSlugs } from "@/lib/location-landing-pages";
import { SERVICE_ROUTES, SITE_CONTENT_UPDATED, SITE_URL } from "@/lib/site";

function parseContentDate(isoDate: string): Date {
  return new Date(`${isoDate}T12:00:00.000Z`);
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticLastModified = parseContentDate(SITE_CONTENT_UPDATED);

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: staticLastModified, changeFrequency: "weekly", priority: 1 },
    {
      url: `${SITE_URL}/services`,
      lastModified: staticLastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: staticLastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/faq`,
      lastModified: staticLastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/gallery`,
      lastModified: staticLastModified,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${SITE_URL}/service-areas`,
      lastModified: staticLastModified,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: staticLastModified,
      changeFrequency: "weekly",
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/locations`,
      lastModified: staticLastModified,
      changeFrequency: "monthly",
      priority: 0.82,
    },
  ];

  const locationRoutes: MetadataRoute.Sitemap = getAllLocationSlugs().map((slug) => ({
    url: `${SITE_URL}/locations/${slug}`,
    lastModified: staticLastModified,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const serviceRoutes: MetadataRoute.Sitemap = SERVICE_ROUTES.map((service) => ({
    url: `${SITE_URL}${service.path}`,
    lastModified: staticLastModified,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  const blogPostRoutes: MetadataRoute.Sitemap = getAllPostSlugs().map((slug) => {
    const post = getPostBySlug(slug);
    const date = post?.updatedAt ?? post?.publishedAt ?? SITE_CONTENT_UPDATED;
    return {
      url: `${SITE_URL}${blogPostUrl(slug)}`,
      lastModified: parseContentDate(date),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    };
  });

  const blogCategoryRoutes: MetadataRoute.Sitemap = getCategorySlugsForRoutes().map((slug) => ({
    url: `${SITE_URL}${categoryUrl(slug)}`,
    lastModified: staticLastModified,
    changeFrequency: "weekly" as const,
    priority: 0.65,
  }));

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...locationRoutes,
    ...blogPostRoutes,
    ...blogCategoryRoutes,
  ];
}
