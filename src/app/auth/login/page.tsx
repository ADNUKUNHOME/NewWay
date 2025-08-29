'use client';

import { handleLoginApiCall } from "@/actions/auth/handlelogin";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!email || !password) {
            toast.error("Please fill in all fields");
            return;
        }
        setLoading(true);

        handleLoginApiCall(email, password).then((data) => {
            if (data.success) {
                localStorage.setItem("token", data.token);
                localStorage.setItem("user", JSON.stringify(data.user));
                setLoading(false);
                toast.success("Login successful!");
                window.location.href = "/";
                setEmail("");
                setPassword("");
            } else {
                setLoading(false);
                toast.error(data.message || "Login failed. Please try again.");
            }
        })
            .catch((error) => {
                toast.error("An error occurred during login. Please try again later.");
                console.error("Login error:", error);
                setLoading(false);
            });
    }

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1, duration: 0.5 } }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <motion.div
            className="flex items-center justify-center min-h-screen mt-20"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <motion.div className="flex flex-col items-center justify-center" variants={itemVariants}>
                <motion.h1 className="text-3xl font-bold text-white mb-2" variants={itemVariants}>
                    SignIn
                </motion.h1>
                <motion.p className="text-gray-300 font-semibold my-4" variants={itemVariants}>
                    Please enter your credentials to SignIn
                </motion.p>

                <motion.form
                    onSubmit={handleLogin}
                    className="w-full max-w-md p-6 rounded-lg border border-gray-300"
                    variants={itemVariants}
                >
                    <div className="mb-4">
                        <label className="block text-white mb-2" htmlFor="email">Email</label>
                        <Input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-3 py-2 text-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-white mb-2" htmlFor="password">Password</label>
                        <Input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-3 py-2 text-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    <p className="text-gray-400 text-sm mb-4">
                        <Link href="/auth/forgotpassword" className="text-yellow-500 hover:text-yellow-600 hover:underline">
                            Forgot your password?
                        </Link>
                    </p>
                    <Button
                        type="submit"
                        className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-md transition-colors"
                    >
                        {loading ? <><Loader2 className="animate-spin" /> Loading...</> : " Login"}
                    </Button>
                    <Separator className="my-4" />
                    <p className="text-gray-400 text-sm">
                        You don&apos;t have an account?{" "}
                        <Link href="/auth/register" className="text-yellow-500 hover:text-yellow-600">
                            Register here
                        </Link>
                    </p>
                </motion.form>
            </motion.div>
        </motion.div>
    )
}

export default Login;
