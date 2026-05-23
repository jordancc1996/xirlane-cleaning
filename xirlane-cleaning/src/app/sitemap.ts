import type { MetadataRoute } from "next";
import { SERVICE_ROUTES, SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified, changeFrequency: "weekly", priority: 1 },
    {
      url: `${SITE_URL}/services`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/faq`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/gallery`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${SITE_URL}/service-areas`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.85,
    },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = SERVICE_ROUTES.map(
    (service) => ({
      url: `${SITE_URL}${service.path}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    }),
  );

  return [...staticRoutes, ...serviceRoutes];
}
