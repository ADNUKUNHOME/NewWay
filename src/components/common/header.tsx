'use client';

import Image from "next/image";
import Link from "next/link";
import FullGridBackground from "./bg";
import { useAuth } from "../../../AuthContext";
import HeaderRight from "./header-right";
import HeaderMobileMenu from "./header-mobile-menu";
import { cn } from "@/lib/utils";

const Header = () => {

    const { user, logout } = useAuth();

    const MenuItems = () => {
        return (
            <>
                <Link href={cn(user ? "/assessment" : "/auth/login")} className="text-white hover:text-yellow-300 transition-colors">Assessment</Link>
                <Link href="/resources" className="text-white hover:text-yellow-300 transition-colors">Resources</Link>
                <Link href="/about" className="text-white hover:text-yellow-300 transition-colors">About</Link>
                <Link href="/contact" className="text-white hover:text-yellow-300 transition-colors">Contact</Link>
            </>
        );
    }


    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-md border-b border-white/10 shadow-md">
            <FullGridBackground />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
                <Link href="/" className="flex items-center space-x-3">
                    <Image
                        src="/logo.png"
                        alt="NewWay Logo"
                        width={40}
                        height={40}
                        className="rounded-full hover:rotate-12 transition-transform duration-300 ease-in-out hover:scale-105"
                    />
                    <h1 className="text-white text-2xl font-extrabold tracking-tight">NewWay</h1>
                </Link>

                <div className="hidden md:flex items-center space-x-6">
                    <MenuItems />
                </div>
                <HeaderRight user={user} logout={logout} />
                <HeaderMobileMenu user={user} logout={logout} />
            </div>
        </header>
    );
};

export default Header;
