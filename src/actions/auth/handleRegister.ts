import axios from "axios";

export async function handleRegisterApiCall(email: string, password: string) {
    try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auth/register`, {
            email,
            password,
        });
        return response.data;
    } catch (error: any) {
        console.error("Error during registration:", error);

        if (error.response?.data?.message) {
            return { success: false, message: error.response.data.message };
        }

        return { success: false, message: "Registration failed. Please try again later." };
    }
}
