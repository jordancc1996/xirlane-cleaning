import GalleryCard from "@/components/gallery/GalleryCard";
import type { GallerySectionWithImages } from "@/lib/gallery-images";

type GallerySectionBlockProps = {
  section: GallerySectionWithImages;
  startIndex: number;
};

export default function GallerySectionBlock({ section, startIndex }: GallerySectionBlockProps) {
  if (section.images.length === 0) return null;

  return (
    <section
      id={`gallery-${section.id}`}
      className="gallery-section-block scroll-mt-36 border-b border-border-light py-14 last:border-b-0 md:scroll-mt-40 md:py-20"
      aria-labelledby={`gallery-section-${section.id}`}
    >
      <div className="max-w-3xl">
        <p className="text-[11px] uppercase tracking-eyebrow text-accent">Gallery</p>
        <h2
          id={`gallery-section-${section.id}`}
          className="mt-3 text-h2-mobile text-text-primary md:text-h2"
        >
          {section.heading}
        </h2>
        <p className="mt-4 text-text-body">{section.description}</p>
      </div>

      <ul
        className="gallery-section-grid mt-10 md:mt-12"
        role="list"
        aria-label={`${section.heading} photos`}
      >
        {section.images.map((image, localIndex) => (
          <GalleryCard
            key={`${section.id}-${image.id}`}
            image={image}
            index={startIndex + localIndex}
          />
        ))}
      </ul>
    </section>
  );
}
