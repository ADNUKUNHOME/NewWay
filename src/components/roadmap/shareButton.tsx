"use client";

import { Copy } from "lucide-react";
import { Button } from "../ui/button";
import { toast } from "sonner";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"

export default function ShareButton({ content }: { content: string }) {
    const stripMarkdown = (markdown: string) => {
        // Remove bold/italic markers like ** and *
        let text = markdown.replace(/\*\*/g, "").replace(/\*/g, "");

        // Remove other markdown syntax like headings (#) and extra spaces
        text = text.replace(/^#+\s?/gm, "");

        return text.trim();
    };

    const handleCopy = async () => {
        try {
            const plainText = stripMarkdown(content);
            await navigator.clipboard.writeText(plainText);
            toast.success("Roadmap copied to clipboard!");
        } catch (err) {
            console.error("Failed to copy roadmap:", err);
            toast.error("Failed to copy roadmap!");
        }
    };

    return (
        <Tooltip>
            <TooltipTrigger>
                <Button
                    variant="default"
                    className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-md transition-colors duration-300"
                    onClick={handleCopy}
                >
                    <Copy />
                    <span className="hidden md:flex ml-2">Copy</span>
                </Button>
            </TooltipTrigger>
            <TooltipContent>
                <p>Copy to Clipboard</p>
            </TooltipContent>
        </Tooltip>
    );
}
