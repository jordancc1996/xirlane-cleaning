import Link from "next/link";
import { SITE_HUB_LINKS } from "@/lib/internal-links";

type SiteHubLinksProps = {
  heading?: string;
  className?: string;
};

/** Compact hub navigation for pages that need stronger crawl paths to services, locations, and blog. */
export default function SiteHubLinks({
  heading = "Explore Xirlane Cleaning",
  className = "border-t border-border-light bg-section-alt-bg py-14 md:py-16",
}: SiteHubLinksProps) {
  return (
    <section className={className} aria-labelledby="site-hub-links-heading">
      <div className="site-container max-w-3xl">
        <h2 id="site-hub-links-heading" className="text-h2-mobile text-text-primary md:text-h2">
          {heading}
        </h2>
        <p className="mt-4 text-[15px] leading-relaxed text-text-body">
          Browse services, Philadelphia neighborhood pages, cleaning guides, and ways to get a quote.
        </p>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {SITE_HUB_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="block border border-border-light bg-white p-5 transition-colors hover:border-accent"
              >
                <span className="text-[15px] font-medium text-text-primary">{link.label}</span>
                {link.description ? (
                  <span className="mt-2 block text-[13px] leading-relaxed text-text-body">
                    {link.description}
                  </span>
                ) : null}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
