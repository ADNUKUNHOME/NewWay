import { RESOURCE_GENERATION_PROMPT } from "@/constants/resourcesCreationPrompt";
import Roadmap from "@/lib/models/roadmap";
import { connectDB } from "@/lib/mongodb";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

const GenAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

function SplitRoadmapTitles(roadmapText: string): string[] {
    if (!roadmapText) return [];
    const phaseRegex = /Phase\s*\d+[:\-]\s*(.+)/gi;
    const titles: string[] = [];

    let match;
    while ((match = phaseRegex.exec(roadmapText)) !== null) {
        titles.push(match[1].trim());
    }

    return titles;
}

export async function POST(req: Request) {
    try {
        const { userEmail } = await req.json();
        if (!userEmail) {
            return NextResponse.json(
                { success: false, message: "User email is required!" },
                { status: 400 }
            );
        }

        await connectDB();

        const roadmap = await Roadmap.findOne({ userEmail });
        if (!roadmap) {
            return NextResponse.json(
                { success: false, message: "The user does not have a roadmap!" },
                { status: 404 }
            );
        }

        const Titles = SplitRoadmapTitles(roadmap.description);
        if (Titles.length === 0) {
            return NextResponse.json(
                { success: false, message: "No phases found in roadmap!" },
                { status: 400 }
            );
        }

        const prompt = RESOURCE_GENERATION_PROMPT(Titles);
        const model = GenAI.getGenerativeModel({ model: "models/gemini-1.5-flash" });

        const result = await model.generateContent(prompt);
        const resourcesText = await result.response.text();

        let resources;
        try {
            const cleanText = resourcesText.replace(/```json|```/g, "").trim();
            resources = JSON.parse(cleanText);
        } catch {
            resources = resourcesText;
        }

        return NextResponse.json({ success: true, resources });
    } catch (error) {
        console.error("Error generating resources:", error);
        return NextResponse.json(
            { success: false, message: "Failed to generate resources" },
            { status: 500 }
        );
    }
}
