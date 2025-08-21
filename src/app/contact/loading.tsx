'use client';

import { Skeleton } from "@/components/ui/skeleton";

export default function ContactSkeleton() {
    return (
        <section className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center px-6 py-16 mt-20">
            <div className="max-w-5xl w-full grid md:grid-cols-2 gap-12">
                {/* Left Section - Intro */}
                <div className="flex flex-col justify-center space-y-6">
                    <Skeleton className="h-10 w-3/4 rounded-md" /> {/* Heading line 1 */}
                    <Skeleton className="h-10 w-1/2 rounded-md" /> {/* Heading line 2 */}
                    <div className="space-y-2">
                        <Skeleton className="h-4 w-full rounded-md" />
                        <Skeleton className="h-4 w-5/6 rounded-md" />
                        <Skeleton className="h-4 w-2/3 rounded-md" />
                    </div>

                    <div className="mt-8 space-y-4">
                        <Skeleton className="h-5 w-2/3 rounded-md" />
                        <Skeleton className="h-5 w-1/2 rounded-md" />
                        <Skeleton className="h-5 w-1/3 rounded-md" />
                    </div>
                </div>

                {/* Right Section - Form */}
                <div className="bg-gray-800 p-8 rounded-2xl shadow-lg space-y-6">
                    {/* Name field */}
                    <div className="space-y-2">
                        <Skeleton className="h-4 w-12 rounded-md" /> {/* Label */}
                        <Skeleton className="h-10 w-full rounded-md" /> {/* Input */}
                    </div>

                    {/* Email field */}
                    <div className="space-y-2">
                        <Skeleton className="h-4 w-16 rounded-md" />
                        <Skeleton className="h-10 w-full rounded-md" />
                    </div>

                    {/* Message textarea */}
                    <div className="space-y-2">
                        <Skeleton className="h-4 w-20 rounded-md" />
                        <Skeleton className="h-24 w-full rounded-md" />
                    </div>

                    {/* Submit button */}
                    <Skeleton className="h-10 w-full rounded-md" />
                </div>
            </div>
        </section>
    );
}
