import AboutBlurb from "@/components/home/AboutBlurb";
import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowItWorks";
import Newsletter from "@/components/home/Newsletter";
import ServiceCards from "@/components/home/ServiceCards";
import Stats from "@/components/home/Stats";
import Testimonials from "@/components/home/Testimonials";
import WhyChoose from "@/components/home/WhyChoose";

export default function Home() {
  return (
    <main className="bg-background">
      <Hero />
      <AboutBlurb />
      <WhyChoose />
      <ServiceCards />
      <HowItWorks />
      <Testimonials />
      <Stats />
      <Newsletter />
    </main>
  );
}
