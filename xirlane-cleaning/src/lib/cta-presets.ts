import { BUSINESS } from "./site";

export type CtaPresetKey =
  | "freeQuote"
  | "bookCleaning"
  | "recurringCleaning"
  | "contact"
  | "gallery"
  | "serviceExplore"
  | "blogArticle"
  | "faqFollowUp"
  | "neighborhood";

export type CtaPreset = {
  eyebrow: string;
  heading: string;
  body: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  footnote?: string;
};

const AREA_FOOTNOTE =
  "Serving Philadelphia · Montgomery · Delaware · Chester · Bucks County";

export const CTA_PRESETS: Record<CtaPresetKey, CtaPreset> = {
  freeQuote: {
    eyebrow: "FREE QUOTE",
    heading: "Get a Custom Cleaning Quote",
    body: "Tell us about your home or office in Greater Philadelphia. We respond with clear pricing and a plan matched to your space — no obligation.",
    primaryLabel: "REQUEST A FREE QUOTE →",
    primaryHref: "/contact",
    secondaryLabel: "CALL TO DISCUSS →",
    secondaryHref: "/contact",
    footnote: AREA_FOOTNOTE,
  },
  bookCleaning: {
    eyebrow: "BOOK A CLEAN",
    heading: "Schedule Your Next Cleaning",
    body: "One-time deep cleans, move-out service, and commercial schedules available. Insured crews and flexible timing across Philadelphia and surrounding counties.",
    primaryLabel: "BOOK A CLEANING →",
    primaryHref: "/contact",
    secondaryLabel: "FREE QUOTE FIRST →",
    secondaryHref: "/contact",
    footnote: AREA_FOOTNOTE,
  },
  recurringCleaning: {
    eyebrow: "RECURRING SERVICE",
    heading: "Set Up Weekly or Biweekly Cleaning",
    body: "Keep your Philadelphia home consistently clean with the same trained team on a schedule that fits you. Pause or adjust anytime.",
    primaryLabel: "START RECURRING CLEANING →",
    primaryHref: "/contact",
    secondaryLabel: "COMPARE PLANS →",
    secondaryHref: "/services/recurring-cleaning",
    footnote: AREA_FOOTNOTE,
  },
  contact: {
    eyebrow: "GET IN TOUCH",
    heading: "Questions Before You Book?",
    body: `Reach ${BUSINESS.name} for scheduling, scope, supplies, and service-area questions. We serve homes and businesses across Greater Philadelphia.`,
    primaryLabel: "CONTACT US →",
    primaryHref: "/contact",
    secondaryLabel: "VIEW FAQ →",
    secondaryHref: "/faq",
    footnote: AREA_FOOTNOTE,
  },
  gallery: {
    eyebrow: "SAME QUALITY FOR YOUR SPACE",
    heading: "Ready for Results Like These?",
    body: "Insured crews deliver the same attention to detail shown in our gallery — for house, deep, move-out, and commercial cleaning in Philadelphia.",
    primaryLabel: "BOOK A CLEANING →",
    primaryHref: "/contact",
    secondaryLabel: "FREE QUOTE →",
    secondaryHref: "/contact",
    footnote: AREA_FOOTNOTE,
  },
  serviceExplore: {
    eyebrow: "NOT SURE YET?",
    heading: "We Will Match You to the Right Service",
    body: "Share your property type, timing, and priorities. We recommend house, deep, commercial, or recurring cleaning with transparent pricing.",
    primaryLabel: "GET YOUR QUOTE →",
    primaryHref: "/contact",
    secondaryLabel: "VIEW ALL SERVICES →",
    secondaryHref: "/services",
    footnote: AREA_FOOTNOTE,
  },
  blogArticle: {
    eyebrow: "PROFESSIONAL HELP",
    heading: "Prefer a Crew to Handle the Heavy Lifting?",
    body: "Xirlane Cleaning provides house, apartment, commercial, deep, and move-out cleaning across Philadelphia. Free quotes with insured, trained teams.",
    primaryLabel: "GET A FREE QUOTE →",
    primaryHref: "/contact",
    secondaryLabel: "VIEW SERVICES →",
    secondaryHref: "/services",
    footnote: AREA_FOOTNOTE,
  },
  faqFollowUp: {
    eyebrow: "STILL HAVE QUESTIONS?",
    heading: "We Are Happy to Walk You Through Options",
    body: "Pricing, supplies, access, and scheduling vary by property. Contact us for a tailored recommendation for your Philadelphia-area home or business.",
    primaryLabel: "REQUEST A FREE QUOTE →",
    primaryHref: "/contact",
    secondaryLabel: "CONTACT US →",
    secondaryHref: "/contact",
  },
  neighborhood: {
    eyebrow: "LOCAL CLEANING",
    heading: "Book Cleaning in Your Neighborhood",
    body: "House, apartment, and commercial cleaning with crews familiar with Greater Philadelphia properties. Free quotes and flexible scheduling.",
    primaryLabel: "GET A FREE QUOTE →",
    primaryHref: "/contact",
    secondaryLabel: "BOOK A CLEANING →",
    secondaryHref: "/contact",
    footnote: AREA_FOOTNOTE,
  },
};

export function getCtaPreset(
  key: CtaPresetKey,
  overrides?: Partial<CtaPreset>,
): CtaPreset {
  return { ...CTA_PRESETS[key], ...overrides };
}

/** Mid-page CTA on service landings — recurring pages get recurring preset, etc. */
export function getServiceMidCtaPreset(servicePath: string): CtaPresetKey {
  if (servicePath.includes("recurring-cleaning")) return "recurringCleaning";
  if (
    servicePath.includes("commercial") ||
    servicePath.includes("office") ||
    servicePath.includes("airbnb")
  ) {
    return "bookCleaning";
  }
  return "freeQuote";
}
