'use client';

import { Button } from "../ui/button";
import { Card } from "../ui/card";
import DeleteButton from "./deleteButton";
import DownloadButton from "./downloadButton";
import ShareButton from "./shareButton";
import UpdateButton from "./updateButton";
import { motion } from "framer-motion";

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
    const containerVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    const buttonContainerVariants = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.1 } }
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={containerVariants}
        >
            <Card className="flex flex-col items-center justify-center bg-black/10 backdrop-blur-xs border-0 border-t border-b border-slate-400 hover:shadow-2xl text-center mt-16 py-5 px-12 sm:px-5 md:px-10 mb-8 w-full sm:w-[500px] md:w-[650px] lg:w-[800px]">
                <motion.h1
                    className="text-4xl font-bold text-yellow-300"
                    variants={itemVariants}
                >
                    Your Personalized Roadmap
                </motion.h1>
                <motion.p
                    className="text-lg text-gray-400"
                    variants={itemVariants}
                >
                    Here is your personalized roadmap based on your assessment results.
                </motion.p>

                {isRealRoadmap ? (
                    <motion.div
                        className="flex items-center justify-between w-full mt-4"
                        variants={buttonContainerVariants}
                    >
                        <motion.div variants={itemVariants}>
                            <DownloadButton roadmapData={sections} />
                        </motion.div>
                        <motion.div variants={itemVariants}>
                            <ShareButton
                                content={sections.map(s => `${s.title}\n\n${s.content}`).join("\n\n")}
                            />
                        </motion.div>
                        <motion.div variants={itemVariants}>
                            <UpdateButton />
                        </motion.div>
                        <motion.div variants={itemVariants}>
                            <DeleteButton />
                        </motion.div>
                    </motion.div>
                ) : (
                    <motion.div variants={itemVariants} className="mt-4">
                        <Button
                            variant="outline"
                            onClick={FetchRoadmap}
                            className="bg-yellow-500 hover:bg-yellow-600 text-white border-none rounded-md"
                            disabled={loading}
                        >
                            {loading ? "Loading to fetch roadmap..." : "Load to fetch roadmap"}
                        </Button>
                    </motion.div>
                )}
            </Card>
        </motion.div>
    )
}
