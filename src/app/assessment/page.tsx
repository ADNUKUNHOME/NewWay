"use client";


import { useState } from "react";
import FirstStep from "@/components/assessment/first-step";
import ResumeSection from "@/components/assessment/resume-section";
import ManualSelection from "@/components/assessment/manual-selection";
import AssessmentForm from "@/components/assessment/form";

export default function Assessment() {
    const [step, setStep] = useState(0);
    const [selectedLevel, setSelectedLevel] = useState("");

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
                    selectedLevel={selectedLevel}
                    setSelectedLevel={setSelectedLevel}
                    setStep={setStep}
                />
            )}
        </section>
    );
}
