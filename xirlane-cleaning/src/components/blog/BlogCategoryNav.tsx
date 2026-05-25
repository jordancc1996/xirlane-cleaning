import Link from "next/link";
import { BLOG_CATEGORY_LIST, categoryUrl, type BlogCategorySlug } from "@/lib/blog-categories";

type BlogCategoryNavProps = {
  activeSlug?: BlogCategorySlug;
};

export default function BlogCategoryNav({ activeSlug }: BlogCategoryNavProps) {
  return (
    <nav className="mt-8" aria-label="Blog categories">
      <ul className="flex flex-wrap gap-2">
        <li>
          <Link
            href="/blog"
            className={`border px-4 py-2 text-[12px] uppercase tracking-widest transition-colors ${
              !activeSlug
                ? "border-accent bg-accent/10 text-text-primary"
                : "border-border-light bg-white text-text-body hover:border-accent"
            }`}
          >
            All
          </Link>
        </li>
        {BLOG_CATEGORY_LIST.map((cat) => (
          <li key={cat.slug}>
            <Link
              href={categoryUrl(cat.slug)}
              className={`border px-4 py-2 text-[12px] uppercase tracking-widest transition-colors ${
                activeSlug === cat.slug
                  ? "border-accent bg-accent/10 text-text-primary"
                  : "border-border-light bg-white text-text-body hover:border-accent"
              }`}
            >
              {cat.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
