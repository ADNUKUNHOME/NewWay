'use client';

import { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { CreateRoadmapApiCall } from "@/actions/roadmap/createRoadmap";
import { toast } from "sonner";
import AssessmentGuide from "./assessmentGuide";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";

export default function AssessmentForm({
    setGeneratedRoadmap,
    selectedLevel,
    setSelectedLevel,
    setStep,
    hasRoadmap,
}: {
    setGeneratedRoadmap: (roadmap: string | null) => void;
    selectedLevel: string;
    setSelectedLevel: (level: string) => void;
    setStep: (step: number) => void;
    hasRoadmap: boolean | undefined;
}) {

    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        education: selectedLevel,
        interests: "",
        timePerWeek: "",
        goals: "",
        additionalInfo: "",
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        CreateRoadmapApiCall({ formData }).then((data) => {
            setLoading(false);
            if (data.success) {
                toast.success("Roadmap created successfully!");
                setGeneratedRoadmap(data.data.roadmap);
                setStep(4);
            } else {
                toast.error(data.message || "Failed to create roadmap.");
            }
        });
    };

    // Motion variants
    const containerVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    const staggerVariants = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.1 } }
    };

    return (
        <motion.section
            className="flex flex-col items-center min-h-screen px-6 md:px-16 py-12 gap-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={containerVariants}
        >
            <motion.h1
                className="text-4xl md:text-5xl font-extrabold text-center text-white mb-6"
                variants={itemVariants}
            >
                Assessment Form
            </motion.h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
                {/* Guide Section */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                    variants={itemVariants}
                >
                    <AssessmentGuide step={3} />
                </motion.div>

                {/* Form Section */}
                <motion.form
                    onSubmit={handleSubmit}
                    className="w-full max-w-lg flex flex-col gap-5 bg-linear-to-br from-amber-900/50 to-black/60 p-8 rounded-2xl shadow-2xl"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                    variants={staggerVariants}
                >
                    <motion.h2
                        className="text-2xl font-semibold text-white text-center mb-4"
                        variants={itemVariants}
                    >
                        Your Selected Level: <span className="text-indigo-400 font-extrabold">{selectedLevel}</span>
                    </motion.h2>

                    {[
                        { label: "Your Name", name: "name", placeholder: "e.g., John Doe", required: true },
                        { label: "Your Interests", name: "interests", placeholder: "e.g., Science, Technology", required: true },
                        { label: "Time Commitment Per Week", name: "timePerWeek", placeholder: "e.g., 10 hours", required: true },
                        { label: "Your Goals", name: "goals", placeholder: "e.g., Want to become a developer", required: true },
                        { label: "Additional Information", name: "additionalInfo", placeholder: "Anything else you'd like to add", required: false },
                    ].map((field) => (
                        <motion.div key={field.name} className="flex flex-col gap-1" variants={itemVariants}>
                            <Label htmlFor={field.name} className="text-white font-semibold">
                                {field.label}
                            </Label>
                            <Input
                                id={field.name}
                                name={field.name}
                                placeholder={field.placeholder}
                                className=" text-white placeholder:text-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 rounded-lg transition"
                                onChange={handleInputChange}
                                value={formData[field.name as keyof typeof formData]}
                                required={field.required}
                            />
                        </motion.div>
                    ))}

                    {/* Submit Button */}
                    <motion.div variants={itemVariants}>
                        <Button
                            type="submit"
                            className="mt-4 px-6 py-3 w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold rounded-xl shadow-lg transition transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                            disabled={
                                loading ||
                                hasRoadmap ||
                                !formData.name.trim() ||
                                !formData.interests.trim() ||
                                !formData.timePerWeek.trim() ||
                                !formData.goals.trim()
                            }
                        >
                            {loading ? <><Loader2 className="animate-spin" /> Creating Your Roadmap...</> : "Submit Assessment"}
                        </Button>
                    </motion.div>

                    {/* Go Back Button */}
                    <motion.div variants={itemVariants}>
                        <Button
                            type="button"
                            onClick={() => {
                                setSelectedLevel("");
                                setStep(2);
                            }}
                            className="mt-3 px-4 py-3 w-full bg-red-500 hover:bg-red-600 text-white font-semibold rounded-xl shadow transition transform hover:scale-105"
                        >
                            Go Back
                        </Button>
                    </motion.div>
                </motion.form>
            </div>
        </motion.section>
    );
}
