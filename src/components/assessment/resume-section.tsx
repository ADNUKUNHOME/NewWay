'use client';

import { useState, DragEvent } from "react";
import { Button } from "../ui/button";
import { FileUp, Loader2 } from "lucide-react";
import { ResumeRoadmapCreation } from "@/actions/roadmap/resumeRoadmapCreation";
import { toast } from "sonner";
import AssessmentGuide from "./assessmentGuide";
import { motion } from "framer-motion";

export default function ResumeSection({
    step,
    setStep,
    setGeneratedRoadmap,
    hasRoadmap,
}: {
    step: number;
    setStep: (step: number) => void;
    setGeneratedRoadmap: (roadmap: string | null) => void;
    hasRoadmap: boolean | undefined;
}) {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null;
        if (file) setSelectedFile(file);
    };

    const handleDrop = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(false);
        const file = e.dataTransfer.files?.[0] || null;
        if (file) setSelectedFile(file);
    };

    const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => setIsDragging(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        ResumeRoadmapCreation({ selectedFile }).then((data) => {
            setLoading(false);
            if (data.success) {
                toast.success("Roadmap created successfully!");
                setSelectedFile(null);
                setGeneratedRoadmap(data.roadmap);
                setStep(4);
            } else {
                toast.error("Failed to create roadmap. Please try again later!");
            }
        });
    };

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <motion.div
            className="flex flex-col gap-8 w-full px-6 md:px-16 py-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={containerVariants}
        >
            <motion.h1
                className="text-4xl md:text-5xl font-extrabold text-center text-white mb-8"
                variants={cardVariants}
            >
                Resume Upload for Roadmap Generation
            </motion.h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
                {/* Guide Section */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                    variants={cardVariants}
                >
                    <AssessmentGuide step={step} />
                </motion.div>

                {/* Resume Upload Section */}
                <motion.div
                    className="flex flex-col gap-6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                    variants={cardVariants}
                >
                    <h2 className="text-2xl font-semibold text-center text-white">
                        Upload Your Resume
                    </h2>

                    {/* Drag & Drop Card */}
                    <motion.div
                        className={`w-full p-6 rounded-xl transition cursor-pointer flex flex-col items-center justify-center gap-3 border-2
              ${isDragging ? "border-yellow-400 bg-yellow-100/10" : "border-dashed border-gray-500"}
              hover:border-yellow-400 hover:scale-[1.02] shadow-lg`}
                        onDrop={handleDrop}
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                        onClick={() => document.getElementById("resumeInput")?.click()}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.5 }}
                    >
                        <FileUp className="w-12 h-12 text-yellow-400" />
                        <p className="text-white font-medium text-center">
                            {selectedFile ? selectedFile.name : "Drag & drop your resume here"}
                        </p>
                        <p className="text-sm text-gray-400 text-center">
                            or click to browse (.pdf, .docx)
                        </p>
                        <input
                            id="resumeInput"
                            type="file"
                            accept=".pdf,.docx"
                            className="hidden"
                            onChange={handleFileChange}
                        />
                    </motion.div>

                    {/* Generate Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <Button
                            onClick={handleSubmit}
                            className="mt-4 px-6 py-3 w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold rounded-xl shadow-lg transition transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                            disabled={!selectedFile || loading || hasRoadmap}
                        >
                            {loading ? <><Loader2 className="animate-spin" /> Generating Roadmap...</> : "Generate Roadmap"}
                        </Button>
                    </motion.div>

                    {/* Go Back Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.5, delay: 0.15 }}
                    >
                        <Button
                            onClick={() => setStep(0)}
                            className="mt-3 px-4 py-3 w-full bg-red-500 hover:bg-red-600 text-white font-semibold rounded-xl shadow transition transform hover:scale-105"
                        >
                            Go Back
                        </Button>
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    );
}
