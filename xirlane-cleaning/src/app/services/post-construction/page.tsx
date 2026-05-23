import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import LocalTrustSignals from "@/components/local/LocalTrustSignals";
import ServiceAreaSection from "@/components/local/ServiceAreaSection";
import { ServicePageJsonLd, buildServiceMetadata } from "@/lib/service-seo";

export const metadata = buildServiceMetadata("/services/post-construction");

export default function PostConstructionPage() {
  return (
    <>
      <ServicePageJsonLd path="/services/post-construction" breadcrumbName="Move-Out Cleaning" />
      <ServicePageTemplate
        servicePath="/services/post-construction"
        eyebrow="POST-CONSTRUCTION"
        title="Post-Construction Cleaning"
        heroImage="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80"
        description="After construction or renovation, fine dust and residue can linger everywhere. Our move-out and post-construction cleaning prepares Philadelphia properties for move-in, staging, or client handoff."
        detailsImage="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=80"
        included={[
          "Detailed dust removal from surfaces and fixtures",
          "Baseboard, trim, and frame wipe-down",
          "Interior glass and mirror cleaning",
          "Floor vacuuming, mopping, and finish prep",
          "Cabinet and shelf interior wipe-down",
          "Debris collection and final presentation polish",
        ]}
        pricingText="Post-construction projects vary in scope. We quote based on square footage, timeline, and detail level to ensure your final clean meets project expectations."
        related={[
          { href: "/services/home-cleaning", title: "Home Cleaning", summary: "Ongoing upkeep once your new space is ready." },
          { href: "/services/commercial-cleaning", title: "Commercial Cleaning", summary: "Maintain your upgraded workspace on a reliable schedule." },
          { href: "/services/deep-cleaning", title: "Deep Cleaning", summary: "For spaces that need an intensive reset and detail pass." },
        ]}
      />
      <LocalTrustSignals />
      <ServiceAreaSection highlight="moveOutCleaning" />
    </>
  );
}
