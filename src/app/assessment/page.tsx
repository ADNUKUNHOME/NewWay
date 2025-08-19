"use client";

import { useState } from "react";
import FirstStep from "@/components/assessment/first-step";
import ResumeSection from "@/components/assessment/resume-section";
import ManualSelection from "@/components/assessment/manual-selection";
import AssessmentForm from "@/components/assessment/form";
import { toast } from "sonner";
import { SaveRoadmapApiCall } from "@/actions/roadmap/saveRoadmap";
import { useAuth } from "../../../AuthContext";
import ViewRoadmap from "@/components/assessment/viewRoadmap";

export default function Assessment() {
    const [step, setStep] = useState(0);
    const [selectedLevel, setSelectedLevel] = useState("");
    const [generatedRoadmap, setGeneratedRoadmap] = useState<string | null>(null);
    const { user } = useAuth();
    const [activePhase, setActivePhase] = useState(0);

    const hasRoadmap = user?.hasRoadmap;

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
        });
    };

    return (
        <section className="flex flex-col items-center justify-center min-h-screen w-full gap-6 pt-20 px-4">
            {step === 0 && (
                <FirstStep
                    step={step}
                    setStep={setStep}
                    hasRoadmap={hasRoadmap} />
            )}

            {step === 1 && (
                <ResumeSection
                    step={step}
                    setStep={setStep}
                    setGeneratedRoadmap={setGeneratedRoadmap}
                    hasRoadmap={hasRoadmap}
                />
            )}

            {step === 2 && !selectedLevel && (
                <ManualSelection
                    step={step}
                    setStep={setStep}
                    setSelectedLevel={setSelectedLevel} />
            )}

            {step === 3 && (
                <AssessmentForm
                    setGeneratedRoadmap={setGeneratedRoadmap}
                    selectedLevel={selectedLevel}
                    setSelectedLevel={setSelectedLevel}
                    setStep={setStep}
                    hasRoadmap={hasRoadmap}
                />
            )}

            {step === 4 && (

                <ViewRoadmap
                    generatedRoadmap={generatedRoadmap}
                    setStep={setStep}
                    setActivePhase={setActivePhase}
                    activePhase={activePhase}
                    handleSavingRoadmap={handleSavingRoadmap}
                />
            )}
        </section>
    );
}
