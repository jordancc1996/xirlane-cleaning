import type { Metadata } from "next";
import FaqPreviewSection from "@/components/seo/FaqPreviewSection";
import { JsonLdGraph } from "@/components/seo/JsonLd";
import { PAGE_KNOWLEDGE } from "@/lib/ai-page-knowledge";
import { PAGE_SEO } from "@/lib/page-metadata";
import { breadcrumbSchema, servicesItemListSchema, webPageSchema } from "@/lib/schema";
import { createPageMetadata } from "@/lib/seo";
import ServiceAreaSection from "@/components/local/ServiceAreaSection";
import ServicesPageContent from "./ServicesPageContent";

const meta = PAGE_SEO.services;

export const metadata: Metadata = createPageMetadata({
  title: meta.title,
  description: meta.description,
  path: meta.path,
  keywords: [...meta.keywords],
  ogImageAlt: meta.ogImageAlt,
});

export default function ServicesPage() {
  return (
    <>
      <JsonLdGraph
        nodes={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
          ]),
          webPageSchema({
            path: meta.path,
            name: meta.title,
            description: meta.description,
          }),
          servicesItemListSchema(),
        ]}
      />
      <ServicesPageContent knowledge={PAGE_KNOWLEDGE.services} />
      <FaqPreviewSection
        setKey="servicesHub"
        heading="Cleaning Services FAQ"
        intro="Compare house, commercial, deep, and move-out cleaning options for Philadelphia and surrounding counties."
        className="bg-section-alt-bg py-16 md:py-20"
        ctaPreset="faqFollowUp"
      />
      <ServiceAreaSection highlight="cleaningServices" />
    </>
  );
}
