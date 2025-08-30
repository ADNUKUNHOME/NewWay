import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";

export async function extractTextFromPdf(buffer: Buffer): Promise<string> {
    // LangChain expects a Blob for in-memory parsing
    const blob = new Blob([Uint8Array.from(buffer)]);

    const loader = new PDFLoader(blob);
    const docs = await loader.load();

    // Combine all pages into one string
    return docs.map((doc) => doc.pageContent).join("\n");
}
