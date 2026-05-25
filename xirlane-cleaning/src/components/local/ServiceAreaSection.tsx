import Link from "next/link";
import { LOCATION_NAV_LINKS } from "@/lib/location-landing-pages";
import { LOCAL_SERVICES, type LocalServiceKey } from "@/lib/local-services";
import { BUSINESS } from "@/lib/site";

type ServiceAreaSectionProps = {
  /** Highlights one service keyword on service pages. */
  highlight?: LocalServiceKey;
  className?: string;
};

export default function ServiceAreaSection({
  highlight,
  className = "",
}: ServiceAreaSectionProps) {
  const highlighted = highlight ? LOCAL_SERVICES[highlight] : null;

  return (
    <section
      className={`border-t border-border-light bg-section-alt-bg py-14 md:py-16 ${className}`}
      aria-labelledby="local-service-area-heading"
    >
      <div className="site-container max-w-3xl">
        <h2 id="local-service-area-heading" className="text-h2-mobile text-text-primary md:text-h2">
          {highlighted
            ? `${highlighted.localName} — Service Area`
            : "Cleaning Service Areas — Greater Philadelphia"}
        </h2>
        <p className="mt-4 text-[15px] leading-relaxed text-text-body">
          {highlighted ? (
            <>
              {highlighted.description} We regularly serve homeowners and businesses in
              Philadelphia and in Montgomery, Delaware, Chester, and Bucks counties.
            </>
          ) : (
            <>
              Xirlane Cleaning is based in Philadelphia and provides cleaning services across
              the metro, including maid service, deep cleaning, commercial cleaning, and
              move-out cleaning. Not sure if we cover your address?{" "}
              <Link href="/contact" className="text-accent hover:underline">
                Contact us for a quick confirmation
              </Link>
              .
            </>
          )}
        </p>

        <h3 className="mt-8 text-h3-mobile text-text-primary md:text-h3">Counties we serve</h3>
        <ul className="mt-4 grid gap-2 text-[15px] text-text-primary sm:grid-cols-2">
          {BUSINESS.serviceAreas.map((area) => (
            <li key={area} className="flex items-start gap-2">
              <span className="text-accent" aria-hidden="true">
                ✓
              </span>
              {area}
            </li>
          ))}
        </ul>

        <h3 className="mt-8 text-h3-mobile text-text-primary md:text-h3">
          Popular Philadelphia neighborhoods
        </h3>
        <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-[14px]">
          {LOCATION_NAV_LINKS.map((loc) => (
            <li key={loc.href}>
              <Link href={loc.href} className="text-text-primary hover:text-accent">
                {loc.label}
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-3 text-[14px] text-text-body">
          <Link href="/locations" className="text-accent hover:underline">
            View all neighborhood pages
          </Link>
        </p>

        <h3 className="mt-8 text-h3-mobile text-text-primary md:text-h3">
          Philadelphia cleaning services
        </h3>
        <ul className="mt-4 space-y-2 text-[14px]">
          {Object.entries(LOCAL_SERVICES)
            .filter(([key]) => key !== "cleaningServices")
            .map(([key, service]) => (
              <li key={key}>
                <Link href={service.path} className="text-text-primary hover:text-accent">
                  {service.localName}
                </Link>
              </li>
            ))}
        </ul>

        <p className="mt-8 text-[14px] text-text-body">
          <Link href="/service-areas" className="text-accent hover:underline">
            View all service areas
          </Link>
          {" · "}
          <Link href="/contact" className="text-accent hover:underline">
            Get a free quote
          </Link>
        </p>
      </div>
    </section>
  );
}
