import Link from "next/link";
import { LOCAL_SERVICES } from "@/lib/local-services";

/**
 * Full site link list in SSR HTML for crawlers and assistive tech.
 * Visually hidden; primary navigation remains in Navbar and Footer.
 */
export default function CrawlerSiteNav() {
  const serviceLinks = Object.values(LOCAL_SERVICES);

  return (
    <nav className="sr-only" aria-label="All pages on Xirlane Cleaning">
      <ul>
        <li>
          <Link href="/">Home — cleaning services Philadelphia</Link>
        </li>
        <li>
          <Link href="/services">All cleaning services</Link>
        </li>
        {serviceLinks.map((service) => (
          <li key={service.path}>
            <Link href={service.path}>{service.localName}</Link>
          </li>
        ))}
        <li>
          <Link href="/service-areas">Service areas — Greater Philadelphia</Link>
        </li>
        <li>
          <Link href="/gallery">Cleaning results gallery</Link>
        </li>
        <li>
          <Link href="/contact">Contact and free quote</Link>
        </li>
        <li>
          <Link href="/faq">Frequently asked questions</Link>
        </li>
      </ul>
    </nav>
  );
}
