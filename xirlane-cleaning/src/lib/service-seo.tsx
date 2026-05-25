import type { Metadata } from "next";
import { JsonLdGraph } from "@/components/seo/JsonLd";
import { getFaqsBySet } from "@/lib/faq-sets";
import type { SeoLandingPageConfig } from "@/lib/seo-landing-pages";
import { getLandingByPath } from "@/lib/seo-landing-pages";
import { breadcrumbSchema, faqPageSchema, serviceSchema, webPageSchema } from "@/lib/schema";
import { createPageMetadata } from "@/lib/seo";

export function buildLandingMetadata(page: SeoLandingPageConfig): Metadata {
  return createPageMetadata({
    title: page.meta.title,
    description: page.meta.description,
    path: page.path,
    keywords: [...page.meta.keywords],
    ogImageAlt: page.meta.ogImageAlt,
  });
}

export function LandingPageJsonLd({ page }: { page: SeoLandingPageConfig }) {
  const faqNodes = [
    faqPageSchema(getFaqsBySet(page.faqSetKey), {
      path: page.path,
      pageName: `${page.breadcrumbName} FAQ — Xirlane Cleaning`,
    }),
  ];

  return (
    <JsonLdGraph
      nodes={[
        breadcrumbSchema(
          [
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: page.breadcrumbName, path: page.path },
          ],
          { pagePath: page.path },
        ),
        serviceSchema(page.path),
        webPageSchema({
          path: page.path,
          name: page.meta.title,
          description: page.meta.description,
        }),
        ...faqNodes,
      ]}
    />
  );
}

export function buildServiceMetadata(path: string): Metadata {
  const page = getLandingByPath(path);
  if (!page) {
    throw new Error(`No landing page config for path: ${path}`);
  }
  return buildLandingMetadata(page);
}
