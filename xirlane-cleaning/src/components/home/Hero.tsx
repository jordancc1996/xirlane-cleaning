import Link from "next/link";
import Button from "@/components/ui/Button";
import { OptimizedFillImage } from "@/components/ui/OptimizedImage";
import { IMAGE_SIZES } from "@/lib/images";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=900&q=80";

export default function Hero() {
  return (
    <section className="bg-background" aria-labelledby="home-hero-heading">
      <div className="site-container grid grid-cols-1 items-start gap-10 pb-12 pt-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:pb-16 lg:pt-10">
        <div className="order-2 flex flex-col justify-center lg:order-1">
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-accent" aria-hidden="true" />
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-accent">
              PHILADELPHIA&apos;S PREMIUM CLEANING SERVICE
            </p>
          </div>

          <h1
            id="home-hero-heading"
            className="mt-6 text-h1-mobile font-light leading-[1.1] text-text-primary md:text-h1"
          >
            House Cleaning &amp; Maid Service in Philadelphia
          </h1>

          <p className="mt-4 font-heading text-[22px] font-light leading-snug text-text-primary md:text-[26px]">
            A stress-free clean for your home or business.
          </p>

          <p className="mt-6 max-w-lg text-base text-text-body">
            Xirlane Cleaning provides residential cleaning, commercial cleaning, and
            deep cleaning services in Philadelphia and surrounding counties. Whether you
            need a recurring maid service near you, a one-time reset, or move-out cleaning
            before a transition, our insured team delivers consistent results.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/contact">GET AN INSTANT PRICE &rarr;</Button>
            <Button href="/services" variant="ghost">
              VIEW SERVICES
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
            <p className="text-[12px] uppercase tracking-wide text-text-body">✓ Insured &amp; Bonded</p>
            <p className="text-[12px] uppercase tracking-wide text-text-body">✓ 100% Satisfaction</p>
            <p className="text-[12px] uppercase tracking-wide text-text-body">✓ Eco-Friendly</p>
          </div>

          <p className="mt-6 text-[13px] text-text-body/80">
            Serving Philadelphia, Montgomery, Delaware, Chester, and Bucks County.{" "}
            <Link href="/faq" className="text-accent hover:underline">
              FAQ
            </Link>
            {" · "}
            <Link href="/contact" className="text-accent hover:underline">
              Free quote
            </Link>
          </p>
        </div>

        <div className="order-1 lg:order-2">
          <div className="relative aspect-[4/5] w-full min-h-[350px] lg:min-h-[min(72vh,760px)]">
            <OptimizedFillImage
              src={HERO_IMAGE}
              alt="Professional house cleaning team in a Philadelphia home kitchen"
              sizes={IMAGE_SIZES.hero}
              priority
            />
            <div
              className="pointer-events-none absolute -right-4 -bottom-4 h-full w-full border-2 border-accent"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
