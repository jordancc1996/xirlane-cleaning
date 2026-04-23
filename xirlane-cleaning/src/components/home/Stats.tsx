"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "5", label: "Star Reviews" },
  { value: "500+", label: "Visits Per Month" },
  { value: "30+", label: "Areas Served" },
];

export default function Stats() {
  return (
    <motion.section
      className="bg-text-primary py-16 md:py-20"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="site-container">
        <div className="grid divide-y divide-accent md:grid-cols-3 md:divide-x md:divide-y-0">
          {stats.map((stat) => (
            <div key={stat.label} className="py-6 text-center md:py-2">
              <p className="font-heading text-[72px] font-light leading-none text-accent">{stat.value}</p>
              <p className="mt-4 text-[12px] uppercase tracking-widest text-button-primary-text">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
