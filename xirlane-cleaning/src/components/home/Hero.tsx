"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import Button from "@/components/ui/Button";

export default function Hero() {
  const container: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0, 0, 0.2, 1],
      },
    },
  };

  return (
    <section className="bg-background">
      <div className="site-container grid grid-cols-1 items-start gap-10 pb-12 pt-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:pb-16 lg:pt-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="order-2 flex flex-col justify-center lg:order-1"
        >
          <motion.div variants={item} className="flex items-center gap-4">
            <span className="h-px w-10 bg-accent" aria-hidden="true" />
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-accent">
              PHILADELPHIA&apos;S PREMIUM CLEANING SERVICE
            </p>
          </motion.div>

          <motion.h1 variants={item} className="mt-6 text-h1-mobile font-light leading-[1.1] text-text-primary md:text-h1">
            A Stress-Free
            <br />
            Clean.
          </motion.h1>

          <motion.p variants={item} className="mt-6 max-w-md text-base text-text-body">
            Let our certified staff sweat the details so you don&apos;t have to. Serving
            Philadelphia, Montgomery County, Delaware County, Chester County, and Bucks
            County.
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
            <Button href="/contact">GET AN INSTANT PRICE &rarr;</Button>
            <Button href="/services" variant="ghost">
              VIEW SERVICES
            </Button>
          </motion.div>

          <motion.div variants={item} className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
            <p className="text-[12px] uppercase tracking-wide text-text-body">✓ Insured &amp; Bonded</p>
            <p className="text-[12px] uppercase tracking-wide text-text-body">✓ 100% Satisfaction</p>
            <p className="text-[12px] uppercase tracking-wide text-text-body">✓ Eco-Friendly</p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="order-1 lg:order-2"
        >
          <div className="relative h-[350px] lg:h-[min(72vh,760px)]">
            <div className="absolute inset-0 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=900&q=80"
                alt="Professional cleaner working in a bright kitchen"
                className="h-full w-full object-cover"
              />
            </div>
            <div
              className="pointer-events-none absolute -right-4 -bottom-4 h-full w-full border-2 border-accent"
              aria-hidden="true"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
