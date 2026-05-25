import type { Metadata } from "next";
import { JsonLdGraph } from "@/components/seo/JsonLd";
import type { BlogCategorySlug } from "@/lib/blog-categories";
import { BLOG_CATEGORIES, categoryUrl } from "@/lib/blog-categories";
import type { BlogPost } from "@/lib/blog-types";
import { blogPostUrl } from "@/lib/blog";
import {
  blogCategoryItemListSchema,
  blogPostingSchema,
  breadcrumbSchema,
  faqPageSchema,
  webPageSchema,
} from "@/lib/schema";
import { createPageMetadata } from "@/lib/seo";
import { BUSINESS } from "@/lib/site";

export function buildPostMetadata(post: BlogPost): Metadata {
  return createPageMetadata({
    title: post.title,
    description: post.description,
    path: blogPostUrl(post.slug),
    keywords: post.keywords,
    ogType: "article",
    ogImage: post.featuredImage,
    ogImageAlt: post.featuredImageAlt,
  });
}

export function buildCategoryMetadata(categorySlug: BlogCategorySlug): Metadata {
  const cat = BLOG_CATEGORIES[categorySlug];
  const title = `${cat.metaTitle} | ${BUSINESS.name}`;
  return createPageMetadata({
    title,
    titleAbsolute: true,
    description: cat.metaDescription,
    path: categoryUrl(categorySlug),
    keywords: [
      `${cat.name} Philadelphia`,
      "cleaning blog Philadelphia",
      BUSINESS.name,
    ],
  });
}

type BreadcrumbItem = { name: string; path: string };

export function BlogPostJsonLd({
  post,
  breadcrumbs,
}: {
  post: BlogPost;
  breadcrumbs: BreadcrumbItem[];
}) {
  const path = blogPostUrl(post.slug);
  const faqNodes =
    post.faqs.length > 0
      ? [
          faqPageSchema(
            post.faqs.map((f) => ({ id: f.id, question: f.question, answer: f.answer })),
            { path, pageName: `${post.title} — FAQ` },
          ),
        ]
      : [];

  return (
    <JsonLdGraph
      nodes={[
        breadcrumbSchema(breadcrumbs, { pagePath: path }),
        webPageSchema({
          path,
          name: post.title,
          description: post.description,
          pageType: "WebPage",
        }),
        blogPostingSchema(post),
        ...faqNodes,
      ]}
    />
  );
}

export function BlogCategoryJsonLd({
  categorySlug,
  breadcrumbs,
  posts,
}: {
  categorySlug: BlogCategorySlug;
  breadcrumbs: BreadcrumbItem[];
  posts: BlogPost[];
}) {
  const cat = BLOG_CATEGORIES[categorySlug];
  const path = categoryUrl(categorySlug);

  return (
    <JsonLdGraph
      nodes={[
        breadcrumbSchema(breadcrumbs, { pagePath: path }),
        webPageSchema({
          path,
          name: cat.metaTitle,
          description: cat.metaDescription,
          pageType: "CollectionPage",
        }),
        blogCategoryItemListSchema(categorySlug, posts),
      ]}
    />
  );
}
