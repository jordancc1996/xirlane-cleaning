import Link from "next/link";
import type { InternalLinkItem } from "@/lib/internal-links";

type RelatedLinkGridProps = {
  heading: string;
  intro?: string;
  links: InternalLinkItem[];
  className?: string;
  columns?: 2 | 3;
};

export default function RelatedLinkGrid({
  heading,
  intro,
  links,
  className = "bg-background py-16 md:py-20",
  columns = 3,
}: RelatedLinkGridProps) {
  if (links.length === 0) return null;

  const gridClass =
    columns === 2
      ? "mt-8 grid gap-6 md:grid-cols-2"
      : "mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3";

  return (
    <section className={className} aria-labelledby={heading.replace(/\s+/g, "-").toLowerCase()}>
      <div className="site-container">
        <h2
          id={heading.replace(/\s+/g, "-").toLowerCase()}
          className="text-h2-mobile text-text-primary md:text-h2"
        >
          {heading}
        </h2>
        {intro ? <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-text-body">{intro}</p> : null}
        <ul className={gridClass}>
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="card-base block h-full p-6">
                <h3 className="text-h3-mobile text-text-primary md:text-h3">{link.label}</h3>
                {link.description ? (
                  <p className="mt-3 text-[14px] leading-relaxed text-text-body">{link.description}</p>
                ) : null}
                <span className="mt-4 inline-block text-[12px] uppercase tracking-widest text-text-primary hover:text-accent">
                  Learn more &rarr;
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
