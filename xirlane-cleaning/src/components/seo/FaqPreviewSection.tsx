import Link from "next/link";
import ConversionCta from "@/components/seo/ConversionCta";
import EyebrowLabel from "@/components/ui/EyebrowLabel";
import FaqAnswerText from "@/components/seo/FaqAnswerText";
import { getFaqsBySet, type FaqSetKey } from "@/lib/faq-sets";
import type { CtaPresetKey } from "@/lib/cta-presets";

type FaqPreviewSectionProps = {
  setKey: FaqSetKey;
  heading?: string;
  intro?: string;
  className?: string;
  /** Compact CTA below FAQ items — off by default to avoid stacking with page-end bands. */
  ctaPreset?: CtaPresetKey;
};

export default function FaqPreviewSection({
  setKey,
  heading = "Common Questions",
  intro = "Quick answers about booking, pricing, and service areas in Greater Philadelphia.",
  className = "bg-background py-16 md:py-20",
  ctaPreset,
}: FaqPreviewSectionProps) {
  const items = getFaqsBySet(setKey);

  if (items.length === 0) return null;

  return (
    <>
      <section className={className} aria-labelledby={`faq-preview-${setKey}`}>
        <div className="site-container max-w-3xl">
          <EyebrowLabel>FAQ</EyebrowLabel>
          <h2 id={`faq-preview-${setKey}`} className="mt-4 text-h2-mobile text-text-primary md:text-h2">
            {heading}
          </h2>
          <p className="mt-4 text-text-body">{intro}</p>

          <div className="mt-10 space-y-8">
            {items.map((faq) => (
              <article key={faq.id} className="border-b border-border-light pb-8">
                <h3 className="text-h3-mobile text-text-primary md:text-h3">{faq.question}</h3>
                <p className="mt-3 text-text-body">
                  <FaqAnswerText text={faq.answer} />
                </p>
              </article>
            ))}
          </div>

          <p className="mt-10 text-[14px] text-text-body">
            <Link href="/faq" className="text-accent underline-offset-4 hover:underline">
              View all frequently asked questions
            </Link>
            {" · "}
            <Link href="/contact" className="text-accent underline-offset-4 hover:underline">
              Get a free quote
            </Link>
          </p>
        </div>
      </section>

      {ctaPreset ? (
        <ConversionCta
          preset={ctaPreset}
          variant="compact"
          className="bg-background pb-16 pt-0 md:pb-20"
          id={`faq-cta-${setKey}`}
        />
      ) : null}
    </>
  );
}
