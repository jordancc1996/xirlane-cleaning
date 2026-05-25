import Link from "next/link";
import EyebrowLabel from "@/components/ui/EyebrowLabel";
import Button from "@/components/ui/Button";
import type { LandingProcessStep } from "@/lib/seo-landing-pages";

type SeoLandingProcessProps = {
  heading: string;
  intro: string;
  steps: LandingProcessStep[];
};

export default function SeoLandingProcess({ heading, intro, steps }: SeoLandingProcessProps) {
  return (
    <section className="section-spacing bg-background" aria-labelledby="service-process-heading">
      <div className="site-container">
        <div className="mx-auto max-w-3xl text-center">
          <EyebrowLabel>THE PROCESS</EyebrowLabel>
          <h2 id="service-process-heading" className="mt-4 text-h2-mobile text-text-primary md:text-h2">
            {heading}
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-text-body">{intro}</p>
        </div>

        <ol className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
          {steps.map((step, index) => (
            <li key={step.title} className="relative text-center">
              <p
                className="pointer-events-none font-heading text-[72px] font-light leading-none text-border-light"
                aria-hidden="true"
              >
                {index + 1}
              </p>
              <h3 className="relative z-10 -mt-10 text-[16px] font-medium uppercase tracking-wide text-text-primary">
                {step.title}
              </h3>
              <p className="relative z-10 mt-3 text-[14px] leading-relaxed text-text-body">
                {step.description}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-12 text-center">
          <Button href="/contact">REQUEST A FREE QUOTE &rarr;</Button>
          <p className="mt-4 text-[13px] text-text-body">
            Questions? See our{" "}
            <Link href="/faq" className="text-accent hover:underline">
              FAQ
            </Link>{" "}
            or{" "}
            <Link href="/service-areas" className="text-accent hover:underline">
              service areas
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
