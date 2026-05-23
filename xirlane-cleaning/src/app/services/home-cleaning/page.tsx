import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import LocalTrustSignals from "@/components/local/LocalTrustSignals";
import ServiceAreaSection from "@/components/local/ServiceAreaSection";
import { ServicePageJsonLd, buildServiceMetadata } from "@/lib/service-seo";

export const metadata = buildServiceMetadata("/services/home-cleaning");

export default function HomeCleaningPage() {
  return (
    <>
      <ServicePageJsonLd path="/services/home-cleaning" breadcrumbName="House Cleaning" />
      <ServicePageTemplate
        servicePath="/services/home-cleaning"
        eyebrow="HOME CLEANING"
        title="House Cleaning"
        heroImage="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80"
        description="Our recurring and one-time home cleaning plans are built around your lifestyle. We focus on high-touch details, kitchen and bathroom sanitation, and a polished finish in every room. Serving Philadelphia and surrounding counties."
        detailsImage="https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1200&q=80"
        included={[
          "Kitchen wipe-down and sanitization",
          "Bathroom deep surface cleaning",
          "Dusting and floor care throughout your home",
          "Customizable add-ons for oven, fridge, and interior windows",
          "Flexible recurring schedules: weekly, biweekly, monthly",
          "One-time cleaning appointments available",
        ]}
        pricingText="Every home is unique, and your quote should be too. Tell us your square footage, preferred frequency, and any add-ons, and we will send a clear, no-surprise estimate."
        related={[
          { href: "/services/commercial-cleaning", title: "Commercial Cleaning", summary: "Keep your workspace client-ready and consistently clean." },
          { href: "/services/post-construction", title: "Post-Construction", summary: "Detailed dust and debris removal after your project wraps." },
          { href: "/services/deep-cleaning", title: "Deep Cleaning", summary: "A top-to-bottom reset for first visits and seasonal refreshes." },
        ]}
      />
      <LocalTrustSignals />
      <ServiceAreaSection highlight="maidService" />
    </>
  );
}
