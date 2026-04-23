import ServicePageTemplate from "@/components/services/ServicePageTemplate";

export default function DeepCleaningPage() {
  return (
    <ServicePageTemplate
      eyebrow="DEEP CLEANING"
      title="Deep Cleaning"
      heroImage="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1600&q=80"
      description="Our deep cleaning service is designed for first-time visits, seasonal refreshes, and spaces that need extra detail. We go beyond routine maintenance to restore clarity and comfort."
      detailsImage="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80"
      included={[
        "Top-to-bottom dusting and detail cleaning",
        "Cabinet exteriors and high-touch zone sanitization",
        "Deep bathroom and kitchen treatment",
        "Baseboards, trim, and door detail work",
        "Spot cleaning for walls and interior glass",
        "Floor treatment with attention to corners and edges",
      ]}
      pricingText="Deep cleaning is priced according to condition, size, and add-ons. Tell us about your space and we will recommend the right package and quote."
      related={[
        { href: "/services/home-cleaning", title: "Home Cleaning", summary: "Transition into recurring care after a full deep clean." },
        { href: "/services/commercial-cleaning", title: "Commercial Cleaning", summary: "Ideal for office resets before recurring maintenance." },
        { href: "/services/post-construction", title: "Post-Construction", summary: "Specialized cleaning for renovation and build debris." },
      ]}
    />
  );
}
