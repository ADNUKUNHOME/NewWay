import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function NavigationControls({
    currentSection,
    setCurrentSection,
    sections,
    totalSections = sections.length,
}: {
    currentSection: number;
    setCurrentSection: React.Dispatch<React.SetStateAction<number>>;
    sections: { title: string, content: string }[];
    totalSections: number;
}) {
    return (
        <div className="flex items-center justify-between w-full mb-3">
            <Button
                variant="outline"
                disabled={currentSection === 0}
                onClick={() => setCurrentSection(prev => Math.max(prev - 1, 0))}
                className="px-3 py-3 bg-gray-300 hover:bg-yellow-600 text-gray-900 rounded-full border-none transition-colors duration-300"
            >
                <ChevronLeft />
            </Button>

            <div className="flex items-center space-x-2 overflow-x-auto">
                {sections.map((_, index) => (
                    <div
                        key={index}
                        onClick={() => setCurrentSection(index)}
                        className={cn(
                            "w-3 h-3 sm:w-2 md:w-3 sm:h-2 md:h-3 rounded-full cursor-pointer transition-colors duration-300",
                            currentSection === index ? "bg-yellow-500" : "bg-gray-300"
                        )}
                    />
                ))}
            </div>

            <Button
                variant="outline"
                disabled={currentSection === totalSections - 1}
                onClick={() => setCurrentSection(prev => Math.min(prev + 1, totalSections - 1))}
                className="px-3 py-3 bg-gray-300 hover:bg-yellow-600 text-gray-900 rounded-full border-none transition-colors duration-300"
            >
                <ChevronRight />
            </Button>
        </div>
    );
}