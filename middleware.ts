import { verifyJwt } from "@/lib/jwt";
import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
    const token = req.cookies.get("token")?.value;
    const verifiedToken = token && verifyJwt(token);

    const { pathname } = req.nextUrl;

    const isAuthPage =
        pathname.startsWith("/auth/login") ||
        pathname.startsWith("/auth/register");

    const isProtectedRoute =
        pathname.startsWith("/assessment") ||
        pathname.startsWith("/roadmap");

    if (!verifiedToken && isProtectedRoute) {
        return NextResponse.redirect(new URL("/auth/login", req.url));
    }

    if (verifiedToken && isAuthPage) {
        return NextResponse.redirect(new URL("/roadmap", req.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        "/assessment/:path*",
        "/roadmap/:path*",
        "/auth/login",
        "/auth/register",
    ],
};