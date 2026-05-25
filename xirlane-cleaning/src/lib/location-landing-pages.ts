import { getLandingBySlug } from "@/lib/seo-landing-pages";
import { BUSINESS } from "@/lib/site";

export type LocationPropertyType = {
  title: string;
  description: string;
};

export type LocationReason = {
  title: string;
  description: string;
};

export type LocationFaqItem = {
  id: string;
  question: string;
  answer: string;
};

export type LocationServiceLink = {
  href: string;
  title: string;
  summary: string;
};

export type LocationLandingConfig = {
  slug: string;
  path: string;
  neighborhoodName: string;
  eyebrow: string;
  h1: string;
  breadcrumbName: string;
  meta: {
    title: string;
    description: string;
    keywords: string[];
    ogImageAlt: string;
  };
  heroImage: string;
  heroImageAlt: string;
  introHeading: string;
  introParagraphs: string[];
  propertyTypes: LocationPropertyType[];
  servicesIntro: string;
  serviceSlugs: string[];
  services: LocationServiceLink[];
  whyHeading: string;
  whyIntro?: string;
  whyReasons: LocationReason[];
  faqIntro: string;
  faqs: LocationFaqItem[];
  ctaHeading: string;
  ctaBody: string;
  ctaFootnote: string;
  nearbySlugs: string[];
  knowledgeHeading: string;
  knowledgeSummary: string;
  knowledgeFacts: { label: string; value: string }[];
};

const IMG = {
  urban: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1600&q=80",
  rowhome: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1600&q=80",
  loft: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1600&q=80",
  suburban: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&q=80",
  campus: "https://images.unsplash.com/photo-1541339907198-e08756dedf03?w=1600&q=80",
  historic: "https://images.unsplash.com/photo-1449844908449-8829872441e5?w=1600&q=80",
  waterfront: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1600&q=80",
  market: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1600&q=80",
};

const BASE_FACTS = [
  { label: "Business", value: BUSINESS.name },
  { label: "Phone", value: BUSINESS.phoneDisplay },
  { label: "Email", value: BUSINESS.email },
];

function buildServices(slugs: string[]): LocationServiceLink[] {
  return slugs
    .map((slug) => {
      const page = getLandingBySlug(slug);
      if (!page) return null;
      return {
        href: page.path,
        title: page.breadcrumbName,
        summary: page.overviewParagraphs[0].slice(0, 155) + "…",
      };
    })
    .filter((s): s is LocationServiceLink => Boolean(s));
}

function page(
  config: Omit<LocationLandingConfig, "services"> & { serviceSlugs: string[] },
): LocationLandingConfig {
  return { ...config, services: buildServices(config.serviceSlugs) };
}

export const LOCATION_LANDING_PAGES: LocationLandingConfig[] = [
  page({
    slug: "center-city-philadelphia",
    path: "/locations/center-city-philadelphia",
    neighborhoodName: "Center City",
    eyebrow: "CENTER CITY PHILADELPHIA",
    h1: "House Cleaning in Center City Philadelphia",
    breadcrumbName: "Center City Philadelphia",
    meta: {
      title: "Center City Philadelphia Cleaning | Maid & Office",
      description:
        "House & office cleaning in Center City Philadelphia. Condos, high-rises & workspaces. Insured crews, flexible scheduling. Get a free quote from Xirlane Cleaning.",
      keywords: [
        "house cleaning Center City Philadelphia",
        "maid service Center City",
        "office cleaning Center City Philadelphia",
        "condo cleaning Philadelphia downtown",
      ],
      ogImageAlt: "House cleaning in Center City Philadelphia",
    },
    heroImage: IMG.urban,
    heroImageAlt: "Center City Philadelphia skyline and residential cleaning",
    introHeading: "Local cleaning for Center City homes and offices",
    introParagraphs: [
      "Center City combines high-rise living, historic brownstones, and busy commercial corridors within a few walkable blocks. Xirlane Cleaning provides house cleaning, maid service, and office cleaning tailored to downtown schedules—early-morning arrivals, secure building access, and compact floor plans that need efficient, detail-focused crews.",
      "Whether you manage a Rittenhouse-adjacent condo, a Washington Square West rental, or a Market Street office suite, we scope each visit around your layout, finishes, and frequency so you get consistent results without disrupting your workday or building rules.",
    ],
    propertyTypes: [
      {
        title: "High-rise condos & apartments",
        description:
          "Elevator buildings with open layouts, quartz counters, and pet-friendly units that benefit from recurring kitchen and bath maintenance.",
      },
      {
        title: "Historic brownstones & townhomes",
        description:
          "Multi-level homes with original trim, staircases, and mixed flooring that need careful dusting and floor care.",
      },
      {
        title: "Downtown offices & professional suites",
        description:
          "Conference rooms, shared kitchens, and client-facing reception areas cleaned after hours or before opening.",
      },
      {
        title: "Short-term rental units",
        description:
          "Furnished apartments near business travel corridors that need fast turnovers between guests.",
      },
    ],
    servicesIntro:
      "Residents and property managers in Center City book these services most often. Each link opens a dedicated Philadelphia service page with scope, pricing guidance, and FAQs.",
    serviceSlugs: [
      "house-cleaning",
      "apartment-cleaning",
      "office-cleaning",
      "commercial-cleaning",
      "recurring-cleaning",
      "airbnb-cleaning",
    ],
    whyHeading: "Why Center City residents hire professional cleaners",
    whyIntro:
      "Dense downtown living leaves little time for deep maintenance. Professional cleaning keeps small spaces guest-ready and offices presentable.",
    whyReasons: [
      {
        title: "Tight schedules",
        description:
          "Law, finance, and healthcare workers often need cleaning while they are at the office—not during limited evening hours.",
      },
      {
        title: "Building access rules",
        description:
          "Crews familiar with concierge check-in, freight elevators, and quiet-hour policies reduce friction for repeat visits.",
      },
      {
        title: "Small footprints, high use",
        description:
          "Kitchens and baths in condos see daily use; regular service prevents buildup on fixtures and floors.",
      },
      {
        title: "Client-ready workspaces",
        description:
          "Professional suites near City Hall and the Parkway need dependable janitorial schedules before meetings.",
      },
    ],
    faqIntro: "Common questions about booking cleaning in Center City Philadelphia.",
    faqs: [
      {
        id: "cc-parking",
        question: "Do you clean high-rise apartments in Center City?",
        answer:
          "Yes. We regularly service condos and apartments in Center City with recurring maid service or one-time deep cleaning. Share your building name and access instructions when you request a quote on our contact page.",
      },
      {
        id: "cc-office",
        question: "Can you clean offices near City Hall and Market Street?",
        answer:
          "Yes. Our office cleaning and commercial cleaning teams handle suites, coworking spaces, and retail frontage in downtown Philadelphia with after-hours scheduling available.",
      },
      {
        id: "cc-pricing",
        question: "How much does house cleaning cost in Center City?",
        answer:
          "Pricing depends on square footage, bathrooms, pets, and frequency. Center City condos often qualify for streamlined quotes—email us through our contact page with your layout for a custom estimate.",
      },
      {
        id: "cc-same-day",
        question: "How far in advance should I book?",
        answer:
          "We recommend booking as early as possible for preferred time slots. Short-notice apartment cleaning is available when crew capacity allows.",
      },
    ],
    ctaHeading: "Book Center City Cleaning Today",
    ctaBody:
      "Tell us your building, unit size, and preferred schedule. We will confirm coverage and send a free quote for house or office cleaning in Center City.",
    ctaFootnote: "Center City · Rittenhouse · Old City · University City",
    nearbySlugs: ["rittenhouse-square", "old-city", "university-city"],
    knowledgeHeading: "Cleaning Center City Philadelphia",
    knowledgeSummary: `${BUSINESS.name} provides house cleaning, maid service, and office cleaning in Center City Philadelphia for condos, brownstones, and downtown workspaces.`,
    knowledgeFacts: [
      ...BASE_FACTS,
      { label: "Neighborhood", value: "Center City, Philadelphia, PA" },
    ],
  }),
  page({
    slug: "fishtown",
    path: "/locations/fishtown",
    neighborhoodName: "Fishtown",
    eyebrow: "FISHTOWN PHILADELPHIA",
    h1: "House Cleaning in Fishtown Philadelphia",
    breadcrumbName: "Fishtown",
    meta: {
      title: "Fishtown Philadelphia Cleaning | Homes & Rentals",
      description:
        "House & apartment cleaning in Fishtown Philadelphia. Rowhomes, rentals & Airbnb turnovers. Insured local crews. Free cleaning quote from Xirlane.",
      keywords: [
        "house cleaning Fishtown Philadelphia",
        "maid service Fishtown",
        "Airbnb cleaning Fishtown",
        "apartment cleaning Fishtown PA",
      ],
      ogImageAlt: "House cleaning in Fishtown Philadelphia",
    },
    heroImage: IMG.rowhome,
    heroImageAlt: "Fishtown Philadelphia rowhome street",
    introHeading: "Cleaning services built for Fishtown rowhomes and rentals",
    introParagraphs: [
      "Fishtown’s mix of renovated rowhomes, new construction, and rental units means every clean looks different—exposed brick, open kitchens, and finished basements that collect street dust. Xirlane Cleaning offers house cleaning, deep cleaning, and short-term rental turnovers with crews used to narrow streets and residential parking.",
      "From Frankford Avenue rentals to quieter blocks near Penn Treaty Park, we match scope to how you use the home: family recurring plans, post-renovation resets, or guest-ready Airbnb schedules.",
    ],
    propertyTypes: [
      {
        title: "Renovated rowhomes",
        description:
          "Three-story homes with updated kitchens, hardwood floors, and stair-heavy layouts that need systematic dusting.",
      },
      {
        title: "Rental apartments & duplexes",
        description:
          "Units with high tenant turnover where move-out cleaning and refreshes between leases are common.",
      },
      {
        title: "Short-term rentals",
        description:
          "Furnished properties near restaurants and transit that need checklist-based turnovers.",
      },
      {
        title: "Small commercial storefronts",
        description:
          "Cafés, salons, and creative studios along Frankford Ave with evening cleaning windows.",
      },
    ],
    servicesIntro:
      "Fishtown homeowners and hosts typically start with one of these services. Select a page to compare scope and request a quote.",
    serviceSlugs: [
      "house-cleaning",
      "apartment-cleaning",
      "deep-cleaning",
      "airbnb-cleaning",
      "move-out-cleaning",
      "recurring-cleaning",
    ],
    whyHeading: "Why Fishtown homeowners book cleaning help",
    whyReasons: [
      {
        title: "Renovation dust",
        description:
          "Kitchen and bath remodels leave fine dust on brick and shelving—deep cleaning clears it before move-in.",
      },
      {
        title: "Rental turnover volume",
        description:
          "Landlords need reliable move-out cleaning between tenants without managing supplies themselves.",
      },
      {
        title: "Busy restaurant & creative schedules",
        description:
          "Residents working nights and weekends prefer daytime cleaning while they are away.",
      },
      {
        title: "Pet-friendly homes",
        description:
          "Recurring plans control hair and odor in rowhome living areas with consistent floor care.",
      },
    ],
    faqIntro: "Fishtown cleaning questions we hear from renters, owners, and hosts.",
    faqs: [
      {
        id: "ft-rowhome",
        question: "Do you clean three-story rowhomes in Fishtown?",
        answer:
          "Yes. We scope rowhomes by level count, bathrooms, and condition. Many Fishtown clients pair a first deep cleaning with recurring house cleaning afterward.",
      },
      {
        id: "ft-airbnb",
        question: "Do you offer Airbnb turnover cleaning in Fishtown?",
        answer:
          "Yes. Our Airbnb cleaning service includes checklist-based resets between guests. Share your calendar cadence on our contact page for turnover pricing.",
      },
      {
        id: "ft-parking",
        question: "Is street parking an issue for your crews?",
        answer:
          "Our teams service Fishtown regularly and plan arrival windows with you. Mention any permit or loading restrictions when booking.",
      },
      {
        id: "ft-moveout",
        question: "Can you handle move-out cleaning for rentals?",
        answer:
          "Yes. Move-out cleaning covers kitchens, baths, floors, and fixtures for lease-end walkthroughs. See our move-out cleaning page for details.",
      },
    ],
    ctaHeading: "Get Fishtown Cleaning Quote",
    ctaBody:
      "Share your property type and preferred frequency. We will confirm Fishtown coverage and send a free estimate.",
    ctaFootnote: "Fishtown · Northern Liberties · Kensington · Center City",
    nearbySlugs: ["northern-liberties", "center-city-philadelphia", "old-city"],
    knowledgeHeading: "Cleaning Fishtown Philadelphia",
    knowledgeSummary: `${BUSINESS.name} offers house cleaning, deep cleaning, and Airbnb turnovers in Fishtown Philadelphia for rowhomes, rentals, and storefronts.`,
    knowledgeFacts: [
      ...BASE_FACTS,
      { label: "Neighborhood", value: "Fishtown, Philadelphia, PA" },
    ],
  }),
  page({
    slug: "northern-liberties",
    path: "/locations/northern-liberties",
    neighborhoodName: "Northern Liberties",
    eyebrow: "NORTHERN LIBERTIES",
    h1: "Cleaning Services in Northern Liberties",
    breadcrumbName: "Northern Liberties",
    meta: {
      title: "Northern Liberties Cleaning | House & Loft Service",
      description:
        "House & loft cleaning in Northern Liberties Philadelphia. New builds, rentals & deep cleans. Insured crews serving NoLibs. Request a free quote.",
      keywords: [
        "house cleaning Northern Liberties",
        "maid service NoLibs Philadelphia",
        "loft cleaning Northern Liberties",
        "apartment cleaning Northern Liberties",
      ],
      ogImageAlt: "Cleaning service in Northern Liberties Philadelphia",
    },
    heroImage: IMG.loft,
    heroImageAlt: "Northern Liberties Philadelphia loft apartment interior",
    introHeading: "Northern Liberties cleaning for lofts, condos, and rowhomes",
    introParagraphs: [
      "Northern Liberties blends warehouse conversions, new condo developments, and classic Philly rowhomes—often with open floor plans, tall windows, and concrete or polished floors that show dust quickly. Xirlane Cleaning provides apartment cleaning, house cleaning, and post-renovation deep cleans sized for NoLibs layouts.",
      "Whether you live near the Piazza, along North 2nd Street, or on a quieter residential block, we document scope around exposed ductwork, pet-friendly units, and shared building amenities.",
    ],
    propertyTypes: [
      {
        title: "Loft & warehouse conversions",
        description:
          "Open layouts with industrial finishes that need careful dusting on ledges, rails, and large window areas.",
      },
      {
        title: "New-construction condos",
        description:
          "Modern units with quartz surfaces and engineered floors maintained on recurring schedules.",
      },
      {
        title: "Traditional rowhomes",
        description:
          "Older brick homes with updated kitchens requiring move-in or seasonal deep cleaning.",
      },
      {
        title: "Food & beverage workspaces",
        description:
          "Small kitchens and customer areas along commercial corridors cleaned after service hours.",
      },
    ],
    servicesIntro:
      "Northern Liberties clients often combine residential and project-based cleaning. Explore service pages below.",
    serviceSlugs: [
      "apartment-cleaning",
      "house-cleaning",
      "deep-cleaning",
      "post-construction-cleaning",
      "airbnb-cleaning",
      "recurring-cleaning",
    ],
    whyHeading: "Why Northern Liberties residents choose Xirlane",
    whyIntro:
      "NoLibs households skew young-professional and design-forward—cleaning keeps open layouts photo-ready and healthy.",
    whyReasons: [
      {
        title: "Post-build dust",
        description:
          "New developments and gut rehabs need post-construction cleaning before furniture arrives.",
      },
      {
        title: "Entertaining at home",
        description:
          "Open kitchens and living areas get heavy use—recurring service maintains guest-ready spaces.",
      },
      {
        title: "Rental investment properties",
        description:
          "Owners with multiple units want one vendor for deep cleaning and tenant turnovers.",
      },
      {
        title: "Work-from-home setups",
        description:
          "Desk and living zones in the same room benefit from scheduled dust and floor care.",
      },
    ],
    faqIntro: "Northern Liberties booking and coverage FAQ.",
    faqs: [
      {
        id: "nolib-loft",
        question: "Do you clean loft-style apartments in Northern Liberties?",
        answer:
          "Yes. We adjust time and scope for open floor plans, tall windows, and concrete or hardwood floors common in NoLibs conversions.",
      },
      {
        id: "nolib-reno",
        question: "Can you remove construction dust after a renovation?",
        answer:
          "Yes. Post-construction cleaning addresses fine dust on surfaces, fixtures, and floors. Pair it with move-in cleaning when you are ready to occupy.",
      },
      {
        id: "nolib-recurring",
        question: "Do you offer weekly or biweekly cleaning?",
        answer:
          "Yes. Recurring cleaning plans are available with weekly, biweekly, or monthly frequency through our recurring cleaning service.",
      },
      {
        id: "nolib-area",
        question: "Do you also serve Fishtown and Old City?",
        answer:
          "Yes. We clean throughout Greater Philadelphia including nearby neighborhoods—see our Fishtown and Old City location pages.",
      },
    ],
    ctaHeading: "Schedule Northern Liberties Cleaning",
    ctaBody:
      "Describe your unit type and address. We will confirm NoLibs availability and provide a free quote.",
    ctaFootnote: "Northern Liberties · Fishtown · Old City · Center City",
    nearbySlugs: ["fishtown", "old-city", "center-city-philadelphia"],
    knowledgeHeading: "Northern Liberties cleaning",
    knowledgeSummary: `${BUSINESS.name} provides apartment cleaning, house cleaning, and post-construction cleaning in Northern Liberties Philadelphia.`,
    knowledgeFacts: [
      ...BASE_FACTS,
      { label: "Neighborhood", value: "Northern Liberties, Philadelphia, PA" },
    ],
  }),
  page({
    slug: "south-philadelphia",
    path: "/locations/south-philadelphia",
    neighborhoodName: "South Philadelphia",
    eyebrow: "SOUTH PHILADELPHIA",
    h1: "House Cleaning in South Philadelphia",
    breadcrumbName: "South Philadelphia",
    meta: {
      title: "South Philadelphia Cleaning | Rowhomes & Apartments",
      description:
        "House cleaning in South Philadelphia near Passyunk & Italian Market. Rowhomes, apartments & family homes. Insured maid service. Free quote.",
      keywords: [
        "house cleaning South Philadelphia",
        "maid service South Philly",
        "rowhome cleaning Philadelphia",
        "cleaning service Passyunk",
      ],
      ogImageAlt: "House cleaning in South Philadelphia rowhome",
    },
    heroImage: IMG.market,
    heroImageAlt: "South Philadelphia residential street near Italian Market",
    introHeading: "South Philly cleaning for rowhomes and family homes",
    introParagraphs: [
      "South Philadelphia is known for tight-knit blocks, well-used kitchens, and rowhomes that see generations of family traffic. Xirlane Cleaning delivers house cleaning and deep cleaning with respect for busy households—clear communication, reliable arrival windows, and scope that covers stairs, finished basements, and high-traffic entries.",
      "From Passyunk Square to Pennsport and the Italian Market corridor, we help owners and renters maintain healthier homes without sacrificing weekend time.",
    ],
    propertyTypes: [
      {
        title: "Classic brick rowhomes",
        description:
          "Two- and three-story homes with galley kitchens, carpeted stairs, and living rooms that need regular dust and floor care.",
      },
      {
        title: "Multi-generational homes",
        description:
          "Larger occupied houses where recurring cleaning reduces shared chore load for families.",
      },
      {
        title: "Rental units & in-law suites",
        description:
          "Basement apartments and duplexes that need move-out or move-in cleaning between tenants.",
      },
      {
        title: "Small neighborhood businesses",
        description:
          "Corner stores and salons requesting commercial cleaning on off-peak hours.",
      },
    ],
    servicesIntro:
      "South Philadelphia families and landlords most often request these cleaning services.",
    serviceSlugs: [
      "house-cleaning",
      "deep-cleaning",
      "move-out-cleaning",
      "move-in-cleaning",
      "recurring-cleaning",
      "apartment-cleaning",
    ],
    whyHeading: "Why South Philly residents invest in maid service",
    whyReasons: [
      {
        title: "High-traffic kitchens",
        description:
          "Home cooking is central to South Philly life—regular cleaning keeps grease and surfaces manageable.",
      },
      {
        title: "Stair-heavy layouts",
        description:
          "Professional crews tackle multi-floor dust and carpeting more thoroughly than quick weekly tidying.",
      },
      {
        title: "Aging family members",
        description:
          "Adult children book cleaning for parents who want to stay in familiar rowhomes longer.",
      },
      {
        title: "Rental turnover",
        description:
          "Landlords near the Italian Market need dependable move-out cleaning between leases.",
      },
    ],
    faqIntro: "South Philadelphia house cleaning FAQ.",
    faqs: [
      {
        id: "sp-row",
        question: "Do you clean South Philly rowhomes with basements?",
        answer:
          "Yes. Include basement finished space and stair count in your quote request so we allocate the right crew and time.",
      },
      {
        id: "sp-deep",
        question: "When should I book a deep cleaning instead of standard service?",
        answer:
          "Choose deep cleaning for first visits, seasonal resets, or after events. Standard house cleaning maintains homes on a recurring basis afterward.",
      },
      {
        id: "sp-move",
        question: "Do you offer move-out cleaning near Passyunk?",
        answer:
          "Yes. Move-out cleaning prepares rentals and sold homes for inspection. We also offer move-in cleaning before you unpack.",
      },
      {
        id: "sp-supplies",
        question: "Do I need to provide cleaning supplies?",
        answer:
          "We bring professional-grade supplies and equipment. Mention eco-friendly preferences when you contact us.",
      },
    ],
    ctaHeading: "Book South Philadelphia Cleaning",
    ctaBody:
      "Share your rowhome layout and preferred visit frequency. We will send a free South Philly cleaning quote.",
    ctaFootnote: "South Philadelphia · Passyunk · Pennsport · Center City",
    nearbySlugs: ["center-city-philadelphia", "rittenhouse-square", "university-city"],
    knowledgeHeading: "South Philadelphia house cleaning",
    knowledgeSummary: `${BUSINESS.name} provides house cleaning, deep cleaning, and move-out cleaning in South Philadelphia for rowhomes and family homes.`,
    knowledgeFacts: [
      ...BASE_FACTS,
      { label: "Neighborhood", value: "South Philadelphia, PA" },
    ],
  }),
  page({
    slug: "main-line",
    path: "/locations/main-line",
    neighborhoodName: "the Main Line",
    eyebrow: "MAIN LINE PA",
    h1: "House Cleaning on the Main Line",
    breadcrumbName: "Main Line",
    meta: {
      title: "Main Line House Cleaning | Ardmore, Bryn Mawr & More",
      description:
        "House cleaning on the Philadelphia Main Line. Suburban homes, estates & townhomes in Montgomery & Delaware counties. Insured crews. Free quote.",
      keywords: [
        "house cleaning Main Line PA",
        "maid service Main Line",
        "cleaning service Ardmore",
        "Bryn Mawr house cleaning",
      ],
      ogImageAlt: "House cleaning on the Main Line suburbs of Philadelphia",
    },
    heroImage: IMG.suburban,
    heroImageAlt: "Main Line suburban home exterior",
    introHeading: "Suburban house cleaning for Main Line homes",
    introParagraphs: [
      "The Main Line spans Montgomery and Delaware County communities such as Ardmore, Bryn Mawr, Wayne, and Villanova—where larger floor plans, mudrooms, and formal living areas require more time and consistent standards than a typical city condo. Xirlane Cleaning provides house cleaning, deep cleaning, and recurring maid service with crews routed from Greater Philadelphia.",
      "We scope suburban homes around square footage, number of baths, pets, and specialty surfaces so quotes reflect the true workload—not a one-size downtown rate.",
    ],
    propertyTypes: [
      {
        title: "Colonial & traditional suburban homes",
        description:
          "Multi-bedroom houses with finished basements, mudrooms, and carpeted stairs on recurring schedules.",
      },
      {
        title: "Townhomes & twin homes",
        description:
          "Compact suburban layouts along the rail line needing efficient weekly or biweekly service.",
      },
      {
        title: "Estate-style properties",
        description:
          "Larger homes requiring deep cleaning for seasonal resets or pre-event preparation.",
      },
      {
        title: "Home offices & study areas",
        description:
          "Remote-work spaces dusted and vacuumed as part of whole-home maintenance.",
      },
    ],
    servicesIntro:
      "Main Line homeowners typically book these services for larger suburban properties.",
    serviceSlugs: [
      "house-cleaning",
      "deep-cleaning",
      "recurring-cleaning",
      "move-in-cleaning",
      "move-out-cleaning",
      "office-cleaning",
    ],
    whyHeading: "Why Main Line households hire cleaning professionals",
    whyIntro:
      "Suburban homes take longer to maintain than city apartments—professional service protects flooring investments and frees family time.",
    whyReasons: [
      {
        title: "Larger square footage",
        description:
          "Whole-home cleaning is labor-intensive; crews bring teams and supplies sized to the job.",
      },
      {
        title: "Busy commuter schedules",
        description:
          "Families want homes reset during the workday before everyone returns from school and transit.",
      },
      {
        title: "Entertaining & holidays",
        description:
          "Seasonal deep cleaning before gatherings keeps formal rooms and kitchens ready.",
      },
      {
        title: "Move-related transitions",
        description:
          "Buying or selling on the Main Line often includes move-in or move-out cleaning timelines.",
      },
    ],
    faqIntro: "Main Line cleaning service questions.",
    faqs: [
      {
        id: "ml-counties",
        question: "Do you serve Montgomery and Delaware County on the Main Line?",
        answer:
          "Yes. We serve the Main Line as part of our Greater Philadelphia coverage including Montgomery and Delaware counties. Confirm your address on our contact page.",
      },
      {
        id: "ml-size",
        question: "How do you price larger suburban homes?",
        answer:
          "Quotes reflect square footage, bathrooms, basement finished space, pets, and frequency. Deep cleaning may be recommended before starting recurring house cleaning.",
      },
      {
        id: "ml-supplies",
        question: "Can crews use my preferred products?",
        answer:
          "We arrive with professional supplies and can accommodate eco-friendly requests when you book.",
      },
      {
        id: "ml-office",
        question: "Do you clean home offices on the Main Line?",
        answer:
          "Yes. House cleaning includes desk areas; dedicated office cleaning is available for separate workspaces or small business suites.",
      },
    ],
    ctaHeading: "Request Main Line House Cleaning",
    ctaBody:
      "Send your town, square footage, and preferred frequency. We will provide a Main Line cleaning quote.",
    ctaFootnote: "Montgomery County · Delaware County · Philadelphia",
    nearbySlugs: ["rittenhouse-square", "center-city-philadelphia", "university-city"],
    knowledgeHeading: "Main Line house cleaning",
    knowledgeSummary: `${BUSINESS.name} provides house cleaning and deep cleaning on the Philadelphia Main Line in Montgomery and Delaware counties.`,
    knowledgeFacts: [
      ...BASE_FACTS,
      { label: "Region", value: "Main Line (Montgomery & Delaware County, PA)" },
    ],
  }),
  page({
    slug: "rittenhouse-square",
    path: "/locations/rittenhouse-square",
    neighborhoodName: "Rittenhouse Square",
    eyebrow: "RITTENHOUSE SQUARE",
    h1: "Cleaning Services in Rittenhouse Square",
    breadcrumbName: "Rittenhouse Square",
    meta: {
      title: "Rittenhouse Square Cleaning | Luxury Condos & Homes",
      description:
        "Apartment & house cleaning in Rittenhouse Square Philadelphia. Luxury condos, rentals & deep cleans. Discreet insured crews. Free quote.",
      keywords: [
        "house cleaning Rittenhouse Square",
        "maid service Rittenhouse Philadelphia",
        "condo cleaning Rittenhouse",
        "apartment cleaning Rittenhouse Square",
      ],
      ogImageAlt: "Cleaning service near Rittenhouse Square Philadelphia",
    },
    heroImage: IMG.urban,
    heroImageAlt: "Rittenhouse Square Philadelphia residential area",
    introHeading: "Rittenhouse Square cleaning for luxury condos and residences",
    introParagraphs: [
      "Rittenhouse Square sits among Philadelphia’s most requested addresses—doorman buildings, boutique condos, and well-appointed townhomes with high-end finishes that need careful product selection and discreet service. Xirlane Cleaning provides apartment cleaning, recurring maid service, and deep cleaning with attention to marble, hardwood, and glass-heavy interiors.",
      "We coordinate with building staff, respect quiet hours, and tailor checklists for residents who travel frequently or maintain second homes.",
    ],
    propertyTypes: [
      {
        title: "Doorman high-rises",
        description:
          "Full-service buildings with strict access protocols and open-plan units facing the square.",
      },
      {
        title: "Boutique condos & flats",
        description:
          "Smaller luxury units with premium appliances requiring non-abrasive cleaning methods.",
      },
      {
        title: "Townhomes near the square",
        description:
          "Multi-level residences with formal dining rooms and high-touch entertaining spaces.",
      },
      {
        title: "Furnished corporate rentals",
        description:
          "Short stays needing hotel-standard turnovers between executives or relocating staff.",
      },
    ],
    servicesIntro:
      "Rittenhouse residents typically request detail-oriented residential services listed below.",
    serviceSlugs: [
      "apartment-cleaning",
      "house-cleaning",
      "deep-cleaning",
      "recurring-cleaning",
      "airbnb-cleaning",
      "commercial-cleaning",
    ],
    whyHeading: "Why Rittenhouse residents use professional cleaning",
    whyReasons: [
      {
        title: "High-end finishes",
        description:
          "Specialty surfaces need trained crews—not generic products that etch stone or wood.",
      },
      {
        title: "Travel schedules",
        description:
          "Frequent travelers want apartments reset before return without coordinating supplies.",
      },
      {
        title: "Entertaining standards",
        description:
          "Pre-event deep cleaning keeps guest-facing rooms polished on short notice.",
      },
      {
        title: "Building compliance",
        description:
          "Experienced teams reduce back-and-forth with concierge and COI requirements.",
      },
    ],
    faqIntro: "Rittenhouse Square cleaning FAQ.",
    faqs: [
      {
        id: "rit-building",
        question: "Can you work with doorman buildings near Rittenhouse Square?",
        answer:
          "Yes. Provide building name, COI requirements, and preferred service windows when requesting a quote on our contact page.",
      },
      {
        id: "rit-deep",
        question: "Do you offer deep cleaning for luxury apartments?",
        answer:
          "Yes. Deep cleaning covers detailed kitchens, baths, baseboards, and floors—ideal before starting recurring maid service.",
      },
      {
        id: "rit-frequency",
        question: "What recurring schedules are available?",
        answer:
          "Weekly, biweekly, and monthly recurring cleaning plans are available through our recurring cleaning service.",
      },
      {
        id: "rit-center",
        question: "Is Rittenhouse part of your Center City coverage?",
        answer:
          "Yes. See our Center City Philadelphia location page for broader downtown coverage details.",
      },
    ],
    ctaHeading: "Book Rittenhouse Square Cleaning",
    ctaBody:
      "Share your building, unit size, and finish types. We will confirm access requirements and send a quote.",
    ctaFootnote: "Rittenhouse · Center City · University City",
    nearbySlugs: ["center-city-philadelphia", "university-city", "south-philadelphia"],
    knowledgeHeading: "Rittenhouse Square cleaning",
    knowledgeSummary: `${BUSINESS.name} provides apartment cleaning and maid service in Rittenhouse Square Philadelphia for luxury condos and residences.`,
    knowledgeFacts: [
      ...BASE_FACTS,
      { label: "Neighborhood", value: "Rittenhouse Square, Philadelphia, PA" },
    ],
  }),
  page({
    slug: "old-city",
    path: "/locations/old-city",
    neighborhoodName: "Old City",
    eyebrow: "OLD CITY PHILADELPHIA",
    h1: "House Cleaning in Old City Philadelphia",
    breadcrumbName: "Old City",
    meta: {
      title: "Old City Philadelphia Cleaning | Historic Homes",
      description:
        "Cleaning in Old City Philadelphia for historic homes, lofts & rentals. Post-renovation & Airbnb service. Insured local crews. Free quote.",
      keywords: [
        "house cleaning Old City Philadelphia",
        "maid service Old City",
        "historic home cleaning Philadelphia",
        "Airbnb cleaning Old City",
      ],
      ogImageAlt: "Old City Philadelphia historic street cleaning service area",
    },
    heroImage: IMG.historic,
    heroImageAlt: "Old City Philadelphia historic cobblestone street",
    introHeading: "Old City cleaning for historic homes and modern lofts",
    introParagraphs: [
      "Old City combines Colonial-era architecture, converted warehouses, and busy tourist corridors—properties with uneven floors, exposed brick, and renovation dust that standard cleaning routines miss. Xirlane Cleaning offers house cleaning, post-construction cleaning, and short-term rental turnovers suited to historic details and modern open layouts alike.",
      "Residents near Head House Square, Elfreth’s Alley, and Delaware Avenue lofts rely on crews who protect original wood, respect fragile plaster, and navigate weekend foot traffic when scheduling arrivals.",
    ],
    propertyTypes: [
      {
        title: "Historic rowhomes & trinities",
        description:
          "Compact vertical homes with tight stairs and original materials needing gentle dusting.",
      },
      {
        title: "Warehouse & loft conversions",
        description:
          "Open units with exposed brick, high ceilings, and large window walls.",
      },
      {
        title: "Short-term rentals",
        description:
          "Old City guest traffic drives demand for fast Airbnb cleaning between weekend stays.",
      },
      {
        title: "Gallery & studio spaces",
        description:
          "Creative workspaces with dust-sensitive surfaces cleaned after hours.",
      },
    ],
    servicesIntro:
      "Old City property owners and hosts commonly book these specialized services.",
    serviceSlugs: [
      "house-cleaning",
      "apartment-cleaning",
      "post-construction-cleaning",
      "airbnb-cleaning",
      "deep-cleaning",
      "commercial-cleaning",
    ],
    whyHeading: "Why Old City owners hire professional cleaners",
    whyReasons: [
      {
        title: "Renovation in historic shells",
        description:
          "Post-construction cleaning removes dust from brick and millwork before move-in.",
      },
      {
        title: "Weekend rental turnover",
        description:
          "Tourism demand means tight cleaning windows between guest check-out and check-in.",
      },
      {
        title: "Sensitive materials",
        description:
          "Older homes need careful product choices on wood, tile, and painted plaster.",
      },
      {
        title: "Dual-purpose live/work units",
        description:
          "Residents blending studio and living space need scheduled resets to stay organized.",
      },
    ],
    faqIntro: "Old City Philadelphia cleaning questions.",
    faqs: [
      {
        id: "oc-historic",
        question: "Do you clean historic rowhomes in Old City?",
        answer:
          "Yes. Note original materials and any fragile areas when booking so crews use appropriate methods. Deep cleaning is often recommended for first visits.",
      },
      {
        id: "oc-airbnb",
        question: "How fast can you turn over an Old City Airbnb?",
        answer:
          "Turnover timing depends on calendar and crew availability. Share check-out and check-in times on our contact page for Airbnb cleaning quotes.",
      },
      {
        id: "oc-dust",
        question: "Can you handle post-renovation dust in Old City?",
        answer:
          "Yes. Post-construction cleaning addresses fine dust on surfaces, fixtures, and floors after kitchen or bath remodels in historic buildings.",
      },
      {
        id: "oc-nolib",
        question: "Do you also clean Northern Liberties and Fishtown?",
        answer:
          "Yes. We serve adjacent neighborhoods—see our Northern Liberties and Fishtown location pages for nearby coverage.",
      },
    ],
    ctaHeading: "Schedule Old City Cleaning",
    ctaBody:
      "Tell us about your property age, layout, and booking goals. We will send a customized Old City quote.",
    ctaFootnote: "Old City · Northern Liberties · Center City",
    nearbySlugs: ["northern-liberties", "fishtown", "center-city-philadelphia"],
    knowledgeHeading: "Old City Philadelphia cleaning",
    knowledgeSummary: `${BUSINESS.name} provides house cleaning, post-construction cleaning, and Airbnb turnovers in Old City Philadelphia.`,
    knowledgeFacts: [
      ...BASE_FACTS,
      { label: "Neighborhood", value: "Old City, Philadelphia, PA" },
    ],
  }),
  page({
    slug: "university-city",
    path: "/locations/university-city",
    neighborhoodName: "University City",
    eyebrow: "UNIVERSITY CITY",
    h1: "Cleaning Services in University City Philadelphia",
    breadcrumbName: "University City",
    meta: {
      title: "University City Cleaning | Apartments & Rentals",
      description:
        "Apartment & house cleaning in University City Philadelphia near Penn & Drexel. Student rentals, move-out & recurring service. Free quote.",
      keywords: [
        "house cleaning University City Philadelphia",
        "apartment cleaning University City",
        "move out cleaning University City",
        "maid service near Penn",
      ],
      ogImageAlt: "University City Philadelphia apartment cleaning",
    },
    heroImage: IMG.campus,
    heroImageAlt: "University City Philadelphia near campus housing",
    introHeading: "University City cleaning for apartments and rentals",
    introParagraphs: [
      "University City centers on Penn, Drexel, and CHOP—neighborhoods filled with student apartments, faculty housing, and high-turnover rentals that need move-out cleaning, summer resets, and recurring maintenance during the academic year. Xirlane Cleaning provides apartment cleaning, move-out cleaning, and house cleaning sized for smaller units and shared housing.",
      "From Spruce Street walk-ups to newer high-rises along the Schuylkill, we help landlords, students, and young professionals keep units inspection-ready without spending move-out weekend on scrubbing.",
    ],
    propertyTypes: [
      {
        title: "Student apartments & shared housing",
        description:
          "Multi-bedroom rentals with heavy kitchen and bath use during the school year.",
      },
      {
        title: "Campus-adjacent condos",
        description:
          "Owner-occupied units needing biweekly maid service while commuting to hospital or university work.",
      },
      {
        title: "Faculty & staff homes",
        description:
          "Rowhomes and twins west of campus with family schedules and pets.",
      },
      {
        title: "Medical district rentals",
        description:
          "Furnished units for rotating fellows and travel nurses requiring short-term turnover cleaning.",
      },
    ],
    servicesIntro:
      "University City renters, landlords, and residents most often book these services.",
    serviceSlugs: [
      "apartment-cleaning",
      "move-out-cleaning",
      "move-in-cleaning",
      "house-cleaning",
      "recurring-cleaning",
      "deep-cleaning",
    ],
    whyHeading: "Why University City residents book cleaning help",
    whyReasons: [
      {
        title: "Lease-end turnover",
        description:
          "Students and landlords need move-out cleaning before security deposit walkthroughs.",
      },
      {
        title: "Summer sublets",
        description:
          "Units sit empty briefly—move-in cleaning refreshes them before the next term.",
      },
      {
        title: "Limited free time",
        description:
          "Graduate students and hospital staff prefer recurring service during clinical or research hours.",
      },
      {
        title: "Shared chore conflict",
        description:
          "Roommates split rent but not always cleaning—professional service ends disputes.",
      },
    ],
    faqIntro: "University City cleaning and move-out FAQ.",
    faqs: [
      {
        id: "uc-moveout",
        question: "Do you offer move-out cleaning near Penn and Drexel?",
        answer:
          "Yes. Move-out cleaning is popular in University City before lease end. Book early for May turnover season on our contact page.",
      },
      {
        id: "uc-shared",
        question: "Can you clean shared student apartments?",
        answer:
          "Yes. Include bedroom count, bathrooms, and common areas when requesting apartment cleaning quotes.",
      },
      {
        id: "uc-summer",
        question: "Do you provide move-in cleaning before fall move-in?",
        answer:
          "Yes. Move-in cleaning sanitizes kitchens and baths before furniture arrives—ideal for sublets and new leases.",
      },
      {
        id: "uc-rittenhouse",
        question: "Do you also serve Center City and Rittenhouse?",
        answer:
          "Yes. We clean across West Philadelphia and downtown—see our Center City and Rittenhouse Square location pages.",
      },
    ],
    ctaHeading: "Book University City Cleaning",
    ctaBody:
      "Share your address, unit type, and move or recurring dates. We will send a University City quote.",
    ctaFootnote: "University City · Center City · Main Line",
    nearbySlugs: ["center-city-philadelphia", "rittenhouse-square", "main-line"],
    knowledgeHeading: "University City cleaning",
    knowledgeSummary: `${BUSINESS.name} provides apartment cleaning and move-out cleaning in University City Philadelphia near Penn and Drexel.`,
    knowledgeFacts: [
      ...BASE_FACTS,
      { label: "Neighborhood", value: "University City, Philadelphia, PA" },
    ],
  }),
];

const BY_SLUG = Object.fromEntries(
  LOCATION_LANDING_PAGES.map((loc) => [loc.slug, loc]),
) as Record<string, LocationLandingConfig>;

const BY_PATH = Object.fromEntries(
  LOCATION_LANDING_PAGES.map((loc) => [loc.path, loc]),
) as Record<string, LocationLandingConfig>;

export function getAllLocationSlugs(): string[] {
  return LOCATION_LANDING_PAGES.map((loc) => loc.slug);
}

export function getLocationBySlug(slug: string): LocationLandingConfig | undefined {
  return BY_SLUG[slug];
}

export function getLocationByPath(path: string): LocationLandingConfig | undefined {
  return BY_PATH[path];
}

export function getNearbyLocationLinks(slugs: string[]) {
  return slugs
    .map((slug) => BY_SLUG[slug])
    .filter((loc): loc is LocationLandingConfig => Boolean(loc))
    .map((loc) => ({ href: loc.path, label: loc.neighborhoodName }));
}

export const LOCATION_NAV_LINKS = LOCATION_LANDING_PAGES.map((loc) => ({
  href: loc.path,
  label: loc.neighborhoodName,
}));
