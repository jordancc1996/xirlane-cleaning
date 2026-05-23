import type { Metadata } from "next";
import PageKnowledgeBlock from "@/components/seo/PageKnowledgeBlock";
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
      <Hero />
      <PageKnowledgeBlock knowledge={PAGE_KNOWLEDGE.home} />
      <AboutBlurb />
      <WhyChoose />
      <ServiceCards />
      <SeeOurWork />
      <HowItWorks />
      <Testimonials />
      <Stats />
      <LocalTrustSignals />
      <HomeServiceAreas />
      <Newsletter />
    </main>
  );
}
