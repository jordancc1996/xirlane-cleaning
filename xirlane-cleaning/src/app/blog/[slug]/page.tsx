import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogBreadcrumbs from "@/components/blog/BlogBreadcrumbs";
import BlogPostTemplate from "@/components/blog/BlogPostTemplate";
import { BLOG_CATEGORIES } from "@/lib/blog-categories";
import { categoryUrl } from "@/lib/blog-categories";
import {
  BLOG_INDEX_PATH,
  blogPostUrl,
  getAllPostSlugs,
  getPostBySlug,
} from "@/lib/blog";
import { BlogPostJsonLd, buildPostMetadata } from "@/lib/blog-seo";

type PageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();
  return buildPostMetadata(post);
}

export default function BlogPostPage({ params }: PageProps) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const category = BLOG_CATEGORIES[post.categorySlug];

  return (
    <main className="bg-background">
      <BlogPostJsonLd
        post={post}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Blog", path: BLOG_INDEX_PATH },
          { name: category.name, path: categoryUrl(post.categorySlug) },
          { name: post.title, path: blogPostUrl(post.slug) },
        ]}
      />
      <BlogBreadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Blog", path: BLOG_INDEX_PATH },
          { name: category.name, path: categoryUrl(post.categorySlug) },
          { name: post.title },
        ]}
      />
      <BlogPostTemplate post={post} />
    </main>
  );
}
