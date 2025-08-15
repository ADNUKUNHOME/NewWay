'use client';

import Link from "next/link";
import { Button } from "../ui/button";
import { useAuth } from "../../../AuthContext";

export default function CtaSection() {
    const { user } = useAuth();
    const hasRoadmap = user?.hasRoadmap;

    const href = user
        ? hasRoadmap
            ? "/roadmap"
            : "/assessment"
        : "/auth/register";

    return (
        <section className="relative flex flex-col items-center justify-center w-full px-4 py-16 text-white">
            <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
                <h2 className="text-4xl md:text-6xl font-bold mb-4">
                    Ready to Get Started?
                </h2>
                <p className="text-lg mb-6">
                    Make it today and make your future safe and well-planned!
                </p>

                <Link href={href}>
                    <Button
                        className="px-6 py-3 text-white bg-gradient-to-r from-yellow-400 to-yellow-700 rounded-2xl
                                   hover:from-yellow-700 hover:to-yellow-400 hover:scale-105 shadow-2xl
                                   transition-transform transition-colors duration-300"
                    >
                        {user ? "Get Started Free" : "Sign Up Free Now"}
                    </Button>
                </Link>
            </div>
        </section>
    );
}
