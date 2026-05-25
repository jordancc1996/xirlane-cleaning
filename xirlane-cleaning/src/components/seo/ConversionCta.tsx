import Link from "next/link";
import Button from "@/components/ui/Button";
import EyebrowLabel from "@/components/ui/EyebrowLabel";
import {
  getCtaPreset,
  type CtaPreset,
  type CtaPresetKey,
} from "@/lib/cta-presets";

export type ConversionCtaVariant = "band" | "inline" | "compact";

type ConversionCtaProps = {
  preset?: CtaPresetKey;
  variant?: ConversionCtaVariant;
  eyebrow?: string;
  heading?: string;
  body?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  footnote?: string;
  className?: string;
  id?: string;
  /** Removes outer vertical padding (for in-content placement). */
  flush?: boolean;
};

function resolveContent(props: ConversionCtaProps): CtaPreset & { id: string } {
  const base = props.preset
    ? getCtaPreset(props.preset)
    : {
        eyebrow: "GET STARTED",
        heading: "",
        body: "",
        primaryLabel: "REQUEST A FREE QUOTE →",
        primaryHref: "/contact",
      };

  return {
    eyebrow: props.eyebrow ?? base.eyebrow,
    heading: props.heading ?? base.heading,
    body: props.body ?? base.body,
    primaryLabel: props.primaryLabel ?? base.primaryLabel,
    primaryHref: props.primaryHref ?? base.primaryHref,
    secondaryLabel: props.secondaryLabel ?? base.secondaryLabel,
    secondaryHref: props.secondaryHref ?? base.secondaryHref,
    footnote: props.footnote ?? base.footnote,
    id: props.id ?? "conversion-cta-heading",
  };
}

export default function ConversionCta({
  preset,
  variant = "band",
  className = "",
  flush = false,
  ...props
}: ConversionCtaProps) {
  const content = resolveContent({ preset, ...props });
  const headingId = content.id;

  if (variant === "inline") {
    return (
      <section
        className={`section-spacing ${className}`.trim()}
        aria-labelledby={headingId}
      >
        <div className="site-container">
          <div className="border border-border-light bg-white p-8 md:p-10 lg:p-12">
            <EyebrowLabel>{content.eyebrow}</EyebrowLabel>
            <h2
              id={headingId}
              className="mt-4 text-h2-mobile text-text-primary md:text-h2"
            >
              {content.heading}
            </h2>
            <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-text-body md:text-[16px]">
              {content.body}
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
              <Button href={content.primaryHref} className="w-full sm:w-auto">
                {content.primaryLabel}
              </Button>
              {content.secondaryLabel && content.secondaryHref ? (
                <Button
                  href={content.secondaryHref}
                  variant="ghost"
                  className="w-full sm:w-auto"
                >
                  {content.secondaryLabel}
                </Button>
              ) : null}
            </div>
            {content.footnote ? (
              <p className="mt-6 text-[12px] uppercase tracking-widest text-text-body/70">
                {content.footnote}
              </p>
            ) : null}
          </div>
        </div>
      </section>
    );
  }

  if (variant === "compact") {
    const compactPadding = flush ? "" : "py-10 md:py-12";
    return (
      <section
        className={`${compactPadding} ${className}`.trim()}
        aria-labelledby={headingId}
      >
        <div className="site-container">
          <div className="flex flex-col gap-6 border border-border-light bg-section-alt-bg p-6 md:flex-row md:items-center md:justify-between md:gap-10 md:p-8">
            <div className="min-w-0 md:max-w-xl">
              <p className="text-[11px] uppercase tracking-eyebrow text-accent">
                {content.eyebrow}
              </p>
              <h2
                id={headingId}
                className="mt-3 text-h3-mobile text-text-primary md:text-h3"
              >
                {content.heading}
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-text-body">
                {content.body}
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
              <Button href={content.primaryHref} className="w-full sm:min-w-[200px]">
                {content.primaryLabel}
              </Button>
              {content.secondaryLabel && content.secondaryHref ? (
                <Link
                  href={content.secondaryHref}
                  className="inline-flex min-h-12 items-center justify-center px-4 text-[13px] uppercase tracking-widest text-accent transition-colors hover:text-text-primary"
                >
                  {content.secondaryLabel}
                </Link>
              ) : null}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      className={`relative overflow-hidden bg-text-primary py-16 md:py-20 ${className}`.trim()}
      aria-labelledby={headingId}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,169,110,0.12),transparent_55%)]"
        aria-hidden="true"
      />
      <div className="site-container relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <EyebrowLabel className="text-accent">{content.eyebrow}</EyebrowLabel>
          <h2
            id={headingId}
            className="mt-4 font-heading text-h2-mobile font-light text-white md:text-h2"
          >
            {content.heading}
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-white/80 md:text-[16px]">
            {content.body}
          </p>

          <div className="mt-10 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center sm:gap-5">
            <Button
              href={content.primaryHref}
              variant="accent"
              className="w-full sm:w-auto sm:min-w-[220px]"
            >
              {content.primaryLabel}
            </Button>
            {content.secondaryLabel && content.secondaryHref ? (
              <Button
                href={content.secondaryHref}
                variant="light"
                className="w-full sm:w-auto sm:min-w-[220px]"
              >
                {content.secondaryLabel}
              </Button>
            ) : null}
          </div>

          {content.footnote ? (
            <p className="mt-6 text-[12px] uppercase tracking-widest text-white/45">
              {content.footnote}
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
