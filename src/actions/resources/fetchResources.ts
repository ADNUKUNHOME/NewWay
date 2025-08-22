import axios from "axios";

export async function CreateResourcesFromAI(userEmail: string) {

    try {

        if (!userEmail) {
            throw new Error("user is not authenticated!");
        }

        const response = await axios.post(`/api/resources/ai`, { userEmail });
        return response.data;
    } catch (error) {
        console.log("Failed fetching Resources: ", error);
        if (axios.isAxiosError(error)) {
            if (error.response) {
                return {
                    success: false,
                    message: error.response.data.message || "Failed to Fetch Resources!",
                }
            } else if (error.request) {
                return {
                    success: false,
                    message: "No response from server. Please check your internet connection!",
                }
            }
        }
        return {
            success: false,
            message: "An error occured while fetching Resources!",
        }
    }
}