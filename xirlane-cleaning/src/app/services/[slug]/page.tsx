import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SeoLandingPageTemplate from "@/components/seo-landing/SeoLandingPageTemplate";
import { getAllLandingSlugs, getLandingBySlug } from "@/lib/seo-landing-pages";
import { buildLandingMetadata, LandingPageJsonLd } from "@/lib/service-seo";

type PageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return getAllLandingSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const page = getLandingBySlug(params.slug);
  if (!page) notFound();
  return buildLandingMetadata(page);
}

export default function SeoLandingPage({ params }: PageProps) {
  const page = getLandingBySlug(params.slug);
  if (!page) notFound();

  return (
    <>
      <LandingPageJsonLd page={page} />
      <SeoLandingPageTemplate page={page} />
    </>
  );
}
