import { useState, DragEvent } from "react";
import { Button } from "../ui/button";
import { FileUp } from "lucide-react";
import { ResumeRoadmapCreation } from "@/actions/roadmap/resumeRoadmapCreation";
import { toast } from "sonner";

export default function ResumeSection({
    setStep,
    setGeneratedRoadmap,
}: {
    setStep: (step: number) => void;
    setGeneratedRoadmap: (roadmap: string | null) => void;
}) {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null;
        if (file) {
            console.log("Resume selected:", file.name);
            setSelectedFile(file);
        } else {
            setSelectedFile(null);
        }
    };

    const handleDrop = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(false);
        const file = e.dataTransfer.files?.[0] || null;
        if (file) setSelectedFile(file);
    };

    const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => setIsDragging(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        ResumeRoadmapCreation({ selectedFile }).then((data) => {
            if (data.success) {
                console.log("Roadmap created successfully:", data);
                toast.success("Roadmap created successfully!");
                setLoading(false);
                setSelectedFile(null);
                setGeneratedRoadmap(data.roadmap);
                setStep(4);
            } else {
                console.error("Error generating roadmap from resume:", data);
                setLoading(false);
                toast.error(data.message || "Failed to create roadmap.");
            }
        })
    };

    return (
        <div className="flex flex-col gap-4 items-center w-full max-w-md">
            <h2 className="text-xl font-semibold text-white">Upload Your Resume</h2>

            {/* Drag & Drop Zone */}
            <div
                className={`w-full p-6 border-2 rounded-lg transition cursor-pointer hover:border-yellow-400
                    ${isDragging ? "border-yellow-400 bg-yellow-100/10" : "border-dashed border-gray-400"}
                    flex flex-col items-center justify-center gap-2`}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onClick={() => document.getElementById("resumeInput")?.click()}
            >
                <FileUp className="w-10 h-10 text-yellow-400" />
                <p className="text-white font-medium">
                    {selectedFile ? selectedFile.name : "Drag & drop your resume here"}
                </p>
                <p className="text-sm text-gray-400">or click to browse (.pdf, .docx)</p>
                <input
                    id="resumeInput"
                    type="file"
                    accept=".pdf,.docx"
                    className="hidden"
                    onChange={handleFileChange}
                />
            </div>

            <Button
                onClick={handleSubmit}
                className="mt-4 px-6 py-3 bg-green-600 text-white rounded hover:bg-green-700"
                disabled={!selectedFile || loading}
            >
                {
                    loading ? "Generating Roadmap..." : "Generate Roadmap"
                }
            </Button>
            <Button
                onClick={() => setStep(0)}
                className="text-md text-white mt-2 hover:text-blue-200 bg-red-500 px-2 py-2 rounded-lg transition hover:bg-red-700"
            >
                Go Back
            </Button>
        </div>
    );
}
