'use client';

import Link from "next/link";
import { Button } from "../ui/button";
import { useAuth } from "../../../AuthContext";
import { motion } from "framer-motion";

export default function CtaSection() {
    const { user } = useAuth();
    const hasRoadmap = user?.hasRoadmap;

    const href = user
        ? hasRoadmap
            ? "/roadmap"
            : "/assessment"
        : "/auth/register";

    return (
        <section className="relative w-full px-4 py-20 bg-gradient-to-b from-zinc-900 via-zinc-800 to-zinc-900 text-white overflow-hidden">
            {/* Decorative background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-yellow-700/20 blur-3xl opacity-30" />

            <motion.div
                className="relative flex flex-col items-center text-center max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                {/* Headline */}
                <h2 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-yellow-300 to-yellow-600 bg-clip-text text-transparent">
                    Ready to Get Started?
                </h2>

                {/* Subtext */}
                <p className="text-lg md:text-xl mb-10 text-gray-300">
                    Turn your plans into reality. Build your roadmap and make your future bright today.
                </p>

                {/* Button */}
                <Link href={href}>
                    <motion.div
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Button
                            className="px-8 py-4 text-lg font-semibold text-white 
                                       bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-2xl
                                       hover:from-yellow-500 hover:to-yellow-700 shadow-xl"
                        >
                            {user ? "Get Started Free" : "Sign Up Free Now"}
                        </Button>
                    </motion.div>
                </Link>
            </motion.div>
        </section>
    );
}
