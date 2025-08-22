import axios from "axios";

export async function handleRegisterApiCall(email: string, password: string) {
    try {
        const response = await axios.post(`/api/auth/register`, {
            email,
            password,
        });
        return response.data;
    } catch (error: unknown) {
        // Narrow error type
        if (axios.isAxiosError(error)) {
            const serverMessage = error.response?.data?.message;
            if (serverMessage) {
                return { success: false, message: serverMessage };
            }
        }

        console.error("Error during registration:", error);
        return { success: false, message: "Registration failed. Please try again later." };
    }
}
