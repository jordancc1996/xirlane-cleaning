export type GalleryAspect = "portrait" | "landscape" | "square";

/** Public path to gallery images — replace files in public/images/gallery/ to update photos. */
export const GALLERY_IMAGE_DIR = "/images/gallery";

export type GalleryAssetDefinition = {
  id: string;
  /** SEO-friendly filename in public/images/gallery/ */
  filename: string;
  alt: string;
  title: string;
  caption?: string;
  categoryLabel: string;
  aspect: GalleryAspect;
};

export function galleryAssetUrl(filename: string): string {
  return `${GALLERY_IMAGE_DIR}/${filename}`;
}

/**
 * Single source of truth for gallery filenames and metadata.
 * To swap a photo: drop a new JPG into public/images/gallery/ using the same filename.
 */
export const GALLERY_ASSETS: GalleryAssetDefinition[] = [
  {
    id: "residential-kitchen",
    filename: "sparkling-clean-kitchen-philadelphia.jpg",
    alt: "Sparkling clean kitchen after professional house cleaning in Philadelphia by Xirlane Cleaning",
    title: "Kitchen Reset",
    caption: "Counters, appliances, and floors finished after a recurring maid visit.",
    categoryLabel: "Residential",
    aspect: "portrait",
  },
  {
    id: "residential-living",
    filename: "professional-house-cleaning-living-room-philadelphia.jpg",
    alt: "Polished living room after professional house cleaning service in Philadelphia",
    title: "Living Room Detail",
    caption: "Dusted surfaces and refreshed floors in a Center City home.",
    categoryLabel: "Residential",
    aspect: "landscape",
  },
  {
    id: "residential-bathroom",
    filename: "deep-cleaned-bathroom-philadelphia.jpg",
    alt: "Deep cleaned bathroom with sanitized fixtures after house cleaning in Philadelphia",
    title: "Bathroom Sanitation",
    caption: "Fixtures, mirrors, and tile cleaned to a high-shine finish.",
    categoryLabel: "Residential",
    aspect: "square",
  },
  {
    id: "commercial-office",
    filename: "commercial-office-cleaning-philadelphia.jpg",
    alt: "Commercial office cleaning service result with organized workspace in Philadelphia",
    title: "Office Workspace",
    caption: "Desks, floors, and shared areas ready for the workday.",
    categoryLabel: "Commercial",
    aspect: "landscape",
  },
  {
    id: "commercial-lobby",
    filename: "commercial-lobby-cleaning-service.jpg",
    alt: "Commercial cleaning service result in a polished office lobby and reception area",
    title: "Lobby & Reception",
    caption: "First impressions restored with detailed floor and surface care.",
    categoryLabel: "Commercial",
    aspect: "portrait",
  },
  {
    id: "commercial-conference",
    filename: "commercial-conference-room-cleaning.jpg",
    alt: "Commercial cleaning service in a conference room ready for clients in Philadelphia",
    title: "Conference Room",
    caption: "Tables, chairs, and glass cleaned before a client meeting.",
    categoryLabel: "Commercial",
    aspect: "square",
  },
  {
    id: "deep-bedroom",
    filename: "deep-cleaning-service-bedroom.jpg",
    alt: "Bedroom after deep cleaning service with detailed surfaces and floors in Philadelphia",
    title: "Bedroom Deep Clean",
    caption: "Baseboards, surfaces, and floors detailed in a seasonal reset.",
    categoryLabel: "Deep Cleaning",
    aspect: "portrait",
  },
  {
    id: "deep-dining",
    filename: "deep-cleaning-dining-area-philadelphia.jpg",
    alt: "Dining area restored after deep cleaning service in a Philadelphia home",
    title: "Dining Area Refresh",
    caption: "Built-ins and flooring finished after a full deep clean.",
    categoryLabel: "Deep Cleaning",
    aspect: "landscape",
  },
  {
    id: "deep-kitchen",
    filename: "deep-cleaned-kitchen-cabinets-philadelphia.jpg",
    alt: "Deep cleaned kitchen cabinets and counters after deep cleaning service in Philadelphia",
    title: "Intensive Kitchen Clean",
    caption: "Cabinet fronts, backsplash, and appliances detailed in a deep clean.",
    categoryLabel: "Deep Cleaning",
    aspect: "square",
  },
  {
    id: "moveout-empty",
    filename: "move-out-cleaning-service-apartment.jpg",
    alt: "Move out cleaning service result in an empty apartment ready for inspection in Philadelphia",
    title: "Move-Out Ready",
    caption: "Every room cleared, cleaned, and prepared for handoff.",
    categoryLabel: "Move-Out",
    aspect: "landscape",
  },
  {
    id: "moveout-renovation",
    filename: "post-construction-cleaning-service.jpg",
    alt: "Post-construction cleaning service with dust and debris removed after renovation",
    title: "Post-Renovation Polish",
    caption: "Construction dust removed and surfaces wiped down completely.",
    categoryLabel: "Move-Out",
    aspect: "portrait",
  },
  {
    id: "moveout-staging",
    filename: "move-out-cleaning-staging-ready-home.jpg",
    alt: "Move out cleaning service result with staging-ready home interior in Philadelphia",
    title: "Staging Preparation",
    caption: "Listing-ready finish with spotless floors and bright surfaces.",
    categoryLabel: "Move-Out",
    aspect: "square",
  },
  {
    id: "kitchen-island",
    filename: "sparkling-kitchen-island-house-cleaning.jpg",
    alt: "Sparkling kitchen island after professional house cleaning service in Philadelphia",
    title: "Island & Seating",
    caption: "Hard surfaces wiped and stainless appliances polished to a shine.",
    categoryLabel: "Kitchen",
    aspect: "landscape",
  },
  {
    id: "bathroom-spa",
    filename: "deep-cleaned-bathroom-primary-suite.jpg",
    alt: "Deep cleaned primary bathroom with tile and glass after deep cleaning service",
    title: "Primary Bath Detail",
    caption: "Shower glass, tile grout, and vanity cleaned for a fresh finish.",
    categoryLabel: "Bathroom",
    aspect: "portrait",
  },
  {
    id: "living-fireplace",
    filename: "professional-house-cleaning-living-area.jpg",
    alt: "Professional house cleaning service result in a living area with fireplace in Philadelphia",
    title: "Fireplace Lounge",
    caption: "Dusting, vacuuming, and surface care throughout the main living space.",
    categoryLabel: "Living Area",
    aspect: "landscape",
  },
];

export const GALLERY_ASSETS_BY_ID = Object.fromEntries(
  GALLERY_ASSETS.map((asset) => [asset.id, asset]),
) as Record<string, GalleryAssetDefinition>;

export const GALLERY_PLACEHOLDER_FILENAMES = GALLERY_ASSETS.map((asset) => asset.filename);

/** Homepage “See Our Work” — swap IDs to change featured photos. */
export const FEATURED_GALLERY_IDS = [
  "residential-kitchen",
  "residential-bathroom",
  "commercial-office",
  "deep-kitchen",
  "moveout-empty",
  "living-fireplace",
] as const;
