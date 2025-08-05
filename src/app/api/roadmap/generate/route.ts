import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { ROADMAP_GENERATION_PROMPT } from "@/constants/roadmapPrompt";

// Make sure GEMINI_API_KEY is correctly set in your .env.local
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function POST(req: Request) {
    const { name, education, interests, timePerWeek, goals, additionalInfo } = await req.json();

    try {
        const prompt = ROADMAP_GENERATION_PROMPT({
            name,
            education,
            interests,
            timePerWeek,
            goals,
            additionalInfo,
        });

        const model = genAI.getGenerativeModel({ model: "models/gemini-1.5-flash" });


        const result = await model.generateContent(prompt);
        const response = await result.response;
        const roadmap = await response.text();

        return NextResponse.json({ roadmap });
    } catch (error) {
        console.error("Gemini API Error:", error);
        return NextResponse.json({ error: "Failed to generate roadmap" }, { status: 500 });
    }
}
