import Link from "next/link";
import { BLOG_CATEGORY_LIST, categoryUrl } from "@/lib/blog-categories";
import { BLOG_POSTS, blogPostUrl } from "@/lib/blog";
import { LOCATION_NAV_LINKS } from "@/lib/location-landing-pages";
import { LANDING_NAV_LINKS } from "@/lib/seo-landing-pages";

/**
 * Full site link list in SSR HTML for crawlers and assistive tech.
 * Visually hidden; primary navigation remains in Navbar and Footer.
 */
export default function CrawlerSiteNav() {
  return (
    <nav className="sr-only" aria-label="All pages on Xirlane Cleaning">
      <p>Site map</p>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/services">All cleaning services</Link>
        </li>
        {LANDING_NAV_LINKS.map((service) => (
          <li key={service.href}>
            <Link href={service.href}>{service.label}</Link>
          </li>
        ))}
        <li>
          <Link href="/service-areas">Service areas — counties</Link>
        </li>
        <li>
          <Link href="/locations">Philadelphia neighborhoods index</Link>
        </li>
        {LOCATION_NAV_LINKS.map((loc) => (
          <li key={loc.href}>
            <Link href={loc.href}>Cleaning in {loc.label}</Link>
          </li>
        ))}
        <li>
          <Link href="/blog">Blog index</Link>
        </li>
        {BLOG_CATEGORY_LIST.map((cat) => (
          <li key={cat.slug}>
            <Link href={categoryUrl(cat.slug)}>{cat.name} articles</Link>
          </li>
        ))}
        {BLOG_POSTS.map((post) => (
          <li key={post.slug}>
            <Link href={blogPostUrl(post.slug)}>{post.title}</Link>
          </li>
        ))}
        <li>
          <Link href="/gallery">Gallery</Link>
        </li>
        <li>
          <Link href="/faq">FAQ</Link>
        </li>
        <li>
          <Link href="/contact">Contact and quote</Link>
        </li>
      </ul>
    </nav>
  );
}
