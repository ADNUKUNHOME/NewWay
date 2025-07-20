import User from "@/lib/models/user";
import { connectDB } from "@/lib/mongodb";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {

    await connectDB();
    const { email, password } = await req.json();

    if (!email || !password) {
        return NextResponse.json(
            { error: "Email and password are required" },
            { status: 400 },
        );
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
        return NextResponse.json(
            { success: false, message: "User already exists" },
            { status: 400 },
        )
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
        email,
        password: hashedPassword,
    });
    await newUser.save();

    return NextResponse.json(
        { success: true, message: "User registered successfully" },
        { status: 201 }
    );
}