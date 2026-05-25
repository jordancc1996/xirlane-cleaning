type LocationIntroProps = {
  heading: string;
  paragraphs: string[];
};

export default function LocationIntro({ heading, paragraphs }: LocationIntroProps) {
  return (
    <section className="section-spacing" aria-labelledby="location-intro-heading">
      <div className="site-container max-w-3xl">
        <h2 id="location-intro-heading" className="text-h2-mobile text-text-primary md:text-h2">
          {heading}
        </h2>
        <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-text-body">
          {paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
