'use client';

import { GetRoadmapApiCall } from "@/actions/roadmap/getRoadmap";
import { useEffect, useState } from "react";
import { useAuth } from "../../../AuthContext";
import { toast } from "sonner";
import RoadmapHeader from "@/components/roadmap/roadmapHeader";
import RoadmapCard from "@/components/roadmap/roadmapCard";

export default function Roadmap() {
    const [currentSection, setCurrentSection] = useState(0);
    const [sections, setSections] = useState<{ title: string, content: string }[]>([]);
    const [loading, setLoading] = useState(false);
    const { user } = useAuth();
    const createdBy = user?.email || "";

    // Splitting logic
    const splitRoadmap = (roadmap: string) => {
        const cleanedRoadmap = roadmap.replace(/\*\*(\s*)\*\*/g, "").trim();
        const [intro, ...phases] = cleanedRoadmap.split(/(?=Phase\s+\d+:)/i);

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
        GetRoadmapApiCall(createdBy).then((data) => {
            if (data.success && data.roadmap?.description) {
                const roadmapText = data.roadmap.description;
                setSections(splitRoadmap(roadmapText));
                console.log("Roadmap data fetched successfully:", data);
                setLoading(false);
            } else {
                setLoading(false);
                toast.error(data.message || "Failed to fetch roadmap!");
                console.error("Failed to fetch roadmap:", data.message);
            }
        });
    }

    // Fetch roadmap
    useEffect(() => {
        FetchRoadmap();
    }, [createdBy]);

    return (
        <section className="flex flex-col items-center justify-center min-h-screen mx-auto px-4 sm:px-6 lg:px-8 pt-20">
            <RoadmapHeader />
            <RoadmapCard
                sections={sections}
                currentSection={currentSection}
                setCurrentSection={setCurrentSection}
                loading={loading}
                FetchRoadmap={FetchRoadmap} />
        </section>
    );
}
