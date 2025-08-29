import axios from "axios";

export async function GetRoadmapApiCall(createdBy: string) {
    try {
        console.log("Fetching roadmap for createdBy:", createdBy);
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/roadmap/get`,
            { params: { createdBy } }
        );

        console.log("Response from GetRoadmapApiCall:", response.data);

        return response.data;
    } catch (error: unknown) {
        console.error("Error fetching roadmap", error);

        if (axios.isAxiosError(error)) {
            if (error.response) {
                return {
                    success: false,
                    message: error.response?.data?.message || "An error occurred while fetching the roadmap."
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
            message: "Error while fetching the roadmap!"
        }
    }
}
