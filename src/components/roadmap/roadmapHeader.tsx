import { Button } from "../ui/button";
import { Card } from "../ui/card";
import DeleteButton from "./deleteButton";
import DownloadButton from "./downloadButton";
import ShareButton from "./shareButton";
import UpdateButton from "./updateButton";

export default function RoadmapHeader({
    sections,
    isRealRoadmap,
    FetchRoadmap,
    loading
}: {
    sections: { title: string, content: string }[];
    isRealRoadmap: boolean;
    FetchRoadmap: () => void;
    loading: boolean;
}) {
    return (
        <Card className="flex flex-col items-center justify-center bg-black/10 backdrop-blur-xs border-0 border-t border-b border-slate-400 hover:shadow-2xl text-center mt-16  py-5 px-12 sm:px-5 md:px-10 mb-8  w-full sm:w-[500px] md:w-[650px] lg:w-[800px]">
            <h1 className="text-4xl font-bold text-yellow-300">Your Personalized Roadmap</h1>
            <p className="text-lg text-gray-400">Here is your personalized roadmap based on your assessment results.</p>
            {isRealRoadmap ?
                (
                    <div className="flex items-center justify-between w-full">
                        <DownloadButton roadmapData={sections} />
                        <ShareButton
                            content={sections.map(s => `${s.title}\n\n${s.content}`).join("\n\n")}
                        />
                        <UpdateButton />
                        <DeleteButton />
                    </div>
                ) : (
                    <Button
                        variant="outline"
                        onClick={FetchRoadmap}
                        className="bg-yellow-500 hover:bg-yellow-600 text-white border-none rounded-md"
                        disabled={loading}
                    >
                        {
                            loading ?
                                "Loading to fetch roadmap..."
                                : "Load to fetch roadmap"
                        }
                    </Button>
                )
            }
        </Card>
    )
}