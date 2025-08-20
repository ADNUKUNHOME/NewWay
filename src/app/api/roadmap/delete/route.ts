import Roadmap from "@/lib/models/roadmap";
import User from "@/lib/models/user";
import { NextResponse } from "next/server";

export async function DELETE(req: Request) {
    try {
        const { userEmail } = await req.json();

        if (!userEmail) {
            return NextResponse.json(
                { success: false, message: "User email is required!" },
                { status: 400 }
            );
        }

        const roadmap = await Roadmap.findOneAndDelete({ createdBy: userEmail });

        if (!roadmap) {
            return NextResponse.json(
                { success: false, message: "No roadmap found for this user" },
                { status: 404 }
            );
        }

        await User.updateOne(
            { email: userEmail },
            { $set: { hasRoadmap: false } }
        );

        return NextResponse.json(
            { success: true, message: "Roadmap deleted successfully" },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error deleting roadmap:", error);
        return NextResponse.json(
            { success: false, message: "Internal server error while deleting roadmap" },
            { status: 500 }
        );
    }
}
