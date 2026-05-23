/** Tune Unsplash delivery for responsive next/image requests. */
export function optimizeUnsplashUrl(url: string, width: number): string {
  const parsed = new URL(url);
  parsed.searchParams.set("w", String(width));
  parsed.searchParams.set("q", "75");
  parsed.searchParams.set("auto", "format");
  parsed.searchParams.set("fit", "crop");
  return parsed.toString();
}

export const IMAGE_SIZES = {
  hero: "(max-width: 1024px) 100vw, 50vw",
  heroFull: "100vw",
  card: "(max-width: 768px) 100vw, 50vw",
  detail: "(max-width: 768px) 100vw, 50vw",
  /** Gallery grid thumbnails — smaller srcset on mobile. */
  gallery: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
  galleryFeatured: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
} as const;

/** Default quality tiers for next/image. */
export const IMAGE_QUALITY = {
  hero: 80,
  gallery: 68,
  lightbox: 82,
} as const;
