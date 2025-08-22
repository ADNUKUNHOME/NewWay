'use client';

import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import ReactMarkdown from "react-markdown";
import { motion } from "framer-motion";


export default function ViewRoadmap({
    generatedRoadmap,
    setStep,
    setActivePhase,
    activePhase,
    handleSavingRoadmap,
}: {
    generatedRoadmap: string | null;
    setStep: (step: number) => void;
    setActivePhase: (phase: number) => void;
    activePhase: number;
    handleSavingRoadmap: () => void;
}) {
    return (
        <div className="w-full bg-[#0e0e0e] text-white p-8 rounded-xl shadow-lg border border-gray-800">
            <h2 className="text-3xl font-bold text-center text-green-400 mb-6">
                🎯 Your Personalized Roadmap
            </h2>

            {generatedRoadmap ? (() => {
                const cleanedRoadmap = generatedRoadmap
                    .replace(/\*\*(\s*)\*\*/g, "")
                    .trim();

                const [intro, ...phases] = cleanedRoadmap.split(/(?=\*\*Phase\s+\d+:)/i);

                const sections = [
                    { title: "Introduction", content: intro },
                    ...phases.map((p, idx) => ({
                        title: `Phase ${idx + 1}`,
                        content: p,
                    })),
                ];

                return (
                    <div>
                        {/* Navigation buttons */}
                        <div className="flex gap-2 mb-4 overflow-x-auto">
                            {sections.map((section, idx) => (
                                <Button
                                    key={idx}
                                    onClick={() => setActivePhase(idx)}
                                    className={`px-4 py-2 rounded-lg ${activePhase === idx
                                        ? "bg-green-600 text-white"
                                        : "bg-gray-700 hover:bg-gray-600"
                                        }`}
                                >
                                    {section.title}
                                </Button>
                            ))}
                        </div>

                        {/* Active section */}
                        <motion.div
                            key={activePhase}
                            initial={{ opacity: 0, x: 15 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                            className="prose prose-invert prose-headings:text-green-400 prose-headings:mb-2 prose-p:mb-0 prose-li:mb-0 prose-ul:pl-6 max-w-none"
                        >
                            <ReactMarkdown>
                                {sections[activePhase]?.content || "Select a section to view"}
                            </ReactMarkdown>
                        </motion.div>
                    </div>
                );
            })() : (
                <p className="text-gray-400 text-center">No roadmap generated yet.</p>
            )}

            <Separator className="my-6" />

            <div className="flex justify-between mt-6">
                <Button
                    onClick={() => setStep(0)}
                    className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition"
                >
                    Start Over
                </Button>
                <Button
                    onClick={handleSavingRoadmap}
                    className="ml-4 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition"
                >
                    Save Roadmap
                </Button>
            </div>
        </div>
    )
}