import { DownloadIcon } from "lucide-react";
import { Button } from "../ui/button";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"

export default function DownloadButton({ roadmapData }: { roadmapData: { title: string; content: string }[] }) {
    const handleDownload = () => {
        // Build plain text content without markdown "**"
        const textContent = roadmapData
            .map(s =>
                `${s.title.replace(/\*\*/g, "")}\n\n${s.content.replace(/\*\*/g, "")}`
            )
            .join("\n\n---\n\n"); // separate sections with a divider

        // Create Blob for TXT
        const blob = new Blob([textContent], { type: "text/plain;charset=utf-8;" });

        // Create a download link
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "roadmap.txt";
        link.click();

        // Cleanup
        URL.revokeObjectURL(url);
    };

    return (
        <Tooltip>
            <TooltipTrigger>
                <Button
                    variant="default"
                    onClick={handleDownload}
                    className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md transition-colors duration-300"
                >
                    <DownloadIcon />
                    <span className="hidden md:flex ml-2">Download</span>
                </Button>
            </TooltipTrigger>
            <TooltipContent>
                <p>Download Roadmap</p>
            </TooltipContent>
        </Tooltip>
    );
}
