import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/ui/Button";
import FaqPreviewSection from "@/components/seo/FaqPreviewSection";
import QuoteCtaBand from "@/components/seo/QuoteCtaBand";
import SiteHubLinks from "@/components/seo/SiteHubLinks";
import PageKnowledgeBlock from "@/components/seo/PageKnowledgeBlock";
import { JsonLdGraph } from "@/components/seo/JsonLd";
import { PAGE_KNOWLEDGE } from "@/lib/ai-page-knowledge";
import NapBlock from "@/components/local/NapBlock";
import { BUSINESS } from "@/lib/site";
import { PAGE_SEO } from "@/lib/page-metadata";
import { breadcrumbSchema, contactPageSchema } from "@/lib/schema";
import { createPageMetadata } from "@/lib/seo";

const meta = PAGE_SEO.contact;

export const metadata: Metadata = createPageMetadata({
  title: meta.title,
  description: meta.description,
  path: meta.path,
  keywords: [...meta.keywords],
  ogImageAlt: meta.ogImageAlt,
});

export default function ContactPage() {
  return (
    <main className="section-spacing bg-background">
      <JsonLdGraph
        nodes={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
          contactPageSchema(),
        ]}
      />
      <div className="site-container">
        <p className="text-[11px] uppercase tracking-eyebrow text-accent">CONTACT</p>
        <h1 className="mt-4 text-h1-mobile md:text-h1">Get Your Free Cleaning Quote</h1>
        <p className="mt-4 max-w-2xl text-text-body">
          Tell us about your home or business cleaning needs. We serve Philadelphia,
          Montgomery County, Delaware County, Chester County, and Bucks County with
          one-time and recurring service.
        </p>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <section aria-labelledby="contact-methods-heading">
            <h2 id="contact-methods-heading" className="text-h2-mobile md:text-h2">
              Contact Xirlane Cleaning
            </h2>
            <div className="mt-6">
              <NapBlock />
            </div>
            <p className="mt-4 text-[14px] text-text-body">
              <strong className="text-text-primary">Service area:</strong>{" "}
              {BUSINESS.serviceAreas.join("; ")}.{" "}
              <Link href="/service-areas" className="text-accent hover:underline">
                View service areas
              </Link>
            </p>
            <p className="mt-6 text-text-body">
              For faster scheduling, include your property type, square footage,
              preferred frequency, and any add-ons such as oven, fridge, or interior
              window cleaning.
            </p>
          </section>

          <section
            className="border border-border-light bg-section-alt-bg p-8"
            aria-labelledby="quote-cta-heading"
          >
            <h2 id="quote-cta-heading" className="text-h3-mobile md:text-h3">
              Request a quote
            </h2>
            <p className="mt-3 text-text-body">
              We respond to quote requests during business hours. Insured, bonded,
              and satisfaction guaranteed.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Button href={`mailto:${BUSINESS.email}`}>EMAIL FOR A QUOTE &rarr;</Button>
              <Button href={`tel:${BUSINESS.phone}`} variant="ghost">
                CALL {BUSINESS.phoneDisplay}
              </Button>
            </div>
            <p className="mt-6 text-[13px] text-text-body/80">
              Explore services:{" "}
              <Link href="/services/house-cleaning" className="text-accent hover:underline">
                Home Cleaning
              </Link>
              ,{" "}
              <Link
                href="/services/commercial-cleaning"
                className="text-accent hover:underline"
              >
                Commercial
              </Link>
              ,{" "}
              <Link
                href="/services/deep-cleaning"
                className="text-accent hover:underline"
              >
                Deep Cleaning
              </Link>
              ,{" "}
              <Link
                href="/services/post-construction-cleaning"
                className="text-accent hover:underline"
              >
                Post-Construction
              </Link>
              .
            </p>
          </section>
        </div>
      </div>
      <FaqPreviewSection
        setKey="contact"
        heading="Before You Request a Quote"
        intro="Common questions about pricing, supplies, insurance, and how we schedule cleans in Greater Philadelphia."
        className="bg-section-alt-bg py-16 md:py-20"
        ctaPreset="contact"
      />
      <PageKnowledgeBlock knowledge={PAGE_KNOWLEDGE.contact} />
      <SiteHubLinks heading="Explore services and neighborhoods" />
      <QuoteCtaBand
        preset="freeQuote"
        heading="Request Your Free Cleaning Quote"
        body="Share your address, property type, and preferred schedule. We serve Philadelphia and Montgomery, Delaware, Chester, and Bucks counties."
      />
    </main>
  );
}
