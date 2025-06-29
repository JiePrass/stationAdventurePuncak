import PackageWisata from "@/components/landing/package";
import { HeroSection } from "@/components/landing/hero";
import { AboutSection } from "@/components/landing/about";
import { ServiceSection } from "@/components/landing/service";
import FAQ from "@/components/landing/FAQ";
import CTA from "@/components/landing/CTA";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <PackageWisata />
      <FAQ />
      <CTA />
    </>
  );
}
