import ConversionCta from "@/components/seo/ConversionCta";
import LocalTrustSignals from "@/components/local/LocalTrustSignals";
import PageKnowledgeBlock from "@/components/seo/PageKnowledgeBlock";
import QuoteCtaBand from "@/components/seo/QuoteCtaBand";
import SeoLandingHero from "@/components/seo-landing/SeoLandingHero";
import type { LocationLandingConfig } from "@/lib/location-landing-pages";
import { getNearbyLocationLinks } from "@/lib/location-landing-pages";
import LocationFaqSection from "./LocationFaqSection";
import LocationIntro from "./LocationIntro";
import RelatedLinkGrid from "@/components/seo/RelatedLinkGrid";
import { getBlogLinksForLocation } from "@/lib/internal-links";
import LocationNearbyLinks from "./LocationNearbyLinks";
import LocationPropertyTypes from "./LocationPropertyTypes";
import LocationServicesOffered from "./LocationServicesOffered";
import LocationWhyResidents from "./LocationWhyResidents";

type LocationLandingTemplateProps = {
  location: LocationLandingConfig;
};

export default function LocationLandingTemplate({ location }: LocationLandingTemplateProps) {
  const nearbyLinks = getNearbyLocationLinks(location.nearbySlugs);
  const blogLinks = getBlogLinksForLocation(location.path);

  return (
    <main className="bg-background">
      <SeoLandingHero
        eyebrow={location.eyebrow}
        title={location.h1}
        heroImage={location.heroImage}
        heroImageAlt={location.heroImageAlt}
      />

      <PageKnowledgeBlock
        knowledge={{
          heading: location.knowledgeHeading,
          summary: location.knowledgeSummary,
          facts: location.knowledgeFacts,
          relatedLinks: [
            ...location.services.map((s) => ({ href: s.href, label: s.title })),
            { href: "/service-areas", label: "All service areas" },
            { href: "/contact", label: "Free quote" },
          ],
        }}
      />

      <LocalTrustSignals />

      <LocationIntro heading={location.introHeading} paragraphs={location.introParagraphs} />

      <ConversionCta
        preset="freeQuote"
        variant="inline"
        heading={`House Cleaning in ${location.neighborhoodName}`}
        body={`Request a free quote for maid service, deep cleaning, or move-out cleaning in ${location.neighborhoodName} and nearby Philadelphia areas.`}
        id="location-intro-cta"
      />

      <LocationPropertyTypes
        neighborhoodName={location.neighborhoodName}
        propertyTypes={location.propertyTypes}
      />

      <LocationServicesOffered
        neighborhoodName={location.neighborhoodName}
        intro={location.servicesIntro}
        services={location.services}
      />

      <ConversionCta
        preset="bookCleaning"
        variant="compact"
        className="bg-background"
        id="location-services-cta"
      />

      <LocationWhyResidents
        neighborhoodName={location.neighborhoodName}
        heading={location.whyHeading}
        intro={location.whyIntro}
        reasons={location.whyReasons}
      />

      <LocationFaqSection
        neighborhoodName={location.neighborhoodName}
        intro={location.faqIntro}
        faqs={location.faqs}
      />

      <RelatedLinkGrid
        heading="Guides for this area"
        intro={`Cleaning tips and checklists relevant to ${location.neighborhoodName} and Greater Philadelphia.`}
        links={blogLinks}
        className="bg-background py-16 md:py-20"
        columns={2}
      />

      <QuoteCtaBand
        preset="bookCleaning"
        heading={location.ctaHeading}
        body={location.ctaBody}
        footnote={location.ctaFootnote}
      />

      <LocationNearbyLinks links={nearbyLinks} />
    </main>
  );
}
