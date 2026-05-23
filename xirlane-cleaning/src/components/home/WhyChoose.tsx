import Link from "next/link";
import EyebrowLabel from "@/components/ui/EyebrowLabel";

const items = [
  "Trained & Certified Staff",
  "Insured, Bonded & Registered",
  "100% Satisfaction Guarantee",
  "High Quality Clean",
  "Eco-Friendly Products Available",
  "Responsive to Feedback",
  "Easy Cash-Free Payment",
  "Daily, Weekly, Biweekly & Monthly options",
  "Fully Insured & Compliant",
];

export default function WhyChoose() {
  return (
    <section
      className="bg-background py-16 md:py-20"
      aria-labelledby="why-xirlane-heading"
    >
      <div className="site-container grid gap-10 lg:grid-cols-5 lg:gap-12">
        <div className="lg:col-span-2">
          <EyebrowLabel>WHY XIRLANE</EyebrowLabel>
          <h2 id="why-xirlane-heading" className="mt-4 text-h2-mobile text-text-primary md:text-h2">
            The Standard for Clean in Philadelphia
          </h2>
          <p className="mt-5 text-[15px] text-text-body">
            We&apos;re not just another cleaning company. Families and businesses choose us
            for reliable scheduling, clear communication, and crews that treat your property
            with respect. That trust shows up in our reviews and repeat bookings across the
            region.
          </p>
          <p className="mt-4 text-[14px] text-text-body">
            <Link href="/contact" className="text-accent hover:underline">
              Request a free quote
            </Link>
            {" · "}
            <Link href="/#testimonials" className="text-accent hover:underline">
              Read client feedback
            </Link>
          </p>
        </div>

        <div className="lg:col-span-3">
          <ul className="grid grid-cols-1 gap-x-6 gap-y-2.5 lg:grid-cols-3">
            {items.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-[14px] leading-snug text-text-primary">
                <span className="mt-0.5 text-accent" aria-hidden="true">
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
