import type { Metadata } from "next";
import FaqPreviewSection from "@/components/seo/FaqPreviewSection";
import { JsonLdGraph } from "@/components/seo/JsonLd";
import PageKnowledgeBlock from "@/components/seo/PageKnowledgeBlock";
import ConversionCta from "@/components/seo/ConversionCta";
import QuoteCtaBand from "@/components/seo/QuoteCtaBand";
import { PAGE_KNOWLEDGE } from "@/lib/ai-page-knowledge";
import AboutBlurb from "@/components/home/AboutBlurb";
import Hero from "@/components/home/Hero";
import HomeServiceAreas from "@/components/home/HomeServiceAreas";
import LocalTrustSignals from "@/components/local/LocalTrustSignals";
import HowItWorks from "@/components/home/HowItWorks";
import Newsletter from "@/components/home/Newsletter";
import ServiceCards from "@/components/home/ServiceCards";
import SeeOurWork from "@/components/home/SeeOurWork";
import Stats from "@/components/home/Stats";
import Testimonials from "@/components/home/Testimonials";
import WhyChoose from "@/components/home/WhyChoose";
import { PAGE_SEO } from "@/lib/page-metadata";
import { getFaqsBySet } from "@/lib/faq-sets";
import { breadcrumbSchema, faqPageSchema, webPageSchema } from "@/lib/schema";
import { createPageMetadata } from "@/lib/seo";

const meta = PAGE_SEO.home;

export const metadata: Metadata = createPageMetadata({
  title: meta.title,
  description: meta.description,
  path: meta.path,
  keywords: [...meta.keywords],
  ogImageAlt: meta.ogImageAlt,
});

export default function Home() {
  return (
    <main className="bg-background">
      <JsonLdGraph
        nodes={[
          breadcrumbSchema([{ name: "Home", path: "/" }], { pagePath: meta.path }),
          webPageSchema({
            path: meta.path,
            name: meta.title,
            description: meta.description,
            pageType: "WebPage",
          }),
          faqPageSchema(getFaqsBySet("home"), {
            path: "/",
            pageName: "Philadelphia Cleaning FAQ — Xirlane Cleaning",
          }),
        ]}
      />
      <Hero />
      <PageKnowledgeBlock knowledge={PAGE_KNOWLEDGE.home} />
      <AboutBlurb />
      <WhyChoose />
      <ServiceCards />
      <ConversionCta
        preset="recurringCleaning"
        variant="inline"
        className="bg-section-alt-bg"
        id="home-recurring-cta"
      />
      <SeeOurWork />
      <HowItWorks />
      <Testimonials />
      <Stats />
      <LocalTrustSignals />
      <HomeServiceAreas />
      <FaqPreviewSection
        setKey="home"
        heading="Philadelphia Cleaning FAQ"
        intro="Quick answers about maid service, pricing, and booking in Philadelphia and the five-county area."
        ctaPreset="faqFollowUp"
      />
      <QuoteCtaBand
        preset="bookCleaning"
        heading="Book House or Office Cleaning in Philadelphia"
        body="Insured crews, flexible scheduling, and free quotes for homes and businesses across Greater Philadelphia."
      />
      <Newsletter />
    </main>
  );
}
