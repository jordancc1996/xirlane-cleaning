/**
 * Validates gallery assets vs files on disk. Run: npm run gallery:validate
 */
import { readFileSync, existsSync, readdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const galleryDir = join(root, "public", "images", "gallery");

const assetsSource = readFileSync(join(root, "src", "lib", "gallery-assets.ts"), "utf8");
const filenames = [...assetsSource.matchAll(/filename: "([^"]+)"/g)].map((m) => m[1]);
const ids = [...assetsSource.matchAll(/id: "([^"]+)"/g)].map((m) => m[1]);

const featuredMatch = assetsSource.match(
  /FEATURED_GALLERY_IDS\s*=\s*\[([\s\S]*?)\]\s*as const/,
);
const featuredIds = featuredMatch
  ? [...featuredMatch[1].matchAll(/"([^"]+)"/g)].map((m) => m[1])
  : [];

const onDisk = readdirSync(galleryDir).filter((f) => f.endsWith(".jpg"));
let failed = false;

for (const file of filenames) {
  if (!onDisk.includes(file)) {
    console.error(`Missing file: public/images/gallery/${file}`);
    failed = true;
  }
}

for (const file of onDisk) {
  if (!filenames.includes(file)) {
    console.warn(`Extra file (not in GALLERY_ASSETS): ${file}`);
  }
}

const uniqueIds = new Set(ids);
if (uniqueIds.size !== ids.length) {
  console.error("Duplicate asset ids in GALLERY_ASSETS");
  failed = true;
}

for (const id of featuredIds) {
  if (!uniqueIds.has(id)) {
    console.error(`FEATURED_GALLERY_IDS references unknown id: ${id}`);
    failed = true;
  }
}

if (filenames.length === 0) {
  console.error("No gallery assets found");
  failed = true;
}

if (failed) {
  process.exit(1);
}

console.log(
  `Gallery OK: ${filenames.length} assets, ${featuredIds.length} featured, ${onDisk.length} files on disk.`,
);
