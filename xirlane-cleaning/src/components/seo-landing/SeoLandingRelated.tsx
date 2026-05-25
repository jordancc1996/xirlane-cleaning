import Link from "next/link";

export type RelatedLandingLink = {
  href: string;
  title: string;
  summary: string;
};

type SeoLandingRelatedProps = {
  links: RelatedLandingLink[];
};

export default function SeoLandingRelated({ links }: SeoLandingRelatedProps) {
  return (
    <section className="section-spacing bg-background" aria-labelledby="related-services-heading">
      <div className="site-container">
        <h2 id="related-services-heading" className="text-h2-mobile text-text-primary md:text-h2">
          Related Cleaning Services
        </h2>
        <p className="mt-4 max-w-2xl text-text-body">
          Explore other professional cleaning options for homes and businesses in Philadelphia
          and surrounding counties.
        </p>
        <ul className="mt-8 grid gap-6 md:grid-cols-3">
          {links.map((service) => (
            <li key={service.href}>
              <Link href={service.href} className="card-base block h-full p-6">
                <h3 className="text-h3-mobile text-text-primary md:text-h3">{service.title}</h3>
                <p className="mt-3 text-text-body">{service.summary}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
