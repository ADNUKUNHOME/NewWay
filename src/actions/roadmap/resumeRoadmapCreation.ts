import axios from "axios";

export async function ResumeRoadmapCreation(
    { selectedFile }: { selectedFile: File | null }
) {
    try {
        const file = selectedFile;
        if (!file) {
            throw new Error("No file uploaded!");
        }
        const formData = new FormData();
        formData.append("resume", file);

        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/roadmap/generate/byresume`, formData);
        return response.data;
    } catch (error) {
        console.error("Error generating roadmap from resume", error);
        if (axios.isAxiosError(error)) {
            if (error.response) {
                return {
                    success: false,
                    message: error.response?.data?.message || "An error occurred while generating roadmap."
                };
            }
            if (error.request) {
                return {
                    success: false,
                    message: "No response from server. Please check your internet!"
                };
            }
        }
    }
    return {
        success: false,
        message: "Error while generating roadmap from resume!"
    };
}
