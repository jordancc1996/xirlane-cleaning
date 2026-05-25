import EyebrowLabel from "@/components/ui/EyebrowLabel";

export type LandingBenefit = {
  title: string;
  description: string;
};

type SeoLandingBenefitsProps = {
  eyebrow?: string;
  heading: string;
  intro?: string;
  benefits: LandingBenefit[];
};

export default function SeoLandingBenefits({
  eyebrow = "WHY CHOOSE THIS SERVICE",
  heading,
  intro,
  benefits,
}: SeoLandingBenefitsProps) {
  return (
    <section className="bg-section-alt-bg py-16 md:py-20" aria-labelledby="service-benefits-heading">
      <div className="site-container">
        <EyebrowLabel>{eyebrow}</EyebrowLabel>
        <h2 id="service-benefits-heading" className="mt-4 text-h2-mobile text-text-primary md:text-h2">
          {heading}
        </h2>
        {intro ? <p className="mt-4 max-w-3xl text-text-body">{intro}</p> : null}

        <ul className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <li
              key={benefit.title}
              className="border border-border-light bg-white p-6 md:p-8"
            >
              <h3 className="text-h3-mobile text-text-primary md:text-h3">{benefit.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-text-body">
                {benefit.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
