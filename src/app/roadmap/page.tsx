'use client';

import { GetRoadmapApiCall } from "@/actions/roadmap/getRoadmap";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { useAuth } from "../../../AuthContext";
import { toast } from "sonner";

export default function Roadmap() {
    const [currentSection, setCurrentSection] = useState(0);
    const [sections, setSections] = useState<{ title: string, content: string }[]>([]);
    const { user } = useAuth();
    const createdBy = user?.email || "";

    // Splitting logic
    const splitRoadmap = (roadmap: string) => {
        const cleanedRoadmap = roadmap.replace(/\*\*(\s*)\*\*/g, "").trim();
        const [intro, ...phases] = cleanedRoadmap.split(/(?=Phase\s+\d+:)/i);

        return [
            { title: "Introduction", content: intro },
            ...phases.map((p, idx) => ({
                title: `Phase ${idx + 1}`,
                content: p
            }))
        ];
    };

    // Fetch roadmap
    useEffect(() => {
        if (!createdBy) return;
        GetRoadmapApiCall(createdBy).then((data) => {
            if (data.success) {
                const roadmapText = data.roadmap.description; // adjust if your API shape is different
                setSections(splitRoadmap(roadmapText));
                console.log("Roadmap data fetched successfully:", data);
            } else {
                toast.error(data.message || "Failed to fetch roadmap!");
                console.error("Failed to fetch roadmap:", data.message);
            }
        });
    }, [createdBy]);

    return (
        <section className="flex items-center justify-center min-h-screen mx-auto px-4 sm:px-6 lg:px-8 pt-20">
            <Card className="flex flex-col items-center justify-center bg-black/10 backdrop-blur-xs border-4 border-black hover:shadow-2xl mx-auto text-center py-12 px-12 sm:px-5 md:px-10 space-y-6">
                <h1 className="text-4xl font-bold text-yellow-400">Your Roadmap to Success</h1>
                <Separator className="w-full" />

                {/* Show content */}
                {sections.length > 0 ? (
                    <div className="max-w-2xl">
                        <h2 className="text-2xl font-bold text-yellow-300 mb-2">
                            {sections[currentSection].title}
                        </h2>
                        <p className="text-lg text-white whitespace-pre-line">
                            {sections[currentSection].content}
                        </p>
                    </div>
                ) : (
                    <div className="flex flex-col">
                        <p className="text-2xl font-bold text-gray-400">We will build your future beautiful based on your current situation</p>
                        <p className="text-lg text-gray-500">Stay tuned for updates on your personalized roadmap!</p>
                        <Button
                            variant="outline"
                            className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-white"
                            onClick={() => window.location.reload()}
                        >
                            Refresh Roadmap
                        </Button>
                    </div>
                )}

                <Separator className="w-full" />

                {/* Navigation */}
                {sections.length > 0 && (
                    <div className="flex items-center justify-between w-full">
                        <Button
                            variant="outline"
                            disabled={currentSection === 0}
                            onClick={() => setCurrentSection(prev => Math.max(prev - 1, 0))}
                            className="px-3 py-2 bg-gray-300 hover:bg-yellow-600 text-gray-900 border-none transition-colors duration-300"
                        >
                            Previous
                        </Button>

                        <div className="flex items-center space-x-2 overflow-x-auto">
                            {sections.map((_, index) => (
                                <div
                                    key={index}
                                    onClick={() => setCurrentSection(index)}
                                    className={cn(
                                        "w-3 h-3 rounded-full cursor-pointer transition-colors duration-300",
                                        currentSection === index ? "bg-yellow-500" : "bg-gray-300"
                                    )}
                                />
                            ))}
                        </div>

                        <Button
                            variant="outline"
                            disabled={currentSection === sections.length - 1}
                            onClick={() => setCurrentSection(prev => Math.min(prev + 1, sections.length - 1))}
                            className="px-3 py-2 bg-gray-300 hover:bg-yellow-600 text-gray-900 border-none transition-colors duration-300"
                        >
                            Next
                        </Button>
                    </div>
                )}
            </Card>
        </section>
    );
}
