import BlogAuthorBox from "@/components/blog/BlogAuthorBox";
import BlogInternalLinks from "@/components/blog/BlogInternalLinks";
import BlogPostContent from "@/components/blog/BlogPostContent";
import BlogPostFaq from "@/components/blog/BlogPostFaq";
import BlogPostHero from "@/components/blog/BlogPostHero";
import BlogRelatedPosts from "@/components/blog/BlogRelatedPosts";
import RelatedLinkGrid from "@/components/seo/RelatedLinkGrid";
import {
  getLocationLinksFromPaths,
  getServiceLinksFromPaths,
} from "@/lib/internal-links";
import BlogTableOfContents from "@/components/blog/BlogTableOfContents";
import QuoteCtaBand from "@/components/seo/QuoteCtaBand";
import type { BlogPost } from "@/lib/blog-types";
import { getRelatedPosts } from "@/lib/blog";
import { getTocItems } from "@/lib/blog-utils";

type BlogPostTemplateProps = {
  post: BlogPost;
};

export default function BlogPostTemplate({ post }: BlogPostTemplateProps) {
  const tocItems = getTocItems(post.sections);
  const relatedPosts = getRelatedPosts(post.relatedPostSlugs);
  const serviceLinks = getServiceLinksFromPaths(post.relatedServicePaths);
  const locationLinks = getLocationLinksFromPaths(post.relatedLocationPaths ?? []);

  return (
    <article className="bg-background">
      <BlogPostHero post={post} />

      <div className="site-container pb-16 md:pb-20">
        <div className="mx-auto grid max-w-4xl gap-10 lg:grid-cols-[minmax(0,1fr)_240px] lg:gap-14">
          <div className="min-w-0">
            <div className="lg:hidden">
              <BlogTableOfContents items={tocItems} />
            </div>
            <div className="mt-10 lg:mt-0">
              <BlogPostContent sections={post.sections} />
            </div>
            <BlogPostFaq faqs={post.faqs} />
            <BlogInternalLinks links={post.internalLinks} />
            <BlogAuthorBox />
          </div>

          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <BlogTableOfContents items={tocItems} />
            </div>
          </aside>
        </div>
      </div>

      {(serviceLinks.length > 0 || locationLinks.length > 0) && (
        <RelatedLinkGrid
          heading="Book cleaning mentioned in this article"
          links={[...serviceLinks, ...locationLinks]}
          className="border-t border-border-light bg-section-alt-bg py-16 md:py-20"
          columns={2}
        />
      )}

      <QuoteCtaBand
        preset="bookCleaning"
        heading="Ready for Professional Cleaning in Philadelphia?"
        body="House, apartment, commercial, deep, move-out, and Airbnb cleaning across Greater Philadelphia. Get a free quote from our insured crews."
      />

      <BlogRelatedPosts posts={relatedPosts} />
    </article>
  );
}
