/**
 * Generates premium-style JPG placeholders in public/images/gallery/.
 * Run: node scripts/generate-gallery-placeholders.mjs
 * Replace any file with a real photo using the same filename — no code changes needed.
 */
import { mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outputDir = join(__dirname, "..", "public", "images", "gallery");

/** Matches GALLERY_ASSETS in src/lib/gallery-assets.ts */
const PLACEHOLDERS = [
  {
    filename: "sparkling-clean-kitchen-philadelphia.jpg",
    width: 1200,
    height: 1500,
    label: "Kitchen · Philadelphia",
  },
  {
    filename: "professional-house-cleaning-living-room-philadelphia.jpg",
    width: 1200,
    height: 900,
    label: "Living Room · House Cleaning",
  },
  {
    filename: "deep-cleaned-bathroom-philadelphia.jpg",
    width: 1200,
    height: 1200,
    label: "Deep Cleaned Bathroom",
  },
  {
    filename: "commercial-office-cleaning-philadelphia.jpg",
    width: 1200,
    height: 900,
    label: "Commercial Office Cleaning",
  },
  {
    filename: "commercial-lobby-cleaning-service.jpg",
    width: 1200,
    height: 1500,
    label: "Commercial Lobby Cleaning",
  },
  {
    filename: "commercial-conference-room-cleaning.jpg",
    width: 1200,
    height: 1200,
    label: "Conference Room Cleaning",
  },
  {
    filename: "deep-cleaning-service-bedroom.jpg",
    width: 1200,
    height: 1500,
    label: "Deep Cleaning · Bedroom",
  },
  {
    filename: "deep-cleaning-dining-area-philadelphia.jpg",
    width: 1200,
    height: 900,
    label: "Deep Cleaning · Dining",
  },
  {
    filename: "deep-cleaned-kitchen-cabinets-philadelphia.jpg",
    width: 1200,
    height: 1200,
    label: "Deep Cleaned Kitchen",
  },
  {
    filename: "move-out-cleaning-service-apartment.jpg",
    width: 1200,
    height: 900,
    label: "Move-Out Cleaning Service",
  },
  {
    filename: "post-construction-cleaning-service.jpg",
    width: 1200,
    height: 1500,
    label: "Post-Construction Cleaning",
  },
  {
    filename: "move-out-cleaning-staging-ready-home.jpg",
    width: 1200,
    height: 1200,
    label: "Staging-Ready Home",
  },
  {
    filename: "sparkling-kitchen-island-house-cleaning.jpg",
    width: 1200,
    height: 900,
    label: "Kitchen Island · House Cleaning",
  },
  {
    filename: "deep-cleaned-bathroom-primary-suite.jpg",
    width: 1200,
    height: 1500,
    label: "Primary Bath · Deep Clean",
  },
  {
    filename: "professional-house-cleaning-living-area.jpg",
    width: 1200,
    height: 900,
    label: "Living Area · House Cleaning",
  },
];

function escapeXml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function buildPlaceholderSvg({ width, height, label }) {
  const titleSize = Math.max(22, Math.round(width * 0.028));
  const subtitleSize = Math.max(13, Math.round(width * 0.014));

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F9F7F4"/>
      <stop offset="100%" stop-color="#EDE8E0"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#bg)"/>
  <rect x="48" y="48" width="${width - 96}" height="${height - 96}" fill="none" stroke="#C9A96E" stroke-width="2" opacity="0.55"/>
  <text x="50%" y="48%" text-anchor="middle" font-family="Georgia, serif" font-size="${titleSize}" fill="#1A1A1A" opacity="0.85">Xirlane Cleaning</text>
  <text x="50%" y="54%" text-anchor="middle" font-family="Arial, sans-serif" font-size="${subtitleSize}" letter-spacing="3" fill="#4A4A4A" opacity="0.75">${escapeXml(label.toUpperCase())}</text>
  <text x="50%" y="60%" text-anchor="middle" font-family="Arial, sans-serif" font-size="${subtitleSize - 1}" fill="#4A4A4A" opacity="0.55">Replace with your photo</text>
</svg>`;
}

async function main() {
  mkdirSync(outputDir, { recursive: true });

  let sharp;
  try {
    sharp = (await import("sharp")).default;
  } catch {
    console.error("Installing sharp for placeholder generation...");
    const { execSync } = await import("node:child_process");
    execSync("npm install --no-save sharp", { stdio: "inherit", cwd: join(__dirname, "..") });
    sharp = (await import("sharp")).default;
  }

  for (const item of PLACEHOLDERS) {
    const svg = buildPlaceholderSvg(item);
    const outputPath = join(outputDir, item.filename);
    await sharp(Buffer.from(svg)).jpeg({ quality: 82 }).toFile(outputPath);
    console.log(`Created ${item.filename}`);
  }

  console.log(`\nDone. ${PLACEHOLDERS.length} placeholders in public/images/gallery/`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
