import Link from "next/link";
import EyebrowLabel from "@/components/ui/EyebrowLabel";
import { OptimizedFillImage } from "@/components/ui/OptimizedImage";
import { IMAGE_SIZES } from "@/lib/images";

const cards = [
  {
    category: "HOME CLEANING",
    title: "House Cleaning in Philadelphia",
    headline: "We do the cleaning, you make the memories",
    body: "Recurring and one-time residential cleaning — weekly, biweekly, monthly, or on demand.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&q=80",
    link: "/services/house-cleaning",
    imageAlt: "House cleaning service in a Philadelphia living room",
  },
  {
    category: "COMMERCIAL CLEANING",
    title: "Commercial Cleaning in Philadelphia",
    headline: "First impressions count. Impress your clients.",
    body: "Office and workplace cleaning with dependable schedules and professional presentation.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&q=80",
    link: "/services/commercial-cleaning",
    imageAlt: "Commercial office cleaning in Philadelphia",
  },
  {
    category: "MOVE-OUT & POST-CONSTRUCTION",
    title: "Move-Out Cleaning in Philadelphia",
    headline: "Let our crew make your work shine",
    body: "Move-out, post-construction, and renovation cleaning for move-in ready results.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1400&q=80",
    link: "/services/move-out-cleaning",
    imageAlt: "Move-out and post-construction cleaning crew",
  },
  {
    category: "DEEP CLEANING",
    title: "Deep Cleaning Services in Philadelphia",
    headline: "The ultimate clean, top to bottom",
    body: "Intensive deep cleans for first visits, seasonal refreshes, and major resets.",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1400&q=80",
    link: "/services/deep-cleaning",
    imageAlt: "Deep cleaning services in a Philadelphia home",
  },
];

export default function ServiceCards() {
  return (
    <section
      className="bg-section-alt-bg py-16 md:py-20"
      aria-labelledby="home-services-heading"
    >
      <div className="site-container">
        <div className="mx-auto max-w-3xl text-center">
          <EyebrowLabel>OUR SERVICES</EyebrowLabel>
          <h2 id="home-services-heading" className="mt-4 text-h2-mobile text-text-primary md:text-h2">
            House, Commercial &amp; Deep Cleaning Services
          </h2>
          <p className="mt-5 text-text-body">
            From routine residential cleaning to commercial accounts and detailed project
            cleans, we match the right crew and checklist to your space across Greater
            Philadelphia.
          </p>
        </div>

        <div className="mt-6 space-y-6 md:mt-8">
          {cards.map((card) => (
            <article
              key={card.link}
              className="group relative h-[220px] overflow-hidden md:h-[320px]"
            >
              <OptimizedFillImage
                src={card.image}
                alt={card.imageAlt}
                sizes={IMAGE_SIZES.card}
                priority={false}
                loading="lazy"
                fetchPriority="low"
                className="object-cover transition-transform duration-[400ms] ease-out group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-black/45 transition-colors duration-[400ms] group-hover:bg-black/55" />
              <div className="absolute inset-0 flex items-center">
                <div className="px-6 md:px-10">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-accent">{card.category}</p>
                  <h3 className="mt-3 max-w-2xl font-heading text-[24px] font-normal leading-tight text-white md:text-[30px]">
                    <Link href={card.link} className="hover:underline">
                      {card.title}
                    </Link>
                  </h3>
                  <p className="mt-2 max-w-2xl font-heading text-[20px] font-normal leading-snug text-white/95 md:text-[24px]">
                    {card.headline}
                  </p>
                  <p className="mt-3 max-w-2xl text-[14px] text-white/80">{card.body}</p>
                  <Link
                    href={card.link}
                    className="mt-4 inline-block text-[12px] uppercase tracking-widest text-white transition-all hover:underline"
                  >
                    LEARN MORE &rarr;
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-[14px] text-text-body">
          Compare all options on our{" "}
          <Link href="/services" className="text-accent hover:underline">
            services page
          </Link>
          , or{" "}
          <Link href="/contact" className="text-accent hover:underline">
            get a free quote
          </Link>{" "}
          for house cleaning, commercial cleaning, deep cleaning, or move-out service.
        </p>
      </div>
    </section>
  );
}
