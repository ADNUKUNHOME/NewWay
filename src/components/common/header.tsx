'use client';

import Image from "next/image";
import Link from "next/link";
import FullGridBackground from "./bg";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";
import { useAuth } from "../../../AuthContext";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const Header = () => {
    const { user, logout } = useAuth();
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

                <nav className="flex space-x-6 text-sm font-medium hidden md:flex">
                    <Link href="#about" className="text-white hover:text-yellow-300 transition-colors">About It</Link>
                    <Link href="/roadmap" className="text-white hover:text-yellow-300 transition-colors">My Plan</Link>
                    <Link href="/dashboard" className="text-white hover:text-yellow-300 transition-colors">Dashboard</Link>
                    <Link href="/contact" className="text-white hover:text-yellow-300 transition-colors">Contact</Link>
                </nav>

                <div className="items-center space-x-4 hidden md:flex">
                    {user ? (
                        <>
                            <Avatar>
                                <AvatarImage
                                    src="/user-avatar.png"
                                    alt={user.email}
                                    width={40}
                                    height={40}
                                    className="rounded-full"
                                />
                                <AvatarFallback>
                                    {user.email.charAt(0).toUpperCase()}
                                </AvatarFallback>
                            </Avatar>
                            <button
                                onClick={logout}
                                className="text-white bg-red-500 hover:bg-red-600 transition-colors px-4 py-2 rounded-md">
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <Link
                                href="/auth/login"
                                className="text-white bg-yellow-500 hover:bg-yellow-600 transition-colors px-4 py-2 rounded-md">
                                Login
                            </Link>
                            <Link
                                href="/auth/register"
                                className="bg-slate-200 hover:bg-yellow-600 hover:text-white transition-colors px-4 py-2 rounded-md">
                                SignUp
                            </Link>
                        </>
                    )}
                </div>
                <div className="flex md:hidden">
                    <Sheet>
                        <SheetTrigger>
                            <span className="text-white focus:outline-none">
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    hmlns="http://www.w3.org/2000/svg">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16m-7 6h7"></path>
                                </svg>
                            </span>
                        </SheetTrigger>
                        <SheetContent className="flex flex-col items-start justify-start p-6 bg-black/80 text-white">
                            <SheetHeader>
                                <SheetTitle className="font-bold my-4 text-white">Talkworld</SheetTitle>
                                <SheetDescription>
                                    <div className="flex flex-col gap-6">
                                        <Link href="/roadmap">
                                            My Plan
                                        </Link>
                                        <Link href="#about">
                                            About It
                                        </Link>
                                        <Link href="/dashboard">
                                            Dashboard
                                        </Link>
                                        <Link href="/contact">
                                            Contact
                                        </Link>
                                        <div>
                                            <Link
                                                href="/auth/register"
                                                className="text-white bg-yellow-500 hover:bg-yellow-600 transition-colors px-4 py-2 rounded-md">
                                                SignUp
                                            </Link>
                                            <Link
                                                href="/auth/login"
                                                className="bg-slate-200 hover:bg-yellow-600 hover:text-white transition-colors px-4 py-2 rounded-md">
                                                Login
                                            </Link>
                                        </div>
                                    </div>
                                </SheetDescription>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
};

export default Header;
