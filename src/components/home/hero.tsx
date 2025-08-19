'use client';

import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useAuth } from "../../../AuthContext";
import { motion } from "framer-motion";

export default function HomeHero() {
    const { user } = useAuth();
    const hasRoadmap = user?.hasRoadmap;

    return (
        <section className="relative w-full h-screen overflow-hidden">
            <motion.div
                className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <motion.h1
                    className="text-4xl md:text-6xl font-bold"
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Welcome to <span className="text-amber-400">NewWay</span>
                </motion.h1>

                <motion.p
                    className="mt-4 text-lg text-gray-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    Personalized AI Roadmaps for Students
                </motion.p>

                <Link
                    href={cn(user ? (hasRoadmap ? "/roadmap" : "/assessment") : "/auth/login")}
                    className="mt-6"
                >
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button className="mt-8 px-10 py-3 bg-slate-200 hover:bg-white hover:no-underline text-black font-semibold rounded-lg transition-all duration-300">
                            Get Started
                            <ArrowRight className="ml-2 inline-block" />
                        </Button>
                    </motion.div>
                </Link>
            </motion.div>
        </section>
    );
}
