"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import EyebrowLabel from "@/components/ui/EyebrowLabel";

const cards = [
  {
    category: "HOME CLEANING",
    headline: "We do the cleaning, you make the memories",
    body: "Professional home cleaning tailored to your schedule - weekly, biweekly, monthly or one-time.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&q=80",
    link: "/services/home-cleaning",
  },
  {
    category: "COMMERCIAL CLEANING",
    headline: "First impressions count. Impress your clients.",
    body: "Professional office and commercial space cleaning on your schedule.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&q=80",
    link: "/services/commercial-cleaning",
  },
  {
    category: "POST-CONSTRUCTION",
    headline: "Let our crew make your work shine",
    body: "Deep cleaning to get your home or project move-in and staging ready.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1400&q=80",
    link: "/services/post-construction",
  },
  {
    category: "DEEP CLEANING",
    headline: "The ultimate clean, top to bottom",
    body: "Our most thorough clean - perfect for seasonal refreshes or first-time visits.",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1400&q=80",
    link: "/services/deep-cleaning",
  },
];

export default function ServiceCards() {
  return (
    <section className="bg-section-alt-bg py-16 md:py-20">
      <div className="site-container">
        <div className="mx-auto max-w-3xl text-center">
          <EyebrowLabel>OUR SERVICES</EyebrowLabel>
          <h2 className="mt-4 text-h2-mobile text-text-primary md:text-h2">
            Everything Your Space Needs
          </h2>
          <p className="mt-5 text-text-body">
            Comprehensive cleaning services designed for homes, offices, and post-construction
            spaces across Greater Philadelphia.
          </p>
        </div>

        <div className="mt-6 space-y-6 md:mt-8">
          {cards.map((card, index) => (
            <motion.article
              key={card.headline}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
              className="group relative h-[220px] overflow-hidden md:h-[320px]"
            >
              <img
                src={card.image}
                alt={card.headline}
                className="h-full w-full object-cover transition-transform duration-[400ms] ease-out group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-black/45 transition-colors duration-[400ms] group-hover:bg-black/55" />
              <div className="absolute inset-0 flex items-center">
                <div className="px-6 md:px-10">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-accent">{card.category}</p>
                  <h3 className="mt-3 max-w-2xl font-heading text-[28px] font-normal leading-tight text-white md:text-[36px]">
                    {card.headline}
                  </h3>
                  <p className="mt-3 max-w-2xl text-[14px] text-white/80">{card.body}</p>
                  <Link
                    href={card.link}
                    className="mt-4 inline-block text-[12px] uppercase tracking-widest text-white transition-all hover:underline"
                  >
                    LEARN MORE &rarr;
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
