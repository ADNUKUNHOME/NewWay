'use client';

import { Skeleton } from "@/components/ui/skeleton";

export default function LoginSkeleton() {
    return (
        <div className="flex items-center justify-center min-h-screen mt-20">
            <div className="flex flex-col items-center justify-center w-full max-w-md p-6 rounded-lg border border-gray-300 space-y-4">
                {/* Heading */}
                <Skeleton className="h-8 w-32 mb-2 rounded-md" />

                {/* Subtitle */}
                <Skeleton className="h-5 w-3/4 rounded-md" />

                {/* Email field */}
                <div className="w-full space-y-2 mt-4">
                    <Skeleton className="h-4 w-16 rounded-md" /> {/* Label */}
                    <Skeleton className="h-10 w-full rounded-md" /> {/* Input */}
                </div>

                {/* Password field */}
                <div className="w-full space-y-2">
                    <Skeleton className="h-4 w-20 rounded-md" /> {/* Label */}
                    <Skeleton className="h-10 w-full rounded-md" /> {/* Input */}
                </div>

                {/* Forgot password link */}
                <Skeleton className="h-4 w-32 rounded-md self-start" />

                {/* Login button */}
                <Skeleton className="h-10 w-full rounded-md" />

                {/* Separator */}
                <div className="flex items-center gap-2 w-full">
                    <Skeleton className="h-0.5 w-1/3 rounded-md" />
                    <Skeleton className="h-3 w-8 rounded-md" />
                    <Skeleton className="h-0.5 w-1/3 rounded-md" />
                </div>

                {/* Bottom register text */}
                <Skeleton className="h-4 w-3/4 mx-auto rounded-md" />
            </div>
        </div>
    );
}
