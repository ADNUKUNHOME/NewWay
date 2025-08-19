'use client';

import { Button } from "../ui/button";
import AssessmentGuide from "./assessmentGuide";
import { motion } from "framer-motion";

export default function ManualSelection({
    step,
    setStep,
    setSelectedLevel
}: {
    step: number;
    setStep: (step: number) => void;
    setSelectedLevel: (level: string) => void;
}) {

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <motion.div
            className="flex flex-col items-center gap-12 px-6 md:px-16 py-12 min-h-screen"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={containerVariants}
        >
            <motion.h1
                className="text-4xl md:text-5xl font-extrabold text-center text-white mb-8"
                variants={itemVariants}
            >
                Manual Profile Setup
            </motion.h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
                {/* Guide Section */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                    variants={itemVariants}
                >
                    <AssessmentGuide step={step} />
                </motion.div>

                {/* Selection Section */}
                <motion.div
                    className="flex flex-col gap-6 bg-linear-to-br from-amber-900/50 to-black/60 p-8 rounded-2xl shadow-2xl"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                    variants={itemVariants}
                >
                    <h2 className="text-2xl font-semibold text-center text-white mb-4">
                        Select Your Current Status
                    </h2>

                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.2 }}
                        variants={{
                            hidden: {},
                            visible: { transition: { staggerChildren: 0.1 } }
                        }}
                    >
                        {["10th Pass", "12th Pass", "Graduation", "Undergraduate", "Employee"].map((level) => (
                            <motion.div key={level} variants={itemVariants}>
                                <Button
                                    onClick={() => {
                                        setSelectedLevel(level);
                                        setStep(3);
                                    }}
                                    className="px-6 py-4 w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-semibold rounded-xl shadow hover:from-yellow-600 hover:to-yellow-700 transition transform hover:scale-105"
                                >
                                    {level}
                                </Button>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.2 }}
                        variants={itemVariants}
                    >
                        <Button
                            onClick={() => setStep(0)}
                            className="mt-4 px-4 py-3 w-full bg-red-500 text-white rounded-lg font-medium shadow hover:bg-red-600 hover:text-red-100 transition transform hover:scale-105"
                        >
                            Go Back
                        </Button>
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    );
}
