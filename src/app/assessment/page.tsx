"use client";


import { useState } from "react";
import FirstStep from "@/components/assessment/first-step";
import ResumeSection from "@/components/assessment/resume-section";
import ManualSelection from "@/components/assessment/manual-selection";
import AssessmentForm from "@/components/assessment/form";
import ReactMarkdown from 'react-markdown';
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { SaveRoadmapApiCall } from "@/actions/roadmap/saveRoadmap";
import { useAuth } from "../../../AuthContext";


export default function Assessment() {
    const [step, setStep] = useState(0);
    const [selectedLevel, setSelectedLevel] = useState("");
    const [generatedRoadmap, setGeneratedRoadmap] = useState<string | null>(null);
    const { user } = useAuth();

    const handleSavingRoadmap = () => {
        if (!generatedRoadmap) {
            toast.error("Please complete your assessment to create roadmap!");
            return;
        }

        SaveRoadmapApiCall({
            roadmapName: "My Personalized Roadmap",
            description: generatedRoadmap || "",
            createdBy: user?.email || "anonymous",
        }).then((data) => {
            if (data.success) {
                toast.success(data.message || "Roadmap saved successfully!");
            } else {
                toast.error(data.message || "Failed to save roadmap! Please try again.");
            }

        })


    }

    return (
        <section className="flex flex-col items-center justify-center min-h-screen w-full gap-6 pt-20 px-4">
            {step === 0 && (
                <FirstStep setStep={setStep} />
            )}

            {step === 1 && (
                <ResumeSection setStep={setStep} />
            )}

            {step === 2 && !selectedLevel && (
                <ManualSelection
                    setStep={setStep}
                    setSelectedLevel={setSelectedLevel}
                />
            )}

            {step === 3 && (
                <AssessmentForm
                    setGeneratedRoadmap={setGeneratedRoadmap}
                    selectedLevel={selectedLevel}
                    setSelectedLevel={setSelectedLevel}
                    setStep={setStep}
                />
            )}
            {step === 4 && (
                <div className="w-full max-w-3xl bg-[#0e0e0e] text-white p-8 rounded-xl shadow-lg border border-gray-800">
                    <h2 className="text-3xl font-bold text-center text-green-400 mb-6">
                        🎯 Your Personalized Roadmap
                    </h2>

                    {
                        generatedRoadmap ? (
                            <div className="prose prose-invert prose-headings:text-green-400 prose-p:leading-relaxed prose-li:leading-relaxed prose-ul:pl-6 max-w-none">
                                <ReactMarkdown>{generatedRoadmap}</ReactMarkdown>
                            </div>
                        ) : (
                            <p className="text-gray-400 text-center">No roadmap generated yet.</p>
                        )
                    }
                    <div className="flex justify-between">
                        <Button
                            onClick={() => setStep(0)}
                            className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition"
                        >
                            Start Over
                        </Button>
                        <Button
                            onClick={handleSavingRoadmap}
                            className="ml-4 mt-6 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition"
                        >
                            Save Roadmap
                        </Button>
                    </div>
                </div>
            )}


        </section>
    );
}
