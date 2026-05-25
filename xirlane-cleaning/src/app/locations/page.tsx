import type { Metadata } from "next";
import Link from "next/link";
import { JsonLdGraph } from "@/components/seo/JsonLd";
import PageKnowledgeBlock from "@/components/seo/PageKnowledgeBlock";
import ConversionCta from "@/components/seo/ConversionCta";
import QuoteCtaBand from "@/components/seo/QuoteCtaBand";
import { OptimizedFillImage } from "@/components/ui/OptimizedImage";
import { IMAGE_SIZES } from "@/lib/images";
import { LOCATION_LANDING_PAGES } from "@/lib/location-landing-pages";
import { PAGE_SEO } from "@/lib/page-metadata";
import { breadcrumbSchema, locationsItemListSchema, webPageSchema } from "@/lib/schema";
import { createPageMetadata } from "@/lib/seo";
import { BUSINESS } from "@/lib/site";

const meta = PAGE_SEO.locations;
const PATH = meta.path;

export const metadata: Metadata = createPageMetadata({
  title: meta.title,
  description: meta.description,
  path: meta.path,
  keywords: [...meta.keywords],
  ogImageAlt: meta.ogImageAlt,
});

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1800&q=80";

export default function LocationsIndexPage() {
  return (
    <main className="bg-background">
      <JsonLdGraph
        nodes={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Locations", path: PATH },
          ]),
          webPageSchema({
            path: PATH,
            name: meta.title,
            description: meta.description,
            pageType: "CollectionPage",
          }),
          locationsItemListSchema(
            LOCATION_LANDING_PAGES.map((loc) => ({
              path: loc.path,
              name: loc.breadcrumbName,
            })),
          ),
        ]}
      />

      <section className="relative h-[420px] overflow-hidden md:h-[480px]">
        <OptimizedFillImage
          src={HERO_IMAGE}
          alt="Philadelphia neighborhoods served by Xirlane Cleaning"
          sizes={IMAGE_SIZES.heroFull}
          priority
        />
        <div className="absolute inset-0 bg-black/55" aria-hidden="true" />
        <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
          <div>
            <p className="text-[11px] uppercase tracking-eyebrow text-accent">LOCATIONS</p>
            <h1 className="mt-4 text-h1-mobile text-white md:text-h1">
              Cleaning Services by Philadelphia Neighborhood
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-[15px] text-white/80">
              Local house cleaning, maid service, and commercial cleaning pages for neighborhoods
              we serve across the city and Main Line.
            </p>
          </div>
        </div>
      </section>

      <PageKnowledgeBlock
        knowledge={{
          heading: "Philadelphia neighborhood cleaning",
          summary: `${BUSINESS.name} publishes location pages for popular Philadelphia neighborhoods and the Main Line. Each page describes property types, services offered, and how to book cleaning in that area.`,
          facts: [
            { label: "Regions covered", value: BUSINESS.serviceAreas.join("; ") },
            { label: "Neighborhood pages", value: String(LOCATION_LANDING_PAGES.length) },
          ],
          relatedLinks: [
            { href: "/service-areas", label: "County service areas" },
            { href: "/services", label: "All cleaning services" },
            { href: "/contact", label: "Free quote" },
          ],
        }}
      />

      <section className="section-spacing" aria-labelledby="neighborhood-list-heading">
        <div className="site-container">
          <h2 id="neighborhood-list-heading" className="text-h2-mobile text-text-primary md:text-h2">
            Philadelphia neighborhoods we serve
          </h2>
          <p className="mt-4 max-w-3xl text-text-body">
            Select your area for localized information, common home types, and links to house
            cleaning, apartment cleaning, office cleaning, and specialty services.
          </p>
          <ul className="mt-10 grid gap-6 md:grid-cols-2">
            {LOCATION_LANDING_PAGES.map((loc) => (
              <li key={loc.slug}>
                <Link href={loc.path} className="card-base block h-full p-6 md:p-8">
                  <h3 className="text-h3-mobile text-text-primary md:text-h3">
                    {loc.neighborhoodName}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-text-body">
                    {loc.introParagraphs[0].slice(0, 200)}…
                  </p>
                  <span className="mt-5 inline-block text-[12px] uppercase tracking-widest text-text-primary hover:text-accent">
                    View local page &rarr;
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-10 text-[14px] text-text-body">
            Also serving Montgomery, Delaware, Chester, and Bucks counties.{" "}
            <Link href="/service-areas" className="text-accent hover:underline">
              View full service areas
            </Link>
            .
          </p>
        </div>
      </section>

      <ConversionCta preset="neighborhood" variant="compact" className="bg-background" />

      <QuoteCtaBand
        preset="contact"
        heading="Not Sure Which Page Fits Your Address?"
        body="Contact us with your street address and property type. We will confirm coverage and recommend the right cleaning service."
      />
    </main>
  );
}
