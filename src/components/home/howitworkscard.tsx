import { FileIcon, Compass, Headset } from "lucide-react";
import { Card } from "../ui/card";

const CardItems = [
    {
        title: "Create Your Profile",
        description: "Sign up and set your learning goals to generate your personalized AI roadmap.",
        Icon: FileIcon,
        bgColor: "bg-zinc-900",
        hoverColor: "hover:bg-zinc-800",
    },
    {
        title: "Follow the Roadmap",
        description: "Get step-by-step guidance with recommended resources tailored to your goals.",
        Icon: Compass,
        bgColor: "bg-zinc-900",
        hoverColor: "hover:bg-zinc-800",
    },
    {
        title: "Get Expert Help",
        description: "Need support? Reach out anytime for expert help and community feedback.",
        Icon: Headset,
        bgColor: "bg-zinc-900",
        hoverColor: "hover:bg-zinc-800",
    },
];

const HowItWorksCards = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 max-w-6xl w-full">
            {CardItems.map((item, index) => (
                <Card
                    key={index}
                    className={`p-8 ${item.bgColor} ${item.hoverColor} text-white rounded-xl border border-zinc-800 transition-all duration-300 shadow-md hover:shadow-lg`}
                >
                    <item.Icon className="w-10 h-10 mb-4 text-indigo-400" />
                    <h2 className="text-2xl font-bold mb-2">{item.title}</h2>
                    <p className="text-zinc-400 text-sm leading-relaxed">{item.description}</p>
                </Card>
            ))}
        </div>
    );
};

export default HowItWorksCards;
