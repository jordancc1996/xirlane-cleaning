import type { LandingBenefit } from "@/components/seo-landing/SeoLandingBenefits";
import type { RelatedLandingLink } from "@/components/seo-landing/SeoLandingRelated";
import type { FaqSetKey } from "@/lib/faq-sets";
import type { LocalServiceKey } from "@/lib/local-services";
import { BUSINESS } from "@/lib/site";

export type LandingProcessStep = {
  title: string;
  description: string;
};

export type SeoLandingPageConfig = {
  slug: string;
  path: string;
  eyebrow: string;
  h1: string;
  breadcrumbName: string;
  schemaName: string;
  localName: string;
  meta: {
    title: string;
    description: string;
    keywords: string[];
    ogImageAlt: string;
  };
  heroImage: string;
  heroImageAlt: string;
  overviewImage: string;
  overviewImageAlt: string;
  overviewHeading: string;
  overviewParagraphs: string[];
  benefitsHeading: string;
  benefitsIntro?: string;
  benefits: LandingBenefit[];
  included: string[];
  processHeading: string;
  processIntro: string;
  processSteps: LandingProcessStep[];
  pricingText: string;
  faqSetKey: FaqSetKey;
  faqIntro: string;
  ctaHeading: string;
  ctaBody: string;
  serviceAreaHighlight: LocalServiceKey;
  relatedSlugs: string[];
  knowledgeHeading: string;
  knowledgeSummary: string;
  knowledgeFacts: { label: string; value: string }[];
};

const AREA = "Philadelphia, Montgomery, Delaware, Chester, and Bucks County";
const IMG = {
  house: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80",
  houseDetail: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1200&q=80",
  deep: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1600&q=80",
  deepDetail: "https://images.unsplash.com/photo-1563453392213-326a0fd558b7?w=1200&q=80",
  commercial: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80",
  commercialDetail: "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=1200&q=80",
  construction: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80",
  constructionDetail: "https://images.unsplash.com/photo-1581858724778-55d7a2dd0d0a?w=1200&q=80",
  apartment: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1600&q=80",
  apartmentDetail: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&q=80",
  airbnb: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1600&q=80",
  airbnbDetail: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&q=80",
};

const DEFAULT_PROCESS: LandingProcessStep[] = [
  {
    title: "Tell Us About Your Space",
    description:
      "Share property type, size, condition, and preferred schedule. We confirm service area coverage in Greater Philadelphia.",
  },
  {
    title: "Receive Your Custom Quote",
    description:
      "Get a clear estimate with scope, frequency options, and add-ons. No surprise pricing before we arrive.",
  },
  {
    title: "Enjoy a Consistent Clean",
    description:
      "Our insured crew arrives on time with supplies. You get reliable results and communication after each visit.",
  },
];

const BASE_FACTS = [
  { label: "Business", value: BUSINESS.name },
  { label: "Service region", value: BUSINESS.serviceAreas.join("; ") },
  { label: "Contact", value: `${BUSINESS.email} | ${BUSINESS.phoneDisplay}` },
];

export const SEO_LANDING_PAGES: SeoLandingPageConfig[] = [
  {
    slug: "house-cleaning",
    path: "/services/house-cleaning",
    eyebrow: "HOUSE CLEANING",
    h1: "House Cleaning in Philadelphia",
    breadcrumbName: "House Cleaning",
    schemaName: "House Cleaning",
    localName: "House Cleaning Philadelphia",
    meta: {
      title: "House Cleaning Philadelphia | Maid Service & Home Care",
      description:
        "Professional house cleaning in Philadelphia. Weekly, biweekly & one-time maid service for kitchens, baths & living areas. Insured crews. Free quote.",
      keywords: [
        "house cleaning Philadelphia",
        "maid service Philadelphia",
        "home cleaning Philadelphia PA",
        "residential cleaning near me",
      ],
      ogImageAlt: "House cleaning service in a Philadelphia home",
    },
    heroImage: IMG.house,
    heroImageAlt: "House cleaning crew in Philadelphia",
    overviewImage: IMG.houseDetail,
    overviewImageAlt: "Clean living room after house cleaning in Philadelphia",
    overviewHeading: "Professional House Cleaning for Philadelphia Homes",
    overviewParagraphs: [
      `Xirlane Cleaning provides house cleaning in Philadelphia and ${AREA}. Whether you need a one-time reset or recurring maid service, we focus on kitchens, bathrooms, bedrooms, and high-touch surfaces with consistent crew standards.`,
      "Our residential teams use professional-grade supplies, respect your home, and work around your schedule. Center City condos, rowhomes, and suburban properties across the five-county metro are welcome.",
    ],
    benefitsHeading: "Benefits of Our Philadelphia House Cleaning",
    benefitsIntro: "Reliable home cleaning with clear scope, insured crews, and flexible scheduling.",
    benefits: [
      { title: "Recurring or One-Time", description: "Weekly, biweekly, monthly, or single visits matched to your routine." },
      { title: "Detail-Focused Rooms", description: "Kitchens and bathrooms receive sanitation and polish on every standard visit." },
      { title: "Same-Area Coverage", description: "We serve Philadelphia neighborhoods and surrounding PA counties." },
      { title: "Add-On Options", description: "Oven, fridge, interior windows, and deep-clean upgrades available on request." },
      { title: "Insured & Trained", description: "Background-checked crews with satisfaction-focused quality checks." },
      { title: "Eco Options", description: "Eco-friendly product requests available when you book." },
    ],
    included: [
      "Kitchen counters, sinks, and appliance exteriors",
      "Bathroom sinks, toilets, showers, and mirrors",
      "Dusting for furniture, shelves, and reachable surfaces",
      "Vacuuming and mopping of floors",
      "Trash removal and tidying of common areas",
      "Custom add-ons quoted separately",
    ],
    processHeading: "How House Cleaning Booking Works",
    processIntro: "Three simple steps to schedule maid service or one-time house cleaning in Greater Philadelphia.",
    processSteps: DEFAULT_PROCESS,
    pricingText:
      "House cleaning quotes are based on square footage, number of bathrooms, condition, and visit frequency. Tell us your layout and preferred schedule for a custom estimate.",
    faqSetKey: "houseCleaning",
    faqIntro: "Common questions about house cleaning, maid service, and pricing in the Philadelphia area.",
    ctaHeading: "Ready to Book House Cleaning?",
    ctaBody: "Get a free quote for recurring or one-time house cleaning in Philadelphia and surrounding counties.",
    serviceAreaHighlight: "houseCleaning",
    relatedSlugs: ["recurring-cleaning", "deep-cleaning", "apartment-cleaning"],
    knowledgeHeading: "House cleaning Philadelphia",
    knowledgeSummary: `${BUSINESS.name} offers house cleaning and maid service in Philadelphia with weekly, biweekly, monthly, or one-time visits across ${AREA}.`,
    knowledgeFacts: BASE_FACTS,
  },
  {
    slug: "deep-cleaning",
    path: "/services/deep-cleaning",
    eyebrow: "DEEP CLEANING",
    h1: "Deep Cleaning Services in Philadelphia",
    breadcrumbName: "Deep Cleaning",
    schemaName: "Deep Cleaning",
    localName: "Deep Cleaning Philadelphia",
    meta: {
      title: "Deep Cleaning Philadelphia | Top-to-Bottom Home Reset",
      description:
        "Intensive deep cleaning in Philadelphia for first visits, spring cleans & move-in prep. Baseboards, kitchens, baths & floors. Free quote today.",
      keywords: [
        "deep cleaning Philadelphia",
        "deep cleaning services Philadelphia PA",
        "spring cleaning Philadelphia",
        "intensive house cleaning",
      ],
      ogImageAlt: "Deep cleaning service in a Philadelphia home",
    },
    heroImage: IMG.deep,
    heroImageAlt: "Deep cleaning team working in Philadelphia",
    overviewImage: IMG.deepDetail,
    overviewImageAlt: "Detailed kitchen clean during deep cleaning service",
    overviewHeading: "Top-to-Bottom Deep Cleaning in Greater Philadelphia",
    overviewParagraphs: [
      "Deep cleaning goes beyond routine maintenance with detailed kitchen and bathroom work, baseboards, trim, high-touch zones, and thorough floor care. Ideal for first-time clients, seasonal resets, and pre-move preparation.",
      `We serve homeowners and renters across Philadelphia and ${AREA} with packages such as The Spring Clean and The Ultimate Deep Clean for homes that need extra attention.`,
    ],
    benefitsHeading: "Why Book a Deep Clean",
    benefits: [
      { title: "First-Visit Ready", description: "Establish a baseline before starting recurring maid service." },
      { title: "Seasonal Refresh", description: "Clear buildup from winter months or busy family schedules." },
      { title: "Move-In Support", description: "Pair with move-in cleaning for a fresh start in a new home." },
      { title: "Detailed Scope", description: "Baseboards, fixtures, and reachable detail areas included." },
      { title: "Flexible Scheduling", description: "Book standalone deep cleans or combine with other services." },
      { title: "Insured Crews", description: "Professional teams with supplies and quality standards." },
    ],
    included: [
      "Detailed kitchen and bathroom scrub",
      "Baseboard and trim wipe-down",
      "Interior glass and mirror spot cleaning",
      "High-touch surface disinfection",
      "Floor vacuuming and wash under light furniture",
      "Package upgrades available for cabinet interiors and walls",
    ],
    processHeading: "Our Deep Cleaning Process",
    processIntro: "We scope your home, assign the right crew, and deliver a documented top-to-bottom clean.",
    processSteps: DEFAULT_PROCESS,
    pricingText:
      "Deep cleaning pricing reflects home size, condition, and package level. Share photos or square footage for an accurate Philadelphia-area quote.",
    faqSetKey: "deepCleaning",
    faqIntro: "Answers about deep cleaning scope, pricing, and scheduling in Philadelphia.",
    ctaHeading: "Schedule Your Deep Clean",
    ctaBody: "Request a free quote for intensive deep cleaning in Philadelphia and the five-county area.",
    serviceAreaHighlight: "deepCleaning",
    relatedSlugs: ["house-cleaning", "move-in-cleaning", "recurring-cleaning"],
    knowledgeHeading: "Deep cleaning Philadelphia",
    knowledgeSummary: `${BUSINESS.name} provides deep cleaning in Philadelphia for first visits, seasonal resets, and move-in preparation across ${AREA}.`,
    knowledgeFacts: BASE_FACTS,
  },
  {
    slug: "move-out-cleaning",
    path: "/services/move-out-cleaning",
    eyebrow: "MOVE-OUT CLEANING",
    h1: "Move-Out Cleaning in Philadelphia",
    breadcrumbName: "Move-Out Cleaning",
    schemaName: "Move-Out Cleaning",
    localName: "Move-Out Cleaning Philadelphia",
    meta: {
      title: "Move-Out Cleaning Philadelphia | Deposit-Ready Homes",
      description:
        "Move-out cleaning in Philadelphia for apartments & homes. Kitchens, baths, floors & fixtures polished for landlord handoff. Book a free quote.",
      keywords: [
        "move out cleaning Philadelphia",
        "move-out cleaning Philadelphia PA",
        "end of lease cleaning Philadelphia",
        "apartment move out cleaning",
      ],
      ogImageAlt: "Move-out cleaning in a Philadelphia apartment",
    },
    heroImage: IMG.apartment,
    heroImageAlt: "Move-out cleaning crew in Philadelphia",
    overviewImage: IMG.apartmentDetail,
    overviewImageAlt: "Empty apartment after move-out cleaning",
    overviewHeading: "Move-Out Cleaning for Landlord & Listing Standards",
    overviewParagraphs: [
      "Moving out in Philadelphia? Our move-out cleaning covers kitchens, bathrooms, appliances, floors, and fixtures so your unit is ready for inspection, security deposit return, or new tenant handoff.",
      "We work with renters, homeowners, and property managers across Philadelphia neighborhoods and surrounding counties on tight timelines before keys are returned.",
    ],
    benefitsHeading: "Move-Out Cleaning Benefits",
    benefits: [
      { title: "Deposit-Ready Finish", description: "Detailed scope aimed at lease-end and walkthrough standards." },
      { title: "Empty-Home Focus", description: "Efficient cleaning once furniture is removed." },
      { title: "Apartment Expertise", description: "Experience with Philly rowhomes, condos, and multi-unit buildings." },
      { title: "Flexible Timing", description: "Coordinate cleans around your move date and key return." },
      { title: "Add-On Depth", description: "Pair with deep cleaning for heavy-use kitchens and baths." },
      { title: "Insured Teams", description: "Professional crews with supplies included." },
    ],
    included: [
      "Kitchen cabinets, counters, sinks, and appliance exteriors",
      "Bathroom scrub including toilets, tubs, and vanities",
      "Interior windows and mirrors where accessible",
      "Floor vacuuming and mopping throughout",
      "Light fixtures and switch plates wiped",
      "Trash removal from empty units when arranged",
    ],
    processHeading: "Move-Out Cleaning Steps",
    processIntro: "Confirm your move date, scope the unit, and we deliver a handoff-ready clean.",
    processSteps: DEFAULT_PROCESS,
    pricingText:
      "Move-out quotes depend on square footage, number of baths, and condition. Send your address and move date for a Philadelphia-area estimate.",
    faqSetKey: "moveOutCleaning",
    faqIntro: "Questions about move-out cleaning timing, pricing, and service areas.",
    ctaHeading: "Book Move-Out Cleaning",
    ctaBody: "Get a free quote for move-out cleaning before your lease ends or listing goes live.",
    serviceAreaHighlight: "moveOutCleaning",
    relatedSlugs: ["move-in-cleaning", "apartment-cleaning", "post-construction-cleaning"],
    knowledgeHeading: "Move-out cleaning Philadelphia",
    knowledgeSummary: `${BUSINESS.name} offers move-out cleaning in Philadelphia for renters and homeowners preparing for inspection or handoff across ${AREA}.`,
    knowledgeFacts: BASE_FACTS,
  },
  {
    slug: "move-in-cleaning",
    path: "/services/move-in-cleaning",
    eyebrow: "MOVE-IN CLEANING",
    h1: "Move-In Cleaning in Philadelphia",
    breadcrumbName: "Move-In Cleaning",
    schemaName: "Move-In Cleaning",
    localName: "Move-In Cleaning Philadelphia",
    meta: {
      title: "Move-In Cleaning Philadelphia | Fresh Start Homes",
      description:
        "Move-in cleaning in Philadelphia before you unpack. Sanitized kitchens, baths & floors in empty homes & apartments. Insured crews. Free quote.",
      keywords: [
        "move in cleaning Philadelphia",
        "move-in cleaning Philadelphia PA",
        "new home cleaning Philadelphia",
        "pre move in house cleaning",
      ],
      ogImageAlt: "Move-in cleaning in Philadelphia home",
    },
    heroImage: IMG.house,
    heroImageAlt: "Move-in cleaning service Philadelphia",
    overviewImage: IMG.houseDetail,
    overviewImageAlt: "Sanitized kitchen before move-in",
    overviewHeading: "Start Fresh with Move-In Cleaning",
    overviewParagraphs: [
      "Before boxes arrive, a move-in clean removes dust, residue, and unknown buildup from prior occupants. We sanitize kitchens and bathrooms, detail floors, and polish fixtures so your Philadelphia home feels ready on day one.",
      "New construction, resale, and rental turnovers across Greater Philadelphia benefit from a documented move-in scope before furniture placement.",
    ],
    benefitsHeading: "Why Schedule Move-In Cleaning",
    benefits: [
      { title: "Healthier Start", description: "Sanitized kitchens and baths before you unpack." },
      { title: "Empty-Home Access", description: "Crews reach corners and floors without furniture in the way." },
      { title: "New Build Support", description: "Remove construction dust when paired with post-construction cleaning." },
      { title: "Rental Turnovers", description: "Ideal for landlords preparing units between tenants." },
      { title: "Custom Scope", description: "Add deep-clean upgrades for neglected properties." },
      { title: "Fast Scheduling", description: "Coordinate with your closing or lease start date." },
    ],
    included: [
      "Kitchen and bathroom sanitation",
      "Cabinet exterior wipe-down",
      "Floor vacuuming and mopping",
      "Interior window and mirror cleaning",
      "Light fixtures and switches cleaned",
      "Dusting of shelves and closets in empty rooms",
    ],
    processHeading: "Move-In Cleaning Process",
    processIntro: "Book before your move date so your Philadelphia home is clean before furniture arrives.",
    processSteps: DEFAULT_PROCESS,
    pricingText:
      "Move-in cleaning quotes reflect size, condition, and whether post-construction dust removal is needed. Contact us with your closing date for pricing.",
    faqSetKey: "moveInCleaning",
    faqIntro: "FAQ about move-in cleaning scope and booking in Greater Philadelphia.",
    ctaHeading: "Book Move-In Cleaning",
    ctaBody: "Request a free quote to sanitize your new Philadelphia home before move-in day.",
    serviceAreaHighlight: "moveInCleaning",
    relatedSlugs: ["deep-cleaning", "house-cleaning", "move-out-cleaning"],
    knowledgeHeading: "Move-in cleaning Philadelphia",
    knowledgeSummary: `${BUSINESS.name} provides move-in cleaning in Philadelphia for empty homes and apartments before occupancy across ${AREA}.`,
    knowledgeFacts: BASE_FACTS,
  },
  {
    slug: "apartment-cleaning",
    path: "/services/apartment-cleaning",
    eyebrow: "APARTMENT CLEANING",
    h1: "Apartment Cleaning in Philadelphia",
    breadcrumbName: "Apartment Cleaning",
    schemaName: "Apartment Cleaning",
    localName: "Apartment Cleaning Philadelphia",
    meta: {
      title: "Apartment Cleaning Philadelphia | Condos & Rentals",
      description:
        "Apartment cleaning in Philadelphia for studios, condos & multi-unit buildings. Recurring maid service or one-time cleans. Insured. Free quote.",
      keywords: [
        "apartment cleaning Philadelphia",
        "condo cleaning Philadelphia PA",
        "studio apartment cleaning",
        "apartment maid service Philadelphia",
      ],
      ogImageAlt: "Apartment cleaning in Philadelphia",
    },
    heroImage: IMG.apartment,
    heroImageAlt: "Apartment cleaning in Philadelphia condo",
    overviewImage: IMG.apartmentDetail,
    overviewImageAlt: "Clean Philadelphia apartment living space",
    overviewHeading: "Apartment Cleaning Built for City Living",
    overviewParagraphs: [
      "Philadelphia apartments, condos, and studios need efficient cleaning that respects building access, smaller footprints, and busy schedules. We tailor scope to your unit size with recurring or one-time service.",
      "From Center City high-rises to neighborhood walk-ups, our crews deliver consistent kitchen, bath, and floor care across the metro.",
    ],
    benefitsHeading: "Apartment Cleaning Advantages",
    benefits: [
      { title: "Right-Sized Scope", description: "Efficient plans for studios through multi-bedroom units." },
      { title: "Building-Friendly", description: "Teams accustomed to Philly elevator and access rules." },
      { title: "Recurring Options", description: "Weekly or biweekly maid service for busy professionals." },
      { title: "Move-Ready", description: "Pair with move-in or move-out cleaning packages." },
      { title: "Add-On Flexibility", description: "Oven, fridge, and interior window options available." },
      { title: "Insured Service", description: "Professional supplies and satisfaction-focused crews." },
    ],
    included: [
      "Kitchen and bathroom cleaning",
      "Living and bedroom dusting",
      "Floor vacuuming and mopping",
      "Trash removal and tidying",
      "Mirror and fixture wipe-down",
      "Custom scope for lofts and open layouts",
    ],
    processHeading: "How Apartment Cleaning Works",
    processIntro: "Share your unit size and building details for a tailored Philadelphia apartment cleaning plan.",
    processSteps: DEFAULT_PROCESS,
    pricingText:
      "Apartment quotes are based on bedrooms, baths, and frequency. Smaller units often qualify for streamlined pricing—contact us for details.",
    faqSetKey: "apartmentCleaning",
    faqIntro: "Questions about apartment cleaning, access, and pricing in Philadelphia.",
    ctaHeading: "Book Apartment Cleaning",
    ctaBody: "Free quotes for recurring or one-time apartment cleaning in Philadelphia.",
    serviceAreaHighlight: "apartmentCleaning",
    relatedSlugs: ["house-cleaning", "airbnb-cleaning", "move-out-cleaning"],
    knowledgeHeading: "Apartment cleaning Philadelphia",
    knowledgeSummary: `${BUSINESS.name} offers apartment and condo cleaning in Philadelphia with recurring and one-time scheduling across ${AREA}.`,
    knowledgeFacts: BASE_FACTS,
  },
  {
    slug: "commercial-cleaning",
    path: "/services/commercial-cleaning",
    eyebrow: "COMMERCIAL CLEANING",
    h1: "Commercial Cleaning in Philadelphia",
    breadcrumbName: "Commercial Cleaning",
    schemaName: "Commercial Cleaning",
    localName: "Commercial Cleaning Philadelphia",
    meta: {
      title: "Commercial Cleaning Philadelphia | Offices & Retail",
      description:
        "Commercial cleaning in Philadelphia for offices, retail & workspaces. Restrooms, floors & common areas on reliable schedules. Request a free quote.",
      keywords: [
        "commercial cleaning Philadelphia",
        "business cleaning Philadelphia PA",
        "janitorial service Philadelphia",
        "workplace cleaning near me",
      ],
      ogImageAlt: "Commercial cleaning in Philadelphia office",
    },
    heroImage: IMG.commercial,
    heroImageAlt: "Commercial cleaning crew in Philadelphia office",
    overviewImage: IMG.commercialDetail,
    overviewImageAlt: "Clean commercial workspace in Philadelphia",
    overviewHeading: "Commercial Cleaning for Philadelphia Businesses",
    overviewParagraphs: [
      "Keep your workplace client-ready with commercial cleaning tailored to offices, retail, studios, and shared workspaces. We handle restrooms, breakrooms, floors, and high-touch areas on schedules that match your operations.",
      `Businesses across Philadelphia and ${AREA} rely on us for dependable crews, clear communication, and after-hours availability when needed.`,
    ],
    benefitsHeading: "Commercial Cleaning Benefits",
    benefits: [
      { title: "Professional Image", description: "Consistent cleanliness for staff, clients, and visitors." },
      { title: "Custom Schedules", description: "Daily, weekly, or after-hours service windows." },
      { title: "Restroom Standards", description: "Stocking coordination and sanitation protocols." },
      { title: "Floor Care", description: "Vacuuming, mopping, and entryway maintenance." },
      { title: "Insured & Compliant", description: "Documentation available for property managers." },
      { title: "Scalable Teams", description: "Support for single suites and multi-floor offices." },
    ],
    included: [
      "Workstations and desk surfaces",
      "Restrooms and breakrooms",
      "Reception and common areas",
      "Floor vacuuming and mopping",
      "Trash and recycling removal",
      "Interior glass and entryway touch points",
    ],
    processHeading: "Commercial Cleaning Onboarding",
    processIntro: "We tour your space, define scope, and set a recurring or one-time commercial schedule.",
    processSteps: DEFAULT_PROCESS,
    pricingText:
      "Commercial quotes reflect square footage, restroom count, frequency, and access hours. Request a walkthrough or virtual tour for accurate pricing.",
    faqSetKey: "commercialCleaning",
    faqIntro: "FAQ about commercial cleaning contracts, pricing, and service areas.",
    ctaHeading: "Request Commercial Cleaning",
    ctaBody: "Get a free quote for office and commercial cleaning in Greater Philadelphia.",
    serviceAreaHighlight: "commercialCleaning",
    relatedSlugs: ["office-cleaning", "recurring-cleaning", "post-construction-cleaning"],
    knowledgeHeading: "Commercial cleaning Philadelphia",
    knowledgeSummary: `${BUSINESS.name} provides commercial cleaning in Philadelphia for offices, retail, and workplaces across ${AREA}.`,
    knowledgeFacts: BASE_FACTS,
  },
  {
    slug: "office-cleaning",
    path: "/services/office-cleaning",
    eyebrow: "OFFICE CLEANING",
    h1: "Office Cleaning in Philadelphia",
    breadcrumbName: "Office Cleaning",
    schemaName: "Office Cleaning",
    localName: "Office Cleaning Philadelphia",
    meta: {
      title: "Office Cleaning Philadelphia | Janitorial & Nightly Service",
      description:
        "Office cleaning in Philadelphia for suites, coworking & corporate floors. Desks, restrooms & common areas on schedule. Insured janitorial crews.",
      keywords: [
        "office cleaning Philadelphia",
        "office cleaning Philadelphia PA",
        "janitorial service Philadelphia",
        "nightly office cleaning",
      ],
      ogImageAlt: "Office cleaning service in Philadelphia",
    },
    heroImage: IMG.commercial,
    heroImageAlt: "Office cleaning in Philadelphia workspace",
    overviewImage: IMG.commercialDetail,
    overviewImageAlt: "Janitorial team cleaning Philadelphia office",
    overviewHeading: "Office Cleaning for Productive Workspaces",
    overviewParagraphs: [
      "Office cleaning keeps desks, meeting rooms, kitchens, and restrooms ready for your team each morning. We offer evening and early-morning schedules to avoid disrupting work in Center City and suburban office parks.",
      "From single suites to multi-tenant floors, our janitorial approach focuses on consistency, supply restocking coordination, and clear scope documentation.",
    ],
    benefitsHeading: "Office Cleaning Advantages",
    benefits: [
      { title: "After-Hours Options", description: "Cleaning when staff are off-site." },
      { title: "Desk & Meeting Rooms", description: "Surface care for high-use collaboration spaces." },
      { title: "Kitchen & Break Areas", description: "Appliance exteriors, counters, and sinks sanitized." },
      { title: "Restroom Maintenance", description: "Reliable sanitation and supply checks." },
      { title: "Floor Programs", description: "Vacuuming and hard-floor care on schedule." },
      { title: "Property Manager Ready", description: "Insured teams with COI available on request." },
    ],
    included: [
      "Desk and conference table wipe-down",
      "Restroom cleaning and restocking coordination",
      "Kitchen and breakroom surfaces",
      "Reception and hallway floors",
      "Trash and recycling removal",
      "Entryway glass and touch points",
    ],
    processHeading: "Office Cleaning Setup",
    processIntro: "Define your floor plan, hours, and frequency—we handle the rest.",
    processSteps: DEFAULT_PROCESS,
    pricingText:
      "Office janitorial quotes depend on square footage, headcount areas, and nightly vs weekly service. Schedule a walkthrough for Philadelphia pricing.",
    faqSetKey: "officeCleaning",
    faqIntro: "Questions about office cleaning schedules and estimates in Philadelphia.",
    ctaHeading: "Get Office Cleaning Quote",
    ctaBody: "Free estimates for janitorial and office cleaning across Greater Philadelphia.",
    serviceAreaHighlight: "officeCleaning",
    relatedSlugs: ["commercial-cleaning", "recurring-cleaning", "post-construction-cleaning"],
    knowledgeHeading: "Office cleaning Philadelphia",
    knowledgeSummary: `${BUSINESS.name} offers office cleaning and janitorial service in Philadelphia with flexible after-hours scheduling across ${AREA}.`,
    knowledgeFacts: BASE_FACTS,
  },
  {
    slug: "recurring-cleaning",
    path: "/services/recurring-cleaning",
    eyebrow: "RECURRING CLEANING",
    h1: "Recurring Cleaning in Philadelphia",
    breadcrumbName: "Recurring Cleaning",
    schemaName: "Recurring Cleaning",
    localName: "Recurring Cleaning Philadelphia",
    meta: {
      title: "Recurring Cleaning Philadelphia | Weekly & Biweekly",
      description:
        "Recurring cleaning in Philadelphia—weekly, biweekly & monthly maid service for homes & offices. Same crew when possible. Book a free quote.",
      keywords: [
        "recurring cleaning Philadelphia",
        "weekly house cleaning Philadelphia",
        "biweekly maid service Philadelphia",
        "monthly cleaning service",
      ],
      ogImageAlt: "Recurring house cleaning in Philadelphia",
    },
    heroImage: IMG.house,
    heroImageAlt: "Recurring cleaning service Philadelphia",
    overviewImage: IMG.houseDetail,
    overviewImageAlt: "Home maintained with recurring cleaning",
    overviewHeading: "Recurring Cleaning Plans That Fit Your Schedule",
    overviewParagraphs: [
      "Recurring cleaning keeps your Philadelphia home or office consistently maintained without rebooking each time. Choose weekly, biweekly, or monthly visits with scope tailored to your property.",
      "Repeat clients benefit from familiar crews when scheduling allows, priority booking windows, and predictable pricing across the five-county service area.",
    ],
    benefitsHeading: "Benefits of Recurring Service",
    benefits: [
      { title: "Predictable Cleanliness", description: "Maintain standards week after week." },
      { title: "Priority Scheduling", description: "Standing appointments reduce last-minute gaps." },
      { title: "Crew Consistency", description: "Request the same team when available." },
      { title: "Flexible Frequency", description: "Weekly, biweekly, or monthly options." },
      { title: "Home or Office", description: "Residential and commercial recurring plans." },
      { title: "Easy Changes", description: "Pause, skip, or adjust scope with notice." },
    ],
    included: [
      "Standard kitchen and bathroom maintenance",
      "Dusting and floor care each visit",
      "Trash removal and tidying",
      "Standing appointment scheduling",
      "Same crew requests when possible",
      "Deep-clean upgrades scheduled separately",
    ],
    processHeading: "Start Recurring Cleaning",
    processIntro: "Pick your frequency, approve your scope, and we reserve your recurring slot.",
    processSteps: DEFAULT_PROCESS,
    pricingText:
      "Recurring plans are priced by frequency, home or office size, and condition. Ask about introductory deep cleans before your first recurring visit.",
    faqSetKey: "recurringCleaning",
    faqIntro: "FAQ about recurring maid service, scheduling, and pricing in Philadelphia.",
    ctaHeading: "Start a Recurring Plan",
    ctaBody: "Book weekly, biweekly, or monthly cleaning in Philadelphia with a free custom quote.",
    serviceAreaHighlight: "recurringCleaning",
    relatedSlugs: ["house-cleaning", "apartment-cleaning", "office-cleaning"],
    knowledgeHeading: "Recurring cleaning Philadelphia",
    knowledgeSummary: `${BUSINESS.name} offers recurring cleaning in Philadelphia with weekly, biweekly, and monthly home and office plans across ${AREA}.`,
    knowledgeFacts: BASE_FACTS,
  },
  {
    slug: "airbnb-cleaning",
    path: "/services/airbnb-cleaning",
    eyebrow: "AIRBNB CLEANING",
    h1: "Airbnb Cleaning in Philadelphia",
    breadcrumbName: "Airbnb Cleaning",
    schemaName: "Short-Term Rental Cleaning",
    localName: "Airbnb Cleaning Philadelphia",
    meta: {
      title: "Airbnb Cleaning Philadelphia | Turnover & STR Hosts",
      description:
        "Airbnb and short-term rental cleaning in Philadelphia. Fast turnovers, linen-ready resets & guest-ready standards. Serving STR hosts. Free quote.",
      keywords: [
        "Airbnb cleaning Philadelphia",
        "short term rental cleaning Philadelphia",
        "vacation rental turnover cleaning",
        "STR cleaning service Philadelphia",
      ],
      ogImageAlt: "Airbnb turnover cleaning in Philadelphia",
    },
    heroImage: IMG.airbnb,
    heroImageAlt: "Short-term rental cleaning in Philadelphia",
    overviewImage: IMG.airbnbDetail,
    overviewImageAlt: "Guest-ready bedroom after Airbnb turnover clean",
    overviewHeading: "Turnover Cleaning for Philadelphia STR Hosts",
    overviewParagraphs: [
      "Short-term rental hosts need fast, reliable turnovers between guests. Our Airbnb cleaning resets kitchens, bathrooms, bedrooms, and common areas to guest-ready standards with checklist-driven scope.",
      "We coordinate with lockbox access, same-day turnarounds, and recurring schedules for multi-property hosts across Philadelphia and nearby counties.",
    ],
    benefitsHeading: "Airbnb Cleaning for Hosts",
    benefits: [
      { title: "Guest-Ready Standards", description: "Checklist-based resets for five-star reviews." },
      { title: "Fast Turnovers", description: "Tight windows between checkout and check-in." },
      { title: "Multi-Property Support", description: "Scale across several Philadelphia listings." },
      { title: "Linen-Ready Options", description: "Coordinate bed and bath presentation with your process." },
      { title: "Supply Restocking", description: "Amenity and paper goods alignment on request." },
      { title: "Insured Crews", description: "Professional teams familiar with STR access." },
    ],
    included: [
      "Kitchen and bathroom sanitation",
      "Bedroom dusting and floor care",
      "Trash removal and liner replacement",
      "Surface wipe-down for hosts' checklists",
      "Living area vacuuming and mopping",
      "Photo-ready finishing touches on request",
    ],
    processHeading: "STR Turnover Process",
    processIntro: "Sync calendars, define your checklist, and we handle turnovers on autopilot.",
    processSteps: [
      {
        title: "Share Listing Details",
        description: "Send property address, access method, and turnover windows.",
      },
      {
        title: "Approve Host Checklist",
        description: "We align on linen, amenities, and room-by-room standards.",
      },
      {
        title: "Automatic Turnovers",
        description: "Crews reset the unit between guests on your schedule.",
      },
    ],
    pricingText:
      "Airbnb cleaning is quoted per turnover, with volume discounts for multiple properties. Share your calendar cadence for Philadelphia STR pricing.",
    faqSetKey: "airbnbCleaning",
    faqIntro: "Questions about short-term rental cleaning, turnovers, and pricing.",
    ctaHeading: "Book Airbnb Turnover Cleaning",
    ctaBody: "Free quotes for Airbnb and vacation rental cleaning in Philadelphia.",
    serviceAreaHighlight: "airbnbCleaning",
    relatedSlugs: ["apartment-cleaning", "recurring-cleaning", "deep-cleaning"],
    knowledgeHeading: "Airbnb cleaning Philadelphia",
    knowledgeSummary: `${BUSINESS.name} provides Airbnb and short-term rental turnover cleaning in Philadelphia for hosts across ${AREA}.`,
    knowledgeFacts: BASE_FACTS,
  },
  {
    slug: "post-construction-cleaning",
    path: "/services/post-construction-cleaning",
    eyebrow: "POST-CONSTRUCTION CLEANING",
    h1: "Post-Construction Cleaning in Philadelphia",
    breadcrumbName: "Post-Construction Cleaning",
    schemaName: "Post-Construction Cleaning",
    localName: "Post-Construction Cleaning Philadelphia",
    meta: {
      title: "Post-Construction Cleaning Philadelphia | Renovation Dust",
      description:
        "Post-construction cleaning in Philadelphia removes renovation dust & debris. Cabinets, fixtures, floors & glass detailed for handoff. Free quote.",
      keywords: [
        "post construction cleaning Philadelphia",
        "construction cleanup Philadelphia PA",
        "renovation cleaning Philadelphia",
        "builder clean Philadelphia",
      ],
      ogImageAlt: "Post-construction cleaning in Philadelphia",
    },
    heroImage: IMG.construction,
    heroImageAlt: "Post-construction cleaning crew Philadelphia",
    overviewImage: IMG.constructionDetail,
    overviewImageAlt: "Renovation site after post-construction cleaning",
    overviewHeading: "Post-Construction & Renovation Final Cleaning",
    overviewParagraphs: [
      "Renovation and new-build projects leave fine dust on every surface. Post-construction cleaning removes debris from cabinets, fixtures, glass, floors, and HVAC-visible areas so properties are ready for move-in, staging, or client handoff.",
      "Contractors, homeowners, and property managers across Philadelphia trust our detailed final-clean scope after kitchen, bath, and whole-home remodels.",
    ],
    benefitsHeading: "Post-Construction Cleaning Benefits",
    benefits: [
      { title: "Dust Removal", description: "Fine particulate cleared from surfaces and floors." },
      { title: "Fixture Detailing", description: "Polish for hardware, glass, and cabinetry exteriors." },
      { title: "Move-In Ready", description: "Pair with move-in cleaning for occupancy." },
      { title: "Contractor Handoff", description: "Final clean before punch-list walkthroughs." },
      { title: "Commercial & Residential", description: "Offices, retail, and homes after build-out." },
      { title: "Insured Teams", description: "Crews equipped for post-job site conditions." },
    ],
    included: [
      "Dust removal from horizontal and vertical surfaces",
      "Interior window and glass cleaning",
      "Cabinet exterior and hardware wipe-down",
      "Floor vacuuming and detailed mopping",
      "Fixture and trim polishing",
      "Debris bag-out coordination when arranged",
    ],
    processHeading: "Post-Construction Cleaning Workflow",
    processIntro: "Coordinate with your contractor timeline for final clean before handoff.",
    processSteps: DEFAULT_PROCESS,
    pricingText:
      "Post-construction quotes reflect square footage, trade scope, and dust level. Share project type and completion date for a Philadelphia estimate.",
    faqSetKey: "postConstructionCleaning",
    faqIntro: "FAQ about post-construction scope, timing, and pricing.",
    ctaHeading: "Schedule Post-Construction Cleaning",
    ctaBody: "Free quotes for renovation and construction final cleaning in Greater Philadelphia.",
    serviceAreaHighlight: "postConstructionCleaning",
    relatedSlugs: ["move-in-cleaning", "commercial-cleaning", "move-out-cleaning"],
    knowledgeHeading: "Post-construction cleaning Philadelphia",
    knowledgeSummary: `${BUSINESS.name} provides post-construction and renovation cleaning in Philadelphia across ${AREA}.`,
    knowledgeFacts: BASE_FACTS,
  },
];

const LANDING_BY_SLUG = Object.fromEntries(
  SEO_LANDING_PAGES.map((page) => [page.slug, page]),
) as Record<string, SeoLandingPageConfig>;

const LANDING_BY_PATH = Object.fromEntries(
  SEO_LANDING_PAGES.map((page) => [page.path, page]),
) as Record<string, SeoLandingPageConfig>;

export function getAllLandingSlugs(): string[] {
  return SEO_LANDING_PAGES.map((page) => page.slug);
}

export function getLandingBySlug(slug: string): SeoLandingPageConfig | undefined {
  return LANDING_BY_SLUG[slug];
}

export function getLandingByPath(path: string): SeoLandingPageConfig | undefined {
  return LANDING_BY_PATH[path];
}

/** Nav and hub cards — derived from landing config. */
export const LANDING_NAV_LINKS = SEO_LANDING_PAGES.map((page) => ({
  href: page.path,
  label: page.breadcrumbName,
}));

export function getRelatedLandingLinks(slugs: string[]): RelatedLandingLink[] {
  return slugs
    .map((slug) => LANDING_BY_SLUG[slug])
    .filter((page): page is SeoLandingPageConfig => Boolean(page))
    .map((page) => ({
      href: page.path,
      title: page.breadcrumbName,
      summary: page.overviewParagraphs[0].slice(0, 140) + (page.overviewParagraphs[0].length > 140 ? "…" : ""),
    }));
}
