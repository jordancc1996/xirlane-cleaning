import Link from "next/link";
import EyebrowLabel from "@/components/ui/EyebrowLabel";
import ServiceCardsGrid from "@/components/home/ServiceCardsGrid";

export default function ServiceCards() {
  return (
    <section
      className="bg-section-alt-bg py-16 md:py-20"
      aria-labelledby="home-services-heading"
    >
      <div className="site-container">
        <div className="mx-auto max-w-3xl text-center">
          <EyebrowLabel>OUR SERVICES</EyebrowLabel>
          <h2 id="home-services-heading" className="mt-4 text-h2-mobile text-text-primary md:text-h2">
            House, Commercial &amp; Deep Cleaning Services
          </h2>
          <p className="mt-5 text-text-body">
            From routine residential cleaning to commercial accounts and detailed project
            cleans, we match the right crew and checklist to your space across Greater
            Philadelphia.
          </p>
        </div>

        <ServiceCardsGrid />

        <p className="mx-auto mt-10 max-w-2xl text-center text-[14px] text-text-body">
          Compare all options on our{" "}
          <Link href="/services" className="text-accent hover:underline">
            services page
          </Link>
          , or{" "}
          <Link href="/contact" className="text-accent hover:underline">
            get a free quote
          </Link>{" "}
          for house cleaning, commercial cleaning, deep cleaning, or move-out service.
        </p>
      </div>
    </section>
  );
}
