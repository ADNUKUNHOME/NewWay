"use client";

import { useEffect, useState } from "react";
import { CreateResourcesFromAI } from "@/actions/resources/fetchResources";
import { useAuth } from "../../../AuthContext";
import { DefaultResources } from "@/constants/defaultResources";
import { toast } from "sonner";
import { motion } from "framer-motion";
import ResourceGrid from "@/components/resources/resourcesGrid";
import AIResourcesSection from "@/components/resources/aiResourcesSection";

// Type for resource items
type Resource = {
    id: string;
    title: string;
    description: string;
    url: string;
    type: "article" | "video" | "tool";
};

// Default curated resources
const defaultResources = DefaultResources as Resource[];

export default function ResourcesPage() {
    const [aiResources, setAIResources] = useState<Resource[]>([]);
    const [loading, setLoading] = useState(false);
    const { user } = useAuth();
    const userEmail = user?.email || "";

    const fetchAIResources = async () => {
        try {
            setLoading(true);
            const result = await CreateResourcesFromAI(userEmail);

            if (result.success) {
                setAIResources(result.resources as Resource[]);
                toast.success("AI resources fetched successfully!");
            } else {
                console.warn(result.message);
                toast.error(result.message || "Failed to fetch AI resources!");
                setAIResources([]);
            }
        } catch (err) {
            console.error("Error fetching AI resources:", err);
            toast.error("An error occurred while fetching AI resources!");
            setAIResources([]);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchAIResources();
    }, [userEmail]);


    return (
        <motion.div
            className="p-6 mt-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <motion.h1
                className="text-3xl font-bold mb-2 text-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
            >
                📚 <span className=" bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">Resources</span>
            </motion.h1>

            <motion.p
                className="text-gray-400 mb-10 text-center max-w-2xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.7 }}
            >
                Curated and AI-recommended learning materials to guide your journey.
            </motion.p>

            <AIResourcesSection
                aiResources={aiResources}
                loading={loading}
                fetchAIResources={fetchAIResources}
            />

            {/* Default Section */}
            <section>
                {
                    aiResources.length > 0 &&
                    <motion.h2
                        className="text-2xl font-semibold text-pink-300 mb-4 text-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        🌟 Explore More
                    </motion.h2>
                }
                <ResourceGrid resources={defaultResources} />
            </section >
        </motion.div >
    );
}
