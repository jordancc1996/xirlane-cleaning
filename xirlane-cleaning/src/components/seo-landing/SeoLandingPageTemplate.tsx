import ConversionCta from "@/components/seo/ConversionCta";
import LocalTrustSignals from "@/components/local/LocalTrustSignals";
import ServiceAreaSection from "@/components/local/ServiceAreaSection";
import FaqPreviewSection from "@/components/seo/FaqPreviewSection";
import PageKnowledgeBlock from "@/components/seo/PageKnowledgeBlock";
import QuoteCtaBand from "@/components/seo/QuoteCtaBand";
import type { SeoLandingPageConfig } from "@/lib/seo-landing-pages";
import { getRelatedLandingLinks } from "@/lib/seo-landing-pages";
import { getServiceMidCtaPreset } from "@/lib/cta-presets";
import SeoLandingBenefits from "./SeoLandingBenefits";
import SeoLandingHero from "./SeoLandingHero";
import SeoLandingIncluded from "./SeoLandingIncluded";
import SeoLandingOverview from "./SeoLandingOverview";
import SeoLandingProcess from "./SeoLandingProcess";
import RelatedLinkGrid from "@/components/seo/RelatedLinkGrid";
import {
  getBlogLinksForService,
  getLocationLinksForService,
} from "@/lib/internal-links";
import SeoLandingRelated from "./SeoLandingRelated";

type SeoLandingPageTemplateProps = {
  page: SeoLandingPageConfig;
};

export default function SeoLandingPageTemplate({ page }: SeoLandingPageTemplateProps) {
  const relatedLinks = getRelatedLandingLinks(page.relatedSlugs);
  const locationLinks = getLocationLinksForService(page.path);
  const blogLinks = getBlogLinksForService(page.path);
  const midPreset = getServiceMidCtaPreset(page.path);
  const pricingPreset =
    page.path.includes("recurring-cleaning") ? "recurringCleaning" : "freeQuote";

  return (
    <main className="bg-background">
      <SeoLandingHero
        eyebrow={page.eyebrow}
        title={page.h1}
        heroImage={page.heroImage}
        heroImageAlt={page.heroImageAlt}
      />

      <PageKnowledgeBlock
        knowledge={{
          heading: page.knowledgeHeading,
          summary: page.knowledgeSummary,
          facts: page.knowledgeFacts,
          relatedLinks: relatedLinks.map((link) => ({
            href: link.href,
            label: link.title,
          })),
        }}
      />

      <LocalTrustSignals />

      <SeoLandingOverview
        title={page.overviewHeading}
        paragraphs={page.overviewParagraphs}
        image={page.overviewImage}
        imageAlt={page.overviewImageAlt}
      />

      <ConversionCta preset={midPreset} variant="inline" id="service-overview-cta" />

      <SeoLandingBenefits
        heading={page.benefitsHeading}
        intro={page.benefitsIntro}
        benefits={page.benefits}
      />

      <SeoLandingIncluded items={page.included} />

      <SeoLandingProcess
        heading={page.processHeading}
        intro={page.processIntro}
        steps={page.processSteps}
      />

      <ConversionCta
        preset={pricingPreset}
        variant="inline"
        heading="Transparent Pricing for Your Space"
        body={page.pricingText}
        id="service-pricing-cta"
      />

      <SeoLandingRelated links={relatedLinks} />

      <RelatedLinkGrid
        heading="Popular neighborhoods for this service"
        intro="See how we approach cleaning in Philadelphia areas where clients book this service most often."
        links={locationLinks}
        className="bg-section-alt-bg py-16 md:py-20"
        columns={2}
      />

      <RelatedLinkGrid
        heading="Related cleaning guides"
        intro="Practical articles from our Philadelphia cleaning blog."
        links={blogLinks}
        className="bg-background py-16 md:py-20"
        columns={2}
      />

      <FaqPreviewSection
        setKey={page.faqSetKey}
        heading={`${page.h1} FAQ`}
        intro={page.faqIntro}
        className="bg-section-alt-bg py-16 md:py-20"
      />

      <QuoteCtaBand
        preset="bookCleaning"
        heading={page.ctaHeading}
        body={page.ctaBody}
      />

      <ServiceAreaSection highlight={page.serviceAreaHighlight} />
    </main>
  );
}
