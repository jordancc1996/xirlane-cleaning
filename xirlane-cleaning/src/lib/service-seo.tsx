import type { Metadata } from "next";
import PageKnowledgeBlock from "@/components/seo/PageKnowledgeBlock";
import { JsonLdGraph } from "@/components/seo/JsonLd";
import { getServicePageKnowledge } from "@/lib/ai-page-knowledge";
import { PAGE_SEO, type PageSeoKey } from "@/lib/page-metadata";
import { breadcrumbSchema, serviceSchema, webPageSchema } from "@/lib/schema";
import { createPageMetadata } from "@/lib/seo";

const SERVICE_META_KEYS: Record<string, PageSeoKey> = {
  "/services/home-cleaning": "homeCleaning",
  "/services/commercial-cleaning": "commercialCleaning",
  "/services/deep-cleaning": "deepCleaning",
  "/services/post-construction": "postConstruction",
};

export function buildServiceMetadata(path: string): Metadata {
  const key = SERVICE_META_KEYS[path];
  const config = key ? PAGE_SEO[key] : null;

  if (!config) {
    throw new Error(`No PAGE_SEO config for service path: ${path}`);
  }

  return createPageMetadata({
    title: config.title,
    description: config.description,
    path: config.path,
    keywords: [...config.keywords],
    ogImageAlt: config.ogImageAlt,
  });
}

export function ServicePageJsonLd({
  path,
  breadcrumbName,
}: {
  path: string;
  breadcrumbName: string;
}) {
  const key = SERVICE_META_KEYS[path];
  const config = key ? PAGE_SEO[key] : null;

  return (
    <JsonLdGraph
      nodes={[
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: breadcrumbName, path },
        ]),
        serviceSchema(path),
        webPageSchema({
          path,
          name: breadcrumbName,
          description: config?.description ?? `${breadcrumbName} in Philadelphia, PA.`,
        }),
      ]}
    />
  );
}

export function ServicePageKnowledge({ path }: { path: string }) {
  const knowledge = getServicePageKnowledge(path);
  if (!knowledge) return null;
  return <PageKnowledgeBlock knowledge={knowledge} />;
}
