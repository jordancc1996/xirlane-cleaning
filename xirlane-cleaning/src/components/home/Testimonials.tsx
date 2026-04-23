"use client";

import { motion } from "framer-motion";
import EyebrowLabel from "@/components/ui/EyebrowLabel";

const testimonials = [
  {
    name: "Katie M.",
    quote:
      "My second clean with Xirlane had the team do an amazing job. It was very clear how much effort and attention was put into their work!",
  },
  {
    name: "Amber W.",
    quote:
      "As a busy mom who runs my own business, hiring Xirlane has been one of the best decisions. They are reliable, thorough, and incredibly efficient.",
  },
  {
    name: "Meghan C.",
    quote:
      "I have been loving my monthly cleans with Xirlane Cleaning. They are quick and do a great job. The little details they add are such a nice touch!",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-background py-16 md:py-20">
      <div className="site-container">
        <div className="mx-auto max-w-3xl text-center">
          <EyebrowLabel>WHAT OUR CLIENTS SAY</EyebrowLabel>
          <h2 className="mt-4 text-h2-mobile text-text-primary md:text-h2">Real Homes. Real Results.</h2>
        </div>

        <div className="mt-8 hidden gap-8 md:grid md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.15 }}
              className="border border-border-light bg-white p-8"
            >
              <p className="mb-4 text-accent">★★★★★</p>
              <p className="text-[18px] italic leading-[1.8] text-text-primary">
                {testimonial.quote}
              </p>
              <p className="mt-6 text-[12px] uppercase tracking-widest text-text-body">{testimonial.name}</p>
              <p className="text-[10px] text-accent">Verified Google Review</p>
            </motion.article>
          ))}
        </div>

        <div className="mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 md:hidden">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.15 }}
              className="w-[85%] shrink-0 snap-center border border-border-light bg-white p-8"
            >
              <p className="mb-4 text-accent">★★★★★</p>
              <p className="text-[18px] italic leading-[1.8] text-text-primary">
                {testimonial.quote}
              </p>
              <p className="mt-6 text-[12px] uppercase tracking-widest text-text-body">{testimonial.name}</p>
              <p className="text-[10px] text-accent">Verified Google Review</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
