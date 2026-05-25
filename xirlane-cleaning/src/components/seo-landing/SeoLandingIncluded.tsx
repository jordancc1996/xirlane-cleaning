type SeoLandingIncludedProps = {
  items: string[];
};

export default function SeoLandingIncluded({ items }: SeoLandingIncludedProps) {
  return (
    <section className="py-16 md:py-20" aria-labelledby="whats-included-heading">
      <div className="site-container">
        <h2 id="whats-included-heading" className="text-h2-mobile text-text-primary md:text-h2">
          What&apos;s Included
        </h2>
        <ul className="mt-8 grid gap-4 md:grid-cols-2">
          {items.map((item) => (
            <li key={item} className="flex items-start gap-3 text-text-primary">
              <span className="text-accent" aria-hidden="true">
                ✓
              </span>
              <span className="text-[15px] leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
