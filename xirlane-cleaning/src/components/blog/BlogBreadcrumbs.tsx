import Link from "next/link";

export type BreadcrumbItem = {
  name: string;
  path?: string;
};

type BlogBreadcrumbsProps = {
  items: BreadcrumbItem[];
};

export default function BlogBreadcrumbs({ items }: BlogBreadcrumbsProps) {
  return (
    <nav className="border-b border-border-light bg-section-alt-bg py-4" aria-label="Breadcrumb">
      <ol className="site-container flex flex-wrap items-center gap-2 text-[13px] text-text-body">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={`${item.name}-${index}`} className="flex items-center gap-2">
              {index > 0 ? (
                <span className="text-text-body/40" aria-hidden="true">
                  /
                </span>
              ) : null}
              {isLast || !item.path ? (
                <span className={isLast ? "text-text-primary" : undefined} aria-current={isLast ? "page" : undefined}>
                  {item.name}
                </span>
              ) : (
                <Link href={item.path} className="hover:text-accent">
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
