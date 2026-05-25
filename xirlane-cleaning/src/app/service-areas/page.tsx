import type { Metadata } from "next";
import Link from "next/link";
import FaqPreviewSection from "@/components/seo/FaqPreviewSection";
import PageKnowledgeBlock from "@/components/seo/PageKnowledgeBlock";
import QuoteCtaBand from "@/components/seo/QuoteCtaBand";
import { JsonLdGraph } from "@/components/seo/JsonLd";
import { PAGE_KNOWLEDGE } from "@/lib/ai-page-knowledge";
import LocalTrustSignals from "@/components/local/LocalTrustSignals";
import NapBlock from "@/components/local/NapBlock";
import ServiceAreaSection from "@/components/local/ServiceAreaSection";
import { LOCATION_NAV_LINKS } from "@/lib/location-landing-pages";
import { LOCAL_SERVICES } from "@/lib/local-services";
import { PAGE_SEO } from "@/lib/page-metadata";
import { createPageMetadata } from "@/lib/seo";
import { breadcrumbSchema, serviceAreasPageSchema } from "@/lib/schema";
import { BUSINESS } from "@/lib/site";

const meta = PAGE_SEO.serviceAreas;

export const metadata: Metadata = createPageMetadata({
  title: meta.title,
  description: meta.description,
  path: meta.path,
  keywords: [...meta.keywords],
  ogImageAlt: meta.ogImageAlt,
});

export default function ServiceAreasPage() {
  return (
    <main className="bg-background">
      <JsonLdGraph
        nodes={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Service Areas", path: "/service-areas" },
          ]),
          serviceAreasPageSchema(),
        ]}
      />
      <section className="section-spacing">
        <div className="site-container max-w-3xl">
          <p className="text-[11px] uppercase tracking-eyebrow text-accent">SERVICE AREAS</p>
          <h1 className="mt-4 text-h1-mobile md:text-h1">
            Cleaning Services in Philadelphia &amp; Surrounding Counties
          </h1>
          <p className="mt-4 text-text-body">
            Xirlane Cleaning is a Philadelphia-based cleaning company serving homeowners and
            businesses throughout Greater Philadelphia. We offer maid service, deep cleaning,
            commercial cleaning, and move-out cleaning with one-time and recurring scheduling.
          </p>
        </div>
      </section>

      <LocalTrustSignals />

      <section className="section-spacing">
        <div className="site-container max-w-3xl">
          <h2 className="text-h2-mobile text-text-primary md:text-h2">
            Philadelphia neighborhood cleaning pages
          </h2>
          <p className="mt-4 text-text-body">
            Localized pages describe property types, services, and booking details for popular
            areas. Each page links to relevant house, apartment, and commercial cleaning services.
          </p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {LOCATION_NAV_LINKS.map((loc) => (
              <li key={loc.href}>
                <Link
                  href={loc.href}
                  className="block border border-border-light bg-white p-5 hover:border-accent"
                >
                  <span className="text-[15px] font-medium text-text-primary">{loc.label}</span>
                  <span className="mt-2 block text-[12px] uppercase tracking-widest text-text-body/70">
                    Local cleaning page &rarr;
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-[14px] text-text-body">
            <Link href="/locations" className="text-accent hover:underline">
              Browse all neighborhood pages
            </Link>
          </p>
        </div>
      </section>

      <section className="section-spacing bg-section-alt-bg">
        <div className="site-container max-w-3xl">
          <h2 className="text-h2-mobile text-text-primary md:text-h2">
            Local cleaning services we provide
          </h2>
          <p className="mt-4 text-text-body">
            Each service is available across our full service area. Select a service to learn
            what is included and request a quote.
          </p>
          <ul className="mt-8 space-y-6">
            {Object.entries(LOCAL_SERVICES)
              .filter(([key]) => key !== "cleaningServices")
              .map(([key, service]) => (
              <li key={key} className="border border-border-light bg-white p-6">
                <h3 className="text-h3-mobile text-text-primary md:text-h3">
                  <Link href={service.path} className="hover:text-accent">
                    {service.localName}
                  </Link>
                </h3>
                <p className="mt-3 text-text-body">{service.description}</p>
                <Link
                  href={service.path}
                  className="mt-4 inline-block text-[12px] uppercase tracking-widest text-text-primary hover:text-accent"
                >
                  Learn more &rarr;
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ServiceAreaSection />

      <section className="section-spacing">
        <div className="site-container max-w-3xl">
          <h2 className="text-h2-mobile text-text-primary md:text-h2">Contact &amp; NAP</h2>
          <p className="mt-4 text-text-body">
            Use the same business name, phone, and email on your Google Business Profile and
            when you contact us — consistent details help Google match your website to your
            Maps listing.
          </p>
          <div className="mt-6">
            <NapBlock />
          </div>
          <p className="mt-6 text-[14px] text-text-body">
            Hours: Mon–Fri {BUSINESS.openingHours[0].opens}–{BUSINESS.openingHours[0].closes},{" "}
            Sat {BUSINESS.openingHours[1].opens}–{BUSINESS.openingHours[1].closes}.{" "}
            <Link href="/contact" className="text-accent hover:underline">
              Request a quote
            </Link>
            .
          </p>
        </div>
      </section>

      <PageKnowledgeBlock knowledge={PAGE_KNOWLEDGE.serviceAreas} />

      <FaqPreviewSection
        setKey="serviceAreas"
        heading="Service Area FAQ"
        intro="Questions about where we clean, maid service coverage, and getting a quote in the Philadelphia metro."
        ctaPreset="freeQuote"
      />
      <QuoteCtaBand
        preset="bookCleaning"
        heading="Request Cleaning in Your Neighborhood"
        body="We serve Philadelphia and Montgomery, Delaware, Chester, and Bucks counties with house, commercial, and deep cleaning."
      />
    </main>
  );
}
