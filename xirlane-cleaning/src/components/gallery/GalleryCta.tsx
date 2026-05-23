import Button from "@/components/ui/Button";
import EyebrowLabel from "@/components/ui/EyebrowLabel";

export default function GalleryCta() {
  return (
    <section
      className="gallery-cta relative overflow-hidden bg-text-primary py-16 md:py-24"
      aria-labelledby="gallery-cta-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,169,110,0.12),transparent_55%)]"
        aria-hidden="true"
      />
      <div className="site-container relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <EyebrowLabel className="text-accent">READY TO GET STARTED?</EyebrowLabel>
          <h2
            id="gallery-cta-heading"
            className="mt-4 font-heading text-h2-mobile font-light text-white md:text-h2"
          >
            Love What You See? Let&apos;s Clean Your Space.
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-white/80 md:text-[16px]">
            Insured crews, flexible scheduling, and the same attention to detail you see in
            our gallery — for your home or business in Philadelphia and surrounding counties.
          </p>

          <div className="mt-10 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center sm:gap-5">
            <Button
              href="/contact"
              className="w-full bg-accent text-text-primary hover:bg-white hover:text-text-primary sm:w-auto sm:min-w-[220px]"
            >
              BOOK A CLEANING &rarr;
            </Button>
            <Button href="/contact" variant="light" className="w-full sm:w-auto sm:min-w-[220px]">
              REQUEST A FREE QUOTE &rarr;
            </Button>
          </div>

          <p className="mt-6 text-[12px] uppercase tracking-widest text-white/45">
            Serving Philadelphia · Montgomery · Delaware · Chester · Bucks County
          </p>
        </div>
      </div>
    </section>
  );
}
