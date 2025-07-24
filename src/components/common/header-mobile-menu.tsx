import Link from "next/link";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";

export default function HeaderMobileMenu({ user, logout }: { user: any, logout: () => void }) {
    return (
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
                                    Roadmap
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
                                <div className="flex flex-col gap-2">
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
    )
}