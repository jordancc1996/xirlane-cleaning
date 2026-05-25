import ConversionCta from "@/components/seo/ConversionCta";
import type { CtaPresetKey } from "@/lib/cta-presets";

type QuoteCtaBandProps = {
  preset?: CtaPresetKey;
  eyebrow?: string;
  heading: string;
  body: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  footnote?: string;
  className?: string;
};

/** Full-width dark CTA band — use sparingly (typically one per page). */
export default function QuoteCtaBand({
  preset = "bookCleaning",
  eyebrow,
  heading,
  body,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  footnote,
  className,
}: QuoteCtaBandProps) {
  return (
    <ConversionCta
      preset={preset}
      variant="band"
      eyebrow={eyebrow}
      heading={heading}
      body={body}
      primaryLabel={primaryLabel}
      primaryHref={primaryHref}
      secondaryLabel={secondaryLabel}
      secondaryHref={secondaryHref}
      footnote={footnote}
      className={className}
      id="quote-cta-band-heading"
    />
  );
}
