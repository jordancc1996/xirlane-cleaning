import { GALLERY_ASSETS } from "./gallery-assets";

/** Ensures every gallery asset has non-empty SEO alt text (build-time / script check). */
export function assertGallerySeoIntegrity(): void {
  for (const asset of GALLERY_ASSETS) {
    if (!asset.alt?.trim()) {
      throw new Error(`Gallery asset "${asset.id}" is missing alt text.`);
    }
    if (!asset.filename.match(/^[a-z0-9-]+\.jpg$/)) {
      throw new Error(`Gallery asset "${asset.id}" has non-SEO filename: ${asset.filename}`);
    }
  }
}

// Fail fast during module evaluation in development builds
if (process.env.NODE_ENV !== "production") {
  assertGallerySeoIntegrity();
}
