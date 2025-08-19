import { KeyFeatures } from "@/constants/HomeKeyfeatures";
import { Card } from "../ui/card";
import { motion } from "framer-motion";

const KeyFeaturesList = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {KeyFeatures.map((feature, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: false }}
                    whileHover={{ scale: 1.05, transition: { duration: 0.15 } }}
                    whileTap={{ scale: 0.97, transition: { duration: 0.1 } }}
                    className="h-full"
                >
                    <Card
                        className={`p-8 ${feature.bgColor} ${feature.hoverColor} text-zinc-400 rounded-xl border border-zinc-800 transition duration-500 shadow-md hover:shadow-lg h-full`}
                    >
                        <feature.Icon className="w-10 h-10 mb-4 text-indigo-400" />
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                            {feature.title}
                        </h2>
                        <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
                            {feature.Description}
                        </p>
                    </Card>
                </motion.div>
            ))}
        </div>
    );
};

export default KeyFeaturesList;
