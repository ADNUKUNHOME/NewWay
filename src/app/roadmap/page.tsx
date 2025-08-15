'use client';

import { GetRoadmapApiCall } from "@/actions/roadmap/getRoadmap";
import { useEffect, useState } from "react";
import { useAuth } from "../../../AuthContext";
import { toast } from "sonner";
import RoadmapHeader from "@/components/roadmap/roadmapHeader";
import RoadmapCard from "@/components/roadmap/roadmapCard";
import { DUMMY_ROADMAP } from "@/constants/roadmapDummyData";

export default function Roadmap() {
    const [currentSection, setCurrentSection] = useState(0);
    const [sections, setSections] = useState<{ title: string, content: string }[]>([]);
    const [loading, setLoading] = useState(false);
    const [hasTriedRefresh, setHasTriedRefresh] = useState(false);
    const [isRealRoadmap, setIsRealRoadmap] = useState(false);
    const { user } = useAuth();
    const createdBy = user?.email || "";

    // Splitting logic
    const splitRoadmap = (roadmap: string) => {
        const cleanedRoadmap = roadmap.replace(/\*\*(\s*)\*\*/g, "").trim();
        const [intro, ...phases] = cleanedRoadmap.split(/(?=\*\*Phase\s+\d+:)/i);

        return [
            { title: "Introduction", content: intro },
            ...phases.map((p, idx) => ({
                title: `Phase ${idx + 1}`,
                content: p
            }))
        ];
    };

    const FetchRoadmap = () => {
        if (!createdBy) return;
        setLoading(true);
        setHasTriedRefresh(true);

        GetRoadmapApiCall(createdBy).then((data) => {
            if (data.success && data.roadmap?.description) {
                const roadmapText = data.roadmap.description;
                setSections(splitRoadmap(roadmapText));
                setHasTriedRefresh(false);
                setIsRealRoadmap(true);
                console.log("Roadmap data fetched successfully:", data);
            } else {
                console.error("Failed to fetch roadmap:", data.message);
                toast.error(data.message || "Failed to fetch roadmap!");

                // If this is the SECOND time user tries (hasTriedRefresh already true before)
                if (hasTriedRefresh) {
                    setSections(DUMMY_ROADMAP);
                }
            }
            setLoading(false);
        });
    };


    useEffect(() => {
        if (!createdBy) return;
        FetchRoadmap();
    }, [createdBy]);



    return (
        <section className="flex flex-col items-center justify-center min-h-screen mx-auto px-4 sm:px-6 lg:px-8 pt-20">
            <RoadmapHeader
                sections={sections}
                isRealRoadmap={isRealRoadmap}
                FetchRoadmap={FetchRoadmap}
            />
            <RoadmapCard
                sections={sections}
                currentSection={currentSection}
                setCurrentSection={setCurrentSection}
                loading={loading}
                FetchRoadmap={FetchRoadmap}
            />
        </section>
    );
}
