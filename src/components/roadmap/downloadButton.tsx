import { Button } from "../ui/button";

export default function DownloadButton() {
    return (
        <Button
            variant="outline"
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md transition-colors duration-300"
        >
            Download Roadmap
        </Button>
    )
}