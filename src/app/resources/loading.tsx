"use client";

import { Skeleton } from "@/components/ui/skeleton";

export default function ResourcesLoading() {
    return (
        <div className="p-6 mt-20">
            {/* Title */}
            <div className="flex flex-col items-center space-y-3 mb-6">
                <Skeleton className="h-8 w-48 rounded-md" />
                <Skeleton className="h-4 w-80 rounded-md" />
            </div>

            {/* AI Resources Section */}
            <div className="mb-12 space-y-4">
                <Skeleton className="h-6 w-40 mx-auto rounded-md" />
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {Array.from({ length: 3 }).map((_, i) => (
                        <div
                            key={i}
                            className="rounded-2xl border border-white/10 bg-gradient-to-br from-gray-900/60 to-gray-800/40 backdrop-blur-xl p-6 shadow-lg space-y-4"
                        >
                            <Skeleton className="h-6 w-32 rounded-md" />
                            <Skeleton className="h-4 w-full rounded-md" />
                            <Skeleton className="h-4 w-5/6 rounded-md" />
                            <Skeleton className="h-10 w-full rounded-xl mt-6" />
                        </div>
                    ))}
                </div>
            </div>

            {/* Explore More Section */}
            <div className="space-y-4">
                <Skeleton className="h-6 w-36 mx-auto rounded-md" />
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {Array.from({ length: 6 }).map((_, i) => (
                        <div
                            key={i}
                            className="rounded-2xl border border-white/10 bg-gradient-to-br from-gray-900/60 to-gray-800/40 backdrop-blur-xl p-6 shadow-lg space-y-4"
                        >
                            <Skeleton className="h-6 w-40 rounded-md" />
                            <Skeleton className="h-4 w-full rounded-md" />
                            <Skeleton className="h-4 w-5/6 rounded-md" />
                            <Skeleton className="h-10 w-full rounded-xl mt-6" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
