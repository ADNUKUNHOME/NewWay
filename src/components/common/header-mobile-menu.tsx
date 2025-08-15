'use client';

import Link from "next/link";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";
import { cn } from "@/lib/utils";
import { LogOut, SquareUserRound } from "lucide-react";
import { Separator } from "../ui/separator";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function HeaderMobileMenu({ user, logout }: { user: any, logout: () => void }) {

    const [confirmOpen, setConfirmOpen] = useState(false);
    const [open, setOpen] = useState(false);
    const hasRoadmap = user?.hasRoadmap;
    const pathname = usePathname();

    useEffect(() => {
        setOpen(false);
    }, [pathname]);

    return (
        <div className="flex md:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger>
                    <span className="inline-block text-white focus:outline-none">
                        <svg
                            className="w-6 h-6 transform transition-transform duration-300 hover:scale-110"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            ></path>
                        </svg>
                    </span>
                </SheetTrigger>

                <SheetContent className="flex flex-col items-start justify-start p-6 bg-black/80 text-white">
                    <SheetHeader>
                        <SheetTitle className="font-bold my-4 text-yellow-500">NewWay</SheetTitle>
                        <div>
                            <div className="flex flex-col gap-6 text-white">
                                <Link href={cn(user ? hasRoadmap ? "/roadmap" : "/assessment" : "/auth/login")}>
                                    {
                                        hasRoadmap ? "Roadmap" : "Assessment"
                                    }
                                </Link>
                                <Link href="/resources">
                                    Rosources
                                </Link>
                                <Link href="/about">
                                    About
                                </Link>
                                <Link href="/contact">
                                    Contact
                                </Link>
                                <Separator />
                                <div className="flex flex-col gap-4">
                                    {
                                        user ? (
                                            <>
                                                <div className="flex text-white">
                                                    <SquareUserRound className="mr-2" /> Account
                                                </div>
                                                <div
                                                    onClick={() => setConfirmOpen(true)}
                                                    className="flex text-red-500 rounded-md hover:text-red-700 cursor-pointer"
                                                >
                                                    <LogOut className="mr-2" /> Logout
                                                </div>
                                            </>

                                        )
                                            : (
                                                <>
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
                                                </>
                                            )
                                    }

                                </div>
                            </div>
                        </div>
                    </SheetHeader>
                </SheetContent>
            </Sheet>

            <Popover open={confirmOpen} onOpenChange={setConfirmOpen}>
                <PopoverTrigger asChild>
                    {/* Invisible trigger just to anchor popover near avatar */}
                    <span />
                </PopoverTrigger>
                <PopoverContent
                    className="w-56 bg-black/80 text-white border-white/20"
                    side="bottom"
                    align="end"
                >
                    <p className="mb-3 text-sm">
                        Are you sure you want to log out?
                    </p>
                    <div className="flex justify-end gap-2">
                        <Button
                            variant="secondary"
                            size="sm"
                            onClick={() => setConfirmOpen(false)}
                        >
                            Cancel
                        </Button>
                        <Button
                            variant="destructive"
                            size="sm"
                            onClick={() => {
                                setConfirmOpen(false);
                                logout();
                            }}
                        >
                            Logout
                        </Button>
                    </div>
                </PopoverContent>
            </Popover>
        </div>
    )
}