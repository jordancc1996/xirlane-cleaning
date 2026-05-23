import GallerySectionBlock from "@/components/gallery/GallerySectionBlock";
import {
  GALLERY_SECTIONS,
  getGallerySectionsWithImages,
} from "@/lib/gallery-images";

/** Server-rendered gallery grid — fully crawlable HTML with lazy-loaded images. */
export default function GalleryPageSections() {
  const sections = getGallerySectionsWithImages();
  let offset = 0;

  return (
    <section
      id="gallery-interactive-root"
      className="section-spacing bg-background"
      aria-labelledby="gallery-grid-heading"
    >
      <div className="site-container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 id="gallery-grid-heading" className="text-h2-mobile md:text-h2">
            Completed Cleaning Results
          </h2>
          <p className="mt-4 text-text-body">
            After photos from professional house cleaning, deep cleaning service,
            move-out cleaning, and commercial cleaning across Greater Philadelphia.
            Select a category or tap any image to view full size.
          </p>
        </div>

        <nav
          className="mt-10 flex flex-wrap justify-center gap-2 md:mt-12 md:gap-3"
          aria-label="Jump to gallery category"
        >
          {GALLERY_SECTIONS.map((section) => (
            <a
              key={section.id}
              href={`#gallery-${section.id}`}
              className="min-h-11 rounded-full border border-border-light bg-white px-5 py-2.5 text-[11px] uppercase tracking-widest text-text-primary transition-all duration-300 hover:border-accent hover:text-accent"
            >
              {section.shortLabel}
            </a>
          ))}
        </nav>

        <div className="mt-6 md:mt-8">
          {sections.map((section) => {
            const startIndex = offset;
            offset += section.images.length;
            return (
              <GallerySectionBlock
                key={section.id}
                section={section}
                startIndex={startIndex}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
