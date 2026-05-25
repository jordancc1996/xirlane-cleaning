import Link from "next/link";

export type TocItem = {
  id: string;
  label: string;
};

type BlogTableOfContentsProps = {
  items: TocItem[];
};

export default function BlogTableOfContents({ items }: BlogTableOfContentsProps) {
  if (items.length < 2) return null;

  return (
    <nav
      className="border border-border-light bg-section-alt-bg p-6 md:p-8"
      aria-labelledby="toc-heading"
    >
      <p id="toc-heading" className="text-[11px] uppercase tracking-eyebrow text-accent">
        ON THIS PAGE
      </p>
      <ol className="mt-4 space-y-2">
        {items.map((item) => (
          <li key={item.id}>
            <Link
              href={`#${item.id}`}
              className="text-[15px] text-text-body transition-colors hover:text-accent"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}
