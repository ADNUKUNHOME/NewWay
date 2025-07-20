import { verifyJwt } from "@/lib/jwt";
import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
    const token = req.cookies.get("token")?.value;

    const verifiedToken = token && verifyJwt(token);
    const isAuthPage = req.nextUrl.pathname.startsWith("/login") || req.nextUrl.pathname.startsWith("/register");

    if (!verifiedToken && !isAuthPage) {
        return NextResponse.redirect(new URL("/login", req.url));
    }

    if (verifiedToken && isAuthPage) {
        return NextResponse.redirect(new URL("/", req.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/', '/login', '/register', '/dashboard/:path*'],
}