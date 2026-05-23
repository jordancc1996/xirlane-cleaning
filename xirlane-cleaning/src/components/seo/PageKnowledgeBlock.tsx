import Link from "next/link";
import type { PageKnowledge } from "@/lib/ai-page-knowledge";

type PageKnowledgeBlockProps = {
  knowledge: PageKnowledge;
};

/**
 * Visible, semantic summary block for humans, search engines, and AI systems.
 * Uses plain HTML (dl, p, nav) — fully present in SSR output without JavaScript.
 */
export default function PageKnowledgeBlock({ knowledge }: PageKnowledgeBlockProps) {
  return (
    <section
      className="border-b border-border-light bg-section-alt-bg py-10 md:py-12"
      aria-labelledby="page-knowledge-heading"
    >
      <div className="site-container max-w-3xl">
        <h2 id="page-knowledge-heading" className="text-h3-mobile text-text-primary md:text-h3">
          {knowledge.heading}
        </h2>
        <p className="mt-4 text-[15px] leading-relaxed text-text-body">{knowledge.summary}</p>

        <dl className="mt-6 space-y-3 text-[14px]">
          {knowledge.facts.map((fact) => (
            <div key={fact.label} className="grid gap-1 sm:grid-cols-[140px_1fr]">
              <dt className="font-medium text-text-primary">{fact.label}</dt>
              <dd className="text-text-body">{fact.value}</dd>
            </div>
          ))}
        </dl>

        <nav className="mt-6" aria-label="Related pages on Xirlane Cleaning">
          <p className="text-[11px] uppercase tracking-widest text-accent">Related pages</p>
          <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-2 text-[14px]">
            {knowledge.relatedLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-text-primary hover:text-accent hover:underline">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}
