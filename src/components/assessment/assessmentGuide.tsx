import { Lightbulb, FileText, PenTool, ClipboardList, MapPin } from "lucide-react";

const stepGuides: {
    title: string;
    description: string;
    points?: string[];
    icon: React.ReactNode;
}[] = [
        {
            title: "Choose Your Path",
            description: "Decide how you want to provide your information. Upload your resume for automatic extraction or fill your profile manually.",
            points: [
                "Automatic extraction: Upload PDF/DOCX and get a roadmap instantly.",
                "Manual entry: Enter your details step-by-step at your own pace."
            ],
            icon: <Lightbulb className="w-12 h-12 text-indigo-500" />
        },
        {
            title: "Upload Your Resume",
            description: "Provide your resume in PDF or DOCX format and we’ll extract your personal, educational, and professional details automatically.",
            points: [
                "No manual typing needed.",
                "Saves time and reduces errors.",
                "Perfect for students or working professionals."
            ],
            icon: <FileText className="w-12 h-12 text-indigo-500" />
        },
        {
            title: "Fill Manually",
            description: "Enter your education, skills, interests, and goals manually to generate a personalized roadmap.",
            points: [
                "Ideal if you don't have a resume.",
                "You control exactly what information you provide.",
                "Step-by-step guidance ensures nothing is missed."
            ],
            icon: <PenTool className="w-12 h-12 text-indigo-500" />
        },
        {
            title: "Assessment Form",
            description: "Provide additional details about your learning style, availability, and career goals to further tailor your roadmap.",
            points: [
                "Specify weekly time commitment.",
                "Mention your interests and career objectives.",
                "Creates a realistic, personalized roadmap."
            ],
            icon: <ClipboardList className="w-12 h-12 text-indigo-500" />
        },
        {
            title: "Your Roadmap",
            description: "Review your personalized roadmap, navigate through phases, and save it for future reference.",
            points: [
                "Visual representation of your learning journey.",
                "Easy navigation through different phases.",
                "Option to save and revisit anytime."
            ],
            icon: <MapPin className="w-12 h-12 text-indigo-500" />
        },
    ];

export default function AssessmentGuide({ step }: { step: number }) {
    const guide = stepGuides[step];

    return (
        <div className="hidden md:flex flex-col justify-center min-w-[350px] p-8 bg-gradient-to-br from-indigo-900 via-gray-900 to-gray-800 rounded-2xl shadow-2xl text-white">
            <div className="flex items-center mb-6 space-x-4">
                {guide.icon}
                <h2 className="text-3xl font-extrabold text-white">
                    {guide.title.split(" ").map((word, idx) => (
                        <span key={idx} className={idx % 2 ? "text-indigo-400" : ""}>{word} </span>
                    ))}
                </h2>
            </div>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6">{guide.description}</p>
            {guide.points && (
                <ul className="space-y-3">
                    {guide.points.map((point, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                            <span className="text-indigo-400 mt-1 text-xl">•</span>
                            <p className="text-gray-300 text-base md:text-lg">{point}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}