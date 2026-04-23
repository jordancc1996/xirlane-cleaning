"use client";

import { motion } from "framer-motion";
import EyebrowLabel from "@/components/ui/EyebrowLabel";

const items = [
  "Trained & Certified Staff",
  "Insured, Bonded & Registered",
  "100% Satisfaction Guarantee",
  "High Quality Clean",
  "Eco-Friendly Products Available",
  "Responsive to Feedback",
  "Easy Cash-Free Payment",
  "Daily, Weekly, Biweekly & Monthly options",
  "Fully Insured & Compliant",
];

export default function WhyChoose() {
  return (
    <motion.section
      className="bg-background py-16 md:py-20"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="site-container grid gap-10 lg:grid-cols-5 lg:gap-12">
        <div className="lg:col-span-2">
          <EyebrowLabel>WHY XIRLANE</EyebrowLabel>
          <h2 className="mt-4 text-h2-mobile text-text-primary md:text-h2">
            The Standard for Clean in Philadelphia
          </h2>
          <p className="mt-5 text-[15px] text-text-body">
            We&apos;re not just another cleaning company. We&apos;re your partner in maintaining
            a spotless, healthy space.
          </p>
        </div>

        <div className="lg:col-span-3">
          <ul className="grid grid-cols-1 gap-x-6 gap-y-2.5 lg:grid-cols-3">
            {items.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-[14px] leading-snug text-text-primary">
                <span className="mt-0.5 text-accent">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.section>
  );
}
