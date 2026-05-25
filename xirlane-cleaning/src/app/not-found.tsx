import Link from "next/link";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Page Not Found",
  description:
    "This page could not be found. Browse Xirlane Cleaning services, locations, and FAQs for house and commercial cleaning in Philadelphia, PA.",
  path: "/404",
  noIndex: true,
});

export default function NotFound() {
  return (
    <main className="section-spacing bg-background">
      <div className="site-container max-w-2xl text-center">
        <p className="text-[11px] uppercase tracking-eyebrow text-accent">404</p>
        <h1 className="mt-4 text-h1-mobile text-text-primary md:text-h1">Page not found</h1>
        <p className="mt-4 text-text-body">
          The page you requested is not available. Use the links below to find cleaning services,
          neighborhood pages, or contact us for a quote in Greater Philadelphia.
        </p>
        <ul className="mt-8 flex flex-wrap justify-center gap-4 text-[15px]">
          <li>
            <Link href="/" className="text-accent hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link href="/services" className="text-accent hover:underline">
              Services
            </Link>
          </li>
          <li>
            <Link href="/locations" className="text-accent hover:underline">
              Locations
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-accent hover:underline">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
