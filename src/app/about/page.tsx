"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
    return (
        <div className="min-h-screen text-gray-200 px-6 py-12 mt-20">
            {/* Header Section */}
            <motion.section
                className="text-center max-w-3xl mx-auto mb-16"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h1 className="text-4xl font-bold text-white mb-4">About NewWay</h1>
                <p className="text-lg text-gray-400">
                    NewWay is designed to help students discover their strengths and build
                    a personalized roadmap for success. We combine technology and
                    education to empower every learner to reach their potential.
                </p>
            </motion.section>

            {/* Mission Section */}
            <motion.section
                className="max-w-4xl mx-auto mb-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <h2 className="text-2xl font-semibold text-white mb-4">Our Mission</h2>
                <p className="text-gray-400 leading-relaxed">
                    Our mission is to provide students with clear, practical, and
                    personalized career guidance. By analyzing skills, interests, and
                    goals, we create a roadmap that bridges the gap between education and
                    industry expectations.
                </p>
            </motion.section>

            {/* Values Section */}
            <motion.section
                className="max-w-4xl mx-auto mb-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
            >
                <h2 className="text-2xl font-semibold text-white mb-8">Our Values</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        {
                            title: "Innovation",
                            desc: "We leverage technology to redefine how students approach career planning and education.",
                        },
                        {
                            title: "Empowerment",
                            desc: "Every learner has unique strengths, and we help them discover and maximize their potential.",
                        },
                        {
                            title: "Integrity",
                            desc: "We are committed to delivering honest, reliable, and student-focused solutions.",
                        },
                    ].map((value, i) => (
                        <motion.div
                            key={i}
                            className="rounded-2xl p-6 shadow-md border border-yellow-600/30 bg-black/20 hover:bg-black/40 transition"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.97 }}
                        >
                            <h3 className="text-xl font-bold text-yellow-400 mb-2">
                                {value.title}
                            </h3>
                            <p className="text-gray-400 text-sm">{value.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* Team Section */}
            <motion.section
                className="max-w-4xl mx-auto mb-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
            >
                <h2 className="text-2xl font-semibold text-white mb-8">Meet the Team</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    <motion.div
                        className="p-6 rounded-2xl shadow-md text-center border border-yellow-600/30 bg-black/20 hover:bg-black/40 transition"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                    >
                        <div className="flex items-center justify-center mb-4">
                            <Image
                                src="/logo.png"
                                alt="Your Name"
                                width={96}
                                height={96}
                                className="rounded-full object-cover border-2 border-purple-500 shadow-lg"
                            />
                        </div>                        <h3 className="text-lg font-bold text-white">MUHAMMAD ADNAN K</h3>
                        <p className="text-gray-400 text-sm">
                            Founder & Full Stack Developer
                        </p>
                    </motion.div>
                </div>
            </motion.section>

            {/* Call to Action */}
            <motion.section
                className="text-center max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
            >
                <h2 className="text-2xl font-bold text-white mb-4">
                    Join Us on the NewWay Journey
                </h2>
                <p className="text-gray-400 mb-6">
                    Be part of a future where education and technology work hand in hand
                    to shape brighter careers.
                </p>
                <motion.a
                    href="/contact"
                    className="inline-block px-6 py-3 bg-yellow-600 hover:bg-yellow-700 text-black font-semibold rounded-xl shadow-md transition"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                >
                    Contact Us
                </motion.a>
            </motion.section>
        </div>
    );
}
