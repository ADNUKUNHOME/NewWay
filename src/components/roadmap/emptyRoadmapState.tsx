import { Button } from "../ui/button";

export default function EmptyRoadmapState({
    FetchRoadmap,
    loading,
}: {
    FetchRoadmap: () => void;
    loading: boolean;
}) {
    return (
        <div className="flex flex-col">
            <p className="text-2xl font-bold text-gray-400">We will build your future beautiful based on your current situation</p>
            <p className="text-lg text-gray-500">Stay tuned for updates on your personalized roadmap!</p>
            <Button
                variant="outline"
                className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-white"
                onClick={() => FetchRoadmap()}
            >
                {
                    loading ? "Fetching Your Roadmap..." : "Refresh Roadmap"
                }
            </Button>
        </div>
    );
}