import Link from "next/link";
import { OptimizedFillImage } from "@/components/ui/OptimizedImage";
import { BLOG_CATEGORIES, categoryUrl } from "@/lib/blog-categories";
import type { BlogPost } from "@/lib/blog-types";
import { blogPostUrl, estimateReadingTime, formatPostDate } from "@/lib/blog";
import { IMAGE_SIZES } from "@/lib/images";

type BlogCardProps = {
  post: BlogPost;
};

export default function BlogCard({ post }: BlogCardProps) {
  const category = BLOG_CATEGORIES[post.categorySlug];
  const readTime = estimateReadingTime(post.sections);

  return (
    <article className="group flex h-full flex-col overflow-hidden border border-border-light bg-white">
      <Link href={blogPostUrl(post.slug)} className="relative block h-[220px] overflow-hidden">
        <OptimizedFillImage
          src={post.featuredImage}
          alt={post.featuredImageAlt}
          sizes={IMAGE_SIZES.card}
          loading="lazy"
          fetchPriority="low"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </Link>
      <div className="flex flex-1 flex-col p-6 md:p-8">
        <p className="text-[11px] uppercase tracking-eyebrow text-accent">
          <Link href={categoryUrl(post.categorySlug)} className="hover:underline">
            {category.name}
          </Link>
        </p>
        <h2 className="mt-3 text-h3-mobile text-text-primary md:text-h3">
          <Link href={blogPostUrl(post.slug)} className="hover:text-accent">
            {post.title}
          </Link>
        </h2>
        <p className="mt-3 flex-1 text-[15px] leading-relaxed text-text-body">{post.excerpt}</p>
        <p className="mt-5 text-[12px] text-text-body/70">
          {formatPostDate(post.publishedAt)} · {readTime} min read
        </p>
        <Link
          href={blogPostUrl(post.slug)}
          className="mt-4 text-[12px] uppercase tracking-widest text-text-primary group-hover:text-accent"
        >
          Read article &rarr;
        </Link>
      </div>
    </article>
  );
}
