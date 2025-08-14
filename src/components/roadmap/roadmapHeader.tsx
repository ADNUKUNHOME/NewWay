import { Button } from "../ui/button";
import { Card } from "../ui/card";
import DeleteButton from "./deleteButton";
import DownloadButton from "./downloadButton";
import ShareButton from "./shareButton";
import UpdateButton from "./updateButton";

export default function RoadmapHeader() {
    return (
        <Card className="flex flex-col items-center justify-center max-w-2xl bg-black/10 backdrop-blur-xs border-4 border-black hover:shadow-2xl mx-auto text-center py-5 px-12 sm:px-5 md:px-10 mb-8">
            <h1 className="text-4xl font-bold text-yellow-300">Your Personalized Roadmap</h1>
            <p className="text-lg text-gray-400">Here is your personalized roadmap based on your assessment results.</p>
            <div className="flex items-center justify-between mt-4 w-full">
                <DownloadButton />
                <ShareButton />
            </div>
            <div className="flex items-center justify-between mt-4 w-full">
                <UpdateButton />
                <DeleteButton />
            </div>
        </Card>
    )
}