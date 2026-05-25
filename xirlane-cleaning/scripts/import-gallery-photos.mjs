/**
 * One-time import: convert uploaded photos into gallery JPGs.
 * Run: node scripts/import-gallery-photos.mjs
 */
import { mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const importDir = join(root, ".photo-import");
const galleryDir = join(root, "public", "images", "gallery");

/** @type {Record<string, { source: string; aspect: "portrait" | "landscape" | "square" }>} */
const MAPPING = {
  "sparkling-clean-kitchen-philadelphia.jpg": {
    source: "photo-29-AC26FD8D.jpg",
    aspect: "portrait",
  },
  "professional-house-cleaning-living-room-philadelphia.jpg": {
    source: "photo-33-98ECA8EE.jpg",
    aspect: "landscape",
  },
  "deep-cleaned-bathroom-philadelphia.jpg": {
    source: "photo-05-25881547.jpg",
    aspect: "square",
  },
  "commercial-office-cleaning-philadelphia.jpg": {
    source: "photo-04-C6CD882C.jpg",
    aspect: "landscape",
  },
  "commercial-lobby-cleaning-service.jpg": {
    source: "photo-01-732FF8F4.jpg",
    aspect: "portrait",
  },
  "commercial-conference-room-cleaning.jpg": {
    source: "photo-01-732FF8F4.jpg",
    aspect: "square",
  },
  "deep-cleaning-service-bedroom.jpg": {
    source: "photo-02-6B29D9D9.jpg",
    aspect: "portrait",
  },
  "deep-cleaning-dining-area-philadelphia.jpg": {
    source: "photo-04-C6CD882C.jpg",
    aspect: "landscape",
  },
  "deep-cleaned-kitchen-cabinets-philadelphia.jpg": {
    source: "photo-29-AC26FD8D.jpg",
    aspect: "square",
  },
  "move-out-cleaning-service-apartment.jpg": {
    source: "photo-30-3B86328B.jpg",
    aspect: "landscape",
  },
  "post-construction-cleaning-service.jpg": {
    source: "photo-35-B2A6C8E8.jpg",
    aspect: "portrait",
  },
  "move-out-cleaning-staging-ready-home.jpg": {
    source: "photo-06-FE8BF58D.jpg",
    aspect: "square",
  },
  "sparkling-kitchen-island-house-cleaning.jpg": {
    source: "photo-29-AC26FD8D.jpg",
    aspect: "landscape",
  },
  "deep-cleaned-bathroom-primary-suite.jpg": {
    source: "photo-34-9577929F.jpg",
    aspect: "portrait",
  },
  "professional-house-cleaning-living-area.jpg": {
    source: "photo-33-98ECA8EE.jpg",
    aspect: "landscape",
  },
};

const ASPECT_SIZE = {
  portrait: { width: 1200, height: 1500 },
  landscape: { width: 1400, height: 1050 },
  square: { width: 1200, height: 1200 },
};

async function main() {
  let sharp;
  try {
    sharp = (await import("sharp")).default;
  } catch {
    const { execSync } = await import("node:child_process");
    execSync("npm install --no-save sharp", { stdio: "inherit", cwd: root });
    sharp = (await import("sharp")).default;
  }

  mkdirSync(galleryDir, { recursive: true });

  for (const [filename, { source, aspect }] of Object.entries(MAPPING)) {
    const inputPath = join(importDir, source);
    const outputPath = join(galleryDir, filename);
    const { width, height } = ASPECT_SIZE[aspect];

    await sharp(inputPath)
      .rotate()
      .resize(width, height, { fit: "cover", position: "centre" })
      .jpeg({ quality: 82, mozjpeg: true, progressive: true })
      .toFile(outputPath);

    console.log(`Wrote ${filename} <- ${source} (${aspect})`);
  }

  console.log(`\nImported ${Object.keys(MAPPING).length} gallery images.`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
