import Link from "next/link";
import Button from "@/components/ui/Button";
import { OptimizedFillImage } from "@/components/ui/OptimizedImage";
import { IMAGE_SIZES } from "@/lib/images";

const services = [
  {
    href: "/services/home-cleaning",
    name: "Home Cleaning",
    body: "Flexible home cleaning plans for recurring visits or one-time support.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&q=80",
  },
  {
    href: "/services/commercial-cleaning",
    name: "Commercial Cleaning",
    body: "Professional office and business cleaning with dependable scheduling.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&q=80",
  },
  {
    href: "/services/post-construction",
    name: "Post-Construction",
    body: "Detailed dust and debris removal for move-in and staging readiness.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1400&q=80",
  },
  {
    href: "/services/deep-cleaning",
    name: "Deep Cleaning",
    body: "Top-to-bottom intensive cleaning for first visits and seasonal resets.",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1400&q=80",
  },
];

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1521790361543-f645cf042ec4?w=1800&q=80";

export default function ServicesPageContent() {
  return (
    <main className="bg-background">
      <section className="relative h-[500px] overflow-hidden">
        <OptimizedFillImage
          src={HERO_IMAGE}
          alt="Cleaning team preparing service"
          sizes={IMAGE_SIZES.heroFull}
          priority
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="px-6">
            <p className="text-[11px] uppercase tracking-eyebrow text-accent">OUR SERVICES</p>
            <h1 className="mt-4 text-h1-mobile text-white md:text-h1">Our Services</h1>
          </div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="site-container">
          <div className="grid gap-8 lg:grid-cols-2">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group block overflow-hidden border border-border-light bg-white"
              >
                <div className="relative h-[260px] overflow-hidden">
                  <OptimizedFillImage
                    src={service.image}
                    alt={service.name}
                    sizes={IMAGE_SIZES.card}
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-8">
                  <h2 className="text-h3-mobile md:text-h3">{service.name}</h2>
                  <p className="mt-3 text-text-body">{service.body}</p>
                  <p className="mt-5 text-[12px] uppercase tracking-widest text-text-primary group-hover:text-accent">
                    LEARN MORE &rarr;
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-16 md:py-20">
        <div className="site-container">
          <p className="text-[11px] uppercase tracking-eyebrow text-accent">DEEP CLEANING OPTIONS</p>
          <h2 className="mt-4 text-h2-mobile md:text-h2">Choose Your Deep Cleaning Package</h2>
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <article className="border border-border-light bg-white p-8">
              <h3 className="text-h3-mobile md:text-h3">The Spring Clean</h3>
              <p className="mt-3 text-text-body">Seasonal refresh package for complete whole-home revitalization.</p>
              <ul className="mt-5 space-y-2 text-text-primary">
                <li>✓ Kitchen sanitizing and appliance detailing</li>
                <li>✓ Bathroom polish and fixture treatment</li>
                <li>✓ Baseboard, trim, and high-touch deep cleaning</li>
                <li>✓ Interior windows and mirrors spot-cleaned</li>
                <li>✓ Sweep, vacuum, and full floor wash</li>
              </ul>
            </article>
            <article className="border border-border-light bg-white p-8">
              <h3 className="text-h3-mobile md:text-h3">The Ultimate Deep Clean</h3>
              <p className="mt-3 text-text-body">Our most detailed package for first visits and major resets.</p>
              <ul className="mt-5 space-y-2 text-text-primary">
                <li>✓ Full kitchen and cabinet exterior treatment</li>
                <li>✓ Deep bathroom scrub with chrome polishing</li>
                <li>✓ Spot-wash walls, interior glass, and trim</li>
                <li>✓ Reachable fixture and baseboard detailing</li>
                <li>✓ Complete floor care under lightweight furniture</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-text-primary py-16 text-center md:py-20">
        <div className="site-container">
          <h2 className="text-h2-mobile text-white md:text-h2">Need Help Choosing a Service?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/70">
            Tell us about your space and we will match you with the best cleaning plan.
          </p>
          <Button href="/contact" className="mt-8">
            GET YOUR QUOTE &rarr;
          </Button>
        </div>
      </section>
    </main>
  );
}
