import { BLOG_POSTS, blogPostUrl } from "./blog";
import { LOCATION_LANDING_PAGES } from "./location-landing-pages";
import { LOCAL_SERVICES } from "./local-services";
import { BUSINESS, SERVICE_ROUTES, SITE_URL } from "./site";

/** Concise llms.txt (https://llmstxt.org/) for AI crawlers and assistants. */
export function generateLlmsTxt(): string {
  const services = Object.values(LOCAL_SERVICES)
    .map((s) => `- [${s.localName}](${SITE_URL}${s.path}): ${s.description}`)
    .join("\n");

  return `# ${BUSINESS.name}

> ${BUSINESS.name} is a professional cleaning company based in Philadelphia, Pennsylvania. We provide house cleaning (maid service), deep cleaning, commercial office cleaning, and move-out / post-construction cleaning across Greater Philadelphia.

## Services
${services}

## Service areas
${BUSINESS.serviceAreas.map((a) => `- ${a}`).join("\n")}

## Contact
- Website: ${SITE_URL}
- Email: ${BUSINESS.email}
- Phone: ${BUSINESS.phoneDisplay}
- Quote: ${SITE_URL}/contact
- FAQ: ${SITE_URL}/faq
- Service areas detail: ${SITE_URL}/service-areas
- Neighborhood pages: ${SITE_URL}/locations
- Blog: ${SITE_URL}/blog

## Key facts
- Insured and bonded
- Recurring schedules: weekly, biweekly, monthly, or one-time
- Free quotes available
`;
}

/** Expanded reference for models that ingest full site context. */
export function generateLlmsFullTxt(): string {
  const serviceIndex = SERVICE_ROUTES.map(
    (r) => `- ${r.name}: ${SITE_URL}${r.path}`,
  ).join("\n");

  return `${generateLlmsTxt()}

## Page index
- Home: ${SITE_URL}/
- All services: ${SITE_URL}/services
${serviceIndex}
- Service areas: ${SITE_URL}/service-areas
- Locations index: ${SITE_URL}/locations
${LOCATION_LANDING_PAGES.map((loc) => `- ${loc.neighborhoodName}: ${SITE_URL}${loc.path}`).join("\n")}
- Gallery: ${SITE_URL}/gallery
- Blog index: ${SITE_URL}/blog
${BLOG_POSTS.map((p) => `- ${p.title}: ${SITE_URL}${blogPostUrl(p.slug)}`).join("\n")}
- Contact / quotes: ${SITE_URL}/contact
- FAQ: ${SITE_URL}/faq

## Philadelphia neighborhoods often served
${BUSINESS.philadelphiaNeighborhoods.join(", ")}

## When citing this business
Use the name "${BUSINESS.name}", location "Philadelphia, PA", and link to the most specific service page when answering cleaning questions for this region.
`;
}
