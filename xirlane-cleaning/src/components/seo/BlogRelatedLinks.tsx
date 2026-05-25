import Link from "next/link";
import { BLOG_DEFAULT_SERVICE_LINKS, BLOG_INDEX_PATH } from "@/lib/blog";

type BlogRelatedLinksProps = {
  title?: string;
};

/** Reusable interlink block for future blog posts and resource sections. */
export default function BlogRelatedLinks({
  title = "Explore cleaning services",
}: BlogRelatedLinksProps) {
  return (
    <nav
      className="border-t border-border-light pt-8"
      aria-label="Related cleaning services"
    >
      <h2 className="text-h3-mobile text-text-primary md:text-h3">{title}</h2>
      <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-[14px]">
        {BLOG_DEFAULT_SERVICE_LINKS.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="text-accent hover:underline">
              {link.label}
            </Link>
          </li>
        ))}
        <li>
          <Link href="/faq" className="text-text-primary hover:text-accent">
            FAQ
          </Link>
        </li>
        <li>
          <Link href="/contact" className="text-text-primary hover:text-accent">
            Free quote
          </Link>
        </li>
        <li>
          <Link href={BLOG_INDEX_PATH} className="text-text-primary hover:text-accent">
            Blog
          </Link>
        </li>
      </ul>
    </nav>
  );
}
