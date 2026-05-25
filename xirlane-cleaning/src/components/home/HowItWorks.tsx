import Link from "next/link";
import EyebrowLabel from "@/components/ui/EyebrowLabel";
import Button from "@/components/ui/Button";
import HowItWorksSteps from "@/components/home/HowItWorksSteps";

export default function HowItWorks() {
  return (
    <section
      className="overflow-x-hidden bg-section-alt-bg px-4 py-16 sm:px-6 md:px-8 md:py-20"
      aria-labelledby="how-it-works-heading"
    >
      <div className="site-container px-0">
        <div className="mx-auto max-w-3xl text-center">
          <EyebrowLabel>THE PROCESS</EyebrowLabel>
          <h2 id="how-it-works-heading" className="mt-4 text-h2-mobile text-text-primary md:text-h2">
            Getting a Clean Has Never Been Easier
          </h2>
          <p className="mt-4 text-[15px] text-text-body">
            Book house cleaning, commercial cleaning, or a deep clean in a few steps. We serve
            homeowners and businesses throughout the Philadelphia metro.
          </p>
        </div>

        <HowItWorksSteps />

        <div className="py-12 text-center md:py-16">
          <Button href="/contact">BOOK YOUR FIRST CLEAN &rarr;</Button>
          <p className="mt-4 text-[13px] text-text-body">
            Questions about pricing or service areas? See our{" "}
            <Link href="/faq" className="text-accent hover:underline">
              FAQ
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
