import Link from "next/link";
import EyebrowLabel from "@/components/ui/EyebrowLabel";

export default function AboutBlurb() {
  return (
    <section
      className="bg-section-alt-bg py-16 md:py-20"
      aria-labelledby="about-residential-heading"
    >
      <div className="site-container">
        <div className="mx-auto max-w-3xl text-center">
          <EyebrowLabel className="justify-center text-center">WHO WE ARE</EyebrowLabel>
          <h2
            id="about-residential-heading"
            className="mt-4 text-h2-mobile text-text-primary md:text-h2"
          >
            Residential Cleaning Across Greater Philadelphia
          </h2>
          <p className="mt-6 text-[15px] leading-relaxed text-text-body">
            At Xirlane Cleaning, we deliver high-quality residential cleaning in Philadelphia
            with the same care for every room, every visit. Homeowners across Montgomery,
            Delaware, Chester, and Bucks County book us for{" "}
            <Link href="/services/house-cleaning" className="text-accent hover:underline">
              weekly, biweekly, and monthly plans
            </Link>{" "}
            — or a single visit when life gets busy.
          </p>
          <p className="mt-4 text-[15px] leading-relaxed text-text-body">
            We also support offices and worksites with{" "}
            <Link href="/services/commercial-cleaning" className="text-accent hover:underline">
              commercial cleaning in Philadelphia
            </Link>
            , plus specialized{" "}
            <Link href="/services/deep-cleaning" className="text-accent hover:underline">
              deep cleaning services
            </Link>{" "}
            and{" "}
            <Link href="/services/post-construction-cleaning" className="text-accent hover:underline">
              move-out cleaning
            </Link>{" "}
            when you need a full reset. Our friendly crew is here to make your space shine.
          </p>
          <div className="mx-auto mt-5 h-px w-[60px] bg-accent" />
        </div>
      </div>
    </section>
  );
}
