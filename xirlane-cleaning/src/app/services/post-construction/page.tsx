import ServicePageTemplate from "@/components/services/ServicePageTemplate";

export default function PostConstructionPage() {
  return (
    <ServicePageTemplate
      eyebrow="POST-CONSTRUCTION"
      title="Post-Construction Cleaning"
      heroImage="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80"
      description="After construction or renovation, fine dust and residue can linger everywhere. Our post-construction cleaning prepares your property for move-in, staging, or client handoff."
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
  );
}
