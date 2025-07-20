import { signJwt } from "@/lib/jwt";
import User from "@/lib/models/user";
import { connectDB } from "@/lib/mongodb";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    await connectDB();
    const { email, password } = await req.json();

    if (!email || !password) {
        return NextResponse.json(
            { success: false, message: "Email and password are required" },
            { status: 400 },
        )
    }

    const user = await User.findOne({ email });
    if (!user) {
        return NextResponse.json(
            { success: false, message: "Invalid email or password" },
            { status: 401 },
        )
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        return NextResponse.json(
            { success: false, message: "Invalid email or password" },
            { status: 401 },
        )
    }

    const token = signJwt({
        id: user._id,
        email: user.email,
    });

    const response = NextResponse.json(
        {
            success: true,
            message: "Login successful",
            user: {
                id: user._id,
                email: user.email,
            },
            token: token,
        }
    )
    response.cookies.set("token", token, {
        httpOnly: true,
        path: "/",
        maxAge: 60 * 60,
    })

    return response;
}