'use client';

import { Card } from "../ui/card";
import { Separator } from "../ui/separator";
import EmptyRoadmapState from "./emptyRoadmapState";
import NavigationControls from "./navigationControls";
import ProgressBar from "./progressBar";
import ReactMarkdown from "react-markdown";
import { motion } from "framer-motion";

export default function RoadmapCard({
    sections,
    currentSection,
    setCurrentSection,
    loading,
    FetchRoadmap,
}: {
    sections: { title: string, content: string }[];
    currentSection: number;
    setCurrentSection: React.Dispatch<React.SetStateAction<number>>;
    loading: boolean;
    FetchRoadmap: () => void;
}) {
    const totalSections = sections.length;

    const contentVariants = {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0, transition: { duration: 1 } }
    };

    return (
        <Card className="flex flex-col items-center justify-center bg-black/10 backdrop-blur-xs border-0 border-b border-b-slate-400 hover:shadow-2xl mx-auto text-center pb-0 px-12 sm:px-5 md:px-10 space-y-6 w-full sm:w-[500px] md:w-[650px] lg:w-[800px] min-h-[400px]">
            <ProgressBar
                sections={sections}
                currentSection={currentSection}
            />

            {/* Animate only the section content */}
            {totalSections > 0 ? (
                <motion.div
                    key={currentSection}
                    className="max-w-2xl mt-8"
                    initial="hidden"
                    animate="visible"
                    variants={contentVariants}
                >
                    <h2 className="text-2xl font-bold text-yellow-300 mb-2">
                        {sections[currentSection].title}
                    </h2>
                    <div className="text-lg text-white">
                        <ReactMarkdown>
                            {sections[currentSection].content}
                        </ReactMarkdown>
                    </div>
                </motion.div>
            ) : (
                <EmptyRoadmapState FetchRoadmap={FetchRoadmap} loading={loading} />
            )}

            <Separator className="w-full" />

            {/* Navigation */}
            {totalSections > 0 && (
                <NavigationControls
                    currentSection={currentSection}
                    setCurrentSection={setCurrentSection}
                    sections={sections}
                    totalSections={totalSections}
                />
            )}
        </Card>
    )
}
