import { motion } from "framer-motion";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";

// Type for resource items
type Resource = {
    id: string;
    title: string;
    description: string;
    url: string;
    type: "article" | "video" | "tool";
};


const ResourceGrid = ({ resources }: { resources: Resource[] }) => (
    <motion.div
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
    >
        {resources.map((res, index) => (
            <motion.div
                key={res.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
            >
                <Card
                    className="relative group rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900/60 to-gray-800/40 backdrop-blur-xl border border-white/10 shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 min-h-[250px] hover:scale-[1.03]"
                >
                    <CardContent className="p-6 flex flex-col h-full justify-between">
                        <div>
                            <h2 className="text-xl font-semibold text-white mb-6 group-hover:text-indigo-300 transition-colors">
                                {res.title}
                            </h2>
                            <p className="text-sm text-gray-300">{res.description}</p>
                        </div>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="absolute bottom-10 px-4 left-0 w-full"
                        >
                            <a
                                href={res.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block"
                            >
                                <Button className="w-full bg-indigo-500 hover:bg-indigo-600 text-white rounded-xl shadow-md hover:shadow-lg transition">
                                    View {res.type}
                                </Button>
                            </a>
                        </motion.div>
                    </CardContent>

                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 via-purple-500/10 to-pink-500/20 opacity-0 group-hover:opacity-100 blur-2xl transition pointer-events-none"></div>
                </Card>
            </motion.div>
        ))}
    </motion.div>
);

export default ResourceGrid;