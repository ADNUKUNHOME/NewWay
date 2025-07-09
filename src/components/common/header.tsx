import Image from "next/image";
import Link from "next/link";

const Header = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-md border-b border-white/10 shadow-md">
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

                <nav className="flex space-x-6 text-sm font-medium">
                    <Link href="/myplan" className="text-white hover:text-yellow-300 transition-colors">My Plan</Link>
                    <Link href="#about" className="text-white hover:text-yellow-300 transition-colors">About It</Link>
                    <Link href="/contact" className="text-white hover:text-yellow-300 transition-colors">Contact</Link>
                </nav>
                <div className="flex items-center space-x-4">
                    <Link href="/login" className="text-white bg-yellow-500 hover:bg-yellow-600 transition-colors px-4 py-2 rounded-md">
                        Login
                    </Link>
                    <Link href="/signup" className="bg-slate-200 hover:bg-yellow-600 hover:text-white transition-colors px-4 py-2 rounded-md">
                        SignUp
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
