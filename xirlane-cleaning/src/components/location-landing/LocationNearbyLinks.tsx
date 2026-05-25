import Link from "next/link";

export type NearbyLocationLink = {
  href: string;
  label: string;
};

type LocationNearbyLinksProps = {
  links: NearbyLocationLink[];
};

export default function LocationNearbyLinks({ links }: LocationNearbyLinksProps) {
  if (links.length === 0) return null;

  return (
    <section className="border-t border-border-light bg-background py-12 md:py-14">
      <div className="site-container max-w-3xl">
        <h2 className="text-h3-mobile text-text-primary md:text-h3">Nearby service areas</h2>
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
              All Philadelphia neighborhoods
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
