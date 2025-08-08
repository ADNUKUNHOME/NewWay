import Roadmap from "@/lib/models/roadmap";
import { connectDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        await connectDB();
        const { roadmapName, description, createdBy } = await req.json();

        if (!roadmapName || !description || !createdBy) {
            return NextResponse.json(
                { success: false, message: "All fields are required!" },
                { status: 400 },
            );
        }

        const NewRoadmap = new Roadmap({
            roadmapName,
            description,
            createdBy,
        });
        await NewRoadmap.save();

        return NextResponse.json(
            { success: true, message: "Roadmap saved successfully!" },
            { status: 201 },
        );
    } catch (error: any) {
        console.error("Error saving roadmap:", error);
        return NextResponse.json(
            { success: false, message: error.message || "Failed to save roadmap. Please try again." },
            { status: 500 },
        );
    }
}