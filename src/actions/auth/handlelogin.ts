'use server';

import axios from "axios";
import { cookies } from "next/headers";

export async function handleLoginApiCall(
    email: string,
    password: string
) {
    try {
        const response = await axios.post(
            `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auth/login`,
            { email, password }
        );

        const data = response.data;

        if (data.success && data.token) {
            const cookieStore = await cookies();

            cookieStore.set("token", data.token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                sameSite: "lax",
                path: "/",
                maxAge: 60 * 60,
            });
        }

        return data;
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            if (error.response) {
                return {
                    success: false,
                    message:
                        error.response.data?.message ||
                        "An error occurred during login.",
                };
            }

            if (error.request) {
                return {
                    success: false,
                    message:
                        "No response from server. Please check your internet connection.",
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