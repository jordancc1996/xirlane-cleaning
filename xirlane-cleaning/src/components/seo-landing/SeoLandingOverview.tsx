import { OptimizedFillImage } from "@/components/ui/OptimizedImage";
import { IMAGE_SIZES } from "@/lib/images";

type SeoLandingOverviewProps = {
  title: string;
  paragraphs: string[];
  image: string;
  imageAlt: string;
};

export default function SeoLandingOverview({
  title,
  paragraphs,
  image,
  imageAlt,
}: SeoLandingOverviewProps) {
  return (
    <section className="section-spacing" aria-labelledby="service-overview-heading">
      <div className="site-container grid items-center gap-10 md:grid-cols-2 md:gap-12">
        <div>
          <h2 id="service-overview-heading" className="text-h2-mobile text-text-primary md:text-h2">
            {title}
          </h2>
          <div className="mt-5 space-y-4 text-text-body">
            {paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </div>
        </div>
        <div className="relative h-[320px] overflow-hidden md:h-[360px]">
          <OptimizedFillImage
            src={image}
            alt={imageAlt}
            sizes={IMAGE_SIZES.detail}
            loading="lazy"
            fetchPriority="low"
          />
        </div>
      </div>
    </section>
  );
}
