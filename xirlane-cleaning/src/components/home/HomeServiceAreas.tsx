import Link from "next/link";
import { LOCATION_NAV_LINKS } from "@/lib/location-landing-pages";
import { LOCAL_SERVICES } from "@/lib/local-services";
import { BUSINESS } from "@/lib/site";

export default function HomeServiceAreas() {
  return (
    <section
      className="border-t border-border-light bg-background py-14 md:py-16"
      aria-labelledby="service-areas-heading"
    >
      <div className="site-container max-w-3xl">
        <h2 id="service-areas-heading" className="text-h2-mobile text-text-primary md:text-h2">
          Cleaning Services in Philadelphia &amp; Nearby Counties
        </h2>
        <p className="mt-4 text-[15px] leading-relaxed text-text-body">
          Xirlane Cleaning is a Philadelphia cleaning company offering{" "}
          <Link href="/services" className="text-accent hover:underline">
            cleaning services in Philadelphia
          </Link>{" "}
          for homes and businesses. Book{" "}
          <Link href="/services/house-cleaning" className="text-accent hover:underline">
            maid service
          </Link>
          ,{" "}
          <Link href="/services/deep-cleaning" className="text-accent hover:underline">
            deep cleaning
          </Link>
          ,{" "}
          <Link href="/services/commercial-cleaning" className="text-accent hover:underline">
            commercial cleaning
          </Link>
          , or{" "}
          <Link href="/services/move-out-cleaning" className="text-accent hover:underline">
            move-out cleaning
          </Link>{" "}
          with flexible one-time or recurring visits.
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

        <h3 className="mt-8 text-h3-mobile text-text-primary md:text-h3">Philadelphia neighborhoods</h3>
        <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-[14px]">
          {LOCATION_NAV_LINKS.map((loc) => (
            <li key={loc.href}>
              <Link href={loc.href} className="text-text-primary hover:text-accent">
                {loc.label}
              </Link>
            </li>
          ))}
        </ul>

        <h3 className="mt-8 text-h3-mobile text-text-primary md:text-h3">Cleaning services</h3>
        <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-[14px]">
          {Object.values(LOCAL_SERVICES)
            .filter((service) => service.path !== "/services")
            .map((service) => (
              <li key={service.path}>
                <Link href={service.path} className="text-text-primary hover:text-accent">
                  {service.localName}
                </Link>
              </li>
            ))}
        </ul>

        <p className="mt-8 text-[14px] text-text-body">
          <Link href="/locations" className="text-accent hover:underline">
            All neighborhood pages
          </Link>
          {" · "}
          <Link href="/service-areas" className="text-accent hover:underline">
            County service areas
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
