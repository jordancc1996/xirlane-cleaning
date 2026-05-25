import type { BlogPost, BlogSection } from "./blog-types";

export function estimateReadingTime(sections: BlogSection[]): number {
  const text = sections.flatMap((s) => s.paragraphs).join(" ");
  const words = text.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}

export function getTocItems(sections: BlogSection[]) {
  return sections
    .filter((s) => s.level === 2)
    .map((s) => ({ id: s.id, label: s.heading }));
}

export function sortPostsByDate(posts: BlogPost[]): BlogPost[] {
  return [...posts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
}

export function formatPostDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "America/New_York",
  });
}
