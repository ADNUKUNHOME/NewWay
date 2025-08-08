import axios from "axios";

export async function SaveRoadmapApiCall({
    roadmapName,
    description,
    createdBy
}: {
    roadmapName: string,
    description: string,
    createdBy: string,

}) {
    try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/roadmap/save`, {
            roadmapName,
            description,
            createdBy,
        });

        return response.data;

    } catch (error: any) {
        console.error("Error saving roadmap", error);

        if (axios.isAxiosError(error)) {
            if (error.response) {
                return {
                    success: false,
                    message: error.response?.data?.message || "An error occurred while saving the roadmap."
                };
            }

            if (error.request) {
                return {
                    success: false,
                    message: "No response from server. Please check your internet!"
                }
            }
        }

        return {
            success: false,
            message: "Error while saving the roadmap!"
        }
    }
}