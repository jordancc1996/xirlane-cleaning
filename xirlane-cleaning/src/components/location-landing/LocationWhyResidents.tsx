import EyebrowLabel from "@/components/ui/EyebrowLabel";
import type { LocationReason } from "@/lib/location-landing-pages";

type LocationWhyResidentsProps = {
  neighborhoodName: string;
  heading: string;
  intro?: string;
  reasons: LocationReason[];
};

export default function LocationWhyResidents({
  neighborhoodName,
  heading,
  intro,
  reasons,
}: LocationWhyResidentsProps) {
  return (
    <section className="bg-background py-16 md:py-20" aria-labelledby="why-residents-heading">
      <div className="site-container">
        <EyebrowLabel>WHY HIRE A CLEANER</EyebrowLabel>
        <h2 id="why-residents-heading" className="mt-4 text-h2-mobile text-text-primary md:text-h2">
          {heading}
        </h2>
        {intro ? (
          <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-text-body">{intro}</p>
        ) : null}
        <ul className="mt-10 grid gap-6 md:grid-cols-2">
          {reasons.map((reason) => (
            <li key={reason.title} className="flex gap-4">
              <span className="mt-1 text-accent" aria-hidden="true">
                ✓
              </span>
              <div>
                <h3 className="text-[16px] font-medium text-text-primary">{reason.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-text-body">
                  {reason.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-[13px] text-text-body/80">
          Serving homeowners, renters, and businesses throughout {neighborhoodName} and Greater
          Philadelphia.
        </p>
      </div>
    </section>
  );
}
