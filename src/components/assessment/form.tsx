'use client';

import { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { CreateRoadmapApiCall } from "@/actions/roadmap/createRoadmap";
import { toast } from "sonner";

export default function AssessmentForm({
    setGeneratedRoadmap,
    selectedLevel,
    setSelectedLevel,
    setStep,
}: {
    setGeneratedRoadmap: (roadmap: string | null) => void;
    selectedLevel: string;
    setSelectedLevel: (level: string) => void;
    setStep: (step: number) => void;
}) {

    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        education: selectedLevel,
        interests: "",
        timePerWeek: "",
        goals: "",
        additionalInfo: "",
    });

    const handleInputChange = (e: any) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        setLoading(true);
        CreateRoadmapApiCall({ formData }).then((data) => {
            if (data.success) {
                setLoading(false);
                toast.success("Roadmap created successfully!");
                console.log("Roadmap created successfully:", data);
                setGeneratedRoadmap(data.data.roadmap);
                setStep(4);
            } else {
                setLoading(false);
                toast.error(data.message || "Failed to create roadmap.");
                console.error("Error creating roadmap:", data);
            }
        })
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="w-full max-w-md flex flex-col gap-4 mt-10"
        >
            <h2 className="text-xl text-white font-semibold text-center">
                You selected: {selectedLevel}
            </h2>



            {/* Common Fields */}

            <Label htmlFor="name" className="text-white font-semibold">
                Your Name
            </Label>
            <Input
                id="name"
                name="name"
                placeholder="e.g., John Doe"
                className="text-white placeholder:text-gray-400"
                onChange={handleInputChange}
                value={formData.name}
                required
            />

            <Label htmlFor="interests" className="text-white font-semibold">
                Your Interests
            </Label>
            <Input
                id="interests"
                name="interests"
                placeholder="e.g., Science, Technology, etc."
                className="text-white placeholder:text-gray-400"
                onChange={handleInputChange}
                value={formData.interests}
                required
            />

            <Label htmlFor="timePerWeek" className="text-white font-semibold">
                Time Commitment Per Week
            </Label>
            <Input
                id="timePerWeek"
                name="timePerWeek"
                placeholder="e.g., 10 hours"
                className="text-white placeholder:text-gray-400"
                onChange={handleInputChange}
                value={formData.timePerWeek}
                required
            />

            <Label htmlFor="goals" className="text-white font-semibold">
                Your Goals
            </Label>
            <Input
                id="goals"
                name="goals"
                placeholder="e.g., Want to become a developer"
                className="text-white placeholder:text-gray-400"
                onChange={handleInputChange}
                value={formData.goals}
                required
            />

            <Label htmlFor="additionalInfo" className="text-white font-semibold">
                Additional Information
            </Label>
            <Input
                id="additionalInfo"
                name="additionalInfo"
                placeholder="Anything else you'd like to add"
                className="text-white placeholder:text-gray-400"
                onChange={handleInputChange}
                value={formData.additionalInfo}
            />

            <Button
                type="submit"
                className="mt-4 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition"
                disabled={
                    loading ||
                    !formData.name.trim() ||
                    !formData.interests.trim() ||
                    !formData.timePerWeek.trim() ||
                    !formData.goals.trim()
                }
            >
                {
                    loading ?
                        "Creating Your Roadmap..."
                        : "Submit Assessment"
                }
            </Button>

            <Button
                type="button"
                onClick={() => {
                    setSelectedLevel("");
                    setStep(2);
                }}
                className="text-md text-white mt-2 hover:text-blue-200 bg-red-500 px-2 py-2 rounded-lg transition hover:bg-red-700"
            >
                Go Back
            </Button>
        </form>
    )
}