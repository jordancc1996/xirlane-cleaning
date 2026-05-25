import Link from "next/link";
import { OptimizedFillImage } from "@/components/ui/OptimizedImage";
import { BLOG_CATEGORIES } from "@/lib/blog-categories";
import type { BlogPost } from "@/lib/blog-types";
import { categoryUrl } from "@/lib/blog-categories";
import { BLOG_AUTHOR } from "@/lib/blog-author";
import { estimateReadingTime, formatPostDate } from "@/lib/blog";
import { IMAGE_SIZES } from "@/lib/images";

type BlogPostHeroProps = {
  post: BlogPost;
};

export default function BlogPostHero({ post }: BlogPostHeroProps) {
  const category = BLOG_CATEGORIES[post.categorySlug];
  const readTime = estimateReadingTime(post.sections);

  return (
    <header>
      <div className="relative h-[280px] overflow-hidden md:h-[420px]">
        <OptimizedFillImage
          src={post.featuredImage}
          alt={post.featuredImageAlt}
          sizes={IMAGE_SIZES.heroFull}
          priority
        />
        <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
      </div>
      <div className="site-container max-w-3xl py-10 md:py-12">
        <p className="text-[11px] uppercase tracking-eyebrow text-accent">
          <Link href={categoryUrl(post.categorySlug)} className="hover:underline">
            {category.name}
          </Link>
        </p>
        <h1 className="mt-4 font-heading text-h1-mobile font-light text-text-primary md:text-h1">
          {post.title}
        </h1>
        <p className="mt-5 text-[17px] leading-relaxed text-text-body md:text-[18px]">
          {post.excerpt}
        </p>
        <p className="mt-6 text-[13px] text-text-body/80">
          By {BLOG_AUTHOR.name} · {formatPostDate(post.publishedAt)}
          {post.updatedAt ? ` · Updated ${formatPostDate(post.updatedAt)}` : ""} · {readTime} min
          read
        </p>
      </div>
    </header>
  );
}
