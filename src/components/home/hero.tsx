import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

export default function HomeHero() {
    return (
        <section className="relative w-full h-screen overflow-hidden">
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
                <h1 className="text-4xl md:text-6xl font-bold">Welcome to NewWay</h1>
                <p className="mt-4 text-lg text-gray-300">
                    Personalized AI Roadmaps for Students
                </p>
                <Link href={"/roadmap"}>
                    <Button className="mt-8 px-10 py-3 bg-slate-200 hover:bg-white hover:scale-105 hover:no-underline text-black font-semibold rounded-lg transition-all duration-300">
                        Get Started
                        <ArrowRight className="ml-2 inline-block" />
                    </Button>
                </Link>

            </div>
        </section>
    );
}
