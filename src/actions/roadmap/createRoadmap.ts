import axios from "axios";

interface CreateRoadmapFormData {
    name: string;
    education: string;
    interests: string;
    timePerWeek: string;
    goals: string;
    additionalInfo: string;
}

export async function CreateRoadmapApiCall({ formData }: { formData: CreateRoadmapFormData }) {
    try {
        const response = await axios.post(`/api/roadmap/generate`, formData);
        return {
            success: true,
            message: "Roadmap generated successfully!",
            data: response.data,
        };

    } catch (error: unknown) {
        console.error("Error during roadmap generation:", error);
        if (axios.isAxiosError(error) && error.response) {
            const message = error.response.data?.message || "Failed to generate roadmap. Please try again.";
            return { success: false, message };
        }
        return { success: false, message: "An unexpected error occurred. Please try again." };
    }
}