'use client';

import HowItWorksCards from "./howitworkscard";
import { motion } from "framer-motion";

const HowItWorks = () => {
    return (
        <section className="relative w-full min-h-screen flex flex-col items-center justify-center px-4 py-20">
            {/* Heading */}
            <motion.div
                className="flex flex-col items-center justify-center text-white mb-12 text-center"
                initial={{ opacity: 0, y: -40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.3, once: false }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="text-4xl md:text-6xl font-bold">How It Works</h1>
                <p className="text-lg text-zinc-400 font-medium mt-4 max-w-xl">
                    Your AI-powered guide to becoming a professional — built around your goals and skills.
                </p>
            </motion.div>

            {/* Cards */}
            <HowItWorksCards />
        </section>
    );
};

export default HowItWorks;
