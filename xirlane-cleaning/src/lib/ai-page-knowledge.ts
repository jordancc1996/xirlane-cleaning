import { LOCAL_SERVICES } from "./local-services";
import { BUSINESS, SITE_URL } from "./site";

export type PageKnowledge = {
  /** Short label for the section heading. */
  heading: string;
  /** One-paragraph factual summary for LLMs and readers. */
  summary: string;
  facts: { label: string; value: string }[];
  relatedLinks: { href: string; label: string }[];
};

const SERVICE_LINKS = Object.values(LOCAL_SERVICES).map((s) => ({
  href: s.path,
  label: s.localName,
}));

const AREA_LIST = BUSINESS.serviceAreas.join("; ");

export const PAGE_KNOWLEDGE: Record<string, PageKnowledge> = {
  home: {
    heading: "About Xirlane Cleaning",
    summary: `${BUSINESS.name} is a Philadelphia, Pennsylvania cleaning company. We offer cleaning services in Philadelphia for residential and commercial clients, including maid service (house cleaning), deep cleaning, commercial cleaning, and move-out cleaning. We serve Philadelphia, Montgomery County, Delaware County, Chester County, and Bucks County with insured, recurring or one-time visits.`,
    facts: [
      { label: "Business name", value: BUSINESS.name },
      { label: "Location", value: `${BUSINESS.locality}, ${BUSINESS.region}` },
      { label: "Service areas", value: AREA_LIST },
      { label: "Email", value: BUSINESS.email },
      { label: "Phone", value: BUSINESS.phoneDisplay },
    ],
    relatedLinks: [
      ...SERVICE_LINKS,
      { href: "/service-areas", label: "Service areas" },
      { href: "/contact", label: "Free quote" },
      { href: "/faq", label: "FAQ" },
    ],
  },
  services: {
    heading: "Cleaning services in Philadelphia",
    summary: `${BUSINESS.name} provides house cleaning, deep cleaning, move-in and move-out cleaning, apartment cleaning, commercial and office cleaning, recurring plans, Airbnb turnovers, and post-construction cleaning in Greater Philadelphia. Each service is available for one-time or recurring scheduling.`,
    facts: [
      { label: "Service region", value: AREA_LIST },
      { label: "Booking", value: `Quotes at ${SITE_URL}/contact` },
    ],
    relatedLinks: SERVICE_LINKS,
  },
  contact: {
    heading: "Contact and quotes",
    summary: `Contact ${BUSINESS.name} for a free cleaning quote in Philadelphia and surrounding PA counties. We book house cleaning, maid service, commercial cleaning, deep cleaning, and move-out cleaning.`,
    facts: [
      { label: "Email", value: BUSINESS.email },
      { label: "Phone", value: BUSINESS.phoneDisplay },
      { label: "Service areas", value: AREA_LIST },
    ],
    relatedLinks: SERVICE_LINKS,
  },
  faq: {
    heading: "Frequently asked questions",
    summary: `Common questions about ${BUSINESS.name} cover service areas in Greater Philadelphia, pricing quotes, recurring maid service, deep cleaning, commercial cleaning, move-out cleaning, supplies, and insurance.`,
    facts: [
      { label: "Service areas", value: AREA_LIST },
      { label: "Contact", value: `${BUSINESS.email} | ${BUSINESS.phoneDisplay}` },
    ],
    relatedLinks: [
      { href: "/contact", label: "Request a quote" },
      { href: "/services", label: "All services" },
      { href: "/service-areas", label: "Service areas" },
    ],
  },
  serviceAreas: {
    heading: "Where we clean",
    summary: `${BUSINESS.name} serves Greater Philadelphia including Philadelphia city and Montgomery, Delaware, Chester, and Bucks counties. Services include maid service, deep cleaning, commercial cleaning, and move-out cleaning.`,
    facts: [
      { label: "Counties", value: AREA_LIST },
      {
        label: "Philadelphia neighborhoods",
        value: BUSINESS.philadelphiaNeighborhoods.join(", "),
      },
    ],
    relatedLinks: [
      { href: "/locations", label: "Neighborhood pages" },
      ...SERVICE_LINKS,
    ],
  },
  gallery: {
    heading: "Xirlane Cleaning photo gallery",
    summary: `${BUSINESS.name} gallery shows completed after photos from professional house cleaning, deep cleaning service, move-out cleaning, and commercial cleaning in Philadelphia and five surrounding PA counties.`,
    facts: [
      {
        label: "Content",
        value: "After photos — residential, commercial, deep cleaning, and move-out results",
      },
      { label: "Service areas", value: AREA_LIST },
      { label: "Contact", value: `${BUSINESS.email} | ${BUSINESS.phoneDisplay}` },
    ],
    relatedLinks: [
      { href: "/contact", label: "Book a cleaning" },
      { href: "/services/house-cleaning", label: "House cleaning" },
      { href: "/services/commercial-cleaning", label: "Commercial cleaning" },
      { href: "/services/deep-cleaning", label: "Deep cleaning" },
      { href: "/services/move-out-cleaning", label: "Move-out cleaning" },
      { href: "/services/post-construction-cleaning", label: "Post-construction cleaning" },
    ],
  },
  blog: {
    heading: "Cleaning tips for Philadelphia",
    summary: `${BUSINESS.name} publishes practical cleaning guides for Philadelphia-area homeowners and businesses. Categories include deep cleaning, move-out cleaning, apartment cleaning, commercial cleaning, local Philadelphia guides, cleaning tips, and Airbnb turnovers across ${AREA_LIST}.`,
    facts: [
      { label: "Service region", value: AREA_LIST },
      { label: "Blog URL", value: `${SITE_URL}/blog` },
    ],
    relatedLinks: [
      ...SERVICE_LINKS,
      { href: "/locations", label: "Neighborhood pages" },
      { href: "/faq", label: "FAQ" },
      { href: "/contact", label: "Free quote" },
    ],
  },
};

export function getServicePageKnowledge(path: string): PageKnowledge | null {
  const service = Object.values(LOCAL_SERVICES).find((s) => s.path === path);
  if (!service) return null;

  return {
    heading: service.localName,
    summary: `${service.description} ${BUSINESS.name} serves ${AREA_LIST}.`,
    facts: [
      { label: "Service", value: service.localName },
      { label: "Service areas", value: AREA_LIST },
      { label: "Contact", value: `${BUSINESS.email} | ${BUSINESS.phoneDisplay}` },
    ],
    relatedLinks: SERVICE_LINKS.filter((l) => l.href !== path),
  };
}
