/**
 * Compresses JPGs in public/images/gallery/ for faster mobile loading.
 * Run: npm run gallery:optimize
 */
import { readdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const galleryDir = join(__dirname, "..", "public", "images", "gallery");

const MAX_WIDTH = 1400;
const JPEG_QUALITY = 78;

async function main() {
  let sharp;
  try {
    sharp = (await import("sharp")).default;
  } catch {
    const { execSync } = await import("node:child_process");
    execSync("npm install --no-save sharp", { stdio: "inherit", cwd: join(__dirname, "..") });
    sharp = (await import("sharp")).default;
  }

  const files = readdirSync(galleryDir).filter((name) => name.endsWith(".jpg"));

  for (const filename of files) {
    const inputPath = join(galleryDir, filename);
    const image = sharp(inputPath);
    const meta = await image.metadata();

    let pipeline = image.rotate();
    if (meta.width && meta.width > MAX_WIDTH) {
      pipeline = pipeline.resize({ width: MAX_WIDTH, withoutEnlargement: true });
    }

    await pipeline
      .jpeg({ quality: JPEG_QUALITY, mozjpeg: true, progressive: true })
      .toFile(`${inputPath}.tmp`);

    const { renameSync, unlinkSync } = await import("node:fs");
    unlinkSync(inputPath);
    renameSync(`${inputPath}.tmp`, inputPath);

    console.log(`Optimized ${filename}`);
  }

  console.log(`\nDone. ${files.length} images optimized (max ${MAX_WIDTH}px, q${JPEG_QUALITY}).`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
