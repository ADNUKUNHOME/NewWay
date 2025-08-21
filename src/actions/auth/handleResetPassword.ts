import axios from "axios";

export async function SendResetPasswordOTP(email: string) {
    try {

        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auth/forgotpassword`, { email });
        return response.data;

    } catch (error) {
        console.error("Error in ForgotPassword action:", error);

        if (axios.isAxiosError(error)) {
            if (error.response) {
                return {
                    success: false,
                    message: error.response.data.message || "Failed to send OTP. Please try again later."
                };
            } else if (error.request) {
                return {
                    success: false,
                    message: "No response received from the server. Please check your network connection."
                };
            }
        }
        return {
            success: false,
            message: "An error occurred while processing your request. Please try again later."
        };
    }
}


export async function ResetPassword({
    email,
    otp,
    newPassword
}: {
    email: string;
    otp: string;
    newPassword: string;
}) {
    try {

        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auth/resetpassword`, { email, otp, newPassword });
        return response.data;

    } catch (error) {
        console.error("Error in ForgotPassword action:", error);

        if (axios.isAxiosError(error)) {
            if (error.response) {
                return {
                    success: false,
                    message: error.response.data.message || "Failed to reset password. Please try again later."
                };
            } else if (error.request) {
                return {
                    success: false,
                    message: "No response received from the server. Please check your network connection."
                };
            }
        }
        return {
            success: false,
            message: "An error occurred while processing your request. Please try again later."
        };
    }
}