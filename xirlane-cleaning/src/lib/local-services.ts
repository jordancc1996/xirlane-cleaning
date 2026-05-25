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
  houseCleaning: {
    path: "/services/house-cleaning",
    schemaName: "House Cleaning",
    localName: "House Cleaning Philadelphia",
    description:
      "House cleaning and maid service in Philadelphia with weekly, biweekly, monthly, or one-time visits for kitchens, bathrooms, and living areas.",
    keywords: ["house cleaning Philadelphia", "maid service Philadelphia"],
  },
  deepCleaning: {
    path: "/services/deep-cleaning",
    schemaName: "Deep Cleaning",
    localName: "Deep Cleaning Philadelphia",
    description:
      "Deep cleaning in Philadelphia for first-time visits, spring cleans, and seasonal resets. Top-to-bottom detail for homes and offices across Greater Philadelphia.",
    keywords: ["deep cleaning Philadelphia", "deep cleaning services Philadelphia"],
  },
  moveOutCleaning: {
    path: "/services/move-out-cleaning",
    schemaName: "Move-Out Cleaning",
    localName: "Move-Out Cleaning Philadelphia",
    description:
      "Move-out cleaning in Philadelphia for apartments and homes. Deposit-ready kitchens, bathrooms, floors, and fixtures before handoff.",
    keywords: ["move out cleaning Philadelphia", "move-out cleaning Philadelphia"],
  },
  moveInCleaning: {
    path: "/services/move-in-cleaning",
    schemaName: "Move-In Cleaning",
    localName: "Move-In Cleaning Philadelphia",
    description:
      "Move-in cleaning in Philadelphia before you unpack. Sanitized kitchens, bathrooms, and floors in empty homes and apartments.",
    keywords: ["move in cleaning Philadelphia", "move-in cleaning Philadelphia"],
  },
  apartmentCleaning: {
    path: "/services/apartment-cleaning",
    schemaName: "Apartment Cleaning",
    localName: "Apartment Cleaning Philadelphia",
    description:
      "Apartment and condo cleaning in Philadelphia for studios, rentals, and high-rises with recurring or one-time scheduling.",
    keywords: ["apartment cleaning Philadelphia", "condo cleaning Philadelphia"],
  },
  commercialCleaning: {
    path: "/services/commercial-cleaning",
    schemaName: "Commercial Cleaning",
    localName: "Commercial Cleaning Philadelphia",
    description:
      "Commercial cleaning in Philadelphia for offices, retail, studios, and workplaces. Restrooms, common areas, floors, and after-hours scheduling available.",
    keywords: ["commercial cleaning Philadelphia", "office cleaning Philadelphia"],
  },
  officeCleaning: {
    path: "/services/office-cleaning",
    schemaName: "Office Cleaning",
    localName: "Office Cleaning Philadelphia",
    description:
      "Office cleaning and janitorial service in Philadelphia for suites, coworking spaces, and corporate floors with after-hours options.",
    keywords: ["office cleaning Philadelphia", "janitorial service Philadelphia"],
  },
  recurringCleaning: {
    path: "/services/recurring-cleaning",
    schemaName: "Recurring Cleaning",
    localName: "Recurring Cleaning Philadelphia",
    description:
      "Recurring cleaning in Philadelphia with weekly, biweekly, and monthly plans for homes and offices across Greater Philadelphia.",
    keywords: ["recurring cleaning Philadelphia", "weekly house cleaning Philadelphia"],
  },
  airbnbCleaning: {
    path: "/services/airbnb-cleaning",
    schemaName: "Short-Term Rental Cleaning",
    localName: "Airbnb Cleaning Philadelphia",
    description:
      "Airbnb and short-term rental turnover cleaning in Philadelphia with guest-ready checklists and fast turnovers between guests.",
    keywords: ["Airbnb cleaning Philadelphia", "vacation rental cleaning Philadelphia"],
  },
  postConstructionCleaning: {
    path: "/services/post-construction-cleaning",
    schemaName: "Post-Construction Cleaning",
    localName: "Post-Construction Cleaning Philadelphia",
    description:
      "Post-construction cleaning in Philadelphia removes renovation dust and debris from surfaces, fixtures, glass, and floors for handoff.",
    keywords: ["post construction cleaning Philadelphia", "renovation cleaning Philadelphia"],
  },
} as const;

export type LocalServiceKey = keyof typeof LOCAL_SERVICES;

const PATH_TO_SERVICE: Record<string, LocalServiceKey> = Object.fromEntries(
  Object.entries(LOCAL_SERVICES).map(([key, service]) => [service.path, key as LocalServiceKey]),
) as Record<string, LocalServiceKey>;

export function getLocalServiceByPath(path: string) {
  return PATH_TO_SERVICE[path] ? LOCAL_SERVICES[PATH_TO_SERVICE[path]] : null;
}

export function getLocalServiceUrl(path: string) {
  return `${SITE_URL}${path}`;
}
