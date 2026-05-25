"use client";

import { HiOutlineCalendarDays, HiOutlineClock, HiSparkles } from "react-icons/hi2";
import { type CSSProperties } from "react";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";

const STAGGER_MS = 150;

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

export default function HowItWorksSteps() {
  const { ref, isVisible } = useScrollFadeIn<HTMLDivElement>();

  return (
    <div ref={ref} className="relative mt-8 w-full max-w-full min-w-0">
      <div className="pointer-events-none absolute left-0 right-0 top-10 hidden border-t border-dotted border-accent lg:block" />
      <div className="grid w-full min-w-0 grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-8">
        {steps.map((step, index) => (
          <article
            key={step.title}
            className={`scroll-fade-up relative box-border min-w-0 overflow-x-clip px-4 text-center ${
              isVisible ? "is-visible" : ""
            }`}
            style={
              {
                "--scroll-fade-delay": `${index * STAGGER_MS}ms`,
              } as CSSProperties
            }
          >
            <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center border border-border-light bg-white text-text-primary">
              <step.Icon size={20} aria-hidden="true" />
            </div>
            <div className="relative px-1 sm:px-0">
              <p
                className="pointer-events-none absolute inset-x-0 top-0 z-0 text-center font-heading text-[72px] font-light leading-none text-border-light"
                aria-hidden="true"
              >
                {index + 1}
              </p>
              <h3 className="relative z-10 break-words pt-8 text-[16px] font-medium uppercase tracking-wide text-text-primary">
                {step.title}
              </h3>
              <p className="relative z-10 mt-2 break-words text-[14px] leading-snug text-text-body">
                {step.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
