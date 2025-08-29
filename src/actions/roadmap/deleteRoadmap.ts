import axios from "axios";

export async function DeleteRoadmap(userEmail: string | undefined) {
    try {

        const response = await axios.delete(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/roadmap/delete`, {
            data: { userEmail }
        });
        return response.data;

    } catch (error: unknown) {
        console.error("Error deleting roadmap:", error);
        if (axios.isAxiosError(error)) {
            if (error.response) {
                return {
                    success: false,
                    message: error.response.data.message || "Failed to delete roadmap"
                };
            } else if (error.request) {
                return {
                    success: false,
                    message: "No response from server. Please check your internet connection!"
                };
            }
            return {
                success: false,
                message: "An error occurred while deleting the roadmap."
            }
        }
    }
}