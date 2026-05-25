import Link from "next/link";
import EyebrowLabel from "@/components/ui/EyebrowLabel";
import type { LocationServiceLink } from "@/lib/location-landing-pages";

type LocationServicesOfferedProps = {
  neighborhoodName: string;
  intro: string;
  services: LocationServiceLink[];
};

export default function LocationServicesOffered({
  neighborhoodName,
  intro,
  services,
}: LocationServicesOfferedProps) {
  return (
    <section className="section-spacing" aria-labelledby="location-services-heading">
      <div className="site-container">
        <EyebrowLabel>CLEANING SERVICES</EyebrowLabel>
        <h2 id="location-services-heading" className="mt-4 text-h2-mobile text-text-primary md:text-h2">
          Cleaning Services in {neighborhoodName}
        </h2>
        <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-text-body">{intro}</p>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <li key={service.href}>
              <Link
                href={service.href}
                className="group card-base flex h-full flex-col p-6 transition-colors hover:border-accent"
              >
                <h3 className="text-h3-mobile text-text-primary md:text-h3">{service.title}</h3>
                <p className="mt-3 flex-1 text-[14px] leading-relaxed text-text-body">
                  {service.summary}
                </p>
                <span className="mt-5 text-[12px] uppercase tracking-widest text-text-primary group-hover:text-accent">
                  View service &rarr;
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-[14px] text-text-body">
          <Link href="/services" className="text-accent hover:underline">
            Compare all Philadelphia cleaning services
          </Link>
        </p>
      </div>
    </section>
  );
}
