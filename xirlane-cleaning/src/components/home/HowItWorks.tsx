"use client";

import { motion } from "framer-motion";
import { HiOutlineCalendarDays, HiOutlineClock, HiSparkles } from "react-icons/hi2";
import EyebrowLabel from "@/components/ui/EyebrowLabel";
import Button from "@/components/ui/Button";

const steps = [
  {
    title: "CHOOSE YOUR CLEAN",
    description:
      "Click Book Now, fill in your details, and choose your preferences and visit frequency.",
    Icon: HiOutlineCalendarDays,
  },
  {
    title: "SCHEDULE YOUR VISIT",
    description:
      "Select a date and we'll send a booking confirmation. We're always happy to chat by phone too.",
    Icon: HiOutlineClock,
  },
  {
    title: "ENJOY YOUR SPACE",
    description:
      "Our high-quality clean gives you a sigh of relief. We do the cleaning so you can make the memories.",
    Icon: HiSparkles,
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-section-alt-bg py-16 md:py-20">
      <div className="site-container">
        <div className="mx-auto max-w-3xl text-center">
          <EyebrowLabel>THE PROCESS</EyebrowLabel>
          <h2 className="mt-4 text-h2-mobile text-text-primary md:text-h2">
            Getting a Clean Has Never Been Easier
          </h2>
        </div>

        <div className="relative mt-8">
          <div className="pointer-events-none absolute left-0 right-0 top-10 hidden border-t border-dotted border-accent lg:block" />
          <div className="grid gap-8 lg:grid-cols-3">
            {steps.map((step, index) => (
              <motion.article
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                className="relative text-center"
              >
                <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center border border-border-light bg-white text-text-primary">
                  <step.Icon size={20} />
                </div>
                <p className="pointer-events-none absolute left-1/2 top-7 -translate-x-1/2 font-heading text-[72px] font-light leading-none text-border-light">
                  {index + 1}
                </p>
                <h3 className="relative mt-10 text-[16px] font-medium uppercase tracking-wide text-text-primary">
                  {step.title}
                </h3>
                <p className="relative mt-2 text-[14px] leading-snug text-text-body">{step.description}</p>
              </motion.article>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center">
          <Button href="/contact">BOOK YOUR FIRST CLEAN &rarr;</Button>
        </div>
      </div>
    </section>
  );
}
