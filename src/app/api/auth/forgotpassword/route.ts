import { sendMail } from "@/lib/mail";
import User from "@/lib/models/user";
import { connectDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const { email } = await req.json();

        if (!email) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Email is required",
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
                    message: "User not found. Please Register first!",
                },
                { status: 404 }
            );
        }

        const otp = Math.floor(100000 + Math.random() * 900000).toString();

        user.resetPasswordOtp = otp;
        user.resetPasswordOtpExpiry = Date.now() + 10 * 60 * 1000; // 10 minutes
        await user.save();

        await sendMail({
            to: email,
            subject: "🔐 Password Reset Verification Code - NewWay",
            html: `
        <div style="font-family: Arial, sans-serif; line-height:1.6; color:#333;">
          <h2 style="color:#2563eb;">Password Reset Request</h2>
          <p>Hi User},</p>
          <p>We received a request to reset your <strong>NewWay</strong> account password.</p>
          <p>Please use the verification code below to proceed:</p>
          
          <div style="text-align:center; margin:20px 0;">
            <span style="font-size:24px; font-weight:bold; letter-spacing:4px; padding:10px 20px; border:1px solid #ddd; border-radius:8px; background:#f9fafb; display:inline-block;">
              ${otp}
            </span>
          </div>
          
          <p><strong>Note:</strong> This code will expire in 10 minutes. If you didn’t request this, you can safely ignore this email.</p>
          
          <hr style="margin:30px 0;"/>
        </div>
      `,
        });

        return NextResponse.json(
            {
                success: true,
                message: "OTP sent to your email!",
            },
            { status: 200 }
        );
    } catch (error: any) {
        console.log("An error occurred while sending OTP: ", error);
        return NextResponse.json(
            {
                success: false,
                message: error.message || "An error occurred while sending OTP!",
            },
            { status: 500 }
        );
    }
}
