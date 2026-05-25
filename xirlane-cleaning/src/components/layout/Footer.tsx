import Link from "next/link";
import NapBlock from "@/components/local/NapBlock";
import { BLOG_CATEGORY_LIST, categoryUrl } from "@/lib/blog-categories";
import { LOCATION_NAV_LINKS } from "@/lib/location-landing-pages";
import { LANDING_NAV_LINKS } from "@/lib/seo-landing-pages";
import { BUSINESS } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border-light bg-section-alt-bg pt-14">
      <div className="site-container grid gap-10 pb-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        <div className="sm:col-span-2 lg:col-span-1">
          <p className="font-heading text-3xl text-text-primary">XIRLANE</p>
          <p className="mt-2 text-[13px] text-text-body/80">
            Philadelphia&apos;s Premium Cleaning Service
          </p>
          <div className="mt-5">
            <NapBlock />
          </div>
        </div>

        <nav aria-label="Cleaning services">
          <p className="mb-4 text-[11px] uppercase tracking-widest text-accent">SERVICES</p>
          <div className="space-y-2 text-[13px] text-text-body/80">
            {LANDING_NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block transition-colors hover:text-accent"
              >
                {link.label}
              </Link>
            ))}
            <Link href="/services" className="block transition-colors hover:text-accent">
              All services
            </Link>
          </div>
        </nav>

        <nav aria-label="Philadelphia neighborhoods">
          <p className="mb-4 text-[11px] uppercase tracking-widest text-accent">NEIGHBORHOODS</p>
          <div className="space-y-2 text-[13px] text-text-body/80">
            {LOCATION_NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block transition-colors hover:text-accent"
              >
                {link.label}
              </Link>
            ))}
            <Link href="/locations" className="block transition-colors hover:text-accent">
              All neighborhoods
            </Link>
            <Link href="/service-areas" className="block transition-colors hover:text-accent">
              County service areas
            </Link>
          </div>
        </nav>

        <nav aria-label="Resources">
          <p className="mb-4 text-[11px] uppercase tracking-widest text-accent">RESOURCES</p>
          <div className="space-y-2 text-[13px] text-text-body/80">
            <Link href="/" className="block transition-colors hover:text-accent">
              Home
            </Link>
            <Link href="/blog" className="block transition-colors hover:text-accent">
              Blog
            </Link>
            {BLOG_CATEGORY_LIST.map((cat) => (
              <Link
                key={cat.slug}
                href={categoryUrl(cat.slug)}
                className="block transition-colors hover:text-accent"
              >
                {cat.name}
              </Link>
            ))}
            <Link href="/gallery" className="block transition-colors hover:text-accent">
              Gallery
            </Link>
            <Link href="/faq" className="block transition-colors hover:text-accent">
              FAQ
            </Link>
            <Link href="/contact" className="block transition-colors hover:text-accent">
              Contact &amp; quote
            </Link>
          </div>
        </nav>

        <div>
          <p className="mb-4 text-[11px] uppercase tracking-widest text-accent">SERVICE AREA</p>
          <ul className="space-y-2 text-[13px] text-text-body/80">
            {BUSINESS.serviceAreas.map((area) => (
              <li key={area}>{area}</li>
            ))}
          </ul>
          <ul className="mt-4 space-y-1 text-[12px] text-text-body/70">
            {BUSINESS.trustSignals.map((signal) => (
              <li key={signal}>✓ {signal}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-border-light py-6">
        <div className="site-container flex flex-col gap-3 text-[13px] text-text-body/80 md:flex-row md:items-center md:justify-between">
          <p>
            &copy; {year} {BUSINESS.name}. All rights reserved.
          </p>
          <p>
            <Link href="/contact" className="text-accent hover:underline">
              Get a free quote
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
