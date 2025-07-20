'use server';

import axios from "axios";

export async function handleLoginApiCall(email: string, password: string) {
    try {
        const response = await axios.post("http://localhost:3000/api/auth/login", {
            email,
            password,
        })
        return response.data;
    } catch (error: any) {
        console.error("Error during login:", error);

        const message = error?.response?.data?.message || "Login failed. Please try again.";

        return { success: false, message };
    }

}