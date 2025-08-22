'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import { Twitter, Linkedin, Instagram, Github } from "lucide-react";
import { useAuth } from "../../../AuthContext";

const Footer = () => {
    const { user } = useAuth();
    const hasRoadmap = user?.hasRoadmap;

    return (
        <footer className="relative bg-black/95 border-t border-yellow-300/30 text-white/80 mt-16">
            <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Brand Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-4"
                >
                    <h2 className="text-2xl font-bold text-yellow-400">NewWay</h2>
                    <p className="text-sm text-gray-400">
                        Empowering students with personalized roadmaps to success.
                    </p>
                </motion.div>

                {/* Quick Links */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2 text-gray-300">
                        <li>
                            <Link href="/about" className="hover:text-yellow-400 transition">About Us</Link>
                        </li>
                        {user ? (
                            hasRoadmap ? (
                                <li>
                                    <Link href="/roadmap" className="hover:text-yellow-400 transition">My Roadmap</Link>
                                </li>
                            ) : (
                                <li>
                                    <Link href="/assessment" className="hover:text-yellow-400 transition">Create Roadmap</Link>
                                </li>
                            )
                        ) : (
                            <li>
                                <Link href="/auth/login" className="hover:text-yellow-400 transition">My Roadmap</Link>
                            </li>
                        )}
                        <li>
                            <Link href="/about" className="hover:text-yellow-400 transition">Services</Link>
                        </li>
                        <li>
                            <Link href="/" className="hover:text-yellow-400 transition">Blog</Link>
                        </li>
                        <li>
                            <Link href="/contact" className="hover:text-yellow-400 transition">Contact</Link>
                        </li>
                    </ul>
                </motion.div>

                {/* Legal */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <h3 className="text-lg font-semibold mb-4">Legal</h3>
                    <ul className="space-y-2 text-gray-300">
                        <li><Link href="/legal" className="hover:text-yellow-400 transition">Privacy Policy</Link></li>
                        <li><Link href="/legal" className="hover:text-yellow-400 transition">Terms of Service</Link></li>
                        <li><Link href="/legal" className="hover:text-yellow-400 transition">Cookie Policy</Link></li>
                    </ul>
                </motion.div>

                {/* Socials */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                    <div className="flex space-x-4">
                        <a href="https://github.com/ADNUKUNHOME" target="_blank" rel="noreferrer"
                            className="p-2 rounded-full bg-white/10 hover:bg-yellow-400 hover:text-black transition">
                            <Github size={20} />
                        </a>
                        <a href="/" target="_blank" rel="noreferrer"
                            className="p-2 rounded-full bg-white/10 hover:bg-yellow-400 hover:text-black transition">
                            <Twitter size={20} />
                        </a>
                        <a href="https://www.linkedin.com/in/muhammad-adnan-a479052a1" target="_blank" rel="noreferrer"
                            className="p-2 rounded-full bg-white/10 hover:bg-yellow-400 hover:text-black transition">
                            <Linkedin size={20} />
                        </a>
                        <a href="https://www.instagram.com/adhnan.abdullah" target="_blank" rel="noreferrer"
                            className="p-2 rounded-full bg-white/10 hover:bg-yellow-400 hover:text-black transition">
                            <Instagram size={20} />
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Bottom Bar */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="border-t border-gray-700/50 text-center py-4 text-sm text-gray-500"
            >
                © {new Date().getFullYear()} NewWay. All rights reserved.
            </motion.div>
        </footer>
    );
};

export default Footer;
