import { motion } from "framer-motion";
import { Loader2, Sparkle } from "lucide-react";
import ResourceGrid from "./resourcesGrid";
import { Button } from "../ui/button";

type Resource = {
    id: string;
    title: string;
    description: string;
    url: string;
    type: "article" | "video" | "tool";
};


export default function AIResourcesSection({
    aiResources,
    loading,
    fetchAIResources,
}: {
    aiResources: Resource[];
    loading: boolean;
    fetchAIResources: () => void;
}) {
    const MotionButton = motion(Button);
    return (
        <>
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
        </>
    )
}