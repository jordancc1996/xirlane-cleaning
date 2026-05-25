import Link from "next/link";
import Button from "@/components/ui/Button";
import EyebrowLabel from "@/components/ui/EyebrowLabel";
import OptimizedImage from "@/components/ui/OptimizedImage";
import { GALLERY_ASPECT_DIMENSIONS, getFeaturedGalleryImages } from "@/lib/gallery-images";
import { IMAGE_QUALITY, IMAGE_SIZES } from "@/lib/images";

export default function SeeOurWork() {
  const featured = getFeaturedGalleryImages();

  return (
    <section
      className="bg-background py-16 md:py-20"
      aria-labelledby="see-our-work-heading"
    >
      <div className="site-container">
        <div className="mx-auto max-w-3xl text-center">
          <EyebrowLabel>OUR WORK</EyebrowLabel>
          <h2 id="see-our-work-heading" className="mt-4 text-h2-mobile text-text-primary md:text-h2">
            See Our Work
          </h2>
          <p className="mt-5 text-text-body">
            After photos from professional house cleaning, deep cleaning, move-out cleaning,
            and commercial cleaning projects across Greater Philadelphia.
          </p>
        </div>

        <ul
          className="mt-10 grid auto-rows-fr grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3"
          role="list"
        >
          {featured.map((image) => {
            const dimensions = GALLERY_ASPECT_DIMENSIONS[image.aspect];

            return (
              <li key={image.id} className="group flex h-full list-none">
                <Link
                  href="/gallery"
                  className="gallery-card flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-gallery transition-all duration-500 ease-out hover:-translate-y-1.5 hover:shadow-gallery-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  <figure className="flex h-full flex-col">
                    <div className="relative min-h-0 flex-1 overflow-hidden">
                      <OptimizedImage
                        src={image.src}
                        alt={image.alt}
                        width={dimensions.width}
                        height={dimensions.height}
                        sizes={IMAGE_SIZES.galleryFeatured}
                        quality={IMAGE_QUALITY.gallery}
                        priority={false}
                        loading="lazy"
                        fetchPriority="low"
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                      />
                      <div
                        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
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
                      <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[10px] uppercase tracking-widest text-text-primary shadow-sm backdrop-blur-sm transition-all duration-300 group-hover:bg-accent group-hover:text-white">
                        {image.categoryLabel}
                      </span>
                    </div>
                    <figcaption className="border-t border-border-light/80 p-4">
                      <p className="font-heading text-[18px] leading-snug text-text-primary md:text-[20px]">
                        {image.title}
                      </p>
                    </figcaption>
                  </figure>
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="mt-10 flex justify-center md:mt-12">
          <Button href="/gallery">VIEW FULL GALLERY &rarr;</Button>
        </div>
      </div>
    </section>
  );
}
