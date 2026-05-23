import type { Metadata } from "next";
import { BUSINESS, DEFAULT_OG_IMAGE, SITE_URL } from "./site";

export type PageSeoInput = {
  /** Page title segment (brand appended via layout template except homepage). */
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  noIndex?: boolean;
  ogImage?: string;
  ogImageAlt?: string;
};

function resolveOgImageUrl(image?: string): string {
  if (!image) return DEFAULT_OG_IMAGE;
  if (image.startsWith("http")) return image;
  return `${SITE_URL}${image.startsWith("/") ? image : `/${image}`}`;
}

export function createPageMetadata({
  title,
  description,
  path,
  keywords = [],
  noIndex = false,
  ogImage,
  ogImageAlt,
}: PageSeoInput): Metadata {
  const url = `${SITE_URL}${path}`;
  const isHome = path === "/";
  const resolvedTitle = isHome ? { absolute: title } : title;
  const fullTitle = isHome ? title : `${title} | ${BUSINESS.name}`;
  const imageUrl = resolveOgImageUrl(ogImage);
  const imageAlt =
    ogImageAlt ?? `${BUSINESS.name} — professional cleaning in Greater Philadelphia`;

  return {
    title: resolvedTitle,
    description,
    keywords: keywords.length > 0 ? keywords : undefined,
    alternates: {
      canonical: url,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
    openGraph: {
      type: "website",
      locale: "en_US",
      url,
      siteName: BUSINESS.name,
      title: fullTitle,
      description,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [
        {
          url: imageUrl,
          alt: imageAlt,
        },
      ],
    },
  };
}

const PAGE_SEO_FALLBACK_TITLE =
  "House Cleaning Philadelphia | Maid & Commercial | Xirlane Cleaning";
const PAGE_SEO_FALLBACK_DESCRIPTION =
  "Insured house cleaning, maid service, deep cleans & move-out cleaning in Philadelphia & 5 PA counties. Weekly, biweekly, or one-time. Get a free quote today.";

/** Fallback metadata for routes without a page-level export (e.g. 404). */
export const rootMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: PAGE_SEO_FALLBACK_TITLE,
    template: `%s | ${BUSINESS.name}`,
  },
  description: PAGE_SEO_FALLBACK_DESCRIPTION,
  applicationName: BUSINESS.name,
  authors: [{ name: BUSINESS.name, url: SITE_URL }],
  creator: BUSINESS.name,
  publisher: BUSINESS.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: BUSINESS.name,
    title: PAGE_SEO_FALLBACK_TITLE,
    description: PAGE_SEO_FALLBACK_DESCRIPTION,
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: `${BUSINESS.name} professional cleaning in Greater Philadelphia`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_SEO_FALLBACK_TITLE,
    description: PAGE_SEO_FALLBACK_DESCRIPTION,
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        alt: `${BUSINESS.name} professional cleaning in Greater Philadelphia`,
      },
    ],
  },
};
