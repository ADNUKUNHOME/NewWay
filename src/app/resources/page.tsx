"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Loader2, Sparkle } from "lucide-react";
import { CreateResourcesFromAI } from "@/actions/resources/fetchResources";
import { useAuth } from "../../../AuthContext";
import { DefaultResources } from "@/constants/defaultResources";
import { toast } from "sonner";
import { motion } from "framer-motion";

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
    const MotionButton = motion(Button);

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

    // Helper UI for rendering resource cards
    const ResourceGrid = ({ resources }: { resources: Resource[] }) => (
        <motion.div
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            {resources.map((res, index) => (
                <motion.div
                    key={res.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                >
                    <Card
                        className="relative group rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900/60 to-gray-800/40 backdrop-blur-xl border border-white/10 shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 min-h-[250px] hover:scale-[1.03]"
                    >
                        <CardContent className="p-6 flex flex-col h-full justify-between">
                            <div>
                                <h2 className="text-xl font-semibold text-white mb-6 group-hover:text-indigo-300 transition-colors">
                                    {res.title}
                                </h2>
                                <p className="text-sm text-gray-300">{res.description}</p>
                            </div>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="absolute bottom-10 px-4 left-0 w-full"
                            >
                                <a
                                    href={res.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block"
                                >
                                    <Button className="w-full bg-indigo-500 hover:bg-indigo-600 text-white rounded-xl shadow-md hover:shadow-lg transition">
                                        View {res.type}
                                    </Button>
                                </a>
                            </motion.div>
                        </CardContent>

                        {/* Glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 via-purple-500/10 to-pink-500/20 opacity-0 group-hover:opacity-100 blur-2xl transition pointer-events-none"></div>
                    </Card>
                </motion.div>
            ))}
        </motion.div>
    );

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

            {/* AI Section */}
            <section className="mb-12">
                {
                    aiResources.length > 0 &&
                    <motion.h2
                        className="text-2xl font-semibold text-indigo-300 mb-4 text-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        🤖 AI Recommended Resources
                    </motion.h2>
                }

                {loading && (
                    <motion.div
                        className="flex items-center justify-center gap-2 mb-6 text-indigo-400"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4 }}
                    >
                        <Loader2 className="animate-spin" /> Fetching AI recommendations...
                    </motion.div>
                )}

                {aiResources.length > 0 ? (
                    <ResourceGrid resources={aiResources} />
                ) : (
                    <motion.div
                        className="flex items-center justify-end w-full"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                    >
                        <MotionButton
                            onClick={fetchAIResources}
                            className="px-5 py-2 rounded-xl bg-blue-600 text-white font-medium shadow-md hover:bg-blue-700 transition"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Sparkle className="animate-pulse" />Fetch Resources from AI
                        </MotionButton>
                    </motion.div>
                )
                }
            </section >

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
