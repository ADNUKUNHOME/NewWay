'use client';

import KeyFeaturesList from "./keyfeatureslist";
import { motion } from "framer-motion";

const KeyFeatures = () => {
    return (
        <section className="flex flex-col items-center justify-center mx-6 md:mx-12 lg:mx-24 py-20">
            <motion.div
                className="flex flex-col items-center justify-center text-white mb-12 text-center"
                initial={{ opacity: 0, y: -40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.3, once: false }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="text-4xl md:text-6xl font-bold">Key Features</h1>
                <p className="text-lg text-zinc-400 font-medium my-4 max-w-xl">
                    Explore the powerful features that make our platform unique and effective.
                </p>
            </motion.div>

            <KeyFeaturesList />
        </section>
    );
};

export default KeyFeatures;
