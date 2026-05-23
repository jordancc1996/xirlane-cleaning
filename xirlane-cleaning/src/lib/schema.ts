import { LOCAL_SERVICES } from "./local-services";
import { BUSINESS, SERVICE_ROUTES, SITE_URL, getBusinessSameAs } from "./site";

type FaqItem = { question: string; answer: string };

function areaServedEntities() {
  return [
    {
      "@type": "City",
      name: "Philadelphia",
      containedInPlace: { "@type": "State", name: "Pennsylvania" },
    },
    ...BUSINESS.serviceAreas
      .filter((a) => !a.startsWith("Philadelphia"))
      .map((area) => ({
        "@type": "AdministrativeArea",
        name: area,
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

export function webSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: BUSINESS.name,
    description:
      "Cleaning services, maid service, deep cleaning, commercial cleaning, and move-out cleaning in Philadelphia, PA.",
    inLanguage: "en-US",
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: BUSINESS.name,
    legalName: BUSINESS.legalName,
    url: SITE_URL,
    email: BUSINESS.email,
    telephone: BUSINESS.phone,
    logo: `${SITE_URL}/favicon.ico`,
    areaServed: areaServedEntities(),
    sameAs: getBusinessSameAs(),
  };
}

export function localBusinessSchema() {
  const offers = Object.values(LOCAL_SERVICES).map((service, index) => ({
    "@type": "Offer",
    position: index + 1,
    itemOffered: {
      "@type": "Service",
      "@id": `${SITE_URL}${service.path}#service`,
      name: service.localName,
      description: service.description,
      url: `${SITE_URL}${service.path}`,
      areaServed: areaServedEntities(),
      provider: { "@id": `${SITE_URL}/#localbusiness` },
    },
  }));

  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "CleaningService"],
    "@id": `${SITE_URL}/#localbusiness`,
    name: BUSINESS.name,
    url: SITE_URL,
    email: BUSINESS.email,
    telephone: BUSINESS.phone,
    priceRange: BUSINESS.priceRange,
    image: `${SITE_URL}/favicon.ico`,
    description:
      "Xirlane Cleaning provides cleaning services in Philadelphia including maid service, deep cleaning, commercial cleaning, and move-out cleaning across five PA counties.",
    address: {
      "@type": "PostalAddress",
      addressLocality: BUSINESS.locality,
      addressRegion: BUSINESS.region,
      postalCode: BUSINESS.postalCode,
      addressCountry: BUSINESS.country,
    },
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
      "House cleaning",
      "Maid service",
      "Deep cleaning",
      "Commercial cleaning",
      "Move-out cleaning",
      "Post-construction cleaning",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Philadelphia Cleaning Services",
      itemListElement: offers,
    },
    parentOrganization: { "@id": `${SITE_URL}/#organization` },
    sameAs: getBusinessSameAs(),
  };
}

export function serviceSchema(path: string) {
  const service = Object.values(LOCAL_SERVICES).find((s) => s.path === path);

  if (service) {
    return {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${SITE_URL}${path}#service`,
      name: service.localName,
      alternateName: service.schemaName,
      description: service.description,
      url: `${SITE_URL}${path}`,
      serviceType: service.schemaName,
      category: "Cleaning Service",
      provider: { "@id": `${SITE_URL}/#localbusiness` },
      areaServed: areaServedEntities(),
      availableChannel: {
        "@type": "ServiceChannel",
        serviceUrl: `${SITE_URL}/contact`,
        servicePhone: BUSINESS.phone,
      },
    };
  }

  const route = SERVICE_ROUTES.find((r) => r.path === path);
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}${path}#service`,
    name: route?.name ?? "Cleaning Service",
    description: `Professional ${route?.name ?? "cleaning"} in Greater Philadelphia.`,
    url: `${SITE_URL}${path}`,
    provider: { "@id": `${SITE_URL}/#localbusiness` },
    areaServed: areaServedEntities(),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function faqPageSchema(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${SITE_URL}/faq#webpage`,
    url: `${SITE_URL}/faq`,
    name: "Frequently Asked Questions — Xirlane Cleaning",
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#localbusiness` },
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
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${SITE_URL}/contact#webpage`,
    url: `${SITE_URL}/contact`,
    name: `Contact ${BUSINESS.name}`,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    inLanguage: "en-US",
    description:
      "Request a free cleaning quote for homes and businesses in Philadelphia and surrounding PA counties.",
    mainEntity: { "@id": `${SITE_URL}/#localbusiness` },
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

/** Global entities linked by @id across all pages. */
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
  pageType?: "WebPage" | "FAQPage" | "ContactPage" | "CollectionPage";
}) {
  return {
    "@context": "https://schema.org",
    "@type": pageType,
    "@id": `${SITE_URL}${path}#webpage`,
    url: `${SITE_URL}${path}`,
    name,
    description,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#localbusiness` },
    publisher: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en-US",
  };
}

type GallerySchemaImage = {
  src: string;
  alt: string;
  title: string;
  caption?: string;
};

/** ImageGallery schema for /gallery — helps Google understand photo content. */
export function galleryImageGallerySchema(images: GallerySchemaImage[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "@id": `${SITE_URL}/gallery#imagegallery`,
    url: `${SITE_URL}/gallery`,
    name: "Xirlane Cleaning Project Gallery",
    description:
      "Completed cleaning results from Xirlane Cleaning: professional house cleaning, deep cleaning service, move-out cleaning, and commercial cleaning in Philadelphia, PA.",
    inLanguage: "en-US",
    provider: { "@id": `${SITE_URL}/#localbusiness` },
    isPartOf: { "@id": `${SITE_URL}/gallery#webpage` },
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
