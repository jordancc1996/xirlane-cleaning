import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import LocalTrustSignals from "@/components/local/LocalTrustSignals";
import ServiceAreaSection from "@/components/local/ServiceAreaSection";
import { ServicePageJsonLd, buildServiceMetadata } from "@/lib/service-seo";

export const metadata = buildServiceMetadata("/services/commercial-cleaning");

export default function CommercialCleaningPage() {
  return (
    <>
      <ServicePageJsonLd path="/services/commercial-cleaning" breadcrumbName="Commercial Cleaning" />
      <ServicePageTemplate
        servicePath="/services/commercial-cleaning"
        eyebrow="COMMERCIAL CLEANING"
        title="Commercial Cleaning"
        heroImage="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80"
        description="Our commercial cleaning programs support offices, studios, and business facilities in Philadelphia that need consistent quality, reliable scheduling, and professional presentation every day."
        detailsImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80"
        included={[
          "Workstation and common-area surface disinfection",
          "Breakroom and restroom sanitization",
          "Trash removal and liner replacement",
          "Entryway and lobby detailing",
          "Floor vacuuming, mopping, and spot treatment",
          "After-hours and low-traffic scheduling options",
        ]}
        pricingText="Commercial pricing is based on facility size, traffic volume, and frequency. Share your business needs and we will create a tailored service plan."
        related={[
          { href: "/services/home-cleaning", title: "Home Cleaning", summary: "Bring the same level of care and consistency into your home." },
          { href: "/services/post-construction", title: "Post-Construction", summary: "Perfect after office renovations and workspace build-outs." },
          { href: "/services/deep-cleaning", title: "Deep Cleaning", summary: "An intensive reset for high-priority or neglected spaces." },
        ]}
      />
      <LocalTrustSignals />
      <ServiceAreaSection highlight="commercialCleaning" />
    </>
  );
}
