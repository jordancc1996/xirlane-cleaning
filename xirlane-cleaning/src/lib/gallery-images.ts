import {
  FEATURED_GALLERY_IDS,
  GALLERY_ASSETS,
  GALLERY_ASSETS_BY_ID,
  galleryAssetUrl,
  type GalleryAspect,
} from "./gallery-assets";
import "./gallery-seo";

export type GallerySectionId =
  | "residential"
  | "deep-cleaning"
  | "move-out"
  | "commercial"
  | "kitchens"
  | "bathrooms"
  | "living-areas";

export type { GalleryAspect };

export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  title: string;
  caption?: string;
  /** Badge label shown on the card. */
  categoryLabel: string;
  aspect: GalleryAspect;
  /** SEO filename in public/images/gallery/ */
  filename: string;
};

export type GallerySection = {
  id: GallerySectionId;
  heading: string;
  shortLabel: string;
  description: string;
  imageIds: string[];
};

export const GALLERY_ASPECT_DIMENSIONS: Record<
  GalleryAspect,
  { width: number; height: number; className: string }
> = {
  portrait: { width: 600, height: 750, className: "aspect-[4/5]" },
  landscape: { width: 800, height: 600, className: "aspect-[4/3]" },
  square: { width: 700, height: 700, className: "aspect-square" },
};

function assetToGalleryImage(asset: (typeof GALLERY_ASSETS)[number]): GalleryImage {
  return {
    id: asset.id,
    filename: asset.filename,
    src: galleryAssetUrl(asset.filename),
    alt: asset.alt,
    title: asset.title,
    caption: asset.caption,
    categoryLabel: asset.categoryLabel,
    aspect: asset.aspect,
  };
}

/** Completed cleaning results — after photos only. Paths point to public/images/gallery/. */
export const GALLERY_IMAGES: GalleryImage[] = GALLERY_ASSETS.map(assetToGalleryImage);

const GALLERY_IMAGES_BY_ID = Object.fromEntries(
  GALLERY_IMAGES.map((image) => [image.id, image]),
) as Record<string, GalleryImage>;

export const GALLERY_SECTIONS: GallerySection[] = [
  {
    id: "residential",
    heading: "Residential Cleaning",
    shortLabel: "Residential",
    description:
      "Recurring maid service and one-time house cleaning results in Philadelphia homes — kitchens, baths, bedrooms, and living spaces left spotless.",
    imageIds: ["residential-kitchen", "residential-living", "residential-bathroom"],
  },
  {
    id: "deep-cleaning",
    heading: "Deep Cleaning",
    shortLabel: "Deep Cleaning",
    description:
      "Top-to-bottom deep cleans for first visits, seasonal resets, and detailed refreshes across every room in the home.",
    imageIds: ["deep-bedroom", "deep-dining", "deep-kitchen"],
  },
  {
    id: "move-out",
    heading: "Move-Out Cleaning",
    shortLabel: "Move-Out",
    description:
      "Move-out and post-construction cleaning finished to inspection and staging standards — empty spaces ready for handoff.",
    imageIds: ["moveout-empty", "moveout-renovation", "moveout-staging"],
  },
  {
    id: "commercial",
    heading: "Commercial Cleaning",
    shortLabel: "Commercial",
    description:
      "Offices, lobbies, and client-facing workspaces cleaned on schedule so your business always looks professional.",
    imageIds: ["commercial-office", "commercial-lobby", "commercial-conference"],
  },
  {
    id: "kitchens",
    heading: "Kitchens",
    shortLabel: "Kitchens",
    description:
      "Counters, appliances, cabinets, and floors cleaned and sanitized — the heart of the home, finished to a high standard.",
    imageIds: ["residential-kitchen", "deep-kitchen", "kitchen-island"],
  },
  {
    id: "bathrooms",
    heading: "Bathrooms",
    shortLabel: "Bathrooms",
    description:
      "Fixtures, mirrors, tile, and glass detailed for a bright, sanitized finish in primary baths and guest bathrooms.",
    imageIds: ["residential-bathroom", "bathroom-spa"],
  },
  {
    id: "living-areas",
    heading: "Living Areas",
    shortLabel: "Living Areas",
    description:
      "Living rooms, dining spaces, and shared areas dusted, vacuumed, and polished for everyday comfort or special occasions.",
    imageIds: [
      "residential-living",
      "deep-dining",
      "deep-bedroom",
      "living-fireplace",
      "moveout-staging",
    ],
  },
];

export type GallerySectionWithImages = GallerySection & {
  images: GalleryImage[];
};

export function getGallerySectionsWithImages(): GallerySectionWithImages[] {
  return GALLERY_SECTIONS.map((section) => ({
    ...section,
    images: section.imageIds
      .map((id) => GALLERY_IMAGES_BY_ID[id])
      .filter((image): image is GalleryImage => Boolean(image)),
  }));
}

/** Flat list in page order for lightbox navigation. */
export function getGalleryDisplayOrder(): GalleryImage[] {
  return getGallerySectionsWithImages().flatMap((section) => section.images);
}

/** Featured images for the homepage “See Our Work” section. */
export function getFeaturedGalleryImages(): GalleryImage[] {
  return FEATURED_GALLERY_IDS.map((id) => GALLERY_IMAGES_BY_ID[id]).filter(
    (image): image is GalleryImage => Boolean(image),
  );
}

/** Resolve a gallery image src for lightbox / full-size display. */
export function getGalleryImageSrc(image: GalleryImage): string {
  return image.src;
}

export { GALLERY_ASSETS, GALLERY_ASSETS_BY_ID, galleryAssetUrl };
