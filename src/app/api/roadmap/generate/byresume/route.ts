import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";
import { z } from "zod";
import { RESUME_ROADMAP_GENERATION_PROMPT } from "@/constants/resumeRoadmapPrompt";

const GenAi = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

const fileSchema = z.object({
    type: z.enum(["application/pdf", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"]),
    size: z.number().max(5 * 1024 * 1024, "File must be less than 5MB"), // Max size 5MB
})

export async function POST(req: Request) {
    try {

        //Get file from front end
        const formData = await req.formData();
        const file = formData.get("resume") as File;

        if (!file) {
            return NextResponse.json(
                { success: false, message: "No file uploaded!" },
                { status: 400 }
            );
        }

        // validate file using zod
        const parsed = fileSchema.safeParse({ type: file.type, size: file.size });
        if (!parsed.success) {
            return NextResponse.json(
                { success: false, message: parsed.error.issues[0].message },
                { status: 400 }
            );
        }

        //Convert file to Buffer
        const arrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);

        let extractedText = "";

        if (file.type === "application/pdf") {
            const pdfParse = (await import("pdf-parse")).default; // 👈 dynamic import
            const pdfData = await pdfParse(buffer);
            extractedText = pdfData.text;
        } else if (file.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document") {
            const mammoth = (await import("mammoth")).default; // 👈 dynamic import
            const result = await mammoth.extractRawText({ buffer });
            extractedText = result.value;
        }


        if (!extractedText.trim()) {
            return NextResponse.json(
                { success: false, message: "Could not extract text from file!" },
                { status: 400 }
            );
        }

        //create prompt with pdf text
        const prompt = RESUME_ROADMAP_GENERATION_PROMPT({ resumeText: extractedText });
        const model = GenAi.getGenerativeModel({ model: "models/gemini-1.5-flash" });
        const result = await model.generateContent(prompt);
        const response = result.response;
        const roadmap = response.text();

        return NextResponse.json({ success: true, roadmap });

    } catch (error: any) {
        console.error("Error creating roadmap: ", error);
        return NextResponse.json(
            { success: false, message: error.message || "Failed to create roadmap by resume. Please try again!" },
            { status: 500 }
        )
    }
}