import Link from "next/link";
import AvatarFunctions from "./avatarFunctions";

export default function HeaderRight({ user, logout }: { user: any, logout: () => void }) {
    return (
        <div className="hidden items-center md:flex">
            {user ? (
                <>
                    <AvatarFunctions
                        user={user}
                        logout={logout}
                    />
                </>
            ) : (
                <>
                    <Link
                        href="/auth/login"
                        className="text-white font-bold bg-yellow-500 hover:bg-yellow-600 transition-colors px-4 py-2 mr-4 rounded-md">
                        Login
                    </Link>
                    <Link
                        href="/auth/register"
                        className="bg-slate-200 font-bold hover:bg-yellow-600 hover:text-white transition-colors px-4 py-2 rounded-md">
                        SignUp
                    </Link>
                </>
            )}
        </div>
    )
}