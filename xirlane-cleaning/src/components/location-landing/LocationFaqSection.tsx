import Link from "next/link";
import EyebrowLabel from "@/components/ui/EyebrowLabel";
import FaqAnswerText from "@/components/seo/FaqAnswerText";
import type { LocationFaqItem } from "@/lib/location-landing-pages";

type LocationFaqSectionProps = {
  neighborhoodName: string;
  intro: string;
  faqs: LocationFaqItem[];
};

export default function LocationFaqSection({
  neighborhoodName,
  intro,
  faqs,
}: LocationFaqSectionProps) {
  return (
    <section className="bg-section-alt-bg py-16 md:py-20" aria-labelledby="location-faq-heading">
      <div className="site-container max-w-3xl">
        <EyebrowLabel>FAQ</EyebrowLabel>
        <h2 id="location-faq-heading" className="mt-4 text-h2-mobile text-text-primary md:text-h2">
          {neighborhoodName} Cleaning FAQ
        </h2>
        <p className="mt-4 text-[15px] leading-relaxed text-text-body">{intro}</p>

        <div className="mt-10 space-y-8">
          {faqs.map((faq) => (
            <article key={faq.id} className="border-b border-border-light pb-8">
              <h3 className="text-h3-mobile text-text-primary md:text-h3">{faq.question}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-text-body">
                <FaqAnswerText text={faq.answer} />
              </p>
            </article>
          ))}
        </div>

        <p className="mt-10 text-[14px] text-text-body">
          <Link href="/faq" className="text-accent hover:underline">
            View all frequently asked questions
          </Link>
          {" · "}
          <Link href="/contact" className="text-accent hover:underline">
            Get a free quote
          </Link>
        </p>
      </div>
    </section>
  );
}
