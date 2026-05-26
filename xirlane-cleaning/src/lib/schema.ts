import type { BlogPost } from "./blog-types";
import type { BlogCategorySlug } from "./blog-categories";
import { BLOG_CATEGORIES } from "./blog-categories";
import { blogPostAbsoluteUrl, blogPostUrl } from "./blog";
import { BLOG_AUTHOR } from "./blog-author";
import type { FaqItemData } from "./faqs";
import { LOCAL_SERVICES } from "./local-services";
import type { LocationLandingConfig } from "./location-landing-pages";
import { getLandingByPath, SEO_LANDING_PAGES } from "./seo-landing-pages";
import { canonicalUrl } from "./seo";
import { BUSINESS, SERVICE_ROUTES, SITE_URL, getBusinessSameAs } from "./site";

export const SCHEMA_IDS = {
  website: `${SITE_URL}/#website`,
  organization: `${SITE_URL}/#organization`,
  localBusiness: `${SITE_URL}/#localbusiness`,
} as const;

function areaServedEntities() {
  return [
    {
      "@type": "City",
      name: "Philadelphia",
      containedInPlace: { "@type": "State", name: "Pennsylvania", "@id": "https://www.wikidata.org/wiki/Q1345" },
    },
    ...BUSINESS.serviceAreas
      .filter((a) => !a.startsWith("Philadelphia"))
      .map((area) => ({
        "@type": "AdministrativeArea",
        name: area,
        containedInPlace: { "@type": "State", name: "Pennsylvania" },
      })),
  ];
}

function openingHoursSpecification() {
  return BUSINESS.openingHours.map((slot) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: slot.dayOfWeek,
    opens: slot.opens,
    closes: slot.closes,
  }));
}

function postalAddress() {
  return {
    "@type": "PostalAddress",
    streetAddress: "Greater Philadelphia",
    addressLocality: BUSINESS.locality,
    addressRegion: BUSINESS.region,
    postalCode: BUSINESS.postalCode,
    addressCountry: BUSINESS.country,
  };
}

export function webSiteSchema() {
  return {
    "@type": "WebSite",
    "@id": SCHEMA_IDS.website,
    url: SITE_URL,
    name: BUSINESS.name,
    description:
      "Cleaning services, maid service, deep cleaning, commercial cleaning, and move-out cleaning in Philadelphia, PA.",
    inLanguage: "en-US",
    publisher: { "@id": SCHEMA_IDS.organization },
  };
}

export function organizationSchema() {
  return {
    "@type": "Organization",
    "@id": SCHEMA_IDS.organization,
    name: BUSINESS.name,
    legalName: BUSINESS.legalName,
    url: SITE_URL,
    email: BUSINESS.email,
    telephone: BUSINESS.phone,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/favicon-180x180.png`,
      contentUrl: `${SITE_URL}/favicon-180x180.png`,
    },
    areaServed: areaServedEntities(),
    sameAs: getBusinessSameAs(),
  };
}

/** Single canonical LocalBusiness entity — emitted once site-wide via layout @graph. */
export function localBusinessSchema() {
  const serviceEntries = SEO_LANDING_PAGES.map((page, index) => ({
    "@type": "Offer",
    position: index + 1,
    itemOffered: {
      "@type": "Service",
      "@id": `${SITE_URL}${page.path}#service`,
      name: page.localName,
      description: page.meta.description,
      url: `${SITE_URL}${page.path}`,
      areaServed: areaServedEntities(),
      provider: { "@id": SCHEMA_IDS.localBusiness },
    },
  }));

  return {
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
    "@id": SCHEMA_IDS.localBusiness,
    name: BUSINESS.name,
    url: SITE_URL,
    email: BUSINESS.email,
    telephone: BUSINESS.phone,
    priceRange: BUSINESS.priceRange,
    image: `${SITE_URL}/favicon-180x180.png`,
    description:
      "Xirlane Cleaning provides house cleaning, maid service, deep cleaning, commercial cleaning, office cleaning, and move-out cleaning in Philadelphia, Montgomery, Delaware, Chester, and Bucks County, PA.",
    address: postalAddress(),
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS.geo.latitude,
      longitude: BUSINESS.geo.longitude,
    },
    areaServed: areaServedEntities(),
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: BUSINESS.geo.latitude,
        longitude: BUSINESS.geo.longitude,
      },
      geoRadius: BUSINESS.serviceRadiusMeters,
    },
    openingHoursSpecification: openingHoursSpecification(),
    currenciesAccepted: "USD",
    paymentAccepted: "Cash, Credit Card",
    knowsAbout: [
      "House cleaning Philadelphia",
      "Maid service",
      "Deep cleaning",
      "Commercial cleaning",
      "Office cleaning",
      "Move-out cleaning",
      "Post-construction cleaning",
      "Airbnb turnover cleaning",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Philadelphia Cleaning Services",
      itemListElement: serviceEntries,
    },
    parentOrganization: { "@id": SCHEMA_IDS.organization },
    sameAs: getBusinessSameAs(),
  };
}

export function serviceSchema(path: string) {
  const service = Object.values(LOCAL_SERVICES).find((s) => s.path === path);
  const landing = getLandingByPath(path);

  const name = service?.localName ?? landing?.localName ?? "Cleaning Service";
  const description =
    service?.description ??
    landing?.meta.description ??
    `Professional cleaning in Greater Philadelphia.`;
  const serviceType = service?.schemaName ?? landing?.schemaName ?? "Cleaning Service";

  return {
    "@type": "Service",
    "@id": `${SITE_URL}${path}#service`,
    name,
    alternateName: service?.schemaName ?? landing?.schemaName,
    description,
    url: `${SITE_URL}${path}`,
    serviceType,
    category: "Cleaning Service",
    provider: { "@id": SCHEMA_IDS.localBusiness },
    areaServed: areaServedEntities(),
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: `${SITE_URL}/contact`,
      servicePhone: BUSINESS.phone,
      areaServed: areaServedEntities(),
    },
  };
}

export function breadcrumbSchema(
  items: { name: string; path: string }[],
  options?: { pagePath?: string },
) {
  const pagePath = options?.pagePath ?? items[items.length - 1]?.path ?? "/";
  return {
    "@type": "BreadcrumbList",
    "@id": `${canonicalUrl(pagePath)}#breadcrumb`,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: canonicalUrl(item.path),
    })),
  };
}

export function faqPageSchema(
  faqs: FaqItemData[],
  options?: { path?: string; pageName?: string },
) {
  const path = options?.path ?? "/faq";
  const pageName = options?.pageName ?? "Frequently Asked Questions — Xirlane Cleaning";

  return {
    "@type": "FAQPage",
    "@id": `${canonicalUrl(path)}#faq`,
    url: canonicalUrl(path),
    name: pageName,
    isPartOf: { "@id": SCHEMA_IDS.website },
    about: { "@id": SCHEMA_IDS.localBusiness },
    inLanguage: "en-US",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function contactPageSchema() {
  return {
    "@type": "ContactPage",
    "@id": `${canonicalUrl("/contact")}#webpage`,
    url: canonicalUrl("/contact"),
    name: `Contact ${BUSINESS.name}`,
    isPartOf: { "@id": SCHEMA_IDS.website },
    inLanguage: "en-US",
    description:
      "Request a free cleaning quote for homes and businesses in Philadelphia and surrounding PA counties.",
    mainEntity: { "@id": SCHEMA_IDS.localBusiness },
  };
}

export function serviceAreasPageSchema() {
  return webPageSchema({
    path: "/service-areas",
    name: "Cleaning Service Areas — Greater Philadelphia",
    description:
      "Areas served by Xirlane Cleaning for maid service, deep cleaning, commercial cleaning, and move-out cleaning in Philadelphia, PA.",
  });
}

export function servicesItemListSchema() {
  return {
    "@type": "ItemList",
    "@id": `${canonicalUrl("/services")}#itemlist`,
    name: "Philadelphia Cleaning Services",
    numberOfItems: SERVICE_ROUTES.length,
    itemListElement: SERVICE_ROUTES.map((route, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: route.name,
      item: `${SITE_URL}${route.path}`,
    })),
  };
}

export function locationsItemListSchema(
  locations: { path: string; name: string }[],
) {
  return {
    "@type": "ItemList",
    "@id": `${canonicalUrl("/locations")}#itemlist`,
    name: "Philadelphia neighborhood cleaning pages",
    numberOfItems: locations.length,
    itemListElement: locations.map((loc, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: loc.name,
      item: `${SITE_URL}${loc.path}`,
    })),
  };
}

export function placeSchema(location: LocationLandingConfig) {
  return {
    "@type": "Place",
    "@id": `${SITE_URL}${location.path}#place`,
    name: `${location.neighborhoodName}, Philadelphia`,
    description: location.knowledgeSummary,
    url: `${SITE_URL}${location.path}`,
    address: {
      "@type": "PostalAddress",
      addressLocality:
        location.slug === "main-line" ? "Main Line" : BUSINESS.locality,
      addressRegion: BUSINESS.region,
      addressCountry: BUSINESS.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS.geo.latitude,
      longitude: BUSINESS.geo.longitude,
    },
    containedInPlace: {
      "@type": "City",
      name: "Philadelphia",
      containedInPlace: { "@type": "State", name: "Pennsylvania" },
    },
  };
}

export function blogPostingSchema(post: BlogPost) {
  const url = blogPostAbsoluteUrl(post.slug);
  const published = post.publishedAt;
  const modified = post.updatedAt ?? post.publishedAt;

  return {
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    headline: post.title,
    description: post.description,
    image: {
      "@type": "ImageObject",
      url: post.featuredImage,
      contentUrl: post.featuredImage,
    },
    datePublished: published,
    dateModified: modified,
    inLanguage: "en-US",
    url,
    mainEntityOfPage: { "@id": `${canonicalUrl(blogPostUrl(post.slug))}#webpage` },
    isPartOf: { "@id": SCHEMA_IDS.website },
    author: {
      "@type": "Organization",
      "@id": SCHEMA_IDS.organization,
      name: BLOG_AUTHOR.name,
      url: BLOG_AUTHOR.url,
    },
    publisher: {
      "@id": SCHEMA_IDS.organization,
    },
    about: { "@id": SCHEMA_IDS.localBusiness },
    keywords: post.keywords.join(", "),
    articleSection: BLOG_CATEGORIES[post.categorySlug].name,
    contentLocation: {
      "@type": "City",
      name: BUSINESS.locality,
      containedInPlace: { "@type": "State", name: BUSINESS.region },
    },
  };
}

export function locationServicesSchema(location: LocationLandingConfig) {
  return {
    "@type": "ItemList",
    "@id": `${SITE_URL}${location.path}#services`,
    name: `Cleaning services in ${location.neighborhoodName}, Philadelphia`,
    numberOfItems: location.services.length,
    itemListElement: location.services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: { "@id": `${SITE_URL}${service.href}#service` },
    })),
  };
}

export function blogCategoryItemListSchema(
  categorySlug: BlogCategorySlug,
  posts: BlogPost[],
) {
  const path = `/blog/category/${categorySlug}`;
  return {
    "@type": "ItemList",
    "@id": `${canonicalUrl(path)}#itemlist`,
    name: `${BLOG_CATEGORIES[categorySlug].name} articles`,
    numberOfItems: posts.length,
    itemListElement: posts.map((post, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: post.title,
      item: blogPostAbsoluteUrl(post.slug),
    })),
  };
}

/** Global entities linked by @id — rendered once in root layout only. */
export function globalSchemaGraph() {
  return [webSiteSchema(), organizationSchema(), localBusinessSchema()];
}

export function webPageSchema({
  path,
  name,
  description,
  pageType = "WebPage",
}: {
  path: string;
  name: string;
  description: string;
  pageType?: "WebPage" | "ContactPage" | "CollectionPage";
}) {
  return {
    "@type": pageType,
    "@id": `${canonicalUrl(path)}#webpage`,
    url: canonicalUrl(path),
    name,
    description,
    isPartOf: { "@id": SCHEMA_IDS.website },
    about: { "@id": SCHEMA_IDS.localBusiness },
    publisher: { "@id": SCHEMA_IDS.organization },
    inLanguage: "en-US",
  };
}

type GallerySchemaImage = {
  src: string;
  alt: string;
  title: string;
  caption?: string;
};

export function galleryImageGallerySchema(images: GallerySchemaImage[]) {
  return {
    "@type": "ImageGallery",
    "@id": `${canonicalUrl("/gallery")}#imagegallery`,
    url: canonicalUrl("/gallery"),
    name: "Xirlane Cleaning Project Gallery",
    description:
      "Completed cleaning results from Xirlane Cleaning: professional house cleaning, deep cleaning service, move-out cleaning, and commercial cleaning in Philadelphia, PA.",
    inLanguage: "en-US",
    provider: { "@id": SCHEMA_IDS.localBusiness },
    isPartOf: { "@id": `${canonicalUrl("/gallery")}#webpage` },
    image: images.map((image) => ({
      "@type": "ImageObject",
      contentUrl: `${SITE_URL}${image.src}`,
      url: `${SITE_URL}${image.src}`,
      name: image.title,
      description: image.alt,
      caption: image.caption ?? image.title,
    })),
  };
}

/** Deduplicate nodes by @id so page graphs never repeat global entities. */
export function dedupeSchemaNodes(nodes: Record<string, unknown>[]) {
  const seen = new Set<string>();
  const result: Record<string, unknown>[] = [];

  for (const node of nodes) {
    const id = node["@id"];
    if (typeof id === "string") {
      if (seen.has(id)) continue;
      seen.add(id);
    }
    result.push(node);
  }

  return result;
}
