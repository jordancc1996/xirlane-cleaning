import EyebrowLabel from "@/components/ui/EyebrowLabel";
import type { LocationPropertyType } from "@/lib/location-landing-pages";

type LocationPropertyTypesProps = {
  neighborhoodName: string;
  propertyTypes: LocationPropertyType[];
};

export default function LocationPropertyTypes({
  neighborhoodName,
  propertyTypes,
}: LocationPropertyTypesProps) {
  return (
    <section className="bg-section-alt-bg py-16 md:py-20" aria-labelledby="property-types-heading">
      <div className="site-container">
        <EyebrowLabel>COMMON HOMES &amp; SPACES</EyebrowLabel>
        <h2 id="property-types-heading" className="mt-4 text-h2-mobile text-text-primary md:text-h2">
          Property Types We Clean in {neighborhoodName}
        </h2>
        <ul className="mt-10 grid gap-6 md:grid-cols-2">
          {propertyTypes.map((type) => (
            <li key={type.title} className="border border-border-light bg-white p-6 md:p-8">
              <h3 className="text-h3-mobile text-text-primary md:text-h3">{type.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-text-body">{type.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
