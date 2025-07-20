'use client';

import { handleRegisterApiCall } from "@/actions/auth/handleRegister";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!email || !password) {
            toast.error("Please fill in all fields");
            return;
        }

        handleRegisterApiCall(email, password).then((data) => {
            if (data.success) {
                toast.success("Registration successful!");
                console.log("Registration successful:", data);
                window.location.href = "/auth/login";
            } else {
                toast.error(data.message || "Registration failed. Plaese try again.");
                console.error("Registration failed:", data);
            }
        })
        setEmail("");
        setPassword("");
    };
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-3xl font-bold text-white">SignUp</h1>
                <p className="text-gray-300 font-semibold my-4">Please enter your credentials to SignUp</p>
                <form
                    onSubmit={handleRegister}
                    className="w-full max-w-md p-6 rounded-lg border border-gray-300">
                    <div className="mb-4">
                        <label className="block text-white mb-2" htmlFor="email">Email</label>
                        <Input
                            type="email"
                            id="email"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            className="w-full px-3 py-2 text-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-white mb-2" htmlFor="password">Password</label>
                        <Input
                            type="password"
                            id="password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            className="w-full px-3 py-2 text-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                            placeholder="Enter your password"
                        />
                    </div>

                    <Button
                        type="submit"
                        className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-md transition-colors">
                        SignUp
                    </Button>
                    <Separator className="my-4" />
                    <p className="text-gray-400 text-sm">
                        Already have an account?{" "}
                        <Link
                            href="/auth/login"
                            className="text-yellow-500 hover:text-yellow-600">
                            Login here
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Register;