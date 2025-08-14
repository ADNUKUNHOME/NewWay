import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Separator } from "../ui/separator";
import EmptyRoadmapState from "./emptyRoadmapState";
import NavigationControls from "./navigationControls";

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
    return (
        <Card className="flex flex-col items-center justify-center bg-black/10 backdrop-blur-xs border-4 border-black hover:shadow-2xl mx-auto text-center pb-5 px-12 sm:px-5 md:px-10 space-y-6">
            {/* Show content */}
            {totalSections > 0 ? (
                <div className="max-w-2xl">
                    <h2 className="text-2xl font-bold text-yellow-300 mb-2">
                        {sections[currentSection].title}
                    </h2>
                    <p className="text-lg text-white whitespace-pre-line">
                        {sections[currentSection].content}
                    </p>
                </div>
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