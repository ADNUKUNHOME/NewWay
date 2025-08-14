import { Button } from "../ui/button";

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
        <Button
            variant="outline"
            onClick={handleDownload}
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md transition-colors duration-300"
        >
            Download Roadmap
        </Button>
    );
}
