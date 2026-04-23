import ServicePageTemplate from "@/components/services/ServicePageTemplate";

export default function CommercialCleaningPage() {
  return (
    <ServicePageTemplate
      eyebrow="COMMERCIAL CLEANING"
      title="Commercial Cleaning"
      heroImage="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80"
      description="Our commercial cleaning programs support offices, studios, and business facilities that need consistent quality, reliable scheduling, and professional presentation every day."
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
  );
}
