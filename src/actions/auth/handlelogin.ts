'use server';

import axios from "axios";

export async function handleLoginApiCall(email: string, password: string) {
    try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auth/login`, {
            email,
            password,
        });
        return response.data;
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            if (error.response) {
                return {
                    success: false,
                    message: error.response.data?.message || "An error occurred during login.",
                };
            }

            if (error.request) {
                return {
                    success: false,
                    message: "No response from server. Please check your internet connection.",
                };
            }
        }

        console.error("Unexpected error during login:", error);
        return {
            success: false,
            message: "Unexpected error occurred during login.",
        };
    }
}
