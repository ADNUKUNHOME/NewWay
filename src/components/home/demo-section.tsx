"use client";

import { DUMMY_ROADMAP } from "@/constants/roadmapDummyData";
import { useState } from "react";
import { Card } from "../ui/card";
import ProgressBar from "../roadmap/progressBar";
import { Separator } from "../ui/separator";
import NavigationControls from "../roadmap/navigationControls";
import ReactMarkdown from "react-markdown";

export default function DemoSection() {
    const sections = DUMMY_ROADMAP;
    const [currentSection, setCurrentSection] = useState(0);

    return (
        <section className="flex flex-col items-center justify-center w-full">
            {/* Heading */}
            <div className="w-full sm:w-[500px] md:w-[650px] lg:w-[800px] bg-black/20 backdrop-blur-xs rounded-2xl px-6 py-6 mb-4 text-center shadow-lg border-t border-t-yellow-500">
                <h1 className="text-2xl md:text-4xl text-white font-extrabold leading-snug">
                    Discover how{" "}
                    <span className="text-amber-500">NewWay</span> can guide your journey
                    with a personalized roadmap
                </h1>
            </div>

            {/* Card */}
            <Card className="flex flex-col items-center justify-center bg-black/10 backdrop-blur-xs border-0 border-b border-b-slate-400 hover:shadow-2xl mx-auto text-center px-4 sm:px-6 md:px-10 lg:px-12 space-y-6 w-full sm:w-[500px] md:w-[650px] lg:w-[800px] min-h-[400px]">
                {/* Progress Bar */}
                <ProgressBar sections={sections} currentSection={currentSection} />

                {/* Content */}
                <div className="max-w-2xl mt-4">
                    <h2 className="text-2xl font-bold text-yellow-300 mb-2">
                        {sections[currentSection].title}
                    </h2>
                    <div className="text-lg text-white">
                        <ReactMarkdown>{sections[currentSection].content}</ReactMarkdown>
                    </div>
                </div>

                <Separator className="w-full" />

                {/* Navigation */}
                <NavigationControls
                    currentSection={currentSection}
                    setCurrentSection={setCurrentSection}
                    sections={sections}
                    totalSections={sections.length}
                />
            </Card>
        </section>
    );
}
