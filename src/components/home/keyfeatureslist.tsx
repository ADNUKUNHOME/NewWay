import { GraduationCap, HandHeart, SearchIcon } from "lucide-react";
import { Card } from "../ui/card";

const KeyFeatures = [
    {
        title: "Personalized Learning",
        Description: "Tailored learning paths based on your interests and goals, ensuring you get the most relevant content.",
        Icon: GraduationCap,
        bgColor: "bg-navi-900",
        hoverColor: "hover:bg-indigo-800",
    },
    {
        title: "Get The Best Resources",
        Description: "Access a curated list of the best resources, tools, and platforms to enhance your learning experience.",
        Icon: SearchIcon,
        bgColor: "bg-navi-900",
        hoverColor: "hover:bg-indigo-800",
    },
    {
        title: "Community Support",
        Description: "Join a vibrant community of learners and experts who can provide support, feedback, and motivation.",
        Icon: HandHeart,
        bgColor: "bg-navi-900",
        hoverColor: "hover:bg-indigo-800",
    }
    ,
    {
        title: "Expert Guidance",
        Description: "Get insights and advice from industry experts to help you navigate your learning journey.",
        Icon: GraduationCap,
        bgColor: "bg-navi-900",
        hoverColor: "hover:bg-indigo-800",
    },
    {
        title: "Interactive Learning",
        Description: "Engage with interactive content that makes learning more effective and enjoyable.",
        Icon: SearchIcon,
        bgColor: "bg-navi-900",
        hoverColor: "hover:bg-indigo-800",
    },
    {
        title: "Progress Tracking",
        Description: "Monitor your learning progress with tools that help you stay on track and motivated.",
        Icon: HandHeart,
        bgColor: "bg-navi-900",
        hoverColor: "hover:bg-indigo-800",
    }
]

const KeyFeaturesList = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
                KeyFeatures.map((feature, index) => (
                    <Card className={`p-8 ${feature.bgColor} ${feature.hoverColor} text-zinc-400 rounded-xl border border-zinc-800 transition-all duration-300 shadow-md hover:shadow-lg`} key={index}>
                        <feature.Icon className="w-10 h-10 mb-4 text-indigo-400" />
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{feature.title}</h2>
                        <p className="text-zinc-400 text-sm md:text-base leading-relaxed" >{feature.Description}</p>
                    </Card>
                ))
            }

        </div>
    )
}

export default KeyFeaturesList;