import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import BlogBreadcrumbs from "@/components/blog/BlogBreadcrumbs";
import BlogCard from "@/components/blog/BlogCard";
import BlogCategoryNav from "@/components/blog/BlogCategoryNav";
import RelatedLinkGrid from "@/components/seo/RelatedLinkGrid";
import ConversionCta from "@/components/seo/ConversionCta";
import QuoteCtaBand from "@/components/seo/QuoteCtaBand";
import { getCategoryServiceLinks } from "@/lib/internal-links";
import {
  BLOG_CATEGORY_LIST,
  categoryUrl,
  getCategoryBySlug,
  getCategorySlugsForRoutes,
  type BlogCategorySlug,
} from "@/lib/blog-categories";
import { BLOG_INDEX_PATH, getPostsByCategory } from "@/lib/blog";
import { BlogCategoryJsonLd, buildCategoryMetadata } from "@/lib/blog-seo";

type PageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return getCategorySlugsForRoutes().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const category = getCategoryBySlug(params.slug);
  if (!category) notFound();
  return buildCategoryMetadata(params.slug as BlogCategorySlug);
}

export default function BlogCategoryPage({ params }: PageProps) {
  const category = getCategoryBySlug(params.slug);
  if (!category) notFound();

  const categorySlug = params.slug as BlogCategorySlug;
  const posts = getPostsByCategory(categorySlug);

  return (
    <main className="bg-background">
      <BlogCategoryJsonLd
        categorySlug={categorySlug}
        posts={posts}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Blog", path: BLOG_INDEX_PATH },
          { name: category.name, path: categoryUrl(categorySlug) },
        ]}
      />
      <BlogBreadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Blog", path: BLOG_INDEX_PATH },
          { name: category.name },
        ]}
      />

      <section className="section-spacing">
        <div className="site-container">
          <p className="text-[11px] uppercase tracking-eyebrow text-accent">{category.name}</p>
          <h1 className="mt-4 text-h1-mobile text-text-primary md:text-h1">
            {category.name} Articles
          </h1>
          <p className="mt-4 max-w-3xl text-[17px] leading-relaxed text-text-body">
            {category.description}
          </p>
          <BlogCategoryNav activeSlug={categorySlug} />

          {posts.length > 0 ? (
            <ul className="mt-12 grid gap-8 md:grid-cols-2">
              {posts.map((post) => (
                <li key={post.slug}>
                  <BlogCard post={post} />
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-12 text-text-body">
              Articles in this category are coming soon. Browse{" "}
              <Link href={BLOG_INDEX_PATH} className="text-accent hover:underline">
                all blog posts
              </Link>{" "}
              or{" "}
              <Link href="/contact" className="text-accent hover:underline">
                request a quote
              </Link>
              .
            </p>
          )}

          <RelatedLinkGrid
            heading="Book related cleaning services"
            links={getCategoryServiceLinks(categorySlug)}
            className="mt-12"
            columns={2}
          />

          <p className="mt-10 text-[14px] text-text-body">
            More topics:{" "}
            {BLOG_CATEGORY_LIST.filter((c) => c.slug !== categorySlug)
              .slice(0, 4)
              .map((c, i, arr) => (
                <span key={c.slug}>
                  <Link href={categoryUrl(c.slug)} className="text-accent hover:underline">
                    {c.name}
                  </Link>
                  {i < arr.length - 1 ? ", " : ""}
                </span>
              ))}
          </p>
        </div>
      </section>

      <ConversionCta preset="blogArticle" variant="compact" className="bg-background" />

      <QuoteCtaBand
        preset="freeQuote"
        heading={`Book ${category.name} in Philadelphia`}
        body="Insured crews across Philadelphia and surrounding counties. Tell us about your property for a free quote."
      />
    </main>
  );
}
