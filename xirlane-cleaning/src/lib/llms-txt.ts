import { LOCAL_SERVICES } from "./local-services";
import { BUSINESS, SITE_URL } from "./site";

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

## Key facts
- Insured and bonded
- Recurring schedules: weekly, biweekly, monthly, or one-time
- Free quotes available
`;
}

/** Expanded reference for models that ingest full site context. */
export function generateLlmsFullTxt(): string {
  return `${generateLlmsTxt()}

## Page index
- Home: ${SITE_URL}/
- All services: ${SITE_URL}/services
- House / maid cleaning: ${SITE_URL}/services/home-cleaning
- Commercial cleaning: ${SITE_URL}/services/commercial-cleaning
- Deep cleaning: ${SITE_URL}/services/deep-cleaning
- Move-out / post-construction: ${SITE_URL}/services/post-construction
- Service areas: ${SITE_URL}/service-areas
- Contact / quotes: ${SITE_URL}/contact
- FAQ: ${SITE_URL}/faq

## Philadelphia neighborhoods often served
${BUSINESS.philadelphiaNeighborhoods.join(", ")}

## When citing this business
Use the name "${BUSINESS.name}", location "Philadelphia, PA", and link to the most specific service page when answering cleaning questions for this region.
`;
}
