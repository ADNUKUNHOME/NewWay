import axios from "axios";

export async function CreateRoadmapApiCall({ formData }: { formData: any }) {
    try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/roadmap/generate`, formData);

        if (response.status === 200) {
            return {
                success: true,
                message: "Roadmap generated successfully!",
                data: response.data,
            };
        }

        return {
            success: false,
            message: "Failed to generate roadmap. Please try again.",

        };

    } catch (error: any) {
        console.error("Error during roadmap generation:", error);

        const message = error?.response?.data?.message || "Roadmap generation failed. Please try again.";

        return { success: false, message };

    }
}