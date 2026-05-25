import { FAQ_ITEMS, type FaqItemData } from "@/lib/faqs";



/** Topic keys for on-page FAQ previews (subset of full /faq). */

export const FAQ_SETS = {

  home: [

    "service-areas",

    "maid-service",

    "pricing",

    "quote",

    "recurring",

    "booking",

  ],

  servicesHub: [

    "maid-service",

    "commercial",

    "deep-cleaning",

    "post-construction",

    "pricing",

    "quote",

  ],

  houseCleaning: ["maid-service", "recurring", "pricing", "supplies", "booking"],

  deepCleaning: ["deep-cleaning", "pricing", "quote", "booking"],

  moveOutCleaning: ["post-construction", "pricing", "quote", "booking"],

  moveInCleaning: ["deep-cleaning", "pricing", "quote", "booking"],

  apartmentCleaning: ["maid-service", "recurring", "pricing", "booking"],

  commercialCleaning: ["commercial", "pricing", "quote", "booking"],

  officeCleaning: ["commercial", "pricing", "quote", "booking"],

  recurringCleaning: ["recurring", "maid-service", "pricing", "booking"],

  airbnbCleaning: ["maid-service", "pricing", "quote", "booking"],

  postConstructionCleaning: ["post-construction", "pricing", "quote", "booking"],

  contact: ["pricing", "quote", "supplies", "booking", "insured"],

  gallery: ["maid-service", "commercial", "deep-cleaning", "pricing"],

  serviceAreas: ["service-areas", "maid-service", "commercial", "pricing"],

} as const;



export type FaqSetKey = keyof typeof FAQ_SETS;



export function getFaqsBySet(setKey: FaqSetKey): FaqItemData[] {

  const ids = FAQ_SETS[setKey];

  return ids

    .map((id) => FAQ_ITEMS.find((item) => item.id === id))

    .filter((item): item is FaqItemData => Boolean(item));

}


