'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { ChevronRight } from "lucide-react";
import { ResetPassword, SendResetPasswordOTP } from "@/actions/auth/handleResetPassword";

const ForgotPassword = () => {
    const [step, setStep] = useState<"email" | "otp">("email");
    const [email, setEmail] = useState("");
    const [otp, setOtp] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSendOtp = async () => {
        if (!email) {
            toast.error("Please enter your email");
            return;
        }

        try {
            setLoading(true);
            const res = await SendResetPasswordOTP(email);

            const data = await res.json();
            if (data.success) {
                toast.success("OTP sent to your email!");
                setStep("otp");
            } else {
                toast.error(data.message || "Failed to send OTP");
            }
        } catch (err) {
            console.error(err);
            toast.error("Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    const handleResetPassword = async () => {
        if (!otp || !newPassword) {
            toast.error("Please enter OTP and new password");
            return;
        }

        if (newPassword.length < 8 || newPassword.length > 20) {
            toast.error("Password must be between 8 and 20 characters long");
            return;
        }

        try {
            setLoading(true);
            const res = await ResetPassword({ email, otp, newPassword });

            const data = await res.json();
            if (data.success) {
                toast.success("Password reset successfully!");
                window.location.href = "/auth/login";
            } else {
                toast.error(data.message || "Failed to reset password");
            }
        } catch (err) {
            console.error(err);
            toast.error("Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    return (
        <motion.div
            className="flex items-center justify-center min-h-screen"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
        >
            <div className="w-full max-w-md p-6 rounded-lg border border-gray-300 mx-auto sm:mx-5">
                {step === "email" ? (
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                    >
                        <h1 className="text-xl font-bold text-white mb-4">Forgot Password</h1>
                        <Input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="mb-4 text-white"
                        />
                        <Button className="w-full bg-yellow-500 hover:bg-yellow-700" onClick={handleSendOtp}>
                            {loading ? "OTP Sending..." : "Send OTP"}
                        </Button>
                    </motion.div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                    >
                        <h1 className="text-xl font-bold text-white mb-4">Reset Password</h1>

                        {/* OTP Input using shadcn */}
                        <InputOTP maxLength={6} value={otp} onChange={setOtp}>
                            <InputOTPGroup className="flex items-center justify-center gap-1 md:gap-2 w-full">
                                <Button
                                    className="bg-yellow-500 text-white text-xs md:text-base min-w-8 h-10 md:min-w-12 md:h-12 rounded-md"
                                >
                                    OTP<ChevronRight className="hidden md:flex" />
                                </Button>
                                {[...Array(6)].map((_, i) => (
                                    <InputOTPSlot
                                        key={i}
                                        index={i}
                                        className="w-10 h-10 md:w-12 md:h-12 rounded-md border border-gray-300 text-center text-lg text-white"
                                    />
                                ))}
                            </InputOTPGroup>
                        </InputOTP>



                        <Input
                            type="password"
                            placeholder="Enter new password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            className="mb-4 mt-7 text-white"
                        />
                        <Button className="w-full bg-yellow-500 hover:bg-yellow-700" onClick={handleResetPassword}>
                            {loading ? "Password Resetting..." : "Reset Password"}
                        </Button>
                    </motion.div>
                )}
                <Separator className="my-4" />
                <p className="text-gray-400 text-sm text-center">
                    Remembered your password?{" "}
                    <a href="/auth/login" className="text-yellow-500 hover:text-yellow-600">
                        Login
                    </a>
                </p>
            </div>
        </motion.div>
    );
};

export default ForgotPassword;
