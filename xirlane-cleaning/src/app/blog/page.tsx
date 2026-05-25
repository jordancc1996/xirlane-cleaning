import type { Metadata } from "next";
import Link from "next/link";
import BlogBreadcrumbs from "@/components/blog/BlogBreadcrumbs";
import BlogCard from "@/components/blog/BlogCard";
import BlogCategoryNav from "@/components/blog/BlogCategoryNav";
import BlogRelatedLinks from "@/components/seo/BlogRelatedLinks";
import RelatedLinkGrid from "@/components/seo/RelatedLinkGrid";
import { LOCATION_NAV_LINKS } from "@/lib/location-landing-pages";
import { LANDING_NAV_LINKS } from "@/lib/seo-landing-pages";
import { JsonLdGraph } from "@/components/seo/JsonLd";
import PageKnowledgeBlock from "@/components/seo/PageKnowledgeBlock";
import ConversionCta from "@/components/seo/ConversionCta";
import QuoteCtaBand from "@/components/seo/QuoteCtaBand";
import { PAGE_KNOWLEDGE } from "@/lib/ai-page-knowledge";
import { BLOG_INDEX_PATH, BLOG_POSTS } from "@/lib/blog";
import { PAGE_SEO } from "@/lib/page-metadata";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { createPageMetadata } from "@/lib/seo";

const meta = PAGE_SEO.blog;

export const metadata: Metadata = createPageMetadata({
  title: meta.title,
  description: meta.description,
  path: meta.path,
  keywords: [...meta.keywords],
  ogImageAlt: meta.ogImageAlt,
});

export default function BlogPage() {
  return (
    <main className="bg-background">
      <JsonLdGraph
        nodes={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blog", path: BLOG_INDEX_PATH },
          ]),
          webPageSchema({
            path: meta.path,
            name: meta.title,
            description: meta.description,
            pageType: "CollectionPage",
          }),
        ]}
      />
      <BlogBreadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Blog" },
        ]}
      />

      <section className="section-spacing">
        <div className="site-container">
          <p className="text-[11px] uppercase tracking-eyebrow text-accent">BLOG</p>
          <h1 className="mt-4 text-h1-mobile text-text-primary md:text-h1">
            Philadelphia Cleaning Tips &amp; Guides
          </h1>
          <p className="mt-4 max-w-3xl text-[17px] leading-relaxed text-text-body">
            Practical advice on house cleaning, maid service, commercial cleaning, deep cleaning,
            move-out cleaning, and Airbnb turnovers for homes and businesses in Philadelphia and
            surrounding PA counties.
          </p>

          <BlogCategoryNav />

          {BLOG_POSTS.length > 0 ? (
            <ul className="mt-12 grid gap-8 md:grid-cols-2">
              {BLOG_POSTS.map((post) => (
                <li key={post.slug}>
                  <BlogCard post={post} />
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-12 text-text-body">
              Articles are coming soon. Browse our{" "}
              <Link href="/services" className="text-accent hover:underline">
                cleaning services
              </Link>
              .
            </p>
          )}

          <div className="mt-12 max-w-3xl">
            <BlogRelatedLinks title="Book cleaning in Philadelphia" />
          </div>
        </div>
      </section>

      <PageKnowledgeBlock knowledge={PAGE_KNOWLEDGE.blog} />

      <ConversionCta preset="blogArticle" variant="compact" className="bg-background" />

      <RelatedLinkGrid
        heading="Philadelphia neighborhood guides"
        intro="Local cleaning pages for areas we serve across the city and Main Line."
        links={LOCATION_NAV_LINKS.map((loc) => ({ href: loc.href, label: loc.label }))}
        className="border-t border-border-light bg-section-alt-bg py-16 md:py-20"
        columns={2}
      />

      <RelatedLinkGrid
        heading="Our cleaning services"
        links={LANDING_NAV_LINKS.slice(0, 6).map((s) => ({
          href: s.href,
          label: s.label,
        }))}
        className="bg-background py-16 md:py-20"
        columns={3}
      />

      <QuoteCtaBand
        preset="freeQuote"
        heading="Need Cleaning Now? Get a Free Quote"
        body="House, commercial, deep, move-out, and Airbnb cleaning across Greater Philadelphia with insured crews."
      />
    </main>
  );
}
