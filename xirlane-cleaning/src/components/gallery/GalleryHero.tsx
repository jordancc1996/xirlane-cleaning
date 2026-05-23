import { OptimizedFillImage } from "@/components/ui/OptimizedImage";
import { galleryAssetUrl } from "@/lib/gallery-assets";
import { IMAGE_QUALITY, IMAGE_SIZES } from "@/lib/images";

const HERO_IMAGE = galleryAssetUrl("sparkling-clean-kitchen-philadelphia.jpg");

const HERO_ALT =
  "Professional house cleaning result — sparkling clean kitchen in Philadelphia by Xirlane Cleaning";

export default function GalleryHero() {
  return (
    <section
      className="relative flex min-h-[420px] items-center justify-center overflow-hidden md:min-h-[520px] lg:min-h-[560px]"
      aria-labelledby="gallery-hero-heading"
    >
      <div className="gallery-hero-bg absolute inset-0">
        <OptimizedFillImage
          src={HERO_IMAGE}
          alt={HERO_ALT}
          sizes={IMAGE_SIZES.heroFull}
          priority
          quality={IMAGE_QUALITY.hero}
          fetchPriority="high"
          className="object-cover"
        />
      </div>

      <div
        className="gallery-hero-shimmer pointer-events-none absolute inset-0 bg-gradient-to-br from-black/50 via-black/40 to-black/60"
        aria-hidden="true"
      />

      <div className="site-container relative z-10 w-full py-20 text-center md:py-24">
        <div className="mx-auto flex max-w-2xl flex-col items-center">
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-accent" aria-hidden="true" />
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-accent">
              OUR WORK
            </p>
            <span className="h-px w-10 bg-accent" aria-hidden="true" />
          </div>

          <h1
            id="gallery-hero-heading"
            className="mt-6 text-h1-mobile font-light text-white md:text-h1"
          >
            Cleaning Gallery
          </h1>

          <p className="mt-5 max-w-xl font-heading text-[20px] font-light leading-snug text-white/95 md:text-[24px]">
            Completed results from professional house cleaning, deep cleaning,
            move-out cleaning, and commercial cleaning in Greater Philadelphia.
          </p>
        </div>
      </div>
    </section>
  );
}
