import Link from "next/link";
import type { ReactNode } from "react";

/** Inline internal links for FAQ answers without changing visible copy. */
const PHRASE_LINKS: { phrase: string; href: string }[] = [
  { phrase: "service areas page", href: "/service-areas" },
  { phrase: "locations hub", href: "/locations" },
  { phrase: "Center City", href: "/locations/center-city-philadelphia" },
  { phrase: "Fishtown", href: "/locations/fishtown" },
  { phrase: "University City", href: "/locations/university-city" },
  { phrase: "contact page", href: "/contact" },
  { phrase: "house cleaning", href: "/services/house-cleaning" },
  { phrase: "commercial cleaning", href: "/services/commercial-cleaning" },
  { phrase: "deep cleaning", href: "/services/deep-cleaning" },
  { phrase: "move-out cleaning", href: "/services/move-out-cleaning" },
  { phrase: "move-in cleaning", href: "/services/move-in-cleaning" },
  { phrase: "post-construction cleaning", href: "/services/post-construction-cleaning" },
  { phrase: "maid service", href: "/services/house-cleaning" },
  { phrase: "office cleaning", href: "/services/office-cleaning" },
  { phrase: "apartment cleaning", href: "/services/apartment-cleaning" },
];

export default function FaqAnswerText({ text }: { text: string }) {
  const nodes: ReactNode[] = [];
  let remaining = text;
  let key = 0;

  while (remaining.length > 0) {
    let earliest: { index: number; phrase: string; href: string } | null = null;

    for (const { phrase, href } of PHRASE_LINKS) {
      const index = remaining.indexOf(phrase);
      if (index === -1) continue;
      if (!earliest || index < earliest.index) {
        earliest = { index, phrase, href };
      }
    }

    if (!earliest) {
      nodes.push(remaining);
      break;
    }

    if (earliest.index > 0) {
      nodes.push(remaining.slice(0, earliest.index));
    }

    nodes.push(
      <Link
        key={key++}
        href={earliest.href}
        className="text-accent underline-offset-4 hover:underline"
      >
        {earliest.phrase}
      </Link>,
    );

    remaining = remaining.slice(earliest.index + earliest.phrase.length);
  }

  return <>{nodes}</>;
}
