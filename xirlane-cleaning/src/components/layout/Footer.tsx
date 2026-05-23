import Link from "next/link";
import NapBlock from "@/components/local/NapBlock";
import { BUSINESS } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border-light bg-section-alt-bg pt-14">
      <div className="site-container grid gap-10 pb-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-heading text-3xl text-text-primary">XIRLANE</p>
          <p className="mt-2 text-[13px] text-text-body/80">
            Philadelphia&apos;s Premium Cleaning Service
          </p>
          <div className="mt-5">
            <NapBlock />
          </div>
        </div>

        <nav aria-label="Services">
          <p className="mb-4 text-[11px] uppercase tracking-widest text-accent">SERVICES</p>
          <div className="space-y-2 text-[13px] text-text-body/80">
            <Link href="/services/home-cleaning" className="block transition-colors hover:text-accent">
              Maid &amp; House Cleaning
            </Link>
            <Link href="/services/commercial-cleaning" className="block transition-colors hover:text-accent">
              Commercial Cleaning
            </Link>
            <Link href="/services/post-construction" className="block transition-colors hover:text-accent">
              Move-Out Cleaning
            </Link>
            <Link href="/services/deep-cleaning" className="block transition-colors hover:text-accent">
              Deep Cleaning
            </Link>
            <Link href="/services" className="block transition-colors hover:text-accent">
              All Services
            </Link>
          </div>
        </nav>

        <nav aria-label="Company">
          <p className="mb-4 text-[11px] uppercase tracking-widest text-accent">COMPANY</p>
          <div className="space-y-2 text-[13px] text-text-body/80">
            <Link href="/" className="block transition-colors hover:text-accent">
              Home
            </Link>
            <Link href="/service-areas" className="block transition-colors hover:text-accent">
              Service Areas
            </Link>
            <Link href="/gallery" className="block transition-colors hover:text-accent">
              Gallery
            </Link>
            <Link href="/faq" className="block transition-colors hover:text-accent">
              FAQ
            </Link>
            <Link href="/contact" className="block transition-colors hover:text-accent">
              Contact &amp; Quote
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
            <Link href="/contact" className="hover:text-accent">
              Get a free quote
            </Link>
            {" · "}
            <Link href="/service-areas" className="hover:text-accent">
              Service areas
            </Link>
            {" · "}
            <Link href="/faq" className="hover:text-accent">
              FAQ
            </Link>
            {" · "}
            <Link href="/llms.txt" className="hover:text-accent">
              Site summary (llms.txt)
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
