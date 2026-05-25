import Link from "next/link";
import type { BlogInternalLink } from "@/lib/blog-types";

type BlogInternalLinksProps = {
  links: BlogInternalLink[];
  title?: string;
};

export default function BlogInternalLinks({
  links,
  title = "Book cleaning in Philadelphia",
}: BlogInternalLinksProps) {
  if (links.length === 0) return null;

  return (
    <nav
      className="mt-10 border-t border-border-light pt-8"
      aria-label="Related services and pages"
    >
      <h2 className="text-h3-mobile text-text-primary md:text-h3">{title}</h2>
      <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-[14px]">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="text-accent hover:underline">
              {link.label}
            </Link>
          </li>
        ))}
        <li>
          <Link href="/locations" className="text-text-primary hover:text-accent">
            Neighborhood pages
          </Link>
        </li>
        <li>
          <Link href="/contact" className="text-text-primary hover:text-accent">
            Free quote
          </Link>
        </li>
      </ul>
    </nav>
  );
}
