'use client';

import { SendEmail } from "@/actions/contact/contact";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";

export default function Contact() {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        await SendEmail({ formData }).then((data) => {
            console.log("Response from SendEmail:", data);
            setLoading(false);
            if (data.success) {
                toast.success(data.message || "Message sent successfully!");
                setFormData({ name: "", email: "", message: "" });
            } else {
                toast.error(data.message || "Failed to send message. Please try again.");
            }
        });
    }

    const containerVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <section className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center px-6 py-16 mt-20">
            <motion.div
                className="max-w-5xl w-full grid md:grid-cols-2 gap-12"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                {/* Left Section - Intro */}
                <motion.div
                    className="flex flex-col justify-center"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-white">
                        Let’s Build the <span className="text-indigo-500">New Way</span> Together
                    </h1>
                    <p className="text-gray-400 mt-6 leading-relaxed">
                        Have a question, idea, or partnership proposal?
                        We’d love to hear from you. Fill out the form or reach us directly.
                    </p>

                    <div className="mt-8 space-y-4">
                        <div className="flex items-center space-x-3 text-gray-300">
                            <span className="text-indigo-500 text-xl">📧</span>
                            <p>brazlowseez5@gmail.com</p>
                        </div>
                        <div className="flex items-center space-x-3 text-gray-300">
                            <span className="text-indigo-500 text-xl">📞</span>
                            <p>+91 79029 17304</p>
                        </div>
                        <div className="flex items-center space-x-3 text-gray-300">
                            <span className="text-indigo-500 text-xl">📍</span>
                            <p>Kerala, India</p>
                        </div>
                    </div>
                </motion.div>

                {/* Right Section - Form */}
                <motion.div
                    className="bg-gray-800 p-8 rounded-2xl shadow-lg"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <form
                        className="space-y-6"
                        onSubmit={handleSubmit}
                    >
                        <div>
                            <Label className="block text-sm text-gray-400">Name</Label>
                            <Input
                                type="text"
                                name="name"
                                placeholder="Your full name"
                                onChange={handleInputChange}
                                value={formData.name}
                                className="w-full mt-2 px-4 py-3 rounded-xl bg-gray-900 border border-gray-700 text-gray-200 focus:ring-2 focus:ring-indigo-500 outline-none"
                            />
                        </div>

                        <div>
                            <Label className="block text-sm text-gray-400">Email <span className="text-red-600">*</span></Label>
                            <Input
                                type="email"
                                name="email"
                                placeholder="your@email.com"
                                onChange={handleInputChange}
                                value={formData.email}
                                className="w-full mt-2 px-4 py-3 rounded-xl bg-gray-900 border border-gray-700 text-gray-200 focus:ring-2 focus:ring-indigo-500 outline-none"
                                required
                            />
                        </div>

                        <div>
                            <Label className="block text-sm text-gray-400">Message</Label>
                            <textarea
                                name="message"
                                placeholder="Write your message here..."
                                onChange={handleInputChange}
                                value={formData.message}
                                className="w-full mt-2 px-4 py-3 rounded-xl bg-gray-900 border border-gray-700 text-gray-200 focus:ring-2 focus:ring-indigo-500 outline-none"
                            ></textarea>
                        </div>

                        <Button
                            type="submit"
                            className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold shadow-md transition"
                        >
                            {loading ? <><Loader2 className="animate-spin" /> Sending...</> : "Send Message"}
                        </Button>
                    </form>
                </motion.div>
            </motion.div>
        </section>
    );
}
