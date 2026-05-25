import Link from "next/link";
import ConversionCta from "@/components/seo/ConversionCta";
import FaqAnswerText from "@/components/seo/FaqAnswerText";
import EyebrowLabel from "@/components/ui/EyebrowLabel";
import type { BlogFaqItem } from "@/lib/blog-types";

type BlogPostFaqProps = {
  faqs: BlogFaqItem[];
};

export default function BlogPostFaq({ faqs }: BlogPostFaqProps) {
  if (faqs.length === 0) return null;

  return (
    <>
      <section className="mt-14 border-t border-border-light pt-12" aria-labelledby="post-faq-heading">
        <EyebrowLabel>FAQ</EyebrowLabel>
        <h2 id="post-faq-heading" className="blog-h2 mt-4">
          Frequently Asked Questions
        </h2>
        <div className="mt-8 space-y-8">
          {faqs.map((faq) => (
            <article key={faq.id} className="border-b border-border-light pb-8 last:border-0">
              <h3 className="blog-h3">{faq.question}</h3>
              <p className="mt-3 text-[16px] leading-relaxed text-text-body">
                <FaqAnswerText text={faq.answer} />
              </p>
            </article>
          ))}
        </div>
        <p className="mt-8 text-[14px] text-text-body">
          <Link href="/faq" className="text-accent hover:underline">
            More cleaning FAQ
          </Link>
        </p>
      </section>

      <ConversionCta
        preset="freeQuote"
        variant="compact"
        flush
        className="mt-10"
        id="blog-post-faq-cta"
      />
    </>
  );
}
