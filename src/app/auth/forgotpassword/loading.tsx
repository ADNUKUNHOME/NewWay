'use client';

import { Skeleton } from "@/components/ui/skeleton";

export default function ForgotPasswordSkeleton() {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="w-full max-w-md p-6 rounded-lg border border-gray-300 mx-auto sm:mx-5 space-y-6">
                {/* Heading */}
                <Skeleton className="h-7 w-2/3 mx-auto rounded-md" />

                {/* Input field */}
                <Skeleton className="h-10 w-full rounded-md" />

                {/* Button */}
                <Skeleton className="h-10 w-full rounded-md" />

                {/* Divider */}
                <div className="flex items-center gap-2 my-4">
                    <Skeleton className="h-0.5 w-1/3 rounded-md" />
                    <Skeleton className="h-3 w-8 rounded-md" />
                    <Skeleton className="h-0.5 w-1/3 rounded-md" />
                </div>

                {/* Bottom text */}
                <Skeleton className="h-4 w-3/4 mx-auto rounded-md" />
            </div>
        </div>
    );
}
