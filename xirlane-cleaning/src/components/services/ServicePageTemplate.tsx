"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

interface ServicePageTemplateProps {
  eyebrow: string;
  title: string;
  heroImage: string;
  description: string;
  detailsImage: string;
  included: string[];
  pricingText: string;
  related: { href: string; title: string; summary: string }[];
}

export default function ServicePageTemplate({
  eyebrow,
  title,
  heroImage,
  description,
  detailsImage,
  included,
  pricingText,
  related,
}: ServicePageTemplateProps) {
  return (
    <main className="bg-background">
      <section className="relative h-[500px] overflow-hidden">
        <img src={heroImage} alt={title} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
          <div>
            <p className="text-[11px] uppercase tracking-eyebrow text-accent">{eyebrow}</p>
            <h1 className="mt-4 text-h1-mobile text-white md:text-h1">{title}</h1>
          </div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="site-container grid items-center gap-10 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, margin: "-80px" }}
          >
            <h2 className="text-h2-mobile md:text-h2">Service Overview</h2>
            <p className="mt-5 text-text-body">{description}</p>
          </motion.div>
          <motion.div
            className="h-[320px] overflow-hidden"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, margin: "-80px" }}
          >
            <img src={detailsImage} alt={`${title} detail`} className="h-full w-full object-cover" />
          </motion.div>
        </div>
      </section>

      <section className="bg-background py-16 md:py-24">
        <motion.div
          className="site-container"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-80px" }}
        >
          <h2 className="text-h2-mobile md:text-h2">What&apos;s Included</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {included.map((item) => (
              <p key={item} className="flex items-start gap-3 text-text-primary">
                <span className="text-accent">✓</span>
                <span>{item}</span>
              </p>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="section-spacing">
        <motion.div
          className="site-container border border-border-light p-8 md:p-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-80px" }}
        >
          <h2 className="text-h2-mobile md:text-h2">Get a Quote</h2>
          <p className="mt-4 max-w-3xl text-text-body">{pricingText}</p>
          <Button href="/contact" className="mt-8">
            REQUEST A QUOTE &rarr;
          </Button>
        </motion.div>
      </section>

      <section className="section-spacing bg-background">
        <motion.div
          className="site-container"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-80px" }}
        >
          <h2 className="text-h2-mobile md:text-h2">Related Services</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {related.map((service) => (
              <Link key={service.href} href={service.href} className="card-base p-6">
                <h3 className="text-h3-mobile md:text-h3">{service.title}</h3>
                <p className="mt-3 text-text-body">{service.summary}</p>
              </Link>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="bg-text-primary py-16 text-center">
        <motion.div
          className="site-container"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-80px" }}
        >
          <h2 className="text-h2-mobile text-white md:text-h2">Ready to Book?</h2>
          <Button href="/contact" className="mt-8">
            BOOK NOW
          </Button>
        </motion.div>
      </section>
    </main>
  );
}
