'use client';

import { Upload, UserRoundPen } from "lucide-react";
import Link from "next/link";
import AssessmentGuide from "./assessmentGuide";
import { motion } from "framer-motion";
import { easeOut } from "framer-motion";


export default function FirstStep({
    step,
    setStep,
    hasRoadmap,
}: {
    step: number;
    setStep: (step: number) => void;
    hasRoadmap: boolean | undefined;
}) {

    // Animation variants

    const containerVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } }
    };

    const staggerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.15, duration: 0.5, ease: easeOut }
        })
    };
    return (
        <motion.div
            className="flex flex-col items-center gap-12 px-6 md:px-16 py-12 min-h-screen"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={containerVariants}
        >
            <motion.h1
                className="text-4xl md:text-5xl font-extrabold text-center text-white mb-8"
                variants={staggerVariants}
                custom={0}
            >
                How would you like to proceed?
            </motion.h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
                {/* Guide Section */}
                <motion.div
                    variants={staggerVariants}
                    custom={1}
                >
                    <AssessmentGuide step={step} />
                </motion.div>

                {/* Options Section */}
                <motion.div
                    className="flex flex-col gap-6"
                    variants={staggerVariants}
                    custom={2}
                >
                    {/* Roadmap Warning */}
                    {hasRoadmap && (
                        <motion.div
                            className="flex items-center bg-amber-900/30 hover:bg-amber-900/50 px-6 py-4 text-amber-200 border border-dashed border-amber-400 rounded-xl w-full transition"
                            variants={staggerVariants}
                            custom={3}
                        >
                            <span className="mr-4 text-3xl">⚠</span>
                            <span className="text-sm md:text-base">
                                You already have a roadmap! Edit your existing roadmap instead. Go to{" "}
                                <Link href="/roadmap" className="font-bold underline text-amber-400">Roadmap</Link> to edit.
                            </span>
                        </motion.div>
                    )}

                    {/* Upload Resume */}
                    <motion.div
                        onClick={() => setStep(1)}
                        className="flex flex-col items-center bg-gradient-to-r from-yellow-500 to-yellow-600 px-6 py-5 text-white rounded-xl w-full shadow-lg hover:from-yellow-600 hover:to-yellow-700 transition transform hover:scale-[1.02] cursor-pointer"
                        variants={staggerVariants}
                        custom={4}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                    >
                        <div className="flex items-center mb-1">
                            <Upload className="w-6 h-6" />
                            <span className="ml-2 font-bold text-lg md:text-xl">Upload Resume</span>
                        </div>
                        <p className="text-sm md:text-base text-yellow-100 text-center">
                            Upload a <span className="font-semibold">PDF</span> or <span className="font-semibold">DOCX</span> file and we’ll extract your details automatically.
                        </p>
                    </motion.div>

                    {/* Divider */}
                    <motion.div
                        className="flex w-full items-center text-center text-white my-2"
                        variants={staggerVariants}
                        custom={5}
                    >
                        <div className="w-1/2 h-0.5 bg-gray-600" />
                        <p className="font-bold mx-2">or</p>
                        <div className="w-1/2 h-0.5 bg-gray-600" />
                    </motion.div>

                    {/* Fill Manually */}
                    <motion.div
                        onClick={() => setStep(2)}
                        className="flex flex-col items-center bg-gray-100 px-6 py-5 text-black rounded-xl w-full shadow hover:bg-gray-200 transition transform hover:scale-[1.02] cursor-pointer"
                        variants={staggerVariants}
                        custom={6}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                    >
                        <div className="flex items-center mb-1">
                            <UserRoundPen className="w-6 h-6" />
                            <span className="ml-2 font-bold text-lg md:text-xl">Fill Manually</span>
                        </div>
                        <p className="text-sm md:text-base text-gray-700 text-center">
                            Enter your information step-by-step at your own pace.
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    );
}
