import { OptimizedFillImage } from "@/components/ui/OptimizedImage";
import { IMAGE_SIZES } from "@/lib/images";

type SeoLandingHeroProps = {
  eyebrow: string;
  title: string;
  heroImage: string;
  heroImageAlt: string;
};

export default function SeoLandingHero({
  eyebrow,
  title,
  heroImage,
  heroImageAlt,
}: SeoLandingHeroProps) {
  return (
    <section className="relative h-[500px] overflow-hidden" aria-label="Service introduction">
      <OptimizedFillImage
        src={heroImage}
        alt={heroImageAlt}
        sizes={IMAGE_SIZES.heroFull}
        priority
      />
      <div className="absolute inset-0 bg-black/55" aria-hidden="true" />
      <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
        <div>
          <p className="text-[11px] uppercase tracking-eyebrow text-accent">{eyebrow}</p>
          <h1 className="mt-4 text-h1-mobile text-white md:text-h1">{title}</h1>
        </div>
      </div>
    </section>
  );
}
