import Link from "next/link";
import { BUSINESS } from "@/lib/site";

type NapBlockProps = {
  variant?: "inline" | "stacked";
  className?: string;
};

/**
 * Consistent Name, Address, Phone block — must match Google Business Profile.
 */
export default function NapBlock({ variant = "stacked", className = "" }: NapBlockProps) {
  const itemClass =
    variant === "inline"
      ? "text-[13px] text-text-body/80"
      : "text-[13px] not-italic text-text-body/80";

  return (
    <address
      className={`${variant === "stacked" ? "space-y-2" : "flex flex-wrap gap-x-3 gap-y-1"} not-italic ${className}`}
      itemScope
      itemType="https://schema.org/LocalBusiness"
    >
      <meta itemProp="name" content={BUSINESS.name} />
      <p className={itemClass}>
        <span className="font-medium text-text-primary">{BUSINESS.name}</span>
      </p>
      <p className={itemClass} itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
        <span itemProp="addressLocality">{BUSINESS.locality}</span>,{" "}
        <span itemProp="addressRegion">{BUSINESS.region}</span>{" "}
        <span itemProp="postalCode">{BUSINESS.postalCode}</span>
        <meta itemProp="addressCountry" content={BUSINESS.country} />
        <span className="text-text-body/70"> — Greater Philadelphia service area</span>
      </p>
      <p className={itemClass}>
        <a href={`tel:${BUSINESS.phone}`} className="hover:text-accent" itemProp="telephone">
          {BUSINESS.phoneDisplay}
        </a>
      </p>
      <p className={itemClass}>
        <a href={`mailto:${BUSINESS.email}`} className="hover:text-accent" itemProp="email">
          {BUSINESS.email}
        </a>
      </p>
      {BUSINESS.googleBusinessProfileUrl ? (
        <p className={itemClass}>
          <Link
            href={BUSINESS.googleBusinessProfileUrl}
            rel="noopener noreferrer"
            target="_blank"
            className="hover:text-accent"
          >
            View on Google
          </Link>
        </p>
      ) : null}
    </address>
  );
}
