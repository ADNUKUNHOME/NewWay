import User from "@/lib/models/user";
import { connectDB } from "@/lib/mongodb";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const { email, otp, newPassword } = await req.json();

        if (!email || !otp || !newPassword) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Email, OTP, and new password are required",
                },
                { status: 400 }
            );
        }

        await connectDB();

        const user = await User.findOne({ email });
        if (!user) {
            return NextResponse.json(
                {
                    success: false,
                    message: "User not found. Please register first!",
                },
                { status: 404 }
            );
        }

        if (user.resetPasswordOtp !== otp || new Date(user.resetPasswordOtpExpiry).getTime() < Date.now()) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Invalid or expired OTP",
                },
                { status: 400 }
            );
        }

        const hashedPassword = await bcrypt.hash(newPassword, 10);

        user.password = hashedPassword;
        user.resetPasswordOtp = null;
        user.resetPasswordOtpExpiry = null;
        await user.save();

        return NextResponse.json(
            {
                success: true,
                message: "Password reset successfully!",
            },
            { status: 200 }
        );

    } catch (error) {
        console.error("Error resetting password:", error);
        return NextResponse.json(
            { success: false, message: "Failed to reset password. Please try again later." },
            { status: 500 }
        );
    }
}