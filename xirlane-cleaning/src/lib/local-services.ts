import { SITE_URL } from "./site";

/**
 * Local service definitions aligned to target keywords and GBP categories.
 * Used for Service schema, on-page copy, and internal linking.
 */
export const LOCAL_SERVICES = {
  cleaningServices: {
    path: "/services",
    schemaName: "Cleaning Services",
    localName: "Cleaning Services Philadelphia",
    description:
      "Professional cleaning services in Philadelphia for homes and businesses, including recurring maid service, deep cleaning, commercial cleaning, and move-out cleaning.",
    keywords: ["cleaning services Philadelphia", "Philadelphia cleaning company"],
  },
  maidService: {
    path: "/services/home-cleaning",
    schemaName: "Maid Service",
    localName: "Maid Service Philadelphia",
    description:
      "Maid service and house cleaning in Philadelphia with weekly, biweekly, monthly, or one-time visits. Residential cleaning for kitchens, bathrooms, bedrooms, and living areas.",
    keywords: ["maid service Philadelphia", "maid services Philadelphia", "house cleaning Philadelphia"],
  },
  deepCleaning: {
    path: "/services/deep-cleaning",
    schemaName: "Deep Cleaning",
    localName: "Deep Cleaning Philadelphia",
    description:
      "Deep cleaning in Philadelphia for first-time visits, spring cleans, and seasonal resets. Top-to-bottom detail for homes and offices across Greater Philadelphia.",
    keywords: ["deep cleaning Philadelphia", "deep cleaning services Philadelphia"],
  },
  commercialCleaning: {
    path: "/services/commercial-cleaning",
    schemaName: "Commercial Cleaning",
    localName: "Commercial Cleaning Philadelphia",
    description:
      "Commercial cleaning in Philadelphia for offices, retail, studios, and workplaces. Restrooms, common areas, floors, and after-hours scheduling available.",
    keywords: ["commercial cleaning Philadelphia", "office cleaning Philadelphia"],
  },
  moveOutCleaning: {
    path: "/services/post-construction",
    schemaName: "Move-Out Cleaning",
    localName: "Move-Out Cleaning Philadelphia",
    description:
      "Move-out cleaning and post-construction cleaning in Philadelphia. Dust, debris removal, and final polish for move-in, staging, and renovation handoff.",
    keywords: ["move out cleaning Philadelphia", "move-out cleaning Philadelphia"],
  },
} as const;

export type LocalServiceKey = keyof typeof LOCAL_SERVICES;

const PATH_TO_SERVICE: Record<string, LocalServiceKey> = {
  "/services": "cleaningServices",
  "/services/home-cleaning": "maidService",
  "/services/deep-cleaning": "deepCleaning",
  "/services/commercial-cleaning": "commercialCleaning",
  "/services/post-construction": "moveOutCleaning",
};

export function getLocalServiceByPath(path: string) {
  return PATH_TO_SERVICE[path] ? LOCAL_SERVICES[PATH_TO_SERVICE[path]] : null;
}

export function getLocalServiceUrl(path: string) {
  return `${SITE_URL}${path}`;
}
