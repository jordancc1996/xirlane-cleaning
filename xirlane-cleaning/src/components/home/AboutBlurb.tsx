"use client";

import { motion } from "framer-motion";
import EyebrowLabel from "@/components/ui/EyebrowLabel";

export default function AboutBlurb() {
  return (
    <motion.section
      className="bg-section-alt-bg py-20"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="site-container">
        <div className="mx-auto max-w-3xl text-center">
          <EyebrowLabel className="justify-center text-center">WHO WE ARE</EyebrowLabel>
          <p className="mt-8 font-heading text-[24px] font-light leading-[1.8] text-text-primary">
            At Xirlane Cleaning, we deliver high-quality, professional cleaning with a personal touch.
            Serving all of the Greater Philadelphia area — including Philadelphia, Montgomery County,
            Delaware County, Chester County, and Bucks County — we offer home, business, and
            post-construction cleaning with flexible options for one-time or recurring visits. Our
            friendly crew is here to make your space shine.
          </p>
          <div className="mx-auto mt-10 h-px w-[60px] bg-accent" />
        </div>
      </div>
    </motion.section>
  );
}
