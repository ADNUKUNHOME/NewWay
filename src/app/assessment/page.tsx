"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function Assessment() {
    const [step, setStep] = useState(0); // 0: choose upload/manual, 1: upload form, 2: status choose, 3: form
    const [selectedLevel, setSelectedLevel] = useState("");
    const [formData, setFormData] = useState({
        educationDetails: "",
        interests: "",
        goals: "",
        additionalInfo: "",
    });

    const handleInputChange = (e: any) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log({
            method: selectedLevel ? "Manual" : "Resume",
            level: selectedLevel,
            ...formData,
        });
    };

    return (
        <section className="flex flex-col items-center justify-center min-h-screen w-full gap-6 pt-20 px-4">
            {step === 0 && (
                <div className="flex flex-col items-center gap-4">
                    <h1 className="text-3xl font-bold text-white">How would you like to proceed?</h1>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <button
                            onClick={() => setStep(1)}
                            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                        >
                            Upload Resume
                        </button>
                        <button
                            onClick={() => setStep(2)}
                            className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                        >
                            Fill Manually
                        </button>
                    </div>
                </div>
            )}

            {step === 1 && (
                <div className="flex flex-col gap-4 items-center w-full max-w-md">
                    <h2 className="text-xl font-semibold text-white">Upload Your Resume</h2>
                    <Input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        className="text-white"
                        onChange={(e: any) => {
                            const file = e.target.files[0];
                            if (file) {
                                console.log("Resume selected:", file.name);
                            }
                        }}
                    />
                    <button
                        onClick={() => alert("Resume submitted (mock)")}
                        className="mt-4 px-6 py-3 bg-green-600 text-white rounded hover:bg-green-700"
                    >
                        Submit Resume
                    </button>
                    <button
                        onClick={() => setStep(0)}
                        className="text-sm text-blue-400 underline mt-2 hover:text-blue-200"
                    >
                        Go Back
                    </button>
                </div>
            )}

            {step === 2 && !selectedLevel && (
                <div className="flex flex-col items-center gap-4">
                    <h2 className="text-xl font-semibold text-white">Select Your Current Status</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {["10th Pass", "12th Pass", "Graduation", "Undergraduate", "Employee"].map((level) => (
                            <button
                                key={level}
                                onClick={() => {
                                    setSelectedLevel(level);
                                    setStep(3);
                                }}
                                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                            >
                                {level}
                            </button>
                        ))}
                    </div>
                    <button
                        onClick={() => setStep(0)}
                        className="text-sm text-blue-400 underline mt-4 hover:text-blue-200"
                    >
                        Go Back
                    </button>
                </div>
            )}

            {step === 3 && (
                <form
                    onSubmit={handleSubmit}
                    className="w-full max-w-md flex flex-col gap-4"
                >
                    <h2 className="text-xl text-white font-semibold text-center">
                        You selected: {selectedLevel}
                    </h2>

                    {/* Conditional Fields */}
                    {(selectedLevel === "10th Pass" || selectedLevel === "12th Pass") && (
                        <>
                            <Label htmlFor="educationDetails" className="text-white font-semibold">
                                Your School Name & Board
                            </Label>
                            <Input
                                id="educationDetails"
                                name="educationDetails"
                                placeholder="e.g., CBSE, State Board"
                                className="text-white placeholder:text-gray-400"
                                onChange={handleInputChange}
                                required
                            />
                        </>
                    )}

                    {(selectedLevel === "Graduation" || selectedLevel === "Undergraduate") && (
                        <>
                            <Label htmlFor="educationDetails" className="text-white font-semibold">
                                Your College and Degree
                            </Label>
                            <Input
                                id="educationDetails"
                                name="educationDetails"
                                placeholder="e.g., BSc Computer Science - XYZ College"
                                className="text-white placeholder:text-gray-400"
                                onChange={handleInputChange}
                                required
                            />
                        </>
                    )}

                    {selectedLevel === "Employee" && (
                        <>
                            <Label htmlFor="educationDetails" className="text-white font-semibold">
                                Your Current Job Role or Company
                            </Label>
                            <Input
                                id="educationDetails"
                                name="educationDetails"
                                placeholder="e.g., Software Developer at ABC Pvt Ltd"
                                className="text-white placeholder:text-gray-400"
                                onChange={handleInputChange}
                                required
                            />
                        </>
                    )}

                    {/* Common Fields */}
                    <Label htmlFor="interests" className="text-white font-semibold">
                        Your Interests
                    </Label>
                    <Input
                        id="interests"
                        name="interests"
                        placeholder="e.g., Science, Technology, etc."
                        className="text-white placeholder:text-gray-400"
                        onChange={handleInputChange}
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
                    />

                    <button
                        type="submit"
                        className="mt-4 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition"
                    >
                        Submit Assessment
                    </button>

                    <button
                        type="button"
                        onClick={() => {
                            setSelectedLevel("");
                            setStep(2);
                        }}
                        className="text-sm text-blue-400 mt-2 underline hover:text-blue-200"
                    >
                        Go Back
                    </button>
                </form>
            )}
        </section>
    );
}
