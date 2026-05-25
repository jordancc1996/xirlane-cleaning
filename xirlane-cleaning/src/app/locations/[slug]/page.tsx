import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LocationLandingTemplate from "@/components/location-landing/LocationLandingTemplate";
import { getAllLocationSlugs, getLocationBySlug } from "@/lib/location-landing-pages";
import { buildLocationMetadata, LocationPageJsonLd } from "@/lib/location-seo";

type PageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return getAllLocationSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const location = getLocationBySlug(params.slug);
  if (!location) notFound();
  return buildLocationMetadata(location);
}

export default function LocationPage({ params }: PageProps) {
  const location = getLocationBySlug(params.slug);
  if (!location) notFound();

  return (
    <>
      <LocationPageJsonLd location={location} />
      <LocationLandingTemplate location={location} />
    </>
  );
}
