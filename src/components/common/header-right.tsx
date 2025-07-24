import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export default function HeaderRight({ user, logout }: { user: any, logout: () => void }) {
    return (
        <div className="hidden items-center space-x-4 md:flex">
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
    )
}