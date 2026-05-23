import Link from "next/link";
import EyebrowLabel from "@/components/ui/EyebrowLabel";

const testimonials = [
  {
    name: "Katie M.",
    quote:
      "My second clean with Xirlane had the team do an amazing job. It was very clear how much effort and attention was put into their work!",
  },
  {
    name: "Amber W.",
    quote:
      "As a busy mom who runs my own business, hiring Xirlane has been one of the best decisions. They are reliable, thorough, and incredibly efficient.",
  },
  {
    name: "Meghan C.",
    quote:
      "I have been loving my monthly cleans with Xirlane Cleaning. They are quick and do a great job. The little details they add are such a nice touch!",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-background py-16 md:py-20"
      aria-labelledby="testimonials-heading"
    >
      <div className="site-container">
        <div className="mx-auto max-w-3xl text-center">
          <EyebrowLabel>WHAT OUR CLIENTS SAY</EyebrowLabel>
          <h2 id="testimonials-heading" className="mt-4 text-h2-mobile text-text-primary md:text-h2">
            Real Homes. Real Results.
          </h2>
          <p className="mt-4 text-[15px] text-text-body">
            Philadelphia-area homeowners trust Xirlane for residential cleaning they can
            count on — reliable crews, careful work, and results that show every visit.
          </p>
        </div>

        <ul className="mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 md:grid md:grid-cols-3 md:gap-8 md:overflow-visible">
          {testimonials.map((testimonial) => (
            <li
              key={testimonial.name}
              className="w-[85%] shrink-0 snap-center border border-border-light bg-white p-8 md:w-auto"
            >
              <article>
                <p className="mb-4 text-accent" aria-hidden="true">
                  ★★★★★
                </p>
                <blockquote className="text-[18px] italic leading-[1.8] text-text-primary">
                  <p>{testimonial.quote}</p>
                </blockquote>
                <footer className="mt-6">
                  <p className="text-[12px] uppercase tracking-widest text-text-body">{testimonial.name}</p>
                  <p className="text-[10px] text-accent">Verified Google Review</p>
                </footer>
              </article>
            </li>
          ))}
        </ul>

        <p className="mx-auto mt-8 max-w-xl text-center text-[14px] text-text-body">
          Ready to book?{" "}
          <Link href="/contact" className="text-accent hover:underline">
            Request your free quote
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
