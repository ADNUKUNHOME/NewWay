import { Card } from "../ui/card";
import { Separator } from "../ui/separator";
import EmptyRoadmapState from "./emptyRoadmapState";
import NavigationControls from "./navigationControls";
import ProgressBar from "./progressBar";
import ReactMarkdown from "react-markdown";

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
        <Card className="flex flex-col items-center justify-center bg-black/10 backdrop-blur-xs border-0 border-b border-b-slate-400 hover:shadow-2xl mx-auto text-center pb-0 px-12 sm:px-5 md:px-10 space-y-6 w-full sm:w-[500px] md:w-[650px] lg:w-[800px] min-h-[400px]">
            <ProgressBar
                sections={sections}
                currentSection={currentSection}
            />
            {/* Show content */}
            {totalSections > 0 ? (
                <div className="max-w-2xl mt-8">
                    <h2 className="text-2xl font-bold text-yellow-300 mb-2">
                        {sections[currentSection].title}
                    </h2>
                    <div className="text-lg text-white">
                        <ReactMarkdown
                        >
                            {sections[currentSection].content}
                        </ReactMarkdown>
                    </div>
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