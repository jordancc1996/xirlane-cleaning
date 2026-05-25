import type { Metadata } from "next";
import GalleryCta from "@/components/gallery/GalleryCta";
import ConversionCta from "@/components/seo/ConversionCta";
import FaqPreviewSection from "@/components/seo/FaqPreviewSection";
import SiteHubLinks from "@/components/seo/SiteHubLinks";
import GalleryHero from "@/components/gallery/GalleryHero";
import GalleryLightboxHost from "@/components/gallery/GalleryLightboxHost";
import GalleryPageSections from "@/components/gallery/GalleryPageSections";
import PageKnowledgeBlock from "@/components/seo/PageKnowledgeBlock";
import { JsonLdGraph } from "@/components/seo/JsonLd";
import { PAGE_KNOWLEDGE } from "@/lib/ai-page-knowledge";
import { GALLERY_IMAGES } from "@/lib/gallery-images";
import { PAGE_SEO } from "@/lib/page-metadata";
import {
  breadcrumbSchema,
  galleryImageGallerySchema,
  webPageSchema,
} from "@/lib/schema";
import { createPageMetadata } from "@/lib/seo";

const meta = PAGE_SEO.gallery;

export const metadata: Metadata = createPageMetadata({
  title: meta.title,
  description: meta.description,
  path: meta.path,
  keywords: [...meta.keywords],
  ogImageAlt: meta.ogImageAlt,
  ogImage: meta.ogImage,
});

export default function GalleryPage() {
  return (
    <main className="bg-background">
      <JsonLdGraph
        nodes={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Gallery", path: "/gallery" },
          ]),
          webPageSchema({
            path: meta.path,
            name: meta.title,
            description: meta.description,
            pageType: "CollectionPage",
          }),
          galleryImageGallerySchema(GALLERY_IMAGES),
        ]}
      />
      <GalleryHero />
      <PageKnowledgeBlock knowledge={PAGE_KNOWLEDGE.gallery} />
      <GalleryPageSections />
      <ConversionCta
        preset="gallery"
        variant="compact"
        className="bg-background"
        id="gallery-mid-cta"
      />
      <FaqPreviewSection
        setKey="gallery"
        heading="Gallery & Cleaning FAQ"
        intro="Questions about the types of cleaning work shown and how to book similar service in Greater Philadelphia."
        className="bg-section-alt-bg py-16 md:py-20"
      />
      <SiteHubLinks heading="Book cleaning like what you see" />
      <GalleryCta />
      <GalleryLightboxHost />
    </main>
  );
}
