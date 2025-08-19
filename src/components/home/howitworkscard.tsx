'use client';

import { CardItems } from "@/constants/howItWorksItems";
import { Card } from "../ui/card";
import { motion } from "framer-motion";

const HowItWorksCards = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 max-w-6xl w-full">
            {CardItems.map((item, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ amount: 0.4, once: false }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    whileHover={{ scale: 1.05, transition: { duration: 0.15 } }}
                    whileTap={{ scale: 0.97, transition: { duration: 0.1 } }}
                    className="h-full"
                >
                    <Card
                        className="p-8 h-full flex flex-col justify-start
                                   bg-zinc-900 hover:bg-zinc-800 hover: text-white 
                                   rounded-xl border border-zinc-800 
                            shadow-md hover:shadow-lg"
                    >
                        <item.Icon className="w-10 h-10 mb-4 text-indigo-400" />
                        <h2 className="text-2xl font-bold mb-2">{item.title}</h2>
                        <p className="text-zinc-400 text-sm leading-relaxed flex-1">
                            {item.description}
                        </p>
                    </Card>
                </motion.div>
            ))}
        </div>
    );
};

export default HowItWorksCards;
