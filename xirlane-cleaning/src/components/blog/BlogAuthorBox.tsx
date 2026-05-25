import Link from "next/link";
import { BLOG_AUTHOR } from "@/lib/blog-author";

export default function BlogAuthorBox() {
  return (
    <aside
      className="mt-12 border border-border-light bg-white p-6 md:p-8"
      aria-labelledby="author-heading"
    >
      <p className="text-[11px] uppercase tracking-eyebrow text-accent">AUTHOR</p>
      <h2 id="author-heading" className="mt-3 text-h3-mobile text-text-primary md:text-h3">
        {BLOG_AUTHOR.name}
      </h2>
      <p className="mt-1 text-[13px] text-text-body/80">{BLOG_AUTHOR.role}</p>
      <p className="mt-4 text-[15px] leading-relaxed text-text-body">{BLOG_AUTHOR.bio}</p>
      <p className="mt-5 text-[14px]">
        <Link href="/contact" className="text-accent hover:underline">
          Request a cleaning quote
        </Link>
        {" · "}
        <Link href="/service-areas" className="text-accent hover:underline">
          Service areas
        </Link>
      </p>
    </aside>
  );
}
