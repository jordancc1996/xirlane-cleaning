import OptimizedImage from "@/components/ui/OptimizedImage";
import {
  GALLERY_ASPECT_DIMENSIONS,
  type GalleryImage,
} from "@/lib/gallery-images";
import { IMAGE_QUALITY, IMAGE_SIZES } from "@/lib/images";

type GalleryCardProps = {
  image: GalleryImage;
  /** Global index for lightbox (set via data-gallery-index). */
  index: number;
};

export default function GalleryCard({ image, index }: GalleryCardProps) {
  const dimensions = GALLERY_ASPECT_DIMENSIONS[image.aspect];

  return (
    <li className="group list-none">
      <article className="h-full">
        <button
          type="button"
          data-gallery-index={index}
          aria-haspopup="dialog"
          className="gallery-card w-full overflow-hidden rounded-2xl bg-white text-left shadow-gallery transition-all duration-500 ease-out hover:-translate-y-1.5 hover:shadow-gallery-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          aria-label={`View larger: ${image.title}. ${image.alt}`}
        >
          <figure>
            <div className={`relative overflow-hidden ${dimensions.className}`}>
              <OptimizedImage
                src={image.src}
                alt={image.alt}
                width={dimensions.width}
                height={dimensions.height}
                sizes={IMAGE_SIZES.gallery}
                quality={IMAGE_QUALITY.gallery}
                priority={false}
                loading="lazy"
                fetchPriority="low"
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                aria-hidden="true"
              />
              <span
                className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                aria-hidden="true"
              >
                <span className="rounded-full bg-white/90 px-4 py-2 text-[10px] uppercase tracking-widest text-text-primary shadow-sm">
                  View
                </span>
              </span>
              {image.categoryLabel ? (
                <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[10px] uppercase tracking-widest text-text-primary shadow-sm backdrop-blur-sm transition-all duration-300 group-hover:bg-accent group-hover:text-white md:left-4 md:top-4">
                  {image.categoryLabel}
                </span>
              ) : null}
            </div>

            {(image.title || image.caption) && (
              <figcaption className="border-t border-border-light/80 px-4 py-4 md:px-5 md:py-5">
                {image.title ? (
                  <p className="font-heading text-[18px] leading-snug text-text-primary md:text-[20px]">
                    {image.title}
                  </p>
                ) : null}
                {image.caption ? (
                  <p className="mt-1.5 text-[13px] leading-relaxed text-text-body md:text-[14px]">
                    {image.caption}
                  </p>
                ) : null}
              </figcaption>
            )}
          </figure>
        </button>
      </article>
    </li>
  );
}
