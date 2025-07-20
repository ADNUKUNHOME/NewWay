'use client';

import { handleLoginApiCall } from "@/actions/auth/handlelogin";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!email || !password) {
            toast.error("Please fill in all fields");
            return;
        }

        handleLoginApiCall(email, password).then((data) => {
            if (data.success) {
                localStorage.setItem("token", data.token);
                localStorage.setItem("user", JSON.stringify(data.user));
                toast.success("Login successful!");
                console.log("Login successful:", data);
                window.location.href = "/";
            } else {
                toast.error(data.message || "Login failed. Please try again.");
                console.error("Login failed:", data);
            }
            setEmail("");
            setPassword("");
        })
            .catch((error) => {
                toast.error("An error occurred during login. Please try again later.");
                console.error("Login error:", error);
            });

    }

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-3xl font-bold text-white">SignIn</h1>
                <p className="text-gray-300 font-semibold my-4">Please enter your credentials to SignIn</p>
                <form
                    onSubmit={handleLogin}
                    className="w-full max-w-md p-6 rounded-lg border border-gray-300">
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
                    <Button
                        type="submit"
                        className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-md transition-colors">
                        Login
                    </Button>
                    <Separator className="my-4" />
                    <p className="text-gray-400 text-sm">
                        You don't have an account?{" "}
                        <Link
                            href="/auth/register"
                            className="text-yellow-500 hover:text-yellow-600">
                            Register here
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Login;