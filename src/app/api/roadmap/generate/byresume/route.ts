'use server';


import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";
import { z } from "zod";
import { RESUME_ROADMAP_GENERATION_PROMPT } from "@/constants/resumeRoadmapPrompt";
import { extractTextFromPdf } from "@/lib/pdf";

const GenAi = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

const fileSchema = z.object({
    type: z.enum([
        "application/pdf",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ]),
    size: z.number().max(5 * 1024 * 1024, "File must be less than 5MB"),
});

export async function POST(req: Request) {
    try {
        const formData = await req.formData();
        const file = formData.get("resume") as File | null;

        if (!file) {
            return NextResponse.json(
                { success: false, message: "No file uploaded!" },
                { status: 400 }
            );
        }

        // ✅ Validate file
        const parsed = fileSchema.safeParse({ type: file.type, size: file.size });
        if (!parsed.success) {
            return NextResponse.json(
                { success: false, message: parsed.error.issues[0].message },
                { status: 400 }
            );
        }

        // ✅ Convert Web File → Node Buffer
        const arrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);

        let extractedText = "";

        if (file.type === "application/pdf") {
            extractedText = await extractTextFromPdf(buffer);
        } else if (
            file.type ===
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
        ) {
            const mammoth = await import("mammoth");
            const result = await mammoth.extractRawText({ buffer });
            extractedText = result.value;
        }

        if (!extractedText.trim()) {
            return NextResponse.json(
                { success: false, message: "Could not extract text from file!" },
                { status: 400 }
            );
        }

        // ✅ Send extracted resume text to Gemini
        const prompt = RESUME_ROADMAP_GENERATION_PROMPT({ resumeText: extractedText });
        const model = GenAi.getGenerativeModel({ model: "models/gemini-1.5-flash" });

        const result = await model.generateContent(prompt);
        const roadmap = result.response.text();

        return NextResponse.json({ success: true, roadmap });
    } catch (error: unknown) {
        console.error("Error creating roadmap:", error);
        let message = "Failed to create roadmap by resume. Please try again!";
        if (error instanceof Error) message = error.message;
        else if (typeof error === "string") message = error;

        return NextResponse.json({ success: false, message }, { status: 500 });
    }
}
