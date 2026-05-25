import type { Metadata } from "next";
import { JsonLdGraph } from "@/components/seo/JsonLd";
import type { LocationFaqItem, LocationLandingConfig } from "@/lib/location-landing-pages";
import {
  breadcrumbSchema,
  faqPageSchema,
  locationServicesSchema,
  placeSchema,
  webPageSchema,
} from "@/lib/schema";
import { createPageMetadata } from "@/lib/seo";

export function buildLocationMetadata(location: LocationLandingConfig): Metadata {
  return createPageMetadata({
    title: location.meta.title,
    description: location.meta.description,
    path: location.path,
    keywords: [...location.meta.keywords],
    ogImageAlt: location.meta.ogImageAlt,
  });
}

function locationFaqSchema(faqs: LocationFaqItem[], path: string, pageName: string) {
  return faqPageSchema(
    faqs.map((faq) => ({ id: faq.id, question: faq.question, answer: faq.answer })),
    { path, pageName },
  );
}

export function LocationPageJsonLd({ location }: { location: LocationLandingConfig }) {
  return (
    <JsonLdGraph
      nodes={[
        breadcrumbSchema(
          [
            { name: "Home", path: "/" },
            { name: "Locations", path: "/locations" },
            { name: location.breadcrumbName, path: location.path },
          ],
          { pagePath: location.path },
        ),
        webPageSchema({
          path: location.path,
          name: location.meta.title,
          description: location.meta.description,
        }),
        placeSchema(location),
        locationServicesSchema(location),
        locationFaqSchema(
          location.faqs,
          location.path,
          `${location.neighborhoodName} Cleaning FAQ — Xirlane Cleaning`,
        ),
      ]}
    />
  );
}
