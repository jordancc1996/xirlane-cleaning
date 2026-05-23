import type { Metadata } from "next";
import Link from "next/link";
import PageKnowledgeBlock from "@/components/seo/PageKnowledgeBlock";
import { JsonLdGraph } from "@/components/seo/JsonLd";
import { PAGE_KNOWLEDGE } from "@/lib/ai-page-knowledge";
import LocalTrustSignals from "@/components/local/LocalTrustSignals";
import NapBlock from "@/components/local/NapBlock";
import ServiceAreaSection from "@/components/local/ServiceAreaSection";
import { LOCAL_SERVICES } from "@/lib/local-services";
import { createPageMetadata } from "@/lib/seo";
import { breadcrumbSchema, serviceAreasPageSchema } from "@/lib/schema";
import { BUSINESS } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Cleaning Service Areas Philadelphia | 5 Counties",
  description:
    "Xirlane Cleaning serves Philadelphia, Montgomery, Delaware, Chester & Bucks counties. Maid service, deep cleaning, commercial & move-out cleaning. Free quotes.",
  path: "/service-areas",
  keywords: [
    "cleaning services Philadelphia",
    "maid service Philadelphia area",
    "house cleaning near me Philadelphia",
    "commercial cleaning Montgomery County",
  ],
  ogImageAlt: "Greater Philadelphia cleaning service areas map",
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
      <PageKnowledgeBlock knowledge={PAGE_KNOWLEDGE.serviceAreas} />

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
            {Object.entries(LOCAL_SERVICES).map(([key, service]) => (
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
    </main>
  );
}
