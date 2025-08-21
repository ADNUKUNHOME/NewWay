'use client';

import { Skeleton } from "@/components/ui/skeleton";

export default function FirstStepSkeleton() {
    return (
        <div className="flex flex-col items-center gap-12 px-6 md:px-16 py-12 min-h-screen">
            {/* Title */}
            <Skeleton className="h-10 md:h-12 w-3/4 max-w-xl rounded-lg" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
                {/* Left guide section */}
                <div className="flex flex-col gap-4">
                    <Skeleton className="h-6 w-1/2 rounded-md" />
                    <Skeleton className="h-24 w-full rounded-xl" />
                    <Skeleton className="h-20 w-full rounded-xl" />
                    <Skeleton className="h-16 w-3/4 rounded-xl" />
                </div>

                {/* Right options section */}
                <div className="flex flex-col gap-6">
                    {/* Roadmap warning */}
                    <Skeleton className="h-20 w-full rounded-xl" />

                    {/* Upload Resume */}
                    <Skeleton className="h-28 w-full rounded-xl" />

                    {/* Divider */}
                    <div className="flex items-center gap-2 w-full">
                        <Skeleton className="h-0.5 w-1/2" />
                        <Skeleton className="h-4 w-6 rounded-md" />
                        <Skeleton className="h-0.5 w-1/2" />
                    </div>

                    {/* Fill Manually */}
                    <Skeleton className="h-28 w-full rounded-xl" />
                </div>
            </div>
        </div>
    );
}
