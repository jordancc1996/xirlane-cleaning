import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

/** AI and search crawlers explicitly allowed to fetch public pages. */
const AI_AND_SEARCH_AGENTS = [
  "*",
  "Googlebot",
  "Bingbot",
  "GPTBot",
  "ChatGPT-User",
  "OAI-SearchBot",
  "Google-Extended",
  "anthropic-ai",
  "ClaudeBot",
  "Claude-Web",
  "PerplexityBot",
  "Applebot-Extended",
  "meta-externalagent",
  "FacebookBot",
  "cohere-ai",
  "Bytespider",
] as const;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: AI_AND_SEARCH_AGENTS.map((userAgent) => ({
      userAgent,
      allow: "/",
    })),
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
