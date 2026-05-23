import Link from "next/link";
import { HiOutlineCalendarDays, HiOutlineClock, HiSparkles } from "react-icons/hi2";
import EyebrowLabel from "@/components/ui/EyebrowLabel";
import Button from "@/components/ui/Button";

const steps = [
  {
    title: "Choose Your Clean",
    description:
      "Tell us about your home or office, pick a service, and select one-time or recurring visits.",
    Icon: HiOutlineCalendarDays,
  },
  {
    title: "Schedule Your Visit",
    description:
      "Select a date and we will confirm your booking. Prefer to talk first? Call or email anytime.",
    Icon: HiOutlineClock,
  },
  {
    title: "Enjoy Your Space",
    description:
      "Our crew arrives on time with supplies ready. You get a consistent clean and time back in your day.",
    Icon: HiSparkles,
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-section-alt-bg py-16 md:py-20" aria-labelledby="how-it-works-heading">
      <div className="site-container">
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

        <div className="relative mt-8">
          <div className="pointer-events-none absolute left-0 right-0 top-10 hidden border-t border-dotted border-accent lg:block" />
          <div className="grid gap-8 lg:grid-cols-3">
            {steps.map((step, index) => (
              <article key={step.title} className="relative text-center">
                <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center border border-border-light bg-white text-text-primary">
                  <step.Icon size={20} aria-hidden="true" />
                </div>
                <p
                  className="pointer-events-none absolute left-1/2 top-7 -translate-x-1/2 font-heading text-[72px] font-light leading-none text-border-light"
                  aria-hidden="true"
                >
                  {index + 1}
                </p>
                <h3 className="relative mt-10 text-[16px] font-medium uppercase tracking-wide text-text-primary">
                  {step.title}
                </h3>
                <p className="relative mt-2 text-[14px] leading-snug text-text-body">{step.description}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center">
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
