import Roadmap from "@/lib/models/roadmap";
import { connectDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    try {
        await connectDB();
        const { searchParams } = new URL(req.url);
        const createdBy = searchParams.get("createdBy");
        if (!createdBy) {
            return NextResponse.json(
                { success: false, message: "User email is required!" },
                { status: 400 },
            );
        };

        const roadmap = await Roadmap.findOne({ createdBy });
        if (!roadmap) {
            return NextResponse.json(
                {
                    success: false,
                    message: "No roadmap found for this user."
                },
                { status: 404 },
            );
        };

        return NextResponse.json(
            {
                success: true,
                roadmap,
            },
            { status: 200 },
        );

    } catch (error) {
        console.error("Error fetching roadmap:", error);
        return NextResponse.json(
            {
                success: false,
                message: "Failed to fetch roadmap. Please try again!"
            },
            { status: 500 },
        );
    }
}
