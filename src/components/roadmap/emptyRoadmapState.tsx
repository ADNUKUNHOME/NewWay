"use client";

import { Loader2 } from "lucide-react";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

export default function EmptyRoadmapState({
    FetchRoadmap,
    loading,
}: {
    FetchRoadmap: () => void;
    loading: boolean;
}) {
    const variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <motion.div variants={variants} initial="hidden" animate="visible">
            <p className="text-2xl font-bold text-gray-400">
                We will build your future beautiful based on your current situation
            </p>
            <p className="text-lg text-gray-500 mt-2">
                Stay tuned for updates on your personalized roadmap!
            </p>
            <Button
                variant="outline"
                className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-white"
                onClick={() => FetchRoadmap()}
            >
                {loading ? <><Loader2 className="animate-spin" /> Fetching Your Roadmap...</> : "Refresh Roadmap"}
            </Button>
        </motion.div>
    );
}
