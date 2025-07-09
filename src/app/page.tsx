import Image from "next/image";
import HomeHero from "../components/home/hero";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between w-full ">
      <HomeHero />
    </div>
  );
}
