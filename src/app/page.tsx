import Image from "next/image";
import HomeHero from "../components/home/hero";
import HowItWorks from "@/components/home/howitworks";
import KeyFeatures from "../components/home/keyfeatures";
import CtaSection from "@/components/home/ctasection";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center w-full gap-8 sm:gap-118 md:gap-16 lg:gap-20 xl:gap-24">
      <HomeHero />
      <KeyFeatures />
      <HowItWorks />
      <CtaSection />
    </div>
  );
}
