import Link from "next/link";
import PageKnowledgeBlock from "@/components/seo/PageKnowledgeBlock";
import QuoteCtaBand from "@/components/seo/QuoteCtaBand";
import { OptimizedFillImage } from "@/components/ui/OptimizedImage";
import RelatedLinkGrid from "@/components/seo/RelatedLinkGrid";
import type { PageKnowledge } from "@/lib/ai-page-knowledge";
import { IMAGE_SIZES } from "@/lib/images";
import { LOCATION_NAV_LINKS } from "@/lib/location-landing-pages";
import { BLOG_POSTS, blogPostUrl } from "@/lib/blog";
import { SEO_LANDING_PAGES } from "@/lib/seo-landing-pages";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1521790361543-f645cf042ec4?w=1800&q=80";

type ServicesPageContentProps = {
  knowledge: PageKnowledge;
};

export default function ServicesPageContent({ knowledge }: ServicesPageContentProps) {
  return (
    <main className="bg-background">
      <section className="relative h-[500px] overflow-hidden">
        <OptimizedFillImage
          src={HERO_IMAGE}
          alt="Cleaning team preparing service in Philadelphia"
          sizes={IMAGE_SIZES.heroFull}
          priority
        />
        <div className="absolute inset-0 bg-black/55" aria-hidden="true" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="px-6">
            <p className="text-[11px] uppercase tracking-eyebrow text-accent">OUR SERVICES</p>
            <h1 className="mt-4 text-h1-mobile text-white md:text-h1">
              Cleaning Services in Philadelphia
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-[15px] text-white/80">
              House, commercial, deep, move-in, move-out, apartment, office, recurring, Airbnb,
              and post-construction cleaning across Greater Philadelphia.
            </p>
          </div>
        </div>
      </section>

      <PageKnowledgeBlock knowledge={knowledge} />

      <section className="section-spacing" aria-labelledby="all-services-heading">
        <div className="site-container">
          <h2 id="all-services-heading" className="sr-only">
            All cleaning services
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {SEO_LANDING_PAGES.map((service) => (
              <Link
                key={service.slug}
                href={service.path}
                className="group block overflow-hidden border border-border-light bg-white"
              >
                <div className="relative h-[240px] overflow-hidden">
                  <OptimizedFillImage
                    src={service.heroImage}
                    alt={service.heroImageAlt}
                    sizes={IMAGE_SIZES.card}
                    loading="lazy"
                    fetchPriority="low"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-h3-mobile text-text-primary md:text-h3">
                    {service.breadcrumbName}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-text-body">
                    {service.meta.description}
                  </p>
                  <p className="mt-5 text-[12px] uppercase tracking-widest text-text-primary group-hover:text-accent">
                    LEARN MORE &rarr;
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-16 md:py-20" aria-labelledby="deep-packages-heading">
        <div className="site-container">
          <p className="text-[11px] uppercase tracking-eyebrow text-accent">DEEP CLEANING OPTIONS</p>
          <h2 id="deep-packages-heading" className="mt-4 text-h2-mobile text-text-primary md:text-h2">
            Choose Your Deep Cleaning Package
          </h2>
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <article className="border border-border-light bg-white p-8">
              <h3 className="text-h3-mobile text-text-primary md:text-h3">The Spring Clean</h3>
              <p className="mt-3 text-text-body">
                Seasonal refresh package for complete whole-home revitalization.
              </p>
              <ul className="mt-5 space-y-2 text-text-primary">
                <li>✓ Kitchen sanitizing and appliance detailing</li>
                <li>✓ Bathroom polish and fixture treatment</li>
                <li>✓ Baseboard, trim, and high-touch deep cleaning</li>
                <li>✓ Interior windows and mirrors spot-cleaned</li>
                <li>✓ Sweep, vacuum, and full floor wash</li>
              </ul>
            </article>
            <article className="border border-border-light bg-white p-8">
              <h3 className="text-h3-mobile text-text-primary md:text-h3">The Ultimate Deep Clean</h3>
              <p className="mt-3 text-text-body">
                Our most detailed package for first visits and major resets.
              </p>
              <ul className="mt-5 space-y-2 text-text-primary">
                <li>✓ Full kitchen and cabinet exterior treatment</li>
                <li>✓ Deep bathroom scrub with chrome polishing</li>
                <li>✓ Spot-wash walls, interior glass, and trim</li>
                <li>✓ Reachable fixture and baseboard detailing</li>
                <li>✓ Complete floor care under lightweight furniture</li>
              </ul>
            </article>
          </div>
          <p className="mt-8 text-text-body">
            <Link href="/services/deep-cleaning" className="text-accent hover:underline">
              View deep cleaning in Philadelphia
            </Link>
          </p>
        </div>
      </section>

      <RelatedLinkGrid
        heading="Cleaning by Philadelphia neighborhood"
        intro="Local pages describe property types, services, and booking in popular areas we serve."
        links={LOCATION_NAV_LINKS.map((loc) => ({
          href: loc.href,
          label: loc.label,
        }))}
        className="bg-section-alt-bg py-16 md:py-20"
        columns={2}
      />

      <RelatedLinkGrid
        heading="Recent cleaning guides"
        intro="Tips from our blog on deep cleaning, move-out, apartments, and more."
        links={BLOG_POSTS.slice(0, 4).map((post) => ({
          href: blogPostUrl(post.slug),
          label: post.title,
          description: post.excerpt,
        }))}
        className="bg-background py-16 md:py-20"
        columns={2}
      />

      <QuoteCtaBand
        preset="serviceExplore"
        heading="Need Help Choosing a Service?"
        body="Tell us about your space and we will match you with the best cleaning plan for Philadelphia and surrounding counties."
      />
    </main>
  );
}
