import type { BlogPost } from "./blog-types";

const IMG = {
  deep: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200&q=80",
  move: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&q=80",
  apt: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&q=80",
  office: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80",
  local: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&q=80",
  tips: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a55?w=1200&q=80",
  airbnb: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&q=80",
};

export const BLOG_POSTS_DATA: BlogPost[] = [
  {
    slug: "when-to-book-deep-cleaning-philadelphia",
    title: "When to Book Deep Cleaning in Philadelphia",
    description:
      "Learn when a deep cleaning makes sense for Philadelphia homes—first visits, seasonal resets, move-ins, and post-renovation dust. Scope and timing tips from Xirlane Cleaning.",
    excerpt:
      "Not every visit needs a top-to-bottom reset. Here is how Philadelphia homeowners time deep cleaning before recurring maid service or a move.",
    publishedAt: "2025-03-10",
    categorySlug: "deep-cleaning",
    featuredImage: IMG.deep,
    featuredImageAlt: "Deep cleaning kitchen surfaces in a Philadelphia home",
    keywords: [
      "deep cleaning Philadelphia",
      "when to deep clean house",
      "spring cleaning Philadelphia",
      "first maid service deep clean",
    ],
    sections: [
      {
        id: "what-counts-as-deep",
        heading: "What counts as deep cleaning?",
        level: 2,
        paragraphs: [
          "Deep cleaning goes beyond weekly maintenance. In Philadelphia rowhomes and condos, it usually includes detailed kitchen and bathroom work, baseboards, interior glass, high-touch disinfection, and floor care under lightweight furniture.",
          "Standard house cleaning maintains a baseline; deep cleaning establishes it. Many clients book a deep clean before starting recurring maid service so the first maintenance visit is efficient.",
        ],
      },
      {
        id: "first-visit",
        heading: "Before your first recurring service",
        level: 2,
        paragraphs: [
          "If a home has not had professional cleaning in months, a deep clean prevents crews from using your first maintenance appointment on buildup. This is common in Fishtown renovations and Center City rentals between tenants.",
          "Tell your provider about pets, cluttered surfaces, and any rooms that are off-limits so the quote reflects real workload.",
        ],
      },
      {
        id: "seasonal-timing",
        heading: "Seasonal resets in Philly",
        level: 2,
        paragraphs: [
          "Spring pollen and winter salt tracked into mudrooms drive demand for seasonal deep cleaning across Montgomery and Delaware counties as well as the city.",
          "Scheduling before hosting holidays or after long travel stretches keeps formal rooms and kitchens guest-ready without daily effort.",
        ],
      },
      {
        id: "after-renovation",
        heading: "After renovations and move-ins",
        level: 2,
        paragraphs: [
          "Post-construction dust settles on horizontal surfaces and inside cabinets even when contractors sweep. Pair post-construction cleaning with move-in cleaning when you are unpacking in Old City or Northern Liberties lofts.",
          "Fine dust on hardwood and exposed brick needs methodical wiping—not just a quick vacuum pass.",
        ],
      },
    ],
    faqs: [
      {
        id: "dc-how-long",
        question: "How long does a deep clean take in Philadelphia?",
        answer:
          "Timing depends on square footage, bathrooms, and condition. Most city homes need a longer first visit than recurring maintenance. Request a walkthrough or share photos through our contact page for an accurate quote.",
      },
      {
        id: "dc-vs-regular",
        question: "Should I book deep cleaning or regular house cleaning?",
        answer:
          "Choose deep cleaning for first visits, seasonal resets, or heavy buildup. Use house cleaning for ongoing weekly or biweekly maintenance after the baseline is set.",
      },
    ],
    relatedPostSlugs: ["move-out-cleaning-checklist-philadelphia", "eco-friendly-cleaning-products-safe-homes"],
    relatedServicePaths: ["/services/deep-cleaning", "/services/house-cleaning", "/services/post-construction-cleaning"],
    relatedLocationPaths: ["/locations/center-city-philadelphia", "/locations/fishtown"],
    internalLinks: [
      { href: "/services/deep-cleaning", label: "Deep cleaning in Philadelphia" },
      { href: "/services/recurring-cleaning", label: "Recurring cleaning plans" },
      { href: "/contact", label: "Free quote" },
    ],
  },
  {
    slug: "move-out-cleaning-checklist-philadelphia",
    title: "Move-Out Cleaning Checklist for Philadelphia Renters",
    description:
      "A room-by-room move-out cleaning checklist for Philadelphia apartments and rowhomes. Landlord walkthrough tips and when to hire professionals.",
    excerpt:
      "Use this Philadelphia-focused checklist before keys change hands—kitchens, baths, floors, and fixtures landlords inspect first.",
    publishedAt: "2025-03-05",
    categorySlug: "move-out-cleaning",
    featuredImage: IMG.move,
    featuredImageAlt: "Empty Philadelphia apartment ready for move-out cleaning",
    keywords: [
      "move out cleaning checklist Philadelphia",
      "end of lease cleaning Philadelphia",
      "apartment move out cleaning",
    ],
    sections: [
      {
        id: "kitchen-moveout",
        heading: "Kitchen",
        level: 2,
        paragraphs: [
          "Clean appliance exteriors, stovetop grease, and inside the oven if your lease requires it. Wipe cabinet faces, backsplash, and sink; remove trash and recycling.",
          "In studio units near University City, kitchen buildup is a common deposit deduction—allocate time here first.",
        ],
      },
      {
        id: "bathrooms",
        heading: "Bathrooms",
        level: 2,
        paragraphs: [
          "Scrub toilets, tubs, showers, and vanities. Polish mirrors and fixtures. Mop floors and wipe baseboards.",
          "Replace shower liners if mildew will not come off with standard products.",
        ],
      },
      {
        id: "living-bedrooms",
        heading: "Living areas and bedrooms",
        level: 2,
        paragraphs: [
          "Vacuum carpets and mop hard floors. Dust window sills and closet shelves. Remove nails or fill small holes only if your lease specifies.",
          "South Philadelphia rowhomes often have carpeted stairs—vacuum each tread and edge.",
        ],
      },
      {
        id: "hire-pros",
        heading: "When to hire move-out cleaning",
        level: 2,
        paragraphs: [
          "Professional move-out cleaning makes sense when you are on a tight timeline, juggling a new lease, or the unit needs more than a quick wipe-down after years of tenancy.",
          "Crews bring supplies and systems for empty homes, which speeds up inspection-ready results.",
        ],
      },
    ],
    faqs: [
      {
        id: "mo-cost",
        question: "How much is move-out cleaning in Philadelphia?",
        answer:
          "Pricing reflects bedrooms, bathrooms, and condition. Empty apartments typically cost less than furnished heavy-use units. Contact Xirlane Cleaning with your move date for a custom quote.",
      },
      {
        id: "mo-deposit",
        question: "Will professional cleaning help my security deposit?",
        answer:
          "Cleaning improves walkthrough outcomes when the unit truly meets lease standards. Document condition with photos before and after service.",
      },
    ],
    relatedPostSlugs: ["apartment-cleaning-schedule-philly-renters", "when-to-book-deep-cleaning-philadelphia"],
    relatedServicePaths: ["/services/move-out-cleaning", "/services/move-in-cleaning", "/services/apartment-cleaning"],
    relatedLocationPaths: ["/locations/university-city", "/locations/south-philadelphia"],
    internalLinks: [
      { href: "/services/move-out-cleaning", label: "Move-out cleaning" },
      { href: "/services/apartment-cleaning", label: "Apartment cleaning" },
      { href: "/locations/university-city", label: "University City cleaning" },
    ],
  },
  {
    slug: "apartment-cleaning-schedule-philly-renters",
    title: "Apartment Cleaning Schedule for Philly Renters",
    description:
      "How often to clean a Philadelphia apartment—weekly, biweekly, or monthly—and what to include in each visit for studios and multi-bedroom units.",
    excerpt:
      "Match cleaning frequency to how you use your Philly apartment, building access, and roommate dynamics.",
    publishedAt: "2025-02-28",
    categorySlug: "apartment-cleaning",
    featuredImage: IMG.apt,
    featuredImageAlt: "Clean Philadelphia apartment living room",
    keywords: [
      "apartment cleaning schedule Philadelphia",
      "how often clean apartment",
      "maid service apartment Philadelphia",
    ],
    sections: [
      {
        id: "weekly-vs-biweekly",
        heading: "Weekly vs biweekly maintenance",
        level: 2,
        paragraphs: [
          "Cooking daily and working from home pushes many Center City renters toward weekly kitchen and bath maintenance. Biweekly service fits lighter-use one-bedroom units with good daily tidying habits.",
          "Monthly cleaning works only when you actively maintain kitchens and bathrooms between visits.",
        ],
      },
      {
        id: "roommate-split",
        heading: "Roommates and shared chores",
        level: 2,
        paragraphs: [
          "Shared apartments near campus benefit from a written chore split or a single professional schedule everyone funds. Professional cleaning reduces conflict when schedules differ.",
          "Include common areas, kitchen, and baths in scope—not just private bedrooms.",
        ],
      },
      {
        id: "building-access",
        heading: "Building access and timing",
        level: 2,
        paragraphs: [
          "High-rises may restrict service hours or require COI paperwork. Walk-ups need clear entry instructions. Share elevator reservations and parking notes when booking.",
          "Midday appointments while you are at work are popular in Rittenhouse and University City buildings.",
        ],
      },
    ],
    faqs: [
      {
        id: "apt-studio",
        question: "Is apartment cleaning priced differently than houses?",
        answer:
          "Yes. Studios and one-bath units often have streamlined quotes compared to multi-floor rowhomes. Share exact bedroom and bath counts when requesting a quote.",
      },
    ],
    relatedPostSlugs: ["move-out-cleaning-checklist-philadelphia", "airbnb-turnover-cleaning-philadelphia-hosts"],
    relatedServicePaths: ["/services/apartment-cleaning", "/services/recurring-cleaning", "/services/house-cleaning"],
    relatedLocationPaths: ["/locations/rittenhouse-square", "/locations/center-city-philadelphia"],
    internalLinks: [
      { href: "/services/apartment-cleaning", label: "Apartment cleaning Philadelphia" },
      { href: "/services/recurring-cleaning", label: "Recurring cleaning" },
    ],
  },
  {
    slug: "office-cleaning-frequency-philadelphia",
    title: "How Often Should Philadelphia Offices Be Cleaned?",
    description:
      "Office and commercial cleaning frequency guide for Philadelphia workplaces—daily, weekly, and after-hours janitorial planning.",
    excerpt:
      "Foot traffic, industry, and shared kitchens determine how often Philadelphia offices need professional janitorial service.",
    publishedAt: "2025-02-20",
    categorySlug: "commercial-cleaning",
    featuredImage: IMG.office,
    featuredImageAlt: "Commercial office cleaning in Philadelphia",
    keywords: [
      "office cleaning frequency Philadelphia",
      "commercial cleaning schedule",
      "janitorial service Philadelphia",
    ],
    sections: [
      {
        id: "daily-offices",
        heading: "Daily cleaning scenarios",
        level: 2,
        paragraphs: [
          "Client-facing reception areas, medical waiting rooms, and high-traffic breakrooms often need daily floor care and restroom checks.",
          "After-hours crews prevent disruption to staff and reduce liability from wet floors during business hours.",
        ],
      },
      {
        id: "weekly-suites",
        heading: "Weekly service for small suites",
        level: 2,
        paragraphs: [
          "Professional suites under 3,000 square feet with moderate use commonly schedule two to three visits per week or a deep weekly reset plus light midweek touch-ups.",
          "Include desk surfaces, conference tables, kitchens, and restrooms in written scope documents.",
        ],
      },
      {
        id: "scope-docs",
        heading: "Documenting scope for vendors",
        level: 2,
        paragraphs: [
          "Philadelphia property managers should specify floor types, restroom supply restocking responsibilities, and trash removal expectations.",
          "Clear scope improves quotes and prevents gaps between building janitorial contracts and tenant suites.",
        ],
      },
    ],
    faqs: [
      {
        id: "com-coi",
        question: "Do commercial cleaners provide insurance certificates?",
        answer:
          "Professional vendors should provide COI on request. Ask when onboarding office cleaning in Philadelphia office parks or Center City towers.",
      },
    ],
    relatedPostSlugs: ["when-to-book-deep-cleaning-philadelphia"],
    relatedServicePaths: ["/services/office-cleaning", "/services/commercial-cleaning"],
    internalLinks: [
      { href: "/services/office-cleaning", label: "Office cleaning Philadelphia" },
      { href: "/services/commercial-cleaning", label: "Commercial cleaning" },
    ],
  },
  {
    slug: "philadelphia-neighborhood-cleaning-guide",
    title: "Philadelphia Neighborhood Cleaning: Where We Work Most",
    description:
      "Overview of Xirlane Cleaning neighborhood pages—Center City, Fishtown, University City, Main Line, and how to pick the right local service.",
    excerpt:
      "Local landing pages explain property types and services for popular Philadelphia neighborhoods and the Main Line suburbs.",
    publishedAt: "2025-02-15",
    categorySlug: "local-philadelphia-cleaning",
    featuredImage: IMG.local,
    featuredImageAlt: "Philadelphia skyline neighborhood cleaning service areas",
    keywords: [
      "cleaning service Philadelphia neighborhoods",
      "house cleaning near me Philadelphia",
      "local cleaning company Philly",
    ],
    sections: [
      {
        id: "why-local-pages",
        heading: "Why neighborhood pages matter",
        level: 2,
        paragraphs: [
          "Cleaning needs differ between a Rittenhouse condo, a Fishtown rowhome, and a Main Line colonial. Local pages describe common property types, access issues, and services residents book most.",
          "They also link to dedicated service pages for house cleaning, apartment cleaning, and office cleaning with Philadelphia-specific keywords.",
        ],
      },
      {
        id: "center-city-fishtown",
        heading: "Center City and Fishtown",
        level: 2,
        paragraphs: [
          "Center City demands elevator coordination and compact layouts. Fishtown emphasizes rowhome stairs, rental turnover, and post-renovation dust.",
          "Browse our Center City and Fishtown location pages for localized FAQs and booking tips.",
        ],
      },
      {
        id: "university-mainline",
        heading: "University City and the Main Line",
        level: 2,
        paragraphs: [
          "University City sees heavy move-out demand each spring. The Main Line requires longer appointments for larger suburban footprints.",
          "Location pages outline what to include in quotes for each area.",
        ],
      },
    ],
    faqs: [
      {
        id: "loc-confirm",
        question: "How do I confirm you serve my address?",
        answer:
          "Check our service areas page for counties covered, then read your neighborhood location page. Contact us with your street address for same-day confirmation.",
      },
    ],
    relatedPostSlugs: ["apartment-cleaning-schedule-philly-renters"],
    relatedServicePaths: ["/services/house-cleaning"],
    relatedLocationPaths: [
      "/locations/center-city-philadelphia",
      "/locations/fishtown",
      "/locations/university-city",
      "/locations/main-line",
    ],
    internalLinks: [
      { href: "/locations", label: "All neighborhood pages" },
      { href: "/service-areas", label: "County service areas" },
    ],
  },
  {
    slug: "eco-friendly-cleaning-products-safe-homes",
    title: "Eco-Friendly Cleaning Products: What Is Safe at Home?",
    description:
      "How to request eco-friendly cleaning in Philadelphia homes—product choices, surfaces to avoid, and communicating preferences to your crew.",
    excerpt:
      "Eco-friendly does not mean less effective. Learn how to align products with kids, pets, and sensitive finishes.",
    publishedAt: "2025-02-08",
    categorySlug: "cleaning-tips",
    featuredImage: IMG.tips,
    featuredImageAlt: "Eco-friendly cleaning supplies on a kitchen counter",
    keywords: [
      "eco friendly house cleaning Philadelphia",
      "green cleaning products safe pets",
      "non toxic cleaning service",
    ],
    sections: [
      {
        id: "communicate-prefs",
        heading: "Tell your cleaner what matters",
        level: 2,
        paragraphs: [
          "Note allergies, babies, pets, and delicate stone or wood finishes when booking. Professional teams can adjust products when they know constraints upfront.",
          "If you prefer client-supplied products, confirm that in writing so crews arrive prepared.",
        ],
      },
      {
        id: "high-touch",
        heading: "High-touch disinfection vs green labels",
        level: 2,
        paragraphs: [
          "Marketing terms vary. Focus on whether products meet your health goals and surface manufacturer guidance—not just bottle color.",
          "Kitchens and baths still need effective degreasing and sanitation regardless of brand positioning.",
        ],
      },
      {
        id: "diy-vs-pro",
        heading: "DIY habits between professional visits",
        level: 2,
        paragraphs: [
          "Microfiber cloths, vacuuming entries during pollen season, and immediate spill wipe-ups reduce need for harsh products later.",
          "Pair good daily habits with recurring house cleaning for best results in Philadelphia humidity.",
        ],
      },
    ],
    faqs: [
      {
        id: "eco-xirlane",
        question: "Does Xirlane offer eco-friendly cleaning?",
        answer:
          "Eco-friendly product options are available on request when you book. Mention preferences on our contact page or during your quote call.",
      },
    ],
    relatedPostSlugs: ["when-to-book-deep-cleaning-philadelphia"],
    relatedServicePaths: ["/services/house-cleaning", "/services/recurring-cleaning"],
    internalLinks: [
      { href: "/services/house-cleaning", label: "House cleaning" },
      { href: "/faq", label: "Cleaning FAQ" },
    ],
  },
  {
    slug: "airbnb-turnover-cleaning-philadelphia-hosts",
    title: "Airbnb Turnover Cleaning for Philadelphia Hosts",
    description:
      "STR turnover cleaning in Philadelphia—checklists, timing between guests, linen standards, and multi-property scheduling for local hosts.",
    excerpt:
      "Guest-ready turnovers in Fishtown, Old City, and Center City need checklist discipline and reliable scheduling.",
    publishedAt: "2025-01-30",
    categorySlug: "airbnb-cleaning",
    featuredImage: IMG.airbnb,
    featuredImageAlt: "Guest-ready bedroom after Airbnb turnover cleaning",
    keywords: [
      "Airbnb cleaning Philadelphia",
      "short term rental turnover cleaning",
      "vacation rental cleaning checklist",
    ],
    sections: [
      {
        id: "turnover-checklist",
        heading: "Turnover checklist essentials",
        level: 2,
        paragraphs: [
          "Reset kitchens and baths, remake beds with fresh linen, vacuum all floors, empty trash, and restock paper goods. Walk the unit as a guest would—smell, touch points, and visible dust.",
          "Photo documentation helps when coordinating remote cleaners across multiple Philadelphia listings.",
        ],
      },
      {
        id: "tight-windows",
        heading: "Tight checkout-to-check-in windows",
        level: 2,
        paragraphs: [
          "Same-day turnovers require clear lockbox codes, parking notes, and realistic time blocks. Build buffer for laundry if linens are processed off-site.",
          "Hosts in Old City and Northern Liberties often block back-to-back same-day bookings until turnover SOPs are proven.",
        ],
      },
      {
        id: "scale-properties",
        heading: "Scaling across multiple properties",
        level: 2,
        paragraphs: [
          "Use consistent checklists per unit type—studio vs two-bedroom—and one primary vendor when possible. Volume can improve per-turn pricing.",
          "Align calendar automation with cleaner capacity before peak tourism weekends.",
        ],
      },
    ],
    faqs: [
      {
        id: "ab-linen",
        question: "Do cleaners handle linens for Airbnb units?",
        answer:
          "Linen handling depends on your process. Specify whether crews remake beds from your supply, use off-site laundry, or only clean surfaces. Clarify in your host checklist.",
      },
      {
        id: "ab-pricing",
        question: "How is Airbnb cleaning priced in Philadelphia?",
        answer:
          "Turnovers are quoted per unit with discounts for multiple properties. Share your calendar cadence when requesting a quote from Xirlane Cleaning.",
      },
    ],
    relatedPostSlugs: ["apartment-cleaning-schedule-philly-renters", "philadelphia-neighborhood-cleaning-guide"],
    relatedServicePaths: ["/services/airbnb-cleaning", "/services/apartment-cleaning"],
    relatedLocationPaths: ["/locations/old-city", "/locations/fishtown"],
    internalLinks: [
      { href: "/services/airbnb-cleaning", label: "Airbnb cleaning Philadelphia" },
      { href: "/locations/old-city", label: "Old City STR cleaning" },
    ],
  },
];
