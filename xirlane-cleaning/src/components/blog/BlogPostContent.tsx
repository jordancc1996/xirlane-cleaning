import ConversionCta from "@/components/seo/ConversionCta";
import type { BlogSection } from "@/lib/blog-types";

type BlogPostContentProps = {
  sections: BlogSection[];
};

/** Insert one mid-article CTA after the first half of sections (minimum 3 sections). */
function midArticleInsertIndex(sectionCount: number): number | null {
  if (sectionCount < 3) return null;
  return Math.floor(sectionCount / 2) - 1;
}

export default function BlogPostContent({ sections }: BlogPostContentProps) {
  const ctaAfterIndex = midArticleInsertIndex(sections.length);

  return (
    <div className="blog-prose">
      {sections.map((section, index) => {
        const Tag = section.level === 2 ? "h2" : "h3";
        return (
          <section key={section.id} id={section.id} className="scroll-mt-28">
            <Tag className={section.level === 2 ? "blog-h2" : "blog-h3"}>{section.heading}</Tag>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
            {ctaAfterIndex === index ? (
              <ConversionCta
                preset="blogArticle"
                variant="compact"
                flush
                className="my-10"
                id="blog-mid-article-cta"
              />
            ) : null}
          </section>
        );
      })}
    </div>
  );
}
