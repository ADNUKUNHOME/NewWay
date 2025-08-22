import HomeHero from "../components/home/hero";
import HowItWorks from "@/components/home/howitworks";
import KeyFeatures from "../components/home/keyfeatures";
import CtaSection from "@/components/home/ctasection";
import DemoSection from "@/components/home/demo-section";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center w-full gap-8">
      <HomeHero />
      <DemoSection />
      <KeyFeatures />
      <HowItWorks />
      <CtaSection />
    </div>
  );
}
