import { sendMail } from "@/lib/mail";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const adminEmail = "brazlowseez5@gmail.com";

    try {
        const { name, email, message } = await req.json();
        if (!email) {
            return NextResponse.json(
                { success: false, message: "Email is required." },
                { status: 400 }
            );
        }

        console.log("Received contact form submission:", { name, email, message });

        // 1️⃣ Send email to Admin
        await sendMail({
            to: adminEmail,
            subject: `📩 New Contact Message from ${name || "Anonymous"}`,
            html: `
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${name || "N/A"}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
            `,
        });

        // 2️⃣ Send confirmation email to user
        await sendMail({
            to: email,
            subject: "✅ We received your message - NewWay",
            html: `
                <h2>Hi ${name || "there"},</h2>
                <p>Thanks for reaching out to <strong>NewWay</strong>! 🎉</p>
                <p>We received your message and will get back to you shortly.</p>
                <hr/>
                <p><em>Your submitted message:</em></p>
                <blockquote>${message}</blockquote>
                <p>— The NewWay Team 🚀</p>
            `,
        });

        return NextResponse.json(
            { success: true, message: "Message sent successfully!" },
            { status: 200 }
        );

    } catch (error) {
        console.error("Error sending contact message:", error);
        return NextResponse.json(
            { success: false, message: "Failed to send message. Please try again later." },
            { status: 500 }
        );
    }
}
