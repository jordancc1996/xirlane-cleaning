import type { Metadata } from "next";
import Link from "next/link";
import BlogRelatedLinks from "@/components/seo/BlogRelatedLinks";
import FaqAnswerText from "@/components/seo/FaqAnswerText";
import PageKnowledgeBlock from "@/components/seo/PageKnowledgeBlock";
import QuoteCtaBand from "@/components/seo/QuoteCtaBand";
import SiteHubLinks from "@/components/seo/SiteHubLinks";
import { JsonLdGraph } from "@/components/seo/JsonLd";
import { PAGE_KNOWLEDGE } from "@/lib/ai-page-knowledge";
import { FAQ_ITEMS } from "@/lib/faqs";
import { PAGE_SEO } from "@/lib/page-metadata";
import { breadcrumbSchema, faqPageSchema, webPageSchema } from "@/lib/schema";
import { createPageMetadata } from "@/lib/seo";

const meta = PAGE_SEO.faq;

export const metadata: Metadata = createPageMetadata({
  title: meta.title,
  description: meta.description,
  path: meta.path,
  keywords: [...meta.keywords],
  ogImageAlt: meta.ogImageAlt,
});

export default function FaqPage() {
  return (
    <main className="section-spacing bg-background">
      <JsonLdGraph
        nodes={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "FAQ", path: "/faq" },
          ]),
          webPageSchema({
            path: meta.path,
            name: meta.title,
            description: meta.description,
          }),
          faqPageSchema([...FAQ_ITEMS], { path: meta.path, pageName: meta.title }),
        ]}
      />
      <div className="site-container max-w-3xl">
        <p className="text-[11px] uppercase tracking-eyebrow text-accent">FAQ</p>
        <h1 className="mt-4 text-h1-mobile md:text-h1">Frequently Asked Questions</h1>
        <p className="mt-4 text-text-body">
          Common questions about booking, supplies, scheduling, pricing, and service areas
          across Philadelphia, Montgomery, Delaware, Chester, and Bucks County.
        </p>

        <div className="mt-12 space-y-8">
          {FAQ_ITEMS.map((faq) => (
            <article key={faq.question} className="border-b border-border-light pb-8">
              <h3 className="text-h3-mobile text-text-primary md:text-h3">{faq.question}</h3>
              <p className="mt-3 text-text-body">
                <FaqAnswerText text={faq.answer} />
              </p>
            </article>
          ))}
        </div>

        <p className="mt-12 text-text-body">
          Ready for a quote?{" "}
          <Link href="/contact" className="text-accent underline-offset-4 hover:underline">
            Contact Xirlane Cleaning
          </Link>{" "}
          or browse our{" "}
          <Link href="/services" className="text-accent underline-offset-4 hover:underline">
            cleaning services
          </Link>
          .
        </p>

        <div className="mt-12">
          <BlogRelatedLinks />
        </div>
      </div>
      <PageKnowledgeBlock knowledge={PAGE_KNOWLEDGE.faq} />
      <SiteHubLinks heading="Find the right cleaning service" />
      <QuoteCtaBand
        preset="freeQuote"
        heading="Get a Free Cleaning Quote in Philadelphia"
        body="Tell us about your home or office and we will match you with the right recurring or one-time plan."
      />
    </main>
  );
}
